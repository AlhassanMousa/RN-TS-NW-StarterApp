import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from '../pages/Login/Index';
import Home from '../pages/Home/Index';

const Routes: React.FC = () => {
  const [checkUser, setCheckUser] = useState();

  const firstTime = async () => {
    let user = await AsyncStorage.getItem('user');
    setCheckUser(user);
  };

  useEffect(() => {
    firstTime();
  }, []);

  if (checkUser == null) {
    return <Login />;
  } else {
    return <Home />;
  }
};

export default Routes;
