const { createApp, ref, defineEmits } = Vue

const app = createApp({
    setup() {
        const isActive = ref(false)
        const hideModal = () => {
            isActive.value = false
        }
        const showModal = () => {
            isActive.value = true
        }
        return {
            isActive,
            hideModal,
            showModal
        }
    }
})
app.component('modal', {
    props: [ 'body', 'isActive' ],
    emits: [ 'hide-modal' ],
    template: '<div class="modal"><div class="modal-background"></div><div class="modal-content"><div class="box">{{ body }}</div></div><button class="modal-close is-large" aria-label="close" @click="hideModal"></button></div>',
    setup(_, {emit}) {
        const hideModal = () => {
            emit('hide-modal')
        }

        return {
            hideModal
        }
    }
})
app.mount('#app')
