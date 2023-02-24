"use strict";
// exploring dom manipulation in typescript
// const submitBtn = document.getElementById("submit-btn") as HTMLElement;
// const submitBtn = document.getElementById("submit-btn")!;
var submitBtn = document.getElementById("submit-btn");
var input = document.getElementById("input");
// submitBtn?.addEventListener("click", (event)=>{
//     console.log("clicked");
// })
// using optional chaining is the best way as it is a part of JS. Other options are based on typescript which will through error on browser if element is not found.
var handleSubmit = function (event) {
    var _a;
    console.log("clicked", input === null || input === void 0 ? void 0 : input.value);
    var p = document.createElement("p");
    p.innerText = input === null || input === void 0 ? void 0 : input.value;
    var target = event.target;
    (_a = target === null || target === void 0 ? void 0 : target.parentNode) === null || _a === void 0 ? void 0 : _a.appendChild(p);
};
submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener("click", handleSubmit);
