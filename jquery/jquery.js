jQuery(document).ready(function() {
    $("p").css("color", "red");
    jQuery("#btn1").click(function() {
        $("#btn1").fadeOut();
        col0 = $("#col0").text();
        console.log("Faded Out");
        $("#col1").text(col0);
    });
    jQuery("#btn2").click(function() {
        $("#btn2").fadeOut();
        $("#ajax").load("https://inxaoc.github.io/example/ajax-1.html");
    });

    jQuery("#btn3").click(function() {
        jQuery.getJSON("https://inxaoc.github.io/example/ajax.json", function(
            data
        ) {
            var array = [];
            if (!$(".my-new-list").text()) {
                array = data_to_array(data);

                $("<tr/>", {
                    class: "my-new-list",
                    html: items.join("")
                }).appendTo("body");
            }
        });
    });
});
var items = [];

function data_to_array(data) {
    var array = [];
    for (var key in data) {
        var value = data[key];
        if (typeof value === "string") {
            array[key] = value;
            items.push(
                "<tr><td id='" + key + "'>" + " " + key + ":  " + value + "</td></tr>"
            );
        } else {
            array[key] = data_to_array(value);
        }
    }

    return array;
}