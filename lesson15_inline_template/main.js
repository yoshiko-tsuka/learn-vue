const { createApp, ref, computed } = Vue

const app = createApp({
    setup() {
    }
})
app.component('progress-vue', {
    setup(_, {emit}){
        const completionRate = ref(0)

        return {
            completionRate
        }
    }
})
app.mount('#app')
