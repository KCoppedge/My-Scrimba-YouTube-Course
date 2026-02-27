import { madeUpStock } from "./stockDataAPI.js";
const display = document.getElementById("display");
const footerEl = document.getElementById("footerEl")

let lastPrice = null;

function updateStockInfo() {
    display.innerText = "Fetching...";

    setInterval(() => {
        const { name, symbol, price, time } = madeUpStock()
        const currentStock = madeUpStock();
        const currentPrice = currentStock.price;
        let colorClass = ""
        let arrow = "";

        if (lastPrice !== null) {
            if (currentPrice > lastPrice) {
                arrow = "↑";
                colorClass = "up"
            } else if (currentPrice < lastPrice) {
                arrow = "↓";
                colorClass = "down"
            }
        }

        display.innerHTML = `
            <h3>${name} (${symbol})</h3>
            <p>Current price: $${price} 
            <span class="${colorClass}">${arrow}</span></p>
            <small>Last updated: ${time}</small>
        `;

        lastPrice = price;

    }, 3000);
}

footerEl.textContent = new Date().toLocaleDateString()
updateStockInfo();