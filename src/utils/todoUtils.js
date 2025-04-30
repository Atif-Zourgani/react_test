/**
 * Fonction utilitaire pour filtrer les tâches
 * @param {Array} todos - Liste des tâches
 * @param {string} filter - Type de filtre ('all', 'active', 'completed')
 * @returns {Array} - Liste filtrée des tâches
 */
export const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

/**
 * Fonction utilitaire pour trier les tâches
 * @param {Array} todos - Liste des tâches
 * @param {string} sortBy - Critère de tri ('date', 'text')
 * @returns {Array} - Liste triée des tâches
 */
export const sortTodos = (todos, sortBy) => {
  const sortedTodos = [...todos];
  switch (sortBy) {
    case 'date':
      return sortedTodos.sort((a, b) => b.createdAt - a.createdAt);
    case 'text':
      return sortedTodos.sort((a, b) => a.text.localeCompare(b.text));
    default:
      return sortedTodos;
  }
};

/**
 * Fonction utilitaire pour valider une nouvelle tâche
 * @param {string} text - Texte de la tâche
 * @returns {Object} - Objet contenant isValid et errorMessage
 */
export const validateTodo = (text) => {
  if (!text.trim()) {
    return {
      isValid: false,
      errorMessage: 'Le texte de la tâche ne peut pas être vide'
    };
  }
  if (text.length > 100) {
    return {
      isValid: false,
      errorMessage: 'Le texte de la tâche ne peut pas dépasser 100 caractères'
    };
  }
  return {
    isValid: true,
    errorMessage: ''
  };
}; 