
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBcQEe_f9vbvUtk8SLiDOGe_4f6J5I7jUk",
    authDomain: "login-page-36aaf.firebaseapp.com",
    projectId: "login-page-36aaf",
    storageBucket: "login-page-36aaf.appspot.com",
    messagingSenderId: "174596685800",
    appId: "1:174596685800:web:25d98027079eb90d55ae5d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const name = document.getElementById("ticket-form-name").value;
  const email = document.getElementById("ticket-form-email").value;

  const submit =document.getElementById("submit");
  submit.addEventListener("click",function(event){
    event.preventDefault();
    alert("Login successful")
  })
