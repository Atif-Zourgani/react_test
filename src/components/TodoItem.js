import React from 'react';

/**
 * Composant TodoItem
 * Affiche une tâche individuelle avec la possibilité de la marquer comme complétée ou de la supprimer
 * 
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.text - Le texte de la tâche
 * @param {boolean} props.completed - État de complétion de la tâche
 * @param {Function} props.onToggle - Fonction appelée lors du clic sur la checkbox
 * @param {Function} props.onDelete - Fonction appelée lors du clic sur le bouton de suppression
 */
const TodoItem = ({ text, completed, onToggle, onDelete }) => {
  return (
    <li className="todo-item">
      <div className="todo-content">
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
          className="todo-checkbox"
          aria-label={`Marquer "${text}" comme ${completed ? 'non complétée' : 'complétée'}`}
        />
        <span
          className={`todo-text ${completed ? 'completed' : ''}`}
        >
          {text}
        </span>
      </div>
      <div className="todo-actions">
        {completed && (
          <button 
            className="visibility-button"
            onClick={() => {}}
            aria-label={`Masquer "${text}"`}
          >
            👁️
          </button>
        )}
        <button 
          onClick={onDelete}
          className="delete-button"
          aria-label={`Supprimer "${text}"`}
        >
          Supprimer
        </button>
      </div>
    </li>
  );
};

export default TodoItem; 