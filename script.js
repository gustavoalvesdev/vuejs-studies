function flag(country) {
	return `<img src="countries/${country}.png" />`;
}

let app = new Vue({
    el: '#app',
    data: {
    	country: '',
    	argentina: flag('argentina'),
    	brazil: flag('brazil'),
    	china: flag('china'),
    	uk: flag('uk'),
    	usa: flag('usa')
    },
    methods: {

    }
})

app.country = 'uk'