Feature: Parcours d'achat

  Background:
    Given je suis sur la page d'accueil

  @smoke
  Scenario: Ajouter un produit au panier et finaliser l'achat
    When j'ajoute le produit "Backpack" au panier
    And je vais au panier
    Then je vois "Backpack" dans le panier
    When je complète le checkout avec des informations valides
    Then je vois la confirmation de commande

  @regression
  Scenario: Supprimer un produit du panier
    When j'ajoute le produit "Backpack" au panier
    And je vais au panier
    And je supprime "Backpack" du panier
    Then le panier est vide

  @validation
  Scenario Outline: Erreur checkout si champ manquant
    When j'ajoute le produit "Backpack" au panier
    And je vais au panier
    And je lance le checkout
    And je renseigne prénom "<prenom>", nom "<nom>", code postal "<cp>"
    Then je vois un message d'erreur "<message>"

    Examples:
      | prenom | nom   | cp    | message                 |
      |       | Doe   | 75000 | First Name is required |
      | John  |       | 75000 | Last Name is required  |
      | John  | Doe   |       | Postal Code is required|
