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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/datatable */ \"./node_modules/primereact/datatable/datatable.esm.js\");\n/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/column */ \"./node_modules/primereact/column/column.esm.js\");\n/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/button */ \"./node_modules/primereact/button/button.esm.js\");\n/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/dialog */ \"./node_modules/primereact/dialog/dialog.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ListaTask = (param)=>{\n    let { titulo  } = param;\n    _s();\n    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showMessagedelete, setShowMessageDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showMessageupdate, setShowMessageUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const eliminarBD = async (id)=>{\n        console.log(\"eliminar\" + id);\n        const response = await fetch(\"https://1xxfiae67d.execute-api.us-east-1.amazonaws.com/tasks/\".concat(id), {\n            method: \"DELETE\"\n        });\n        if (!response.ok) {\n            throw new Error(\"No se pudo eliminar el registro de la base de datos\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchTasks = async ()=>{\n            try {\n                const response = await fetch(\"https://1xxfiae67d.execute-api.us-east-1.amazonaws.com/tasks\");\n                const data = await response.json();\n                setTasks(data.body.tasks); // Actualiza el estado con los datos obtenidos\n            } catch (error) {\n                console.error(\"Error fetching tasks:\", error);\n            }\n            console.log(tasks);\n        };\n        fetchTasks();\n    }, [\n        id\n    ], [\n        title\n    ], [\n        description\n    ]);\n    const dialogFooterDelete = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-content-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n            label: \"OK\",\n            className: \"p-button-text\",\n            autoFocus: true,\n            onClick: ()=>setShowMessageDelete(false)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n            lineNumber: 65,\n            columnNumber: 75\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n        lineNumber: 65,\n        columnNumber: 30\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: titulo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Lista de usuarios\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_datatable__WEBPACK_IMPORTED_MODULE_3__.DataTable, {\n                            value: tasks,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {\n                                    field: \"id\",\n                                    header: \"ID\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {\n                                    field: \"title\",\n                                    header: \"Titulo\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {\n                                    field: \"description\",\n                                    header: \"Descripci\\xf3n\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {\n                                    field: \"createdAt\",\n                                    header: \"Fecha de creacion\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {\n                                    body: (rowData)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                            children: \"Editar\"\n                                        }, void 0, false, void 0, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {\n                                    body: (rowData)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                            onClick: ()=>eliminarBD(rowData.id),\n                                            type: \"submit\",\n                                            label: \"Borrar\",\n                                            className: \"mt-2\"\n                                        }, void 0, false, void 0, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_dialog__WEBPACK_IMPORTED_MODULE_5__.Dialog, {\n                visible: showMessagedelete,\n                onHide: ()=>setShowMessageDelete(false),\n                position: \"top\",\n                footer: dialogFooterDelete,\n                showHeader: false,\n                breakpoints: {\n                    \"960px\": \"80vw\"\n                },\n                style: {\n                    width: \"30vw\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex align-items-center flex-column pt-6 px-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"pi pi-check-circle\",\n                            style: {\n                                fontSize: \"5rem\",\n                                color: \"var(--green-500)\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            children: \"Delete Successful!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            style: {\n                                lineHeight: 1.5,\n                                textIndent: \"1rem\"\n                            },\n                            children: [\n                                \"Usuario \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: id\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 21\n                                }, undefined),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: ti\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 33\n                                }, undefined),\n                                \" con ocupacion \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: ocupacion\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 59\n                                }, undefined),\n                                \"; borrado con exito.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\listaTask.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ListaTask, \"++QHBfsCraCaq+ckCiaYKhGA+90=\");\n_c = ListaTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListaTask);\nvar _c;\n$RefreshReg$(_c, \"ListaTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLO2dCQUFFQyxhQUFhO29CQUFFLFNBQVM7Z0JBQU87Z0JBQUdDLE9BQU87b0JBQUVDLE9BQU87Z0JBQU87MEJBQ3BNLDRFQUFDbkI7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDbUI7NEJBQUVuQixXQUFVOzRCQUFxQmlCLE9BQU87Z0NBQUVHLFVBQVU7Z0NBQVFDLE9BQU87NEJBQW1COzs7Ozs7c0NBQ3ZGLDhEQUFDQztzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDQzs0QkFBRU4sT0FBTztnQ0FBRU8sWUFBWTtnQ0FBS0MsWUFBWTs0QkFBTzs7Z0NBQUc7OENBQ3pDLDhEQUFDQzs4Q0FBR3JEOzs7Ozs7Z0NBQU87OENBQUMsOERBQUNxRDs4Q0FBR0M7Ozs7OztnQ0FBTzs4Q0FBZSw4REFBQ0Q7OENBQUdFOzs7Ozs7Z0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzVFO0dBakdNekQ7S0FBQUE7QUFtR04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGlzdGFUYXNrLnRzeD9mNWJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEYXRhVGFibGUgfSBmcm9tICdwcmltZXJlYWN0L2RhdGF0YWJsZSc7XHJcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJ3ByaW1lcmVhY3QvY29sdW1uJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncHJpbWVyZWFjdC9idXR0b24nO1xyXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICdwcmltZXJlYWN0L2RpYWxvZyc7XHJcblxyXG5cclxuXHJcbnR5cGUgTGlzdGFUYXNrID0ge1xyXG4gIHRpdHVsbzogc3RyaW5nO1xyXG59O1xyXG5cclxudHlwZSBUYXNrID0ge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xyXG59O1xyXG5jb25zdCBMaXN0YVRhc2sgPSAoeyB0aXR1bG8gfTogTGlzdGFUYXNrKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBbc2hvd01lc3NhZ2VkZWxldGUsIHNldFNob3dNZXNzYWdlRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd01lc3NhZ2V1cGRhdGUsIHNldFNob3dNZXNzYWdlVXBkYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlPFRhc2tbXT4oW10pO1xyXG5cclxuICBjb25zdCBlbGltaW5hckJEID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiZWxpbWluYXJcIiArIGlkKTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly8xeHhmaWFlNjdkLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL3Rhc2tzLyR7aWR9YCwge1xyXG4gICAgICBtZXRob2Q6ICdERUxFVEUnXHJcbiAgICB9KTtcclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBzZSBwdWRvIGVsaW1pbmFyIGVsIHJlZ2lzdHJvIGRlIGxhIGJhc2UgZGUgZGF0b3MnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFRhc2tzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vMXh4ZmlhZTY3ZC5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS90YXNrcycpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0VGFza3MoZGF0YS5ib2R5LnRhc2tzKTsgLy8gQWN0dWFsaXphIGVsIGVzdGFkbyBjb24gbG9zIGRhdG9zIG9idGVuaWRvc1xyXG5cclxuXHJcblxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHRhc2tzOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyh0YXNrcyk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFRhc2tzKCk7XHJcbiBcclxuICAgIFxyXG4gXHJcbiBcclxuICB9LCBbaWRdLCBbdGl0bGVdLCBbZGVzY3JpcHRpb25dKTtcclxuXHJcbiAgY29uc3QgZGlhbG9nRm9vdGVyRGVsZXRlID0gPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj48QnV0dG9uIGxhYmVsPVwiT0tcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi10ZXh0XCIgYXV0b0ZvY3VzIG9uQ2xpY2s9eygpID0+IHNldFNob3dNZXNzYWdlRGVsZXRlKGZhbHNlKX0gLz48L2Rpdj47XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxPnt0aXR1bG99PC9oMT5cclxuXHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj5MaXN0YSBkZSB1c3VhcmlvczwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICA8RGF0YVRhYmxlIHZhbHVlPXt0YXNrc30+XHJcblxyXG5cclxuICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cImlkXCIgaGVhZGVyPVwiSURcIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cInRpdGxlXCIgaGVhZGVyPVwiVGl0dWxvXCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJkZXNjcmlwdGlvblwiIGhlYWRlcj1cIkRlc2NyaXBjacOzblwiPjwvQ29sdW1uPlxyXG4gICAgICAgICAgICA8Q29sdW1uIGZpZWxkPVwiY3JlYXRlZEF0XCIgaGVhZGVyPVwiRmVjaGEgZGUgY3JlYWNpb25cIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgPENvbHVtblxyXG4gICAgICAgICAgICAgIGJvZHk9e3Jvd0RhdGEgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG5cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRWRpdGFyXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICAgICAgYm9keT17cm93RGF0YSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGVsaW1pbmFyQkQocm93RGF0YS5pZCl9IHR5cGU9XCJzdWJtaXRcIiBsYWJlbD1cIkJvcnJhclwiIGNsYXNzTmFtZT1cIm10LTJcIi8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRGF0YVRhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICA8RGlhbG9nIHZpc2libGU9e3Nob3dNZXNzYWdlZGVsZXRlfSBvbkhpZGU9eygpID0+IHNldFNob3dNZXNzYWdlRGVsZXRlKGZhbHNlKX0gcG9zaXRpb249XCJ0b3BcIiBmb290ZXI9e2RpYWxvZ0Zvb3RlckRlbGV0ZX0gc2hvd0hlYWRlcj17ZmFsc2V9IGJyZWFrcG9pbnRzPXt7ICc5NjBweCc6ICc4MHZ3JyB9fSBzdHlsZT17eyB3aWR0aDogJzMwdncnIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC1jb2x1bW4gcHQtNiBweC0zXCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwaSBwaS1jaGVjay1jaXJjbGVcIiBzdHlsZT17eyBmb250U2l6ZTogJzVyZW0nLCBjb2xvcjogJ3ZhcigtLWdyZWVuLTUwMCknIH19PjwvaT5cclxuICAgICAgICAgIDxoNT5EZWxldGUgU3VjY2Vzc2Z1bCE8L2g1PlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgbGluZUhlaWdodDogMS41LCB0ZXh0SW5kZW50OiAnMXJlbScgfX0+XHJcbiAgICAgICAgICAgIFVzdWFyaW8gPGI+e2lkfTwvYj4gPGI+e3RpfTwvYj4gY29uIG9jdXBhY2lvbiA8Yj57b2N1cGFjaW9ufTwvYj47IGJvcnJhZG8gY29uIGV4aXRvLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0RpYWxvZz5cclxuXHJcblxyXG5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0YVRhc2s7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRGF0YVRhYmxlIiwiQ29sdW1uIiwiQnV0dG9uIiwiRGlhbG9nIiwiTGlzdGFUYXNrIiwidGl0dWxvIiwiaWQiLCJzZXRJZCIsInRpdGxlIiwic2V0VGl0bGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwic2hvd01lc3NhZ2VkZWxldGUiLCJzZXRTaG93TWVzc2FnZURlbGV0ZSIsInNob3dNZXNzYWdldXBkYXRlIiwic2V0U2hvd01lc3NhZ2VVcGRhdGUiLCJ0YXNrcyIsInNldFRhc2tzIiwiZWxpbWluYXJCRCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwib2siLCJFcnJvciIsImZldGNoVGFza3MiLCJkYXRhIiwianNvbiIsImJvZHkiLCJlcnJvciIsImRpYWxvZ0Zvb3RlckRlbGV0ZSIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiYXV0b0ZvY3VzIiwib25DbGljayIsImgxIiwiaDIiLCJ2YWx1ZSIsImZpZWxkIiwiaGVhZGVyIiwicm93RGF0YSIsInR5cGUiLCJ2aXNpYmxlIiwib25IaWRlIiwicG9zaXRpb24iLCJmb290ZXIiLCJzaG93SGVhZGVyIiwiYnJlYWtwb2ludHMiLCJzdHlsZSIsIndpZHRoIiwiaSIsImZvbnRTaXplIiwiY29sb3IiLCJoNSIsInAiLCJsaW5lSGVpZ2h0IiwidGV4dEluZGVudCIsImIiLCJ0aSIsIm9jdXBhY2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/listaTask.tsx\n"));

/***/ })

});