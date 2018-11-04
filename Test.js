document.addEventListener('DOMContentLoaded', function(){

    //add event listener to button
    var button = document.getElementById("my-button");
    button.addEventListener('click',togglePicture, false);
    
    //function that toggles picture by visibility
    function togglePicture(){
        var picture = document.getElementById('colour');
        if(picture.style.visibility === "hidden"){
            picture.style.visibility = "visible";
        } else {
            picture.style.visibility = "hidden";
        }
    }

    //get variables
    var form = document.getElementById('colour-form');
    var field = document.getElementById('input-1')
    var colours = document.getElementById('colours')

    //prevent form submit
    form.addEventListener('submit', function (e){
        e.preventDefault();
        colours.append(field.value + " ");
    });
})
    