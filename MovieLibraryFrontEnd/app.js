$(function(){
    populateTable()
   
})

function populateTable(){
    $("#movies").html("")
    $.get("https://localhost:44325/api/movie", function(data){
        console.log(data);

        $.each(data, function(index, el){
            $("#movies").append(`<div>
                <div>${index}</div>
                <div>Title: ${el.title}</div>
                <div>Director: ${el.directorName}</div>
                <div>Genre: ${el.genre}</div>
                <button onClick="editMovie(${el.movieId})">Click me!</button>
                </div><br>`)
        })
    }).fail(function(err){
        console.log(err)
    })
}


function editMovie(id){
 console.log(id);
}