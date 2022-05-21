const ts = require("typescript");

module.exports = function(config) {

  // 11ty.ts

  config.addTemplateFormats("ts");

  config.addExtension("ts", {
    outputFileExtension: "js",
    compile: function(source) {
      return function() {
        let ret = ts.transpileModule(source, {
          compilerOptions: {
            module: ts.ModuleKind.CommonJS
          }
        });

        return ret.outputText;
      };
    }
  });
};