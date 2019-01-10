import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Welcome from './components/Welcome.vue';
import RestaurantListe from './components/RestaurantListe.vue';
import Commande from './components/Commande.vue';
import RestaurantDetail from './components/RestaurantDetail.vue';
import Restos from './components/Restos.vue';

import Slide from './components/Menu/slide';
import Bubble from './components/Menu/bubble';
import Reveal from './components/Menu/reveal';
import Push from './components/Menu/push';
import Elastic from './components/Menu/elastic';
import FallDown from './components/Menu/fallDown'
import PushRotate from './components/Menu/pushRotate';
import Stack from './components/Menu/stack';
import ScaleRotate from './components/Menu/scaleRotate';
import ScaleDown from './components/Menu/scaleDown';
import Menu from './components/Menu';

export default {
    Menu,
    Slide,
    Bubble,
    Reveal,
    Push,
    PushRotate,
    ScaleDown,
    ScaleRotate,
    Stack,
    FallDown,
    Elastic
}

// Définition des routes
Vue.use(VueRouter);

const routes = [
	{path:'/RestaurantListe', component: RestaurantListe},
	{path:'/Commande', component: Commande},
	{path: '/server/restos',name: 'Restos',component: Restos},
	{path:'/RestaurantDetail', component: RestaurantDetail},
	{path:'/', component: Welcome}
]

const router = new VueRouter({
	routes: routes,
	mode:'history'
}) 
// La ligne ci-dessous rend le composant Welcome utilisable
// partout, dans tous les fichiers .vue
// C'est un GLOBAL COMPONENT
Vue.component("app-Welcome", Welcome);
console.log(Vue.created)
new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
