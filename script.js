fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (infos) {
        // Summery data from json file
        const placeholder = document.querySelector("#data-output");
        let out = "";
        for (let info of infos) {
            out += `
            <li class="${info.class}">
                <div class="item"><img src="${info.icon}" alt="${info.class}">${info.category}</div>
                <span><strong>${info.score}</strong> / 100</span>
            </li>
            `;
        }
        placeholder.innerHTML = out;

        // Total result calculation
        const totalPoints = document.querySelector("#points");
        let points = 0;
        for (let point of infos) {
            points += point.score;
        }
        let result = `${Math.floor(points / infos.length)}`
        totalPoints.innerHTML = result;
    });

