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
    name: "tema",
    message: "Давай поиграем!",
    choices: Object.keys(this.chooseTopic)
    }) 
    return this.chooseTopic[topics.tema]
    }
    
    static async answer(question) {
        const giveTrueAnwser = await inquirer
        .prompt({
            type: "input",
            name: "otvet",
            message: `${question}\n`
        }) 
        return giveTrueAnwser.otvet
    }
    static printConsole(message){
        console.log(message)
    }
  
}

module.exports = View
