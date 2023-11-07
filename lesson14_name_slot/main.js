const { createApp, ref, computed } = Vue

const app = createApp({
    setup() {
        const couponApplied = ref(false)
        const onCouponApplied = () => {
            alert('It was applied!')
            couponApplied.value = true
        }
        return {
            onCouponApplied,
            couponApplied
        }
    }
})
app.component('modal', {
    template: `
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title"><slot name="header"></slot></p>
            <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
        <slot name="defalut">default content here</slot>
        </section>
        <footer class="modal-card-foot">
            <slot name="footer"><button class="button is-success">OK</button></slot>
        </footer>
        </div>
    </div>
    `,
    setup(_, {emit}){
        const onCouponApplied = () => {
            emit('applied')
        }

        return {
            onCouponApplied
        }
    }
})
app.mount('#app')
