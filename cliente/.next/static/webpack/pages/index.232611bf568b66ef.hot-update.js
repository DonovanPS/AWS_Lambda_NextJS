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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/datatable */ \"./node_modules/primereact/datatable/datatable.esm.js\");\n/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/column */ \"./node_modules/primereact/column/column.esm.js\");\n/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/button */ \"./node_modules/primereact/button/button.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ListaTask = (param)=>{\n    let { titulo  } = param;\n    _s();\n    const [showMessagedelete, setShowMessageDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showMessageupdate, setShowMessageUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const eliminarBD = async (id)=>{\n        console.log(\"eliminar\" + id);\n        const response = await fetch(\"https://1xxfiae67d.execute-api.us-east-1.amazonaws.com/tasks/\".concat(id), {\n            method: \"DELETE\"\n        });\n        if (!response.ok) {\n            throw new Error(\"No se pudo eliminar el registro de la base de datos\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchTasks = async ()=>{\n            try {\n                const response = await fetch(\"https://1xxfiae67d.execute-api.us-east-1.amazonaws.com/tasks\");\n                const data = await response.json();\n                setTasks(data.body.tasks); // Actualiza el estado con los datos obtenidos\n            } catch (error) {\n                console.error(\"Error fetching tasks:\", error);\n            }\n            console.log(tasks);\n        };\n        fetchTasks();\n    }, []);\n    const dialogFooterDelete = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-content-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n            label: \"OK\",\n            className: \"p-button-text\",\n            autoFocus: true,\n            onClick: ()=>setShowMessageDelete(false)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n            lineNumber: 60,\n            columnNumber: 75\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n        lineNumber: 60,\n        columnNumber: 30\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: titulo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Lista de usuarios\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_datatable__WEBPACK_IMPORTED_MODULE_3__.DataTable, {\n                            value: tasks,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {\n                                    field: \"id\",\n                                    header: \"ID\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {\n                                    field: \"title\",\n                                    header: \"Titulo\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {\n                                    field: \"description\",\n                                    header: \"Descripci\\xf3n\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {\n                                    field: \"createdAt\",\n                                    header: \"Fecha de creacion\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {\n                                    body: (rowData)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                            children: \"Editar\"\n                                        }, void 0, false, void 0, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {\n                                    body: (rowData)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                            onClick: ()=>eliminarBD(rowData.id),\n                                            type: \"submit\",\n                                            label: \"Borrar\",\n                                            className: \"mt-2\"\n                                        }, void 0, false, void 0, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ListaTask, \"rB3JcaoZvUEhpJVVx/X3w6WV76o=\");\n_c = ListaTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListaTask);\nvar _c;\n$RefreshReg$(_c, \"ListaTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9saXN0YVRhc2sudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFDRjtBQUNOO0FBQ0E7QUFjM0MsTUFBTU0sWUFBWSxTQUEyQjtRQUExQixFQUFFQyxPQUFNLEVBQWE7O0lBRXRDLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUNoRSxNQUFNLENBQUNTLG1CQUFtQkMscUJBQXFCLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDaEUsTUFBTSxDQUFDVyxPQUFPQyxTQUFTLEdBQUdaLCtDQUFRQSxDQUFTLEVBQUU7SUFFN0MsTUFBTWEsYUFBYSxPQUFPQyxLQUE4QjtRQUN0REMsUUFBUUMsR0FBRyxDQUFDLGFBQWFGO1FBRXpCLE1BQU1HLFdBQVcsTUFBTUMsTUFBTSxnRUFBbUUsT0FBSEosS0FBTTtZQUNqR0ssUUFBUTtRQUNWO1FBQ0EsSUFBSSxDQUFDRixTQUFTRyxFQUFFLEVBQUU7WUFDaEIsTUFBTSxJQUFJQyxNQUFNLHVEQUF1RDtRQUN6RSxDQUFDO0lBQ0g7SUFJQXBCLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNcUIsYUFBYSxVQUFZO1lBQzdCLElBQUk7Z0JBQ0YsTUFBTUwsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixNQUFNSyxPQUFPLE1BQU1OLFNBQVNPLElBQUk7Z0JBQ2hDWixTQUFTVyxLQUFLRSxJQUFJLENBQUNkLEtBQUssR0FBRyw4Q0FBOEM7WUFJM0UsRUFBRSxPQUFPZSxPQUFPO2dCQUNkWCxRQUFRVyxLQUFLLENBQUMseUJBQXlCQTtZQUN6QztZQUNBWCxRQUFRQyxHQUFHLENBQUNMO1FBRWQ7UUFFQVc7SUFLRixHQUFHLEVBQUU7SUFFTCxNQUFNSyxtQ0FBcUIsOERBQUNDO1FBQUlDLFdBQVU7a0JBQThCLDRFQUFDekIscURBQU1BO1lBQUMwQixPQUFNO1lBQUtELFdBQVU7WUFBZ0JFLFNBQVM7WUFBQ0MsU0FBUyxJQUFNeEIscUJBQXFCLEtBQUs7Ozs7Ozs7Ozs7O0lBR3hLLHFCQUNFOzswQkFDRSw4REFBQ3lCOzBCQUFJM0I7Ozs7OzswQkFHTCw4REFBQ3NCOztrQ0FDQyw4REFBQ007a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ047d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUMzQiwyREFBU0E7NEJBQUNpQyxPQUFPeEI7OzhDQUdoQiw4REFBQ1IscURBQU1BO29DQUFDaUMsT0FBTTtvQ0FBS0MsUUFBTzs7Ozs7OzhDQUMxQiw4REFBQ2xDLHFEQUFNQTtvQ0FBQ2lDLE9BQU07b0NBQVFDLFFBQU87Ozs7Ozs4Q0FDN0IsOERBQUNsQyxxREFBTUE7b0NBQUNpQyxPQUFNO29DQUFjQyxRQUFPOzs7Ozs7OENBQ25DLDhEQUFDbEMscURBQU1BO29DQUFDaUMsT0FBTTtvQ0FBWUMsUUFBTzs7Ozs7OzhDQUNqQyw4REFBQ2xDLHFEQUFNQTtvQ0FDTHNCLE1BQU1hLENBQUFBLHdCQUNKLDhEQUFDbEMscURBQU1BO3NEQUVOOzs7Ozs7OzhDQUtMLDhEQUFDRCxxREFBTUE7b0NBQ0xzQixNQUFNYSxDQUFBQSx3QkFDSiw4REFBQ2xDLHFEQUFNQTs0Q0FBQzRCLFNBQVMsSUFBTW5CLFdBQVd5QixRQUFReEIsRUFBRTs0Q0FBR3lCLE1BQUs7NENBQVNULE9BQU07NENBQVNELFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYXRHO0dBcEZNeEI7S0FBQUE7QUFzRk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGlzdGFUYXNrLnRzeD9mNWJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEYXRhVGFibGUgfSBmcm9tICdwcmltZXJlYWN0L2RhdGF0YWJsZSc7XHJcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJ3ByaW1lcmVhY3QvY29sdW1uJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncHJpbWVyZWFjdC9idXR0b24nO1xyXG5cclxuXHJcblxyXG50eXBlIExpc3RhVGFzayA9IHtcclxuICB0aXR1bG86IHN0cmluZztcclxufTtcclxuXHJcbnR5cGUgVGFzayA9IHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBjcmVhdGVkQXQ6IHN0cmluZztcclxufTtcclxuY29uc3QgTGlzdGFUYXNrID0gKHsgdGl0dWxvIH06IExpc3RhVGFzaykgPT4ge1xyXG5cclxuICBjb25zdCBbc2hvd01lc3NhZ2VkZWxldGUsIHNldFNob3dNZXNzYWdlRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd01lc3NhZ2V1cGRhdGUsIHNldFNob3dNZXNzYWdlVXBkYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlPFRhc2tbXT4oW10pO1xyXG5cclxuICBjb25zdCBlbGltaW5hckJEID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiZWxpbWluYXJcIiArIGlkKTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly8xeHhmaWFlNjdkLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL3Rhc2tzLyR7aWR9YCwge1xyXG4gICAgICBtZXRob2Q6ICdERUxFVEUnXHJcbiAgICB9KTtcclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBzZSBwdWRvIGVsaW1pbmFyIGVsIHJlZ2lzdHJvIGRlIGxhIGJhc2UgZGUgZGF0b3MnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFRhc2tzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vMXh4ZmlhZTY3ZC5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS90YXNrcycpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0VGFza3MoZGF0YS5ib2R5LnRhc2tzKTsgLy8gQWN0dWFsaXphIGVsIGVzdGFkbyBjb24gbG9zIGRhdG9zIG9idGVuaWRvc1xyXG5cclxuXHJcblxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHRhc2tzOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyh0YXNrcyk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFRhc2tzKCk7XHJcbiBcclxuICAgIFxyXG4gXHJcbiBcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGRpYWxvZ0Zvb3RlckRlbGV0ZSA9IDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+PEJ1dHRvbiBsYWJlbD1cIk9LXCIgY2xhc3NOYW1lPVwicC1idXR0b24tdGV4dFwiIGF1dG9Gb2N1cyBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TWVzc2FnZURlbGV0ZShmYWxzZSl9IC8+PC9kaXY+O1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMT57dGl0dWxvfTwvaDE+XHJcblxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDI+TGlzdGEgZGUgdXN1YXJpb3M8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgPERhdGFUYWJsZSB2YWx1ZT17dGFza3N9PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJpZFwiIGhlYWRlcj1cIklEXCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJ0aXRsZVwiIGhlYWRlcj1cIlRpdHVsb1wiPjwvQ29sdW1uPlxyXG4gICAgICAgICAgICA8Q29sdW1uIGZpZWxkPVwiZGVzY3JpcHRpb25cIiBoZWFkZXI9XCJEZXNjcmlwY2nDs25cIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cImNyZWF0ZWRBdFwiIGhlYWRlcj1cIkZlY2hhIGRlIGNyZWFjaW9uXCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgIDxDb2x1bW5cclxuICAgICAgICAgICAgICBib2R5PXtyb3dEYXRhID0+IChcclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEVkaXRhclxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENvbHVtblxyXG4gICAgICAgICAgICAgIGJvZHk9e3Jvd0RhdGEgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBlbGltaW5hckJEKHJvd0RhdGEuaWQpfSB0eXBlPVwic3VibWl0XCIgbGFiZWw9XCJCb3JyYXJcIiBjbGFzc05hbWU9XCJtdC0yXCIvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0RhdGFUYWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0YVRhc2s7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRGF0YVRhYmxlIiwiQ29sdW1uIiwiQnV0dG9uIiwiTGlzdGFUYXNrIiwidGl0dWxvIiwic2hvd01lc3NhZ2VkZWxldGUiLCJzZXRTaG93TWVzc2FnZURlbGV0ZSIsInNob3dNZXNzYWdldXBkYXRlIiwic2V0U2hvd01lc3NhZ2VVcGRhdGUiLCJ0YXNrcyIsInNldFRhc2tzIiwiZWxpbWluYXJCRCIsImlkIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJvayIsIkVycm9yIiwiZmV0Y2hUYXNrcyIsImRhdGEiLCJqc29uIiwiYm9keSIsImVycm9yIiwiZGlhbG9nRm9vdGVyRGVsZXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJhdXRvRm9jdXMiLCJvbkNsaWNrIiwiaDEiLCJoMiIsInZhbHVlIiwiZmllbGQiLCJoZWFkZXIiLCJyb3dEYXRhIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/listaTask.tsx\n"));

/***/ })

});