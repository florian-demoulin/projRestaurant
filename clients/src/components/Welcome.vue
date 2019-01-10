<template>
	<div id="user">
		<center><img src="../assets/logo.png"></center>
    	<center><h2>Vous ne savez pas où manger ? <br>Pas de soucis aux bon coins de Toto et Flo tu trouveras que des bons restaux !!</h2></center>
		<router-link to="/RestaurantListe" id="restoClass" class="navbar navbar-expand-lg navbar-light bg-light">Go !! >>>>></router-link>
		
	<!--	<app-info></app-info> !-->
	</div>
</template>






<script>
</script>

<style scoped>
	h2, h3{
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: "poppinssemibold";
  		color: #2c3e50;;
		position:fixed;
		float: left;
	}
	h3{
		margin-left: 590px;
		margin-top: 180px;
	}
	h2{
		
		margin-left: 330px;
		margin-top: 230px;
	}
	#user{
		float: left;
		width: 100%;
		height: 680px;
		background-color: whitesmoke;
		text-align: center;
	}
	p {
		font-style: italic;
		color:red; 
	}
	#restoClass{
		width: 125px;
		background-color: #4cba86!important;
		color: white;
		float: left;
		margin-left: 690px;
		margin-top: 350px;
	}
</style>