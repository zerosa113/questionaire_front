// 問卷搜尋
$(document).ready(function () {
    let num = 1
    // getAllQuestionnaire()
    getQuestionnaireByNum(num)

    $(document).on('click', 'button[id*=selectBtn]', function (e) {
        e.preventDefault()

        let strTitle = $('#txtTitle').val()
        let startDate = $('#startDate').val()
        let endDate = $('#endDate').val()
        let num = 1

        sessionStorage.setItem('search', JSON.stringify({
            strTitle: strTitle,
            startDate: startDate,
            endDate: endDate
        }
        ))

        document.getElementById('txtTitle').value = ""
        document.getElementById('startDate').value = ""
        document.getElementById('endDate').value = ""

        searchQuestionnaire(strTitle, startDate, endDate, num)

    })

    //點選分頁按鈕切換頁數
    $(document).on('click', 'li[id*=page]', function (e) {
        // $(document).on('click', 'button[id*=page]', function (e) {
        e.preventDefault()

        let aa = JSON.parse(sessionStorage.getItem('search'))

        let strTitle = aa.strTitle
        let startDate = aa.startDate
        let endDate = aa.endDate

        let num = $(this).prop('id').split('_')[1]

        // $('#showQuestionnaireTable').empty()
        searchQuestionnaire(strTitle, startDate, endDate, num)

    })
})

// 長條圖/圓餅圖切換
$(document).ready(function () {

    $('#btn-change').click(function (e) {
        // window.location.href = "http://127.0.0.1:5502/statistics.html"
        e.preventDefault()
        $('#pic').toggleClass('open')
    })
})


//填寫問卷後送出至確認頁
$(document).ready(function () {

    $('#goCheckBtn').click(function (e) {
        e.preventDefault()

        if ($('#name').val() == "") {
            alert("未填入「姓名」資料");
            return false;
        } else if ($('#phone').val() == "") {
            alert("未填入「電話」資料");
            return false;
        } else if ($('#email').val() == "") {
            alert("未填入「email」資料");
            return false;
        }
        else if ($('#age').val() == "") {
            alert("未填入「年齡」資料");
            return false;
        }
        else if ($('#age').val() < 0) {
            alert("「年齡」資料為負數");
            return false;
        }
        var y = 0
        var sex = document.getElementsByName('性別');
        for (var check of sex) {
            if (check.checked) {
                y++
            }
        }
        if (y === 0) {
            alert('尚未選取性別');
            throw BreakException
        }

        let aa
            = JSON.parse(sessionStorage.getItem('title'))


        $.each(aa.qusAndOptions, function (key, value) {
            var x = 0
            var checkboxes = document.getElementsByName(key);
            for (var checkbox of checkboxes) {
                if (checkbox.checked) {
                    x++
                }
            }
            if (x === 0) {
                alert('題目:' + key + ' 尚未作答');
                throw BreakException
            }
        }
        )



        //豪哥版
        map = [];
        // foreach帶有checked的單選題，把問題跟選項放進map
        $("input[type=radio]:checked").each(function () {
            map.push({ 'key': $(this).attr('name'), 'value': $(this).prop('id').split('_')[1] })
        });

        // foreach複選題，字串
        $("input[type=checkbox]:checked").each(function () {
            map.push({ 'key': $(this).attr('name'), 'value': $(this).prop('id').split('_')[1] })
        });

        // 宗憲版
        // var map = new Map()

        // // foreach帶有checked的單選題，把問題跟選項放進map
        // $("input[type=radio]:checked").each(function () {
        //     var result = [];
        //     result.push($(this).prop('id'));

        //     map.set($(this).attr('name'), $(this).prop('id').split('_')[1])

        // });

        // // foreach複選題，字串
        // $("input[type=checkbox]:checked").each(function () {
        //     var result = [];
        //     if (map.get($(this).attr('name'))) {

        //         str = map.get($(this).attr('name')) + ', ' + $(this).prop('id').split('_')[1]
        //         map.set($(this).attr('name'), str)
        //     }
        //     else {

        //         result.push($(this).prop('id').split('_')[1]);

        //         map.set($(this).attr('name'), result)

        //     }
        // });

        // map.forEach(function (value, key) {
        //     alert(key)
        //     alert(value)
        // })


        // 使用者必填資料存進session

        sessionStorage.setItem('check', JSON.stringify({
            userName: $('#name').val(),
            userPhone: $('#phone').val(),
            userEmail: $('#email').val(),
            userAge: $('#age').val(),
            map: map
        }
        ))
        window.location.href = "http://127.0.0.1:5502/questionnaireCheck.html"

    })
})

//確認頁取消返回填寫頁
$(document).ready(function () {

    $('#cancelBtn').click(function (e) {
        e.preventDefault()

        map = [];
        // foreach帶有checked的單選題，把問題跟選項放進map
        $("input[type=radio]:checked").each(function () {
            map.push({ 'key': $(this).attr('name'), 'value': $(this).prop('id').split('_')[1] })
        });

        // foreach複選題，字串
        $("input[type=checkbox]:checked").each(function () {
            map.push({ 'key': $(this).attr('name'), 'value': $(this).prop('id').split('_')[1] })
        });

        sessionStorage.setItem('check', JSON.stringify({
            map: map
        }))

        // window.location.href = "http://127.0.0.1:5500/questionnaire.html"
        //回上一頁
        history.back()

    })
})

//點選填寫按鈕至問卷
$(document).ready(function () {
    // $('#QuestionnaireInput').empty()

    $(document).on('click', 'button[id*=goWrite]', function (e) {
        e.preventDefault()

        let id = $(this).prop('id').split('_')[1]

        let message = $(this).prop('id').split('_')[2]

        if (message === "未開始") {
            alert("唉呦~不要那麼猴急")
            return false
        } else if (message === "已完結") {
            alert("看不懂國字是不是")
            return false
        }


        sessionStorage.setItem('id', JSON.stringify({
            id: id

        }))
        window.location.href = "http://127.0.0.1:5502/questionnaire.html"
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
        window.location.href = "http://127.0.0.1:5502/statistics.html"
    })
})
