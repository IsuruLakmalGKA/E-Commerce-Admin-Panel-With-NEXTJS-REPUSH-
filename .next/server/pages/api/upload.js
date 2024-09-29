"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/upload";
exports.ids = ["pages/api/upload"];
exports.modules = {

/***/ "@aws-sdk/client-s3":
/*!*************************************!*\
  !*** external "@aws-sdk/client-s3" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ "mime-types":
/*!*****************************!*\
  !*** external "mime-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("mime-types");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "multiparty":
/*!*****************************!*\
  !*** external "multiparty" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("multiparty");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "@auth/mongodb-adapter":
/*!****************************************!*\
  !*** external "@auth/mongodb-adapter" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@auth/mongodb-adapter");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fupload&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fupload.js&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fupload&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fupload.js&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_upload_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/upload.js */ \"(api)/./pages/api/upload.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_upload_js__WEBPACK_IMPORTED_MODULE_3__]);\n_pages_api_upload_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_upload_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_upload_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/upload\",\n        pathname: \"/api/upload\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_upload_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRnVwbG9hZCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTJGYXBpJTJGdXBsb2FkLmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQ2tEO0FBQ2xEO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyxpREFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsaURBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVELHFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWFkbWluLz8xN2YwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlcy9hcGkvdXBsb2FkLmpzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGhhbmRsZXIgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsIFwiZGVmYXVsdFwiKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsIFwiY29uZmlnXCIpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNBUElSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVNfQVBJLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXBsb2FkXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdXBsb2FkXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fupload&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fupload.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {\n    serverApi: {\n        version: mongodb__WEBPACK_IMPORTED_MODULE_0__.ServerApiVersion.v1,\n        strict: true,\n        deprecationErrors: true\n    }\n};\nlet client;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClient) {\n        global._mongoClient = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n    }\n    client = global._mongoClient;\n} else {}\n// Export a module-scoped MongoClient. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0Q7QUFFeEQsSUFBSSxDQUFDRSxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLE1BQU07QUFDbEI7QUFFQSxNQUFNQyxNQUFNSixRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUcsVUFBVTtJQUNkQyxXQUFXO1FBQ1RDLFNBQVNSLHFEQUFnQkEsQ0FBQ1MsRUFBRTtRQUM1QkMsUUFBUTtRQUNSQyxtQkFBbUI7SUFDckI7QUFDRjtBQUVBLElBQUlDO0FBRUosSUFBSVgsSUFBc0MsRUFBRTtJQUMxQywrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUksQ0FBQ1ksT0FBT0MsWUFBWSxFQUFFO1FBQ3hCRCxPQUFPQyxZQUFZLEdBQUcsSUFBSWYsZ0RBQVdBLENBQUNNLEtBQUtDO0lBQzdDO0lBQ0FNLFNBQVNDLE9BQU9DLFlBQVk7QUFDOUIsT0FBTyxFQUdOO0FBRUQseURBQXlEO0FBQ3pELDhEQUE4RDtBQUM5RCxpRUFBZUYsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1hZG1pbi8uL2xpYi9tb25nb2RiLmpzP2Q5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQsIFNlcnZlckFwaVZlcnNpb24gfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZC9NaXNzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlOiBcIk1PTkdPREJfVVJJXCInKTtcbn1cblxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG5jb25zdCBvcHRpb25zID0ge1xuICBzZXJ2ZXJBcGk6IHtcbiAgICB2ZXJzaW9uOiBTZXJ2ZXJBcGlWZXJzaW9uLnYxLFxuICAgIHN0cmljdDogdHJ1ZSxcbiAgICBkZXByZWNhdGlvbkVycm9yczogdHJ1ZSxcbiAgfSxcbn07XG5cbmxldCBjbGllbnQ7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSBzbyB0aGF0IHRoZSB2YWx1ZVxuICAvLyBpcyBwcmVzZXJ2ZWQgYWNyb3NzIG1vZHVsZSByZWxvYWRzIGNhdXNlZCBieSBITVIgKEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQpLlxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnQpIHtcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XG4gIH1cbiAgY2xpZW50ID0gZ2xvYmFsLl9tb25nb0NsaWVudDtcbn0gZWxzZSB7XG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xufVxuXG4vLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50LiBCeSBkb2luZyB0aGlzIGluIGFcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXG5leHBvcnQgZGVmYXVsdCBjbGllbnQ7XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJTZXJ2ZXJBcGlWZXJzaW9uIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJ1cmkiLCJvcHRpb25zIiwic2VydmVyQXBpIiwidmVyc2lvbiIsInYxIiwic3RyaWN0IiwiZGVwcmVjYXRpb25FcnJvcnMiLCJjbGllbnQiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mongooseConnect: () => (/* binding */ mongooseConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction mongooseConnect() {\n    const uri = process.env.MONGODB_URI;\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    } else {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLFNBQVNDO0lBQ1osTUFBTUMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0lBRW5DLElBQUdMLDREQUFtQixDQUFDTyxVQUFVLEtBQUssR0FBRTtRQUNwQyxPQUFPUCwwREFBbUIsQ0FBQ1EsU0FBUztJQUN4QyxPQUFLO1FBQ0QsT0FBT1IsdURBQWdCLENBQUNFO0lBQzVCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYWRtaW4vLi9saWIvbW9uZ29vc2UuanM/MTYzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtb25nb29zZUNvbm5lY3QoKXtcbiAgICBjb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcblxuICAgIGlmKG1vbmdvb3NlLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZSA9PT0gMSl7XG4gICAgICAgIHJldHVybiBtb25nb29zZS5jb25uZWN0aW9uLmFzUHJvbWlzZSgpO1xuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdCh1cmkpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJtb25nb29zZUNvbm5lY3QiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImFzUHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   isAdminRequest: () => (/* binding */ isAdminRequest)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"@auth/mongodb-adapter\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__]);\n_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// import AppleProvider from 'next-auth/providers/apple'\n// import FacebookProvider from 'next-auth/providers/facebook'\n\n// import EmailProvider from 'next-auth/providers/email'\nconst adminEmail = [\n    \"lakmalai72@gmail.com\"\n];\nconst authOptions = {\n    providers: [\n        // OAuth authentication providers...\n        // AppleProvider({\n        //   clientId: process.env.APPLE_ID,\n        //   clientSecret: process.env.APPLE_SECRET\n        // }),\n        // FacebookProvider({\n        //   clientId: process.env.FACEBOOK_ID,\n        //   clientSecret: process.env.FACEBOOK_SECRET\n        // }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        })\n    ],\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__.MongoDBAdapter)(_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n    callbacks: {\n        session: ({ session, token, user })=>{\n            // console.log({session, token, user});\n            if (adminEmail.includes(session?.user?.email)) {\n                return session;\n            } else {\n                return false;\n            }\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_2___default()(authOptions));\nasync function isAdminRequest(req, res) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(req, res, authOptions);\n    if (!adminEmail.includes(session?.user?.email)) {\n        res.status(401);\n        res.end();\n        throw \"not an admin\";\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNvQjtBQUNBO0FBQ3ZELHdEQUF3RDtBQUN4RCw4REFBOEQ7QUFDTjtBQUN4RCx3REFBd0Q7QUFFeEQsTUFBTUssYUFBYTtJQUFDO0NBQXVCO0FBRXBDLE1BQU1DLGNBQWM7SUFDekJDLFdBQVc7UUFDVCxvQ0FBb0M7UUFDcEMsa0JBQWtCO1FBQ2xCLG9DQUFvQztRQUNwQywyQ0FBMkM7UUFDM0MsTUFBTTtRQUNOLHFCQUFxQjtRQUNyQix1Q0FBdUM7UUFDdkMsOENBQThDO1FBQzlDLE1BQU07UUFDTkgsaUVBQWNBLENBQUM7WUFDYkksVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO1lBQy9CQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLGFBQWE7UUFDekM7S0FNRDtJQUNEQyxTQUFTYixxRUFBY0EsQ0FBQ0Qsb0RBQU1BO0lBQzlCZSxXQUFXO1FBQ1RDLFNBQVMsQ0FBQyxFQUFFQSxPQUFPLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFO1lBQ2hDLHVDQUF1QztZQUN2QyxJQUFJYixXQUFXYyxRQUFRLENBQUNILFNBQVNFLE1BQU1FLFFBQVE7Z0JBQzdDLE9BQU9KO1lBQ1QsT0FBTztnQkFDTCxPQUFPO1lBQ1Q7UUFDRjtJQUNGO0FBT0YsRUFBRTtBQUVGLGlFQUFlZCxnREFBUUEsQ0FBQ0ksWUFBWUEsRUFBQztBQUU5QixlQUFlZSxlQUFlQyxHQUFHLEVBQUVDLEdBQUc7SUFDM0MsTUFBTVAsVUFBVSxNQUFNYiwyREFBZ0JBLENBQUNtQixLQUFLQyxLQUFLakI7SUFFakQsSUFBSSxDQUFDRCxXQUFXYyxRQUFRLENBQUNILFNBQVNFLE1BQU1FLFFBQVE7UUFDOUNHLElBQUlDLE1BQU0sQ0FBQztRQUNYRCxJQUFJRSxHQUFHO1FBQ1AsTUFBTTtJQUNSO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYWRtaW4vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudCBmcm9tIFwiQC9saWIvbW9uZ29kYlwiO1xuaW1wb3J0IHsgTW9uZ29EQkFkYXB0ZXIgfSBmcm9tIFwiQGF1dGgvbW9uZ29kYi1hZGFwdGVyXCI7XG5pbXBvcnQgTmV4dEF1dGgsIHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbi8vIGltcG9ydCBBcHBsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvYXBwbGUnXG4vLyBpbXBvcnQgRmFjZWJvb2tQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2ZhY2Vib29rJ1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuLy8gaW1wb3J0IEVtYWlsUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9lbWFpbCdcblxuY29uc3QgYWRtaW5FbWFpbCA9IFtcImxha21hbGFpNzJAZ21haWwuY29tXCJdO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIC8vIE9BdXRoIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVycy4uLlxuICAgIC8vIEFwcGxlUHJvdmlkZXIoe1xuICAgIC8vICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkFQUExFX0lELFxuICAgIC8vICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5BUFBMRV9TRUNSRVRcbiAgICAvLyB9KSxcbiAgICAvLyBGYWNlYm9va1Byb3ZpZGVyKHtcbiAgICAvLyAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5GQUNFQk9PS19JRCxcbiAgICAvLyAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfU0VDUkVUXG4gICAgLy8gfSksXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX1NFQ1JFVCxcbiAgICB9KSxcbiAgICAvLyBQYXNzd29yZGxlc3MgLyBlbWFpbCBzaWduIGluXG4gICAgLy8gRW1haWxQcm92aWRlcih7XG4gICAgLy8gICBzZXJ2ZXI6IHByb2Nlc3MuZW52Lk1BSUxfU0VSVkVSLFxuICAgIC8vICAgZnJvbTogJ05leHRBdXRoLmpzIDxuby1yZXBseUBleGFtcGxlLmNvbT4nXG4gICAgLy8gfSksXG4gIF0sXG4gIGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudCksXG4gIGNhbGxiYWNrczoge1xuICAgIHNlc3Npb246ICh7IHNlc3Npb24sIHRva2VuLCB1c2VyIH0pID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHtzZXNzaW9uLCB0b2tlbiwgdXNlcn0pO1xuICAgICAgaWYgKGFkbWluRW1haWwuaW5jbHVkZXMoc2Vzc2lvbj8udXNlcj8uZW1haWwpKSB7XG4gICAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIC8vIGNhbGxiYWNrczoge1xuICAvLyAgIGp3dDogKHt0b2tlbiwgYWNjb3VudCwgcHJvZmlsZX0pID0+IHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHt0b2tlbiwgYWNjb3VudCwgcHJvZmlsZX0pO1xuICAvLyAgICAgcmV0dXJuIHRva2VuO1xuICAvLyAgIH0sXG4gIC8vIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0FkbWluUmVxdWVzdChyZXEsIHJlcykge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihyZXEsIHJlcywgYXV0aE9wdGlvbnMpO1xuICBcbiAgaWYgKCFhZG1pbkVtYWlsLmluY2x1ZGVzKHNlc3Npb24/LnVzZXI/LmVtYWlsKSkge1xuICAgIHJlcy5zdGF0dXMoNDAxKTtcbiAgICByZXMuZW5kKCk7XG4gICAgdGhyb3cgXCJub3QgYW4gYWRtaW5cIjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNsaWVudCIsIk1vbmdvREJBZGFwdGVyIiwiTmV4dEF1dGgiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiR29vZ2xlUHJvdmlkZXIiLCJhZG1pbkVtYWlsIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfU0VDUkVUIiwiYWRhcHRlciIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ0b2tlbiIsInVzZXIiLCJpbmNsdWRlcyIsImVtYWlsIiwiaXNBZG1pblJlcXVlc3QiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./pages/api/upload.js":
/*!*****************************!*\
  !*** ./pages/api/upload.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiparty */ \"multiparty\");\n/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multiparty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/client-s3 */ \"@aws-sdk/client-s3\");\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mime-types */ \"mime-types\");\n/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mime_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _auth_nextauth___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_nextauth___WEBPACK_IMPORTED_MODULE_5__]);\n_auth_nextauth___WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nasync function handle(req, res) {\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_4__.mongooseConnect)();\n    await (0,_auth_nextauth___WEBPACK_IMPORTED_MODULE_5__.isAdminRequest)(req, res);\n    const form = new (multiparty__WEBPACK_IMPORTED_MODULE_0___default().Form)();\n    const { fields, files } = await new Promise((resolve, reject)=>{\n        form.parse(req, (err, fields, files)=>{\n            if (err) reject(err);\n            resolve({\n                fields,\n                files\n            });\n        });\n    });\n    console.log(\"length:\", files.file.length);\n    const client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.S3Client({\n        region: \"eu-north-1\",\n        credentials: {\n            accessKeyId: process.env.S3_ACCESS_KEY,\n            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY\n        }\n    });\n    const links = [];\n    for (const file of files.file){\n        const ext = file.originalFilename.split(\".\").pop();\n        const newfileName = Date.now() + \"img\" + \".\" + ext;\n        //console.log({ ext, file });\n        await client.send(new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.PutObjectCommand({\n            Bucket: process.env.S3_BUCKET_NAME,\n            Key: newfileName,\n            Body: fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(file.path),\n            ACL: \"public-read\",\n            ContentType: mime_types__WEBPACK_IMPORTED_MODULE_3___default().lookup(file.path)\n        }));\n        const link = `https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/${newfileName}`;\n        links.push(link);\n    }\n    return res.json({\n        links\n    });\n}\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvQztBQUM0QjtBQUM1QztBQUNVO0FBQ21CO0FBQ0s7QUFFdkMsZUFBZU8sT0FBT0MsR0FBRyxFQUFFQyxHQUFHO0lBQ3pDLE1BQU1KLDhEQUFlQTtJQUNyQixNQUFNQywrREFBY0EsQ0FBQ0UsS0FBS0M7SUFHMUIsTUFBTUMsT0FBTyxJQUFJVix3REFBZTtJQUNoQyxNQUFNLEVBQUVZLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTSxJQUFJQyxRQUFRLENBQUNDLFNBQVNDO1FBQ2xETixLQUFLTyxLQUFLLENBQUNULEtBQUssQ0FBQ1UsS0FBS04sUUFBUUM7WUFDMUIsSUFBSUssS0FBS0YsT0FBT0U7WUFDaEJILFFBQVE7Z0JBQUVIO2dCQUFRQztZQUFNO1FBRTVCO0lBQ0o7SUFDQU0sUUFBUUMsR0FBRyxDQUFDLFdBQVdQLE1BQU1RLElBQUksQ0FBQ0MsTUFBTTtJQUV4QyxNQUFNQyxTQUFTLElBQUlyQix3REFBUUEsQ0FBQztRQUN4QnNCLFFBQVE7UUFDUkMsYUFBYTtZQUNUQyxhQUFhQyxRQUFRQyxHQUFHLENBQUNDLGFBQWE7WUFDdENDLGlCQUFpQkgsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7UUFDckQ7SUFDSjtJQUNBLE1BQU1DLFFBQVEsRUFBRTtJQUVoQixLQUFLLE1BQU1YLFFBQVFSLE1BQU1RLElBQUksQ0FBRTtRQUMzQixNQUFNWSxNQUFNWixLQUFLYSxnQkFBZ0IsQ0FBQ0MsS0FBSyxDQUFDLEtBQUtDLEdBQUc7UUFDaEQsTUFBTUMsY0FBY0MsS0FBS0MsR0FBRyxLQUFLLFFBQVEsTUFBTU47UUFDL0MsNkJBQTZCO1FBQzdCLE1BQU1WLE9BQU9pQixJQUFJLENBQUMsSUFBSXZDLGdFQUFnQkEsQ0FBQztZQUNuQ3dDLFFBQVFkLFFBQVFDLEdBQUcsQ0FBQ2MsY0FBYztZQUNsQ0MsS0FBS047WUFDTE8sTUFBTXpDLHNEQUFlLENBQUNrQixLQUFLeUIsSUFBSTtZQUMvQkMsS0FBSztZQUNMQyxhQUFhNUMsd0RBQVcsQ0FBQ2lCLEtBQUt5QixJQUFJO1FBRXRDO1FBQ0EsTUFBTUksT0FBTyxDQUFDLFFBQVEsRUFBRXZCLFFBQVFDLEdBQUcsQ0FBQ2MsY0FBYyxDQUFDLGtCQUFrQixFQUFFTCxZQUFZLENBQUM7UUFDcEZMLE1BQU1tQixJQUFJLENBQUNEO0lBQ2Y7SUFDQSxPQUFPekMsSUFBSTJDLElBQUksQ0FBQztRQUFFcEI7SUFBTTtBQUM1QjtBQUVPLE1BQU1xQixTQUFTO0lBQ2xCQyxLQUFLO1FBQUVDLFlBQVk7SUFBTTtBQUM3QixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWFkbWluLy4vcGFnZXMvYXBpL3VwbG9hZC5qcz81NTcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtdWx0aXBhcnR5IGZyb20gJ211bHRpcGFydHknO1xuaW1wb3J0IHsgUHV0T2JqZWN0Q29tbWFuZCwgUzNDbGllbnQgfSBmcm9tICdAYXdzLXNkay9jbGllbnQtczMnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBtaW1lIGZyb20gJ21pbWUtdHlwZXMnO1xuaW1wb3J0IHsgbW9uZ29vc2VDb25uZWN0IH0gZnJvbSAnQC9saWIvbW9uZ29vc2UnO1xuaW1wb3J0IHsgaXNBZG1pblJlcXVlc3QgfSBmcm9tICcuL2F1dGgvWy4uLm5leHRhdXRoXSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcykge1xuICAgIGF3YWl0IG1vbmdvb3NlQ29ubmVjdCgpO1xuICAgIGF3YWl0IGlzQWRtaW5SZXF1ZXN0KHJlcSwgcmVzKTtcblxuXG4gICAgY29uc3QgZm9ybSA9IG5ldyBtdWx0aXBhcnR5LkZvcm0oKTtcbiAgICBjb25zdCB7IGZpZWxkcywgZmlsZXMgfSA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZm9ybS5wYXJzZShyZXEsIChlcnIsIGZpZWxkcywgZmlsZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGZpZWxkcywgZmlsZXMgfSk7XG5cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJ2xlbmd0aDonLCBmaWxlcy5maWxlLmxlbmd0aCk7XG5cbiAgICBjb25zdCBjbGllbnQgPSBuZXcgUzNDbGllbnQoe1xuICAgICAgICByZWdpb246ICdldS1ub3J0aC0xJyxcbiAgICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBwcm9jZXNzLmVudi5TM19BQ0NFU1NfS0VZLFxuICAgICAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiBwcm9jZXNzLmVudi5TM19TRUNSRVRfQUNDRVNTX0tFWSxcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGxpbmtzID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMuZmlsZSkge1xuICAgICAgICBjb25zdCBleHQgPSBmaWxlLm9yaWdpbmFsRmlsZW5hbWUuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICAgICAgY29uc3QgbmV3ZmlsZU5hbWUgPSBEYXRlLm5vdygpICsgJ2ltZycgKyAnLicgKyBleHQ7XG4gICAgICAgIC8vY29uc29sZS5sb2coeyBleHQsIGZpbGUgfSk7XG4gICAgICAgIGF3YWl0IGNsaWVudC5zZW5kKG5ldyBQdXRPYmplY3RDb21tYW5kKHtcbiAgICAgICAgICAgIEJ1Y2tldDogcHJvY2Vzcy5lbnYuUzNfQlVDS0VUX05BTUUsXG4gICAgICAgICAgICBLZXk6IG5ld2ZpbGVOYW1lLFxuICAgICAgICAgICAgQm9keTogZnMucmVhZEZpbGVTeW5jKGZpbGUucGF0aCksXG4gICAgICAgICAgICBBQ0w6ICdwdWJsaWMtcmVhZCcsXG4gICAgICAgICAgICBDb250ZW50VHlwZTogbWltZS5sb29rdXAoZmlsZS5wYXRoKSxcblxuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBgaHR0cHM6Ly8ke3Byb2Nlc3MuZW52LlMzX0JVQ0tFVF9OQU1FfS5zMy5hbWF6b25hd3MuY29tLyR7bmV3ZmlsZU5hbWV9YDtcbiAgICAgICAgbGlua3MucHVzaChsaW5rKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKHsgbGlua3MgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gICAgYXBpOiB7IGJvZHlQYXJzZXI6IGZhbHNlIH0sXG59OyJdLCJuYW1lcyI6WyJtdWx0aXBhcnR5IiwiUHV0T2JqZWN0Q29tbWFuZCIsIlMzQ2xpZW50IiwiZnMiLCJtaW1lIiwibW9uZ29vc2VDb25uZWN0IiwiaXNBZG1pblJlcXVlc3QiLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJmb3JtIiwiRm9ybSIsImZpZWxkcyIsImZpbGVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJzZSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJmaWxlIiwibGVuZ3RoIiwiY2xpZW50IiwicmVnaW9uIiwiY3JlZGVudGlhbHMiLCJhY2Nlc3NLZXlJZCIsInByb2Nlc3MiLCJlbnYiLCJTM19BQ0NFU1NfS0VZIiwic2VjcmV0QWNjZXNzS2V5IiwiUzNfU0VDUkVUX0FDQ0VTU19LRVkiLCJsaW5rcyIsImV4dCIsIm9yaWdpbmFsRmlsZW5hbWUiLCJzcGxpdCIsInBvcCIsIm5ld2ZpbGVOYW1lIiwiRGF0ZSIsIm5vdyIsInNlbmQiLCJCdWNrZXQiLCJTM19CVUNLRVRfTkFNRSIsIktleSIsIkJvZHkiLCJyZWFkRmlsZVN5bmMiLCJwYXRoIiwiQUNMIiwiQ29udGVudFR5cGUiLCJsb29rdXAiLCJsaW5rIiwicHVzaCIsImpzb24iLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/upload.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fupload&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fupload.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();