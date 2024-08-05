function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    
    // Put your code for the exercises here.
    
    // liftoff on button
    button.addEventListener("click", function() {   
    paragraph.innerHTML = "<br>Houston, we have liftoff!"
    console.log("liftoff button clicked")
    });

    // abort turns red
    missionAbort.addEventListener("mouseover", function() {
        missionAbort.style.backgroundColor = "#E4002B";
    });
    missionAbort.addEventListener("mouseout", function() {
        missionAbort.style.backgroundColor = "";
    });
    
    // confirmation window
    missionAbort.addEventListener("click", function() {
        const userConfirmed = window.confirm("Are you sure you want to abort the mission?")
        if (userConfirmed) {
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home";
        }
    });
}

window.addEventListener("load", init);
