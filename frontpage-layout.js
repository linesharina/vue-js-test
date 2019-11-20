let template = '<div v-bind:style="wrapper">'
template += '<slot name="bg-img"></slot>'
template += '<div>'
template += '<div>'
template += '<slot name="menu"></slot>'
template += '</div>'
template += '<div>'
template += '<slot name="name"></slot>'
template += '</div>'
template += '</div>'
template += '</div>'



Vue.component('frontpage-layout', {
    template: template,
    data: {
    	wrapper: {
    		'background-color': "red"
    	}
    }
})