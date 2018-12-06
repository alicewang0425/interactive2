// var cube = document.querySelector('.cube');
// var radioGroup = document.querySelector('.radio-group');
// var currentClass = '';
//
// function changeSide() {
//   var checkedRadio = radioGroup.querySelector(':checked');
//   var showClass = 'show-' + checkedRadio.value;
//   if ( currentClass ) {
//     cube.classList.remove( currentClass );
//   }
//   cube.classList.add( showClass );
//   currentClass = showClass;
// }
// // set initial side
// changeSide();
//
// radioGroup.addEventListener( 'change', changeSide );


let cube = document.querySelector('.cube')

document.addEventListener('mousemove',function(e){
  let x = window.innerWidth/2 - e.clientX
  let y = window.innerHeight/2 - e.clientY

  cube.style.transform =  'rotate3d(' + x +',' + y + ',1,45deg)'
})
