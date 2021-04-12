new Vue({
    el: '#app',
    data: {
        newTodoName: '',
        newTodoDate: '',
        newTodoMonth: '',
        newTodoYear: '',
        newTodoDesc: '',
        newTodoNotification: '',
        newTodoColor: '',

        taskIndex: '',
        tasks: [],
        currentTask: []
    },
    methods: {
        openNewTaskWindow() {
            document.getElementById('todo-add').style.display = 'flex'
        },

        openTask(index) {

            document.getElementById('todo-description').style.display = 'flex'

            this.taskIndex = Number.parseInt(index) //приводим таскиндекс к числу

                /*
            let object = tasks.find(function(elem) {
                console.log(elem.id)
                    return elem.id === this.taskIndex // создаем никий объект в который хотим поместить искомый объект из массива
                })
            this.currentTask.push(object) // должны получить в массив текущей таски, элемент поиска

            console.log(tasks)
            console.log(this.currentTask)
                 */
        },


        addTask() {
            if (this.newTodoName !== '') {
                this.tasks.push({

                    name: this.newTodoName,
                    description: this.newTodoDesc,
                    time: this.newTodoDate + ' ' + this.newTodoMonth + ' ' + this.newTodoYear,
                    color: this.newTodoColor,
                    notification: this.newTodoNotification,
                    done: false,

                });

                document.getElementById('todo-add').style.display = 'none'

            } else alert('Не заполнена задача')
        },

        deleteTask(index) {
            this.tasks.splice(index, 1);
            document.getElementById('todo-description').style.display = 'none'
        }
    }
});
