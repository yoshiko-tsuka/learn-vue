const { createApp, ref } = Vue

const app = createApp({
})
app.component('message2', {
    props: [ 'title', 'body'],
    template: '<article class="message" v-show="isVisible"><div class="message-header"><p>{{ title }}</p><button class="delete" aria-label="delete" @click="hideModal"></button></div><div class="message-body">{{ body }}</div></article>',
    setup() {
        const isVisible = ref(true)
        const hideModal = () => {
            isVisible.value = !isVisible.value
        }
        return {
            isVisible,
            hideModal
        }
    }
})
app.component('message', {
    template: '<article class="message"><div class="message-header"><p><slot name="header"></slot></p><button class="delete" aria-label="delete"></button></div><div class="message-body"><slot></slot></div></article>'
})
app.mount('#app')
