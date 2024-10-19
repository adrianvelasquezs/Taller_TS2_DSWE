import { series } from './data.js';
var tableBody = document.getElementById("seriesTableBody"); // table main body
var avgSeasons = document.getElementById("avgSeasons"); // average seasons body
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
        nameCell.textContent = serie.name;
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
