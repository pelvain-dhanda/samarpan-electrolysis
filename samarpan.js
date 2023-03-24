document.addEventListener("DOMContentLoaded", function(){

    
const listItems = document.querySelectorAll(".nav-link");

/* function handlers for underline menu*/
for (let i= 0; i < listItems.length; i++)
{
listItems[i].addEventListener('mouseover', function(){
    listItems[i].style.borderBottom = "solid";
    listItems[i].style.borderWidth ="0.5px;"
    
})

}

for (let i= 0; i < listItems.length; i++)
{
listItems[i].addEventListener('mouseout', function(){
    listItems[i].style.borderBottom = 0;
    
    
})

}


})

