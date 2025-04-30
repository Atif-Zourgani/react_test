# Tests de Composants React

## TodoItem

Le composant `TodoItem` représente une tâche individuelle avec les fonctionnalités suivantes :
- Affichage du texte de la tâche
- Marquer comme complétée/non complétée
- Supprimer la tâche
- Masquer la tâche complétée

### Tests Implémentés

1. **Affichage d'une tâche**
   ```javascript
   test('affiche correctement une tâche non complétée', () => {
     render(<TodoItem text="Tâche test" completed={false} />);
     expect(screen.getByText('Tâche test')).toBeInTheDocument();
   });
   ```

2. **Interactions utilisateur**
   ```javascript
   test('gère le clic sur la checkbox', () => {
     const onToggle = jest.fn();
     render(<TodoItem onToggle={onToggle} />);
     fireEvent.click(screen.getByRole('checkbox'));
     expect(onToggle).toHaveBeenCalled();
   });
   ```

3. **Styles conditionnels**
   ```javascript
   test('applique le style barré pour une tâche complétée', () => {
     render(<TodoItem completed={true} />);
     expect(screen.getByText('Tâche test')).toHaveClass('completed');
   });
   ```

### Bonnes Pratiques

1. **Isolation**
   - Utiliser des mocks pour les props
   - Tester un composant à la fois
   - Éviter les dépendances externes

2. **Nommage**
   - Décrire le comportement testé
   - Utiliser des verbes d'action
   - Être spécifique

3. **Vérifications**
   - Tester le rendu initial
   - Tester les interactions
   - Tester les styles 