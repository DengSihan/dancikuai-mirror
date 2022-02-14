require('dotenv').config();

const scriptForGoogleAnalytics = [
    {
        src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`,
        'async': true 
    }
];

module.exports = {

    srcDir: __dirname,

    plugins:[
        '~plugins/axios',
        '~/plugins/vuesax',
        '~/plugins/fragment',
        '~/plugins/i18n',
        '~/plugins/helper',
        { src: '~/plugins/lazyload', ssr: false },
        { src: '~/plugins/localforage', ssr: false },
        { src: '~/plugins/waves-effect', ssr: false },
        { src: '~/plugins/click-outside', ssr: false },
        { src: '~/plugins/google-analytics', ssr: false },
        '~/mixins/global',
    ],

    buildModules: [
        '@nuxtjs/router',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/pwa',
        '@nuxtjs/axios',
        'nuxt-custom-headers',

        // share .env file for both Nuxt and Laravel
        ['@nuxtjs/dotenv', {
            path: `${__dirname}/../`,
            only: [
                'APP_NAME',
                'APP_DESCRIPTION',
                'APP_URL',
                'API_URL',
                'APP_LOCALE',
                'LOCALES_AVAILABLE',
                'PUSHER_APP_KEY',
                'WEBSOCKETS_DOMAIN',
                'WEBSOCKETS_PORT',
                'MOBILE_IOS',
                'MOBILE_ANDROID',
                'CASE_NUMBER',
                'GOOGLE_ANALYTICS_ID',
                'APPLE_APP_STORE_ID'
            ]
        }]
    ],

    router: {
        middleware: [
            'locale',
            'check-auth',
            'ie'
        ]
    },

    head: {
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Sans+SC:wght@300;400;500;700&family=Noto+Sans+TC:wght@300;400;500;700&family=Poppins:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Caveat&family=Hachi+Maru+Pop&family=Ma+Shan+Zheng&display=swap'
            }
        ],
        meta: [
            {
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                name: 'author',
                content: 'DengSihan,root@dsh.email'
            },
            {
                name: 'apple-itunes-app',
                content: `app-id=${process.env.APPLE_APP_STORE_ID}`
            }
        ],
        script: [
            ...scriptForGoogleAnalytics
        ]
    },

    css: [
        '~/assets/app.scss',
    ],
    tailwindcss: {
        cssPath: '~/assets/tailwind.css',
    },

    // pwa configs
    pwa: {
        icon: {
            fileName: 'logo.png',
            sizes: [144]
        },
        manifest: {
            name: process.env.APP_NAME,
            description: process.env.APP_DESCRIPTION,
            short_name: process.env.APP_NAME
        }
    },

    /**
     * listen to files changing
     */
    watchers: process.env.NODE_ENV === 'production' ? false : {
        webpack: {
            aggregateTimeout: 300,
            poll: 100
        }
    }
}
