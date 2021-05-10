function loadContact() {

	document.getElementById('div-stuff').innerHTML = `
        <div class="contact-section">

        <h1> 078909747774 </h1>
        
         </div>

         <div class="contact">

         <form action="">
		  First name:<br>
		  <input type="text" name="firstname" >
		  <br>
		  Last name:<br>
		  <input type="text" name="lastname">
		  <br><br>
		  <input type="submit" value="Submit">
		</form> 
		</div>
    `
   
}

export default loadContact;