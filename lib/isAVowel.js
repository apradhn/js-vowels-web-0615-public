'use strict';

var isAVowel = function(lttr){
  var regex, answer;
  regex = /[aeiou]/;
  answer = regex.test(lttr);
  return answer;
};

// ###########################
// DO NOT EDIT BELOW THIS LINE
// ###########################

$(function() {
  $( "#target" ).submit(function( event ) {
    event.preventDefault();
    var input = $("#in").val();
    var result = isAVowel(input);
    $('#result').text(result);
  });
});
