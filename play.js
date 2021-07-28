// let name = 'max';
// let age = 21;
// let hobbies = 'true';

// name = 'dinesh';

// let HasHobbies = (userName, userAge, userHobbies)=>{
//     return ("name is " +
//     userName + " with age " +
//     userAge + " has a hobbies: " +
//     userHobbies)
// };

// let add = (a, b)=> a + b;
// console.log(add(3, 4));

// console.log(HasHobbies(name, age, hobbies));


// const person = {
//     name: 'dinesh tamang',
//     age: 21,
//     work(){
//         console.log('hi, i am ' + this.name);
//     }
// };
// person.work();

//console.time("array time")

// const hobbies = ["cooking", "sleeping", 12, "swimming"];
// console.table(hobbies);

// for(let i = 0; i<5; i++){
//     if(i === 3){
//         //continue
//         break
//     } else {
//         console.log(i);
//     }
// }

//let names = ['mary', 'john', 'joe', 'max'];
// for(name of names){
//     console.log(name);
// }

// for(let i=0;i<names.length;i++){
//     console.log(names[i]);
// }

// names.forEach(i=>{
//     console.log(i);
// });

// for(let name of names){
//     document.querySelector("h1").innerHTML = name;
// }

// console.timeEnd("array time")

// console.time("code running time");
// const waterContainerHeights = [7, 59, 2, 3, 9, 22, 18, 8];

// const getMaxWaterContainer = function(heights){
//     let p1 =0, p2 = heights.length -1, maxArea = 0;
//     console.log({p1, p2, maxArea})
//     while(p1<p2){
//         console.log({p1, p2})
//         const height = Math.min(heights[p1], heights[p2]);
//         const width = p2 - p1;
//         const area = height * width;
//         console.log({height, width, area})
//         maxArea = Math.max(maxArea, area);
//         console.log({maxArea})
//         if(p1<=p2){
//             p1++;
//         } else {
//             p2--;
//         }
//     } return maxArea;
// }

// console.log(getMaxWaterContainer(waterContainerHeights));
// console.timeEnd("code running time");
