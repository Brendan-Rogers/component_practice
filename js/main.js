// SEAF (Self Executing Anonymous Function)
(()=> { console.log('connected');

const liveuser = {
	props: ['first_name', 'last_name', 'role'],
	// PROPERTIES
	// a placeholder for data. to make the website dynamic

	template: "#activeuser",

	methods: {
		logChildMsg() {
			console.log('the child responds in kind');
		},
		runParentFunc() {
			this.$emit('passfunc', 'hello from the child on click');
		}
	},

	created: function() {
		console.log('child component is live');
	}
}

const vm = new Vue({
	el: '#app',

	data: {
		message: "Hello World"
	},

	created: function () { console.log('parent is live');

	},

	methods: {
		logParent(message) {
			console.log('from the parent', message);
		},
		logmain() {
			console.log('the child has called. it lives in the parent.');
		}
	},

	components: {
		user: liveuser,
	}

});


})();