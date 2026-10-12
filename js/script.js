let events = ["Technical Fest", "Cultural Fest"];

function displayEvents() {
    let list = document.getElementById("eventList");
    list.innerHTML = "";

    events.forEach(function(event) {
        let item = document.createElement("p");
        item.textContent = event;
        list.appendChild(item);
    });
}

function registerEvent() {
    let name = document.getElementById("studentName").value;

    if (name === "") {
        document.getElementById("message").textContent =
            "Please enter your name.";
    } else {
        document.getElementById("message").textContent =
            name + ", registration successful!";
    }
}

function addEvent() {
    let name = document.getElementById("eventName").value;

    if (name !== "") {
        events.push(name);
        displayEvents();
        document.getElementById("eventName").value = "";
    }
}

displayEvents();