// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/aim-imac-3/projects/wFern.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/aim-imac-3/projects/wFern.github.io/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/aim-imac-3/projects/wFern.github.io/src/pages/404.js")),
  "component---src-pages-index-en-js": preferDefault(require("/Users/aim-imac-3/projects/wFern.github.io/src/pages/index.en.js")),
  "component---src-pages-index-ru-js": preferDefault(require("/Users/aim-imac-3/projects/wFern.github.io/src/pages/index.ru.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/aim-imac-3/projects/wFern.github.io/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/layout-index.json"),
  "404.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/404.json"),
  "layout-index.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/layout-index.json"),
  "en.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/en.json"),
  "layout-index.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/layout-index.json"),
  "ru.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/ru.json"),
  "layout-index.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/layout-index.json"),
  "page-2.json": require("/Users/aim-imac-3/projects/wFern.github.io/.cache/json/page-2.json")
}