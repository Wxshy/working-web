function loadNavBar() {
    $(document).ready(function() {
        $.each($("nav li a img"), function(i, link) {
            $(link).fadeIn(2200);
        });
    });
};