// Write your code here

let lastDigit = -1;
const input = jQuery('<input name="myname">');

$(document).ready(function () {
  $('.clc').click(function () {
    if ($('#display').hasClass('red')) {
      $('#display').removeClass('red');
    }
    if ($('#display').attr('result') === 'true') {
      $('#display').attr('result', false);
      $('#display').val('');
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
    let log = $('#display').val();
    $('#display').val(Function('return ' + $('#display').val()));
    if ($('#display').val() === 'Infinity') {
      $('#display').val('ERROR');
      $('#display').addClass('red');
    }
    $('#display').attr('result', true);
    $('#logs').append(
      '<div class="field"><div class="dot"></div> ' +
        log +
        ' = ' +
        $('#display').val() +
        '<div class="close">X</div></div>'
    );
  });

  $('#logs').scroll(function () {
    console.log($('#logs .field'));
  });
});
