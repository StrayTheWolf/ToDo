export class LocalStorage {

    constructor(id, taskName, taskTime, description) {
        this.id = id;
        this.taskName = taskName;
        this.description = description
    }

    add(key, value) {
        localStorage.setItem(key, value)
    }

    get(key) {
        localStorage.getItem(key)
    }

    delete(key) {
        localStorage.removeItem(key)
    }

    update(key, value) {
        localStorage.setItem(key, value)
    }
}