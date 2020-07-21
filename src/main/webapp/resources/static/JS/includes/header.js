var header = (() => {
    var productDropRight = () => {
        $(document).ready(function() {
            $('.dropright button').on("click", function(e) {
                e.stopPropagation();
                e.preventDefault();
                // Storing the divs with class name drop down menu.
                var dropDownMenus = $('.dropdown-menu .dropdown-menu');
                // Loop through drop down menus to replace the class name of divs to be default.
                // This is needed to ensure that all other drop right list are closed.
                for(var i = 0; i < dropDownMenus.length; i++){
                    if (dropDownMenus[i].className.includes('show')) {
                        dropDownMenus[i].className = dropDownMenus[i].className.replace(' show', '');
                    }
                }
                // Show drop right container for the one button is pressed.
                if (!$(this).next('div').hasClass('show')) {
                    $(this).next('div').addClass('show');
                } else {
                    $(this).next('div').removeClass('show');
                }

            });
        });
    }

    return {
        productDropRight: productDropRight
    }
})();


header.productDropRight();

