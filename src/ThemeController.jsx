import { useState, useEffect } from 'react';
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";

const ThemeController = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return (
        <div className="theme-toggle" onClick={toggleTheme} style={{ cursor: "pointer" }}>
            {theme === 'light' ? (
                <FiSun className='text-white text-3xl' />
            ) : (
                <IoMoonOutline className='text-white text-3xl' />

            )}
        </div>
    )
}

export default ThemeController;
