const fs = require('fs');

class Model {
  constructor() {
    this.INDEX = 0;
    this.cards = [];
  }

  getCards(path) {
    const result = fs
      .readFileSync(`./topics/${path}`, 'utf-8')
      .split('\n\n').map((card) => {
      const [question, answer] = card.split('\n');
      
      return { question, answer };
    });
    this.cards = result;
  }

  questionCount() {
    return this.cards.length;
  }

  nextCards() {
    this.INDEX += 1;
    return this.INDEX <= this.questionCount();
  }

  questionGet() {
    return this.cards[this.INDEX - 1].question;
  }

  answerCheck(answer) {
    return answer === this.cards[this.INDEX - 1].answer;
  }
}



module.exports = Model;
