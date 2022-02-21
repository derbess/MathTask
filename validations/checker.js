
const checkAnswerVariants = (arr) => {
    let cnt = 0;

    const sumWithInitial = arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue.isCorrect, 
        cnt
      );
    if(sumWithInitial!=1) return false;
    return true;
}

const checkSingleQuestion = (element) => {
    let ans1 = true;
    if(element.answers.length < 2){
        ans1 = false;
    }
    if(!checkAnswerVariants(element.answers)){
        ans1 =  false;
    }

    return ans1;
}

const checkAnswer = (arr) => {

    let ans = arr.every(element => {
        return checkSingleQuestion(element);
    });
    return ans;
}
module.exports = {
    checkAnswer,
    checkSingleQuestion
}
