const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // Proxy for the course products API
  app.use(
    "/api/course",
    createProxyMiddleware({
      target: "https://www.course-api.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api/course": "/react-store-products",
      },
    }),
  );

  // Proxy for the authentication API
  app.use(
    "/api/auth",
    createProxyMiddleware({
      target: "https://user-authentication-aman.herokuapp.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api/auth": "",
      },
    }),
  );
};
