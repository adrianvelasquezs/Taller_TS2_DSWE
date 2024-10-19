import { series } from './data.js';
var tableBody = document.getElementById("seriesTableBody"); // table main body
var avgSeasons = document.getElementById("avgSeasons"); // average seasons body
var cardContainer = document.getElementById("cardContainer"); // card container
renderTable(series); // render the table with the series
// render the average number of seasons
avgSeasons.innerHTML = "Average number of seasons: " + calculateAverageSeasons(series).toString();
/**
 * Render the table with the series
 * @param series
 */
function renderTable(series) {
    tableBody.innerHTML = '';
    series.forEach(function (serie) {
        var row = document.createElement("tr");
        var idCell = document.createElement("td");
        idCell.textContent = serie.id.toString();
        row.appendChild(idCell);
        var nameCell = document.createElement("td");
        nameCell.innerHTML = "<u style=\"color: blue;\">".concat(serie.name, "</u>");
        //nameCell.textContent = serie.name;
        nameCell.style.cursor = "pointer"; // Add pointer cursor
        nameCell.addEventListener("click", function () { return renderCard(serie); }); // Add event listener to render card
        row.appendChild(nameCell);
        var channelCell = document.createElement("td");
        channelCell.textContent = serie.channel;
        row.appendChild(channelCell);
        var seasonsCell = document.createElement("td");
        seasonsCell.textContent = serie.seasons.toString();
        row.appendChild(seasonsCell);
        tableBody.appendChild(row);
    });
}
/**
 * Calculate the average number of seasons of the series
 * @param series
 */
function calculateAverageSeasons(series) {
    var sum = 0;
    series.forEach(function (serie) {
        sum += serie.seasons;
    });
    return sum / series.length;
}
/**
 * Render the card with the serie
 * @param serie
 */
function renderCard(serie) {
    //console.log(serie.imageUrl);
    cardContainer.innerHTML = "\n            <a href=\"".concat(serie.imageUrl, "\">\n                <img class=\"card-img-top\" src=\"").concat(serie.imageUrl, "\" alt=\"Series image\">\n            </a>\n            <div class=\"card-body\">\n                <h5 class=\"card-title\"><b>").concat(serie.name, "</b></h5>\n                <p class=\"card-text\">").concat(serie.description, "</p>\n                <a href=\"").concat(serie.link, "\" class=\"text-primary\">").concat(serie.link, "</a>\n            </div>\n        ");
}
