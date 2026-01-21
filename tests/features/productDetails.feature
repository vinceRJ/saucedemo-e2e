Feature: Détail produit

  Background:
    Given je suis sur la page d'accueil

  @smoke
  Scenario: Ajouter au panier depuis la page détail produit
    When j'ouvre le détail du produit "Backpack"
    And j'ajoute le produit au panier depuis le détail
    Then le compteur du panier affiche "1"
