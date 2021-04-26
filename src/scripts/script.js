import {Storage} from "./storage";
import ClickOutside from "vue-click-outside"

new Vue({
    el: '#app',

    directives: {
        ClickOutside
    },

    data: {
        storage: new Storage(),

        blur: 'blur(0px)',

        newTodoName: '',
        newTodoDate: '',
        newTodoMonth: '',
        newTodoYear: '',
        newTodoDesc: '',
        newTodoNotification: '',
        newTodoColor: '#000000',
        newTodoDone: false,
        lastId: function () { // получаем id последнего объекта из массива и даем новому объекту id + 1 от последнего
            if (this.tasks.length !== 0) {
                let arr = this.tasks[this.tasks.length - 1]
                return arr.id + 1
            } else {
                return 0
            }
        },
        tasks: [],
        currentTask: '',

        openedAdd: false,
        openedDesc: false
    },

    mounted() { // используем хук жизненого цикла vue для загрузки из storage при загрузке самого vue
        this.tasks = this.storage.get(this.tasks)
    },

    methods: {
        openSelectedTask(index, task) {
            this.currentTask = task[index]
            this.toggleDesc()
            this.blurSwitchOn()
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
            });
            this.storage.update(this.tasks);
            this.clearTaskAfterAdding();
        },

        deleteTask(id, done) {
            if (done === true) {
                this.tasks = this.tasks.filter(function (obj) {
                    return obj.id !== id
                });
                this.currentTask = '';
                this.storage.update(this.tasks);
                this.hideDesc()
            } else {
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

        // переключалка готовности таски
        taskDoneSwitch() {
            this.currentTask.done = this.currentTask.done !== true;
            this.lineThroughRender()
            this.scaleSwitch()
            this.storage.update(this.tasks);
        },

        // зачеркивание линией задачи при таск done
        lineThroughRender() {
            if (this.currentTask.done === true) {
                this.currentTask.lineThrough = 'line-through';
            } else if (this.currentTask.done === false) {
                this.currentTask.lineThrough = 'none';
            }
        },

        // блюр для задника
        blurSwitchOn() {
            if (this.blur === 'blur(0px)') {
                this.blur = 'blur(5px)'
            }
        },

        blurSwitchOff() {
            if (this.blur === 'blur(5px)') {
                this.blur = 'blur(0px)'
            }
        },

        // скейл размера таски при task done
        scaleSwitch(){
          if(this.currentTask.done === true){
              this.currentTask.scale = 'scale(1.1)'
          }
          else {
              this.currentTask.scale = 'scale(1)'
          }
        },

        // методы открытия и закыртия при клике вне его блока
        toggleAdd() {
            this.openedAdd = true;
        },

        hideAdd() {
            this.blurSwitchOff()
            this.openedAdd = false;
        },

        toggleDesc() {
            this.openedDesc = true;
        },

        hideDesc() {
            this.blurSwitchOff()
            this.openedDesc = false;
        },
    }
})