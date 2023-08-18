// uno.config.ts
import {
    defineConfig, presetUno, presetAttributify

} from 'unocss'

export default defineConfig({
    rules: [
        ['border-b-solid', { 'border-bottom-style': 'solid' }],
    ],
    presets: [
        presetUno(),
        presetAttributify()
    ],
})