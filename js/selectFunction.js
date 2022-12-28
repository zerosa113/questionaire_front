$(document).ready(function () {
    $(document).on('click', 'button[id*=selectBtn]', function (e) {
        e.preventDefault()

        let strTitle = $('#txtTitle').val()
        let list = Object

        titleSelect(strTitle, list)
    })
})








