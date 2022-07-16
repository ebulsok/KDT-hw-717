let month = new Date().getMonth() +1;
let date = new Date().getDate();
let todayEl = document.querySelector("p");
todayEl.textContent = `오늘은 ${month}월 ${date}일!`;

let inputEl = document.querySelector("#todo-input");
let btnEl = document.querySelector("#todo-btn");
let todoEls = document.querySelector("#todo-list");

btnEl.addEventListener("click", function () {
    if(inputEl.value === "") alert("내용을 입력해주세요.");
    else {
        let liEl = document.createElement("li");
        let checkEl = document.createElement("input");
        
        checkEl.setAttribute("type", "checkbox");
        checkEl.setAttribute("onclick", "checkBox(this)");
        checkEl.classList.add("todo-check");
        liEl.appendChild(checkEl);
        liEl.appendChild(document.createTextNode(inputEl.value));
        todoEls.appendChild(liEl);
        inputEl.value = "";
    }
});

function checkBox(t) {
    if(t.parentNode.classList.contains("did")) t.parentNode.classList.remove("did");
    else t.parentNode.classList.add("did");
};