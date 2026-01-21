# Projet de Qualité Logicielle
## Automatisation E2E avec Playwright, POM et BDD (Gherkin)

---

## 1. Contexte et objectifs du projet

Ce projet a été réalisé dans le cadre d’un enseignement de **qualité logicielle**.  
L’objectif était de concevoir une **suite de tests automatisés End-to-End (E2E)** sur un site web réel, en appliquant les bonnes pratiques vues en travaux pratiques.

### Objectifs pédagogiques
- Mettre en œuvre **Playwright** pour l’automatisation E2E  
- Structurer les tests avec le **Page Object Model (POM)**  
- Décrire les comportements avec le **BDD / Gherkin**  
- Utiliser des **mocks** pour isoler certains comportements  
- Produire une suite de tests **maintenable, lisible et reproductible**

---

## 2. Site web testé

- **Site** : SauceDemo  
- **URL** : https://www.saucedemo.com  

### Justification du choix
- Site public et stable  
- Parcours utilisateur complets (login, catalogue, panier, checkout)  
- Interactions variées : navigation, formulaires, tri, actions utilisateur  

---

## 3. Stack technique utilisée

- **Playwright** : automatisation des tests E2E  
- **TypeScript** : typage, sécurité et robustesse  
- **BDD / Gherkin** : description des comportements utilisateurs  
- **playwright-bdd** : génération des tests Playwright depuis les fichiers `.feature`  
- **Page Object Model (POM)** : structuration et maintenabilité du code  
- **Mocks réseau** : interception de requêtes avec `page.route`

---

## 4. Architecture du projet

```text
saucedemo-e2e/
├── tests/
│   ├── features/
│   ├── steps/
│   ├── pages/
│   └── mocks/
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## 5. Fonctionnalités testées (couverture)

### Navigation
- Login → catalogue  
- Catalogue → panier  
- Panier → retour catalogue  
- Navigation vers la page de détail produit  

### Interactions utilisateur
- Ajout et suppression de produits  
- Ajout depuis la page de détail produit  
- Vérification du compteur du panier  

### Formulaires
- Checkout valide  
- Validation des champs obligatoires (champs requis)  

### Filtres / tri
- Tri des produits par prix  
- Tri des produits par nom  

### Mocks
- Interception de la page `inventory.html`  
- Simulation d’un catalogue contrôlé  
- Possibilité de simuler des erreurs serveur  

---

## 6. Exemple de scénario BDD

```gherkin
@smoke
Scenario: Ajouter un produit au panier et finaliser l'achat
  Given je suis sur la page d'accueil
  When j'ajoute le produit "Backpack" au panier
  And je vais au panier
  Then je vois "Backpack" dans le panier
  When je complète le checkout avec des informations valides
  Then je vois la confirmation de commande
```

## 7. Utilisation des tags

Les scénarios sont tagués afin de structurer et cibler l’exécution des tests :

- **@smoke** : parcours critique permettant de vérifier rapidement les fonctionnalités essentielles  
- **@regression** : tests couvrant les principales fonctionnalités de l’application  
- **@validation** : tests dédiés aux règles métier et à la validation des formulaires  
- **@mock** : tests isolés utilisant des interceptions réseau  

---

## 8. Mocks et interceptions

Des interceptions réseau ont été mises en place avec Playwright afin de :

- Rendre les tests plus stables et prévisibles  
- Simuler des comportements spécifiques ou des cas d’erreur  
- Ne pas dépendre entièrement du site externe  

### Exemple
- Interception de la navigation vers la page `inventory.html`  
- Renvoi d’un HTML mocké et contrôlé  

Cette approche permet de tester des situations difficiles, voire impossibles à reproduire avec le site réel.

---

## 9. Difficultés rencontrées

- Configuration initiale de l’environnement (gestion des modules ESM, génération des tests BDD)  
- Choix et adaptation de la stratégie de mock en fonction des contraintes du site SauceDemo  

---

## 10. Améliorations possibles

- Ajout d’une pipeline CI/CD pour automatiser l’exécution des tests  
- Enrichissement des scénarios avec des cas d’erreurs plus avancés  

