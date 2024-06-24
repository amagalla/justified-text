const { EnvironmentPlugin } = require('webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new EnvironmentPlugin({
      API: "http://localhost:3000/api",
    })
  ],
};
