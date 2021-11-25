$(document).ready(function(){

    //Handling the POST request to add a new item to the list
    $('form').on('submit', function(){

        let newitem = $('input[type="text"]').val();
        console.log(newitem);
        
        $.ajax({
            type: 'POST',
            url: '/index',
            data: { item: newitem }
        });

        location.reload();

        return false;

    });

    //Handling the DELETE request to delete a item from the list
    $('li').on('click', function(){
        
        let item = $(this).text();
        
        $.ajax({
            type: 'DELETE',
            url: '/index/' + item
        });

        location.reload();

    });

});