const { createApp } = Vue

const app = createApp({
})
app.component('task', {
    template: '<li><slot></slot></li>'
})
app.component('task-list', {
    data() {
        return {
            tasks: [
                { task: 'Go to the store', completed: false },
                { task: 'Finish screancast', completed: false },
                { task: 'Make dinner', completed: false },
                { task: 'Clean room', completed: true },
                { task: 'Make donation', completed: true }
            ]
        }
    },
    template: '<task v-for="task in tasks">{{ task.task }}</task>'
})
app.mount('#app')
