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

  test.describe(version + ': Multiply', () => { 
    test('Multiply 25 and 1.5 should return 37.5', async ({ page }) => { 
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('25');
      await page.locator('#number2Field').type('1.5');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});

//      await expect(page.locator('#number2Field'), '"number2Field" button is hidden.').not.toBeHidden();
      await expect(page.locator('#calculateButton'), '"Calculate" button is hidden.').not.toBeHidden();
//      await expect(page.locator('#calculateButton'), '"Calculate" button is disabled.').not.toBeDisabled();

      await page.locator('#calculateButton').click();

      await expect(page.locator('#integerSelect'), '"Integers only" check box should not be checked.').not.toBeChecked();
      await expect(page.locator('#numberAnswerField'), 'Multiply 25 and 1.5 should return 37.5').toHaveValue('37.5');
    });
  });

});