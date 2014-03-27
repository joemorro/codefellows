$('[type="checkbox"]').click(function () {
    var element = $(this).parent();
    if ($(this).is(':checked')) {
        element.wrap('<del>');
    } else {
        element.unwrap('<del>');
    }
});