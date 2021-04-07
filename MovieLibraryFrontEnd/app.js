$(function(){
    populateTable()
    editMovie()
   
})
$(document).ready(function(){
    $.ajax({
        url: "https://localhost:44325/api/movie",
        type: "GET",
        dataType:"JSON",
        success: function(data){
            $('#movies').html('');
            $.each(data, function(index, el){               
               $('.movies').append(`<tr>
               <td>${el.title}</td>
               <td>${el.directorName}</td>
               <td>${el.genre}</td>
               <td><button onclick='editMovie(${el.movieId})' button class ="btn btn-dark">Edit</button></td>
               <td><button onclick='deleteMovie(${el.movieId})' button class ="btn btn-dark">Delete</button></td>
               </tr>`)
           });
        },
        error: function(err){
           console.log(err);
       }
       });
    });
(jQuery);


function addMovie(id){
    $.ajax({
        url: 'https://localhost:44325/api/movie/' + id,
        type: "POST",
        data: JSON.stringify() ,
        contentType: 'application/json',
        dataType: 'json',
        success: function(id){
             $('#movies').add(id);
            location.reload()
        },
        error: function( jqXhr, textStatus, errorThrown ){
            alert( errorThrown );              
        }            

    })
}
function editMovie(id){
    $.ajax({
        url: 'https://localhost:44325/api/movie/' + id,
        type: "PUT",
        success: function(id){
             $('#movies').update(id);
            location.reload()
        },
        error: function( jqXhr, textStatus, errorThrown ){
            alert( errorThrown );              
        }            

    })

}

function deleteMovie(id){
    $.ajax({
        url: 'https://localhost:44325/api/movie/' + id,
        type: "DELETE",
        success: function(id){
             $('#movies').remove(id);
            location.reload()
        },
        error: function( jqXhr, textStatus, errorThrown ){
            alert( errorThrown );              
        }            
        });
    }

// alert pops up for search
//var movieName = window.prompt("Enter the movie name: "); alert("the movie name is " + movieName);