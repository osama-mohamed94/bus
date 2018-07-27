$(function(){
    
    /*Start Menu In Small Screen*/
    
    $("#sub, #open-menu, #overlay").click(function(e){
        if(e.currentTarget == $("#sub")[0]){
            e.preventDefault();
            var ele = $(this);
            if(ele.hasClass("rotate")){
                ele.removeClass("rotate");
            } else {
                ele.addClass("rotate");
            }
            ele.parent().next().slideToggle(1000 * 0.4);
        } else if(e.currentTarget == $("#open-menu")[0] || e.target == $("#overlay")[0]){
            var overlay = $("#overlay"),
                menu = overlay.find(".menu"),
                bullet = $(".bullet");
            if(menu.css("left") == "-250px"){
                bullet.addClass("anim");
                overlay.show(0);
                menu.animate({
                    "left": "0"
                }, 1000 * 0.3);
            } else if(menu.css("left") == "0px"){
                bullet.removeClass("anim");
                menu.animate({
                    "left": "-250px"
                }, 1000 * 0.3);
                setTimeout(function(){
                    overlay.hide(0);
                }, 1000 * 0.3);
            }
        }
    });
    
    
    /*End Menu In Small Screen*/
    /*Start Navbar*/
    
    //Drop Down Menu When Hover
    $("#sub-about, #sub-events").hover(function(){
        $(this).find("> ul").stop(false, false).slideDown(1000 * 0.4, function(){
            $(this).find("> li > a").animate({
                "opacity": 1
            }, 1000 * 0.1);
        });
    }, function(){
        $(this).find("> ul").stop(false, false).slideUp(1000 * 0.4, function(){
            $(this).find("> li > a").css("opacity", 0);
        });
    });
    
    //Nav Fixed Top When Scroll Down
    var windowPage = $(window),
        navbar = $(".navbar-section"),
        heightNavbar = navbar.outerHeight(),
        offsetTopNavbar = navbar.offset().top,
        key = true;
    windowPage.scroll(function(){
        if(windowPage.width() >= 992){
            if(windowPage.scrollTop() > offsetTopNavbar + heightNavbar){
                if(key){
                    navbar.addClass("fixed position-fixed").hide(0).slideDown(1000 * 0.5)
                    .next().css("margin-top", heightNavbar);
                    key = false;
                }
            } else {
                if(!key){
                    navbar.removeClass("fixed position-fixed")
                    .next().css("margin-top", 0);
                    key = true;
                }
            }
        }
        //To Fix Show Navbar In Screen < 992 When Resize The Page In Middle Page
        else {
            navbar.removeClass("fixed position-fixed")
            .next().css("margin-top", 0);
        }
    });
    
    /*End Navbar*/
    /*Start Scroll To Top*/
    
    var button = $(".scroll-to-top"),
        key2 = true;
    button.click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 1000 * 2);
    });
    windowPage.scroll(function(){
        console.log(windowPage.scrollTop());
        if(windowPage.scrollTop() > 400){
            if(key2){
                button.animate({
                    "bottom": "-20px"
                }, 1000 * 0.2);
                key2 = false;
            }
        } else {
            if(!key2){
                button.animate({
                    "bottom": "-50px"
                }, 1000 * 0.2);
                key2 = true;
            }
        }
    });
    
    /*End Scroll To Top*/

});