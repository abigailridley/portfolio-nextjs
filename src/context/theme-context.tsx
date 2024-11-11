"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextProviderProps = {
    children: React.ReactNode;
};

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
    const [theme, setTheme] = useState<Theme>('light');

    const updateFavicon = (theme: Theme) => {
        const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
        if (link) {
            link.href = theme === 'dark' ? '/favicon-dark.ico' : '/favicon.ico';
        }
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        window.localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        updateFavicon(newTheme);
    };

    useEffect(() => {
        const storedTheme = (window.localStorage.getItem('theme') as Theme) ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        setTheme(storedTheme);
        document.documentElement.classList.toggle('dark', storedTheme === 'dark');
        updateFavicon(storedTheme);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeContextProvider');
    }
    return context;
}