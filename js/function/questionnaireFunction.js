//顯示問卷(限制筆數)
function getQuestionnaireByNum(num) {

    let objPostData = { num: num }

    $.ajax({
        url: 'http://localhost:8080/api/getQuestionsByTitleOrDate',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (res) {

            let { message, questionsResList, num } = res

            if (message === '開始時間為空') {
                alert('開始時間為空')
            } else if (message === '結束時間為空') {
                alert('結束時間為空')
            } else if (message === '開始時間不能大於結束時間') {
                alert('開始時間不能大於結束時間')
            } else if (message === '暫無問卷') {
                alert('暫無問卷')
            } else if (message === '分頁數字錯誤') {
                alert('分頁數字錯誤')
            } else {

                $('#showQuestionnaireTable').empty()
                $('#showQuestionnaireTable').append(`<tr><th>填寫</th><th>問卷</th><th>狀態</th><th>開始時間</th><th>結束時間</th><th>觀看統計</th></tr>`)

                $.each(questionsResList, function (index, value) {
                    // $('#showQuestionnaireTable').append(`<tr><th>問卷</th><th>狀態</th><th>開始時間</th><th>結束時間</th></tr>`)
                    $('#showQuestionnaireTable').append(`<tr><td><button id="goWrite_${value.questions.id}" >填寫問卷</button></td><td>${value.questions.title}</td><td>${value.message}</td><td>${value.questions.startTime}</td><td>${value.questions.endTime}</td><td><button id="goStatistics_${value.questions.id}" >前往</button></td></tr>`)

                })

                // 建立分頁按鈕(10筆)
                var buttonNum = Math.ceil(num / 10)
                for (var i = 1; i <= buttonNum; i++) {

                    $(".pagination__group").append(`
                    <li id="page_${i}" class="pagination__item active" value="${i}">${i}</li>
                    `)
                    // <button id="page_${i}" class="pagination__item active" value="${i}">${i}</button>
                }

            }
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        }

    })
}

//問卷搜尋(標題/開始結束時間)
function searchQuestionnaire(strTitle, startDate, endDate, num) {

    let objPostData = { title: strTitle, startTime: startDate, endTime: endDate, num: num }

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
            } else if (message === '分頁數字錯誤') {
                alert('分頁數字錯誤')
            } else {

                $('#showQuestionnaireTable').empty()
                $('#showQuestionnaireTable').append(`<tr><th>填寫</th><th>問卷</th><th>狀態</th><th>開始時間</th><th>結束時間</th><th>觀看統計</th></tr>`)

                // map的foreach
                // $.each(orderInfoMap, function (key, value) {
                //     $('#showQuestionaireTable').append(`<tr><td>${key}</td><td>${value}</td></tr>`)
                // })

                $.each(questionsResList, function (index, value) {
                    // $('#showQuestionnaireTable').append(`<tr><th>問卷</th><th>狀態</th><th>開始時間</th><th>結束時間</th></tr>`)
                    $('#showQuestionnaireTable').append(`<tr><td><button id="goWrite_${value.questions.id}" >填寫問卷</button></td><td>${value.questions.title}</td><td>${value.message}</td><td>${value.questions.startTime}</td><td>${value.questions.endTime}</td><td><button id="goStatistics_${value.questions.id}" >前往</button></td></tr>`)

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
                $('#showQuestionnaireTable').append(`<thead><tr><th>填寫</th><th>問卷</th><th>狀態</th><th>開始時間</th><th>結束時間</th><th>觀看統計</th></tr></thead>`)

                for (let item of questionsResList) {
                    $('#showQuestionnaireTable').append(`
                    <tbody>
                    <tr>
                        <td><button id="goWrite_${item.questions.id}" >填寫問卷</button></td>
                        <td>${item.questions.title}</td><td>${item.message}</td>
                        <td>${item.questions.startTime}</td>
                        <td>${item.questions.endTime}</td>
                        <td><button id="goStatistics_${item.questions.id}" >前往</button></td>
                    </tr>
                    </tbody>`)
                }
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
                sessionStorage.setItem('title', JSON.stringify({
                    title: title
                }
                ))

                $('#questionTitle').append(`<legend >${title}</legend>`)
                $('#questionDetails').append(`<p>${details}</p>`)
                $('#startTime').append(`<p>${startTime}</p>`)
                $('#endTime').append(`<p>${endTime}</p>`)

                $.each(qusAndOptions, function (key, value) {

                    $('#questionList').append(`<p>${key}</p>`)

                    $.each(value, function (optionKey, optionValue) {

                        if (optionValue === 0) {
                            $('#questionList').append(`
                            <table>
                                    <tr>
                                        <td>
                                            <div class="form-check-input">
                                                <input class="form-check-input" type="radio" name="${key}"
                                                    id="flexRadioDefault_${optionKey}">
                                                <label class="form-check-label" for="flexRadioDefault_${optionKey}">
                                                    ${optionKey}
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                            </table>
                        `)
                        }
                        else if (optionValue === 1) {
                            $('#questionList').append(`
                                <table>
                                    <tr>
                                        <td>
                                            <div class="form-check-input">
                                                <input class="form-check-input" type="checkbox" value="" name="${key}"
                                                    id="flexCheckDefault_${optionKey}">
                                                <label class="form-check-label" for="flexCheckDefault_${optionKey}">
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

// 取統計資料
function statistics(id) {

    let objPostData = { id: id }

    $.ajax({
        url: 'http://localhost:8080/api/statistics',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (res) {

            let { message, qusAndOptions } = res

            if (message === '問卷標題為空') {
                alert('問卷標題為空')
            } else if (message === '該問卷無題目') {
                alert('該問卷無題目')
            } else if (message === '該問卷目前無人作答') {
                alert('該問卷目前無人作答')
            } else if (message === '查無此問卷') {
                alert('查無此問卷')

            } else {

                // $('#pic').empty()

                // 遍歷出問題及選項
                $.each(qusAndOptions, function (index, value) {
                    $('.statisticsBar').append(`<p>${index}</p>`)
                    $('.statisticsBar').append(`<canvas id="${index}"></canvas>`)

                    // 將問題放入陣列
                    var qus = []
                    qus.push(index)
                    var qusOption = []
                    var optionNum = []

                    // 透過問題字串建立長條圖
                    const ctx = document.getElementById(index);
                    $.each(value, function (key, value2) {

                        // 選項字串及統計數字放入陣列
                        qusOption.push(key)
                        optionNum.push(value2)
                    })
                    // 長條圖
                    new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: qusOption,  //選項
                            datasets: [{
                                label: qus,     //統計圖顏色提示
                                data: optionNum,    //統計數字
                                borderWidth: 1
                            }],
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }
                    });
                })

                // 圓餅圖
                $.each(qusAndOptions, function (index, value) {
                    // index命名不可重複以亂數代替
                    let max = 99999;
                    let min = 1;
                    random = Math.random() * max + min

                    $('.statisticsDoughnut').append(`<p>${index}</p>`)
                    $('.statisticsDoughnut').append(`<canvas id="${random}"></canvas>`)
                    var qus = []
                    qus.push(index)
                    var qusOption = []
                    var optionNum = []
                    const ctx = document.getElementById(random);
                    $.each(value, function (key, value2) {

                        qusOption.push(key)

                        optionNum.push(value2)
                    })

                    // 圓餅圖
                    const doughnut = document.getElementById(random);
                    new Chart(doughnut, {
                        type: 'doughnut',
                        data: {
                            labels: qusOption,  //選項
                            datasets: [{
                                label: qus,     //統計圖顏色提示
                                data: optionNum,    //統計數字
                                backgroundColor: [
                                    'rgb(255, 99, 132)',
                                    'rgb(54, 162, 235)',
                                    'rgb(255, 205, 86)',
                                    'rgb(25, 99, 132)',
                                    'rgb(123, 162, 235)'
                                ],
                                hoverOffset: 4
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
                })
            }
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        }

    })
}

// 傳問卷答案回資料庫
function catchAnswerInfo(title, userName, userPhone, userEmail, userAge, obj) {

    let objPostData = { title: title, name: userName, phoneNum: userPhone, email: userEmail, age: userAge, ansMap: obj }

    $.ajax({
        url: 'http://localhost:8080/api/catchAnswerInfo',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (res) {

            let { message } = res

            if (message === '問卷標題為空') {
                alert('問卷標題為空')
            } else if (message === '姓名為空') {
                alert('姓名為空')
            } else if (message === '手機號碼為空') {
                alert('手機號碼為空')
            } else if (message === 'email為空') {
                alert('email為空')
            } else if (message === '性別為空') {
                alert('性別為空')
            } else if (message === '年齡為空') {
                alert('年齡為空')
            } else if (message === '題目答案為空') {
                alert('題目答案為空')
            } else if (message === '答卷者資訊儲存成功') {
                alert('資訊儲存成功')
            }
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        }

    })
}
