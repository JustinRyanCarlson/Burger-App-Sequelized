// Triggers a click of the submit button when enter is pressed on the keyboard.
$(document).keypress(function(e) {
    if (e.which == 13) {
        $('#submit').trigger('click');
    }
});

// When the submit button is clicked, the code checks to make sure the user entered something in the 
// text area. If not, a model is displayed and a request is not sent. If there was any input in the text
// area, the input is trimmed and placed in a newBurger object then the request is sent with this data. 
// once the response comes back from the server, the page is refreshed.
$('#submit').on('click', function() {
    if ($('#burger_input').val() === '') {
        $("#myModal").modal('show');
    } else {
        var newBurger = {
            burger_name: $('#burger_input').val().trim(),
        };

        $.post('/burgers', newBurger, function(status) {
            if (status === 'success') {
                window.location.href = '/';
            }
        });
    }
});

// When one of the devour buttons is clicked, a PUT AJAX request is sent to the server, then the page is refreshed.
$('.devour').on('click', function() {
    $.ajax({
        type: 'PUT',
        dataType: 'json',
        url: "/burgers/" + $(this).data("burger_id")
    });
    window.location.href = '/';
});
