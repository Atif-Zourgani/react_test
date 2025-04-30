# Application Todo avec Tests

Une application Todo simple avec des tests unitaires et des tests de composants.

## Structure du Projet

```
src/
  ├── components/
  │   ├── TodoItem.js      # Composant d'une tâche
  │   ├── TodoItem.css     # Styles du composant
  │   └── TodoItem.test.js # Tests du composant
  ├── utils/
  │   ├── todoUtils.js      # Fonctions utilitaires
  │   └── todoUtils.test.js # Tests des utilitaires
  └── App.js               # Composant principal
```

## Tests

### Tests de Composants

Les tests de composants vérifient le comportement des composants React :

```bash
npm test -- --filter="TodoItem"
```

### Tests Unitaires

Les tests unitaires vérifient les fonctions utilitaires :

```bash
npm test -- --filter="todoUtils"
```

## Installation

```bash
npm install
npm start
```
