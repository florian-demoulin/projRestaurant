<template>
  <div id="app">
   
    
    <nav id="topBar" class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" id="topBar" class="navbar navbar-expand-lg navbar-light bg-light">Accueil</router-link>
      <router-link to="/RestaurantListe" id="topBar" class="navbar navbar-expand-lg navbar-light bg-light">Restaurants</router-link>
      <router-link to="/Panier" id="topBar" class="navbar navbar-expand-lg navbar-light bg-light">Panier</router-link>
    </nav>
    
      
      <p></p>
     <!-- <app-user></app-user> !-->
      
   

    <router-view></router-view>

  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

#topBar{
  background-color:orange!important;
  color: #42b983;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
