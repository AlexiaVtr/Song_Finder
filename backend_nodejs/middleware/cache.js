import getExpeditiousCache from 'express-expeditious';


const defaultOptions = {
    namespace: 'expresscache',
    defaultTtl: '1 hour',
    statusCodeExpires: {
        404: '5 minutes',
        500: 0
    }
};


const cacheInit = getExpeditiousCache(defaultOptions);


export default cacheInit;