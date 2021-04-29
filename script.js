
function loadNavBar() {
    document.getElementById('home').style.display = 'block';
    $(document).ready(function() {
        $.each($("nav li a img"), function(i, link) {
            $(link).fadeIn(2200);
        });

    });

};