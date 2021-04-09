new Vue({
    el: '#app',
    data: {
        tasks: [
            {id: '1', name: 'Задача 1', time: '12 pm'},
            {id: '2', name: 'Задача 2', time: '11 pm'},
            {id: '3', name: 'Задача 3', time: '10 pm'},
            {id: '4', name: 'Задача 4', time: '9 pm'},
            {id: '5', name: 'Задача 5', time: '8 pm'}
        ],
        description: '',
        status: true,

    },
    methods: {
        openNewTaskWindow() {
            document.getElementById('todo-add').style.display = 'flex'
        },

        openTask() {
            document.getElementById('todo-description').style.display = 'flex'
        }
    }
});
