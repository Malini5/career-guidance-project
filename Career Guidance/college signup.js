
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { setDoc, doc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

document.getElementById('college-signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const collegeName = document.getElementById('college-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           
            const user = userCredential.user;
            console.log('College signed up:', user);

           
            return setDoc(doc(db, "colleges", user.uid), {
                collegeName: collegeName,
                email: email
            });
        })
        .then(() => {
            console.log('College details saved to Firestore');
            
        })
        .catch((error) => {
            console.error('Error signing up college:', error);
        });
});
