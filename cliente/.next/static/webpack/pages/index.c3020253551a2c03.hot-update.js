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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/datatable */ \"./node_modules/primereact/datatable/datatable.esm.js\");\n/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/column */ \"./node_modules/primereact/column/column.esm.js\");\n/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/button */ \"./node_modules/primereact/button/button.esm.js\");\n/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/dialog */ \"./node_modules/primereact/dialog/dialog.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ListaTask = (param)=>{\n    let { titulo  } = param;\n    _s();\n    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showMessagedelete, setShowMessageDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showMessageupdate, setShowMessageUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const eliminarBD = async (id)=>{\n        console.log(\"eliminar\" + id);\n        const response = await fetch(\"https://1xxfiae67d.execute-api.us-east-1.amazonaws.com/tasks/\".concat(id), {\n            method: \"DELETE\"\n        });\n        setShowMessageDelete(true);\n        if (!response.ok) {\n            throw new Error(\"No se pudo eliminar el registro de la base de datos\");\n        }\n    };\n    const actualizarBD = async (id)=>{\n        const response = await fetch(\"https://1xxfiae67d.execute-api.us-east-1.amazonaws.com/tasks/\".concat(id), {\n            method: \"PUT\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchTasks = async ()=>{\n            try {\n                const response = await fetch(\"https://1xxfiae67d.execute-api.us-east-1.amazonaws.com/tasks\");\n                const data = await response.json();\n                setTasks(data.body.tasks); // Actualiza el estado con los datos obtenidos\n            } catch (error) {\n                console.error(\"Error fetching tasks:\", error);\n            }\n        };\n        fetchTasks();\n    }, [\n        id,\n        title,\n        description\n    ]);\n    const dialogFooterDelete = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-content-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n            label: \"OK\",\n            className: \"p-button-text\",\n            autoFocus: true,\n            onClick: ()=>setShowMessageDelete(false)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\AWS_Lambda_NextJS\\\\AWS_Lambda_NextJS\\\\cliente\\\\src\\\\components\\\\listaTask.tsx\",\n            lineNumber: 77,\n            columnNumber: 75\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\AWS_Lambda_NextJS\\\\AWS_Lambda_NextJS\\\\cliente\\\\src\\\\components\\\\listaTask.tsx\",\n        lineNumber: 77,\n        columnNumber: 30\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: titulo\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\AWS_Lambda_NextJS\\\\AWS_Lambda_NextJS\\\\cliente\\\\src\\\\components\\\\listaTask.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_datatable__WEBPACK_IMPORTED_MODULE_3__.DataTable, {\n                            value: tasks,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {\n                                    field: \"id\",\n                                    header: \"ID\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\AWS_Lambda_NextJS\\\\AWS_Lambda_NextJS\\\\cliente\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {\n                                    field: \"title\",\n                                    header: \"Titulo\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\AWS_Lambda_NextJS\\\\AWS_Lambda_NextJS\\\\cliente\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {\n                                    field: \"description\",\n                                    header: \"Descripci\\xf3n\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\AWS_Lambda_NextJS\\\\AWS_Lambda_NextJS\\\\cliente\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {\n                                    field: \"createdAt\",\n                                    header: \"Fecha de creacion\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\AWS_Lambda_NextJS\\\\AWS_Lambda_NextJS\\\\cliente\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {\n                                    body: (rowData)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                            children: \"Editar\"\n                                        }, void 0, false, void 0, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\AWS_Lambda_NextJS\\\\AWS_Lambda_NextJS\\\\cliente\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {\n                                    body: (rowData)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                            onClick: ()=>eliminarBD(rowData.id),\n                                            type: \"submit\",\n                                            label: \"Borrar\",\n                                            className: \"mt-2\"\n                                        }, void 0, false, void 0, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\AWS_Lambda_NextJS\\\\AWS_Lambda_NextJS\\\\cliente\\\\src\\\\components\\\\listaTask.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\AWS_Lambda_NextJS\\\\AWS_Lambda_NextJS\\\\cliente\\\\src\\\\components\\\\listaTask.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\AWS_Lambda_NextJS\\\\AWS_Lambda_NextJS\\\\cliente\\\\src\\\\components\\\\listaTask.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\AWS_Lambda_NextJS\\\\AWS_Lambda_NextJS\\\\cliente\\\\src\\\\components\\\\listaTask.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_dialog__WEBPACK_IMPORTED_MODULE_5__.Dialog, {\n                visible: showMessagedelete,\n                onHide: ()=>setShowMessageDelete(false),\n                position: \"top\",\n                footer: dialogFooterDelete,\n                showHeader: false,\n                breakpoints: {\n                    \"960px\": \"80vw\"\n                },\n                style: {\n                    width: \"30vw\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex align-items-center flex-column pt-6 px-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"pi pi-check-circle\",\n                            style: {\n                                fontSize: \"5rem\",\n                                color: \"var(--green-500)\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\AWS_Lambda_NextJS\\\\AWS_Lambda_NextJS\\\\cliente\\\\src\\\\components\\\\listaTask.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            children: \"Delete Successful!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\AWS_Lambda_NextJS\\\\AWS_Lambda_NextJS\\\\cliente\\\\src\\\\components\\\\listaTask.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            style: {\n                                lineHeight: 1.5,\n                                textIndent: \"1rem\"\n                            },\n                            children: \"Tarea borrada con exito.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\AWS_Lambda_NextJS\\\\AWS_Lambda_NextJS\\\\cliente\\\\src\\\\components\\\\listaTask.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\AWS_Lambda_NextJS\\\\AWS_Lambda_NextJS\\\\cliente\\\\src\\\\components\\\\listaTask.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\AWS_Lambda_NextJS\\\\AWS_Lambda_NextJS\\\\cliente\\\\src\\\\components\\\\listaTask.tsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ListaTask, \"++QHBfsCraCaq+ckCiaYKhGA+90=\");\n_c = ListaTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListaTask);\nvar _c;\n$RefreshReg$(_c, \"ListaTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXFCLEtBQUs7Z0JBQUdpQyxVQUFTO2dCQUFNQyxRQUFRZjtnQkFBb0JnQixZQUFZLEtBQUs7Z0JBQUVDLGFBQWE7b0JBQUUsU0FBUztnQkFBTztnQkFBR0MsT0FBTztvQkFBRUMsT0FBTztnQkFBTzswQkFDcE0sNEVBQUNsQjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNrQjs0QkFBRWxCLFdBQVU7NEJBQXFCZ0IsT0FBTztnQ0FBRUcsVUFBVTtnQ0FBUUMsT0FBTzs0QkFBbUI7Ozs7OztzQ0FDdkYsOERBQUNDO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNDOzRCQUFFTixPQUFPO2dDQUFFTyxZQUFZO2dDQUFLQyxZQUFZOzRCQUFPO3NDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVTdEO0dBN0dNdEQ7S0FBQUE7QUErR04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGlzdGFUYXNrLnRzeD9mNWJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEYXRhVGFibGUgfSBmcm9tICdwcmltZXJlYWN0L2RhdGF0YWJsZSc7XHJcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJ3ByaW1lcmVhY3QvY29sdW1uJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncHJpbWVyZWFjdC9idXR0b24nO1xyXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICdwcmltZXJlYWN0L2RpYWxvZyc7XHJcblxyXG5cclxuXHJcbnR5cGUgTGlzdGFUYXNrID0ge1xyXG4gIHRpdHVsbzogc3RyaW5nO1xyXG59O1xyXG5cclxudHlwZSBUYXNrID0ge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xyXG59O1xyXG5jb25zdCBMaXN0YVRhc2sgPSAoeyB0aXR1bG8gfTogTGlzdGFUYXNrKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBbc2hvd01lc3NhZ2VkZWxldGUsIHNldFNob3dNZXNzYWdlRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd01lc3NhZ2V1cGRhdGUsIHNldFNob3dNZXNzYWdlVXBkYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlPFRhc2tbXT4oW10pO1xyXG5cclxuICBjb25zdCBlbGltaW5hckJEID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiZWxpbWluYXJcIiArIGlkKTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly8xeHhmaWFlNjdkLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL3Rhc2tzLyR7aWR9YCwge1xyXG4gICAgICBtZXRob2Q6ICdERUxFVEUnXHJcbiAgICAgIFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHNldFNob3dNZXNzYWdlRGVsZXRlKHRydWUpO1xyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHNlIHB1ZG8gZWxpbWluYXIgZWwgcmVnaXN0cm8gZGUgbGEgYmFzZSBkZSBkYXRvcycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFjdHVhbGl6YXJCRCA9IGFzeW5jIChpZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovLzF4eGZpYWU2N2QuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vdGFza3MvJHtpZH1gLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICB9KTtcclxuXHJcbiAgICBcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFRhc2tzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vMXh4ZmlhZTY3ZC5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS90YXNrcycpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0VGFza3MoZGF0YS5ib2R5LnRhc2tzKTsgLy8gQWN0dWFsaXphIGVsIGVzdGFkbyBjb24gbG9zIGRhdG9zIG9idGVuaWRvc1xyXG5cclxuXHJcblxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHRhc2tzOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoVGFza3MoKTtcclxuIFxyXG4gICAgXHJcbiBcclxuIFxyXG4gIH0sIFtpZCwgdGl0bGUsIGRlc2NyaXB0aW9uXSk7XHJcblxyXG4gIGNvbnN0IGRpYWxvZ0Zvb3RlckRlbGV0ZSA9IDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+PEJ1dHRvbiBsYWJlbD1cIk9LXCIgY2xhc3NOYW1lPVwicC1idXR0b24tdGV4dFwiIGF1dG9Gb2N1cyBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TWVzc2FnZURlbGV0ZShmYWxzZSl9IC8+PC9kaXY+O1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgXHJcblxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+e3RpdHVsb308L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgPERhdGFUYWJsZSB2YWx1ZT17dGFza3N9PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJpZFwiIGhlYWRlcj1cIklEXCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgIDxDb2x1bW4gZmllbGQ9XCJ0aXRsZVwiIGhlYWRlcj1cIlRpdHVsb1wiPjwvQ29sdW1uPlxyXG4gICAgICAgICAgICA8Q29sdW1uIGZpZWxkPVwiZGVzY3JpcHRpb25cIiBoZWFkZXI9XCJEZXNjcmlwY2nDs25cIj48L0NvbHVtbj5cclxuICAgICAgICAgICAgPENvbHVtbiBmaWVsZD1cImNyZWF0ZWRBdFwiIGhlYWRlcj1cIkZlY2hhIGRlIGNyZWFjaW9uXCI+PC9Db2x1bW4+XHJcbiAgICAgICAgICAgIDxDb2x1bW5cclxuICAgICAgICAgICAgICBib2R5PXtyb3dEYXRhID0+IChcclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEVkaXRhclxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENvbHVtblxyXG4gICAgICAgICAgICAgIGJvZHk9e3Jvd0RhdGEgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBlbGltaW5hckJEKHJvd0RhdGEuaWQpfSB0eXBlPVwic3VibWl0XCIgbGFiZWw9XCJCb3JyYXJcIiBjbGFzc05hbWU9XCJtdC0yXCIvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0RhdGFUYWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgPERpYWxvZyB2aXNpYmxlPXtzaG93TWVzc2FnZWRlbGV0ZX0gb25IaWRlPXsoKSA9PiBzZXRTaG93TWVzc2FnZURlbGV0ZShmYWxzZSl9IHBvc2l0aW9uPVwidG9wXCIgZm9vdGVyPXtkaWFsb2dGb290ZXJEZWxldGV9IHNob3dIZWFkZXI9e2ZhbHNlfSBicmVha3BvaW50cz17eyAnOTYwcHgnOiAnODB2dycgfX0gc3R5bGU9e3sgd2lkdGg6ICczMHZ3JyB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtY29sdW1uIHB0LTYgcHgtM1wiPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGkgcGktY2hlY2stY2lyY2xlXCIgc3R5bGU9e3sgZm9udFNpemU6ICc1cmVtJywgY29sb3I6ICd2YXIoLS1ncmVlbi01MDApJyB9fT48L2k+XHJcbiAgICAgICAgICA8aDU+RGVsZXRlIFN1Y2Nlc3NmdWwhPC9oNT5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGxpbmVIZWlnaHQ6IDEuNSwgdGV4dEluZGVudDogJzFyZW0nIH19PlxyXG4gICAgICAgICAgICBUYXJlYSBib3JyYWRhIGNvbiBleGl0by5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9EaWFsb2c+XHJcblxyXG5cclxuXHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdGFUYXNrO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRhdGFUYWJsZSIsIkNvbHVtbiIsIkJ1dHRvbiIsIkRpYWxvZyIsIkxpc3RhVGFzayIsInRpdHVsbyIsImlkIiwic2V0SWQiLCJ0aXRsZSIsInNldFRpdGxlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInNob3dNZXNzYWdlZGVsZXRlIiwic2V0U2hvd01lc3NhZ2VEZWxldGUiLCJzaG93TWVzc2FnZXVwZGF0ZSIsInNldFNob3dNZXNzYWdlVXBkYXRlIiwidGFza3MiLCJzZXRUYXNrcyIsImVsaW1pbmFyQkQiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsIm9rIiwiRXJyb3IiLCJhY3R1YWxpemFyQkQiLCJmZXRjaFRhc2tzIiwiZGF0YSIsImpzb24iLCJib2R5IiwiZXJyb3IiLCJkaWFsb2dGb290ZXJEZWxldGUiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImF1dG9Gb2N1cyIsIm9uQ2xpY2siLCJoMSIsInZhbHVlIiwiZmllbGQiLCJoZWFkZXIiLCJyb3dEYXRhIiwidHlwZSIsInZpc2libGUiLCJvbkhpZGUiLCJwb3NpdGlvbiIsImZvb3RlciIsInNob3dIZWFkZXIiLCJicmVha3BvaW50cyIsInN0eWxlIiwid2lkdGgiLCJpIiwiZm9udFNpemUiLCJjb2xvciIsImg1IiwicCIsImxpbmVIZWlnaHQiLCJ0ZXh0SW5kZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/listaTask.tsx\n"));

/***/ })

});