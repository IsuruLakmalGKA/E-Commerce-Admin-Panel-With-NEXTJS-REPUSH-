self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "pages": {
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/categories": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/categories.js"
    ],
    "/products": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/products.js"
    ],
    "/products/addnewproduct": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/products/addnewproduct.js"
    ],
    "/products/delete/[...id]": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/products/delete/[...id].js"
    ],
    "/products/edit/[...id]": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/products/edit/[...id].js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];