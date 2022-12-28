
  /**
   * 使用test方法实现模糊查询
   * @param  {Array}  list     原数组
   * @param  {String} strTitle  查询的关键词
   * @return {Array}           查询的结果
   */
//   function titleSelect(list, strTitle) {
//     var reg =  new RegExp(strTitle);
//     var arr = [];
//     for (var i = 0; i < list.length; i++) {
//       if (reg.test(list[i])) {
//         arr.push(list[i]);
//       }
//     }
//     return arr;
//   }




function titleSelect(strTitle, list) {
    let objPostData = { title: strTitle, form: list}

    $.ajax({
        url: 'http://localhost:8080/api/titleSelect',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (formList) {
            let { strTitle, list } = formList
            $('#divAjax').empty()
            if(message == '成功'){
                $('#divAjax').append(`
                <style>
                #form {
                    font-family: Arial, Helvetica, sans-serif;
                    border-collapse: collapse;
                    width: 100%;
                    }
    
                    #form td, #customers th {
                    border: 1px solid #ddd;
                    padding: 8px;
                    }
    
                    #form tr:nth-child(even){background-color: #f2f2f2;}
    
                    #form tr:hover {background-color: #ddd;}
    
                    #form th {
                    padding-top: 12px;
                    padding-bottom: 12px;
                    text-align: left;
                    background-color: #04AA6D;
                    color: white;
                    }
                    </style>
                    </head>
                    <body>
    
                    <h1>訂單資訊</h1>
    
                    <table id="form">
                    <tr>
                        <th>問卷編號</th>
                        <th>問卷標題</th>
                        <th>狀態</th>
                        <th>開始時間</th>
                        <th>結束時間</th>
                        <th>觀看統計</th>
                    </tr>
                    <tr>
                        <td>${form.id}</td>
                        <td>${form.title}</td>
                        <td>${form.state}</td>
                        <td>${form.startTime}</td>
                        <td>${form.endTime}</td>
                        <td>${form.statistics}</td>
                    </tr>
                    </table>
                
                `)

            }
        },
        error: function(e) {
            console.log(e)
            alert('Failed')
        },

    
    })
}

    










