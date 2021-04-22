/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/script.js":
/*!*******************************!*\
  !*** ./src/scripts/script.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/scripts/storage.js");

new Vue({
  el: '#app',
  data: {
    displayAddWindow: false,
    displayTask: false,
    displayList: true,
    displayIsDone: false,
    newLineThrough: 'none',
    blur: 'blur(0px)',
    newTodoId: 0,
    newTodoName: '',
    newTodoDate: '',
    newTodoMonth: '',
    newTodoYear: '',
    newTodoDesc: '',
    newTodoNotification: '',
    newTodoColor: '#000000',
    newTodoDone: 'false',
    tasks: [],
    currentTask: '',
    newTask: ''
  },
  mounted: function mounted() {
    // используем хук жизненого цикла vue для загрузки из storage при загрузке самого vue
    if (localStorage.getItem('tasks')) {
      try {
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
      } catch (e) {
        localStorage.removeItem('tasks');
      }
    }
  },
  methods: {
    openNewTaskWindow: function openNewTaskWindow() {
      this.displayAddWindow = true;
      this.displayTask = false;
      this.displayList = false;
    },
    openSelectedTask: function openSelectedTask(index, task) {
      this.currentTask = task[index];
      this.displayTask = true;
    },
    addNewTask: function addNewTask() {
      this.tasks.push({
        id: this.newTodoId += 1,
        name: this.newTodoName,
        description: this.newTodoDesc,
        time: this.newTodoDate + ' ' + this.newTodoMonth + ' ' + this.newTodoYear,
        color: this.newTodoColor,
        notification: this.newTodoNotification,
        done: this.newTodoDone,
        lineThrough: this.newLineThrough
      });
      this.saveChangesLocal();
      this.clearTaskAfterAdding();
      this.displayAddWindow = false;
      this.displayList = true;
    },
    saveChangesLocal: function saveChangesLocal() {
      var parsed = JSON.stringify(this.tasks);
      localStorage.setItem('tasks', parsed);
    },
    clearTaskAfterAdding: function clearTaskAfterAdding() {
      this.newTodoName = '';
      this.newTodoDate = '';
      this.newTodoMonth = '';
      this.newTodoYear = '';
      this.newTodoDesc = '';
      this.newTodoNotification = '';
      this.newTodoColor = '#000000';
    },
    deleteTask: function deleteTask(id, done) {
      if (done === 'true') {
        this.tasks = this.tasks.filter(function (obj) {
          return obj.id !== id;
        });
        this.currentTask = '';
        this.saveChangesLocal();
        this.displayTask = false;
      } else {
        alert('Mark task done to remove it');
      }
    },
    taskDoneSwitch: function taskDoneSwitch() {
      if (this.currentTask.done === 'true') {
        this.currentTask.done = 'false';
      } else {
        this.currentTask.done = 'true';
      }

      this.lineThroughRender();
      this.saveChangesLocal();
    },
    lineThroughRender: function lineThroughRender() {
      if (this.currentTask.done === 'true') {
        this.currentTask.lineThrough = 'line-through';
      } else if (this.currentTask.done === 'false') {
        this.currentTask.lineThrough = 'none';
      }
    },
    blurOn: function blurOn() {
      if (this.blur === 'blur(0px)') {
        this.blur = 'blur(5px)';
      } else {
        this.blur = 'blur(0px)';
      }
    }
  }
});

/***/ }),

/***/ "./src/scripts/storage.js":
/*!********************************!*\
  !*** ./src/scripts/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorage": () => (/* binding */ LocalStorage)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LocalStorage = /*#__PURE__*/function () {
  function LocalStorage(id, name, description, taskTime, notification, color, done) {
    _classCallCheck(this, LocalStorage);

    this.NewTodoId = id;
    this.taskName = name;
    this.description = description;
    this.taskTime = taskTime;
    this.notification = notification;
    this.color = color;
    this.done = done;
  }

  _createClass(LocalStorage, [{
    key: "addTask",
    value: function addTask() {}
  }]);

  return LocalStorage;
}();

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/scripts/script-dist": 0,
/******/ 			"dist/css/styles": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktodoapp"] = self["webpackChunktodoapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/css/styles"], () => (__webpack_require__("./src/scripts/script.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/css/styles"], () => (__webpack_require__("./src/css/styles.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;