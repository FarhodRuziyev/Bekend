"use strict";
(() => {
var exports = {};
exports.id = 480;
exports.ids = [480];
exports.modules = {

/***/ 362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _data_products_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(942);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function handler(req, res) {
    let { id } = req.query;
    if (req.method == "GET") {
        let prod = _data_products_json__WEBPACK_IMPORTED_MODULE_0__/* .products */ .R;
        let product = prod.filter((item)=>item.id == `${id}`);
        res.status(200).json({
            product: product[0]
        });
    } else if (req.method == "PATCH") {
        res.status(203).json({
            method: "patch"
        });
    } else if (req.method == "DELETE") {
        res.status(204).json({
            method: "delete"
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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(362));
module.exports = __webpack_exports__;

})();