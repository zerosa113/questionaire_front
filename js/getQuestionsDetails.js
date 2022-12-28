$(document).ready(function () {
    let {
        qusId
    } = JSON.parse(sessionStorage.getItem('id'))

    getQuestionsDetails(qusId)
})