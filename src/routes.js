import Home from './pages/Home.vue';
import Sobre from './pages/Sobre.vue';
import Produtos from './pages/Produtos.vue';
import Portfolio from './pages/Portfolio.vue';

const routes = [
    { path: '/', component: Home, name:'Home' },
    { path: '/sobre', component: Sobre, name:'Sobre' },
    { path: '/produtos', component: Produtos, name:'Produtos' },
    { path: '/portfolio', component: Portfolio, name:'Portifolio' },
];

export default routes;