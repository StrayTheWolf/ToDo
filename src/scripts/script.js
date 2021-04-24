import {Storage} from "./storage";
import ClickOutside from "vue-click-outside"


new Vue({
    el: '#app',

    directives:{
      ClickOutside
    },

    data: {
        storage: new Storage(),

        displayAddWindow: false,
        displayTask: false,
        displayList: true,
        displayIsDone: false,

        newLineThrough: 'none',
        blur: 'blur(0px)',

        newTodoName: '',
        newTodoDate: '',
        newTodoMonth: '',
        newTodoYear: '',
        newTodoDesc: '',
        newTodoNotification: '',
        newTodoColor: '#000000',
        newTodoDone: false,
        lastId: function (){ // получаем id последнего объекта из массива и даем новому объекту id + 1 от последнего
            if (this.tasks.length !== 0){
                let arr = this.tasks[this.tasks.length - 1]
                return arr.id + 1
            }
            else {
                return 0
            }
        },

        tasks: [],
        currentTask: '',

        openedAdd: false,
        openedList: true
    },

    mounted() { // используем хук жизненого цикла vue для загрузки из storage при загрузке самого vue
            /*
        if (localStorage.getItem('tasks')) {
            try {
                this.tasks = JSON.parse(localStorage.getItem('tasks'))
            } catch (e) {
                localStorage.removeItem('tasks')
            }
        }

             */
        this.tasks = this.storage.get(this.tasks)
    },

    methods: {
        openNewTaskWindow() {

            this.displayTask = false;
            this.displayList = false;
        },

        openCloseListItems() {
            if (this.displayList === true){
                this.displayList = false
            }
            else this.displayList = true;
        },

        openSelectedTask(index, task) {
            this.currentTask = task[index]
            this.displayTask = true;
        },

        addNewTask() {
            this.tasks.push({
                id: this.lastId(),
                name: this.newTodoName,
                description: this.newTodoDesc,
                time: this.newTodoDate + ' ' + this.newTodoMonth + ' ' + this.newTodoYear,
                color: this.newTodoColor,
                notification: this.newTodoNotification,
                done: this.newTodoDone,
                lineThrough: this.newLineThrough
            });
            this.storage.update(this.tasks);
            this.clearTaskAfterAdding();
        },

        /*
        saveChangesLocal() {
            const parsed = JSON.stringify(this.tasks);
            localStorage.setItem('tasks', parsed)
        },
         */

        deleteTask(id, done) {
            if (done === true){
                this.tasks = this.tasks.filter(function (obj) {
                    return obj.id !== id
                });
                this.currentTask = '';
                this.storage.update(this.tasks);
                this.displayTask = false;
            }
            else {
                alert('Mark task done to remove it')
            }
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

        taskDoneSwitch() {
            this.currentTask.done = this.currentTask.done !== true;
            this.lineThroughRender()
            this.storage.update(this.tasks);
        },

        lineThroughRender() {
            if (this.currentTask.done === true) {
                this.currentTask.lineThrough = 'line-through';
            } else if (this.currentTask.done === false) {
                this.currentTask.lineThrough = 'none';
            }
        },

        blurSwitch() {
            if (this.blur === 'blur(0px)') {
                this.blur = 'blur(5px)'
            } else {
                this.blur = 'blur(0px)'
            }
        },

        // Open close outside div window methods by ClickOutside directive
        toggle(){
            this.openedAdd = true;
        },

        hide(){
            this.openedAdd = false;
        }
    }
})