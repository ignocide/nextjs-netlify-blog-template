const nextConfig = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: { mode: ['react-component'] }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    )
    return config;
  }
}

module.exports = nextConfig;