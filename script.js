window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Brachio',
            location: {
                lat: 35.149027,
                lng: 129.065187,
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${35.149027}; longitude: ${129.065187};`);
        model.setAttribute('gltf-model', './assets/brachio.gltf');
        model.setAttribute('rotation', '0 15 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.95 0.95 0.95');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-new-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
