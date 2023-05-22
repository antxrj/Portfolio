module.exports = {
    async redirects() {
      return [
        {
          source: '/about',
          destination: '/sobre',
          permanent: true,
        },
        {
          source: '/resume',
          destination: '/curriculo',
          permanent: true,
        },
        {
          source: '/projects',
          destination: '/case',
          permanent: true,
        },
      ];
    },
  };
  