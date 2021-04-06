$(function(){
    populateTable()
    editMovie()
   
})

function populateTable(){
    $("#movies").html("")
    $.get("https://localhost:44325/api/movie", function(data){
        console.log(data);

        $.each(data, function(index, el){
            $(".movies").append(`<tr>
                <td>${el.title}</td>
                <td>${el.directorName}</td>
                <td>${el.genre}</td>
                <td><button class="btn btn-dark" type="submit" id="edit">Edit</button></td>
                <td><button class="btn btn-dark" type="submit" id="delete">Delete</button></td>
                <br>
                
                </tr>`)
        })
    }).fail(function(err){
        console.log(err)
    })
}


function editMovie(id){
    console.log(id);
//  $("#movies").html("")
//  $.get("https://localhost:44325/api/movie", function(data){
//         console.log(data)


}

function addMovie(){
    $.ajax({
        type: 'POST',
        url:"https://localhost:44325/api/movie",
        dataType: 'json',
        data: JSON.stringify(test),
        success: function (data, status, xhr){

        $("#add").toggle();
        $("#add").trigger();

        },
        error: function(jqXhr, textStatus, errorMessage){
            console.log(errorMessage)
        }
})
}