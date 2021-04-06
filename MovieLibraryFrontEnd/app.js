$(function(){
    populateTable()
   
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
                <br>
                
                </tr>`)
        })
    }).fail(function(err){
        console.log(err)
    })
}

//<button onClick="editMovie(${el.movieId})">Click me!</button> 


function editMovie(id){
 console.log(id);
}