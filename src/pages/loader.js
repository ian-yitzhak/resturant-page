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

                <div class="card">
              <img src="images/meal3.jpg" alt="" style="width:100%">
              <div class="container">
                <h4><b>John Doe</b></h4>
                
              </div>
            </div>

             <div class="card">
              <img src="images/meal4.jpg" alt="" style="width:100%">
              <div class="container">
                <h4><b>John Doe</b></h4>
                
              </div>
            </div>

             <div class="card">
              <img src="images/meal2.jpg" alt="" style="width:100%">
              <div class="container">
                <h4><b>John Doe</b></h4>
                
              </div>
            </div>


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