<template>
	<div id="user">
		<h3>Liste des restaurants</h3>

		<div v-for="resto in restaurants">
			{{ resto.nom }}
			
				<router-link :to="resto.infoPath">
					<img class="rounded mx-auto d-block" :src="resto.image" :alt="resto.nom">
				</router-link>
			
		</div>
		<br>
	
	</div>
</template>

<script>

export default {
	data() {
		return {
			restaurants: [
				{id: 1, 
				iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.7823406678526!2d-75.14751458481035!3d39.946258079422584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c89ad0bc6655%3A0xf01df27a3a05acc9!2s237+St+James+Pl%2C+Philadelphia%2C+PA+19106%2C+%C3%89tats-Unis!5e0!3m2!1sfr!2sfr!4v1546270064067", 
				nom: "La Vague d'Or", 
				image: "src/assets/rest1.jpg", 
				infoPath: "/RestaurantDetail?id=1", 
				horaireDebut: "10:00", 
				horaireFin: "00:00"},
				
				{id: 2, iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.7823406678526!2d-75.14751458481035!3d39.946258079422584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c89d4f5fd583%3A0x2853b45df4b6635!2s210+W+Washington+Square%2C+Philadelphia%2C+PA+19106%2C+%C3%89tats-Unis!5e0!3m2!1sfr!2sfr!4v1546270355166", 
				nom: "L'Ambroisie", 
				image: "src/assets/rest2.jpg", 
				infoPath: "/RestaurantDetail?id=2", 
				horaireDebut: "18:00", 
				horaireFin: "01:00"},
				
				{id: 3, iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.574157269651!2d-75.17704178465864!3d39.950914079422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c6377f41da63%3A0xd27a03df985fff3b!2s2031+Walnut+St%2C+Philadelphia%2C+PA+19103%2C+%C3%89tats-Unis!5e0!3m2!1sfr!2sfr!4v1546270455934", 
				nom: "L'Arpège", 
				image: "src/assets/rest3.jpg", 
				infoPath: "/RestaurantDetail?id=3", 
				horaireDebut: "15:00", 
				horaireFin: "18:00"},
				
				{id: 4, iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.574157269651!2d-75.17704178465864!3d39.950914079422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c63aab4b6363%3A0xb3200c77a663b7dc!2s1500+Walnut+St+M101%2C+Philadelphia%2C+PA+19102%2C+%C3%89tats-Unis!5e0!3m2!1sfr!2sfr!4v1546270533798", 
				nom: "Pavillon Ledoyen", 
				image: "src/assets/rest4.jpg", 
				infoPath: "/RestaurantDetail?id=4", 
				horaireDebut: "18:30", 
				horaireFin: "00:00"}
			]
		}
	}	
}

</script>

<style scoped>
	p {
		font-style: italic;
		color:red; 
	}

	#user{
		width:100%;
		height: 150%;
		float: left;
	}

	.d-block:hover{
		cursor: pointer;
		opacity: 0.3;
	}
</style>