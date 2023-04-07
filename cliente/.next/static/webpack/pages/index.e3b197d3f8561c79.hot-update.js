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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/datatable */ \"./node_modules/primereact/datatable/datatable.esm.js\");\n/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/column */ \"./node_modules/primereact/column/column.esm.js\");\n/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/button */ \"./node_modules/primereact/button/button.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ListaTask = (param)=>{\n    let { titulo  } = param;\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const eliminarBD = async (id)=>{\n        lo;\n        const response = await fetch(\"https://1xxfiae67d.execute-api.us-east-1.amazonaws.com/tasks/\".concat(id), {\n            method: \"DELETE\"\n        });\n        if (!response.ok) {\n            throw new Error(\"No se pudo eliminar el registro de la base de datos\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchTasks = async ()=>{\n            try {\n                const response = await fetch(\"https://1xxfiae67d.execute-api.us-east-1.amazonaws.com/tasks\");\n                const data = await response.json();\n                setTasks(data.body.tasks); // Actualiza el estado con los datos obtenidos\n            } catch (error) {\n                console.error(\"Error fetching tasks:\", error);\n            }\n            console.log(tasks);\n        };\n        fetchTasks();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: titulo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Lista de usuarios\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_datatable__WEBPACK_IMPORTED_MODULE_2__.DataTable, {\n                            value: tasks,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_3__.Column, {\n                                    field: \"id\",\n                                    header: \"ID\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_3__.Column, {\n                                    field: \"title\",\n                                    header: \"Titulo\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_3__.Column, {\n                                    field: \"description\",\n                                    header: \"Descripci\\xf3n\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_3__.Column, {\n                                    field: \"createdAt\",\n                                    header: \"Fecha de creacion\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_3__.Column, {\n                                    body: (rowData)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                            children: \"Editar\"\n                                        }, void 0, false, void 0, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_3__.Column, {\n                                    body: (rowData)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                            onClick: ()=>eliminarBD(rowData.idusuario),\n                                            type: \"submit\",\n                                            label: \"Borrar\",\n                                            className: \"mt-2\",\n                                            id: \"rowData.idusuario\"\n                                        }, void 0, false, void 0, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ListaTask, \"bBd6yqkqV9dlkj9ENgRyXKaiXpk=\");\n_c = ListaTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListaTask);\nvar _c;\n$RefreshReg$(_c, \"ListaTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9saXN0YVRhc2sudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFDRjtBQUNOO0FBQ0E7QUFjM0MsTUFBTU0sWUFBWSxTQUEyQjtRQUExQixFQUFFQyxPQUFNLEVBQWE7O0lBQ3RDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBUyxFQUFFO0lBRTdDLE1BQU1TLGFBQWEsT0FBT0MsS0FBOEI7UUFDdERDO1FBQ0EsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGdFQUFtRSxPQUFISCxLQUFNO1lBQ2pHSSxRQUFRO1FBQ1Y7UUFDQSxJQUFJLENBQUNGLFNBQVNHLEVBQUUsRUFBRTtZQUNoQixNQUFNLElBQUlDLE1BQU0sdURBQXVEO1FBQ3pFLENBQUM7SUFDSDtJQUlBZixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTWdCLGFBQWEsVUFBWTtZQUM3QixJQUFJO2dCQUNGLE1BQU1MLFdBQVcsTUFBTUMsTUFBTTtnQkFDN0IsTUFBTUssT0FBTyxNQUFNTixTQUFTTyxJQUFJO2dCQUNoQ1gsU0FBU1UsS0FBS0UsSUFBSSxDQUFDYixLQUFLLEdBQUcsOENBQThDO1lBSTNFLEVBQUUsT0FBT2MsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7WUFDekM7WUFDQUMsUUFBUUMsR0FBRyxDQUFDaEI7UUFFZDtRQUVBVTtJQUtGLEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQ087MEJBQUlsQjs7Ozs7OzBCQUdMLDhEQUFDbUI7O2tDQUNDLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDRDt3QkFBSUUsV0FBVTtrQ0FDYiw0RUFBQ3pCLDJEQUFTQTs0QkFBQzBCLE9BQU9yQjs7OENBR2hCLDhEQUFDSixxREFBTUE7b0NBQUMwQixPQUFNO29DQUFLQyxRQUFPOzs7Ozs7OENBQzFCLDhEQUFDM0IscURBQU1BO29DQUFDMEIsT0FBTTtvQ0FBUUMsUUFBTzs7Ozs7OzhDQUM3Qiw4REFBQzNCLHFEQUFNQTtvQ0FBQzBCLE9BQU07b0NBQWNDLFFBQU87Ozs7Ozs4Q0FDbkMsOERBQUMzQixxREFBTUE7b0NBQUMwQixPQUFNO29DQUFZQyxRQUFPOzs7Ozs7OENBQ2pDLDhEQUFDM0IscURBQU1BO29DQUNMaUIsTUFBTVcsQ0FBQUEsd0JBQ0osOERBQUMzQixxREFBTUE7c0RBRU47Ozs7Ozs7OENBS0wsOERBQUNELHFEQUFNQTtvQ0FDTGlCLE1BQU1XLENBQUFBLHdCQUNKLDhEQUFDM0IscURBQU1BOzRDQUFDNEIsU0FBUyxJQUFNdkIsV0FBV3NCLFFBQVFFLFNBQVM7NENBQUdDLE1BQUs7NENBQVNDLE9BQU07NENBQVNSLFdBQVU7NENBQU9qQixJQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWF2SDtHQTdFTUw7S0FBQUE7QUErRU4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGlzdGFUYXNrLnRzeD9mNWJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEYXRhVGFibGUgfSBmcm9tICdwcmltZXJlYWN0L2RhdGF0YWJsZSc7XHJcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJ3ByaW1lcmVhY3QvY29sdW1uJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncHJpbWVyZWFjdC9idXR0b24nO1xyXG5cclxuXHJcblxyXG50eXBlIExpc3RhVGFzayA9IHtcclxuICB0aXR1bG86IHN0cmluZztcclxufTtcclxuXHJcbnR5cGUgVGFzayA9IHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBjcmVhdGVkQXQ6IHN0cmluZztcclxufTtcclxuY29uc3QgTGlzdGFUYXNrID0gKHsgdGl0dWxvIH06IExpc3RhVGFzaykgPT4ge1xyXG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGU8VGFza1tdPihbXSk7XHJcblxyXG4gIGNvbnN0IGVsaW1pbmFyQkQgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgbG9cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vMXh4ZmlhZTY3ZC5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS90YXNrcy8ke2lkfWAsIHtcclxuICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgfSk7XHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gc2UgcHVkbyBlbGltaW5hciBlbCByZWdpc3RybyBkZSBsYSBiYXNlIGRlIGRhdG9zJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hUYXNrcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovLzF4eGZpYWU2N2QuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vdGFza3MnKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHNldFRhc2tzKGRhdGEuYm9keS50YXNrcyk7IC8vIEFjdHVhbGl6YSBlbCBlc3RhZG8gY29uIGxvcyBkYXRvcyBvYnRlbmlkb3NcclxuXHJcblxyXG5cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB0YXNrczonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2codGFza3MpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hUYXNrcygpO1xyXG4gXHJcbiAgICBcclxuIFxyXG4gXHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxPnt0aXR1bG99PC9oMT5cclxuXHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj5MaXN0YSBkZSB1c3VhcmlvczwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICA8RGF0YVRhYmxlIHZhbHVlPXt0YXNrc30+XHJcblxyXG5cclxuICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cImlkXCIgaGVhZGVyPVwiSURcIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cInRpdGxlXCIgaGVhZGVyPVwiVGl0dWxvXCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJkZXNjcmlwdGlvblwiIGhlYWRlcj1cIkRlc2NyaXBjacOzblwiPjwvQ29sdW1uPlxyXG4gICAgICAgICAgICA8Q29sdW1uIGZpZWxkPVwiY3JlYXRlZEF0XCIgaGVhZGVyPVwiRmVjaGEgZGUgY3JlYWNpb25cIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgPENvbHVtblxyXG4gICAgICAgICAgICAgIGJvZHk9e3Jvd0RhdGEgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG5cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRWRpdGFyXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICAgICAgYm9keT17cm93RGF0YSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGVsaW1pbmFyQkQocm93RGF0YS5pZHVzdWFyaW8pfSB0eXBlPVwic3VibWl0XCIgbGFiZWw9XCJCb3JyYXJcIiBjbGFzc05hbWU9XCJtdC0yXCIgaWQ9XCJyb3dEYXRhLmlkdXN1YXJpb1wiIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRGF0YVRhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RhVGFzaztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJEYXRhVGFibGUiLCJDb2x1bW4iLCJCdXR0b24iLCJMaXN0YVRhc2siLCJ0aXR1bG8iLCJ0YXNrcyIsInNldFRhc2tzIiwiZWxpbWluYXJCRCIsImlkIiwibG8iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwib2siLCJFcnJvciIsImZldGNoVGFza3MiLCJkYXRhIiwianNvbiIsImJvZHkiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJoMSIsImRpdiIsImgyIiwiY2xhc3NOYW1lIiwidmFsdWUiLCJmaWVsZCIsImhlYWRlciIsInJvd0RhdGEiLCJvbkNsaWNrIiwiaWR1c3VhcmlvIiwidHlwZSIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/listaTask.tsx\n"));

/***/ })

});