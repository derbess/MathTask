$(document).ready(()=>{
    $(window).scroll(()=>{
        if(this.scrollY >= 45) {
            $('.header').addClass('active')
        } else {
            $('.header').removeClass('active')
        }
    })
    if(this.scrollY >= 45) {
        $('.header').addClass('active')
    } else {
        $('.header').removeClass('active')
    }

    $(".scroll-link").click(function(e) {
        e.preventDefault();
        console.log(e.target)
        var aid = $(this).attr("href")
        $('.scroll-link').removeClass('active')
        $('html,body').animate({scrollTop: $(aid).offset().top},'slow')
        e.target.classList.add('active')
    })

})

function toggleModal() {
    $('.mobile-modal').toggleClass('active')
}
