//Code Your Solution Below
const form = document.querySelector("form")

// const submitBtn = document.getElementById("submit-btn");

// submitBtn.addEventListener("click", function() {
//     alert("Submit event triggered!");
// });

form.addEventListener('submit', function(event) {
    const testNameInput = document.getElementById("testName");
    const dateInput = document.getElementById("date");
    const rocketTypeInput = document.getElementById("rocketType");
    const boosterCountInput = document.getElementById("boosterCount");
    const windRatingInput = document.querySelector('input[name="windRating"]:checked');
    const productionServersInput = document.getElementById("productionSevers");
    const submitBtn = document.getElementById("submit-btn");

    

    if (!testNameInput.value.trim()) {
        alert("Please select a test name!");
        event.preventDefault();
        return;
    }

    if (!dateInput.value) {
        alert("Please select a date!");
        event.preventDefault();
        return;
    }

    if (!rocketTypeInput.value) {
        alert("Plese select a rocket type!");
        event.preventDefault();
        return;
    }

    if (!boosterCountInput.value) {
        alert("Please select number of rocket boosters!");
        event.preventDefault();
        return;
    }

    const boosterCount = Number(boosterCountInput.value);

    if (boosterCount < 1 || boosterCount > 9) {
        alert("Please select a number of rocket boosters between 1 and 9!");
        event.preventDefault();
        return;
    }

    if (!windRatingInput) {
        alert("Plese select a wind rating!");
        event.preventDefault();
        return;
    }

    if (!productionServersInput.checked) {
        let confirmed = confirm("Are you sure you want to leave 'Use Production Grade Servers' unchecked?");
        
        if (!confirmed) {
            event.preventDefault();
            return;
        }
    }

});
