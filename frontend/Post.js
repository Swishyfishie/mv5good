class Post {
    constructor(event, location, ticketPrice, date, time, moreInfo){
        this.event = event
        this.location = location
        this.ticketPrice = ticketPrice
        this.date = date
        this.time = time
        this.moreInfo = moreInfo

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
                        ticket_price: this.ticketPrice,
                        date:this.date,
                        time:this.time,
                        more_info: this.moreInfo,
                        admin_id:"1"
                    }
                })
              })
                .then(response => response.json())
                .then(data => {
                    console.log(data)    


                    for(let [k,v] of Object.entries(data)){
                        document.querySelector(".concertList").append(k + " ")
                        document.querySelector(".concertList").append(v + " ")
                    }
                    
                })
        } 
    }

    
}