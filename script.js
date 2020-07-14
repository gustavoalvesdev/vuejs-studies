let app = new Vue({
    el: '#app',
    data: {
       firstNumber: Math.floor(Math.random() * 30),
       secondNumber: Math.floor(Math.random() * 30),
       result: ''
    }
})