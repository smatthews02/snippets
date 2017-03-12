jQuery(function ($) {
    console.log('jQuery Ready');

    $('.btn.next').click(function () {
        console.log('jQuery: next button clicked');
    });

    $('.select').change(function () {
        console.log('jQuery: new select value: ' + $(this).val());
    });

    //ajax call
    $.get('url', function (data) {
        //on success
    })
        .always(function () {
            //finish up
        });

    //catch JS errors
    $(window).on('error', function (evt) {
        
    });
});