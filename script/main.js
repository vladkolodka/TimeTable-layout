$(function () {
    $("#main-navigation").find("a[data-region]").click(function (event) {
        var content = $(".hidden_block_templates .submenu_" + $(event.target).attr("data-region"));
        $("#menu_title").html(content.attr("data-name"));
        $(".submenu-content").html(content.html());
        $("#main-navigation, .submenu").addClass("submenu_opened");

        return false;
    });
    $("#backToMainMenu").click(function () {
        $("#main-navigation, .submenu").removeClass("submenu_opened");
        $("#menu_title").html("Области");
    });
});