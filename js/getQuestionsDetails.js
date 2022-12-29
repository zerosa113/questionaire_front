$(document).ready(function () {
    let { id
    } = JSON.parse(sessionStorage.getItem('id'))

    getQuestionsDetails(id)
})