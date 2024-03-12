document.addEventListener("DOMContentLoaded", () =>{
    const form = document.querySelector("form");
  
    form.addEventListener("submit", (event)=> {
      event.preventDefault(); // Formun varsayılan davranışını engellemek için
  
      // Kullanıcı tarafından girilen e-posta ve şifre değerlerini al
      const email = document.querySelector("#floatingInput").value;
      const password = document.querySelector("#floatingPassword").value;
  
      // Kullanıcı adı ve şifre kontrolü yapılır
      if (email === "barkinsayin@hotmail.com" && password === "9999") {
        // Doğru kullanıcı adı ve şifre, yeni bir sayfaya yönlendir
        window.location.href = "http://127.0.0.1:5500/index.html"; // Yönlendirilecek sayfanın URL'si
      }else if(email===""||password===""){
        alert("Please fill in the password or email section. ");
      }
       else {
        // Hatalı kullanıcı adı veya şifre, kullanıcıyı uyar
        alert("Incorrect email or password. Please try again.");
      }
    });
  });