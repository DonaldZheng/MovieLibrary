$(function(){
    // $.ajax({
    //     url: "https://localhost:44325/api/movie",
    //     type: "GET",
    //     dataType:"JSON",
    //     success: function(data){
    //         console.log(data);
    //     },
    //     error: function(err){
    //         console.log(err)
    //     }
    // })
    populateTable()
   
})


function populateTable(){
    $("#movies").html("")
    $.get("https://localhost:44325/api/movie", function(data){
        console.log(data);
        for(let i = 0; i < data.length;i++){
        $("#movies").append(`<div><div>Title: ${data[i].title}</div>
        <div>Director: ${data[i].director}</div>
        <div>Genre: ${data[i].genre}</div>
        </div><br>`)
        }
        $("#movies").html(JSON.stringify(data))
        
    }).fail(function(err){
        console.log(err)
    })
}


function editMovie(id){
 console.log(id);
}