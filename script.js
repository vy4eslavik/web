$(window).ready(function () {
    $("#tabs .a").on("click", function (e) {
        $('#img img').hide("normal");
        if ($(this).attr("id") == "current") {
            return;
        }
        else {
            $("#tabs .a").attr("id", "");
            $(this).attr("id", "current");
            $("#content div").hide();
            $($(this).attr('name')).fadeIn();
            $('#contacts').animate({'margin-right': '0px'}, 500);
            switch ($(this).attr('name')) {
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
    $("#studUl li .a").on("click", function (e) {
        $('#img img').hide();
        $($(this).attr("name")).fadeIn();
    });
});