const check = document.getElementById('check');
      const openIcon = document.querySelector('.checkbtn .open');
      const closeIcon = document.querySelector('.checkbtn .close');

      function updateMenuIcons(){
        if(!openIcon || !closeIcon) return;
        if(check.checked){
          openIcon.style.display = 'none';
          closeIcon.style.display = 'inline-block';
        } else {
          openIcon.style.display = 'inline-block';
          closeIcon.style.display = 'none';
        }
      }

      check.addEventListener('change', function(){
        document.body.classList.toggle('menu-open', this.checked);
        updateMenuIcons();
      });

      // Close menu when a nav link is clicked (mobile)
      document.querySelectorAll('.list a').forEach(link => {
        link.addEventListener('click', () => {
          check.checked = false;
          document.body.classList.remove('menu-open');
          updateMenuIcons();
        });
      });

      document.addEventListener('DOMContentLoaded', updateMenuIcons);