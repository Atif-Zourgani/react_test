import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoItem from './TodoItem';
import './TodoItem.css';

describe('TodoItem', () => {
  const mockProps = {
    text: 'Tâche de test',
    completed: false,
    onToggle: jest.fn(),
    onDelete: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('affiche correctement une tâche non complétée', () => {
    render(<TodoItem {...mockProps} />);
    
    // Vérification du texte
    expect(screen.getByText('Tâche de test')).toBeInTheDocument();
    
    // Vérification de la checkbox
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    
    // Vérification du style
    expect(screen.getByText('Tâche de test')).not.toHaveClass('completed');
    
    // Vérification des boutons
    expect(screen.getByText('Supprimer')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Masquer/ })).not.toBeInTheDocument();
  });

  test('affiche correctement une tâche complétée', () => {
    render(<TodoItem {...mockProps} completed={true} />);
    
    // Vérification de la checkbox
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
    
    // Vérification du style
    expect(screen.getByText('Tâche de test')).toHaveClass('completed');
    
    // Vérification du bouton de visibilité via aria-label
    expect(screen.getByRole('button', { name: /Masquer/ })).toBeInTheDocument();
  });

  test('gère le clic sur la checkbox', () => {
    render(<TodoItem {...mockProps} />);
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    
    expect(mockProps.onToggle).toHaveBeenCalledTimes(1);
  });

  test('gère le clic sur le bouton de suppression', () => {
    render(<TodoItem {...mockProps} />);
    
    const deleteButton = screen.getByText('Supprimer');
    fireEvent.click(deleteButton);
    
    expect(mockProps.onDelete).toHaveBeenCalledTimes(1);
  });

  test('gère le clic sur le bouton de visibilité', () => {
    render(<TodoItem {...mockProps} completed={true} />);
    
    const visibilityButton = screen.getByRole('button', { name: /Masquer/ });
    fireEvent.click(visibilityButton);
    // TODO: Ajouter la vérification de la fonction de visibilité une fois implémentée
  });

  test('applique les styles correctement', () => {
    const { rerender } = render(<TodoItem {...mockProps} />);
    
    // Vérification du style initial
    expect(screen.getByText('Tâche de test')).not.toHaveClass('completed');
    
    // Vérification après changement d'état
    rerender(<TodoItem {...mockProps} completed={true} />);
    expect(screen.getByText('Tâche de test')).toHaveClass('completed');
  });
}); 