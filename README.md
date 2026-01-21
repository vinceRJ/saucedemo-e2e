Projet de Qualité Logicielle
Automatisation E2E avec Playwright, POM et BDD (Gherkin)

1. Contexte et objectifs du projet

Ce projet a été réalisé dans le cadre d’un enseignement de qualité logicielle.
L’objectif était de concevoir une suite de tests automatisés End-to-End (E2E) sur un site web réel, en appliquant les bonnes pratiques vues en TP.

Objectifs pédagogiques :

Mettre en œuvre Playwright pour l’automatisation E2E
Structurer les tests avec le Page Object Model (POM)
Décrire les comportements avec le BDD / Gherkin
Utiliser des mocks pour isoler certains comportements
Produire une suite de tests maintenable, lisible et reproductible

2. Site web testé

Site : SauceDemo
URL : https://www.saucedemo.com
Pourquoi ce choix ?
Site public et stable
Parcours utilisateur complets (login, catalogue, panier, checkout)
Interactions variées (navigation, formulaires, tri, actions utilisateur)

3. Stack technique utilisée

Playwright : tests E2E
TypeScript : typage, sécurité et robustesse
BDD / Gherkin : description des comportements
Playwright-bdd : génération des tests Playwright depuis les .feature
Page Object Model (POM) : structuration et maintenabilité
Mocks réseau : interception de requêtes avec page.route

4. Architecture du projet

saucedemo-e2e/
    tests/
        features/        
        steps/           
        pages/           
        mocks/           
    playwright.config.ts
    package.json
    tsconfig.json
    README.md

5. Fonctionnalités testées (couverture)

--> Navigation

login → catalogue
catalogue → panier
panier → retour catalogue
navigation vers la page détail produit

--> Interactions utilisateur

ajout / suppression de produits
ajout depuis la page détail
compteur du panier

--> Formulaires

Checkout valide
Validations des champs obligatoires 

--> Filtres / tri

Tri par prix
Tri par nom

--> Mocks

Interception de inventory.html
Simulation d’un catalogue contrôlé
Possibilité de simuler des erreurs serveur


6. Exemple de scénario BDD

@smoke
Scenario: Ajouter un produit au panier et finaliser l'achat
  Given je suis sur la page d'accueil
  When j'ajoute le produit "Backpack" au panier
  And je vais au panier
  Then je vois "Backpack" dans le panier
  When je complète le checkout avec des informations valides
  Then je vois la confirmation de commande

.
7. Utilisation des tags

Les scénarios sont tagués pour structurer l’exécution :

@smoke : parcours critique
@regression : fonctionnalités principales
@validation : règles métier
@mock : tests isolés avec interceptions

8. Mocks et interceptions

Des interceptions réseau ont été mises en place avec Playwright afin de :

Rendre les tests plus stables
Simuler des comportements spécifiques
Ne pas dépendre entièrement du site externe

Exemple :

Interception de la navigation vers inventory.html
Renvoi d’un HTML mocké contrôlé

Cela permet de tester des cas difficiles ou impossibles à reproduire autrement.

DIFFICULTES RENCONTREES

Configuration initiale (ESM, génération BDD)
Choix de la stratégie de mock adaptée à SauceDemo

AMELIORATIONS POSSIBLES

Ajouter une pipeline CI/CD
Enrichir les scénarios d’erreurs avancées