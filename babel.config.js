module.exports = function (api) {
  const options = global || {};
  api.cache(() => options.dev);
  const presets = [[
    '@babel/env',
    {
      debug: true,
      useBuiltIns: 'usage',
      corejs: 3,
      targets: [
        'IE 11',
      ]
    },
  ]];

  const plugins = [
    ['@babel/transform-runtime',
      {
        corejs: "3"
      }
    ]
  ];

  return {
    presets,
    plugins,
  };
};
