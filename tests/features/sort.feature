Feature: Tri des produits

  Background:
    Given je suis sur la page d'accueil

  @regression
  Scenario: Trier par prix croissant
    When je trie les produits par "Price (low to high)"
    Then le premier produit affiché a un prix inférieur ou égal au second

  @regression
  Scenario: Trier par nom Z à A
    When je trie les produits par "Name (Z to A)"
    Then le premier produit commence par une lettre plus grande ou égale au second
