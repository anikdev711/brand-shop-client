
const DarkMode = ({ isDark, toggleDark }) => {
    
    return (
        <div className="text-center font-bold">
            <button
                onClick={toggleDark}
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