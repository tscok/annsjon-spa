<google-map>
    <div id="canvas"></div>
    <script>
        this.initMap = () => {
            const handol = new google.maps.LatLng(63.25847135123485, 12.447509765625);
            const mapOptions = {
                zoom: 5,
                center: handol,
                mapTypeId: google.maps.MapTypeId.TERRAIN,
                streetViewControl: false,
                zoomControl: false,
                scaleControl: false
            };
            let map = new google.maps.Map(this.canvas);
                map.setOptions(mapOptions);
            let marker = new google.maps.Marker({
                position: handol,
                map: map
            });
        };

        this.on('mount', this.initMap)
    </script>
</google-map>
