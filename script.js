
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
    var sm = document.getElementById('sm-logo');
    if (sm != null) {sm.style.opacity = 0.2;};
    navbar.focus();
}

function changesmopacity() {
    var sm = document.getElementById('sm-logo');
    sm.style.opacity = 1;
}