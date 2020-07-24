class Post {
    constructor(event, location, date, time){
        this.event = event
        this.location = location
        this.date = date
        this.time = time

        this.postConcert = function(){
            fetch("http://localhost:3000/concerts", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
                },
                body: JSON.stringify({
                    concert:{
                        event: this.event,
                        location: this.location,
                        ticket_price: 210000000,
                        date:this.date,
                        time:this.time,
                        more_info: "No Info required",
                        admin_id:"1"
                    }
                })
              })
                .then(response => response.json())
                .then(console.log)
        } 
    }

    
}