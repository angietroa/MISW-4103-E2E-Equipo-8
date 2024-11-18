const { When } = require("@cucumber/cucumber");
const fs = require('fs');

When("I want to take screenshot {kraken-string} {kraken-string} {kraken-string}", async function (abp, escenario, paso) {
  try {
    await this.driver.setWindowSize(1920,1080);
    await this.driver.pause(300);
    let settingsMenu = await this.driver.$(".settings-menu-container ");
    if (await settingsMenu.isExisting() && !settingsMenu.isDisplayed()) {
      await this.driver.execute((el) => {
        if (el) {
          el.style.display = "none"; // Usar el método remove del DOM
        }
      }, await settingsMenu); 
    }

    let directory = "screenshots/" + abp + "/" + escenario + "/";

    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }

    let screenshot = await this.driver.takeScreenshot();
    fs.writeFileSync(directory + paso + ".png", screenshot, 'base64');
  } catch(ex) {
    throw ex;
  }
});
