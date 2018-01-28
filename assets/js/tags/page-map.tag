<page-map>
    <div class="page-map">
        <div id="mapCanvas" ref="mapCanvas" if={ showMap }></div>
    </div>

    <script>
        import RiotControl from 'riotcontrol'
        import RiotRoute from 'riot-route'

        const self = this

        const subRoute = RiotRoute.create()

        const hogasen = new google.maps.LatLng(63.307583, 12.375260)
        const waypoints = [
            {
                text: 'Parkering vid ställverk',
                latlng: new google.maps.LatLng(63.2973412424, 12.3513946496),
                label: 'A'
            },
            {
                text: 'Raststugan "Grand Hotel"',
                latlng: new google.maps.LatLng(63.3126225416, 12.3581390642),
                label: 'B'
            },
            {
                text: 'Obsplats Högåsen',
                latlng: new google.maps.LatLng(63.312636, 12.365895),
                label: 'C'
            },
            {
                text: 'HOGAS',
                latlng: new google.maps.LatLng(63.3122700825, 12.3664659820),
                label: 'D'
            },
            {
                text: 'Telemast',
                latlng: new google.maps.LatLng(63.310186, 12.354270),
                label: 'T'
            }
        ]
        const mapOpts = {
            zoom: 12,
            center: hogasen,
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            streetViewControl: false
        }

        this.initMap = function() {
            this.map = new google.maps.Map(this.refs.mapCanvas, mapOpts)
            this.setMarkers()
        }

        this.setMarkers = function() {
            waypoints.forEach(function(waypoint) {
                const marker = new google.maps.Marker({
                    position: waypoint.latlng,
                    label: waypoint.label,
                    map: this.map
                })
                this.setListener(marker, waypoint.text)
            })
        }

        this.setListener = function(marker, text) {
            const infoWindow = new google.maps.InfoWindow()

            marker.addListener('click', function() {
                infoWindow.setContent(text)
                infoWindow.open(this.map, marker)
            })
        }

        this.showMap = false

        RiotControl.on('ROUTE', function() {
            self.update({ showMap: false })
        })

        subRoute('guide/hogasen', function() {
            self.update({ showMap: true })
            this.initMap()
        })
    </script>
</page-map>
