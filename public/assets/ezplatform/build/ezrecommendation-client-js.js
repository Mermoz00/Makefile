(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezrecommendation-client-js"],{

/***/ "./vendor/ezsystems/ezrecommendation-client/src/bundle/Resources/public/js/EzRecommendationClient.js":
/*!***********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezrecommendation-client/src/bundle/Resources/public/js/EzRecommendationClient.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EzRecommendationClient = /*#__PURE__*/function () {
  "use strict";

  function EzRecommendationClient() {
    _classCallCheck(this, EzRecommendationClient);
  }

  _createClass(EzRecommendationClient, [{
    key: "ping",
    value:
    /**
     * Sends notification ping.
     *
     * @method ping
     * @param {String} url
     */
    function ping(url) {
      var request = new Request(url);
      this.sendRequest(request);
    }
    /**
     * Sends request.
     *
     * @method sendRequest
     * @param {Request} request
     */

  }, {
    key: "sendRequest",
    value: function sendRequest(request) {
      if (false === request instanceof Request) {
        throw new TypeError("Parameter request must be instance of Request. ".concat(_typeof(request), " given"));
      }

      return fetch(request).then(function (response) {
        if (!response.ok) {
          throw new Error("Response was not properly. Status: ".concat(response.status, ", StatusText: ").concat(response.statusText));
        }

        return response;
      })["catch"](function (error) {
        console.log('Response error: ', error.message);
      });
    }
  }]);

  return EzRecommendationClient;
}();

window.EzRecommendationClient = EzRecommendationClient;

/***/ }),

/***/ 65:
/*!*****************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezrecommendation-client/src/bundle/Resources/public/js/EzRecommendationClient.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /opt/arithnea/home/devuser/PhpstormProjects/symfonycast/vendor/ezsystems/ezrecommendation-client/src/bundle/Resources/public/js/EzRecommendationClient.js */"./vendor/ezsystems/ezrecommendation-client/src/bundle/Resources/public/js/EzRecommendationClient.js");


/***/ })

},[[65,"runtime"]]]);