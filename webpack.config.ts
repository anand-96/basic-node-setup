module.exports = {
  entry: [
    "./src/views/user/index.ts",
    "./src/assets/styles/user.css",
  ],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js",
  },
  module: {
    rules:
      [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(css)$/,
          use: ["style-loader", "css-loader"],
        },
      ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
}
