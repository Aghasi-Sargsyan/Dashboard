export {
  default as authSlice,
  selectUser,
  selectIsAuthenticated,
  login,
  logout,
} from './authSlice';
export { useLoginMutation, useLazyGetUserQuery, authApi } from './authApi';
