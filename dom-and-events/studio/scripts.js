// Write your JavaScript code here.
// Remember to pay attention to page loading!


function init() {
    const takeoffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landingButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    const rocket = document.getElementById("rocket");

    // rocket.style.bottom = "0";

    // confirm takeoff window
    takeoffButton.addEventListener("click", function() {        
        const userConfirmed = window.confirm("Confirm that the shuttle is ready for takeoff");
        if (userConfirmed) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "#ADD8E6";
           spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
        }
    });
   
    landingButton.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = "";
        spaceShuttleHeight.innerHTML = 0;
    });

    missionAbortButton.addEventListener("click", function() {
        const userConfirmed = window.confirm("Confirm that you want to abort the mission.");
        if (userConfirmed) {
            flightStatus.innerHTML = "Mission aborted";
            shuttleBackground.style.backgroundColor = "";
            spaceShuttleHeight.innerHTML = 0;
        }
    });

    upButton.addEventListener("click", function() {
       
        

    });
}

window.addEventListener("load", init);
