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
        newTask: "",
        error: 0,
        imageLogo: "https://www.boolean.careers/images/misc/logo.png"
    },
    methods: {
        removeTask(i) {
            this.tasks.splice(i, 1)
        },
        addTask() {
            if (this.newTask != "") {
                this.tasks.push(this.newTask)
                this.error = 0
            }
            else {
                this.error = 1
            }
            this.newTask = ""
        }
    }
})
