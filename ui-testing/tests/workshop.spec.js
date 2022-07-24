const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../pages/SearchPage');
const { SearchResultsPage } = require('../pages/SearchResultsPage');

test.describe('Search Results', () => {
   /* test('First result should contain devbrige.com', async({ page }) => {
        await page.goto('https://duckduckgo.com/');
        await page.locator('input[name=q]').fill('devbridge');
        await page.keyboard.press('Enter');

        let hrefAttribute = await page.locator('#r1-0 h2 a').getAttribute('href');

        await expect(hrefAttribute).toContain('devbridge.com');
    });
    
    test('Third result should contain linkedin.com', async({ page }) => {
        await page.goto('https://duckduckgo.com/');
        await page.locator('input[name=q]').fill('devbridge');
        await page.keyboard.press('Enter');

        let index = 2;
        let hrefAttribute = await page.locator('#r1-${index} h2 a').getAttribute('href');

        await expect(hrefAttribute).toContain('linkedin.com');
        await page.pause();
    });
    */

    test('First result should contain devbridge.com', async ({ page }) => {
        let searchPage = new SearchPage(page);
        await searchPage.navigate();
        await searchPage.search('devbridge');

        let searchResultsPage = new SearchResultsPage(page);
        expect(await searchResultsPage.getQueryInputText()).toEqual('devbridge');
        expect(await searchResultsPage.getResultHeadingHrefAttribute(0)).toContain('devbridge.com');
    });

    // test('Third result should contain linkedin.com', async ({ page }) => {
    //     let searchPage = new SearchPage(page);
    //     await searchPage.navigate();
    //     await searchPage.search('devbridge');

    //     let searchResultsPage = new SearchResultsPage(page);
    //     expect(await searchResultsPage.getResultHeadingHrefAttribute(2)).toContain('linkedin.com');
    // });
/*
    test('Search query should get populated in Search Result page', async ({ page }) => {
        let searchPage = new SearchPage(page);
        await searchPage.navigate();
        await searchPage.search('devbridge');

        let searchResultsPage = new SearchResultsPage(page);
        expect(await searchResultsPage.getQueryInputText()).toEqual('devbridge');
    });
*/
});