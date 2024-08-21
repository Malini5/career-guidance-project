
import { setDoc, doc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

document.getElementById('aptitude-test-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const answer1 = document.getElementById('question1').value;
    const answer2 = document.getElementById('question2').value;


    const userId = localStorage.getItem('userId');
    
    setDoc(doc(db, "aptitude-tests", userId), {
        answer1: answer1,
        answer2: answer2,
        score: calculateScore(answer1, answer2)
    })
    .then(() => {
        console.log('Aptitude test results saved to Firestore');
        
    })
    .catch((error) => {
        console.error('Error saving aptitude test results:', error);
    });
});

function calculateScore(answer1, answer2) {
    let score = 0;
    if (answer1 === '4') score += 1;
    if (answer2.toLowerCase() === 'delhi') score += 1;
    return score;
}
