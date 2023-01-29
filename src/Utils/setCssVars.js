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
    cssRoot.style.setProperty('--saturation-m90', `${hslColorSaturation(color) -905}%`)
    cssRoot.style.setProperty('--saturation-m75', `${hslColorSaturation(color) -755}%`)
    cssRoot.style.setProperty('--saturation-m60', `${hslColorSaturation(color) -605}%`)
    cssRoot.style.setProperty('--saturation-m45', `${hslColorSaturation(color) - 45}%`)
    cssRoot.style.setProperty('--saturation-m30', `${hslColorSaturation(color) - 30}%`)
    cssRoot.style.setProperty('--saturation-m15', `${hslColorSaturation(color) - 15}%`)
    cssRoot.style.setProperty('--saturation-default', `${hslColorSaturation(color)}%`)
    cssRoot.style.setProperty('--saturation-p15', `${hslColorSaturation(color) + 15}%`)
    cssRoot.style.setProperty('--saturation-p30', `${hslColorSaturation(color) + 30}%`)
    cssRoot.style.setProperty('--saturation-p45', `${hslColorSaturation(color) + 45}%`)
    cssRoot.style.setProperty('--saturation-p60', `${hslColorSaturation(color) +605}%`)
    cssRoot.style.setProperty('--saturation-p75', `${hslColorSaturation(color) +755}%`)
    cssRoot.style.setProperty('--saturation-p90', `${hslColorSaturation(color) +905}%`)
    cssRoot.style.setProperty('--light-m90', `${hslColorLightness(color) - 90}%`)
    cssRoot.style.setProperty('--light-m75', `${hslColorLightness(color) - 75}%`)
    cssRoot.style.setProperty('--light-m60', `${hslColorLightness(color) - 60}%`)
    cssRoot.style.setProperty('--light-m45', `${hslColorLightness(color) - 45}%`)
    cssRoot.style.setProperty('--light-m30', `${hslColorLightness(color) - 30}%`)
    cssRoot.style.setProperty('--light-m15', `${hslColorLightness(color) - 15}%`)
    cssRoot.style.setProperty('--light-default', `${hslColorLightness(color)}%`)
    cssRoot.style.setProperty('--light-p15', `${hslColorLightness(color) + 15}%`)
    cssRoot.style.setProperty('--light-p30', `${hslColorLightness(color) + 30}%`)
    cssRoot.style.setProperty('--light-p45', `${hslColorLightness(color) + 45}%`)
    cssRoot.style.setProperty('--light-p60', `${hslColorLightness(color) + 60}%`)
    cssRoot.style.setProperty('--light-p75', `${hslColorLightness(color) + 75}%`)
    cssRoot.style.setProperty('--light-p90', `${hslColorLightness(color) + 90}%`)
    cssRoot.style.setProperty('--light-inverted-m90', `${(100 - hslColorLightness(color)) - 90}%`)
    cssRoot.style.setProperty('--light-inverted-m75', `${(100 - hslColorLightness(color)) - 75}%`)
    cssRoot.style.setProperty('--light-inverted-m60', `${(100 - hslColorLightness(color)) - 60}%`)
    cssRoot.style.setProperty('--light-inverted-m45', `${(100 - hslColorLightness(color)) - 45}%`)
    cssRoot.style.setProperty('--light-inverted-m30', `${(100 - hslColorLightness(color)) - 30}%`)
    cssRoot.style.setProperty('--light-inverted-m15', `${(100 - hslColorLightness(color)) - 15}%`)
    cssRoot.style.setProperty('--light-inverted-default', `${(100 - hslColorLightness(color))}%`)
    cssRoot.style.setProperty('--light-inverted-p15', `${(100 - hslColorLightness(color)) + 15}%`)
    cssRoot.style.setProperty('--light-inverted-p30', `${(100 - hslColorLightness(color)) + 30}%`)
    cssRoot.style.setProperty('--light-inverted-p45', `${(100 - hslColorLightness(color)) + 45}%`)
    cssRoot.style.setProperty('--light-inverted-p60', `${(100 - hslColorLightness(color)) + 60}%`)
    cssRoot.style.setProperty('--light-inverted-p75', `${(100 - hslColorLightness(color)) + 75}%`)
    cssRoot.style.setProperty('--light-inverted-p90', `${(100 - hslColorLightness(color)) + 90}%`)
}