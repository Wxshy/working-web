var pages = ['home', 'about', 'gallery', 'contact', 'uc'];

function loadNavBar() {
    document.getElementById('home').style.display = 'block';
    $(document).ready(function() {
        $.each($("nav li a img"), function(i, link) {
            $(link).fadeIn(2200);
        });

    });
};


function switch_page(page) {
    document.getElementById(page).style.display = 'block';
    for (let i = 0; i < pages.length; i++) {
        if (pages[i] != page) {
            document.getElementById(pages[i]).style.display = 'none';
        };

    }
}