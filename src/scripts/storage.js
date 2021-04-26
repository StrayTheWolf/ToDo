export class Storage {

    // получаем таски с условием если их нет, удалить из сторадж ключ с именем хранилища
    get(tasks) {
        if (localStorage.getItem('tasks')){
            try {
                tasks = JSON.parse( localStorage.getItem('tasks'))
            } catch (e) {
                localStorage.removeItem('tasks');
            }
        }
        return tasks
    }

    // метод используется для добваления, редактирования и удаления таски
    update(tasks) {
        const parsed = JSON.stringify(tasks);
        localStorage.setItem('tasks', parsed)
    }
}
