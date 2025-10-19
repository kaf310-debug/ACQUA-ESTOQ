import React, { useState, useEffect } from 'react';
import type { UserType } from './types';
import LoginScreen from './components/LoginScreen';
import Dashboard from './components/Dashboard';
import { useInventory as useInventoryHook } from './hooks/useInventory';

export default function App() {
    const [currentUser, setCurrentUser] = useState<UserType | null>(null);
    const inventory = useInventoryHook();

    // Recupera usuário logado do localStorage
    useEffect(() => {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            setCurrentUser(JSON.parse(savedUser) as UserType);
        }
    }, []);

    // Inicializa o inventário quando o usuário estiver logado
    useEffect(() => {
        if (currentUser) {
            inventory.initializeInventory();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser]);

    // Logout
    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        setCurrentUser(null);
    };

    // Se não estiver logado, exibe tela de login
    if (!currentUser) {
        return <LoginScreen onLogin={user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            setCurrentUser(user);
        }} />;
    }

    // Dashboard principal
    return <Dashboard user={currentUser} onLogout={handleLogout} inventory={inventory} />;
}
