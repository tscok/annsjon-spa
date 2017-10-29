<page-map>
    <div class="page-map">
        <div id="mapCanvas" ref="mapCanvas" if={ showMap }></div>
    </div>

    <script>
        import RiotControl from 'riotcontrol'
        import RiotRoute from 'riot-route'

        const subRoute = RiotRoute.create()

        const hogasen = new google.maps.LatLng(63.307583, 12.375260)
        const wayPoints = [
            { label: 'Parkering vid ställverk', latlng: new google.maps.LatLng(63.2973412424, 12.3513946496) },
            { label: 'Raststugan "Grand Hotel"', latlng: new google.maps.LatLng(63.3126225416, 12.3581390642) },
            { label: 'Obsplats Högåsen', latlng: new google.maps.LatLng(63.312636, 12.365895) },
            { label: 'HOGAS', latlng: new google.maps.LatLng(63.3122700825, 12.3664659820) },
            { label: 'Telemast', latlng: new google.maps.LatLng(63.310186, 12.354270) }
        ]
        const mapOpts = {
            zoom: 12,
            center: hogasen,
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            streetViewControl: false
        }
        const labels = 'ABCDT'
        let labelIndex = 0;

        this.initMap = () => {
            this.map = new google.maps.Map(this.refs.mapCanvas, mapOpts)
            this.setMarkers()
        }

        this.setMarkers = () => {
            wayPoints.forEach((point) => {
                let label = labels[labelIndex++ % labels.length]
                let marker = new google.maps.Marker({
                    position: point.latlng,
                    label: label,
                    map: this.map
                })
                this.setListener(marker, point.label)
            })
        }

        this.setListener = (marker, label) => {
            let infoWindow = new google.maps.InfoWindow()

            marker.addListener('click', () => {
                infoWindow.setContent(label)
                infoWindow.open(this.map, marker)
            })
        }

        this.showMap = false

        RiotControl.on('ROUTE', () => {
            this.update({ showMap: false })
        })

        subRoute('guide/hogasen', () => {
            this.update({ showMap: true })
            this.initMap()
        })
    </script>
</page-map>
