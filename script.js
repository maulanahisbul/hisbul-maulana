document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e) {
        e.preventDeafault();

        document.querySelector(this.getAttribute('href')).scrollintoView({
            behavior: 'smoth'
        });
      });
    });
