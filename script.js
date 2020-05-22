window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
        .then(function (response) {
            response.json()
                .then(function (json) {
                    let astronautInfo = document.getElementById("container");
                    //Bonus Astronaut count
                    astronautInfo.innerHTML = `<div>There are ${json.length} astronauts.</div>`
                        //
                    for (let i = 0; i < json.length; i++) {
                        //BONUS sort.... Cant figure out
                        // json.sort(hoursInSpace);
                        //Bonus Text Color
                        let textColor = "color:Black";
                        if (json[i].active) {
                            textColor = "color:Green"
                        }
                        //
                        astronautInfo.innerHTML +=
                            `<div class = "astronaut">
                <div class = "bio">
                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                <ul>
                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                    <li style=${textColor}> Active: ${json[i].active}</li>
                    <li>Skills: ${json[i].skills.join(", ")}</li>
                </ul>
                </div>
                <img class="avatar" src="${json[i].picture}">
            </div>
            `;
                    }
                });
        });
});