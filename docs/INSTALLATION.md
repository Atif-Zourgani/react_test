# Installation et Configuration

## Prérequis
- Node.js 
- npm 

## Installation des Dépendances de Test

Installez les dépendances nécessaires pour les tests :
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

## Configuration de Jest

1. Ajoutez la configuration suivante dans votre `package.json` :
```json
{
  "jest": {
    "setupFilesAfterEnv": ["<rootDir>/src/setupTests.js"]
  }
}
```

2. Créez un fichier `src/setupTests.js` avec le contenu suivant :
```javascript
import '@testing-library/jest-dom';
```

## Structure des Fichiers de Test

1. Créez un fichier de test pour chaque composant :
   - Le fichier doit avoir le même nom que le composant suivi de `.test.js`
   - Exemple : `TodoItem.test.js` pour tester le composant `TodoItem.js`

2. Structure de base d'un fichier de test :
```javascript
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MonComposant from './MonComposant';

test('description du test', () => {
  // Code du test
});
```

## Lancement des Tests

1. Pour lancer tous les tests :
```bash
npm test
```

2. Pour lancer les tests en mode watch (les tests se relancent automatiquement quand vous modifiez le code) :
```bash
npm test -- --watch
```

3. Pour lancer les tests avec couverture de code :
```bash
npm test -- --coverage
``` 