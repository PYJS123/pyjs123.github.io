// // Keep track of background colour
// let color = [57, 173, 57];
//
// // Noiseval for noise()
// let noiseVal = 0;
//
// window.onload = function() {
//   // Constantly moving background colour
//   setInterval(() => {
//     document.body.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
//     for (let i = 0; i < color.length; i++) {
//       color[i] = constrain(color[i]+(noiseVal * Math.random()), 0, 255);
//     }
//     noiseVal = constrain(noiseVal+(Math.random()*2)-1, -1, 1);
//     // if (avg(color) < 127 && document.getElementsByClassName('underlined-header')[0].style.color == '') {
//     //   for (let elt in document.getElementsByClassName('underlined-header')) {
//     //     elt.style.color = 'white';
//     //   }
//     // } else if (avg(color) > 127 && document.getElementsByClassName('underlined-header')[0].style.color == 'white') {
//     //   for (let elt in document.getElementsByClassName('underlined-header')) {
//     //     elt.style.color = '';
//     //   }
//     // }
//     console.log(document.getElementsByClassName('underlined-header'));
//   }, 1000/60);
// }
//
// function constrain(num1, num2, num3) {
//   if (num1 < num2) {return num2;}
//   if (num1 > num3) {return num3;}
//   return num1;
// }
//
// function avg(list) {
//   let total = 0;
//   for (let i = 0; i < list.length; i++) {
//     total += list[i];
//   }
//   return total/list.length;
// }
