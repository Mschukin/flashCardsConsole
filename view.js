const inquirer = require("inquirer");

class View {
    static chooseTopic = {
        nighWalk: "./topics/nighthawk_flashcard_data.txt",
        otter: "./topics/otter_flashcard_data.txt",
        raccoon: "./topics/raccoon_flashcard_data.txt",
    }

    static async topicQuiz(){
        const topics = await inquirer
  .prompt({
    type: 'list', 
    name: "topic",
    message: "Выбери тему!",
    choices: Object.keys(this.chooseTopic)
    }) return this.chooseTopic[topics.topics]
    }
    
    





}

