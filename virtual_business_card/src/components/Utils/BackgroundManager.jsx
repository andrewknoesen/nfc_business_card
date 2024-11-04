export function changeRootBackgroundImage(picture) {
    document.documentElement.style.setProperty('--background-image', `url(${picture})`)
}