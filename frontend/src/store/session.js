import { csrfFetch } from './csrf';
import { setCartItems, resetCart } from './cartSlice';
import { loadState } from '../localStorage';


const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER
});

export const storeCSRFToken = response => {
  const csrfToken = response.headers.get("X-CSRF-Token");
  if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
};

export const restoreSession = () => async (dispatch) => {
  const response = await csrfFetch("/api/session");
  const data = await response.json();
  dispatch(setUser(data.user));

  // Similar logic as login
  const persistedState = loadState();
  if (persistedState && persistedState.cart) {
    dispatch(setCartItems(persistedState.cart));
  }

  return response;
};
export const login = ({ credential, password }) => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({ credential, password })
  });
  const data = await response.json();
  dispatch(setUser(data.user));

  // Load cart from local storage upon login
  const persistedState = loadState();
  if (persistedState && persistedState.cart) {
    dispatch(setCartItems(persistedState.cart));
  }

  return response;
};

export const signup = (user) => async (dispatch) => {
  const { name, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({user:{
      name,
      email,
      password
    }})
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE"
  });
  dispatch(removeUser());
  dispatch(resetCart()); 
  
  // Optionally clear the Redux cart state
  // dispatch(resetCart());

  return response;
};

const initialState = { user: null };

function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case REMOVE_USER:
      return { ...state, user: null };
    default:
      return state;
  }
}

export default sessionReducer;
