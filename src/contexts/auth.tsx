import React, { createContext, useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { initializeApp } from 'firebase/app';

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from 'firebase/auth';
import { toast } from 'react-toastify';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY_FIREBASE,
    authDomain: "gavealabs.firebaseapp.com",
    projectId: "gavealabs",
    storageBucket: "gavealabs.appspot.com",
    messagingSenderId: "703613768592",
    appId: "1:703613768592:web:7ed59afba6e386bc2a5915",
    measurementId: "G-3M31VDVEPC"
};


initializeApp(firebaseConfig);

type iUser = {
    email: string;
    password: string;
    displayName: string;
}

interface ContextProps {
    user: iUser;
    signUp(email: string, password: string, name: string): void;
    signIn(email: string, password: string): void;
    signOutUser(): void;
}

const Context = createContext({} as ContextProps);

interface AuthProviderProps {
    children: React.ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState({} as any);

    const auth = getAuth();
    const router = useHistory();

    const listenAuth = (userState: any) => {
        setUser(userState)
    }

    const signUp = (email: string, password: string, name: string) => {
        const signUp_notify = toast.loading('Criando usuário ...');

        createUserWithEmailAndPassword(auth, email, password)
            .then(response => {
                updateProfile(response.user, {
                    displayName: name
                }).then(() => {
                    router.push('/login');
                    toast.update(signUp_notify, {
                        render: 'Usuário criado com sucesso!',
                        autoClose: 3000,
                        type: 'success',
                        isLoading: false
                    });
                }).catch(() => {
                    toast.update(signUp_notify, {
                        render: 'Conta criada mas não foi possível atualizar o nome.',
                        autoClose: 3000,
                        type: 'info',
                        isLoading: false
                    });
                });
            }).catch(() => {
                toast.update(signUp_notify, {
                    render: 'Não no servidor. Tente novamente ...',
                    autoClose: 3000,
                    type: 'error',
                    isLoading: false

                });
            });
    }

    const signIn = (email: string, password: string) => {
        const signIn_notify = toast.loading('Tentando conectar ...');

        signInWithEmailAndPassword(auth, email, password)
            .then(response => {
                toast.update(signIn_notify, {
                    render: 'Usuário logado!',
                    autoClose: 3000,
                    type: 'success',
                    isLoading: false
                });
                setUser(response.user);
                localStorage.setItem('isLogged', 'true');
                router.push('/dashboard');
            }).catch(() => {
                toast.update(signIn_notify, {
                    render: 'Email ou senha icorretos ...',
                    autoClose: 3000,
                    type: 'error',
                    isLoading: false
                });
            });
    }

    const signOutUser = () => {
        const signOut_notify = toast.loading('Deslogando ...');

        signOut(auth)
            .then(() => {
                toast.update(signOut_notify, {
                    render: 'Usuário deslogado!',
                    autoClose: 3000,
                    type: 'success',
                    isLoading: false
                });

                setUser(null);
                localStorage.setItem('isLogged', 'false');
            }).catch(() => {
                toast.update(signOut_notify, {
                    render: 'Não foi possível deslogar. Tente novamente.',
                    autoClose: 3000,
                    type: 'error',
                    isLoading: false
                });
            });
    }

    useEffect(() => {
        const listener = auth.onAuthStateChanged(listenAuth);

        return listener;
    }, [auth]);

    return (
        <Context.Provider value={{
            user,
            signIn,
            signUp,
            signOutUser
        }}>
            {children}
        </Context.Provider>
    );
}

export { AuthProvider, Context as AuthContext };