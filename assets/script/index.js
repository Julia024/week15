const cities = ['Париж', 'Хельсинки', 'Барселона', 'Нью-Йорк'];
const temperatures = [];

for (let i = 0; i < cities.length; i++) {
    let input = prompt("Введите температуру для города "+ cities[i])
    let temperature = Number(input)

    if (!isNaN(temperature)) {
        temperatures.push(temperature)
    } else {
        alert('Введите число')
        i--
    }
}

let minTemperature = Math.min(...temperatures)
let maxTemperature = Math.max(...temperatures)

let message = ''

for (let i = 0; i < cities.length; i++) {
    message += `Температура в городе ${cities[i]}: ${temperatures[i]}°C\n`
    console.log(message)
}

message += `Максимальная температура: ${maxTemperature}°C\n`;
message += `Минимальная температура: ${minTemperature}°C`;

let paragraph = document.createElement('p')
paragraph.innerText = message

document.body.append(paragraph)