let app = new Vue({
    el: '#app',
    data: {
       name: 'Gustavo Alves da Silva',
       age: 28
    },
    methods: {
    	show: (name, age) => {
    		return `Hello, ${name} - age: ${age}`
    	}
    }
})