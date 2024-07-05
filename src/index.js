//  

// let name1 = prompt("what is your name?");
// alert(name1);
// alert("Hi " + name1 + ", welcome to our website" );
// let age = 18;
// let hometown =Keta;
// alert("Hi ${name1}, from ${homework}, who is, ${age)");


// let title = prompt("What is your title?");
// let name2 = prompt("What is your name?");
// let favouriteproduct = prompt("What is your product?");
// alert(`Hi ${title} ${name2},  is your favorite product ${favouriteproduct}?`);

// let name = "Bless";
// alert(name1);
// name = "Vicky joy";
// name = "Jacklin";

// let name = prompt("What is your name?");
// let age = prompt("How old are you?");
// let email = prompt("Enter your email.");
// alert("Hi ${name}, you are ${age} years old, and we will get keep in touch via your email 👋👋.");
 
// let name1 = "my name is Bless"; // example of concatination
// let sentence = "hi there " + name1 ; // example of interpulation

// let sentence1 = `hello 🙋‍♀️ ${name1}`;
// console.log(sentence);
// console.log(sentence1);

// let smoothy1 = "milk shake is a mixture of mangoe,bananas and milk";
// let smoothy = `hi there, 👋 ${smoothy1}`;
// console.log(smoothy);
// console.log(smoothy1);
// let name = prompt("What is your name?");
// let age = prompt("Tell us your age.");
// let email = prompt("Enter your email");
// if(age < 12 ){
//     alert(`Hi ${name}, you are ${age} years old and you are too young to register. Sorry 😔😔.`);
// } else if(age > 12 && age < 18){
// alert(`Hi ${name}, you are ${age} years old and you have limited options to register for. We will keep in touch via your ${email} 👋👋.`);
// } else if(age == 18 || age > 18 ){`Hi ${name}, you are ${age} years old and you can register for any option of your choosing. We will keep in touch via your ${email} 👋👋`;
// }else{
//     alert(`Hi ${name}, you are ${age} years old and we are happy to have you here. Have a nice day`);
// }




// let name = prompt("What is your name?");
// if(name == "Bless"){
//     console.log(name);
//     alert("Hi Beautiful 🙋‍♀️");
// }
// else{
//     console.log(name);
//     alert("Hi there");
// }
 

function findMe(){
    let pfour = document.getElementById("pfour");
    pfour.style.display = "block"; //brings back the hidden paragraph
}
   let pthree = document.getElementById("pthree");
    pthree.addEventListener("click",findMe);

    pthree = document.getElementById("pthree");
    pthree.style.border="6px dotted orange";
    pthree.style.display="block";

function changebackground(){
    pone.style.backgroundColor = "purple"; //changes the color to purple
    pone.style.color = "white";
}
    let pone = document.querySelector("#pone");
    pone.addEventListener("dblclick", changebackground);

function changeWidth(){
    ptwo.style.width = "400px";
    ptwo.style.backgroundColor = "brown";
    function changeNormal (){
ptwo.style.width = "";
    }
    ptwo.addEventListener("mouseleave", changeNormal);
}
    let ptwo = document.getElementById("ptwo");
    ptwo.addEventListener("mouseenter",changeWidth);

