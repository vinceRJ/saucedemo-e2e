Feature: Mocks réseau

  @mock
  Scenario: Catalogue mocké (HTML remplacé)
    Given le catalogue est mocké
    When je vais sur la page des produits
    Then je vois le titre "CATALOGUE MOCKÉ"
