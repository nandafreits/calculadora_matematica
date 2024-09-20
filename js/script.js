$(document).ready(function() {

    $('txt_display').mask('000\'000\'000\'000\'000', {reverse: true});
    var bt_nr = '';

    $('.bt-nr').click(function() {
        var n = $(this).text();

        bt_nr = bt_nr.concat(n);

        $('#txt_dusplay').val(bt_nr);
    });
});
    