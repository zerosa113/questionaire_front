function searchQuestionnaire(strTitle, startDate, endDate) {

    let objPostData = { title: strTitle, startTime: startDate, endTime: endDate }

    $.ajax({
        url: 'http://localhost:8080/api/getQuestionsByTitleOrDate',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (res) {

            let { message, questionsResList } = res

            if (message === '開始時間為空') {
                alert('開始時間為空')
            } else if (message === '結束時間為空') {
                alert('結束時間為空')
            } else if (message === '開始時間不能大於結束時間') {
                alert('開始時間不能大於結束時間')
            } else if (message === '暫無問卷') {
                alert('暫無問卷')
            } else {

                $('#showQuestionnaireTable').empty()
                // $('#showQuestionnaireTable').append(`<tr><th>問卷</th><th>狀態</th><th>開始時間</th><th>結束時間</th></tr>`)
                // map的foreach
                // $.each(orderInfoMap, function (key, value) {
                //     $('#showQuestionaireTable').append(`<tr><td>${key}</td><td>${value}</td></tr>`)
                // })

                $.each(questionsResList, function (index, value) {
                    $('#showQuestionnaireTable').append(`<tr><th>問卷</th><th>狀態</th><th>開始時間</th><th>結束時間</th></tr>`)
                    $('#showQuestionnaireTable').append(`<tr><td>${value.questions.title}</td><td>${value.message}</td><td>${value.questions.startTime}</td><td>${value.questions.endTime}</td></tr>`)

                })
            }
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        }

    })
}

function getAllQuestionnaire() {

    $.ajax({
        url: 'http://localhost:8080/api/getAllQuestions',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(),
        success: function (res) {

            let { message, questionsResList } = res

            if (message === '暫無問卷') {
                alert('暫無問卷')
            } else {

                $('#showQuestionnaireTable').empty()
                // $('#showQuestionnaireTable').append(`<tr><th>問卷</th><th>狀態</th><th>開始時間</th><th>結束時間</th></tr>`)
                // map的foreach
                // $.each(orderInfoMap, function (key, value) {
                //     $('#showQuestionaireTable').append(`<tr><td>${key}</td><td>${value}</td></tr>`)
                // })

                $.each(questionsResList, function (index, value) {
                    $('#showQuestionnaireTable').append(`<tr><th>問卷</th><th>狀態</th><th>開始時間</th><th>結束時間</th><th>觀看統計</th></tr>`)
                    $('#showQuestionnaireTable').append(`<tr><td>${value.questions.title}</td><td>${value.message}</td><td>${value.questions.startTime}</td><td>${value.questions.endTime}</td>
                    <td><button ><a href="statistics.html">前往</a></button></td></tr>`)
                    // 統計頁< button id = "goSatistics_${value.questions.id}" typy = "button" > 前往</button >


                })
            }
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        }

    })
}

// function getQuestion(strTitle) {

//     let objPostData = { title: strTitle }

//     $.ajax({
//         url: 'http://localhost:8080/api/',
//         method: 'POST',
//         contentType: 'application/json',
//         dataType: 'json',
//         data: JSON.stringify(objPostData),
//         success: function (res) {

//             let { message, questionsResList } = res

//             if (message === '開始時間為空') {
//                 alert('開始時間為空')
//             } else if (message === '結束時間為空') {
//                 alert('結束時間為空')
//             } else if (message === '開始時間不能大於結束時間') {
//                 alert('開始時間不能大於結束時間')
//             } else if (message === '暫無問卷') {
//                 alert('暫無問卷')
//             } else {

//                 $('#showQuestionnaireTable').empty()
//                 // $('#showQuestionnaireTable').append(`<tr><th>問卷</th><th>狀態</th><th>開始時間</th><th>結束時間</th></tr>`)
//                 // map的foreach
//                 // $.each(orderInfoMap, function (key, value) {
//                 //     $('#showQuestionaireTable').append(`<tr><td>${key}</td><td>${value}</td></tr>`)
//                 // })

//                 $.each(questionsResList, function (index, value) {
//                     $('#showQuestionnaireTable').append(`<tr><th>問卷</th><th>狀態</th><th>開始時間</th><th>結束時間</th></tr>`)
//                     $('#showQuestionnaireTable').append(`<tr><td>${value.questions.title}</td><td>${value.message}</td><td>${value.questions.startTime}</td><td>${value.questions.endTime}</td></tr>`)

//                 })
//             }
//         },
//         error: function (e) {
//             console.log(e)
//             alert('Failed')
//         }

//     })
// }
