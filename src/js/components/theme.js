export const useTheme = () => {
    const themeTarget = document.querySelector('[data-theme]');
    const themeSwitcher = document.querySelector('[data-theme-switcher]')
    const themeTargetDataset = themeTarget.dataset;
    const theme = localStorage.getItem('theme') || 'light';
    themeTargetDataset.theme = theme;
    if (theme == "dark") {
        themeSwitcher.checked = true;
    }
    themeSwitcher.addEventListener('click', () => {
        const ThemeDataset = themeTarget.dataset;
        if (ThemeDataset.theme == "dark") {
            ThemeDataset.theme = "light";
            localStorage.setItem('theme','light');
        }
        else {
            ThemeDataset.theme = "dark";
            localStorage.setItem('theme','dark');
        }
    })
}