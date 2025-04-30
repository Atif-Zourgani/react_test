import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

/**
 * Test 1: Vérification de l'ajout d'une nouvelle tâche
 * 
 * Ce test vérifie que :
 * 1. L'utilisateur peut saisir du texte dans le champ de saisie
 * 2. En cliquant sur le bouton "Ajouter", la nouvelle tâche apparaît dans la liste
 * 
 * Étapes du test :
 * 1. Rendu du composant App
 * 2. Recherche du champ de saisie et du bouton
 * 3. Saisie d'une nouvelle tâche
 * 4. Clic sur le bouton d'ajout
 * 5. Vérification que la tâche apparaît dans la liste
 */
test('ajoute une nouvelle tâche à la liste', () => {
  // Rendu du composant App
  render(<App />);
  
  // Recherche des éléments dans le DOM
  const inputElement = screen.getByPlaceholderText('Ajouter une nouvelle tâche...');
  const buttonElement = screen.getByText('Ajouter');
  
  // Saisie d'une nouvelle tâche
  fireEvent.change(inputElement, { target: { value: 'Apprendre React' } });
  
  // Clic sur le bouton d'ajout
  fireEvent.click(buttonElement);
  
  // Vérification que la tâche a été ajoutée
  expect(screen.getByText('Apprendre React')).toBeInTheDocument();
});

/**
 * Test 2: Vérification de la suppression d'une tâche
 * 
 * Ce test vérifie que :
 * 1. Une tâche peut être supprimée de la liste
 * 2. La tâche n'apparaît plus dans le DOM après suppression
 * 
 * Étapes du test :
 * 1. Rendu du composant App
 * 2. Ajout d'une tâche de test
 * 3. Recherche du bouton de suppression
 * 4. Clic sur le bouton de suppression
 * 5. Vérification que la tâche a disparu
 */
test('supprime une tâche de la liste', () => {
  // Rendu du composant App
  render(<App />);
  
  // Ajout d'une tâche de test
  const inputElement = screen.getByPlaceholderText('Ajouter une nouvelle tâche...');
  const addButton = screen.getByText('Ajouter');
  fireEvent.change(inputElement, { target: { value: 'Tâche à supprimer' } });
  fireEvent.click(addButton);
  
  // Vérification que la tâche a été ajoutée
  expect(screen.getByText('Tâche à supprimer')).toBeInTheDocument();
  
  // Recherche et clic sur le bouton de suppression
  const deleteButton = screen.getByText('Supprimer');
  fireEvent.click(deleteButton);
  
  // Vérification que la tâche a été supprimée
  expect(screen.queryByText('Tâche à supprimer')).not.toBeInTheDocument();
}); 