(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/questions.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"title\":\"استطلاع الرأي العام\",\"description\":\"شاركنا رأيك في هذا الاستطلاع القصير\",\"questions\":[{\"id\":\"1\",\"question\":\"واش كتكمي؟\",\"type\":\"multiple_choice\",\"options\":[\"اه\",\"مرة مرة\"]},{\"id\":\"2\",\"question\":\"عندك بلية اخرى من غير الكارو؟\",\"type\":\"multiple_choice\",\"options\":[\"اه\",\"لا\"]},{\"id\":\"3\",\"question\":\"شحال من كارو فالنهار؟\",\"type\":\"multiple_choice\",\"options\":[\"كل مرة واشنو \",\"اكثر من 5 فالنهاره\",\"أقل من 5 فالنهار\"]},{\"id\":\"4\",\"question\":\"باش كايعجبك دوز؟\",\"type\":\"multiple_choice\",\"options\":[\"كوكة\",\"قهوة\",\"أتاي\"]},{\"id\":\"5\",\"question\":\" اشمن نوع ديال السجارة كتستعمل؟\",\"type\":\"multiple_choice\",\"options\":[\"السجارة الإلكترونية\",\"السجارة العادية\"]},{\"id\":\"6\",\"question\":\"شحال كان فعمرك ملي تبليتي؟\",\"type\":\"multiple_choice\",\"options\":[\"بعد 25 عام\",\"بين 18 عام و 25 عام\",\"أقل من 18 عام\"]},{\"id\":\"7\",\"question\":\"شكون لي بلاك؟\",\"type\":\"multiple_choice\",\"options\":[\"ماشي سوقك\",\"صحابي \",\"بليت راسي\"]},{\"id\":\"8\",\"question\":\"اشنو لي كايخليك تكمي؟\",\"type\":\"multiple_choice\",\"options\":[\"غير شاد ستون\",\"الستريس\",\"الظروف\"]},{\"id\":\"9\",\"question\":\"واش كتفكر تبعد من هاذ البلية؟\",\"type\":\"multiple_choice\",\"options\":[\"مبغيتش نبعد\",\"مزال ممستعدش\",\"ديما كانفكر\"]},{\"id\":\"10\",\"question\":\"شحال كاتخسر دالفلوس كل نهار فهاذ البلية؟\",\"type\":\"multiple_choice\",\"options\":[\"أكثر من 150 درهم\",\"بين 50 درهم و 150 درهم\",\"أقل من 50 درهم\"]},{\"id\":\"11\",\"question\":\"واش الى بدلتي المحيط تقدر تبعد من البلية؟\",\"type\":\"multiple_choice\",\"options\":[\"لا\",\"أه\"]},{\"id\":\"12\",\"question\":\"واش كاتشوف راسك تقدر تعافى من هاد البلية؟\",\"type\":\"multiple_choice\",\"options\":[\"فات الفوت\",\"كاين أمل\"]},{\"id\":\"13\",\"question\":\"واش كاتسهر؟\",\"type\":\"multiple_choice\",\"options\":[\"كنعس معا الدجاج\",\"بزااف\",\"مرة مرة\"]},{\"id\":\"14\",\"question\":\"واش عاجباك حالتك ونتا مبلي؟\",\"type\":\"multiple_choice\",\"options\":[\"لا\",\"اه\"]},{\"id\":\"15\",\"question\":\"واش كاتريني؟\",\"type\":\"multiple_choice\",\"options\":[\"مرة مرة\",\"لا\",\"اه\"]},{\"id\":\"16\",\"question\":\"اشنو تبغي تنصح الناس لي باقي متبلاوش؟\",\"type\":\"text_input\"},{\"id\":\"17\",\"question\":\"واش كاينا شي حاجة اخرى مأثرة عليك؟\",\"type\":\"text_input\"}]}"));}}),
"[project]/src/app/responses/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
// load questions from the questions.json file
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$questions$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/app/questions.json (json)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// TODO: Replace with your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDuBbgwcJR0wWJMq7CFV-VgZMqNtFzDPko",
    authDomain: "iqlaa-9b951.firebaseapp.com",
    projectId: "iqlaa-9b951",
    storageBucket: "iqlaa-9b951.firebasestorage.app",
    messagingSenderId: "728888284570",
    appId: "1:728888284570:web:af08032d700e028a029623",
    measurementId: "G-YVR4ERB4BJ"
};
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
;
function getQuestionText(questionId, questions) {
    const q = questions.find((q)=>q.id === questionId);
    return q ? q.question : "Unknown question";
}
const _questions = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$questions$2e$json__$28$json$29$__["default"].questions || [];
const Responses = ()=>{
    _s();
    const [responses, setResponses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Responses.useEffect": ()=>{
            const fetchResponses = {
                "Responses.useEffect.fetchResponses": async ()=>{
                    try {
                        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(db, 'users'));
                        const data = querySnapshot.docs.map({
                            "Responses.useEffect.fetchResponses.data": (doc)=>({
                                    id: doc.id,
                                    ...doc.data()
                                })
                        }["Responses.useEffect.fetchResponses.data"]);
                        setResponses(data);
                        console.log("Fetched responses: ", data);
                    } catch (error) {
                        console.error('Error fetching responses:', error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["Responses.useEffect.fetchResponses"];
            fetchResponses();
        }
    }["Responses.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Responses.useEffect": ()=>{
            // Calculate stats after responses are loaded
            const newStats = {};
            _questions.forEach({
                "Responses.useEffect": (q)=>{
                    if (q.type === "multiple_choice" && q.options) {
                        newStats[q.id] = {};
                        q.options.forEach({
                            "Responses.useEffect": (option)=>{
                                newStats[q.id][option] = 0;
                            }
                        }["Responses.useEffect"]);
                    }
                }
            }["Responses.useEffect"]);
            responses.forEach({
                "Responses.useEffect": (userResponse)=>{
                    userResponse.responses?.forEach({
                        "Responses.useEffect": (answerObj)=>{
                            const { questionId, answer } = answerObj;
                            if (newStats[questionId] && newStats[questionId][answer] !== undefined) {
                                newStats[questionId][answer]++;
                            }
                        }
                    }["Responses.useEffect"]);
                }
            }["Responses.useEffect"]);
            setStats(newStats);
            if (Object.keys(newStats).length > 0) {
                console.log("Stats: ", newStats);
            }
        }
    }["Responses.useEffect"], [
        responses
    ]);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/src/app/responses/page.tsx",
        lineNumber: 99,
        columnNumber: 23
    }, this);
    // clculate totale user responses
    let totalResponses = `${responses.length}: إجمالي عدد الإجابات `;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-800 flex flex-col items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mt-10 mb-2 text-4xl font-bold text-center mb-10",
                style: {
                    color: "cyan"
                },
                children: totalResponses
            }, void 0, false, {
                fileName: "[project]/src/app/responses/page.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "w-[50%]",
                style: {
                    minWidth: 300
                },
                children: _questions.filter((q)=>q.type === 'multiple_choice').map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "mb-5 bg-gray-500 rounded p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-bold text-white text-center mb-4",
                                style: {
                                    color: "#dbd8d8ff"
                                },
                                children: q.question
                            }, void 0, false, {
                                fileName: "[project]/src/app/responses/page.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: q.options && q.options.map((option)=>{
                                    const count = stats[q.id]?.[option] ?? 0;
                                    const total = Object.values(stats[q.id] || {}).reduce((a, b)=>Number(a) + Number(b), 0);
                                    const percent = total > 0 ? count / total * 100 : 0;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "mb-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute h-full w-full rounded bg-gray-300",
                                                    style: {
                                                        zIndex: 0
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/responses/page.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-0 top-0 h-full rounded bg-green-600",
                                                    style: {
                                                        width: `${percent}%`,
                                                        zIndex: 1,
                                                        transition: 'width 0.5s'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/responses/page.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative z-10 pl-2 font-bold flex items-center h-full w-full text-black",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white",
                                                            children: [
                                                                count,
                                                                "/",
                                                                total
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/responses/page.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-5 ml-5",
                                                            children: option
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/responses/page.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                percent.toFixed(1),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/responses/page.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/responses/page.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/responses/page.tsx",
                                            lineNumber: 118,
                                            columnNumber: 21
                                        }, this)
                                    }, option, false, {
                                        fileName: "[project]/src/app/responses/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/responses/page.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this)
                        ]
                    }, q.id, true, {
                        fileName: "[project]/src/app/responses/page.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/responses/page.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/responses/page.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
};
_s(Responses, "1dcYeBEfhxIS5FlG5KPjK8IJn5s=");
_c = Responses;
const __TURBOPACK__default__export__ = Responses;
var _c;
__turbopack_context__.k.register(_c, "Responses");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_b88380bc._.js.map