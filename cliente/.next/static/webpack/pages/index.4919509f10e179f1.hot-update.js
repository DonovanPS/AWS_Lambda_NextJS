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

/***/ "./src/components/agregarTask.tsx":
/*!****************************************!*\
  !*** ./src/components/agregarTask.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-final-form */ \"./node_modules/react-final-form/dist/react-final-form.es.js\");\n/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/inputtext */ \"./node_modules/primereact/inputtext/inputtext.esm.js\");\n/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/button */ \"./node_modules/primereact/button/button.esm.js\");\n/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/dialog */ \"./node_modules/primereact/dialog/dialog.esm.js\");\n/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/utils */ \"./node_modules/primereact/utils/utils.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst AgregarTask = (param)=>{\n    let { titulo  } = param;\n    _s();\n    const [showMessage, setShowMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const agregarDB = async ()=>{\n        const task = {\n            title: title,\n            description: description\n        };\n        try {\n            const response = await fetch(\"https://1xxfiae67d.execute-api.us-east-1.amazonaws.com/tasks\", {\n                method: \"POST\",\n                body: JSON.stringify(task),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const data = await response.json();\n            console.log(\"Response:\", data);\n        } catch (error) {\n            console.error(\"Error agregando tarea:\", error);\n        }\n    };\n    const validate = (data)=>{\n        let errors = {};\n        if (!data.title) {\n            errors.title = \"El t\\xedtulo es requerido\";\n        }\n        if (!data.description) {\n            errors.description = \"La descripci\\xf3n es requerida\";\n        }\n        return errors;\n    };\n    const onSubmit = (form)=>{\n        setShowMessage(true);\n        setTitle(\"\");\n        setDescription(\"\");\n    };\n    const isFormFieldValid = (meta)=>!!(meta && meta.touched && meta.error);\n    const getFormErrorMessage = (meta)=>{\n        return isFormFieldValid(meta) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n            className: \"p-error\",\n            children: meta.error\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\agregarTask.tsx\",\n            lineNumber: 86,\n            columnNumber: 42\n        }, undefined);\n    };\n    const dialogFooter = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-content-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n            label: \"OK\",\n            className: \"p-button-text\",\n            autoFocus: true,\n            onClick: ()=>setShowMessage(false)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\agregarTask.tsx\",\n            lineNumber: 91,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\agregarTask.tsx\",\n        lineNumber: 90,\n        columnNumber: 9\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: titulo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\agregarTask.tsx\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-demo\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_dialog__WEBPACK_IMPORTED_MODULE_4__.Dialog, {\n                        visible: showMessage,\n                        onHide: ()=>setShowMessage(false),\n                        position: \"top\",\n                        footer: dialogFooter,\n                        showHeader: false,\n                        breakpoints: {\n                            \"960px\": \"80vw\"\n                        },\n                        style: {\n                            width: \"30vw\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex align-items-center flex-column pt-6 px-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"pi pi-check-circle\",\n                                    style: {\n                                        fontSize: \"5rem\",\n                                        color: \"var(--green-500)\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\agregarTask.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: \"Registro Exitoso\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\agregarTask.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    style: {\n                                        lineHeight: 1.5,\n                                        textIndent: \"1rem\"\n                                    },\n                                    children: [\n                                        \"Nueva tarea \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\agregarTask.tsx\",\n                                            lineNumber: 107,\n                                            columnNumber: 41\n                                        }, undefined),\n                                        \" con descripci\\xf3n: \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: description\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\agregarTask.tsx\",\n                                            lineNumber: 107,\n                                            columnNumber: 73\n                                        }, undefined),\n                                        \" registrada con \\xe9xito.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\agregarTask.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\agregarTask.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\agregarTask.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-content-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-center\",\n                                    children: \"Register\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\agregarTask.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_2__.Form, {\n                                    onSubmit: onSubmit,\n                                    initialValues: {\n                                        name: \"\",\n                                        lastname: \"\",\n                                        ocupation: \"\"\n                                    },\n                                    validate: validate,\n                                    render: (param)=>/*#__PURE__*/ {\n                                        let { handleSubmit  } = param;\n                                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                            onSubmit: handleSubmit,\n                                            className: \"p-fluid\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_2__.Field, {\n                                                    name: \"name\",\n                                                    render: (param)=>/*#__PURE__*/ {\n                                                        let { input , meta  } = param;\n                                                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"field\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                    className: \"p-float-label\",\n                                                                    children: [\n                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, {\n                                                                            id: \"name\",\n                                                                            ...input,\n                                                                            autoFocus: true,\n                                                                            className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_6__.classNames)({\n                                                                                \"p-invalid\": meta.touched && meta.error\n                                                                            }),\n                                                                            value: title,\n                                                                            onChange: (e)=>{\n                                                                                setTitle(e.target.value);\n                                                                            }\n                                                                        }, void 0, false, void 0, void 0),\n                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                                            htmlFor: \"name\",\n                                                                            className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_6__.classNames)({\n                                                                                \"p-error\": meta.touched && meta.error\n                                                                            }),\n                                                                            children: \"Nombre\"\n                                                                        }, void 0, false, void 0, void 0)\n                                                                    ]\n                                                                }, void 0, true, void 0, void 0),\n                                                                getFormErrorMessage(meta.touched && meta.error)\n                                                            ]\n                                                        }, void 0, true, void 0, void 0);\n                                                    }\n                                                }, void 0, false, void 0, void 0),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                    onClick: agregarDB,\n                                                    type: \"submit\",\n                                                    label: \"Guardar\",\n                                                    className: \"mt-2\"\n                                                }, void 0, false, void 0, void 0)\n                                            ]\n                                        }, void 0, true, void 0, void 0);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\agregarTask.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\agregarTask.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\agregarTask.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\donov\\\\OneDrive\\\\Escritorio\\\\Proyecto Distribuidos Serverless - Next.js\\\\front\\\\src\\\\components\\\\agregarTask.tsx\",\n                lineNumber: 101,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(AgregarTask, \"yzEvVcfBmtmteVDovMMy3MLaHSA=\");\n_c = AgregarTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AgregarTask);\nvar _c;\n$RefreshReg$(_c, \"AgregarTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hZ3JlZ2FyVGFzay50c3g/NTYxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZpZWxkTWV0YVN0YXRlIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSc7XHJcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSc7XHJcbmltcG9ydCB7IElucHV0VGV4dCB9IGZyb20gJ3ByaW1lcmVhY3QvaW5wdXR0ZXh0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncHJpbWVyZWFjdC9idXR0b24nO1xyXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICdwcmltZXJlYWN0L2RpYWxvZyc7XHJcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdwcmltZXJlYWN0L3V0aWxzJztcclxuXHJcbnR5cGUgQWdyZWdhclRhc2sgPSB7XHJcbiAgICB0aXR1bG86IHN0cmluZztcclxufTtcclxuXHJcblxyXG5jb25zdCBBZ3JlZ2FyVGFzayA9ICh7IHRpdHVsbyB9OiBBZ3JlZ2FyVGFzaykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzaG93TWVzc2FnZSwgc2V0U2hvd01lc3NhZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHJcbiAgICBjb25zdCBhZ3JlZ2FyREIgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2sgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG5cclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly8xeHhmaWFlNjdkLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL3Rhc2tzJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0YXNrKSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzcG9uc2U6JywgZGF0YSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWdyZWdhbmRvIHRhcmVhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4gICAgaW50ZXJmYWNlIFRhc2tGb3JtVmFsdWVzIHtcclxuICAgICAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgLy8gb3RyYXMgcHJvcGllZGFkZXMgc2kgbGFzIHRpZW5lXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHZhbGlkYXRlID0gKGRhdGE6IFRhc2tGb3JtVmFsdWVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGVycm9yczogUGFydGlhbDxUYXNrRm9ybVZhbHVlcz4gPSB7fTtcclxuICAgICAgXHJcbiAgICAgICAgaWYgKCFkYXRhLnRpdGxlKSB7XHJcbiAgICAgICAgICBlcnJvcnMudGl0bGUgPSAnRWwgdMOtdHVsbyBlcyByZXF1ZXJpZG8nO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgaWYgKCFkYXRhLmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICBlcnJvcnMuZGVzY3JpcHRpb24gPSAnTGEgZGVzY3JpcGNpw7NuIGVzIHJlcXVlcmlkYSc7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICByZXR1cm4gZXJyb3JzO1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IChmb3JtOiBUYXNrRm9ybVZhbHVlcykgPT4ge1xyXG4gICAgICAgIHNldFNob3dNZXNzYWdlKHRydWUpO1xyXG5cclxuICAgICAgICBzZXRUaXRsZSgnJyk7XHJcbiAgICAgICAgc2V0RGVzY3JpcHRpb24oJycpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpc0Zvcm1GaWVsZFZhbGlkID0gKG1ldGE6IHsgdG91Y2hlZDogYm9vbGVhbjsgZXJyb3I6IGFueSB9KSA9PiAhIShtZXRhICYmIG1ldGEudG91Y2hlZCAmJiBtZXRhLmVycm9yKTtcclxuXHJcblxyXG4gICAgY29uc3QgZ2V0Rm9ybUVycm9yTWVzc2FnZSA9IChtZXRhOiB7IHRvdWNoZWQ6IGJvb2xlYW47IGVycm9yOiBhbnkgfSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpc0Zvcm1GaWVsZFZhbGlkKG1ldGEpICYmIDxzbWFsbCBjbGFzc05hbWU9XCJwLWVycm9yXCI+e21ldGEuZXJyb3J9PC9zbWFsbD47XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRpYWxvZ0Zvb3RlciA9IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiT0tcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi10ZXh0XCIgYXV0b0ZvY3VzIG9uQ2xpY2s9eygpID0+IHNldFNob3dNZXNzYWdlKGZhbHNlKX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuXHJcbiAgICAgICAgICAgIDxoMT57dGl0dWxvfTwvaDE+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZGVtb1wiPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZyB2aXNpYmxlPXtzaG93TWVzc2FnZX0gb25IaWRlPXsoKSA9PiBzZXRTaG93TWVzc2FnZShmYWxzZSl9IHBvc2l0aW9uPVwidG9wXCIgZm9vdGVyPXtkaWFsb2dGb290ZXJ9IHNob3dIZWFkZXI9e2ZhbHNlfSBicmVha3BvaW50cz17eyAnOTYwcHgnOiAnODB2dycgfX0gc3R5bGU9e3sgd2lkdGg6ICczMHZ3JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtY29sdW1uIHB0LTYgcHgtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwaSBwaS1jaGVjay1jaXJjbGVcIiBzdHlsZT17eyBmb250U2l6ZTogJzVyZW0nLCBjb2xvcjogJ3ZhcigtLWdyZWVuLTUwMCknIH19PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlJlZ2lzdHJvIEV4aXRvc288L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBsaW5lSGVpZ2h0OiAxLjUsIHRleHRJbmRlbnQ6ICcxcmVtJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51ZXZhIHRhcmVhIDxiPnt0aXRsZX08L2I+IGNvbiBkZXNjcmlwY2nDs246IDxiPntkZXNjcmlwdGlvbn08L2I+IHJlZ2lzdHJhZGEgY29uIMOpeGl0by5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2c+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+UmVnaXN0ZXI8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IGluaXRpYWxWYWx1ZXM9e3sgbmFtZTogJycsIGxhc3RuYW1lOiAnJywgb2N1cGF0aW9uOiAnJyB9fSB2YWxpZGF0ZT17dmFsaWRhdGV9IHJlbmRlcj17KHsgaGFuZGxlU3VibWl0IH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInAtZmx1aWRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJuYW1lXCIgcmVuZGVyPXsoeyBpbnB1dCwgbWV0YSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtZmxvYXQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHQgaWQ9XCJuYW1lXCIgey4uLmlucHV0fSBhdXRvRm9jdXMgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgJ3AtaW52YWxpZCc6IG1ldGEudG91Y2hlZCAmJiBtZXRhLmVycm9yIH0pfSB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXsoZSkgPT4geyBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSkgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyAncC1lcnJvcic6IG1ldGEudG91Y2hlZCAmJiBtZXRhLmVycm9yIH0pfT5Ob21icmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEZvcm1FcnJvck1lc3NhZ2UobWV0YS50b3VjaGVkICYmIG1ldGEuZXJyb3IpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17YWdyZWdhckRCfSB0eXBlPVwic3VibWl0XCIgbGFiZWw9XCJHdWFyZGFyXCIgY2xhc3NOYW1lPVwibXQtMlwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZ3JlZ2FyVGFzazsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZvcm0iLCJGaWVsZCIsIklucHV0VGV4dCIsIkJ1dHRvbiIsIkRpYWxvZyIsImNsYXNzTmFtZXMiLCJBZ3JlZ2FyVGFzayIsInRpdHVsbyIsInNob3dNZXNzYWdlIiwic2V0U2hvd01lc3NhZ2UiLCJ0aXRsZSIsInNldFRpdGxlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImFncmVnYXJEQiIsInRhc2siLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ2YWxpZGF0ZSIsImVycm9ycyIsIm9uU3VibWl0IiwiZm9ybSIsImlzRm9ybUZpZWxkVmFsaWQiLCJtZXRhIiwidG91Y2hlZCIsImdldEZvcm1FcnJvck1lc3NhZ2UiLCJzbWFsbCIsImNsYXNzTmFtZSIsImRpYWxvZ0Zvb3RlciIsImRpdiIsImxhYmVsIiwiYXV0b0ZvY3VzIiwib25DbGljayIsImgxIiwidmlzaWJsZSIsIm9uSGlkZSIsInBvc2l0aW9uIiwiZm9vdGVyIiwic2hvd0hlYWRlciIsImJyZWFrcG9pbnRzIiwic3R5bGUiLCJ3aWR0aCIsImkiLCJmb250U2l6ZSIsImNvbG9yIiwiaDUiLCJwIiwibGluZUhlaWdodCIsInRleHRJbmRlbnQiLCJiIiwiaDIiLCJpbml0aWFsVmFsdWVzIiwibmFtZSIsImxhc3RuYW1lIiwib2N1cGF0aW9uIiwicmVuZGVyIiwiaGFuZGxlU3VibWl0IiwiaW5wdXQiLCJzcGFuIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImh0bWxGb3IiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/agregarTask.tsx\n"));

/***/ })

});