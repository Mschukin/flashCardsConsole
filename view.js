const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule()

class View {
    static chooseTopic = {
        nighWalk: "./nighthawk_flashcard_data.txt",
        otter: "./otter_flashcard_data.txt",
        raccoon: "./raccoon_flashcard_data.txt",
    }

    static async topicQuiz(){
        const topics = await prompt({

    type: 'list', 
    name: "tema",
    message: "Давай поиграем!",
    choices: Object.keys(this.chooseTopic)
    }) 
    return this.chooseTopic[topics.tema]
    }
    
    static async answer(question) {
        const giveTrueAnwser = await prompt({
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
