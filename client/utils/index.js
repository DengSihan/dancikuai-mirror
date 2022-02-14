import config from '@/config';

export function cookieFromRequest(request, key){
    if (!request.headers.cookie) {
        return;
    }
    const cookie = request.headers.cookie.split(';').find(
        c => c.trim().startsWith(`${key}=`)
    );
    if (cookie) {
        return cookie.split('=')[1];
    }
}

export function localeFromRequest(request){
    const url = request.originalUrl;
    let locale = url.split('/')[1];
    return config.locale.available.includes(locale) ? locale : config.locale.default;
}

export function removeEmptyKeyInObject(obj){
    let result = {};
    for (const [key, value] of Object.entries(obj)) {
        if (!!value) result[key] = value;
    }
    return result;
}

export function getRandomString(length = 5){
    return Math.random().toString(36).substring(length);
}

/**
 * https://router.vuejs.org/en/advanced/scroll-behavior.html
 */
export function scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition;
    }

    let position = {};

    if (to.matched.length < 2) {
        position = { x: 0, y: 0 };
    } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
        position = { x: 0, y: 0 };
    } if (to.hash) {
        position = { selector: to.hash };
    }

    return position;
}
