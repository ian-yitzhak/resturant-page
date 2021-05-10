function loadContact() {

	document.getElementById('div-stuff').innerHTML = `
	<div class="full-contact">
        <div class="contact-section">

        <h3> CONTACT US NOW </h3>

        <p> 11:00am - 10:00pm
0091 Nairobi
248 , +(254)729008808 </p>
        
         </div>

         <div class="contact">



         <form action="">
		 <p class="input-text"> Full name :<br></p>
		  <input type="text" name="firstname" >
		  <br>
		  <p class="input-text"> Contact :<br></p>
		  <input type="text" name="lastname">
		  <br><br>
		  <input type="submit" value="Submit">
		</form> 
		</div>
		</div>
    `
   
}

export default loadContact;