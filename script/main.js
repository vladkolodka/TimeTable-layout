$(function () {
    $("a[data-region]").click(function (event) {
        alert( $(event.target).attr("data-region"));

        return false;
    });
});
function getBackButton(){

}