// @ts-check
const { test, expect } = require('@playwright/test');

const data = [
  'Prototype',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
]


data.forEach(version => {

  test.describe(version + ': Subtract', () => { 
    test('9 surtract from 15.6 should return 6.6', async ({ page }) => { 
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('15.6');
      await page.locator('#number2Field').type('9');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField'), '9 subtract from 15.6 should return 6.6.').toHaveValue('6.6');
    });
  });

});