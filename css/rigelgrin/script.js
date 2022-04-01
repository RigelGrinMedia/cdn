// check for saved 'darkMode' in localStorage

let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#dark-mode-toggle');
const themeToggle = document.querySelector('#theme-button');
const enableDarkMode = () => {
    // 1. Add the class to the body
    document.body.classList.add('darkmode');
    themeToggle.classList.remove('fa-sun');
    themeToggle.classList.add('fa-moon');

    // 2. Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {

    document.body.classList.remove('darkmode');
    themeToggle.classList.remove('fa-moon');
    themeToggle.classList.add('fa-sun');
    // 2. Update darkMode in localStorage 
    localStorage.setItem('darkMode', null);

}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
    enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
    // get their darkMode setting
    darkMode = localStorage.getItem('darkMode');

    // if it not current enabled, enable it
    if (darkMode !== 'enabled') {
        enableDarkMode();
        // if it has been enabled, turn it off  
    } else {
        disableDarkMode();
    }
});