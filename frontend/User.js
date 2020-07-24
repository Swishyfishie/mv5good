
class User {
    constructor(username, concerts){
        this.username = username
        this.concerts = concerts

        this.getUser = function(){
            fetch('http://localhost:3000/admins/1',{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                  }
            })
            .then(res=>res.json())
            .then(data=> _renderConcerts(data.concerts))

        this.postConcert = function(){
            fetch("http://localhost:3000/concerts", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
                },
                body: JSON.stringify({
                    concert:{
                        event: "100DaysOfBrexit",
                        location: "UK",
                        ticket_price: 210000000,
                        date:"Today",
                        time:"16:00",
                        more_info: "No Info required",
                        admin_id:"1"
                    }
                })
              })
                .then(response => response.json())
                .then(console.log)
        }    

        
        }

        function _renderConcerts(concerts){
            let list = document.querySelector(".concertList")
            let acceptedArgs = ['date', 'location','time','event']
            let statsArr = []
            concerts.map(e=>{
                for(let [key, val] of Object.entries(e)){
                    if(acceptedArgs.includes(key)){
                        console.log(key.toUpperCase()+ ' ' + val)
                        statsArr.push(key.toUpperCase()+ ' ' + val)
                    }
                }
                list.innerHTML += `Concert
                <div class="concertCard">
                <p>${statsArr.map(e=>e).join(' ')}</p>
                </div>
                
                `
                statsArr = []

            })
            
        }

        
    }
}


