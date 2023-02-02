// function sampilefun(){
// console.log('sample text');
// }
// sampilefun();

// var sampilefun = function(){
//     console.log('sample text');
// }
// sampilefun();

( function(){
    console.log('sample text');
})();


const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
item.onclick = () => {
if(item.id == 'clear'){
  display.innerText = '';
}else if (item.id == 'backspace'){
   let string = display.innerText.toString();
   display.innerText = string.substr(0, string.length - 1);
}else if (display.innerText != '' && item.id == 'equal'){
   display.innerText = eval(display.innerText);
}else if (display.innerText == '' && item.id == 'equal'){
   display.innerText = 'Empty!';
   setTimeout(() => (display.innerText = ''), 2000);
}else{
   display.innerText += item.id;
}
}
});

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('toggleIcon');
let isDark = true;
themeToggleBtn.onclick = () => {
calculator.classList.toggle('dark');
themeToggleBtn.classList.toggle('active');
isDark = !isDark;
}

//control flow

// let x =[];
// x[0]='name: Jhon';
// x[1]='salary: 25000';
// x[2]='bounus: 500';
// x[3]='tax: 10%';
// console.log(x);


// function x_age(age){
//     if(age>=18){
//         console.log("you can apply for exam");
//     }
//     else{
//         console.log("wait for the correct age");
//     }
// }
// console.log(x_age(19));

// // tenary operator

// function x_age(age){
//     var age =(age<18)?"wrong age":"correct age";
//     console.log(age)
// }
// x_age(18);

// function marks(results){
//     var results=(x>75)?"A":(x>60 && x<75)?"B":(x>50 && x<60)?"C":"F";
//     console.log(results)
// }
// marks(55);

