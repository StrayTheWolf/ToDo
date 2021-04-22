import {LocalStorage} from "./storage";

new Vue({
    el: '#app',

    data: {
        displayAddWindow: false,
        displayTask: false,
        displayList: true,
        displayIsDone: false,

        newLineThrough: 'none',
        blur: 'blur(0px)',

        newTodoId: 0,
        newTodoName: '',
        newTodoDate: '',
        newTodoMonth: '',
        newTodoYear: '',
        newTodoDesc: '',
        newTodoNotification: '',
        newTodoColor: '#000000',
        newTodoDone: 'false',

        tasks: [],
        currentTask: '',
        newTask: '',
    },

    mounted() { // используем хук жизненого цикла vue для загрузки из storage при загрузке самого vue
        if (localStorage.getItem('tasks')) {
            try {
                this.tasks = JSON.parse(localStorage.getItem('tasks'))
            } catch (e) {
                localStorage.removeItem('tasks')
            }
        }
    },

    methods: {
        openNewTaskWindow() {
            this.displayAddWindow = true;
            this.displayTask = false;
            this.displayList = false;
        },

        openSelectedTask(index, task) {
            this.currentTask = task[index]
            this.displayTask = true;
        },

        addNewTask() {
            this.tasks.push({
                id: this.newTodoId += 1,
                name: this.newTodoName,
                description: this.newTodoDesc,
                time: this.newTodoDate + ' ' + this.newTodoMonth + ' ' + this.newTodoYear,
                color: this.newTodoColor,
                notification: this.newTodoNotification,
                done: this.newTodoDone,
                lineThrough: this.newLineThrough
            });
            this.saveChangesLocal();
            this.clearTaskAfterAdding();
            this.displayAddWindow = false;
            this.displayList = true;
        },

        saveChangesLocal() {
            const parsed = JSON.stringify(this.tasks);
            localStorage.setItem('tasks', parsed)
        },

        clearTaskAfterAdding() {
            this.newTodoName = ''
            this.newTodoDate = ''
            this.newTodoMonth = ''
            this.newTodoYear = ''
            this.newTodoDesc = ''
            this.newTodoNotification = ''
            this.newTodoColor = '#000000'
        },

        deleteTask(id, done) {
            if (done === 'true'){
                this.tasks = this.tasks.filter(function (obj) {
                    return obj.id !== id
                });
                this.currentTask = '';
                this.saveChangesLocal();
                this.displayTask = false;
            }
            else {
                alert('Mark task done to remove it')
            }
        },

        taskDoneSwitch() {
            if (this.currentTask.done === 'true') {
                this.currentTask.done = 'false'
            } else {
                this.currentTask.done = 'true'
            }
            this.lineThroughRender()
            this.saveChangesLocal()
        },

        lineThroughRender() {
            if (this.currentTask.done === 'true') {
                this.currentTask.lineThrough = 'line-through';
            } else if (this.currentTask.done === 'false') {
                this.currentTask.lineThrough = 'none';
            }
        },

        blurOn() {
            if (this.blur === 'blur(0px)') {
                this.blur = 'blur(5px)'
            } else {
                this.blur = 'blur(0px)'
            }
        }
    }
})