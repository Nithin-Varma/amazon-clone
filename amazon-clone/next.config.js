module.exports = {
    images: {
      // remotePatterns: [
      //   {
      //     protocol: 'https',
      //     hostname: ['fakestoreapi.com','links.papareact.com'],
      //     port: '',
      //     pathname: '/**',
      //   },
      // ],
      domains: ['fakestoreapi.com','links.papareact.com'],
    },

    env: {
      stripe_public_key : process.env.STRIPE_PUBLIC_KEY
    }
  }