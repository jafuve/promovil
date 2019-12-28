// <!-- Function used to shrink nav bar removing paddings and adding black background -->

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.navJ').addClass('affix');
        $('.navLink').addClass('affix2');
        $('.navMenu').addClass('affix3');
        // $('.nl1').hide();
        // $('.nl2').show();

        // console.log("OK");
    } else {
        $('.navJ').removeClass('affix');
        $('.navLink').removeClass('affix2');
        $('.navMenu').removeClass('affix3');
        // $('.nl2').hide();
        // $('.nl1').show();
    }
});

$('.navTrigger').click(function() {
    $(this).toggleClass('active');
    // console.log("Clicked menu");



    var navtrigger = document.getElementById('nt');
    if (navtrigger.classList.contains('active')) {
        // alert("activo");
        $("#mainListDiv").toggleClass("show_list");
        $("#mainListDiv").fadeIn(1000);
    } else {
        $("#mainListDiv").fadeOut(1000);


        setTimeout(function() {
            $("#mainListDiv").toggleClass("show_list");
        }, 1000);

    }


    // $("#mainListDiv").toggleClass("show_list");

    // var testElement = document.getElementById('mainListDiv');

    // if (testElement.classList.contains('show_list')) {
    //     // alert('tiene');
    //     $("#mainListDiv").fadeIn(1000);
    // } else {
    //     // alert('NO tiene');
    //     $("#mainListDiv").fadeOut(1000);
    // }

});

$('#videoModal').on('hide.bs.modal', function(e) {
    $("#videoModalContent").empty();
});

$('#videoModal').on('show.bs.modal', function(e) {
    var html = '<video width = "100%" class = "responsive-video" controls autoplay><source src = "assets/images/video-01.mp4" type = "video/mp4" > </video>';
    $("#videoModalContent").append(html);
});