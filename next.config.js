const nextConfiguration = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true
    },
    images: {
        domains: ['i.ytimg.com']
    }
};

module.exports = nextConfiguration;
