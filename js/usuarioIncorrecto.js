const { Builder, By, Key, until } = require('selenium-webdriver');

async function loginIncorrectoTest() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get("https://www.ikea.com.do/es/client");
        await driver.manage().window().setRect({ width: 1280, height: 719 });

        await driver.findElement(By.name("email")).click();
        await driver.findElement(By.name("email")).sendKeys("yoelfriasjimenez@gmail.com");
        await driver.findElement(By.name("password")).click();
        await driver.findElement(By.name("password")).sendKeys("holaincorrecto");
        await driver.findElement(By.css(".btn--large")).click();

        const emailErrorMessage = await driver.findElement(By.css(".macroEmail-input-group > .message")).getText();
        const passwordErrorMessage = await driver.findElement(By.css(".form-group:nth-child(3) > .message")).getText();
        
        if (emailErrorMessage === "Correo electrónico o contraseña no válidos" && passwordErrorMessage === "Correo electrónico o contraseña no válidos") {
            console.log('Prueba Exitosa: Mensajes de error coinciden');
        } else {
            console.error('Prueba Fallida: Mensajes de error no coinciden');
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await driver.quit();
    }
}

loginIncorrectoTest();
