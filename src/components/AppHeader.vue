<template>
	<div>
		<div class="ui secondary pointing menu">
			<router-link to="/" class="active item">
			Image Storage
			</router-link>
			{{ isLoggedIn }}
			<!-- vY5BhYdL9mLiMm3 -->
			<div class ="right menu">
				<div v-if="isLoggedIn" class="horizontal">
					<router-link to="/" class="item">Galleries</router-link>
					<router-link to="/upload" class="item">Upload</router-link>
					<a class="item" @click="logout">Logout</a>
				</div>
				<a v-else href="#" class="ui item" @click="login">
					Login
				</a>
			</div>
		</div>
	</div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';
// connect action to component

export default{
	name: 'AppHeader',
	computed: mapGetters(['isLoggedIn']),
	// computed: {
	// 	...mapGetters(['isLoggedIn']),
	// 	currentCount(){
	// 		return 1;
	// 	}
	// },
	methods: mapActions(['login','logout'])
	// methods:{
	// 	...mapActions(['login']),
	// 	onClick(){

	// 	}
	// }

};
</script>
<style>
	.horizontal{
		display: flex;
		flex-direction: row;
	}

</style>