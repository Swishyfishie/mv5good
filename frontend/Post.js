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
                    let list = document.querySelector(".concertList")
                    let acceptedArgs = ['date', 'location','ticket_price','time','event','more_info']
                    let eventDiv = document.createElement("DIV")
                    eventDiv.classList = "event"
                    console.log(data)
                    list.appendChild(eventDiv)
                    for(let v in data){
                            if(acceptedArgs.includes(v)){
                                
                                eventDiv.innerHTML += `
                                
                                <p>${v} : ${data[v]}</p> 
                                `
                            }
                        
                    }
                })
        } 
    }

    
}