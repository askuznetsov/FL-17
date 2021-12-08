// Write your code here

$(document).ready(function(){
    $(".clc").click(function(){
      $("#display").val($("#display").val() +$(this).val());
    });
    $(".clear").click(function(){
      $("#display").val('');
    }); 
    $(".result").click(function(){
      $("#display").val(eval($("#display").val()));
    });
  });