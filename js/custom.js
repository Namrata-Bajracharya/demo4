$(window).scroll(function(){
    if($(this).scrollTop()> 100)
    {
    $("nav").addClass("sticky")
    }
    else
    {
     $("nav").removeClass("sticky")
    }
})
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})