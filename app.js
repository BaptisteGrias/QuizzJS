const form = document.querySelector('.form-quizz');
let resultArray = [];
const answers = ['c', 'b', 'b', 'a', 'c']
const emojis = ['✅','✨','🤨','😭','👎','📚'];
const resultTitle = document.querySelector('.result h2');
const resultScore = document.querySelector('.score');
const resultHelp = document.querySelector('.help');
const allQuestions = document.querySelectorAll('.bloc-question');
let checkArray = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    for(i = 1; i < 6; i++){
        resultArray.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    }
    checkFunc(resultArray);
    resultArray = []
})

function checkFunc (arrResult){
    for(let i = 0; i < 5; i++){
        if(arrResult[i] === answers[i]){
            checkArray.push(true);
        } else {
            checkArray.push(false);
        }
    }
    showResult(checkArray);
    colorFunc(checkArray);
    checkArray = [];
}

function showResult(arrCheck){

    const nbOfFault = arrCheck.filter(el => el !== true).length;

    switch (nbOfFault) {
        case 0:
            resultTitle.innerText = '✅ Congratulation all good ! ✅';
            resultHelp.innerText = '';
            resultScore.innerText = '5/5';
            break;
        case 1:
            resultTitle.innerText = '✨ Very Good you miss only one ! ✨';
            resultHelp.innerText = 'You can do it !';
            resultScore.innerText = '4/5';
            break;
        case 2:
            resultTitle.innerText = "🤨 That's Ok but you can do better 🤨";
            resultHelp.innerText = 'Try again but this time focus on the question you missed !';
            resultScore.innerText = '3/5';
            break;
        case 3:
            resultTitle.innerText = '😭 Not Well ! 😭';
            resultHelp.innerText = ' You can ask some help !';
            resultScore.innerText = '2/5';
            break;
        case 4:
            resultTitle.innerText = "👎 That's bad 👎";
            resultHelp.innerText = 'Google is your friend ';
            resultScore.innerText = '1/5';
            break;
        case 5:
            resultTitle.innerText = '📚 Hell no ! 📚';
            resultHelp.innerText = ' you need to return to school !';
            resultScore.innerText = '0/5';
            break;
        default:
            "woops something went wrong";
    }
}

function colorFunc(arrValBool){
    for(let i = 0; i < arrValBool.length; i++){
        if(arrValBool[i] === true){
            allQuestions[i].style.background = 'lightgreen';
        } else {
            allQuestions[i].style.background = '#ffb8b8';
            allQuestions[i].classList.add('echec');
        
            setTimeout(() => {
                allQuestions[i].classList.remove('echec');
            }, 500)

        }
    }
}
allQuestions.forEach(item => {
    item.addEventListener('click', () => {
       item.style.background = 'white';
    })
})