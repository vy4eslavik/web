$(document).ready(function(){
    function Navigation(option){
        var elem = option.elem;
        var tabName;

        elem.on('click', 'li', onTabClick);

        function onTabClick(){
            var li = $(this);

            if(li.hasClass("current")){
                return;
            }
            getTabName(li);
            hide();
            showTab(li);
        }

        function getTabName(li){
            tabName = li.attr('class').substr(2,5);
        }

        function hide(){
            $('#img img').hide("normal");
            elem.children().removeClass('current');
            $("#content div").hide();
            $(tabName).fadeIn();
            $('.vcard').animate({'margin-right': '0px'}, 500);
        }

        function showTab(li){
            li.addClass("current");
            switch (tabName) {
                case '#tab2':
                    $('#img').animate({'background-position': "-300px"}, 500);
                    break;
                case '#tab3':
                    $('#img').animate({'background-position': "-600px"}, 500);
                    break;
                case '#tab4':
                    $('#img').animate({'background-position': "-900px"}, 500);
                    $('.vcard').animate({'margin-right': '-300px'}, 500);
                    break;
                default:
                    $('#img').animate({'background-position': "0px"}, 500);
                    break;
            }
        }
    }

    function Сertificates(option){
        var elem = option.elem;

        elem.on('click', 'li', onLiClick);

        function onLiClick(){
            $('#img img').hide();
            name = $(this).attr('class').substr(2);
            $(name).fadeIn();
        }
    }

    new Navigation({
        elem: $('#tabs')
    });
    new Сertificates({
        elem: $('#studUl')
    });
});