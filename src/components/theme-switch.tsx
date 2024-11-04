"use client";

import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = 'light' | 'dark';

type ThemeSwitchProps = {
    setLogoSrc: (src: string) => void;
};

export default function ThemeSwitch({ setLogoSrc }: ThemeSwitchProps) {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        window.localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        
        // Change the favicon here
        const favicon = document.querySelector("link[rel='icon']");
        if (favicon) {
            favicon.setAttribute('href', newTheme === 'dark' ? '/favicon-dark.ico' : '/favicon-light.ico');
        }

        // Update logo source in Header
        setLogoSrc(newTheme === 'dark' ? '/favicon-dark.ico' : '/favicon-light.ico');
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme;
        const favicon = document.querySelector("link[rel='icon']");
        
        if (localTheme) {
            setTheme(localTheme);
            document.documentElement.classList.toggle('dark', localTheme === 'dark');
            if (favicon) favicon.setAttribute('href', localTheme === 'dark' ? '/favicon-dark.ico' : '/favicon-light.ico');
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
            if (favicon) favicon.setAttribute('href', '/favicon-dark.ico');
        }
    }, []);

    return (
        <button className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-60 backdrop-blur-lg border border-gray-300 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950" 
        onClick={toggleTheme}>
            {theme === 'light' ? <BsSun /> : <BsMoon />}
        </button>
    );
}