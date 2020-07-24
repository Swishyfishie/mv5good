window.addEventListener("load", function(){
    let user = new User;

    user.getUser()

    postConcert = document.querySelector("#addConcert")
    postConcert.addEventListener("click", function(e){
        console.log("hi")
        e.preventDefault()
        event = document.querySelector("#event")
        location = document.querySelector("#location")
        time = document.querySelector("#time")
        date = document.querySelector("#date")

        let newConcert = new Post(event,location,date,time)

        newConcert.postConcert()
    })
})

