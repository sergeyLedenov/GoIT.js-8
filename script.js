//1
const resB1 = document.querySelector(".resB1");

resB1.addEventListener("click", ()=> {
    let i = 0;
    while (i <= 10) {
        alert(i);
        i++;
    }
});

//2
const res1B2 = document.querySelector(".res1B2");
const res2B2 = document.querySelector(".res2B2");

res1B2.addEventListener("click", ()=> {
    for (let i = 0; i <= 20; i+=2) {
        alert(i);
    }
});
res2B2.addEventListener("click", ()=> {
    for (let i = 0; i <= 20; i++) {
        if (i % 2 === 0) {
            alert(i);
        }
    }
});

//3
const resB3 = document.querySelector(".resB3");

resB3.addEventListener("click", ()=> {
    for (let i = 0; i <= 10; i++) {
        alert(`7 * ${i} = ${7 * i}`);
    }
});

//4
const arr4 = [1, 2, 3, 4, 5];
const resB4 = document.querySelector(".resB4");

resB4.addEventListener("click", ()=> {
    for (let i = 0; i < arr4.length; i++) {
        alert(arr4[i]);
    }
});

//5
const arr5 = [1, 2, 3, 4, 5, 7, 8, 9, 10];  
const resB5 = document.querySelector(".resB5");

resB5.addEventListener("click", ()=> {
    for (let i = 0; i < arr5.length; i++) {
        if (i == 6) {
            break;
        } else {
            alert(`${arr5[i]} ${""}`);
        }   
    }
});

//6
const inp = document.querySelector("#n");  
const resB6 = document.querySelector(".resB6");

resB6.addEventListener("click", ()=> {
    let n = inp.value;
    for (let i = 0; i <= n; i++) {
        alert(i)
        if (i == n) {
            break;
        }
    }
});

//7
const res1B7 = document.querySelector(".res1B7");
const res2B7 = document.querySelector(".res2B7");

res1B7.addEventListener("click", ()=> {
    for (let i = 0; i <= 18; i+=3) {
        alert(i);
    }
});
res2B7.addEventListener("click", ()=> {
    for (let i = 0; i <= 20; i++) {
        if (i % 3 === 0) {
            alert(i);
        } else {
            continue;
        }
    }
});