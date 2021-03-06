mapboxgl.accessToken = 'pk.eyJ1IjoidmluaXRhcG90dGVyIiwiYSI6ImNqcTZoMmI3ZjI4NjU0NG55emgzZWx0enoifQ.sgAhFYcdbrd9yC59H6qnWQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/vinitapotter/cjq6kqnm8a1to2rpbopu6hpne',
    center: [73.8567, 18.5204],
    maxBounds: [[-180, -85], [180, 85]],
    zoom: 6
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
          "Mission": "Halloween Flying Pumpkin Drone",
          "Altitude": "80m",
          "Velocity": "70mph",
          "Battery_percentage": "60%",
          "Mission_details": "Get information from the scout",
          "Owner": "Sidorovich",
          "Pilot": "Nimble"
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
          "Mission":  "Road survaillance Drone",
          "Altitude": "90m",
          "Velocity": "75mph",
          "Battery_percentage": "68%",
          "Mission_details": "UAV development continued during World War I, when the Dayton-Wright Airplane Company invented a pilotless aerial torpedo that would explode at a preset time",
          "Owner": "Malcolm Rasmussen",
          "Pilot": "Shubham"
        }
    },
    {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.092041015625,
        18.57336188365185
      ]
    },
    "properties": {
          "Mission":  "Find the documents in the underground lab",
          "Altitude": "97m",
          "Velocity": "79mph",
          "Battery_percentage": "78%",
          "Mission_details": "The earliest recorded use of an unmanned aerial vehicle for warfighting occurred on July 1849",
          "Owner": "Denise Duran",
          "Pilot": "Cali Conner"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        72.79541015625,
        19.41997316110168
      ]
    },
    "properties": {
        "Mission":  "Secret stash in Pripyat",
          "Altitude": "87m",
          "Velocity": "89mph",
          "Battery_percentage": "76%",
          "Mission_details": "UAV innovations started in the early 1900s and originally focused on providing practice targets for training military personnel.",
          "Owner": "Pablo Moss",
          "Pilot": "Jamir Sanders"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.399658203125,
        19.21780295966795
      ]
    },
    "properties": {
          "Mission":  "Disable the Brain Scorcher",
          "Altitude": "102m",
          "Velocity": "92mph",
          "Battery_percentage": "89%",
          "Mission_details": "The earliest attempt at a powered UAV was A. M. Low's 'Aerial Target' in 1916",
          "Owner": "Andy Mcclure",
          "Pilot": "Wendy Pratt"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.2568359375,
        19.993998469485504
      ]
    },
    "properties": {
        "Mission":  "Secret lab - Mission Description",
          "Altitude": "94m",
          "Velocity": "98mph",
          "Battery_percentage": "69%",
          "Mission_details": "The first scaled remote piloted vehicle was developed by film star and model-airplane enthusiast Reginald Denny in 1935.",
          "Owner": "Azul Flowers",
          "Pilot": "Shania Castro"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        74.2510986328125,
        20.20034600649375
      ]
    },
    "properties": {
         "Mission":  "The Monolith's secret",
          "Altitude": "84m",
          "Velocity": "75mph",
          "Battery_percentage": "63%",
          "Mission_details": "The War of Attrition (1967–1970) featured the introduction of UAVs with reconnaissance cameras into combat in the Middle East.",
          "Owner": "Ruby Rush",
          "Pilot": "Jovanny Cross"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        75.179443359375,
        20.406420474920292
      ]
    },
    "properties": {
         "Mission":  "Take equipment from the trader",
          "Altitude": "74m",
          "Velocity": "77mph",
          "Battery_percentage": "66%",
          "Mission_details": "In the 1973 Yom Kippur War, Israel used UAVs as decoys to spur opposing forces into wasting expensive anti-aircraft missiles",
          "Owner": "Haylee Davila",
          "Pilot": "Mariah Hood"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        74.3115234375,
        19.570142140282975
      ]
    },
    "properties": {
          "Mission":  "Head to the outpost with the guide",
          "Altitude": "78m",
          "Velocity": "87mph",
          "Battery_percentage": "78%",
          "Mission_details": "In 1973, the U.S. military officially confirmed that they had been using UAVs in Southeast Asia (Vietnam).",
          "Owner": "Maleah Forbes",
          "Pilot": "Mark Christensen"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        75.43212890625,
        19.921712747556207
      ]
    },
    "properties": {
          "Mission":  "Ascend the tower",
          "Altitude": "88m",
          "Velocity": "81mph",
          "Battery_percentage": "71%",
          "Mission_details": "Israel developed the first UAV with real-time surveillance",
          "Owner": "Felicity Berry",
          "Pilot": "Elaina Peterson"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        74.5751953125,
        16.962232921140107
      ]
    },
    "properties": {
          "Mission":  "Ask Lebedev about what happened",
          "Altitude": "85m",
          "Velocity": "89mph",
          "Battery_percentage": "51%",
          "Mission_details": "In the 1980s and 1990s, interest in UAVs grew within the higher echelons of the U.S. military.",
          "Owner": "Daniel Ortega",
          "Pilot": "Jaydin Mclean"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.916015625,
        17.329664329425057
      ]
    },
    "properties": {
          "Mission":  "Reinforce Clear Sky's presence in the Swamps",
          "Altitude": "75m",
          "Velocity": "99mph",
          "Battery_percentage": "96%",
          "Mission_details": "As of 2012, the USAF employed 7,494 UAVs",
          "Owner": "Chaz Friedman",
          "Pilot": "Rhys Khan"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        75.904541015625,
        17.09879223767869
      ]
    },
    "properties": {
         "Mission":  "Go to the Cordon with the guide",
          "Altitude": "85m",
          "Velocity": "98mph",
          "Battery_percentage": "76%",
          "Mission_details": "CAPECON was a European Union project to develop UAVs,[40] running from 1 May 2002 to 31 December 2005.",
          "Owner": "Caleb Hawkins",
          "Pilot": "Jazmine Short"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        75.673828125,
        18.25021997706561
      ]
    },
    "properties": {
        "Mission":  "Defend the patrol: Bus stop",
          "Altitude": "88m",
          "Velocity": "91mph",
          "Battery_percentage": "86%",
          "Mission_details": "In 2013 at least 50 countries used UAVs",
          "Owner": "Kenny Mclaughlin",
          "Pilot": "Marshall Bonilla"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        74.8828125,
        18.07275691457901
      ]
    },
    "properties": {
         "Mission":  "Meet the stalker leader",
          "Altitude": "87m",
          "Velocity": "71mph",
          "Battery_percentage": "88%",
          "Mission_details": "UAVs typically fall into one of six functional categories ",
          "Owner": "Madilyn Pena",
          "Pilot": "Barbara Rhodes"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        75.772705078125,
        19.352610894378625
      ]
    },
    "properties": {
      "Mission": "Halloween Flying Pumpkin Drone",
          "Altitude": "80m",
          "Velocity": "70mph",
          "Battery_percentage": "60%",
          "Mission_details": "Get information from the scout",
          "Owner": "Sidorovich",
          "Pilot": "Nimble"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.553466796875,
        16.309595517742196
      ]
    },
    "properties": {
      "Mission":  "Road survaillance Drone",
          "Altitude": "90m",
          "Velocity": "75mph",
          "Battery_percentage": "68%",
          "Mission_details": "UAV development continued during World War I, when the Dayton-Wright Airplane Company invented a pilotless aerial torpedo that would explode at a preset time",
          "Owner": "Malcolm Rasmussen",
          "Pilot": "Shubham"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        75.948486328125,
        20.29311344754411
      ]
    },
    "properties": {"Mission":  "Find the documents in the underground lab",
          "Altitude": "97m",
          "Velocity": "79mph",
          "Battery_percentage": "78%",
          "Mission_details": "The earliest recorded use of an unmanned aerial vehicle for warfighting occurred on July 1849",
          "Owner": "Denise Duran",
          "Pilot": "Cali Conner"},
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        75.0146484375,
        16.04581345375217
      ]
    },
    "properties": {
      "Mission":  "Secret stash in Pripyat",
          "Altitude": "87m",
          "Velocity": "89mph",
          "Battery_percentage": "76%",
          "Mission_details": "UAV innovations started in the early 1900s and originally focused on providing practice targets for training military personnel.",
          "Owner": "Pablo Moss",
          "Pilot": "Jamir Sanders"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.00341796875,
        16.615137799987075
      ]
    },
    "properties": {
      "Mission":  "Disable the Brain Scorcher",
          "Altitude": "102m",
          "Velocity": "92mph",
          "Battery_percentage": "89%",
          "Mission_details": "The earliest attempt at a powered UAV was A. M. Low's 'Aerial Target' in 1916",
          "Owner": "Andy Mcclure",
          "Pilot": "Wendy Pratt"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        74.44335937499999,
        15.178180945596363
      ]
    },
    "properties": {
      "Mission":  "Secret lab - Mission Description",
          "Altitude": "94m",
          "Velocity": "98mph",
          "Battery_percentage": "69%",
          "Mission_details": "The first scaled remote piloted vehicle was developed by film star and model-airplane enthusiast Reginald Denny in 1935.",
          "Owner": "Azul Flowers",
          "Pilot": "Shania Castro"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        75.73974609375,
        15.262988555023204
      ]
    },
    "properties": {
      "Mission":  "The Monolith's secret",
          "Altitude": "84m",
          "Velocity": "75mph",
          "Battery_percentage": "63%",
          "Mission_details": "The War of Attrition (1967–1970) featured the introduction of UAVs with reconnaissance cameras into combat in the Middle East.",
          "Owner": "Ruby Rush",
          "Pilot": "Jovanny Cross"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        75.146484375,
        13.859413869074032
      ]
    },
    "properties": {
      "Mission":  "Take equipment from the trader",
          "Altitude": "74m",
          "Velocity": "77mph",
          "Battery_percentage": "66%",
          "Mission_details": "In the 1973 Yom Kippur War, Israel used UAVs as decoys to spur opposing forces into wasting expensive anti-aircraft missiles",
          "Owner": "Haylee Davila",
          "Pilot": "Mariah Hood"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.37695312499999,
        14.626108798876839
      ]
    },
    "properties": {
      "Mission":  "Head to the outpost with the guide",
          "Altitude": "78m",
          "Velocity": "87mph",
          "Battery_percentage": "78%",
          "Mission_details": "In 1973, the U.S. military officially confirmed that they had been using UAVs in Southeast Asia (Vietnam).",
          "Owner": "Maleah Forbes",
          "Pilot": "Mark Christensen"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.04736328125,
        13.581920900545844
      ]
    },
    "properties": {
      "Mission":  "Ascend the tower",
          "Altitude": "88m",
          "Velocity": "81mph",
          "Battery_percentage": "71%",
          "Mission_details": "Israel developed the first UAV with real-time surveillance",
          "Owner": "Felicity Berry",
          "Pilot": "Elaina Peterson"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.4208984375,
        18.87510275035649
      ]
    },
    "properties": {
      "Mission":  "Ask Lebedev about what happened",
          "Altitude": "85m",
          "Velocity": "89mph",
          "Battery_percentage": "51%",
          "Mission_details": "In the 1980s and 1990s, interest in UAVs grew within the higher echelons of the U.S. military.",
          "Owner": "Daniel Ortega",
          "Pilot": "Jaydin Mclean"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.9921875,
        20.427012814257385
      ]
    },
    "properties": {
      "Mission":  "Reinforce Clear Sky's presence in the Swamps",
          "Altitude": "75m",
          "Velocity": "99mph",
          "Battery_percentage": "96%",
          "Mission_details": "As of 2012, the USAF employed 7,494 UAVs",
          "Owner": "Chaz Friedman",
          "Pilot": "Rhys Khan"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        75.673828125,
        12.64033830684679
      ]
    },
    "properties": {
      "Mission":  "Go to the Cordon with the guide",
          "Altitude": "85m",
          "Velocity": "98mph",
          "Battery_percentage": "76%",
          "Mission_details": "CAPECON was a European Union project to develop UAVs,[40] running from 1 May 2002 to 31 December 2005.",
          "Owner": "Caleb Hawkins",
          "Pilot": "Jazmine Short"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.66259765625,
        13.239945499286312
      ]
    },
    "properties": {
      "Mission":  "Defend the patrol: Bus stop",
          "Altitude": "88m",
          "Velocity": "91mph",
          "Battery_percentage": "86%",
          "Mission_details": "In 2013 at least 50 countries used UAVs",
          "Owner": "Kenny Mclaughlin",
          "Pilot": "Marshall Bonilla"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.04736328125,
        11.738302371436854
      ]
    },
    "properties": {
      "Mission":  "Meet the stalker leader",
          "Altitude": "87m",
          "Velocity": "71mph",
          "Battery_percentage": "88%",
          "Mission_details": "UAVs typically fall into one of six functional categories ",
          "Owner": "Madilyn Pena",
          "Pilot": "Barbara Rhodes"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.3876953125,
        12.597454504832005
      ]
    },
    "properties": {
          "Mission": "Halloween Flying Pumpkin Drone",
          "Altitude": "80m",
          "Velocity": "70mph",
          "Battery_percentage": "60%",
          "Mission_details": "Get information from the scout",
          "Owner": "Sidorovich",
          "Pilot": "Nimble"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.92626953125,
        12.103780891645817
      ]
    },
    "properties": {
      "Mission":  "Road survaillance Drone",
          "Altitude": "90m",
          "Velocity": "75mph",
          "Battery_percentage": "68%",
          "Mission_details": "UAV development continued during World War I, when the Dayton-Wright Airplane Company invented a pilotless aerial torpedo that would explode at a preset time",
          "Owner": "Malcolm Rasmussen",
          "Pilot": "Shubham"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.552734375,
        11.005904459659451
      ]
    },
    "properties": {
      "Mission":  "Find the documents in the underground lab",
          "Altitude": "97m",
          "Velocity": "79mph",
          "Battery_percentage": "78%",
          "Mission_details": "The earliest recorded use of an unmanned aerial vehicle for warfighting occurred on July 1849",
          "Owner": "Denise Duran",
          "Pilot": "Cali Conner"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.7392578125,
        11.39387923296741
      ]
    },
    "properties": {
      "Mission":  "Secret stash in Pripyat",
          "Altitude": "87m",
          "Velocity": "89mph",
          "Battery_percentage": "76%",
          "Mission_details": "UAV innovations started in the early 1900s and originally focused on providing practice targets for training military personnel.",
          "Owner": "Pablo Moss",
          "Pilot": "Jamir Sanders"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.27783203125,
        10.833305983642491
      ]
    },
    "properties": {
      "Mission":  "Disable the Brain Scorcher",
          "Altitude": "102m",
          "Velocity": "92mph",
          "Battery_percentage": "89%",
          "Mission_details": "The earliest attempt at a powered UAV was A. M. Low's 'Aerial Target' in 1916",
          "Owner": "Andy Mcclure",
          "Pilot": "Wendy Pratt"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.728515625,
        9.709057068618208
      ]
    },
    "properties": {
      "Mission":  "Secret lab - Mission Description",
          "Altitude": "94m",
          "Velocity": "98mph",
          "Battery_percentage": "69%",
          "Mission_details": "The first scaled remote piloted vehicle was developed by film star and model-airplane enthusiast Reginald Denny in 1935.",
          "Owner": "Azul Flowers",
          "Pilot": "Shania Castro"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.58544921874999,
        10.163560279490476
      ]
    },
    "properties": {
      "Mission":  "The Monolith's secret",
          "Altitude": "84m",
          "Velocity": "75mph",
          "Battery_percentage": "63%",
          "Mission_details": "The War of Attrition (1967–1970) featured the introduction of UAVs with reconnaissance cameras into combat in the Middle East.",
          "Owner": "Ruby Rush",
          "Pilot": "Jovanny Cross"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.255859375,
        9.297306856327596
      ]
    },
    "properties": {
      "Mission":  "Take equipment from the trader",
          "Altitude": "74m",
          "Velocity": "77mph",
          "Battery_percentage": "66%",
          "Mission_details": "In the 1973 Yom Kippur War, Israel used UAVs as decoys to spur opposing forces into wasting expensive anti-aircraft missiles",
          "Owner": "Haylee Davila",
          "Pilot": "Mariah Hood"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.10205078124999,
        8.646195681181904
      ]
    },
    "properties": {
      "Mission":  "Head to the outpost with the guide",
          "Altitude": "78m",
          "Velocity": "87mph",
          "Battery_percentage": "78%",
          "Mission_details": "In 1973, the U.S. military officially confirmed that they had been using UAVs in Southeast Asia (Vietnam).",
          "Owner": "Maleah Forbes",
          "Pilot": "Mark Christensen"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.61865234374999,
        16.003575733881327
      ]
    },
    "properties": {
      "Mission":  "Ascend the tower",
          "Altitude": "88m",
          "Velocity": "81mph",
          "Battery_percentage": "71%",
          "Mission_details": "Israel developed the first UAV with real-time surveillance",
          "Owner": "Felicity Berry",
          "Pilot": "Elaina Peterson"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.61865234374999,
        18.166730410221938
      ]
    },
    "properties": {
      "Mission":  "Ask Lebedev about what happened",
          "Altitude": "85m",
          "Velocity": "89mph",
          "Battery_percentage": "51%",
          "Mission_details": "In the 1980s and 1990s, interest in UAVs grew within the higher echelons of the U.S. military.",
          "Owner": "Daniel Ortega",
          "Pilot": "Jaydin Mclean"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.0361328125,
        20.2209657795223
      ]
    },
    "properties": {
      "Mission":  "Reinforce Clear Sky's presence in the Swamps",
          "Altitude": "75m",
          "Velocity": "99mph",
          "Battery_percentage": "96%",
          "Mission_details": "As of 2012, the USAF employed 7,494 UAVs",
          "Owner": "Chaz Friedman",
          "Pilot": "Rhys Khan"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.27783203125,
        18.999802829053262
      ]
    },
    "properties": {
      "Mission":  "Go to the Cordon with the guide",
          "Altitude": "85m",
          "Velocity": "98mph",
          "Battery_percentage": "76%",
          "Mission_details": "CAPECON was a European Union project to develop UAVs,[40] running from 1 May 2002 to 31 December 2005.",
          "Owner": "Caleb Hawkins",
          "Pilot": "Jazmine Short"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.9921875,
        17.497389400663824
      ]
    },
    "properties": {
      "Mission":  "Defend the patrol: Bus stop",
          "Altitude": "88m",
          "Velocity": "91mph",
          "Battery_percentage": "86%",
          "Mission_details": "In 2013 at least 50 countries used UAVs",
          "Owner": "Kenny Mclaughlin",
          "Pilot": "Marshall Bonilla"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.1240234375,
        15.199386048559994
      ]
    },
    "properties": {
      "Mission":  "Meet the stalker leader",
          "Altitude": "87m",
          "Velocity": "71mph",
          "Battery_percentage": "88%",
          "Mission_details": "UAVs typically fall into one of six functional categories ",
          "Owner": "Madilyn Pena",
          "Pilot": "Barbara Rhodes"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.54150390625,
        14.370833973406821
      ]
    },
    "properties": {
      "Mission": "Halloween Flying Pumpkin Drone",
          "Altitude": "80m",
          "Velocity": "70mph",
          "Battery_percentage": "60%",
          "Mission_details": "Get information from the scout",
          "Owner": "Sidorovich",
          "Pilot": "Nimble"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.51953125,
        13.7313809749427
      ]
    },
    "properties": {
      "Mission":  "Go to the Cordon with the guide",
          "Altitude": "85m",
          "Velocity": "98mph",
          "Battery_percentage": "76%",
          "Mission_details": "CAPECON was a European Union project to develop UAVs,[40] running from 1 May 2002 to 31 December 2005.",
          "Owner": "Caleb Hawkins",
          "Pilot": "Jazmine Short"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.89306640625,
        9.340672181980947
      ]
    },
    "properties": {
      "Mission":  "Take equipment from the trader",
          "Altitude": "74m",
          "Velocity": "77mph",
          "Battery_percentage": "66%",
          "Mission_details": "In the 1973 Yom Kippur War, Israel used UAVs as decoys to spur opposing forces into wasting expensive anti-aircraft missiles",
          "Owner": "Haylee Davila",
          "Pilot": "Mariah Hood"
    },
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.607421875,
        8.407168163601076
      ]
    },
    "properties": {
      "Mission":  "Ask Lebedev about what happened",
          "Altitude": "85m",
          "Velocity": "89mph",
          "Battery_percentage": "51%",
          "Mission_details": "In the 1980s and 1990s, interest in UAVs grew within the higher echelons of the U.S. military.",
          "Owner": "Daniel Ortega",
          "Pilot": "Jaydin Mclean"
    },
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
      link.innerHTML = prop.Mission;
    

    link.addEventListener('click', function(e) {
        var clickedListing = data.features[this.dataPosition];
        flyToStore(clickedListing);
        createPopUp(clickedListing);
        var activeItem = document.getElementsByClassName('active');
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        this.parentNode.classList.add('active');
      });

    stores.features.forEach(function(marker) {
        var el = document.createElement('div');
        el.className = 'marker';
        new mapboxgl.Marker(el, { offset: [0, -23] })
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);
      
    
      el.addEventListener('click', function(e) {
        var activeItem = document.getElementsByClassName('active');
        flyToStore(marker)
        createPopUp(marker);
        e.stopPropagation();
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        var listing = document.getElementById('listing-' + i);
        listing.classList.add('active');
      });
    });
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
    if (popUps[0]) popUps[0].remove();
  
    var popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML('<h3>' + currentFeature.properties.Mission +'</h3>' +
      '<ul>' +
        '<li>Altitude: ' + currentFeature.properties.Altitude + '</li>' +
        '<li>Velocity: ' + currentFeature.properties.Velocity + '</li>' +
        '<li>Battery percentage: ' + currentFeature.properties.Battery_percentage + '</li>' +
        '<li>Mission details: ' + currentFeature.properties.Mission_details + '</li>' +
        '<li>Owner: ' + currentFeature.properties.Owner + '</li>' +
        '<li>Pilot: ' + currentFeature.properties.Pilot + '</li>' +
    '</ul>'
        )
      .addTo(map);
  }

 
  map.on('load' , function(e) {
    map.addSource('places', {
        type: 'geojson',
        data: stores
    });
    buildLocationList(stores)
});




export default map;