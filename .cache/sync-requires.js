// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/aim-imac-3/projects/wFern.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/aim-imac-3/projects/wFern.github.io/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/aim-imac-3/projects/wFern.github.io/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/aim-imac-3/projects/wFern.github.io/src/pages/404.js")),
  "component---src-pages-blog-en-js": preferDefault(require("/Users/aim-imac-3/projects/wFern.github.io/src/pages/blog.en.js")),
  "component---src-pages-blog-ru-js": preferDefault(require("/Users/aim-imac-3/projects/wFern.github.io/src/pages/blog.ru.js")),
  "component---src-pages-index-en-js": preferDefault(require("/Users/aim-imac-3/projects/wFern.github.io/src/pages/index.en.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/aim-imac-3/projects/wFern.github.io/src/pages/index.js")),
  "component---src-pages-index-ru-js": preferDefault(require("/Users/aim-imac-3/projects/wFern.github.io/src/pages/index.ru.js"))
}

exports.json = {
  "layout-index.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/layout-index.json"),
  "en-hello-world.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/en-hello-world.json"),
  "layout-index.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/layout-index.json"),
  "ru-hello-world.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/ru-hello-world.json"),
  "layout-index.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/layout-index.json"),
  "404.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/404.json"),
  "layout-index.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/layout-index.json"),
  "en-blog.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/en-blog.json"),
  "layout-index.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/layout-index.json"),
  "ru-blog.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/ru-blog.json"),
  "layout-index.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/layout-index.json"),
  "en.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/en.json"),
  "layout-index.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/layout-index.json"),
  "index.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/index.json"),
  "layout-index.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/layout-index.json"),
  "ru.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/ru.json")
}