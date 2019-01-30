export default {
	template: `
		<div id="login">
			<h1>Log In</h1>
			<input type="text" name="username" v-model="input.username" placeholder="Username">
			<input type="password" name="password" v-model="input.password" placeholder="Password">
			<button type="button" v-on:click="login()">Log IN!</button>
		</div>
	`,

	data() {
		return {
			input: {
				username: "",
				password: ""
			}
		}
	},

	methods: {
		login() {
			console.log("Attempting login");

			// check input against accoutn creds
			if (this.input.username != '' && this.input.password != '') {
				if (this.input.password == this.$parent.account.password) {
					console.log('you are logged in!');
					this.$emit("authenticated", true);
					this.$router.replace({name: 'users'});
				} else {
					console.log('failed login');
				}
			} else {
				console.log('enter both things');
			}
		}
	}
}