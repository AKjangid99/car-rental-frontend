import { atom } from 'recoil';

export const userState = atom({
    key: 'userState',
    default: {
        isAuthenticated: false,
        role: null, // 'owner' or 'user'
        token: null,
        details: null,
    },
});