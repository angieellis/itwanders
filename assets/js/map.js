var map = new Datamap({
  element: document.getElementById('datamap'),
  // responsive: true,
  scope: 'world',
  fills: {
    defaultFill: '#CFECF9',
    win: '#0fa0fa',
    bubbleFill: '#FFF'
  },
  geographyConfig: {
    borderWidth: .5,
    highlightBorderWidth: .5,
    highlightBorderColor: '#585869',
    highlightFillColor: '#B6E1F4'
  },
  arcConfig: {
    // strokeColor: '#5394FF',
    // strokeColor: '#5C5E70',
    // strokeColor: '#4D6370',
    // strokeColor: '#312F3F',
    strokeColor: '#5F6275',
    // strokeColor: '#383647',
    // strokeColor: '#9EA7D9',
    strokeWidth: 2,
    greatArc: true,
    // animationSpeed: 10000, // Milliseconds
    popupOnHover: false, // True to show the popup while hovering
    popupTemplate: (geography, data) => { // This function should just return a string
      // Case with latitude and longitude
      if ( ( data.origin && data.destination ) && data.origin.latitude && data.origin.longitude && data.destination.latitude && data.destination.longitude ) {
        return '<div class="hoverinfo"><strong>Arc</strong><br>Origin: ' + JSON.stringify(data.origin) + '<br>Destination: ' + JSON.stringify(data.destination) + '</div>';
      }
      // Case with only country name
      else if ( data.origin && data.destination ) {
        return '<div class="hoverinfo"><strong>Arc</strong><br>' + data.origin + ' -> ' + data.destination + '</div>';
      }
      // Missing information
      else {
        return '';
      }
    }
  },
  bubblesConfig: {
    animate: true,
    borderWidth: 4,
    borderOpacity: 1,
    // borderColor: '#FFF',
    borderColor: '#52687D',
    // borderColor: '#9EA7D9',
    exitDelay: 100,
    fillKey: 'bubbleFill',
    fillOpacity: 1,
    highlightOnHover: true,
    // highlightFillColor: '#5394FF',
    // highlightFillColor: '#AF5D81',
    highlightFillColor: '#9EA7D9',
    highlightBorderColor: '#FFF',
    highlightBorderWidth: 2,
    highlightBorderOpacity: 1,
    highlightFillOpacity: 0.75,
    popupOnHover: true,
    popupTemplate: function(geography, data) { // This function should just return a string
      return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
    }
    // popupTemplate: (geo, data) => {
    //   let headings = [];
    //   let attrs = [];
    //   if (data.type === 'destination') {
    //     headings = ['City:', 'Country:', 'Arrival:', 'Departure:'];
    //     attrs = [data.city, data.country, data.arrival, data.departure];
    //   }
    //   else if (data.type === 'sighting') {
    //     headings = ['Event:', 'Date:', 'City:', 'Country:'];
    //     attrs = [data.event, data.date, data.city, data.country];
    //   }
    //   return (
    //     '<div class="hoverinfo bubble-info">' +
    //       '<div class="bubble-left">' + headings.join('<br />') + '</div>' +
    //       '<div class="bubble-right">' + attrs.join('<br />') + '</div>' +
    //     '</div>'
    //   );
    // }
  }
});

map.arc([
  {
    origin: {
      latitude: 37.7652778,
      longitude: -122.2405556
    },
    destination: {
      latitude: 13.736717,
      longitude: 100.523186
    }
  },
  {
    origin: {
      latitude: 13.736717,
      longitude: 100.523186
    },
    destination: {
      latitude: 7.624368,
      longitude: 99.079224
    }
  }
]);

map.bubbles([
  {
    type: 'destination',
    city: 'Bay Area',
    country: 'USA',
    arrival: '',
    departure: 'Aug 29',
    latitude: 37.7652778,
    longitude: -122.2405556,
    radius: 5
  },
  {
    type: 'destination',
    city: 'Bangkok',
    country: 'Thailand',
    arrival: 'Aug 30',
    departure: 'Sept 3',
    latitude: 13.736717,
    longitude: 100.523186,
    radius: 5
  },
  {
    type: 'destination',
    city: 'Ko Lanta',
    country: 'Thailand',
    arrival: 'Sept 4',
    departure: '?',
    latitude: 7.624368,
    longitude: 99.079224,
    radius: 5
  },
  {
    type: 'sighting',
    event: 'First Sighting',
    city: 'Mooloolaba',
    country: 'Australia',
    date: 'February 2015',
    latitude: -26.67787,
    longitude: 153.117347,
    radius: 5,
    borderColor: 'red',
    borderWidth: 4,
    borderOpacity: 0.6,
    highlightFillColor: 'pink',
    highlightFillOpacity: 1,
    highlightBorderOpacity: 1
  },
  {
    type: 'sighting',
    event: 'Second Sighting',
    city: 'Los Angeles',
    country: 'USA',
    date: 'June 2017',
    latitude: 33.9764002,
    longitude: -118.4667452,
    radius: 5,
    borderColor: 'red',
    borderWidth: 4,
    borderOpacity: 0.6,
    highlightFillColor: 'pink',
    highlightFillOpacity: 1,
    highlightBorderOpacity: 1
  }
]);

$(window).on('resize', function() {
   map.resize();
});
