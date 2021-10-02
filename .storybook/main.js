module.exports = {
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
       {
         name: '@storybook/addon-postcss',
       options: {
         postcssLoaderOptions: {
             implementation: require('postcss'),
             },
       },
   },
  ]
}