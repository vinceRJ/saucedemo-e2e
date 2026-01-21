import { test } from "playwright-bdd";

test.describe('Mocks réseau', () => {

  test('Catalogue mocké', { tag: ['@mock'] }, async ({ Given, When, Then, page }) => { 
    await Given('le catalogue est mocké', null, { page }); 
    await When('je vais sur la page des produits', null, { page }); 
    await Then('je vois le titre "CATALOGUE MOCKÉ"', null, { page }); 
  });

});


test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\mocks.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ 
  {"pwTestLine":6,"pickleLine":4,"tags":["@mock"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given le catalogue est mocké","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When je vais sur la page des produits","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then je vois le titre \"CATALOGUE MOCKÉ\"","stepMatchArguments":[{"group":{"start":17,"value":"\"CATALOGUE MOCKÉ\"","children":[{"start":18,"value":"CATALOGUE MOCKÉ","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
];