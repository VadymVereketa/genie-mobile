import type {ReactNode} from 'react';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {Appearance} from 'react-native';

import {useAppSelector} from '../redux/hooks';
import {UserSelector} from '../redux/slices/userSlice';
import instance from '../services/service/instance';
import {darkTheme} from '../themes/dark';
import {lightTheme} from '../themes/light';
import type {Theme} from '../typings/Theme';

type AxiosContext = {};

const AxiosContext = createContext<AxiosContext>(
  undefined as unknown as AxiosContext,
);

type Props = {
  children: ReactNode;
};

export const AxiosProvider = ({children}: Props) => {
  const token = useAppSelector(UserSelector.getTokenId);

  useEffect(() => {
    instance.interceptors.request.use(
      function (config) {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      },
    );
  }, [token]);

  return (
    <AxiosContext.Provider value={undefined}>{children}</AxiosContext.Provider>
  );
};
