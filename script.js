const header = document.querySelector("header");
window.addEventListener("scroll", function () {
   header.classList.toggle("sticky", this.window,scrollY > 0);
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log("Logged in:", userCredential.user);
  })
  .catch((error) => {
    console.error(error.message);
  });
