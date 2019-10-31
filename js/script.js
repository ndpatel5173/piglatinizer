$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
//console.log(allButfirstCharacter(input));
$("button").click(function(){
    let word = $(".input").val();
    var suffix = word.substring(0,1);
    var allbutthefirstcharacter = word.substring(1,word.length);
        $(".output").text(allbutthefirstcharacter + suffix + "ay");
console.log(word);
console.log(suffix);
});
})