<template>
	<div class="containerCommande">
		<div class="paimentClass">
			<router-link to="/Restaurants" id="paimentInsideClass" class="navbar navbar-expand-lg navbar-light bg-light">
				<label class="labelInsidePaiment">
					Paiement
				</label>
			</router-link>
			<hr style="margin-top:25px;">
			<div id="panier" style="text-align: left; margin-left: 120px;" v-on:click="supprimer(p, panier)" v-for="p in panier">
				{{ p.quantite }} {{ p.nom }}
			</div>
			<hr style="margin-top:25px;" v-if="panier.length>0">
			<div style="text-align: right; margin-right: 10px; font-weight: bold;" id="prixGlobal"></div>
		</div>

	
		<div class="menuOutsideClass" v-on:click="testMethod(plat,panier); calculerPrix(panier);" v-for="plat in plats[currentId]">
		<img :src="plat.image" class="imageClass">
			<div class="menuInsideClass">
				{{ plat.nom }} <br>
				<span class="spanClass"> 
					{{ plat.description}} <br>
				</span> <br>
				{{plat.prix}} €
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		data() {
			return {
				currentId: new URLSearchParams(document.location.search.substring(1)).get("id") - 1,
				panier: [],
				plats: [
					[
						{
							id: 15,
							quantite: 1,
							nom: "Bento saumon",
							description: "6 fresh roll cheese, 4 sushi saumon cheese.",
							prix: 23.50,
							image: "https://d1ralsognjng37.cloudfront.net/de5a6613-5f8a-420a-ac92-6fc46db7f844"
						},

						{
							id: 2,
							quantite: 1,
							nom: "Menu 12 tenders",
							description: "12 Tenders + 3 sauces + 2 accompagnements + 2 boissons au choix",
							prix: 19.50,
							image:"https://duyt4h9nfnj50.cloudfront.net/sku/2eaf7edef2d7fa124e00d7e30da6b427"
						},

						{
							id: 3,
							quantite: 1,
							nom: "Menu 12 tenders",
							description: "12 Tenders + 3 sauces + 2 accompagnements + 2 boissons au choix",
							prix: 19.50,
							image:"https://duyt4h9nfnj50.cloudfront.net/sku/2eaf7edef2d7fa124e00d7e30da6b427"
						},

						{
							id: 4,
							quantite: 1,
							nom: "Menu 12 tenders",
							description: "12 Tenders + 3 sauces + 2 accompagnements + 2 boissons au choix",
							prix: 19.50,
							image:"https://duyt4h9nfnj50.cloudfront.net/sku/2eaf7edef2d7fa124e00d7e30da6b427"
						}
					],

					[
						{
							id: 5,
							quantite: 1,
							nom: "L'alpin",
							description: "Cordon bleu, raclette, lardons, frites et sauce fromagère.",
							prix: 10.50,
							image:"https://duyt4h9nfnj50.cloudfront.net/sku/52b49110ef718435f7d0405b2bb1f0ee"
						},

						{
							id: 6,
							quantite: 1,
							nom: "L'alpin",
							description: "Cordon bleu, raclette, lardons, frites et sauce fromagère.",
							prix: 10.50,
							image:"https://duyt4h9nfnj50.cloudfront.net/sku/52b49110ef718435f7d0405b2bb1f0ee"
						},

						{
							id: 7,
							quantite: 1,
							nom: "L'alpin",
							description: "Cordon bleu, raclette, lardons, frites et sauce fromagère.",
							prix: 10.50,
							image:"https://duyt4h9nfnj50.cloudfront.net/sku/52b49110ef718435f7d0405b2bb1f0ee"
						},

						{
							id: 8,
							quantite: 1,
							nom: "L'alpin",
							description: "Cordon bleu, raclette, lardons, frites et sauce fromagère.",
							prix: 10.50,
							image:"https://duyt4h9nfnj50.cloudfront.net/sku/52b49110ef718435f7d0405b2bb1f0ee"
						}
					],

					[
						{
							id: 9,
							quantite: 1,
							nom: "Crêpe la andalé",
							description: "Caramel et cookies.",
							prix: 6.50,
							image: "https://duyt4h9nfnj50.cloudfront.net/sku/eadcf4b51ede32204f3b9798badcf20d"
						},

						{
							id: 10,
							quantite: 1,
							nom: "Crêpe la andalé",
							description: "Caramel et cookies.",
							prix: 6.50,
							image: "https://duyt4h9nfnj50.cloudfront.net/sku/eadcf4b51ede32204f3b9798badcf20d"
						},

						{
							id: 11,
							quantite: 1,
							nom: "Crêpe la andalé",
							description: "Caramel et cookies.",
							prix: 6.50,
							image: "https://duyt4h9nfnj50.cloudfront.net/sku/eadcf4b51ede32204f3b9798badcf20d"
						},

						{
							id: 12,
							quantite: 1,
							nom: "Crêpe la andalé",
							description: "Caramel et cookies.",
							prix: 6.50,
							image: "https://duyt4h9nfnj50.cloudfront.net/sku/eadcf4b51ede32204f3b9798badcf20d"
						}
					],

					[
						{
							id: 13,
							quantite: 1,
							nom: "Bento saumon",
							description: "6 fresh roll cheese, 4 sushi saumon cheese.",
							prix: 23.50,
							image: "https://d1ralsognjng37.cloudfront.net/de5a6613-5f8a-420a-ac92-6fc46db7f844"
						},

						{
							id: 14,
							quantite: 1,
							nom: "Bento saumon",
							description: "6 fresh roll cheese, 4 sushi saumon cheese.",
							prix: 23.50,
							image: "https://d1ralsognjng37.cloudfront.net/de5a6613-5f8a-420a-ac92-6fc46db7f844"
						},

						{
							id: 15,
							quantite: 1,
							nom: "Bento saumon",
							description: "6 fresh roll cheese, 4 sushi saumon cheese.",
							prix: 23.50,
							image: "https://d1ralsognjng37.cloudfront.net/de5a6613-5f8a-420a-ac92-6fc46db7f844"
						},

						{
							id: 16,
							quantite: 1,
							nom: "Bento saumon",
							description: "6 fresh roll cheese, 4 sushi saumon cheese.",
							prix: 23.50,
							image: "https://d1ralsognjng37.cloudfront.net/de5a6613-5f8a-420a-ac92-6fc46db7f844"
						}
					]
				]
			}
		}, 
		methods: {
			supprimer(lePanier, panier){
				console.log(lePanier.nom)
				for(let a=0; a<panier.length; a++){
					if(panier[a].nom == lePanier.nom){
						if(panier[a].quantite > 0){
							panier[a].quantite--;
						}
					}
					let prix = 0;
					for(let j = 0; j<panier.length; j++){
						prix += (panier[j].quantite * panier[j].prix);
					}
					let label = document.querySelector("#prixGlobal");
					label.innerHTML = "Prix total : " + prix + " €";
				}
			},
			calculerPrix(lePanier){
				let prix = 0;
				for(let j = 0; j<lePanier.length; j++){
					prix += (lePanier[j].quantite * lePanier[j].prix);
				}
				let label = document.querySelector("#prixGlobal");
				label.innerHTML = "Prix total : " + prix + " €";
			},
			testMethod: function(lePlat, lePanier){
				let contient = false; 
				let index = 0;

				if(lePanier.length != null && lePanier.length > 0){
					for(let i=0; i<lePanier.length; i++){					
						if(lePanier[i].nom == lePlat.nom){
							contient=true;
							index = i;
							console.log("i : " + i)
						}
					}	
				}
				
				console.log(contient)
				if(contient == true){
					lePanier[index].quantite++;
					console.log("index : " + index)
				}
				if(contient == false){
					lePanier.push(lePlat);
				}
				
			}
		}
	}
</script>
	
<style>
	.imageClass{
		position: absolute;
		width: 148px;
		height: 148px;
		margin-left: 52px;
	}
	.menuOutsideClass{
		float: left;
		width: 400px;
		height: 150px;
		border: solid black 1px;
		margin-left: 20px;
		margin-top: 30px;
		background: rgb(240, 239, 239, 0.55);
	}
	.spanClass{
		color: rgb(117, 117, 117, 0.55);
		margin-top: 5px;
	}

	.paimentClass{
		width: 400px;
		height: 250px;
		background: rgb(240, 239, 239, 0.55);

		position: absolute;
		margin-left: 900px;
		margin-top: 32px;
	}

	.paimentClass:hover, .menuOutsideClass:hover, .labelInsidePaiment:hover{
		cursor: pointer;
	}

	#paimentInsideClass{
		width: 340px;
		height: 60px;
		background: #4cba86!important;
		margin-top: 20px;
		margin-left: 25px;
		color: white;
	}

	.labelInsidePaiment{
		margin-top: 10px; 
		font-size: 18px; 
		font-weight: bold;
		margin-left: 110px;
	}

	.menuInsideClass{
		float: left;
		width: 220px;
		height: 150px;
		text-align: left;
		padding: 15px;
		font-size: 15px;
		color: black;

	}
	.containerCommande{
		width: 1200px;
		height: 950px;	

		float: left;
		margin-left: 125px;
	}
	.labelChoix{
		float: left;
	}
</style>