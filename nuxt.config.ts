// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@nuxt/ui', '@vite-pwa/nuxt'],
    app: {
        head: {
            title: "Ruchikar",
            titleTemplate: "%s - Ruchikar",
            link: [
                {rel: "icon", type: "image/x-icon", href: "/delta_icon.png"},
                {rel: "manifest", href: "/manifest.json"},
            ],
            meta: [
                {charset: "utf-8"},
                {name: "viewport", content: "width=device-width, initial-scale=1"},
                {name: "theme-color", content: "#0d0d12"},
                {
                    hid: "description",
                    name: "description",
                    content:
                        "Articles for the Deities and your loved ones..",
                },
                {
                    hid: "og:title",
                    property: "og:title",
                    content: "Ruchikar Stores",
                },
                {
                    hid: "og:description",
                    property: "og:description",
                    content:
                        "Articles for the Deities and your loved ones..",
                },
                {
                    hid: "og:image",
                    property: "og:image",
                    content:
                        "https://freesvg.org/img/secretlondon_red_present.png",
                },
                {
                    hid: "robots",
                    name: "robots",
                    content: "index, follow",
                },
                {
                    hid: "mobile-web-app-capable",
                    name: "mobile-web-app-capable",
                    content: "yes",
                },
                {
                    hid: "apple-mobile-web-app-capable",
                    name: "apple-mobile-web-app-capable",
                    content: "yes",
                },
                {
                    hid: "apple-mobile-web-app-status-bar-style",
                    name: "apple-mobile-web-app-status-bar-style",
                    content: "black-translucent",
                }
            ],
            script: [
                {src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"}
            ]
        },
    },
    runtimeConfig: {
        public: {
            apiUrl: process.env.NUXT_PUBLIC_API + "anime/gogoanime/",
            firebaseApiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
            firebaseAuthDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
            firebaseProjectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
            firebaseStorageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
            firebaseMessageId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGE_ID,
            firebaseAppId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
            firebaseMeasurementId: process.env.NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
            mangaApi: process.env.NUXT_PUBLIC_API + "meta/anilist-manga/",
            newsApi: process.env.NUXT_PUBLIC_API + "news/ann/",
            corsApi: process.env.NUXT_PUBLIC_CORS_API,
            anifyApi: process.env.NUXT_PUBLIC_ANIFY_API,
            metaApi: process.env.NUXT_PUBLIC_API + "meta/anilist/",
            tmdbApi: process.env.NUXT_PUBLIC_API + "meta/tmdb/",
        },
    },
    plugins: [
        '~/plugins/firebase.ts',
    ],
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => tag == "lottie-player" || tag.startsWith('media-') || tag == 'SpeedInsights' || tag == 'Placeholder',
        }
    },
    colorMode: {
        preference: 'light'
    },
    pwa: {
        manifest: {
            display: "standalone",
            name: "Ruchikar",
            short_name: "Ruchikar",
            description: "Ruchikar - Store of Wonderful Articles",
            lang: "en",
            theme_color: "#0d0d12",
            background_color: "#0d0d12",
            start_url: "/",
            icons: [
                {
                    src: "/delta_icon.png",
                    sizes: "400x400",
                    type: "image/png",
                    purpose: "any"
                },
                {
                    src: "/delta_icon520.png",
                    sizes: "520x520",
                    type: "image/png",
                    purpose: "any"
                },
                {
                    src: "/delta_icon512.png",
                    sizes: "512x512",
                    type: "image/png",
                    purpose: "any"
                }
            ],
        }
    }
})
