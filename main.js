// let songs = ["song1", "song2", "song3", "song4", "song5"];
// songs[4] = "baby shark"

// let cookiesOrdered = [15, 3, 67, 1, 22, 100];

// for (let i = 0; i < cookiesOrdered.length; i++){
    //cookiesOrdered[i] = cookiesOrdered[i] * 10
    //console.log(cookiesOrdered[i])
//}

let questions = ["What is Igor's surname?","What is 1 plus 1?", "What colour is grass?", "What is the capital of England?", "What is 2 times 2?"];
let answer    = ['Silva', 2, 'Green', 'London', 4];

function plaQuiz() {
    confirm(`You've started the 5 questions quiz!`)
    let qCount = 1;
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        let quiz = prompt(`Question n.${qCount++} : ${questions[i]}`)
        if (quiz == answer[i]){
            score++
            confirm(`Correct answer! You've earned a point. Your new score is: ${score}`)
            if (i === 4){
                confirm(`Congratulations!! You finished the 5 questions quiz. Your score is: ${score}`)
            }
        }else {
            confirm(`Wrong answer. You didn't get a point. Your score is: ${score}`)
            if (i === 4){
                confirm(`Congratulations!! You finished the 5 questions quiz. Your score is: ${score}`)
            }
        }
    }
}
