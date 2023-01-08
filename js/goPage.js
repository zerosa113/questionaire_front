// 按鈕觸發資料顯示(未完)
// $(document).ready(function () {

//     $('.pagination__item').click(function (e) {
//         // window.location.href = "http://127.0.0.1:5500/statistics.html"
//         e.preventDefault()
//         $('#pic').toggleClass('open')
//     })
// })

// $(document).ready(function () {
//         /*----產生data-th-----*/
//         let $table = $(".table_change");
//         let $thRows = $table.find("thead th");
//         $thRows.each(function (key, thRow) {
//             $table
//                 .find("tbody tr td:nth-child(" + (key + 1) + ")")
//                 .attr("data-th", $(thRow).text());
// });

// 分頁按鈕
// const Pagination = {
//     nowPage: 1,
//     totalPage: 15
// };

// const pagination = document.getElementsByClassName("pagination__group")[0];

// function init() {
//     Pagination.nowPage = 1;
//     if (Pagination.totalPage > 5) {
//         over5PageRender();
//         over5PageListener();
//     } else {
//         less5PageRender();
//         pageListener();
//     }
// }
// function less5PageRender() {
//     let totalPage = Pagination.totalPage;
//     let nowPage = Pagination.nowPage;
//     let ary = [];
//     let num = 1;
//     while (num < totalPage + 1) {
//         let classList = nowPage === num ? "active" : "";
//         ary.push({ val: num, class: classList });
//         num++;
//     }
//     listRender(ary);
// }
// function pageListener() {
//     document.querySelectorAll(".pagination__item").forEach(el => {
//         el.addEventListener("click", function () {
//             if (el.dataset.val > 0) {
//                 Pagination.nowPage = parseInt(el.dataset.val);
//                 less5PageRender();
//                 pageListener();
//             }
//         });
//     });
// }
// function over5PageListener() {
//     nextBtnSet();
//     preBtnSet();
//     document.querySelectorAll(".pagination__item").forEach(el => {
//         el.addEventListener("click", function () {
//             if (el.dataset.val > 0) {
//                 over5PageChange(el.dataset.val);
//             }
//         });
//     });
// }
// function over5PageChange(num) {
//     Pagination.nowPage = parseInt(num);
//     over5PageRender();
//     over5PageListener();
// }
// function over5PageRender() {
//     let nowPage = Pagination.nowPage;
//     let totalPage = Pagination.totalPage;
//     let pageStatus = over5PageJudgePageStatus(nowPage, totalPage);
//     let ary = over5PageGenerateData(pageStatus, nowPage, totalPage);
//     listRender(ary);
// }
// function preBtnSet() {
//     document
//         .getElementsByClassName("pre")[0]
//         .addEventListener("click", function () {
//             if (this.classList.value.indexOf("unclick") === -1) {
//                 over5PageChange(Pagination.nowPage - 1);
//             }
//         });
// }
// function nextBtnSet() {
//     document
//         .getElementsByClassName("next")[0]
//         .addEventListener("click", function () {
//             if (this.classList.value.indexOf("unclick") === -1) {
//                 over5PageChange(Pagination.nowPage + 1);
//             }
//         });
// }

// function over5PageJudgePageStatus(nowPage, totalPage) {
//     return nowPage === 1
//         ? "first"
//         : nowPage <= totalPage / 2
//             ? "front"
//             : nowPage !== totalPage
//                 ? "back"
//                 : "last";
// }
// function over5PageGenerateData(pageStatus, nowPage, totalPage) {
//     const map = {
//         first: [
//             { val: -2, class: "pre unclick" },
//             { val: nowPage, class: "active" },
//             { val: nowPage + 1, class: "" },
//             { val: nowPage + 2, class: "" },
//             { val: -1, class: "unclick" },
//             { val: totalPage, class: "" },
//             { val: -2, class: "next" }
//         ],
//         front: [
//             { val: -2, class: "pre" },
//             { val: nowPage - 1, class: "" },
//             { val: nowPage, class: "active" },
//             { val: nowPage + 1, class: "" },
//             { val: -1, class: "unclick" },
//             { val: totalPage, class: "" },
//             { val: -2, class: "next" }
//         ],
//         back: [
//             { val: -2, class: "pre" },
//             { val: 1, class: "" },
//             { val: -1, class: "unclick" },
//             { val: nowPage - 1, class: "" },
//             { val: nowPage, class: "active" },
//             { val: nowPage + 1, class: "" },
//             { val: -2, class: "next" }
//         ],
//         last: [
//             { val: -2, class: "pre" },
//             { val: 1, class: "" },
//             { val: -1, class: "unclick" },
//             { val: nowPage - 2, class: "" },
//             { val: nowPage - 1, class: "" },
//             { val: nowPage, class: "active" },
//             { val: -2, class: "next unclick" }
//         ]
//     };
//     return map[pageStatus];
// }

// function listRender(ary) {
//     pagination.innerHTML = "";
//     ary.forEach(element => {
//         let li = document.createElement("li");
//         li.setAttribute("data-val", element.val);
//         li.setAttribute("class", "pagination__item " + element.class);
//         li.innerText =
//             element.val >= 0 ? element.val : element.val === -1 ? "..." : "";
//         pagination.appendChild(li);
//     });
// }

// init();


// $(document).ready(function () {
//     /*----產生data-th-----*/
//     let $table = $(".table_change");
//     let $thRows = $table.find("thead th");
//     $thRows.each(function (key, thRow) {
//         $table
//             .find("tbody tr td:nth-child(" + (key + 1) + ")")
//             .attr("data-th", $(thRow).text());
//     });
//     /*-----------*/
//     goPage(1, 2); // 一開始先秀第一頁,以及每一頁最多兩筆資料
// });


// function goPage(currentPage, pageSize) {

//     var tr = $(".table_change tbody tr");
//     var num = $(".table_change tbody tr").length; //表格所有行數(所有記錄數)
//     var totalPage = Math.ceil(num / pageSize); // 表格所有行數/每頁顯示行數 = 總頁數

//     $('#numberPage').attr('max', totalPage); // 寫入跳至第幾頁input

//     $("#numberPage").off('change').on("change", function () {// 跳至第幾頁
//         let numberPage = $("#numberPage").val();
//         if (numberPage > totalPage) {
//             console.log("頁數超過")
//             return
//         }
//         goPage(numberPage, 2);
//     });

//     var startRow = (currentPage - 1) * pageSize + 1; //開始顯示的行
//     var endRow = currentPage * pageSize; //結束顯示的行
//     endRow = (endRow > num) ? num : endRow;


//     //遍歷顯示資料實現分頁
//     for (var i = 1; i < (num + 1); i++) {
//         var trRow = tr[i - 1];
//         if (i >= startRow && i <= endRow) {
//             trRow.style.display = "";
//         } else {
//             trRow.style.display = "none";
//         }
//     }

//     var tempStr = "";
//     if (currentPage > 1) {
//         tempStr += `<a href="javascript:;" onClick="goPage(1,${pageSize})">首頁</a>`;
//         tempStr += `<a href="javascript:;" onClick="goPage(${currentPage - 1},${pageSize})">上一頁</a>`;

//     } else {
//         tempStr += `<a href="javascript:;" class="disabled">首頁</a>`;
//         tempStr += `<a href="javascript:;" class="disabled">上一頁</a>`;
//     }

//     tempStr += `<div><span>第${currentPage}頁</span>/<span>共${totalPage}頁</span></div>`;

//     if (currentPage < totalPage) {
//         tempStr += `<a href="javascript:;" onClick="goPage(${currentPage + 1},${pageSize})">下一頁</a>`;
//         tempStr += `<a href="javascript:;" onClick="goPage(${totalPage},${pageSize})">尾頁</a>`;
//     } else {
//         tempStr += `<a href="javascript:;" class="disabled">下一頁</a>`;
//         tempStr += `<a href="javascript:;" class="disabled">尾頁</a>`;
//     }

//     $("#pageModule").html(tempStr);
// }

