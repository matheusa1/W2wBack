module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eb7d2803229fe7818e0c2012cf7edc83'),
  },
});
