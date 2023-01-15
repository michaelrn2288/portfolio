import {
    hslColorHue,
    hslColorSaturation,
    hslColorLightness
} from "./colorTools";

export default function setCssVars(color) {
    const cssRoot = document.documentElement
    
    cssRoot.style.setProperty('--hue-primary', hslColorHue(color))
    cssRoot.style.setProperty('--hue-secondary1', hslColorHue(color) + 30)
    cssRoot.style.setProperty('--hue-secondary2', hslColorHue(color) - 30)
    cssRoot.style.setProperty('--hue-contrast', hslColorHue(color) + 180)
    cssRoot.style.setProperty('--saturation-025', `${hslColorSaturation(color) * .25}%`)
    cssRoot.style.setProperty('--saturation-050', `${hslColorSaturation(color) * .5}%`)
    cssRoot.style.setProperty('--saturation-075', `${hslColorSaturation(color) * .75}%`)
    cssRoot.style.setProperty('--saturation-100', `${hslColorSaturation(color)}%`)
    cssRoot.style.setProperty('--saturation-125', `${hslColorSaturation(color) * 1.25}%`)
    cssRoot.style.setProperty('--saturation-150', `${hslColorSaturation(color) * 1.5}%`)
    cssRoot.style.setProperty('--saturation-175', `${hslColorSaturation(color) * 1.75}%`)
    cssRoot.style.setProperty('--light-025', `${hslColorLightness(color) * .25}%`)
    cssRoot.style.setProperty('--light-050', `${hslColorLightness(color) * .5}%`)
    cssRoot.style.setProperty('--light-075', `${hslColorLightness(color) * .75}%`)
    cssRoot.style.setProperty('--light-100', `${hslColorLightness(color)}%`)
    cssRoot.style.setProperty('--light-125', `${hslColorLightness(color) * 1.25}%`)
    cssRoot.style.setProperty('--light-150', `${hslColorLightness(color) * 1.5}%`)
    cssRoot.style.setProperty('--light-175', `${hslColorLightness(color) * 1.75}%`)
    cssRoot.style.setProperty('--light-inverted-025', `${(100 - hslColorLightness(color)) * .25}%`)
    cssRoot.style.setProperty('--light-inverted-050', `${(100 - hslColorLightness(color)) * .5}%`)
    cssRoot.style.setProperty('--light-inverted-075', `${(100 - hslColorLightness(color)) * .75}%`)
    cssRoot.style.setProperty('--light-inverted-100', `${(100 - hslColorLightness(color))}%`)
    cssRoot.style.setProperty('--light-inverted-125', `${(100 - hslColorLightness(color)) * 1.25}%`)
    cssRoot.style.setProperty('--light-inverted-150', `${(100 - hslColorLightness(color)) * 1.5}%`)
    cssRoot.style.setProperty('--light-inverted-175', `${(100 - hslColorLightness(color)) * 1.75}%`)
}