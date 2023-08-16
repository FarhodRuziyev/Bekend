"use strict";
(() => {
var exports = {};
exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _data_products_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(942);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function handler(req, res) {
    let prod = _data_products_json__WEBPACK_IMPORTED_MODULE_0__/* .products */ .R;
    if (req.method == "GET") {
        res.status(200).json({
            products: prod,
            total: prod.length
        });
    } else if (req.method == "POST") {
        prod.push({
            ...req.body,
            id: `${prod.length + 1}`
        });
        res.status(201).json({
            product: {
                ...req.body,
                id: `${prod.length + 1}`
            }
        });
    }
}


/***/ }),

/***/ 942:
/***/ ((module) => {

module.exports = JSON.parse('{"R":[{"id":"1","product":"hp","price":1200},{"id":"2","product":"mac","price":300},{"id":"3","product":"dell","price":1000},{"id":"4","product":"asus","price":2000}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(833));
module.exports = __webpack_exports__;

})();