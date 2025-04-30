/**
 * Tests unitaires pour les fonctions utilitaires de gestion des tâches
 * Ces tests vérifient le bon fonctionnement des fonctions de filtrage, tri et validation
 */

import { filterTodos, sortTodos, validateTodo } from './todoUtils';

/**
 * Tests pour la fonction filterTodos
 * Vérifie le filtrage des tâches selon leur statut (complétées, actives, toutes)
 */
describe('filterTodos', () => {
  // Données de test pour les tâches
  const mockTodos = [
    { id: 1, text: 'Tâche 1', completed: true },
    { id: 2, text: 'Tâche 2', completed: false },
    { id: 3, text: 'Tâche 3', completed: true }
  ];

  test('filtre les tâches complétées', () => {
    const filtered = filterTodos(mockTodos, 'completed');
    expect(filtered).toHaveLength(2);
    expect(filtered.every(todo => todo.completed)).toBe(true);
    expect(filtered.map(todo => todo.id)).toEqual([1, 3]);
  });

  test('filtre les tâches actives', () => {
    const filtered = filterTodos(mockTodos, 'active');
    expect(filtered).toHaveLength(1);
    expect(filtered.every(todo => !todo.completed)).toBe(true);
    expect(filtered[0].id).toBe(2);
  });

  test('retourne toutes les tâches quand le filtre est "all"', () => {
    const filtered = filterTodos(mockTodos, 'all');
    expect(filtered).toHaveLength(3);
    expect(filtered).toEqual(mockTodos);
  });

  test('gère un tableau vide', () => {
    const filtered = filterTodos([], 'completed');
    expect(filtered).toHaveLength(0);
  });

  test('gère un filtre invalide', () => {
    const filtered = filterTodos(mockTodos, 'invalid');
    expect(filtered).toEqual(mockTodos);
  });
});

/**
 * Tests pour la fonction sortTodos
 * Vérifie le tri des tâches selon différents critères (date, texte)
 */
describe('sortTodos', () => {
  // Données de test pour le tri
  const mockTodos = [
    { id: 1, text: 'Z', createdAt: 3 },
    { id: 2, text: 'A', createdAt: 1 },
    { id: 3, text: 'M', createdAt: 2 }
  ];

  test('trie les tâches par date (plus récent en premier)', () => {
    const sorted = sortTodos(mockTodos, 'date');
    expect(sorted.map(todo => todo.id)).toEqual([1, 3, 2]);
  });

  test('trie les tâches par texte (ordre alphabétique)', () => {
    const sorted = sortTodos(mockTodos, 'text');
    expect(sorted.map(todo => todo.id)).toEqual([2, 3, 1]);
  });

  test('gère un tableau vide', () => {
    const sorted = sortTodos([], 'date');
    expect(sorted).toHaveLength(0);
  });

  test('gère un critère de tri invalide', () => {
    const sorted = sortTodos(mockTodos, 'invalid');
    expect(sorted).toEqual(mockTodos);
  });
});

/**
 * Tests pour la fonction validateTodo
 * Vérifie la validation des textes de tâches selon différentes règles
 */
describe('validateTodo', () => {
  test('valide une tâche valide', () => {
    const result = validateTodo('Tâche valide');
    expect(result.isValid).toBe(true);
    expect(result.errorMessage).toBe('');
  });

  test('rejette une tâche vide', () => {
    const result = validateTodo('');
    expect(result.isValid).toBe(false);
    expect(result.errorMessage).toBe('Le texte de la tâche ne peut pas être vide');
  });

  test('rejette une tâche avec uniquement des espaces', () => {
    const result = validateTodo('   ');
    expect(result.isValid).toBe(false);
    expect(result.errorMessage).toBe('Le texte de la tâche ne peut pas être vide');
  });

  test('rejette une tâche trop longue', () => {
    const longText = 'a'.repeat(101);
    const result = validateTodo(longText);
    expect(result.isValid).toBe(false);
    expect(result.errorMessage).toBe('Le texte de la tâche ne peut pas dépasser 100 caractères');
  });

  test('valide une tâche à la limite de longueur', () => {
    const maxLengthText = 'a'.repeat(100);
    const result = validateTodo(maxLengthText);
    expect(result.isValid).toBe(true);
    expect(result.errorMessage).toBe('');
  });
}); 