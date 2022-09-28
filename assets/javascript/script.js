// globals start
const button1 = document.querySelector("#save1");
const button2 = document.querySelector("#save2");
const button3 = document.querySelector("#save3");
const button4 = document.querySelector("#save4");
const button5 = document.querySelector("#save5");
const button6 = document.querySelector("#save6");
const button7 = document.querySelector("#save7");
const button8 = document.querySelector("#save8");
const button9 = document.querySelector("#save9");
const toDo1 = document.querySelector("#toDo1");
const toDo2 = document.querySelector("#toDo2");
const toDo3 = document.querySelector("#toDo3");
const toDo4 = document.querySelector("#toDo4");
const toDo5 = document.querySelector("#toDo5");
const toDo6 = document.querySelector("#toDo6");
const toDo7 = document.querySelector("#toDo7");
const toDo8 = document.querySelector("#toDo8");
const toDo9 = document.querySelector("#toDo9");
const allTableRows = document.querySelectorAll(".block");
const time = document.querySelector("#currentDay")
// globals end

// today's date in jumbotron
setInterval(() => {
    let now = moment().format("[Today's date: ]dddd, MMM Do, YYYY, LT");
    time.textContent = now;
    }, 1000)

// making local storage persist through refresh
toDo1.value = localStorage.getItem("toDo1")
toDo2.value = localStorage.getItem("toDo2")
toDo3.value = localStorage.getItem("toDo3")
toDo4.value = localStorage.getItem("toDo4")
toDo5.value = localStorage.getItem("toDo5")
toDo6.value = localStorage.getItem("toDo6")
toDo7.value = localStorage.getItem("toDo7")
toDo8.value = localStorage.getItem("toDo8")
toDo9.value = localStorage.getItem("toDo9")

// setting local storage for each text box
function localStorage1() {
    localStorage.setItem("toDo1", toDo1.value);
    toDo1.innerHTML = localStorage.getItem("toDo1")
}

function localStorage2() {
    localStorage.setItem("toDo2", toDo2.value);
    toDo2.innerHTML = localStorage.getItem("toDo2")
}

function localStorage3() {
    localStorage.setItem("toDo3", toDo3.value);
    toDo3.innerHTML = localStorage.getItem("toDo3")
}

function localStorage4() {
    localStorage.setItem("toDo4", toDo4.value);
    toDo4.innerHTML = localStorage.getItem("toDo4")
}

function localStorage5() {
    localStorage.setItem("toDo5", toDo5.value);
    toDo5.innerHTML = localStorage.getItem("toDo5")
}


function localStorage6() {
    localStorage.setItem("toDo6", toDo6.value);
    toDo6.innerHTML = localStorage.getItem("toDo6")
}

function localStorage7() {
    localStorage.setItem("toDo7", toDo7.value);
    toDo7.innerHTML = localStorage.getItem("toDo7")
}

function localStorage8() {
    localStorage.setItem("toDo8", toDo8.value);
    toDo8.innerHTML = localStorage.getItem("toDo8")
}

function localStorage9() {
    localStorage.setItem("toDo9", toDo9.value);
    toDo9.innerHTML = localStorage.getItem("toDo9")
}

// making save buttons work
button1.addEventListener("click", localStorage1)
button2.addEventListener("click", localStorage2)
button3.addEventListener("click", localStorage3)
button4.addEventListener("click", localStorage4)
button5.addEventListener("click", localStorage5)
button6.addEventListener("click", localStorage6)
button7.addEventListener("click", localStorage7)
button8.addEventListener("click", localStorage8)
button9.addEventListener("click", localStorage9)

// color coding function
function pastPresentFuture() {
    let currentHour = moment().hours();

    for (let i = 0; i < allTableRows.length; i++) {
        const row = allTableRows[i]
        const hour = parseInt(row.dataset.hour);

        if (currentHour > hour) {
            row.style.backgroundColor = "#3f3f3f";
        } else if (currentHour < hour) {
            row.style.backgroundColor = "#e4e4e4";
        }
    }
}

pastPresentFuture()