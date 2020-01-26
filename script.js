//合計スコア用の変数
let score = 0;
const trueAns = {"quiz-1": "b", "quiz-2": "a", "quiz-3": "c"};

function showScore(){
//スコア表示の処理をここに記述
    const totalScore = document.getElementById('score-message').innerHTML = score;
    
    if(score === 3) {
        console.log("3点：すばらしい！");
    } else if(score === 2) {
        console.log("2点；おしい！");
    } else if(score === 1) {
        console.log("1点；まあまあ");
    } else {
        console.log("0点；残念");
    }   

}

showScore();


/**************
1問目の正解はBのラバト
2問目の正解はAのバイカル湖
3問目の正解はCのレンブラント
**************/

function answerQuiz1(){
//問題1の処理をここに記述
    const quiz_1 = document.getElementByID('quiz-1');
    quiz_1.answer.value;

    var score = 1;
    switch (score) {
        case "b":
        console.log('1問目の' + quiz_1.answer.value + 'を選択しました');
        console.log('正解です');
        console.log('現在のトータルスコア：' + score);

    }
}    


function answerQuiz2(){
//問題2の処理をここに記述
    const quiz_2 = document.getElementById('quiz-2');
    quiz_2.answer.value;
}


function answerQuiz3(){
//問題3の処理をここに記述
    const quiz_3 = document.getElementById('quiz-3');
    quiz_3.answer.value;
}
