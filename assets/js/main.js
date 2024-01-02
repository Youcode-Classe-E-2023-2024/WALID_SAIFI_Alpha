document.getElementById('sendButton').addEventListener('click', function() {
    var userId = document.getElementById('userIdInput').value;
    var roomId = document.getElementById('roomIdInput').value;
    var message = document.getElementById('messageInput').value;
  
    $.ajax({
        url: 'index.php?page=room', 
        type: 'POST',
        data: {
            user_id: userId,
            room_id: roomId,
            messageInput: message
        },
        success: function(response) {
            document.getElementById('messageInput').value = '';
        },
        error: function() {
            console.log('Error sending message');
        }
    });
  });


  /*$(document).ready(function () {
    // Function to load room messages via AJAX
    function loadRoomMessages() {
        var roomId = <? php echo json_encode($_GET['id']); ?>; 

        $.ajax({
            type: 'GET',
            url: 'get_room_messages.php',
            data: {roomId: roomId},
            success: function (response) {
                $('#messages-section').html(response);
            },
            error: function () {
                alert('Error loading room messages.');
            }
        });
    }

    loadRoomMessages();

 
    setInterval(loadRoomMessages, 5000); 
});*/