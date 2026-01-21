import { test } from "playwright-bdd";

test.describe('Tri des produits', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('je suis sur la page d\'accueil', null, { page }); 
  });
  
  test('Trier par prix croissant', { tag: ['@regression'] }, async ({ When, Then, page }) => { 
    await When('je trie les produits par "Price (low to high)"', null, { page }); 
    await Then('le premier produit affiché a un prix inférieur ou égal au second', null, { page }); 
  });

  test('Trier par nom Z à A', { tag: ['@regression'] }, async ({ When, Then, page }) => { 
    await When('je trie les produits par "Name (Z to A)"', null, { page }); 
    await Then('le premier produit commence par une lettre plus grande ou égale au second', null, { page }); 
  });

});


test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\sort.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ 
  {"pwTestLine":10,"pickleLine":7,"tags":["@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given je suis sur la page d'accueil","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When je trie les produits par \"Price (low to high)\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Price (low to high)\"","children":[{"start":26,"value":"Price (low to high)","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then le premier produit affiché a un prix inférieur ou égal au second","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":12,"tags":["@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given je suis sur la page d'accueil","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When je trie les produits par \"Name (Z to A)\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Name (Z to A)\"","children":[{"start":26,"value":"Name (Z to A)","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then le premier produit commence par une lettre plus grande ou égale au second","stepMatchArguments":[]}]},
]; 