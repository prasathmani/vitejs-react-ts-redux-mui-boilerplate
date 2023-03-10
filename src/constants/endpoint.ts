const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ENDPOINT = {
  TEST: `${API_BASE_URL}/test`,
} as const;

export const ROUTES = {
  APP_ROOT: '/',
  SIGNUP: '/signup',
  LOGIN: '/login',
} as const;

export default ENDPOINT;
