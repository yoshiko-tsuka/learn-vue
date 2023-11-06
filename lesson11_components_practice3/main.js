const { createApp, ref, computed } = Vue

const app = createApp({
    setup() {
        const tabs = ref([
            { name: 'Hello World', isActive: true, content: '<h1>aa</h1>'},
            { name: 'Konnichiwa World', isActive: false, content: '<h1>bb</h1>'},
            { name: 'Hello Univers', isActive: false, content: '<h1>cc</h1>'}
        ])
        const content = computed(() => {
            return tabs.value.filter((tab) => tab.isActive )[0].content
        })
        const activateTab = (i) => {
            tabs.value.map((tab) => tab.isActive = false)
            tabs.value[i].isActive = true
        }
        return {
            tabs,
            content,
            activateTab
        }
    }
})
app.component('tabs', {
    props: [ 'tabs' ],
    template: '<div class="tabs"><ul><slot></slot></ul></div>',
})
app.component('tab', {
    props: {
        name: { 
            required: true 
        },
        isActive: {
            type: Boolean,
            default: false
        }

    },
    template: '<li :class="{ \'is-active\': isActive }"><a :href="href">{{ name }}</a></li>',
    setup(props) {
        const href = computed(() => {
            return '#' + props.name.toLowerCase().replace(/ /g, '-')
        })
        return {
            href
        }
    }
})
app.mount('#app')
