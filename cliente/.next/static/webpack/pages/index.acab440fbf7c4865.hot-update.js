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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/datatable */ \"./node_modules/primereact/datatable/datatable.esm.js\");\n/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/column */ \"./node_modules/primereact/column/column.esm.js\");\n/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/button */ \"./node_modules/primereact/button/button.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ListaTask = (param)=>{\n    let { titulo  } = param;\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchTasks = async ()=>{\n            try {\n                const response = await fetch(\"https://1xxfiae67d.execute-api.us-east-1.amazonaws.com/tasks\");\n                const data = await response.json();\n                setTasks(data.body.tasks); // Actualiza el estado con los datos obtenidos\n            } catch (error) {\n                console.error(\"Error fetching tasks:\", error);\n            }\n            console.log(tasks);\n        };\n        fetchTasks();\n        const eliminarBD = async (id)=>{\n            const response = await fetch(\"https://1xxfiae67d.execute-api.us-east-1.amazonaws.com/tasks/\".concat(id), {\n                method: \"DELETE\"\n            });\n            if (!response.ok) {\n                throw new Error(\"No se pudo eliminar el registro de la base de datos\");\n            }\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: titulo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Lista de usuarios\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_datatable__WEBPACK_IMPORTED_MODULE_2__.DataTable, {\n                            value: tasks,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_3__.Column, {\n                                    field: \"id\",\n                                    header: \"ID\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_3__.Column, {\n                                    field: \"title\",\n                                    header: \"Titulo\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_3__.Column, {\n                                    field: \"description\",\n                                    header: \"Descripci\\xf3n\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_3__.Column, {\n                                    field: \"createdAt\",\n                                    header: \"Fecha de creacion\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_3__.Column, {\n                                    body: (rowData)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                            children: \"Editar\"\n                                        }, void 0, false, void 0, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_3__.Column, {\n                                    body: (rowData)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                            onClick: ()=>el(rowData.idusuario),\n                                            type: \"submit\",\n                                            label: \"Borrar\",\n                                            className: \"mt-2\",\n                                            id: \"rowData.idusuario\"\n                                        }, void 0, false, void 0, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ListaTask, \"bBd6yqkqV9dlkj9ENgRyXKaiXpk=\");\n_c = ListaTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListaTask);\nvar _c;\n$RefreshReg$(_c, \"ListaTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9saXN0YVRhc2sudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFDRjtBQUNOO0FBQ0E7QUFjM0MsTUFBTU0sWUFBWSxTQUEyQjtRQUExQixFQUFFQyxPQUFNLEVBQWE7O0lBQ3RDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBUyxFQUFFO0lBRTdDQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVEsYUFBYSxVQUFZO1lBQzdCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7Z0JBQ2hDTCxTQUFTSSxLQUFLRSxJQUFJLENBQUNQLEtBQUssR0FBRyw4Q0FBOEM7WUFJM0UsRUFBRSxPQUFPUSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMseUJBQXlCQTtZQUN6QztZQUNBQyxRQUFRQyxHQUFHLENBQUNWO1FBRWQ7UUFFQUU7UUFFQSxNQUFNUyxhQUFhLE9BQU9DLEtBQThCO1lBQ3RELE1BQU1ULFdBQVcsTUFBTUMsTUFBTSxnRUFBbUUsT0FBSFEsS0FBTTtnQkFDakdDLFFBQVE7WUFDVjtZQUNBLElBQUksQ0FBQ1YsU0FBU1csRUFBRSxFQUFFO2dCQUNoQixNQUFNLElBQUlDLE1BQU0sdURBQXVEO1lBQ3pFLENBQUM7UUFDSDtJQUdGLEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQ0M7MEJBQUlqQjs7Ozs7OzBCQUdMLDhEQUFDa0I7O2tDQUNDLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDRDt3QkFBSUUsV0FBVTtrQ0FDYiw0RUFBQ3hCLDJEQUFTQTs0QkFBQ3lCLE9BQU9wQjs7OENBR2hCLDhEQUFDSixxREFBTUE7b0NBQUN5QixPQUFNO29DQUFLQyxRQUFPOzs7Ozs7OENBQzFCLDhEQUFDMUIscURBQU1BO29DQUFDeUIsT0FBTTtvQ0FBUUMsUUFBTzs7Ozs7OzhDQUM3Qiw4REFBQzFCLHFEQUFNQTtvQ0FBQ3lCLE9BQU07b0NBQWNDLFFBQU87Ozs7Ozs4Q0FDbkMsOERBQUMxQixxREFBTUE7b0NBQUN5QixPQUFNO29DQUFZQyxRQUFPOzs7Ozs7OENBQ2pDLDhEQUFDMUIscURBQU1BO29DQUNMVyxNQUFNZ0IsQ0FBQUEsd0JBQ0osOERBQUMxQixxREFBTUE7c0RBRU47Ozs7Ozs7OENBS0wsOERBQUNELHFEQUFNQTtvQ0FDTFcsTUFBTWdCLENBQUFBLHdCQUNKLDhEQUFDMUIscURBQU1BOzRDQUFDMkIsU0FBUyxJQUFNQyxHQUFHRixRQUFRRyxTQUFTOzRDQUFHQyxNQUFLOzRDQUFTQyxPQUFNOzRDQUFTVCxXQUFVOzRDQUFPUCxJQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWEvRztHQXhFTWQ7S0FBQUE7QUEwRU4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGlzdGFUYXNrLnRzeD9mNWJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEYXRhVGFibGUgfSBmcm9tICdwcmltZXJlYWN0L2RhdGF0YWJsZSc7XHJcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJ3ByaW1lcmVhY3QvY29sdW1uJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncHJpbWVyZWFjdC9idXR0b24nO1xyXG5cclxuXHJcblxyXG50eXBlIExpc3RhVGFzayA9IHtcclxuICB0aXR1bG86IHN0cmluZztcclxufTtcclxuXHJcbnR5cGUgVGFzayA9IHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBjcmVhdGVkQXQ6IHN0cmluZztcclxufTtcclxuY29uc3QgTGlzdGFUYXNrID0gKHsgdGl0dWxvIH06IExpc3RhVGFzaykgPT4ge1xyXG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGU8VGFza1tdPihbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFRhc2tzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vMXh4ZmlhZTY3ZC5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS90YXNrcycpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0VGFza3MoZGF0YS5ib2R5LnRhc2tzKTsgLy8gQWN0dWFsaXphIGVsIGVzdGFkbyBjb24gbG9zIGRhdG9zIG9idGVuaWRvc1xyXG5cclxuXHJcblxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHRhc2tzOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyh0YXNrcyk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFRhc2tzKCk7XHJcbiBcclxuICAgIGNvbnN0IGVsaW1pbmFyQkQgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovLzF4eGZpYWU2N2QuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vdGFza3MvJHtpZH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gc2UgcHVkbyBlbGltaW5hciBlbCByZWdpc3RybyBkZSBsYSBiYXNlIGRlIGRhdG9zJyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiBcclxuIFxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMT57dGl0dWxvfTwvaDE+XHJcblxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDI+TGlzdGEgZGUgdXN1YXJpb3M8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgPERhdGFUYWJsZSB2YWx1ZT17dGFza3N9PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJpZFwiIGhlYWRlcj1cIklEXCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJ0aXRsZVwiIGhlYWRlcj1cIlRpdHVsb1wiPjwvQ29sdW1uPlxyXG4gICAgICAgICAgICA8Q29sdW1uIGZpZWxkPVwiZGVzY3JpcHRpb25cIiBoZWFkZXI9XCJEZXNjcmlwY2nDs25cIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cImNyZWF0ZWRBdFwiIGhlYWRlcj1cIkZlY2hhIGRlIGNyZWFjaW9uXCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgIDxDb2x1bW5cclxuICAgICAgICAgICAgICBib2R5PXtyb3dEYXRhID0+IChcclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEVkaXRhclxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENvbHVtblxyXG4gICAgICAgICAgICAgIGJvZHk9e3Jvd0RhdGEgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBlbChyb3dEYXRhLmlkdXN1YXJpbyl9IHR5cGU9XCJzdWJtaXRcIiBsYWJlbD1cIkJvcnJhclwiIGNsYXNzTmFtZT1cIm10LTJcIiBpZD1cInJvd0RhdGEuaWR1c3VhcmlvXCIgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9EYXRhVGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdGFUYXNrO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRhdGFUYWJsZSIsIkNvbHVtbiIsIkJ1dHRvbiIsIkxpc3RhVGFzayIsInRpdHVsbyIsInRhc2tzIiwic2V0VGFza3MiLCJmZXRjaFRhc2tzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiYm9keSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImVsaW1pbmFyQkQiLCJpZCIsIm1ldGhvZCIsIm9rIiwiRXJyb3IiLCJoMSIsImRpdiIsImgyIiwiY2xhc3NOYW1lIiwidmFsdWUiLCJmaWVsZCIsImhlYWRlciIsInJvd0RhdGEiLCJvbkNsaWNrIiwiZWwiLCJpZHVzdWFyaW8iLCJ0eXBlIiwibGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/listaTask.tsx\n"));

/***/ })

});