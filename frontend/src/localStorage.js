// src/localStorage.js

/**
 * Loads the persisted state from localStorage.
 * Returns undefined if no state is found or if an error occurs,
 * allowing the reducer's initial state to be used instead.
 * @returns {Object|undefined} The loaded state or undefined.
 */
// src/localStorage.js

export const loadState = () => {
  try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
          return undefined;
      }
      return JSON.parse(serializedState);
  } catch (err) {
      console.error("Failed to load state from localStorage:", err);
      return undefined;
  }
};


/**
 * Saves the provided state to localStorage. Catches and logs any errors
 * that occur to avoid crashing the application.
 * @param {Object} state - The state object to be saved.
 */
export const saveState = (state) => {
  try {
    // Serialize the state object into a JSON string
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Log any errors during state saving for debugging
    console.error("Failed to save state to localStorage:", err);
  }
};
