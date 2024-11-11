"use client "

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextProviderProps = {
    children: React.ReactNode
}

type ThemeContextType = {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export default function ThemeContextProvider({
    children,
    onThemeChange,
}: ThemeContextProviderProps & { onThemeChange?: (theme: Theme) => void }) {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        onThemeChange?.(newTheme);
        window.localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }
       
    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null;
        const initialTheme = localTheme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        setTheme(initialTheme);
        document.documentElement.classList.toggle('dark', initialTheme === 'dark');
        onThemeChange?.(initialTheme);
    }
    ,[]);
  
  
    return (
    <ThemeContext.Provider 
        value={{ 
        theme, 
        toggleTheme,
        }}
        >
            {children}
        </ThemeContext.Provider>
  )
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error('useTheme must be used within a ThemeContextProvider');
    }
    return context;
}
