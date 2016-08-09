var dir = "/images/";
var fileextension = ".jpg";
$.ajax({
    url: dir,
    success: function (data) {
        $(data).find("a:contains(" + fileextension + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http://", "");
            $("body").append("<img src='" + dir + filename + "'>");
        });
    }
});