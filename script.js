$(window).ready(function () {
    $("#tabs span").on("click", function (e) {
        $('#img img').hide("normal");
        if ($(this).attr("id") == "current") {
            return;
        }
        else {
            $("#tabs span").attr("id", "");
            $(this).attr("id", "current");
            $("#content div").hide();
            name = $(this).attr('class').substr(2);
            $(name).fadeIn();
            $('#contacts').animate({'margin-right': '0px'}, 500);
            switch (name) {
                case '#tab2':
                    $('#img').animate({'background-position': "-300px"}, 500);
                    break;
                case '#tab3':
                    $('#img').animate({'background-position': "-600px"}, 500);
                    break;
                case '#tab4':
                    $('#img').animate({'background-position': "-900px"}, 500);
                    $('#contacts').animate({'margin-right': '-300px'}, 500);
                    break;
                default:
                    $('#img').animate({'background-position': "0px"}, 500);
                    break;
            }
        }
    });
    $("#studUl li span").on("click", function (e) {
        $('#img img').hide();
        name = $(this).attr('class').substr(2);
        $(name).fadeIn();
    });
});