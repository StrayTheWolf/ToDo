export class LocalStorage {

    constructor(taskName, description, taskTime, notification, color) {
        this.taskName = taskName
        this.description = description
        this.taskTime = taskTime
        this.notification = notification
        this.color = color
    }

    addTask(){
        if (app.newTodoName !== '') {
            app.tasks.push({
                name: app.newTodoName,
                description: app.newTodoDesc,
                time: app.newTodoDate + ' ' + app.newTodoMonth + ' ' + app.newTodoYear,
                color: app.newTodoColor,
                notification: app.newTodoNotification,
                done: false,
            });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(app.tasks));
    }
}}
