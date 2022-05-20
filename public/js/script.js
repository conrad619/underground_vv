$(document).ready(()=>{
    $('.mobile-burger').on('click',function(){
        $('.mobile-menu').slideToggle()
        $('.mobile-burger .burger').toggle()
        $('.mobile-burger .xmark').toggle()
    })

    setTimeout(() => {
        // $('.modal').show()
    }, 5000);

    $('.modal .close').on('click',function(){
        $('.modal').hide()
    })
})