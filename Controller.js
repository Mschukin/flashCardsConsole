const fs = require('fs/promises');
const Model = require('./Model');
const View = require('./View');


class Controller {
  constructor(countAnswer = 0) {
    this.countAnswer = countAnswer;
  }
 async run() {
    const getTheme = await View.topicQuiz(); // получаю тему от Асели:

    const classMod = new Model(); //создаю новую модель
    
    classMod.getCards(getTheme); //получаю массив объектов -[{вопрос:ответ}]

    while (classMod.nextCards()) {//пока метод проверки карт соответствует условию:
      const ansQues = classMod.questionGet(); //получаю вопрос от модели
      const answer = await View.answer(ansQues); //вывожу метод (инпут, ответ, сообщение)
      const result = classMod.answerCheck(answer); //запускаю проверку ответа от модели
      let message = '';
      if (result) {
        //вывожу сообщение: если верно, прибавляю к countAnswer+1 и сообщение, если нет, ничего не прибавляю, вывожу сообщение
        this.countAnswer++;
        message = 'Ответ верный!';
      } else {
        message = 'Нужно подтянуть знания!';
      }
      View.printConsole(message);
      const finish = ((this.countAnswer / classMod.questionCount()) * 100).toFixed(0);
      View.printConsole(`Твой результат - ${finish}%`); //запускаю метод сообщения вью, и передаю туда сообщение с результатом
    }
  }
}


const gameStart = new Controller()
gameStart.run()

module.exports = Controller;
