        
        window.addEventListener('scroll', function(){
            let header = document.getElementById('header');
            let logo = document.getElementById('logo');
            let itemsHeader = document.querySelectorAll('nav-link');
            let scroll = window.scrollY;
            if(scroll > 100){
                logo.style.color = 'white';
                header.style.background = 'rgb( 23, 23, 23)';
                header.style.scale = '1.015';
            }
            else{
                header.style.background = 'rgba(0, 0, 0, 0)';
                header.style.scale = '1';
                logo.style.color = 'black';
            }
        });
        
        // mensajito de whatsapp
        const wp = document.getElementById('wp');
        let mensajeWp = document.getElementById('mensajeWp');
        wp.addEventListener('mouseover', function(){
            mensajeWp.style.marginRight = '7rem';
        })

        wp.addEventListener('mouseout', function(){
            mensajeWp.style.marginRight = '-20rem';
        })

        function limpiarFormulario() {
        document.getElementById("miFormulario").reset();
    }