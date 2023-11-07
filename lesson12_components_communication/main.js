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
app.component('coupon', {
    emits: ['applied'],
    template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',
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
