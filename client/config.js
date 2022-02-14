export default{
    app: {
        name: process.env.APP_NAME,
        description: process.env.APP_DESCRIPTION
    },
    locale: {
        default: process.env.APP_LOCALE,
        available: process.env.LOCALES_AVAILABLE.split(',')
    },
    api: {
        url: process.env.API_URL
    },
    social: [
        {
            key: 'apple',
            name: 'apple',
            icon: 'apple',
            color: '#000000'
        },
        {
            key: 'weixinweb',
            name: 'wechat',
            icon: 'wechat',
            color: '#07c160'
        }
    ],
    theme: {
        default: 'light'
    },
    websockets: {
        host: process.env.WEBSOCKETS_DOMAIN,
        port: process.env.WEBSOCKETS_PORT,
        key: process.env.PUSHER_APP_KEY
    },
    mobile: {
        ios: process.env.MOBILE_IOS,
        android: process.env.MOBILE_ANDROID
    },
    case_number: process.env.CASE_NUMBER,
    google_analytics: process.env.GOOGLE_ANALYTICS_ID,
}
