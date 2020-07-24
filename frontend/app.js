window.addEventListener("load", function(){
    let user = new User;

    user.getUser()

    postConcert = document.querySelector("#addConcert")
    postConcert.addEventListener("click", function(e){
        console.log("hi")
        e.preventDefault()
        event = document.querySelector("#event").value
        loc = document.querySelector("#location").value
        ticketPrice = document.querySelector("#ticketPrice").value
        date = document.querySelector("#date").value
        time = document.querySelector("#time").value
        mi = document.querySelector("#moreInfo").value
        let newConcert = new Post(event,loc,ticketPrice,date,time,mi)

        newConcert.postConcert()
    })
})

