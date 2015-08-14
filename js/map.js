jQuery(document).ready(function($) {
    var mapLayer = MQ.mapLayer(),
    map;

    map = L.map('map', {
        layers: MQ.mapLayer(),
        center: [ 50, 8.271111 ], // Koordinaten für Zentrum, hier: Mainz
        zoom: 12
    });
    map.scrollWheelZoom.disable(); // Zoom mit Mausrad deaktivieren
    map.on('click', onMapClick);
    var marker = new L.marker();
    function onMapClick(e) {
        marker.setLatLng(e.latlng);
        marker.addTo(map);
        $("[data-content='node-lat']").val(e.latlng.lat.toFixed(6));
        $("[data-content='node-long']").val(e.latlng.lng.toFixed(6));

        // Karte nach auswahl festhalten (Maplock für Mobilgeräte, um wieder scrollen zu können)
        $('#maplock').prop('checked', true);
        map.dragging.disable();
    }

    // Maplock funktion
    $('#maplock').change(function() {
        if($(this).is(":checked")) {
            map.dragging.disable();
        } else {
            map.dragging.enable();
        }
    });
});