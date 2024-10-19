import { Serie } from './serie.js';
import { series } from './data.js';

const tableBody: HTMLElement = document.getElementById("seriesTableBody")!; // table main body
const avgSeasons: HTMLElement = document.getElementById("avgSeasons")!; // average seasons body
const cardContainer: HTMLElement = document.getElementById("cardContainer")!; // card container

renderTable(series); // render the table with the series

// render the average number of seasons
avgSeasons.innerHTML = "Average number of seasons: " + calculateAverageSeasons(series).toString();

/**
 * Render the table with the series
 * @param series
 */
function renderTable(series: Serie[]): void {
    tableBody.innerHTML = '';
    series.forEach(serie => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = serie.id.toString();
        row.appendChild(idCell);

        const nameCell = document.createElement("td");
        nameCell.innerHTML = `<u style="color: blue;">${serie.name}</u>`;
        //nameCell.textContent = serie.name;
        nameCell.style.cursor = "pointer"; // Add pointer cursor
        nameCell.addEventListener("click", () => renderCard(serie)); // Add event listener to render card
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

/**
 * Render the card with the serie
 * @param serie
 */
function renderCard( serie: Serie ): void {
    //console.log(serie.imageUrl);
    cardContainer.innerHTML = `
            <a href="${serie.imageUrl}">
                <img class="card-img-top" src="${serie.imageUrl}" alt="Series image">
            </a>
            <div class="card-body">
                <h5 class="card-title"><b>${serie.name}</b></h5>
                <p class="card-text">${serie.description}</p>
                <a href="${serie.link}" class="text-primary">${serie.link}</a>
            </div>
        `;
}

