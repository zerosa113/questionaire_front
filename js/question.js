$(document).ready(function (e) {
    $('#sendBtn').click(function (e) {
        e.preventDefault()

        var userName = $('#name').val
        $('#name').empty().append('')
    })
})

// 每一行問題+選項 empty append 共5行 