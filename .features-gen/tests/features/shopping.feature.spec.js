import { test } from "playwright-bdd";

test.describe('Parcours d\'achat', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('je suis sur la page d\'accueil', null, { page }); 
  });
  
  test('Ajouter un produit au panier et finaliser l\'achat', { tag: ['@smoke'] }, async ({ When, Then, And, page }) => { 
    await When('j\'ajoute le produit "Backpack" au panier', null, { page }); 
    await And('je vais au panier', null, { page }); 
    await Then('je vois "Backpack" dans le panier', null, { page }); 
    await When('je complète le checkout avec des informations valides', null, { page }); 
    await Then('je vois la confirmation de commande', null, { page }); 
  });

  test('Supprimer un produit du panier', { tag: ['@regression'] }, async ({ When, Then, And, page }) => { 
    await When('j\'ajoute le produit "Backpack" au panier', null, { page }); 
    await And('je vais au panier', null, { page }); 
    await And('je supprime "Backpack" du panier', null, { page }); 
    await Then('le panier est vide', null, { page }); 
  });

  test.describe('Erreur checkout si champ manquant', () => {

    test('Example #1', { tag: ['@validation'] }, async ({ When, Then, And, page }) => { 
      await When('j\'ajoute le produit "Backpack" au panier', null, { page }); 
      await And('je vais au panier', null, { page }); 
      await And('je lance le checkout', null, { page }); 
      await And('je renseigne prénom "", nom "Doe", code postal "75000"', null, { page }); 
      await Then('je vois un message d\'erreur "First Name is required"', null, { page }); 
    });

    test('Example #2', { tag: ['@validation'] }, async ({ When, Then, And, page }) => { 
      await When('j\'ajoute le produit "Backpack" au panier', null, { page }); 
      await And('je vais au panier', null, { page }); 
      await And('je lance le checkout', null, { page }); 
      await And('je renseigne prénom "John", nom "", code postal "75000"', null, { page }); 
      await Then('je vois un message d\'erreur "Last Name is required"', null, { page }); 
    });

    test('Example #3', { tag: ['@validation'] }, async ({ When, Then, And, page }) => { 
      await When('j\'ajoute le produit "Backpack" au panier', null, { page }); 
      await And('je vais au panier', null, { page }); 
      await And('je lance le checkout', null, { page }); 
      await And('je renseigne prénom "John", nom "Doe", code postal ""', null, { page }); 
      await Then('je vois un message d\'erreur "Postal Code is required"', null, { page }); 
    });

  });

});


test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\shopping.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ 
  {"pwTestLine":10,"pickleLine":7,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given je suis sur la page d'accueil","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When j'ajoute le produit \"Backpack\" au panier","stepMatchArguments":[{"group":{"start":20,"value":"\"Backpack\"","children":[{"start":21,"value":"Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And je vais au panier","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then je vois \"Backpack\" dans le panier","stepMatchArguments":[{"group":{"start":8,"value":"\"Backpack\"","children":[{"start":9,"value":"Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When je complète le checkout avec des informations valides","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then je vois la confirmation de commande","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":15,"tags":["@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given je suis sur la page d'accueil","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When j'ajoute le produit \"Backpack\" au panier","stepMatchArguments":[{"group":{"start":20,"value":"\"Backpack\"","children":[{"start":21,"value":"Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And je vais au panier","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And je supprime \"Backpack\" du panier","stepMatchArguments":[{"group":{"start":12,"value":"\"Backpack\"","children":[{"start":13,"value":"Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then le panier est vide","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":31,"tags":["@validation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given je suis sur la page d'accueil","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When j'ajoute le produit \"Backpack\" au panier","stepMatchArguments":[{"group":{"start":20,"value":"\"Backpack\"","children":[{"start":21,"value":"Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And je vais au panier","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"And je lance le checkout","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"And je renseigne prénom \"\", nom \"Doe\", code postal \"75000\"","stepMatchArguments":[{"group":{"start":20,"value":"\"\"","children":[{"start":21,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"Doe\"","children":[{"start":29,"value":"Doe","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"\"75000\"","children":[{"start":48,"value":"75000","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then je vois un message d'erreur \"First Name is required\"","stepMatchArguments":[{"group":{"start":28,"value":"\"First Name is required\"","children":[{"start":29,"value":"First Name is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":35,"pickleLine":32,"tags":["@validation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given je suis sur la page d'accueil","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When j'ajoute le produit \"Backpack\" au panier","stepMatchArguments":[{"group":{"start":20,"value":"\"Backpack\"","children":[{"start":21,"value":"Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And je vais au panier","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"And je lance le checkout","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"And je renseigne prénom \"John\", nom \"\", code postal \"75000\"","stepMatchArguments":[{"group":{"start":20,"value":"\"John\"","children":[{"start":21,"value":"John","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":32,"value":"\"\"","children":[{"start":33,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"75000\"","children":[{"start":49,"value":"75000","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then je vois un message d'erreur \"Last Name is required\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Last Name is required\"","children":[{"start":29,"value":"Last Name is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":43,"pickleLine":33,"tags":["@validation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given je suis sur la page d'accueil","isBg":true,"stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When j'ajoute le produit \"Backpack\" au panier","stepMatchArguments":[{"group":{"start":20,"value":"\"Backpack\"","children":[{"start":21,"value":"Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":45,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And je vais au panier","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"And je lance le checkout","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"And je renseigne prénom \"John\", nom \"Doe\", code postal \"\"","stepMatchArguments":[{"group":{"start":20,"value":"\"John\"","children":[{"start":21,"value":"John","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":32,"value":"\"Doe\"","children":[{"start":33,"value":"Doe","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":51,"value":"\"\"","children":[{"start":52,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":48,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then je vois un message d'erreur \"Postal Code is required\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Postal Code is required\"","children":[{"start":29,"value":"Postal Code is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; 