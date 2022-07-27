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

  test.describe(version + ': Divide', () => { 
    test('Divide 100 by 3.2 should return 31.25', async ({ page }) => { 
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('100');
      await page.locator('#number2Field').type('3.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField'), 'Divide 100 by 3.2 should return 31.25').toHaveValue('31.25');
    });
  });

});