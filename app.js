const input = document.getElementById("input");

const input2 = document.getElementById("input2");
const button = document.getElementById("button");

const select = document.getElementById("select");

const plusB = document.getElementById("plus");
const minusB = document.getElementById("minus");
const diviB = document.getElementById("divi");
const multiB = document.getElementById("multi");

const p = document.getElementById("p");
p.textContent = "0";

const err = (n, n2) => {
    if (!n || !n2) {
        console.log("yleoo");
    }
};

const plus = (n, n2) => {
    return n + n2;
};

const minus = (n, n2) => {
    return n - n2;
};

const divi = (n, n2) => {
    return n / n2;
};

const multi = (n, n2) => {
    return n * n2;
};

const multi2 = (n, n2) => {
    return n ** n2;
};

const clear = () => {
    input.value = "";
    input2.value = "";
};
const errr = document.createElement("p");
errr.style.textAlign = "center";

function Click() {  
    if (input.value == "" || input2.value == "") {
        errr.textContent = "Please input a value";
        errr.classList.add("error");
        document.body.appendChild(errr);
        setInterval(() => {
            errr.remove();
        }, 3000);
    }

    if (select.value == "+") {
        let sum = plus(Number(input.value), Number(input2.value));
        p.textContent = sum;
        clear();
    } else if (select.value == "-") {
        let sum = minus(Number(input.value), Number(input2.value));
        p.textContent = sum;
        clear();
    } else if (select.value == "/") {
        let sum = divi(Number(input.value), Number(input2.value));
        p.textContent = sum;
        clear();
    } else if (select.value == "*") {
        let sum = multi(Number(input.value), Number(input2.value));
        p.textContent = sum;
        clear();
    } else if (select.value == "**") {
        let sum = multi2(Number(input.value), Number(input2.value));
        p.textContent = sum;
        clear();
    }
    input.focus();
}


document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        button.click()
    }
})


button.addEventListener("click", Click);


