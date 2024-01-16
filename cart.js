$(document).ready(function(){
    $("#cartMain").click(function(){
        $(".cartPage").css("left", "100%")
    });
    $("#cartIcon").click(function(){
        $(".cartPage").css("left", "0%")
    });
});