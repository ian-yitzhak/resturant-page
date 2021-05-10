const renderNav = () =>{

const nav = document.createElement("div")


nav.innerHTML = `<div class="topnav">




<button id="home" >Home</button>
<button id="contact" >Contact</button>
<button id="menu" >Meal</button>


  
</div>`


return nav

}

export default renderNav