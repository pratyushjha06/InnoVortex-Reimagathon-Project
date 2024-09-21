var map = L.map('map').setView([28.591733, 77.410961], 16);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var marker = L.marker([28.591733, 77.410961]).addTo(map);


marker.bindPopup("<b>DUV International School</b><br>Faridabad, India").openPopup();