import fs from 'fs';
import {PNG} from 'pngjs';
import pixelmatch from 'pixelmatch';
import { es } from '@faker-js/faker';

const DIRECTORIO_GHOST_RC = "../screenshots/ghost_rc/";
const DIRECTORIO_GHOST_BASE = "../screenshots/ghost_base/";
const DIRECTORIO_REPORTE = "./reports/" + Intl.DateTimeFormat('en-CA',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(new Date()).replace(',','') + "/";

console.log("=== Generando reporte ===")
if (!fs.existsSync(DIRECTORIO_REPORTE)) {
    fs.mkdirSync(DIRECTORIO_REPORTE, { recursive: true });
}

class ReporteHTML {

    constructor(rutaReporte,escenario) {
        this.rutaReporte = rutaReporte;
        this.escenario = escenario;
        this.screenshots = new Array();
    }

    agregarScreenshot(screenshot, porcentajeDiferencia) {
        this.screenshots.push({
            screenshotName: screenshot.replace(".png", ""),
            screenshotBase: screenshot + "_base.png",
            screenshotRc: screenshot + "_rc.png",
            screenshotDiff: screenshot + "_diff.png",
            porcentajeDiferencia: porcentajeDiferencia.toFixed(2)
        })
    }

    publicar() {
        let codigo =
        `<html>
        <head>
        <title>Reporte VRT</title>
        </head>
        <body>
        <div style='display: grid; grid-template-columns: 300px 1fr'>
        <div>
            <h2>Reporte VRT</h2>
            <h3>ABP: Ghost</h3>
            <h3>Versión base: 4.5.0</h3>
            <h3>Versión rc: 5.98.1</h3>
            <h3>Escenarios:</h3>
            <ol style='list-style:disc'>
                <li><a href='../e001/index.html'>E001 - Crear post con solo textos</a></li>
                <li><a href='../e002/index.html'>E002 - Crear post con solo imágenes</a></li>
                <li><a href='../e003/index.html'>E003 - Crear post con HTML</a></li>
                <li><a href='../e007/index.html'>E007 - Crear página con markdown</a></li>
                <li><a href='../e009/index.html'>E009 - Crear página adjuntando un archivo</a></li>
                <li><a href='../e012/index.html'>E012 - Crear tag con nombre y demás atributos</a></li>
                <li><a href='../e013/index.html'>E013 - Crear tag con metadata</a></li>
                <li><a href='../e016/index.html'>E016 - Crear miembro con todos sus atributos</a></li>
                <li><a href='../e018/index.html'>E018 - Editar fecha de publicación de página</a></li>
                <li><a href='../e020/index.html'>E020 - Editar URL de la página</a></li>
            </ol>
        </div>
        <div>
        <h2 style='border-bottom:1px solid rgba(0,0,0,.1)'>Escenario: ${this.escenario}</h2>
        `;

        this.screenshots.sort((a, b) => {
            const numA = parseInt(a.screenshotName.split('.')[0]);
            const numB = parseInt(b.screenshotName.split('.')[0]);
            return numA - numB;
        });
        this.screenshots.forEach((s) => {
            codigo +=
            `
            <div>
                <h3>${s.screenshotName}</h3>
                <div style='display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px'>
                    <div>
                        <div>Screenshot versión base</div>
                        <img width="100%" src="${s.screenshotBase}" />
                    </div>
                    <div>
                        <div>Screenshot versión rc</div>
                        <img width="100%" src="${s.screenshotRc}" />
                    </div>
                    <div>
                        <div>Screenshot Diferencia (${s.porcentajeDiferencia}%)</div>
                        <img width="100%" src="${s.screenshotDiff}" />
                    </div>
                </div>
            </div>
            `;
        });

        codigo += "</div></div></body></html>";

        fs.writeFileSync(this.rutaReporte + this.escenario + "/index.html", codigo);
    }

}

const ESCENARIOS_BASE = fs.readdirSync(DIRECTORIO_GHOST_BASE);
ESCENARIOS_BASE.forEach((escenario) => {
    console.log("Procesando escenario:", escenario);

    const DIRECTORIO_ESCENARIO_REPORTE = DIRECTORIO_REPORTE + escenario + "/";
    if (!fs.existsSync(DIRECTORIO_ESCENARIO_REPORTE)) {
        fs.mkdirSync(DIRECTORIO_ESCENARIO_REPORTE, { recursive: true });
    }

    let reporteHTML = new ReporteHTML(DIRECTORIO_REPORTE, escenario);

    const SCREENSHOTS_BASE = fs.readdirSync(DIRECTORIO_GHOST_BASE + escenario);
    SCREENSHOTS_BASE.forEach((screenshot) => {
        const RUTA_SCREENSHOT_BASE = DIRECTORIO_GHOST_BASE + escenario + "/" + screenshot;
        const RUTA_SCREENSHOT_RC = DIRECTORIO_GHOST_RC + escenario + "/" + screenshot;

        const PNG_SCREENSHOT_BASE = PNG.sync.read(fs.readFileSync(RUTA_SCREENSHOT_BASE));
        const PNG_SCREENSHOT_RC = PNG.sync.read(fs.readFileSync(RUTA_SCREENSHOT_RC));

        // Asegurar que todos los screenshots tengan las dimensiones 1920*1080
        if (PNG_SCREENSHOT_BASE.width != 1920) {
            recortarImagen(RUTA_SCREENSHOT_BASE,RUTA_SCREENSHOT_BASE);
        }
        if (PNG_SCREENSHOT_RC.width != 1920) {
            recortarImagen(RUTA_SCREENSHOT_RC,RUTA_SCREENSHOT_RC);
        }

        fs.copyFileSync(RUTA_SCREENSHOT_BASE, DIRECTORIO_ESCENARIO_REPORTE + screenshot + "_base.png");
        fs.copyFileSync(RUTA_SCREENSHOT_RC, DIRECTORIO_ESCENARIO_REPORTE + screenshot + "_rc.png");

        const PNG_DIFF = new PNG({width:1920, height:1080});
        const PIXELMATCH = pixelmatch(PNG_SCREENSHOT_BASE.data, PNG_SCREENSHOT_RC.data, PNG_DIFF.data, 1920, 1080, {threshold: 0.3});

        const TOTAL_PIXELES = 1920*1080;
        const PORCENTAJE_DIFERENCIA = (PIXELMATCH / TOTAL_PIXELES) * 100;

        reporteHTML.agregarScreenshot(screenshot, PORCENTAJE_DIFERENCIA);

        fs.writeFileSync(DIRECTORIO_ESCENARIO_REPORTE + screenshot + "_diff.png", PNG.sync.write(PNG_DIFF));
    });

    reporteHTML.publicar();
});



function recortarImagen(inputPath, outputPath) {
    let x = 0;
    let y = 0;
    let width = 1920;
    let height = 1080;

    // Leer la imagen de entrada
    fs.createReadStream(inputPath)
        .pipe(new PNG())
        .on('parsed', function () {
            // Crear un nuevo PNG para la imagen recortada
            const recorte = new PNG({ width, height });

            // Copiar los píxeles de la región deseada
            for (let row = 0; row < height; row++) {
                for (let col = 0; col < width; col++) {
                    const idxOrigen = ((y + row) * this.width + (x + col)) * 4; // Índice en la imagen original
                    const idxDestino = (row * width + col) * 4; // Índice en la imagen recortada

                    // Copiar RGBA (4 bytes por píxel)
                    recorte.data[idxDestino] = this.data[idxOrigen];       // R
                    recorte.data[idxDestino + 1] = this.data[idxOrigen + 1]; // G
                    recorte.data[idxDestino + 2] = this.data[idxOrigen + 2]; // B
                    recorte.data[idxDestino + 3] = this.data[idxOrigen + 3]; // A
                }
            }

            // Guardar la imagen recortada
            recorte.pack().pipe(fs.createWriteStream(outputPath));
            //console.log(`Imagen recortada guardada en ${outputPath}`);
        })
        .on('error', (err) => {
            console.error('Error al recortar la imagen:', err);
        });
}
