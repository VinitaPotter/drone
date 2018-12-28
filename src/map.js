mapboxgl.accessToken = 'pk.eyJ1IjoidmluaXRhcG90dGVyIiwiYSI6ImNqcTZoMmI3ZjI4NjU0NG55emgzZWx0enoifQ.sgAhFYcdbrd9yC59H6qnWQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/vinitapotter/cjq6kqnm8a1to2rpbopu6hpne',
    center: [73.8567, 18.5204],
    maxBounds: [[-180, -85], [180, 85]],
    zoom: 9
});

var stores = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.86932373046875,
            18.581172296837025
          ]
        },
        "properties": {
            "info": "drone1",
            "pilot": "Vinita"
          }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.6468505859375,
            18.570758333078206
          ]
        },
        "properties": {
            "info": "drone2",
            "pilot": "Alex"
          }
      }
    ]
  }





  function buildLocationList(data) {
    for (var i = 0; i < data.features.length; i++) {
      var currentFeature = data.features[i];
      var prop = currentFeature.properties;
      var listings = document.getElementById('listings');
      var listing = listings.appendChild(document.createElement('div'));
      listing.className = 'item';
      listing.id = 'listing-' + i;
  
      var link = listing.appendChild(document.createElement('a'));
      link.href = '#';
      link.className = 'title';
      link.dataPosition = i;
      link.innerHTML = prop.info;
  
      var details = listing.appendChild(document.createElement('div'));
      details.innerHTML = prop.pilot;
    }
  }

  function flyToStore(currentFeature) {
    map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15
    });
  }
  
  function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    // Check if there is already a popup on the map and if so, remove it
    if (popUps[0]) popUps[0].remove();
  
    var popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML('<h3>Sweetgreen</h3>' +
        '<h4>' + currentFeature.properties.address + '</h4>')
      .addTo(map);
  }

 
  map.on('style.load' , function(e) {
    map.addLayer({
      id: 'locations',
      type: 'symbol',
      source: {
        type: 'geojson',
        data: stores
      },
      layout: {
        'icon-image': 'cat',
        "icon-size": 0.25,
        'icon-allow-overlap': true,
      }
    });
    buildLocationList(stores);
  });

  map.on('click', function(e) {
    // Query all the rendered points in the view
    var features = map.queryRenderedFeatures(e.point, { layers: ['locations'] });
    if (features.length) {
      var clickedPoint = features[0];
      // 1. Fly to the point
      flyToStore(clickedPoint);
      // 2. Close all other popups and display popup for clicked store
      createPopUp(clickedPoint);
      // 3. Highlight listing in sidebar (and remove highlight for all other listings)
      var activeItem = document.getElementsByClassName('active');
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
      // Find the index of the store.features that corresponds to the clickedPoint that fired the event listener
      var selectedFeature = clickedPoint.properties.address;
  
      for (var i = 0; i < stores.features.length; i++) {
        if (stores.features[i].properties.address === selectedFeature) {
          selectedFeatureIndex = i;
        }
      }
      // Select the correct list item using the found index and add the active class
      var listing = document.getElementById('listing-' + selectedFeatureIndex);
      listing.classList.add('active');
    }
  });

  map.addSource('places', {
    type: 'geojson',
    data: stores
  });

export default map;