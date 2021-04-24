export class Storage {

    get(tasks) {
        tasks = JSON.parse( localStorage.getItem('tasks'))
        return tasks
    }

    update(tasks) {
        const parsed = JSON.stringify(tasks);
        localStorage.setItem('tasks', parsed)
    }

    delete(key) {
        localStorage.removeItem(key)
    }
}
