// Write your code here

let lastDigit = -1;

$(document).ready(function () {
  $('.clc').click(function () {
    if ($('#display').hasClass('red')) {
      $('#display').removeClass('red');
    }
    if (
      ($('#display').val().slice(lastDigit) === '*' ||
        $('#display').val().slice(lastDigit) === '/' ||
        $('#display').val().slice(lastDigit) === '+' ||
        $('#display').val().slice(lastDigit) === '-') &&
      ($(this).val() === '*' ||
        $(this).val() === '/' ||
        $(this).val() === '+' ||
        $(this).val() === '-')
    ) {
      let del = [];
      let i = 0;
      while (i < $('#display').val().length - 1) {
        del[i] = $('#display').val()[i];
        i++;
      }
      let res = del.join('');
      $('#display').val(res + $(this).val());
    } else {
      $('#display').val($('#display').val() + $(this).val());
    }
  });
  $('.clear').click(function () {
    $('#display').val('');
  });
  $('.result').click(function () {
    $('#display').val(Function('return ' + $('#display').val()));
    if ($('#display').val() === 'Infinity') {
      $('#display').val('ERROR');
      $('#display').addClass('red');
    }
  });
});
