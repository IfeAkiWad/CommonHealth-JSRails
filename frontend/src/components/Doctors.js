class Doctors {
    constructor(id, name, specialty, location, user_id) {
        this.id = id
        this.name = name
        this.specialty = specialty
        this.location = location
        this.user_id = user_id
    }

    // class function
        // get doctor index
    static getAllDoctors() {
        fetch('http://localhost:3000/doctors')
        .then((response) => response.json())
        .then(doctors => {
            console.log(doctors)
            // we do something with the fetched data 
            // iterating through the doctors data
            for (const doctor of doctors){
                let d = new Doctors(
                    doctor.id,
                    doctor.name,
                    doctor.specialty,
                    doctor.location,
                    doctor.user_id)
                d.renderDoctors()
                // debugger
            }
        })
    }

    // render doctor instance to DOM
    renderDoctors() {
        let doctorsDiv = document.getElementById('doctors-container')

        doctorsDiv.innerHTML +=
        `
        <ul>
        <label>Doctor name:</label> 
        ${this.name}
        <label>Doctor location:</label> 
        ${this.location}
        <label>Doctor specialty:</label>
        ${this.specialty}
        </ul>
       `
    }





}
