function flag(country) {
	return `<img src="countries/${country}.png" />`;
}

let app = new Vue({
    el: '#app',
    data: {
    	argentina: flag('argentina'),
    	brazil: flag('brazil'),
    	china: flag('china'),
    	uk: flag('uk'),
    	usa: flag('usa')
    },
    methods: {
    	countries: function() {
    		return [
    			{flag: this.argentina, continent: 'South America'},
    			{flag: this.brazil, continent: 'South America'},
    			{flag: this.china, continent: 'Asia'},
    			{flag: this.uk, continent: 'Europe'},
    			{flag: this.usa, continent: 'North America'}
    		]
    	}
    }
})