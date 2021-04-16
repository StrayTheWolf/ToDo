Vue.component('task-item', {
    props: {

    },
    methods: {}
});

let app = new Vue({
    el: '#app',
    data: {
        displayAddWindow: false,
        displayTask: false,

        NewTodoId: 0,
        newTodoName: '',
        newTodoDate: '',
        newTodoMonth: '',
        newTodoYear: '',
        newTodoDesc: '',
        newTodoNotification: '',
        newTodoColor: '#000000',
        newTodoDone: 'false',

        tasks: [],
        selectedTask: []
    },
    methods: {
        openNewTaskWindow() {
            app.displayAddWindow = true;
        },

        openSelectedTask(id, task) {
            if (this.selectedTask.length !== Number.parseInt('0')) {
                this.selectedTask = [];
            }
            if (this.selectedTask.length === Number.parseInt('0')) {
                let taskObject = task.find(function (elem) {
                    return elem.id === id
                })
                this.selectedTask.push(taskObject);
            }
            app.displayTask = true;
        },


        addNewTask() {
            if (app.newTodoName !== '') {
                app.tasks.push({
                    id: this.NewTodoId++,
                    name: this.newTodoName,
                    description: this.newTodoDesc,
                    time: this.newTodoDate + ' ' + this.newTodoMonth + ' ' + this.newTodoYear,
                    color: this.newTodoColor,
                    notification: this.newTodoNotification,
                    done: this.newTodoDone,
                });
                app.clearTodoAfterAdding();
                app.displayAddWindow = false;
            } else alert('Не заполнен заголовок задачи');
        },

        clearTodoAfterAdding() {
            app.newTodoName = ''
            app.newTodoDate = ''
            app.newTodoMonth = ''
            app.newTodoYear = ''
            app.newTodoDesc = ''
            app.newTodoNotification = ''
            app.newTodoColor = '#000000'
        },

        deleteTask(id, tasks) {
            tasks.splice(id, 1);
            app.displayTask = false;
        },
    }
});