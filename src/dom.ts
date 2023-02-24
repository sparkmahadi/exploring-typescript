// exploring dom manipulation in typescript

// const submitBtn = document.getElementById("submit-btn") as HTMLElement;
// const submitBtn = document.getElementById("submit-btn")!;

const submitBtn = document.getElementById("submit-btn");
const input = document.getElementById("input") as HTMLInputElement;

// submitBtn?.addEventListener("click", (event)=>{
//     console.log("clicked");
// })

// using optional chaining is the best way as it is a part of JS. Other options are based on typescript which will through error on browser if element is not found.

const handleSubmit = (event: MouseEvent)=>{
    console.log("clicked", input?.value);
    const p = document.createElement("p");
    p.innerText = input?.value;
    const target = event.target as HTMLElement;
    target?.parentNode?.appendChild(p);
};

submitBtn?.addEventListener("click", handleSubmit)