window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'trex',
            location: {
                lat: 44.496470,
                lng: 11.320180,
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('trex_08');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${35.149299}; longitude: ${129.065956};`);
        model.setAttribute('gltf-model', './assets/trex/trex_08.gltf');
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.9 0.9 0.9');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
