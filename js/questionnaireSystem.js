// 問卷搜尋
$(document).ready(function (e) {
    getAllQuestionnaire()

    $(document).on('click', 'button[id*=selectBtn]', function (e) {
        e.preventDefault()

        let strTitle = $('#txtTitle').val()
        let startDate = $('#startDate').val()
        let endDate = $('#endDate').val()

        // $('#showQuestionnaireTable').empty()
        searchQuestionnaire(strTitle, startDate, endDate)

    })
})

// 長條圖/圓餅圖切換
$(document).ready(function () {

    $('#btn-change').click(function (e) {
        // window.location.href = "http://127.0.0.1:5500/statistics.html"
        e.preventDefault()
        $('#pic').toggleClass('open')
    })
})


//填寫問卷後送出至確認頁
$(document).ready(function () {

    $('#goCheckBtn').click(function (e) {
        // window.location.href = "http://127.0.0.1:5500/statistics.html"
        e.preventDefault()

        sessionStorage.setItem('check', JSON.stringify({
            userName: $('#name').val(),
            userPhone: $('#phone').val(),
            userEmail: $('#email').val(),
            userAge: $('#age').val(),

            flexRadioDefaultSex: $('input:radio:checked[name="flexRadioDefaultSex"]').val(),

            // flexRadioDefaultSex: $('#flexRadioDefaultSex').val(),
            // questionList: $('#questionList').val(),

        }))
        window.location.href = "http://127.0.0.1:5500/questionnaireCheck.html"

    })
})

//確認頁取消返回填寫頁
$(document).ready(function () {

    $('#cancelBtn').click(function (e) {
        e.preventDefault()

        sessionStorage.setItem('check', JSON.stringify({
            userName: $('#name').val(),
            userPhone: $('#phone').val(),
            userEmail: $('#email').val(),
            userAge: $('#age').val(),

            // flexRadioDefaultSex: $('#flexRadioDefaultSex').val(),
            // questionList: $('#questionList').val(),

        }))
        window.location.href = "http://127.0.0.1:5500/questionnaire.html"

    })
})


//點選填寫按鈕至問卷
$(document).ready(function () {
    // $('#QuestionnaireInput').empty()

    $(document).on('click', 'button[id*=goWrite]', function (e) {
        e.preventDefault()

        let id = $(this).prop('id').split('_')[1]

        sessionStorage.setItem('id', JSON.stringify({
            id: id

        }))
        window.location.href = "http://127.0.0.1:5500/questionnaire.html"
    })
})


//點選前往按鈕至問卷統計
$(document).ready(function () {

    $(document).on('click', 'button[id*=goStatistics]', function (e) {
        e.preventDefault()

        let id = $(this).prop('id').split('_')[1]

        sessionStorage.setItem('id', JSON.stringify({
            id: id

        }))
        window.location.href = "http://127.0.0.1:5500/statistics.html"
    })
})
