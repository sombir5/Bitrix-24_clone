
import navbar from "../component/navbar.js"
document.getElementById('navbar').innerHTML=navbar();

import footer from "../component/footer.js"
document.querySelector('.footer').innerHTML=footer();

let element=document.querySelectorAll(".points")
console.log(element)

element.forEach(e => {
    e.addEventListener('click',function(){
        changeColor(this)
    });
});
function changeColor(element){
    clear();
    console.log(element)
    element.style.backgroundColor ="white";
    element.style.color ="black";
}

 function clear(){
            for(let i=0;i<element.length;i++){
            let items= element[i];
            items.style.backgroundColor ="#3baaf1";
            items.style.color ="white";
            // items.style.hover.backgroundColor="#ddf0fdd4"
            }
            }

let signuppage=document.querySelectorAll('.free');
signuppage.forEach(e => {
    e.addEventListener('click',function(){
        window.location.href="./signup.html"
    });
});
