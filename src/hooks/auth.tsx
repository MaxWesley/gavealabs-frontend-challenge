import { useContext } from 'react';

import { AuthContext } from '../contexts/auth';

function useAuth() {
    const { user, signIn, signUp, signOutUser } = useContext(AuthContext);

    return {
        user,
        signIn,
        signUp,
        signOutUser
    };
}

export { useAuth };