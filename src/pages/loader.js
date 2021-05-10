import renderNav  from "./nav";

const pageLoad = () =>{

	const contentLoad = document.getElementById('content');
	const homeTab  = document.createElement('div');
	homeTab.setAttribute('id', 'div-stuff');

	homeTab.innerHTML =`

	<section>
	 <div class="container">
            <center>WELCOME TO OUR RESTURANT , WE ARE HERE FOR YOU </center>



            <div class="image-section">

            <img class="hero-img" src="./images/meal.jpg" alt="">
            <img class="hero-img" src="./images/meal.jpg" alt="">
            <img class="hero-img" src="./images/meal.jpg" alt="">


             </div>
        </div>

	</section>

	`

	contentLoad.append(
        renderNav(),
        homeTab
    );
}


export default pageLoad;