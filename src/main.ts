import { Serie } from './serie.js';
import { series } from './data.js';

const tableBody: HTMLElement = document.getElementById("seriesTableBody")!; // table main body
const avgSeasons: HTMLElement = document.getElementById("avgSeasons")!; // average seasons body

renderTable(series); // render the table with the series

// render the average number of seasons
avgSeasons.innerHTML = "Average number of seasons: " + calculateAverageSeasons(series).toString();

/**
 * Render the table with the series
 * @param series
 */
function renderTable(  series: Serie[] ): void {
    tableBody.innerHTML = '';
    series.forEach(serie => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = serie.id.toString();
        row.appendChild(idCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = serie.name;
        row.appendChild(nameCell);

        const channelCell = document.createElement("td");
        channelCell.textContent = serie.channel;
        row.appendChild(channelCell);

        const seasonsCell = document.createElement("td");
        seasonsCell.textContent = serie.seasons.toString();
        row.appendChild(seasonsCell);

        tableBody.appendChild(row);
    });
}

/**
 * Calculate the average number of seasons of the series
 * @param series
 */
function calculateAverageSeasons( series: Serie[] ): number {
    let sum = 0;
    series.forEach(serie => {
        sum += serie.seasons;
    });
    return sum / series.length;
}

