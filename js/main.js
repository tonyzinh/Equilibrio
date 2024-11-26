import api from './axiosConfig.js';

(function ($) {
    "use strict";
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // International carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        items: 1,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

// Modal
$(document).ready(function() {
    $('.btn-primary').on('click', function() {
        $('#appointmentModal').modal('show');
    });
});

$(document).ready(function() {
    $('#confirmAppointment').on('click', function() {
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var appointmentTime = $('#appointmentTime').val();
        var description = $('#description').val();

        if (firstName && lastName && appointmentTime && description) {
            alert('Consulta confirmada para ' + firstName + ' ' + lastName + ' às ' + appointmentTime + '.');
            $('#appointmentModal').modal('hide');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();
});

function redirectToRegistroPsi() {
    window.location.href = 'registroPsi.html';
}

function redirectToRegistroPsi2() {
    window.location.href = 'registroPsi-log.html';
}


var loadFile = function(event) {
    var image = document.getElementById('profileImage');
    image.src = URL.createObjectURL(event.target.files[0]);
};

async function sendData() {
    try {
        console.log('Enviando dados...');
      const data = {
      "email": "kleber@fake.com",
      "senha": "senha123",
  };
      const response = await api.post('https://integrador2-production.up.railway.app/api/auth/login', data);
      console.log('Dados enviados:', response.data);
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  }
  sendData();