//合計スコア用の変数
let score = 0;

function showScore(){
//スコア表示の処理をここに記述
    const totalScore = document.getElementById('score-message');
    
    if(score === 3) {
        totalScore.innerHTML = "3点：すばらしい！"
    } else if(score === 2) {
        totalScore.innerHTML = "2点；おしい！";
    } else if(score === 1) {
        totalScore.innerHTML = "1点；まあまあ";
    } else {
        totalScore.innerHTML = "0点；残念";
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
    const value = quiz_1.answer.value;

    switch (value) {
        case 'a':
            console.log('1問目の' + quiz_1.answer.value + 'を選択しました');
            console.log('不正解です');
            break;
        case 'b':
            score++;
            console.log('1問目の' + quiz_1.answer.value + 'を選択しました');
            console.log('正解です');
            break;
        case 'c':
            console.log('1問目の' + quiz_1.answer.value + 'を選択しました');
            console.log('不正解です');
            break;
        default:
            alert('1問目の答えを入力してください');
            break;
    }
    console.log(score + '現在の点数');     
}

function answerQuiz2(){
//問題2の処理をここに記述
    const quiz_2 = document.getElementById('quiz-2');
    const value = quiz_2.answer.value;

    switch (value) {
        case 'a':
            score++;
            console.log('2問目の' + quiz_2.answer.value + 'を選択しました');
            console.log('正解です');
            break;
        case 'b':
            console.log('2問目の' + quiz_2.answer.value + 'を選択しました');
            console.log('不正解です');
            break;
        case 'c':
            console.log('2問目の' + quiz_2.answer.value + 'を選択しました');
            console.log('不正解です');
            break;
        default:
            alert('2問目の答えを入力してください');
            break;
    }
    console.log(score + '現在の点数'); 
}

function answerQuiz3(){
//問題3の処理をここに記述
    const quiz_3 = document.getElementById('quiz-3');
    const value = quiz_3.answer.value;

    switch (value) {
        case 'a':            
            console.log('3問目の' + quiz_3.answer.value + 'を選択しました');
            console.log('不正解です');
            break;
        case 'b':
            console.log('3問目の' + quiz_3.answer.value + 'を選択しました');
            console.log('不正解です');
            break;
        case 'c':
            score++;
            console.log('3問目の' + quiz_3.answer.value + 'を選択しました');
            console.log('正解です');
            break;
        default:
            alert('3問目の答えを入力してください');
            break;
    }
    console.log(score + '現在の点数'); 
}
