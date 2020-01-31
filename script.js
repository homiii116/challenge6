//合計スコア用の変数
let score = 0;

function showScore(){
//スコア表示の処理をここに記述
    const totalScore = document.getElementById('score-message');
    
    if(score === 3) {
        totalScore.innerHTML = score + "：すばらしい！"
    } else if(score === 2) {
        totalScore.innerHTML = score + ":おしい！";
    } else if(score === 1) {
        totalScore.innerHTML = score + ":まあまあ";
    } else {
        totalScore.innerHTML = score + ":残念";
    }   

}

/**************
1問目の正解はBのラバト
2問目の正解はAのバイカル湖
3問目の正解はCのレンブラント
**************/

function answerQuiz1() {
//問題1の処理をここに記述
    const quiz_1 = document.getElementById('quiz-1');

    if (quiz_1.answer.value == 'a') {
        console.log('1問目の' + quiz_1.answer.value + 'を選択しました');
        console.log('不正解です');
    } else if (quiz_1.answer.value == 'b') {
        score++;
        console.log('1問目の' + quiz_1.answer.value + 'を選択しました');
        console.log('正解です');
    } else if (quiz_1.answer.value == 'c') {
        console.log('1問目の' + quiz_1.answer.value + 'を選択しました');
        console.log('不正解です');
    } else {
        alert('1問目の答えを入力してください');
    }
    console.log(score + '現在の点数'); 
}

function answerQuiz2(){
//問題2の処理をここに記述
    const quiz_2 = document.getElementById('quiz-2');

    if (quiz_2.answer.value == 'a') {
        score++;
        console.log('2問目の' + quiz_2.answer.value + 'を選択しました');
        console.log('正解です');
    } else if (quiz_2.answer.value == 'b') {    
        console.log('2問目の' + quiz_2.answer.value + 'を選択しました');
        console.log('不正解です');
    } else if (quiz_2.answer.value == 'c') {
        console.log('2問目の' + quiz_2.answer.value + 'を選択しました');
        console.log('不正解です');
    } else {
        alert('2問目の答えを入力してください');
    }
    console.log(score + '現在の点数'); 
}

function answerQuiz3(){
//問題3の処理をここに記述
    const quiz_3 = document.getElementById('quiz-3');

    if (quiz_3.answer.value == 'a') {
        console.log('3問目の' + quiz_3.answer.value + 'を選択しました');
        console.log('不正解です');
    } else if (quiz_3.answer.value == 'b') {        
        console.log('3問目の' + quiz_3.answer.value + 'を選択しました');
        console.log('不正解です');
    } else if (quiz_3.answer.value == 'c') {
        score++;
        console.log('3問目の' + quiz_3.answer.value + 'を選択しました');
        console.log('正解です');
    } else {
        alert('3問目の答えを入力してください');
    }
    console.log(score + '現在の点数'); 

}
