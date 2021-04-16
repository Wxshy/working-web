var pages = ['home', 'about', 'gallery', 'contact'];

function loadNavBar() {
    document.getElementById('home').style.display = 'block';
    $(document).ready(function() {
        $.each($("nav li a img"), function(i, link) {
            $(link).fadeIn(2200);
        });
        
    });
};


function switch_page(page){
    document.getElementById(page).style.display = 'block';
}
