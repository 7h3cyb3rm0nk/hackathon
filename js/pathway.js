let cards = document.querySelectorAll(".cards");


cards.forEach( card => {
    card.addEventListener("click", ()=>{
        console.log(card);
        window.location.href=`${card.id}`
        
    })
})