// Define a new component called menu-element
Vue.component('menu-elements', {
	props: [
		'menu'
	],
	template: '<nav><a v-for="item in menu" :href="item.link">{{ item.text }}</a></nav>'
})