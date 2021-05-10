import renderNav  from "./nav";

const pageLoad = () =>{

	const contentLoad = document.getElementById('content');
	const homeTab  = document.createElement('div');
	homeTab.setAttribute('id', 'div-stuff');

	homeTab.innerHTML =`

	<section>
	 <div class="container">
            <h2>Food we have</h2>
            <ul>
                <li>Pizza</li>
                <li>Burger</li>
                <li>Cake</li>
                <li>Fries</li>
                <li>Hotdog</li>
            </ul>
        </div>

	</section>

	`

	contentLoad.append(
        renderNav(),
        homeTab
    );
}


export default pageLoad;