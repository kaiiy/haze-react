// uno.config.ts
import {
    defineConfig, presetUno, presetAttributify

} from 'unocss'

export default defineConfig({
    rules: [
        ['border-b-solid', { 'border-bottom-style': 'solid' }],
        ["abs-center", { "top": "50%", "left": "50%", "transform": "translate(-50%, -50%)" }],
        ["w-40vh", { "width": "40vh" }],
        ["h-40vh", { "height": "40vh" }],
        ["line-40vh", { "line-height": "40vh" }],
        ["box-font-size", { "font-size": "calc(40vh * 0.7)" }]
    ],
    presets: [
        presetUno(),
        presetAttributify()
    ],
})