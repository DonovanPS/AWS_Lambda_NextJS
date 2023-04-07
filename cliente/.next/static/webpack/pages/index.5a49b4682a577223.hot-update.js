"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/listaTask.tsx":
/*!**************************************!*\
  !*** ./src/components/listaTask.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/datatable */ \"./node_modules/primereact/datatable/datatable.esm.js\");\n/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/column */ \"./node_modules/primereact/column/column.esm.js\");\n/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/button */ \"./node_modules/primereact/button/button.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ListaTask = (param)=>{\n    let { titulo  } = param;\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const eliminarBD = async (id)=>{\n        const response = await fetch(\"https://1xxfiae67d.execute-api.us-east-1.amazonaws.com/tasks/\".concat(id), {\n            method: \"DELETE\"\n        });\n        if (!response.ok) {\n            throw new Error(\"No se pudo eliminar el registro de la base de datos\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchTasks = async ()=>{\n            try {\n                const response = await fetch(\"https://1xxfiae67d.execute-api.us-east-1.amazonaws.com/tasks\");\n                const data = await response.json();\n                setTasks(data.body.tasks); // Actualiza el estado con los datos obtenidos\n            } catch (error) {\n                console.error(\"Error fetching tasks:\", error);\n            }\n            console.log(tasks);\n        };\n        fetchTasks();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: titulo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Lista de usuarios\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_datatable__WEBPACK_IMPORTED_MODULE_2__.DataTable, {\n                            value: tasks,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_3__.Column, {\n                                    field: \"id\",\n                                    header: \"ID\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_3__.Column, {\n                                    field: \"title\",\n                                    header: \"Titulo\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_3__.Column, {\n                                    field: \"description\",\n                                    header: \"Descripci\\xf3n\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_3__.Column, {\n                                    field: \"createdAt\",\n                                    header: \"Fecha de creacion\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_3__.Column, {\n                                    body: (rowData)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                            children: \"Editar\"\n                                        }, void 0, false, void 0, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_3__.Column, {\n                                    body: (rowData)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                            onClick: ()=>eliminarBD(rowData.idusuario),\n                                            type: \"submit\",\n                                            label: \"Borrar\",\n                                            className: \"mt-2\",\n                                            id: \"rowData.idusuario\"\n                                        }, void 0, false, void 0, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ListaTask, \"bBd6yqkqV9dlkj9ENgRyXKaiXpk=\");\n_c = ListaTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListaTask);\nvar _c;\n$RefreshReg$(_c, \"ListaTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9saXN0YVRhc2sudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFDRjtBQUNOO0FBQ0E7QUFjM0MsTUFBTU0sWUFBWSxTQUEyQjtRQUExQixFQUFFQyxPQUFNLEVBQWE7O0lBQ3RDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBUyxFQUFFO0lBRTdDLE1BQU1TLGFBQWEsT0FBT0MsS0FBOEI7UUFDdEQsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGdFQUFtRSxPQUFIRixLQUFNO1lBQ2pHRyxRQUFRO1FBQ1Y7UUFDQSxJQUFJLENBQUNGLFNBQVNHLEVBQUUsRUFBRTtZQUNoQixNQUFNLElBQUlDLE1BQU0sdURBQXVEO1FBQ3pFLENBQUM7SUFDSDtJQUVBZCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTWUsYUFBYSxVQUFZO1lBQzdCLElBQUk7Z0JBQ0YsTUFBTUwsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixNQUFNSyxPQUFPLE1BQU1OLFNBQVNPLElBQUk7Z0JBQ2hDVixTQUFTUyxLQUFLRSxJQUFJLENBQUNaLEtBQUssR0FBRyw4Q0FBOEM7WUFJM0UsRUFBRSxPQUFPYSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMseUJBQXlCQTtZQUN6QztZQUNBQyxRQUFRQyxHQUFHLENBQUNmO1FBRWQ7UUFFQVM7SUFLRixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0UsOERBQUNPOzBCQUFJakI7Ozs7OzswQkFHTCw4REFBQ2tCOztrQ0FDQyw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0Q7d0JBQUlFLFdBQVU7a0NBQ2IsNEVBQUN4QiwyREFBU0E7NEJBQUN5QixPQUFPcEI7OzhDQUdoQiw4REFBQ0oscURBQU1BO29DQUFDeUIsT0FBTTtvQ0FBS0MsUUFBTzs7Ozs7OzhDQUMxQiw4REFBQzFCLHFEQUFNQTtvQ0FBQ3lCLE9BQU07b0NBQVFDLFFBQU87Ozs7Ozs4Q0FDN0IsOERBQUMxQixxREFBTUE7b0NBQUN5QixPQUFNO29DQUFjQyxRQUFPOzs7Ozs7OENBQ25DLDhEQUFDMUIscURBQU1BO29DQUFDeUIsT0FBTTtvQ0FBWUMsUUFBTzs7Ozs7OzhDQUNqQyw4REFBQzFCLHFEQUFNQTtvQ0FDTGdCLE1BQU1XLENBQUFBLHdCQUNKLDhEQUFDMUIscURBQU1BO3NEQUVOOzs7Ozs7OzhDQUtMLDhEQUFDRCxxREFBTUE7b0NBQ0xnQixNQUFNVyxDQUFBQSx3QkFDSiw4REFBQzFCLHFEQUFNQTs0Q0FBQzJCLFNBQVMsSUFBTXRCLFdBQVdxQixRQUFRRSxTQUFTOzRDQUFHQyxNQUFLOzRDQUFTQyxPQUFNOzRDQUFTUixXQUFVOzRDQUFPaEIsSUFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhdkg7R0ExRU1MO0tBQUFBO0FBNEVOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xpc3RhVGFzay50c3g/ZjViZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRGF0YVRhYmxlIH0gZnJvbSAncHJpbWVyZWFjdC9kYXRhdGFibGUnO1xyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICdwcmltZXJlYWN0L2NvbHVtbic7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3ByaW1lcmVhY3QvYnV0dG9uJztcclxuXHJcblxyXG5cclxudHlwZSBMaXN0YVRhc2sgPSB7XHJcbiAgdGl0dWxvOiBzdHJpbmc7XHJcbn07XHJcblxyXG50eXBlIFRhc2sgPSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XHJcbn07XHJcbmNvbnN0IExpc3RhVGFzayA9ICh7IHRpdHVsbyB9OiBMaXN0YVRhc2spID0+IHtcclxuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlPFRhc2tbXT4oW10pO1xyXG5cclxuICBjb25zdCBlbGltaW5hckJEID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vMXh4ZmlhZTY3ZC5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS90YXNrcy8ke2lkfWAsIHtcclxuICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgfSk7XHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gc2UgcHVkbyBlbGltaW5hciBlbCByZWdpc3RybyBkZSBsYSBiYXNlIGRlIGRhdG9zJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoVGFza3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly8xeHhmaWFlNjdkLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL3Rhc2tzJyk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXRUYXNrcyhkYXRhLmJvZHkudGFza3MpOyAvLyBBY3R1YWxpemEgZWwgZXN0YWRvIGNvbiBsb3MgZGF0b3Mgb2J0ZW5pZG9zXHJcblxyXG5cclxuXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdGFza3M6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoVGFza3MoKTtcclxuIFxyXG4gICAgXHJcbiBcclxuIFxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMT57dGl0dWxvfTwvaDE+XHJcblxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDI+TGlzdGEgZGUgdXN1YXJpb3M8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgPERhdGFUYWJsZSB2YWx1ZT17dGFza3N9PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJpZFwiIGhlYWRlcj1cIklEXCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJ0aXRsZVwiIGhlYWRlcj1cIlRpdHVsb1wiPjwvQ29sdW1uPlxyXG4gICAgICAgICAgICA8Q29sdW1uIGZpZWxkPVwiZGVzY3JpcHRpb25cIiBoZWFkZXI9XCJEZXNjcmlwY2nDs25cIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cImNyZWF0ZWRBdFwiIGhlYWRlcj1cIkZlY2hhIGRlIGNyZWFjaW9uXCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgIDxDb2x1bW5cclxuICAgICAgICAgICAgICBib2R5PXtyb3dEYXRhID0+IChcclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEVkaXRhclxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENvbHVtblxyXG4gICAgICAgICAgICAgIGJvZHk9e3Jvd0RhdGEgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBlbGltaW5hckJEKHJvd0RhdGEuaWR1c3VhcmlvKX0gdHlwZT1cInN1Ym1pdFwiIGxhYmVsPVwiQm9ycmFyXCIgY2xhc3NOYW1lPVwibXQtMlwiIGlkPVwicm93RGF0YS5pZHVzdWFyaW9cIiAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0RhdGFUYWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0YVRhc2s7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRGF0YVRhYmxlIiwiQ29sdW1uIiwiQnV0dG9uIiwiTGlzdGFUYXNrIiwidGl0dWxvIiwidGFza3MiLCJzZXRUYXNrcyIsImVsaW1pbmFyQkQiLCJpZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJvayIsIkVycm9yIiwiZmV0Y2hUYXNrcyIsImRhdGEiLCJqc29uIiwiYm9keSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImgxIiwiZGl2IiwiaDIiLCJjbGFzc05hbWUiLCJ2YWx1ZSIsImZpZWxkIiwiaGVhZGVyIiwicm93RGF0YSIsIm9uQ2xpY2siLCJpZHVzdWFyaW8iLCJ0eXBlIiwibGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/listaTask.tsx\n"));

/***/ })

});