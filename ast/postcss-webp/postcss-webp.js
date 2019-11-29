var postcss = require("postcss");

const reg = /url\((['"])?(https?:\/\/([^\/]+).+)\1\);?/;
const suffixMap = new Map([
  // 阿里云
  ["cdn.poizon.com", "?x-oss-process=image/format,webp"],
  // 七牛云
  ["du.hupucdn.com", "?imageView2/0/format/webp"]
]);

module.exports = postcss.plugin("postcss-webp", function(opts) {
  opts = opts || {};

  return function(css) {
    css.walkDecls(function(decl) {
      if (decl.prop.match("background-image")) {
        let rule;
        let url;
        let domain;
        let match;
        try {
          rule = decl.parent;
          match = decl.value.match(reg) || [];
          url = match[2];
          domain = match[3];
        } catch (error) {
          console.error("error", error);
        }

        if (suffixMap.has(domain)) {
          console.log('domain', domain, 'url', url)
          rule.before(
            `.webp ${rule.selector} {
                background-image: url(${url}${suffixMap.get(domain)})
            }`
          );
        }
      }
    });
  };
});
