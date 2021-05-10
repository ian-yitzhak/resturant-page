import loadMeal from './pages/meals';

import loadHome from './pages/home';
import loadContact from './pages/contact';
import pageLoad from './pages/loader';


const finalCreation = ( () => {
    pageLoad();
    
    document.getElementById('menu').addEventListener('click', loadMeal);
    document.getElementById('home').addEventListener('click', loadHome);
    document.getElementById('contact').addEventListener('click', loadContact);
} )();