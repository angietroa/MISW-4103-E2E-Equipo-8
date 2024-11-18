const { When } = require("@cucumber/cucumber");
const fs = require('fs');

When("I want to take screenshot {kraken-string} {kraken-string} {kraken-string}", async function (abp, escenario, paso) {
  try {
    await this.driver.setWindowSize(1920,1080);
    await this.driver.pause(300);
    
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
