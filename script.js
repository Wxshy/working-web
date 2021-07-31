
function loadNavBar() {
    document.getElementById('home').style.display = 'block';
    $(document).ready(function() {
        $.each($("nav li a img"), function(i, link) {
            $(link).fadeIn(2200);
        });

    });

};

function nav_open(){
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.focus();
}