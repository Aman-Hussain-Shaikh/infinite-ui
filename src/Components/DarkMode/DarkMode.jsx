import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
import moon from '../../assets/Icons/moon.svg'
import sun from '../../assets/Icons/sun.svg'

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
                <img src={moon} alt="" />
            ) : (
               <img src={sun} alt=''/>
            )}
        </button>
    );
};

export default DarkModeToggle;
