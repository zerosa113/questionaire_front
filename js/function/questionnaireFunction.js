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
                $('#showQuestionnaireTable').append(`<thead><tr><th>填寫</th><th>問卷</th><th>狀態</th><th>開始時間</th><th>結束時間</th><th>觀看統計</th></tr></thead>`)

                // var len = 1;
                // //確認該集合會被分成幾頁，分成幾頁就代表需要幾個頁面按鈕,封裝封裝方便多次運用
                // function limits() {
                //     var countLim = Math.ceil(questionsResList.length / len);//餘數也算是一頁，這裡用向上取整
                //     //確認頁面按鈕個數，進行迴圈顯示到頁面上
                //     document.getElementById("inputs").innerHTML = '';//清空一下
                //     for (var i = 1; i <= countLim; i++) {
                //         //     document.getElementById("inputs").innerHTML += '<input type="button" value="' + i + '" onclick="limitinput(this)"/>';//每個頁面按鈕都繫結上一個點選事件
                //         // }
                //         document.getElementById("inputs").innerHTML += '<li class="pagination__item active" onclick="limitinput(this)">' + i + '</li>';//每個頁面按鈕都繫結上一個點選事件
                //     }
                // }
                // var choose = 0;//建立一個全域性變數用來儲存當前處於第幾個頁面
                // //點選按鈕獲取當前按鈕的值進行選擇當前table是第幾頁資料
                // function limitinput(ids) {

                //     choose = ids.value;
                //     tablestr(choose);//重新整理table資料
                //     limits();//重新整理頁面按鈕
                //     ids.style.backgroundColor = 'red';//當前點選的頁面按鈕背景顏色改變為紅色
                //     liminputcolor(choose);//頁面按鈕變色
                // }
                // //通過當前頁面按鈕和頁面資料長度將資料放進table內，封裝封裝！！！必須封裝
                // function tablestr(num) {//num是指當前哪個頁面
                //     var num1 = (num - 1) * len;//確定迴圈開始的集合下標
                //     var num2 = num * len;//確定迴圈結束的結束下標
                //     document.getElementById("showQuestionnaireTable").innerHTML = '';//清空一下
                //     for (var i = num1; i < num2; i++) {//遍歷陣列
                //         var str = '';
                //         for (var h in questionsResList[i]) {//遍歷集合
                //             str += '<td>' + questionsResList[i][h] + '</td>';
                //         }
                //         document.getElementById("showQuestionnaireTable").innerHTML += '<tr>' + str + '</tr>';//每迴圈一次新增一條資料
                //     }
                // }
                // function liminputcolor(choose) {
                //     document.getElementById("inputs").childNodes[choose - 1].style.backgroundColor = "#444";
                // }
                // //初始化，當前頁面顯示為第一頁
                // limits();//頁面按鈕生成
                // document.getElementById("inputs").childNodes[0].style.backgroundColor = "#60226b";//第一個按鈕的背景顏色為紅色
                // tablestr(1);//table資料顯示

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
                // $.each(questionsResList, function (index, value) {
                //     $('#showQuestionnaireTable').append(`<tr><td><button id ="goWrite_${value.questions.id}"><a href="questionnaire.html">填寫問卷</a></button></td><td>${value.questions.title}</td><td>${value.message}</td><td>${value.questions.startTime}</td><td>${value.questions.endTime}</td>
                //     <td><button ><a href="statistics.html">前往</a></button></td></tr>`)
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

                // let { } = qus
                // let { } = optionNum
                // var qusOption = []
                // var qus = []
                // var optionNum = []

                $.each(qusAndOptions, function (index, value) {
                    $('.statisticsBar').append(`<p>${index}</p>`)
                    $('.statisticsBar').append(`<canvas id="${index}"></canvas>`)
                    // $('.statisticsDoughnut').append(`<canvas id="1"></canvas>`)
                    var qus = []
                    qus.push(index)
                    var qusOption = []
                    var optionNum = []
                    const ctx = document.getElementById(index);
                    $.each(value, function (key, value2) {

                        qusOption.push(key)
                        optionNum.push(value2)
                    })
                    // 長條圖
                    new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: qusOption,
                            datasets: [{
                                label: qus,
                                data: optionNum,
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
                            labels: qusOption,
                            datasets: [{
                                label: qus,
                                data: optionNum,
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
