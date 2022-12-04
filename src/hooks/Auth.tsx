import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosAuthApiInstance from '../api/AuthInstance';

import {Text} from 'react-native';
interface User {
  id: string;
  name: string;
  email: string;
}
interface AuthState {
  user: User;
  token: string;
  refreshToken: any;
}
interface SingnInProps {
  email: string;
  password: string;
}
interface AuthContextData {
  user: User;
  loading: boolean;
  signIn(props: SingnInProps): Promise<void>;
  signOut(): void;
  updateUser(user: User): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = () => {
  const [data, setData] = useState<AuthState>({} as AuthState);
};
