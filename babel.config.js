module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    
    plugins: [
      // ... other configs, if any
      [
        'module-resolver',
        {
          extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx','.svg'],
          root: ['.'],
          alias: {
            '@api': './src/api',
            '@assets': './assets',
            '@UI': './src/UI',
          },
        },
      ],
    ]
  };
};
