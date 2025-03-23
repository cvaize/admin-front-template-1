'use strict';
;(function () {
    'use strict';
    let radioDark = document.getElementById('admin-dark-mode__radio--dark');
    let radioLight = document.getElementById('admin-dark-mode__radio--light');
    let radioAuto = document.getElementById('admin-dark-mode__radio--auto');

    if (radioDark && radioLight && radioAuto) {
        radioDark.addEventListener('change', toggleTheme)
        radioLight.addEventListener('change', toggleTheme)
        radioAuto.addEventListener('change', toggleTheme)
        toggleTheme();
    }

    function toggleTheme() {
        let theme = null;
        if (radioDark.checked) theme = 'dark';
        if (radioLight.checked) theme = 'light';
        if (radioAuto.checked) theme = 'auto';

        if (theme) {
            document.cookie = 'front_theme=' + theme + '; path=/'
        }
    }
})();