//form page
$(function () {

    "use strict";

    $(".info_form textarea").on("keyup", function () {

      $(".visiable_info p").text( " " + $(this).val() );
    });


    $(".info_form input:nth-child(1)").on("keyup", function () {

      $(".visiable_info span:last-child").text( " " + $(this).val() );
    });


    $(".info_form input:nth-child(2)").on("keyup", function () {

      $(".visiable_info .Toname").text($(this).val() );
    });

});
