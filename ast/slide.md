前端工程化

自动化而非手动化

CI/CD

Jenkins/TeamCity

各种 Task Runner 和 Bundler
- rails assets pipeline
- grunt/gulp
- webpack

生成代码而非手写代码

Template Engine
haml/slim/jade 等等等

CSS preprocessor
Sass/Less/Stylus

Babel

PostCSS
Autoprefixer

如何生成代码

- Parse
- Transform
- Codegen

Parse
Code -> AST

什么是 AST？

[https://astexplorer.net/](https://astexplorer.net/)

[可视化 JS AST 查看器](https://resources.jointjs.com/demos/javascript-ast)

能做什么？

举个例子
[Optional Chaining](https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=MYewdgzgLgBAhjAvDA3mOBbApgLhgcgCs5gBrfAXwChRIQAbLAOnpAHMAKOAfibjawBKKjFFjxooA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.7.4&externalPlugins=)

[如何实现](https://github.com/babel/babel/blob/master/packages/babel-plugin-proposal-optional-chaining)

简单一点的例子
[Optional Catch Binding](https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=C4JwngBA3gUBEBMD2BlYALAFAShgXwgGMBDYQ9aOIpAOwGckAbAUwDpGkBzTAcjowgB3ELU4R0xAA6TmNZgh648MUJFjxkaLEqKlyleIVoMW7Lr34Vho8VJlyFSoA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2%2Cstage-3%2Cenv&prettier=false&targets=&version=7.7.4&externalPlugins=)

[如何实现](https://github.com/babel/babel/blob/master/packages/babel-plugin-proposal-optional-catch-binding)

Transform
AST -> AST

Codegen
AST -> Code

Code -> AST -> AST -> AST -> Code

学习资料
- [Babel handbook](https://github.com/jamiebuilds/babel-handbook)
- [ESTree](https://github.com/estree/estree)

PostCSS
- [AutoPrefixer](https://autoprefixer.github.io/)
- [CSS Modules](https://github.com/css-modules/postcss-modules)

学习资料
- [CSSTree](https://github.com/csstree/csstree)
- [如何编写 PostCSS 插件](https://github.com/postcss/postcss/blob/master/docs/writing-a-plugin.md)
- [PostCSS API](http://api.postcss.org/)

来个例子
```css
.container {
  background: url(http://cdn.com/aaa.jpg) no-repeat;
}
```

- 对支持 WebP 的浏览器使用 WebP
- 同时兼容不支持 WebP 的浏览器

先侦测浏览器是否支持 WebP 格式，
如果支持给 html 元素添加 class

```javascript
<!doctype html>
<html>
<script>
(function(){
  var html = document.documentElement
  var image = new Image
  image.onerror = function () {
    console.log('浏览器不支持 WebP')
  }
  image.onload = function () {
    html.classList.add('webp-supported')
  }
  image.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA='
})()
</script>
```

给支持 WebP 的浏览器添加相应的 CSS Rules

```css
.container {
  background: url(http://cdn.com/aaa.jpg) no-repeat;
}
.webp-supported .container {
  background: url(http://cdn.com/aaa.jpg?format=webp) no-repeat;
}
```
