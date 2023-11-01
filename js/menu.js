const menu = {
    init: function(){
        const hamburger = document.querySelector(".hamburger"); 
        hamburger.addEventListener("click", menu.handleOpenCloseMenu)
    },

    handleOpenCloseMenu : function(event){
        event.preventDefault();

        const menu = document.querySelector(".menu"); 
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }    
    }
}