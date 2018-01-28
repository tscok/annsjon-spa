<google-map>
    <div id="mapCanvas" ref="mapCanvas"></div>
    <script>
        const handol = new google.maps.LatLng(63.25847135123485, 12.447509765625)
        const mapOpts = {
            zoom: 4,
            center: handol,
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            streetViewControl: false,
            zoomControl: false,
            scaleControl: false
        }

        this.initMap = function() {
            const map = new google.maps.Map(this.refs.mapCanvas, mapOpts)
            this.setMarker(map)
        }

        this.setMarker = function(map) {
            new google.maps.Marker({
                position: handol,
                map: map
            })
        }

        this.on('mount', this.initMap)
    </script>
</google-map>
