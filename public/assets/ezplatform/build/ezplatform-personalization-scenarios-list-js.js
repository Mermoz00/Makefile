(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-personalization-scenarios-list-js"],{

/***/ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.list.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.list.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (doc, eZ) {
  var scenarioForm = doc.querySelector('.ez-scenario-form');
  var periodSelect = doc.querySelector('.ez-scenario-form__period');

  if (periodSelect) {
    periodSelect.addEventListener('change', function () {
      var dateIntervalInput = scenarioForm.querySelector('input[name="scenario-form[period][date_interval]"]');
      dateIntervalInput.value = event.currentTarget.value;
      scenarioForm.submit();
    }, false);
  }
})(window.document, window.eZ);

/***/ }),

/***/ 69:
/*!************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.list.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /opt/arithnea/home/devuser/PhpstormProjects/symfonycast/vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.list.js */"./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.list.js");


/***/ })

},[[69,"runtime"]]]);