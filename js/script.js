$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
function firstCharacter(string){
  var suffix = string.substring(0,1);
  return suffix + "ay";
}
console.log(firstCharacter(input));

function allButfirstCharacter(string){
  var pig = string.substring(1,string.length);
  //var pig = string.substring(1,Infinity);
  return pig;
}
console.log(allButfirstCharacter(input));
$("button").click(function(){
    $(".input").val();

});
console.log(typeof allButfirstCharacter + firstCharacter);
})