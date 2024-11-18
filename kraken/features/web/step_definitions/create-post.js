const { Given, When, Then } = require("@cucumber/cucumber");
const LoginPage = require("../../../pages/loginPage");
const PostPage = require("../../../pages/postPage");
const AddPostContent = require("../../../pages/addPostContent");

Given(
  "el usuario está en la página de inicio de sesión {kraken-string}",
  async function (url) {
    //await this.driver.setWindowSize(1280, 720);
    this.loginPage = new LoginPage(this.driver);
    await this.driver.url(url);
  }
);

When(
  "el usuario inicia sesión {kraken-string} {kraken-string}",
  async function (email, password) {
    await this.loginPage.login(email, password);
  }
);

When(
  "el usuario navega a la sección de posts y crea un nuevo post",
  async function () {
    this.postPage = new PostPage(this.driver);
    await this.postPage.navigateToPosts();
    await this.postPage.createNewPost();
  }
);

When(
  "el usuario navega a la sección de posts",
  async function () {
    this.postPage = new PostPage(this.driver);
    await this.postPage.navigateToPosts();
  }
);

When("el usuario agrega un título al post {string}", async function (key) {
  const postTitle = await this.postPage.generateTitlePost(`Pagina con ${key}`);
  await this.postPage.createTitlePost(postTitle);
});

When("el usuario agrega párrafos aleatorios al post", async function () {
  this.paragraphCount = await this.postPage.addRandomParagraphs();
});

When("el usuario publica el post", async function () {
  await this.postPage.publishPost();
});

When("el usuario publica el post ghost45", async function () {
  await this.postPage.publishPostGhost45();
});

const path = require("path");

When("el usuario carga imágenes en el post", async function () {
  this.addPostContent = new AddPostContent(this.driver);

  const precargadas = [
    "image_1.jpg",
    "image_2.jpg",
    "image_3.jpg",
    "image_4.jpg",
    "image_5.jpg",
    "image_6.jpg",
  ];

  const cantidadImagenes = Math.floor(Math.random() * 6) + 1;

  const imagenesSeleccionadas = [];
  while (imagenesSeleccionadas.length < cantidadImagenes) {
    const randomIndex = Math.floor(Math.random() * precargadas.length);
    const imagenSeleccionada = precargadas[randomIndex];
    if (!imagenesSeleccionadas.includes(imagenSeleccionada)) {
      imagenesSeleccionadas.push(imagenSeleccionada);
    }
  }

  for (let imageName of imagenesSeleccionadas) {
    const imagePath = path.resolve(__dirname, "../../../assets", imageName);
    await this.addPostContent.addImage(imagePath);
  }
});

When("el usuario carga imágenes en el post ghost45", async function () {
  this.addPostContent = new AddPostContent(this.driver);

  const precargadas = [
    "image_1.jpg",
    "image_2.jpg",
    "image_3.jpg",
    "image_4.jpg",
    "image_5.jpg",
    "image_6.jpg",
  ];

  const cantidadImagenes = Math.floor(Math.random() * 6) + 1;

  const imagenesSeleccionadas = [];
  while (imagenesSeleccionadas.length < cantidadImagenes) {
    const randomIndex = Math.floor(Math.random() * precargadas.length);
    const imagenSeleccionada = precargadas[randomIndex];
    if (!imagenesSeleccionadas.includes(imagenSeleccionada)) {
      imagenesSeleccionadas.push(imagenSeleccionada);
    }
  }

  for (let imageName of imagenesSeleccionadas) {
    const imagePath = path.resolve(__dirname, "../../../assets", imageName);
    await this.addPostContent.addImageGhost45(imagePath);
  }
});

When("el usuario crea un nuevo post con contenido HTML", async function () {
  this.addPostContent = new AddPostContent(this.driver);
  const htmlContent = "<p>¡Hola, Mundo!</p>";
  await this.addPostContent.addHTML(htmlContent);
});

When("el usuario crea un nuevo post con contenido HTML ghost45", async function () {
  this.addPostContent = new AddPostContent(this.driver);
  const htmlContent = "<p>¡Hola, Mundo!</p>";
  await this.addPostContent.addHTMLGhost45(htmlContent);
});

When(
  "el usuario agrega un video de YouTube a un nuevo post",
  async function () {
    this.addPostContent = new AddPostContent(this.driver);
    const youtubeUrl = "https://www.youtube.com/watch?v=HchmoMexFYk";
    await this.addPostContent.embedYouTube(youtubeUrl);
  }
);

When("el usuario añade un botón a un nuevo post", async function () {
  this.addPostContent = new AddPostContent(this.driver);
  const buttonText = "Soy un boton";
  await this.addPostContent.addCustomButton(buttonText);
});

Then("el usuario verifica que el post ha sido creado", async function () {
  const postPage = new PostPage(this.driver);
  const postTitle = await this.postPage.getPostTitle();
  return await postPage.findPostNameCreated(postTitle);
});
