
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost','firebasestorage.googleapis.com'],
  },
    "presets": ["next/babel"],
 
    env:{
      stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
      STRIPE_SIGNING_SECRET : process.env.STRIPE_SIGNING_SECRET,
      STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY
    },
    
      "rules": {
          "eqeqeq": "off",
          "curly": "error",
          "quotes": ["error", "double"]
      },
      "noInlineConfig": true
}

{
  swcMinify: false // it should be false by default 
  }
 