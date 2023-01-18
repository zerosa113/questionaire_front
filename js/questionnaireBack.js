
$(document).ready(function () {
   
    // let length= JSON.parse(sessionStorage.getItem('check'))
    // for(var i=0;i<=length.map;i++){
    //     var a=sessionStorage.getItem(i);
    //     $("input:checkbox[value="+a+"]").attr("checked","checked");
    // }
    let aa
    = JSON.parse(sessionStorage.getItem('check'))

    // localStorage.clear();
    
    
    // $.each(length.map, function (key, value) {
        
    //     document.getElementById(value.value).checked = true;

    //     $("input:checkbox[value="+value.value+"]").attr("checked","checked");
    // })


});

// var result = "";
// $("input[type=radio]:checked").each(function () {
//     result = $(this).val();
// });
// alert(flexRadioDefaultSex)
// alert(userName)

// if (flexRadioDefaultSex == true) {
//     $('#flexRadioDefaultSex').getElementById("flexRadioDefaultSex").checked = true
// }
// $('#flexRadioDefaultSex').getElementById("flexRadioDefaultSex").checked = true

// $(document).ready(function () {
//     let aa
//         = JSON.parse(sessionStorage.getItem('check'))
//     $('#name').val(aa.userName)
//     $('#phone').val(aa.userPhone)
//     $('#email').val(aa.userEmail)
//     $('#age').val(aa.userAge)

//     //豪哥版
//     var ans = new Map()//
//     $.each(aa.map, function (key, value) {

//         if (ans.get(value.key)) {

//             str = ans.get(value.key) + ', ' + value.value
//             ans.set(value.key, str)
//         }
//         else {
//             ans.set(value.key, value.value)
//         }

//     })

//     ans.forEach(function (value, key) {
        
//         $('#qusAndAns').append(`<p>${key}</p>`)
//         $('#qusAndAns').append(`<p class="p-ans">${value}</p>`)

//         if () {
//             document.getElementById("flexCheckDefault").checked = true
//         }
//     })


// })
