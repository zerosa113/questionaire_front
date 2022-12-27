// 問卷搜尋
$(document).ready(function (e) {
    getAllQuestionnaire()

    $(document).on('click', 'button[id*=showQuestionnaireBtn]', function (e) {
        e.preventDefault()

        let strTitle = $('#titleSelect').val()
        let startDate = $('#startDate').val()
        let endDate = $('#endDate').val()

        // $('#showQuestionnaireTable').empty()
        searchQuestionnaire(strTitle, startDate, endDate)
    })
})

// 問卷題目
// $(document).ready(function (e) {
//     $('#sendBtn').click(function (e) {
//         e.preventDefault()

//         var userName = $('#name').val
//         $('#name').empty().append('')
//     })
// })

// 每一行問題+選項 empty append 共5行 

// 長條圖/圓餅圖切換
$(document).ready(function () {

    $('#btn-change').click(function (e) {
        // window.location.href = "http://127.0.0.1:5500/statistics.html"
        e.preventDefault()
        $('#pic').toggleClass('open')
    })
})
