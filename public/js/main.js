/* global $ */
$(function () {
    $('#login').click(function () {
        //$(".login-container").hide();
        //$(".app-container").show();
        //window.location.hash = "dashboard";
        var val = {
            "username": $("#uname_txt").val(),
            "password": $("#pwd_txt").val()
        }
        $.post('http://localhost:3000/login', val).done(function (data) {
            console.log("Login Successful: ");
            console.log(data);
        }).fail(function (err) {
            console.log("login failed: ");
            console.log(err);
        })
    })
})
