const contactForm = document.querySelector('.contact-form');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email   = document.getElementById('email') ;
let subject = document.getElementById('subject');
let message = document.getElementById('message'); 
let phone  = document.getElementById('phone');

contactForm.addEventListener('submit' , (e)=>{


e.preventDefault();
let formData = {

name:fname.value+' '+ lname.value ,
email:email.value,
subject:subject.value,
message:message.value,
phone:phone.value






}

console.log(formData);


let xhr = new XMLHttpRequest();
xhr.open('POST' , '/');
xhr.setRequestHeader('Content-Type' , 'application/json');
xhr.onload = function(){

    console.log(xhr.responseText);
    if(xhr.responseText == 'success'){

        alert('Email sent');
        fname.value = '';
        lname.value = '';
        email.value = '';
        subject.value = '';
        message.value = '';
        phone.value = '';
    }else {
        alert('something went wrong');
    }
}

xhr.send(JSON.stringify(formData));
});