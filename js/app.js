const sections = new fullpage('#fullpage', {
    autoScrolling: true,
    fitToSection: false,
    fitToSectionDelay: 300,
    easing: 'easeInOutCubic',
    scrollingSpeed: 700,
    css3: true,
    easingcss3: 'ease-out',
    loopBottom: false,
    navigation: false,
    menu: '#menu',
    anchors: ['inicio', 'nosotros', 'servicios', 'clientes', 'contacto', 'cerca'],
    navigationTooltips: ['Inicio', 'Nosotros', 'Servicios', 'Clientes', 'Contacto'],
    navigationPosition: 'left',
    showActiveTooltip: true,
    sectionsColor: ['#002430', '#fff', '#c2c2c2', '#fff','#001218'],
    verticalCentered: true,
    controlArrows: false,
    slidesNavigation: true,
    afterLoad: function(origin, destination){
        if(destination.anchor == 'nosotros'){
            document.getElementById('titulo_nosotros').style.opacity = 1;
            document.getElementById("titulo_nosotros").animate([
                // keyframes
                { transform: 'translateX(-5px)' }, 
                { transform: 'translateX(5px)' },
                { transform: 'translateX(0px)' }
              ], { 
                // timing options
                duration: 500,
                //iterations: Infinity
              });

            $("#icono_estrategia").addClass('icono_active');
            $("#icono_creatividad").addClass('icono_active_2');
            $("#icono_ejecucion").addClass('icono_active_3');
            $("#icono_performance").addClass('icono_active_4');
        }
    },
    afterSlideLoad: function(section, origin, destination, direction){
        if(destination.index == 0){
            $('.celular_0, .screen_0').addClass('active');
        }

        if(destination.index == 1){
            $('.screen_1').addClass('active');
        }

        if(destination.index == 2){
            $('.celular_2').addClass('active');
        }

        if(destination.index == 3){
            $('.celular_3').addClass('active');
        }
    },
});