module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@components": "./src/components",
            "@assets": "./src/assets",
            "@screens": "./src/screens",
            "@hooks": "./src/hooks",
            "@utils": "./src/utils",
            "@constants": "./src/constants",
            "@navigation": "./src/navigation",
            "@context": "./src/context",
            "@services": "./src/services",
          },
        },
      ],
    ],
  };
};
