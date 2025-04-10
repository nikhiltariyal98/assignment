import {test,expect} from '@playwright/test'

test('Valid Login and Logout', async ({page})=>
{
    const username = "input[autocomplete = 'username']";
    const save = 'svg[data-testid="SaveIcon"]';
    const multiTabs = '.MuiTabs-scroller .MuiTab-root'
    // Step 1: Log in
    await page.goto('https://demo.haroldwaste.com/');
    await page.fill(username, 'qa@julesai.com');
    await page.fill("input[autocomplete = 'current-password']", 'QaJULES2023!');
    await page.click('button[type="submit"] span');
    
    // Step 2: Validate user succesfully logged in
    await page.waitForSelector(save);
    await expect(page.locator(save)).toBeVisible();

    // Step 3: Navigate to different subsections and check if each loads 
    let tabs = await page.$$(multiTabs);
    for(let i =0;i<tabs.length;i++)
    {
        tabs = await page.$$(multiTabs);
        await tabs[i].click();
        await expect(page.locator(save)).toBeVisible();
    }
    // Step 4: Validate user successfully logged out
    await page.locator("[data-testid='ChevronRightIcon']").nth(0).click();  
    await page.click("[data-test-id='header-logout']");
    await page.waitForSelector(username)
    await expect(await page.locator(username)).toBeVisible();
  
    
})

