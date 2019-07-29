const path = require('path')

module.exports = {
  chainWebpack: (config: { module: { rule: (arg0: string) => { oneOf: (arg0: string) => void; }; }; }) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type: any) => addStyleResource(config.module.rule('stylus').oneOf(type)));
  },
};

function addStyleResource(rule: any) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/common.styl'),
      ],
    });
}
