# Tests Unitaires

Les tests unitaires vérifient les fonctions utilitaires de l'application.

## Fonctions Testées

### filterTodos
Filtre les tâches selon leur statut :
```javascript
test('filtre les tâches complétées', () => {
  const filtered = filterTodos(mockTodos, 'completed');
  expect(filtered.every(todo => todo.completed)).toBe(true);
});
```

### sortTodos
Trie les tâches selon différents critères :
```javascript
test('trie les tâches par date', () => {
  const sorted = sortTodos(mockTodos, 'date');
  expect(sorted[0].createdAt).toBeGreaterThan(sorted[1].createdAt);
});
```

### validateTodo
Valide le texte d'une nouvelle tâche :
```javascript
test('rejette une tâche vide', () => {
  const result = validateTodo('');
  expect(result.isValid).toBe(false);
});
```

## Bonnes Pratiques

1. **Données de Test**
   - Utiliser des données mockées
   - Couvrir tous les cas d'utilisation
   - Être explicite dans les noms

2. **Assertions**
   - Vérifier les cas positifs et négatifs
   - Tester les limites
   - Être spécifique dans les messages d'erreur

3. **Organisation**
   - Un test par fonctionnalité
   - Regrouper les tests par fonction
   - Documenter les cas de test 