const fs = require('fs/promises');
const model = require('./Model');
const view = require('./View');

class Controller {
  constructor(countAnswer = 0) {
    this.countAnswer = countAnswer;
  }
  static async run() {
    const getTheme = await View.topicQuiz(); // получаю тему от Асели:

    const classMod = new Model(); //создаю новую модель
    classMod.getCards(getTheme); //получаю массив объектов -[{вопрос:ответ}]

    while (model.nextCards) {//пока метод проверки карт соответствует условию:
      const ansQues = classMod.questionGet(); //получаю вопрос от модели
      const answer = await View.answer(ansQues); //вывожу метод (инпут, вопрос, сообщение)
      const result = classMod.answerCheck(answer); //запускаю проверку ответа от модели
      let message = '';
      if (result) {
        //вывожу сообщение: если верно, прибавляю к countAnswer+1 и сообщение, если нет, ничего не прибавляю, вывожу сообщение
        this.countAnswer++;
        message = 'ты молодец';
      } else {
        message = 'иди учись';
      }
      View.printConsole(message);
      const finish = ((this.countAnswer / classMod.questionCount()) * 100).toFixed(1);
      View.printConsole(`Твой результат - ${message}%`); //запускаю метод сообщения вью, и передаю туда сообщение с результатом
    }
  }
}


Controller.run()
module.exports = Controller;
