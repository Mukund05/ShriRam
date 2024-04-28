var flag = false;
var temp3 = document.querySelector('.nav-list');
var temp4 = document.querySelectorAll('.nav-link');
var temp5 = document.querySelector('main');
var temp6 = document.querySelector('.donate-bg');
var temp7 = document.querySelector('footer');
var temp8 = document.querySelector('.logo-container');
var preloader = document.querySelector('.loader');

window.addEventListener('load', function(){
    preloader.style.display = 'none';
});


temp3.style.top = '-100vh';

function toggleNavbar(){
    var ex = toString(temp3.style.top);
    if(ex != "-100vh"){
        temp3.style.top = '-100vh';
        flag = false;
    }
}

temp5.addEventListener('click', toggleNavbar);
temp6.addEventListener('click', toggleNavbar);
temp7.addEventListener('click', toggleNavbar);
temp8.addEventListener('click', toggleNavbar);


for(let k = 0; k<temp4.length; k++){
    temp4[k].addEventListener('click', function(){
        if(flag){
            temp3.style.top = '-100vh';
        }
        else{
            temp3.style.top = '0';
        }
        flag = !flag;
    });
}

var readMoreUrl = document.querySelector('.readLink1');
var readMoreText = document.querySelector('#readmore1');
var readLess1 = document.querySelector('.readless1');

var readMoreUrl2 = document.querySelector('.readLink2');
var readMoreText2 = document.querySelector('#readmore2');
var readLess2 = document.querySelector('.readless2');

readMoreUrl.addEventListener('click', function(){
    readMoreUrl.style.display = 'none';
    readMoreText.style.display = 'inline';
    readLess1.style.display = 'inline';
});

readLess1.addEventListener('click', function(){
    readMoreText.style.display = 'none';
    readMoreUrl.style.display = 'inline'; 
    readLess1.style.display = 'none';
});

readMoreUrl2.addEventListener('click', function(){
    readMoreUrl2.style.display = 'none';
    readMoreText2.style.display = 'inline';
    readLess2.style.display = 'inline';

})

readLess2.addEventListener('click', function(){
    readMoreText2.style.display = 'none';
    readMoreUrl2.style.display = 'inline';
    readLess2.style.display = 'none';
});


window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-GMRNXFZHR5');

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBW05k3w9kmp2o0aEbg9YlxoXClNN1Beq8",
    authDomain: "sri-ram-foundation.firebaseapp.com",
    projectId: "sri-ram-foundation",
    storageBucket: "sri-ram-foundation.appspot.com",
    messagingSenderId: "243712715607",
    appId: "1:243712715607:web:dca6f96dd9b3fabe7dec12",
    measurementId: "G-GMRNXFZHR5"
};

//   initialize firebase
firebase.initializeApp(firebaseConfig);

//   reference your database 
var contactFormDB = firebase.database().ref("contactForm");

document.querySelector('.input-form').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    var firstName = document.querySelector('#Fname').value;
    var lastName = document.querySelector('#Lname').value;
    var phone = document.querySelector('#phone').value;
    var email = document.querySelector('#email').value;
    var msgcontent = document.querySelector('#message').value;

    let date = new Date().toJSON();
    saveContent(firstName, lastName, email, phone, msgcontent, date);
}


const saveContent = (firstName, lastName, email, phone, msgcontent, currentDate)=>{
    var newContactForm = contactFormDB.push();
    let detailsofUser = {
        FName : firstName,
        LName : lastName,
        email : email,
        phone : phone,
        msgcontent : msgcontent,
        date : currentDate
    }
    newContactForm.set({detailsofUser});
    let ownerEmail = "sri-ram@gmail.com"
    let ownerEmail2 = "forget"
    let msgbody2 = `<div>
    <h2 style="font-style:">Hey ${firstName},</h2><h3> How do you do? Thanks for contacting Sriram Foundation. <br> </h3>
    <div style = "margin:auto; padding: 0 30px; border: 2px solid lightgray; text-align: center; width:fit-content">
        <h2>Your Message </h2>
        <h2>"${msgcontent}"</h2>
    </div>
    <h3>I will get into touch in short time <b>:)</b></h3>
    <h3>Please subscribe to my youtube channel <a href="https://www.youtube.com/channel/UCqFxWlMFmpOCyjQQBmsi6-g" target="_blank" style="text-decoration:underline;">Study&nbsp;With&nbsp;Sriram</a> </h3>
        </div>`;
    Email.send({
        SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
        To : `${email}, ${ownerEmail2}`,
        From : `${ownerEmail}`,
        Subject : "Thank you for Contacting Sriram Foundation",
        Body : msgbody2
    })
    .then(
      message => alert("Thank you!! I will get back to you soon! Please check your inbox (as well as in spam box) for my message")
    );
}

