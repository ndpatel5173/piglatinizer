$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
$("#button").click(function(){
function firstCharacter(string){
    var suffix = string.substring(0,1);
    return suffix + "ay";
}
console.log(firstCharacter);
$("button").click(() => {
    let firstCharacter = $("input").val();
    $("body").append(firstCharacter);
})

});
