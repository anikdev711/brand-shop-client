
const DarkMode = ({ isDark, toggleBetweenDarkLight }) => {
    
    return (
        <div className="text-center font-bold">
            <button
                onClick={toggleBetweenDarkLight}
                className={
                    `${isDark ? 'bg-black text-white'
                        :
                        'bg-white text-black'
                    }`
                }
            >
                {isDark ? 'Light Mode' : 'Dark Mode'}

            </button>
        </div>
    );
};

export default DarkMode;