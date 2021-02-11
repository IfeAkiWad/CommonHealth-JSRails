class User {
    constructor(id, username) {
        this.id = id
        this.username = username
    }

    static getUser() {
        fetch("http://localhost:3000/users")
        .then((response) => response.json())
        .then(users => {
            console.log(users)
            // we do something with the fetched data 
            // iterating through the user data
            for (const user of users){
                let u = new User(
                    user.id,
                    user.username)
                u.renderUser()
                // debugger
            }
        })
    }

    renderUser() {
        let userDiv = document.getElementById("user-container")
        userDiv.innerHTML +=

        `
        <h2>Hello, ${this.username}!</h2>
        `
    }
}