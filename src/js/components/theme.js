export const useTheme = () => {
    const switcher = document.querySelector('.switcher');
    switcher.addEventListener('click', () => {
        if (document.body.getAttribute('data-theme') == 'dark') {
            document.body.setAttribute('data-theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
        }
    })
}