export const TOKEN_KEY = "@osmanager-token";
export const ADMIN = "@osmanager-admin";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const isAdmin = () => localStorage.getItem(ADMIN) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token: any) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.clear();
};
