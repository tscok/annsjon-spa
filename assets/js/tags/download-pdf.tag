<download-pdf>
    <span>Välj rapport</span>
    <select name="files">
        <option>2013</option>
        <option>2012</option>
        <option>2011</option>
    </select>
    <button type="button" onclick={ download }>Ladda ner</button>
    <iframe name="myframe" style="display:none;"></iframe>

    <script>
        const fileName = 'anualReport';
        this.download = () => {
            let index = this.files.selectedIndex
            let year = this.files.options[index].value
            let file = `anualReport${year}.pdf`
            console.log('download file', file)
            // this.myframe.src = 'docs/design.sketch'
        }
    </script>
</download-pdf>