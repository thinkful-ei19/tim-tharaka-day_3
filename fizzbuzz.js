
function hi () {
    $('#number-chooser').submit(function (event){
        event.preventDefault();
        let data = parseInt($(this).find("input[name='number-choice']").val())
        // console.log(($(this).find("input[name='number-choice']").val()));
        // console.log(data)
        // $(this).closest("form").find("input[name='searchbox']").val();
        return data;  
    })
    
 }
let num = hi();
// console.log(num);
const result = [];
for(let i=1; i<= num; i++) {
if (i % 15 === 0) {
     
  result.push(`<div class="fizz-buzz-item fizzbuzz">
  <span>fizzbuzz</span>
</div>`)
}
else if (i % 5 === 0) {
     
   result.push(`<div class="fizz-buzz-item buzz">
    <span>buzz</span>
    </div>`)
}
else if (i % 3 === 0) {
     
   result.push(`<div class="fizz-buzz-item fizz">
    <span>fizz</span>
  </div>`)
}
else {
    result.push(`<div class="fizz-buzz-item">
    <span>${i}</span>
  </div>`)
}}

// function hi () {
//     $('#number-chooser').submit(function (event){
//         event.preventDefault();
//         let data = parseInt($(this).find("input[name='number-choice']").val())
//         // console.log(($(this).find("input[name='number-choice']").val()));
//         // console.log(data)
//         // $(this).closest("form").find("input[name='searchbox']").val();
//       return data;
//     })
//  }
 function returnArr(){
     $('.js-results').html(result)
 }

hi();
returnArr();