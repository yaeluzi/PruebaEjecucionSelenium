const { Builder, By, Key, until } = require('selenium-webdriver');

async function loginUsuario1Test() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get("https://www.ikea.com.do/es/client");
        await driver.manage().window().setRect({ width: 1280, height: 719 });

        await driver.findElement(By.name("email")).click();
        await driver.findElement(By.name("email")).sendKeys("yaelfriasjimenez@gmail.com");
        await driver.findElement(By.name("password")).click();
        await driver.findElement(By.name("password")).sendKeys("PruebaEjecucion1#");
        await driver.findElement(By.css(".btn--large")).click();

        const element = await driver.findElement(By.css("#account-user-menu .nav-item:nth-child(2) > .section-title"));
        const elementText = await element.getText();
        
        if (elementText === "COMPRAS") {
            console.log('Prueba Exitosa: El texto coincide con "COMPRAS"');
        } else {
            console.error('Prueba Fallida: El texto no coincide con "COMPRAS"');
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await driver.quit();
    }
}

loginUsuario1Test();
