/* Rifare l'esercizio della to do list come fatto assieme in classe:
stampare in pagina un item per ogni elemento contenuto in un array
ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
Quando avete finito:
per chi non ha fatto il bonus dell'esercizio di venerdi, provate a farlo e poi passare ai bonus di questo esercizio.
chi ha fatto faccia i bonus */

const app = new Vue({
    el: '#root',
    data: {
        tasks: [
            'Fare i compiti',
            'Fare la spesa',
            'Fare il bucato',
        ],
        tasksCompleted: [
        ],
        tasksTrash: [

        ],
        newTask: "",
        error: 0,
        imageLogo: "https://www.boolean.careers/images/misc/logo.png"
    },
    methods: {
        removeTask(i) {
            this.tasksTrash.push(this.tasks[i])
            this.tasks.splice(i, 1)

        },
        addTask() {
            if (this.newTask != "" && this.newTask.length > 2) {
                this.tasks.push(this.newTask)
                this.error = 0
            }
            else {
                this.error = 1
            }
            this.newTask = ""
        },
        flagTask(i) {
            this.tasksCompleted.push(this.tasks[i])
            this.tasks.splice(i, 1)
        },
        returnToDo(i) {
            this.tasks.push(this.tasksCompleted[i])
            this.tasksCompleted.splice(i, 1)
        },
        returnToDoTrash(i) {
            this.tasks.push(this.tasksTrash[i])
            this.tasksTrash.splice(i, 1)
        },
        emptyTrash(i) {
            if (this.tasksTrash.length != 0) {
            userChoice = prompt("Sicuro di voler eliminare tutto definitivamente? Y/N")
            if (userChoice === "Y") {
                this.tasksTrash.splice(i, this.tasksTrash.length)
            }
        }
    }
    }
})
