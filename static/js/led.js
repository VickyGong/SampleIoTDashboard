$(document).ready(function() {
    $("#deviceOn").click(function() {
        var deviceId = $("#deviceId").val();
        var uri = "/" + deviceId + "/state/1";
        
        $.post(uri, function() {
            alert("DEVICE ON sent");
        })
        .fail(function(data) {
            alert( "DEVICE ON error" );
        });
    });
        
    $("#deviceOff").click(function() {
        var deviceId = $("#deviceId").val();
        var uri = "/" + deviceId + "/state/0";
        
        $.post(uri, function() {
            alert("DEVICE OFF sent");
        })
        .fail(function() {
            alert( "DEVICE OFF error" );
        });
    });
});