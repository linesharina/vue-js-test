// Define a new component called menu-element
Vue.component('menu-elements', {
	data: function () {
		return {
			menu: [
				{
					text: 'link1',
					link: 'https://vg.no'
				},
				{
					text: 'link2',
					link: 'https://db.no'
				}
			]
		}
	},
	template: '<nav><a v-for="item in menu" :href="item.link">{{ item.text }}</a></nav>'
})