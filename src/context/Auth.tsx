//ref: https://qiita.com/y-shida1997/items/f5e52c7288813a8184ff#authtsx%E3%81%A7context%E3%81%AE%E4%BD%9C%E6%88%90

import React, { createContext, useEffect, useState } from 'react';

import firebase from '../utils/firebase';

type AuthContextProps = {
  currentUser: firebase.User | null | undefined
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined });

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null | undefined>(
    undefined
  );

  useEffect(() => {
    // ログイン状態が変化するとfirebaseのauthメソッドを呼び出す
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    })
  }, []);

  /* 下階層のコンポーネントをラップする */
  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }