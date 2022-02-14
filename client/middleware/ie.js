export default function ({ error, req }) {
    
    const userAgent = process.server
        ? req.headers['user-agent']
        : navigator.userAgent;

    if (userAgent.includes('Triden')) {
        return error({ message: 'IE is not accepted', statusCode: 426 });
    }
}
