// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/color-mode','@pinia/nuxt','@nuxtjs/tailwindcss'],
    colorMode:{
        classSuffix:''
    },
    tailwindcss:{
        cssPath: "@/assets/css/tailwind.css",
        configPath: 'tailwind.config.ts',
        exposeConfig: false,
        // config:{},
        injectPosition: 0,
        viewer: true
        }
})
