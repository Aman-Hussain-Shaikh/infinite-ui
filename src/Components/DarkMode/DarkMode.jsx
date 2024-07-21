import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-blue-200 transition duration-300">
            {isDarkMode ? (
                <img src="/src/assets/Icons/moon.svg" alt="" />
            ) : (
               <img src='/src/assets/Icons/sun.svg' alt=''/>
            )}
        </button>
    );
};

export default DarkModeToggle;
