
export default class User {
    constructor(username, concerts){
        this.username = username
        this.concerts = concerts

        this.renderUser = function(){
            fetch('http://localhost:3000/admins/1')
            .then(res=>res.json())
            .then(data=>console.log(data))

        }
    }
}


