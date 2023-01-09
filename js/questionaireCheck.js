$(document).ready(function () {
    let aa
        = JSON.parse(sessionStorage.getItem('check'))

    $('#name').val(aa.userName)
    $('#phone').val(aa.userPhone)
    $('#email').val(aa.userEmail)
    $('#age').val(aa.userAge)


    //豪哥版
    var ans = new Map()
    $.each(aa.map, function (key, value) {

        if (ans.get(value.key)) {

            str = ans.get(value.key) + ', ' + value.value
            ans.set(value.key, str)
        }
        else {
            ans.set(value.key, value.value)
        }

    })

    ans.forEach(function (value, key) {

        $('#qusAndAns').append(`<p>${key}</p>`)
        $('#qusAndAns').append(`<p class="p-ans">${value}</p>`)
    })

    let obj = Object.create(null);
    for (let [k, v] of ans) {
        obj[k] = v;
    }



    $(document).ready(function () {

        $('#sendBtn').click(function (e) {
            e.preventDefault()

            var yes = confirm('確定送出嗎？');
            if (yes) {
                alert('感謝填寫');
                let title
                = JSON.parse(sessionStorage.getItem('title'))

            catchAnswerInfo(title.title, aa.userName, aa.userPhone, aa.userEmail, aa.userAge, obj)
            window.location.href = "http://127.0.0.1:5500/index.html"

            } else {
                alert('取消送出');
            }
        })
    })


    // var result = "";
    // $("input[type=radio]:checked").each(function () {
    //     result = $(this).val();
    // });
    // alert(flexRadioDefaultSex)
    // alert(userName)

    // if (flexRadioDefaultSex == true) {
    //     $('#flexRadioDefaultSex').getElementById("flexRadioDefaultSex").checked = true
    // }
    // // $('#flexRadioDefaultSex').getElementById("flexRadioDefaultSex").checked = true
    // $('#flexRadioDefaultSex').is('checked')
    // $('#questionList').val(questionList)

})