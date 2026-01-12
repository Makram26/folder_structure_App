import React, {createContext, useMemo, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './authStack/authStack';
import StackNavigation from './stackNavigation/StackNavigation';

export const AuthContext = createContext({
  isAuthenticated: false,
  pendingEmail: null,
  signIn: () => {},
  signUp: () => {},
  verifyEmail: () => {},
  signOut: () => {},
});

const Routing = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pendingEmail, setPendingEmail] = useState(null);

  const authContext = useMemo(
    () => ({
      isAuthenticated,
      pendingEmail,
      signIn: () => setIsAuthenticated(true),
      signUp: email => {
        setPendingEmail(email || null);
        setIsAuthenticated(false);
      },
      verifyEmail: () => {
        setIsAuthenticated(true);
        setPendingEmail(null);
      },
      signOut: () => {
        setIsAuthenticated(false);
        setPendingEmail(null);
      },
    }),
    [isAuthenticated, pendingEmail],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {isAuthenticated ? <StackNavigation /> : <AuthStack />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Routing;
