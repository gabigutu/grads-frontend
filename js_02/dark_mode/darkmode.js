let isDarkMode = getCookie('darkMode');
console.log(isDarkMode, typeof isDarkMode);

const toggleDarkButtonElem = document.getElementById('toggleDarkButton');
const spanToggleDarkButton = toggleDarkButtonElem.querySelector('span');
const bodyElem = document.querySelector('body'); // #nume_id, .nume_clasa

if (isDarkMode === 'true') {
    bodyElem.classList.add('dark');
    spanToggleDarkButton.innerText = 'Disable';
}
function toggleDarkMode() {
    if (bodyElem.classList.contains('dark')) {
        bodyElem.classList.remove('dark');
        setCookie('darkMode', false);
    } else {
        bodyElem.classList.add('dark');
        setCookie('darkMode', true);
    }
    spanToggleDarkButton.innerText = isDarkMode ? 'Disable' : 'Enable';
    isDarkMode = !isDarkMode; 
}

function setCookie(key, value) {
    document.cookie = key + '=' + value;
}

function getCookie(keyToFound) {
    const cookies = document.cookie.split('; ');
    for (cookie of cookies) { // key=value
        elements = cookie.split('=');
        const key = elements[0];
        const value = elements[1];
        if (key === keyToFound) return value;
    }
    return '';
}
