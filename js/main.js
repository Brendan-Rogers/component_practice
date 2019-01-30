import loginComponent from './components/loginComponent.js';
import usersComponent from './components/usersComponent.js';

const homePageComponent = {
	template: "<h2>You're on the home page</h2>"
};

const usersPageComponent = {
	props: ['id'],
	template: "#userList",

	data: function() {
		return {
			users: []
		}
	},

	created: function() {
		console.log('user component created');

		this.fetchUserData(this.id);
	},

	methods: {
		fetchUserData(user) {

			let url = `./includes/index.php?user=${user}`;

			fetch(url)
			.then(res => res.json())
			.then(data => this.users = data)
			.catch(function(error) {
				console.log(error);
			});
		}
	}
};

const contactPageComponent = {
	template: "<h2>You're on the contact page</h2>"
};

const errorPageComponent = {
	template: "<h2>404 you are one the ERROR page</h2>"
};

const routes = [
	{ path: '/', redirect: { name: "login" } },
	{ path: '/login', name: "login", component: loginComponent },
	{ path: '/users/', name: 'users', component: usersPageComponent, props: true}
	// { path: '/contact', name: 'contact', component: contactPageComponent }
	// { path: '/*', name: 'error', component: errorPageComponent }
];

const router = new VueRouter({
	routes
});

const vm = new Vue({
	// el: '#app',

	data: {
		message: "Hello World",
		authenticated: false,

		account: {
			username: "brendan",
			password: 'rogers'
		}
	},

	methods: {
		// logParent(message) {
		// 	console.log('from the parent', message);
		// },

		// logMainMessage(message) {
		// 	console.log("called from inside a child, lives in the parent", message);
		// },

		setAuthenticated(status) {
			this.authenticated = status;
		},
		logout() {
			this.authenticated = false;
		}
	},

	router: router

}).$mount('#app');

router.beforeEach((to, from, next) => {
	console.log('router guard activated');

	if(vm.activated ==  false) {
		next("/login");
	} else {
		next();
	}
});






