import {test,expect} from '@playwright/test'
const fs = require('fs');

test('Invalid Login And Mandatory Field Check', async ({page})=>
{
    const loginData = JSON.parse(fs.readFileSync('/Users/parvesh/Desktop/Assignment/Tests/loginData.json','utf-8'));
    const userName = "input[autocomplete = 'username']";
    const login = 'button[type="submit"] span';
    const mandatoryMessage = "//*[text()='Required']";
    const passWord = "input[autocomplete = 'current-password']";
    for(const{email,password,expectedMessage} of loginData)
    {
        await page.goto('https://demo.haroldwaste.com/');
        
        // Step 1: check mandatory fields
        await page.fill(userName, email);
        await page.click(login);
        await expect(page.locator(mandatoryMessage)).toBeVisible();

        await page.reload();
        await page.fill(passWord,password);
        await page.click(login);
        await expect(page.locator(mandatoryMessage)).toBeVisible();

        // Step 2: InValid Log in
      
        await page.fill(userName, email);
        await page.fill(passWord, password);

        // Step 3: Validate error message
        page.on('dialog', async(dialog)=>
        {
            await expect(dialog.message()).toBe(expectedMessage);
        })

        await page.click(login);
    }
})