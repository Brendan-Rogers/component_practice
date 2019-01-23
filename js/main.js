// SEAF (Self Executing Anonymous Function)
(()=> { console.log('connected');

const homePageComponent = {
	template: "<h2>You're on the home page</h2>"
};

const usersPageComponent = {
	template: "<h2>You're on the users page</h2>"
};

const contactPageComponent = {
	template: "<h2>You're on the contact page</h2>"
};

const errorPageComponent = {
	template: "<h2>404 you are one the ERROR page</h2>"
};

const routes = [
	{ path: '/', name: 'home', component: homePageComponent },
	{ path: '/users', name: 'users', component: usersPageComponent },
	{ path: '/contact', name: 'contact', component: contactPageComponent },
	{ path: '/*', name: 'error', component: errorPageComponent }
];

const router = new VueRouter({
	routes
});

const vm = new Vue({
	el: '#app',

	data: {
		message: "Hello World"
	},

	methods: {
		logParent(message) {
			console.log('from the parent', message);
		},

		logMainMessage(message) {
			console.log("called from inside a child, lives in the parent", message);
		}
	},

	components: {
		'homePageComponent': homePageComponent,
		'usersPageComponent': usersPageComponent
	},

	router: router

});


})();