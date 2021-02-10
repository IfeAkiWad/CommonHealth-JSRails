class Doctors {
    constructor(id, name, specialty, insurance_accepted, location, user_id) {
        this.id = id
        this.name = name
        this.specialty = specialty
        this.insurance_accepted = insurance_accepted
        this.location = location
        this.user_id = user_id
    }

    // class function
        // get doctor index
    static getAllDoctors() {
        fetch('http://localhost:3000/projects')
        .then((response) => response.json())
        .then(doctors => {
            console.log(doctors)
            // we do something with the fetched data 
            // iterating through the doctors data
            for (const doctor of doctors){
                let d = new Doctors(
                    doctor.id
                    doctor.name
                    doctor.specialty
                    doctor.insurance_accepted
                    doctor.location
                    doctor.user_id)
                d.renderDoctor()
            }
        })
    }

    // render doctor instance to DOM
    renderDoctor() {
        let doctorsDiv = document.getElementById('doctor-container')

        doctorsDiv.innerHTML +=
        `
        
        `
    }





}
