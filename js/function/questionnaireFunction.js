//問卷搜尋(標題/開始結束時間)
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
                $('#showQuestionnaireTable').append(`<tr><th>填寫</th><th>問卷</th><th>狀態</th><th>開始時間</th><th>結束時間</th><th>觀看統計</th></tr>`)

                // map的foreach
                // $.each(orderInfoMap, function (key, value) {
                //     $('#showQuestionaireTable').append(`<tr><td>${key}</td><td>${value}</td></tr>`)
                // })

                $.each(questionsResList, function (index, value) {
                    // $('#showQuestionnaireTable').append(`<tr><th>問卷</th><th>狀態</th><th>開始時間</th><th>結束時間</th></tr>`)
                    $('#showQuestionnaireTable').append(`<tr><td><button id="goWrite_${value.questions.id}" >填寫問卷</button></td><td>${value.questions.title}</td><td>${value.message}</td><td>${value.questions.startTime}</td><td>${value.questions.endTime}</td><td><button ><a href="statistics.html">前往</a></button></td></tr>`)

                })
            }
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        }

    })
}

//顯示所有問卷
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
                $('#showQuestionnaireTable').append(`<tr><th>填寫</th><th>問卷</th><th>狀態</th><th>開始時間</th><th>結束時間</th><th>觀看統計</th></tr>`)
                // $('#showQuestionnaireTable').append(`<tr><th>問卷</th><th>狀態</th><th>開始時間</th><th>結束時間</th></tr>`)
                // map的foreach
                // $.each(orderInfoMap, function (key, value) {
                //     $('#showQuestionaireTable').append(`<tr><td>${key}</td><td>${value}</td></tr>`)
                // })

                for (let item of questionsResList) {
                    $('#showQuestionnaireTable').append(`
                    <tr>
                        <td><button id="goWrite_${item.questions.id}" >填寫問卷</button></td>
                        <td>${item.questions.title}</td><td>${item.message}</td>
                        <td>${item.questions.startTime}</td>
                        <td>${item.questions.endTime}</td>
                        <td><button id="goStatistics_${item.questions.id}" >前往</button></td>
                    </tr>`)
                }
                // $.each(questionsResList, function (index, value) {
                //     $('#showQuestionnaireTable').append(`<tr><td><button id ="goWrite_${value.questions.id}"><a href="questionnaire.html">填寫問卷</a></button></td><td>${value.questions.title}</td><td>${value.message}</td><td>${value.questions.startTime}</td><td>${value.questions.endTime}</td>
                //     <td><button ><a href="statistics.html">前往</a></button></td></tr>`)
                //     // alert($('#goWrite').val())

                //     // 統計頁< button id = "goSatistics_${value.questions.id}" typy = "button" > 前往</button >

                // })
            }
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        }

    })
}

//取得問卷內容
function getQuestionsDetails(id) {

    let objPostData = { id: id }

    $.ajax({
        url: 'http://localhost:8080/api/getQuestionsDetailsById',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (res) {

            let { message, title, details, startTime, endTime, qusAndOptions } = res

            if (message === '查無此問卷') {
                alert('查無此問卷')
            } else {

                $('#questionTitle').append(`<legend >${title}</legend>`)
                $('#questionDetails').append(`<p>${details}</p>`)
                $('#startTime').append(`<p>${startTime}</p>`)
                $('#endTime').append(`<p>${endTime}</p>`)

                // map的foreach
                // $.each(orderInfoMap, function (key, value) {
                //     $('#showQuestionaireTable').append(`<tr><td>${key}</td><td>${value}</td></tr>`)
                // })

                $.each(qusAndOptions, function (key, value) {

                    $('#questionList').append(`<p>${key}</p>`)
                    $.each(value, function (optionKey, optionValue) {

                        if (optionValue === 1) {
                            $('#questionList').append(`
                            <table>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="${key}"
                                                    id="flexRadioDefault1">
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    ${optionKey}
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                            </table>
                        `)
                        }
                        else if (optionValue === 0) {
                            $('#questionList').append(`
                                <table>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" name="${key}"
                                                    id="flexCheckDefault">
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    ${optionKey}
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                </table>

                            `)
                        }
                    })
                })
            }
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        }

    })
}

function statistics(strTitle) {

    let objPostData = { title: strTitle }

    $.ajax({
        url: 'http://localhost:8080/api/statistics',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (res) {

            let { message, statics } = res

            if (message === '問卷標題為空') {
                alert('問卷標題為空')
            } else if (message === '該問卷無題目') {
                alert('該問卷無題目')
            } else if (message === '該問卷目前無人作答') {
                alert('該問卷目前無人作答')
            } else {

                $('#pic').empty()

                let { } = qus
                let { } = optionNum




                $.each(statics, function (index, value) {

                    qus.add(index)
                    $.each(value, function (key, value2) {
                        optionNum.add(value2)
                    })

                })


                const ctx = document.getElementById('myChart');
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['AAA', 'BBB', 'Yellow', 'Green', 'Purple', 'Orange'],
                        datasets: [{
                            label: '# of Votes',
                            data: [20, 19, 3, 5, 2, 3],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });

            }
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        }

    })
}
