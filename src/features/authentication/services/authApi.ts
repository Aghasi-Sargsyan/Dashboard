import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { login, logout, selectUser } from 'features/authentication/services';
import { RootState } from '@/store/types';
import { LoginRequest, UserResponse } from 'features/authentication/models';
import { mockUser } from 'features/authentication/mock';
import { LS_TOKEN_KEY } from '@/constants/storage';
import { API_ENDPOINTS } from '@/constants/api';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
    prepareHeaders: (headers, { getState }) => {
      const user = selectUser(getState() as RootState);
      if (user?.token) {
        headers.set('Authorization', `Bearer ${user.token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => {
    return {
      login: builder.mutation<UserResponse, LoginRequest>({
        query: (credentials) => ({
          url: API_ENDPOINTS.auth.login,
          method: 'POST',
          body: credentials,
        }),
        onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
          try {
            const { data } = await queryFulfilled;
            dispatch(login(data));
          } catch (error) {
            // because there is no such endpoint, im passing mock data in the catch
            dispatch(login(mockUser));
            console.log(error);
          }
        },
      }),
      getUser: builder.query<UserResponse, void>({
        query: () => API_ENDPOINTS.auth.user,
        onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
          try {
            const { data } = await queryFulfilled;
            dispatch(login(data));
            dispatch(logout());
          } catch (error) {
            // because there is no such endpoint, im passing mock data in the catch
            const token = localStorage.getItem(LS_TOKEN_KEY);
            if (token) {
              dispatch(login(mockUser));
            }
          }
        },
      }),
    };
  },
});

export const { useLoginMutation, useLazyGetUserQuery } = authApi;
