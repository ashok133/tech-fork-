
      var iconBase = 'https://tech-fork.000webhostapp.com/maps/marker_icons/';
      var icons = 
      {
        U : {
          icon: iconBase + '2.png'
        },
        A : {
          icon: iconBase + '1.png'
        }
      };


    

        function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), 
        {
          center: new google.maps.LatLng(-33.863276, 151.207977),
          zoom: 12
        });

        //Setting map center to current location
        if (navigator.geolocation) 
        {
            navigator.geolocation.getCurrentPosition(function (position) 
            {
              initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
              map.setCenter(initialLocation);
            });
        }    


        var infoWindow = new google.maps.InfoWindow;

          // Change this depending on the name of your PHP or XML file
          downloadUrl('https://tech-fork.000webhostapp.com/maps/xml_parser_from_latlng.php', function(data) 
          {
            var xml = data.responseXML;
            var markers = xml.documentElement.getElementsByTagName('marker');
            
            Array.prototype.forEach.call(markers, function(markerElem) 
            {
              
              var id = markerElem.getAttribute('id');
              var number = markerElem.getAttribute('number');
              var type = markerElem.getAttribute('type');

              var point = new google.maps.LatLng(
                  parseFloat(markerElem.getAttribute('lat')),
                  parseFloat(markerElem.getAttribute('lng')));

              var infowincontent = document.createElement('div');
              var strong = document.createElement('strong');
              strong.textContent = number
              infowincontent.appendChild(strong);
              infowincontent.appendChild(document.createElement('br'));

              var text = document.createElement('text');
              text.textContent = type;
              infowincontent.appendChild(text);
              //var icon = customLabel[type] || {};
              
              var marker = new google.maps.Marker(
              {
                map: map,
                position: point,
                //Uncomment below label property to set text labels on markers
                //label: type,
                icon: icons[type].icon
              });

              marker.addListener('click', function() 
              {
                infoWindow.setContent(infowincontent);
                infoWindow.open(map, marker);
              });

            });

          });
        }



      function downloadUrl(url, callback) {
        var request = window.ActiveXObject ?
            new ActiveXObject('Microsoft.XMLHTTP') :
            new XMLHttpRequest;

        request.onreadystatechange = function() {
          if (request.readyState == 4) {
            request.onreadystatechange = doNothing;
            callback(request, request.status);
          }
        };

        request.open('GET', url, true);
        request.send(null);
      }

      function doNothing() {}
    
    