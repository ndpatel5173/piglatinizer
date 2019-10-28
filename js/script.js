$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
//console.log(allButfirstCharacter(input));
$("button").click(function(){
    let word = $(".input").val();
    var suffix = word.substring(0,1);
        $("#button").click(function(){
        $(".output").text(suffix + "ay");
    });
console.log(word);
console.log(suffix);
});
//console.log(typeof allButfirstCharacter + firstCharacter);
//function firstCharacter(string){
  //var suffix = string.substring(0,1);
  //$("#button").click(function(){
    //  $(".output").text(suffix + "ay");
  //});
 // return suffix + "ay";
//}
console.log(firstCharacter(suffix));

//function allButfirstCharacter(string){
  //var pig = string.substring(1,string.length);
  //var pig = string.substring(1,Infinity);
  //return pig;
//}
})