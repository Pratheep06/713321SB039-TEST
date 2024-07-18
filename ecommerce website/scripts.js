// Example JavaScript for fetching car data from an API
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.example.com/cars')
        .then(response => response.json())
        .then(data => {
            const carList = document.querySelector('.car-list');
            data.forEach(car => {
                const carItem = document.createElement('div');
                carItem.classList.add('car-item');
                carItem.innerHTML = `
                    <h2>${car.make} ${car.model}</h2>
                    <p>Price: $${car.price}</p>
                    <img src="${car.image}" alt="${car.make} ${car.model}">
                    <p>${car.description}</p>
                `;
                carList.appendChild(carItem);
            });
        })
        .catch(error => console.error('Error fetching car data:', error));
});
