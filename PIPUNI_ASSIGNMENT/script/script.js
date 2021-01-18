//<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
//<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

    (function(){
        ('.covidAlert span').click(function(){
            ('.covidAlert').hide();
        })
        ('#menuToggle').click(function(){
            ('.mainMenu').toggleClass('showMenu');
        })
        ('.profileDropdown').click(function(){
            ('.dropDown').toggleClass('showMenu');
        })
        ('#datepickerStart').datepicker({
            showOn: "both",
            buttonImage: "./assets/icons/calander.svg",
            buttonImageOnly: true,
            buttonText: "Select date"
        });
        ('#datepickerEnd').datepicker({
            showOn: "both",
            buttonImage: "./assets/icons/calander.svg",
            buttonImageOnly: true,
            buttonText: "Select date"
        });

    })
