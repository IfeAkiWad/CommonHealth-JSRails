// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, 
// without waiting for stylesheets, images, and subframes to finish loading
// If loaded as usual, stylesheets slow down DOM parsing as they're loaded in parallel, 
// "stealing" traffic from the main HTML document.
document.addEventListener("DOMContentLoaded", () => {
    User.getUser()
    Doctors.getAllDoctors()
    
})

// function searchDoctorsBy() {
//     // this will include a dropdown of options to select: specialty and/or location
//     // addeventlistener
// }
