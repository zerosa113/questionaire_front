$(document).ready(function () {
    let { userName,
        userPhone,
        userEmail,
        userAge,
        flexRadioDefaultSex,
        questionList
    } = JSON.parse(sessionStorage.getItem('check'))

    $('#name').val(userName)
    $('#phone').val(userPhone)
    $('#email').val(userEmail)
    $('#age').val(userAge)
    // var result = "";
    // $("input[type=radio]:checked").each(function () {
    //     result = $(this).val();
    // });
    // alert(flexRadioDefaultSex)
    if (flexRadioDefaultSex == true) {
        $('#flexRadioDefaultSex').getElementById("flexRadioDefaultSex").checked = true
    }
    // $('#flexRadioDefaultSex').getElementById("flexRadioDefaultSex").checked = true
    $('#flexRadioDefaultSex').is('checked')
    $('#questionList').val(questionList)
})
