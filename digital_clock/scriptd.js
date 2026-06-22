const clock = document.getElementById("clock");
const dates = document.getElementById("date");

function updateClock() {
    const now = new Date();

    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    hour = String(hour).padStart(2, "0");
    min = String(min).padStart(2, "0");
    sec = String(sec).padStart(2, "0");

    let period= hour>=12?"PM":"AM";

    hour=hour%12;
    hour=hour||12;

    clock.textContent = `${hour}:${min}:${sec} ${period}`;

}

const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

const days = [
    "Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"
]
function updateDate() {
    const date = new Date();
    
    const week= days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    dates.textContent = `${day} ${month} ${year} ${(week)}`;
}

updateDate();
updateClock();

setInterval(updateClock, 1000);
setInterval(updateDate, 60000);