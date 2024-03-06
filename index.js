// console.log("hii")

// // sum=(a, b)=>{
// //    console.log( a+b)
// //    console.log(a)
// //    console.log(b)
// // }

// // sum(1,5)
// //----------------------------------------
// //find maximum

//     findMax =()=>{
//         if(numbers.length ===0){
//                 return null
                
//             }
//             let max = numbers[0]
//             for(let i=1; i< numbers.length;i++){
//                 if(numbers[i] >max){
//                     max = numbers[i]
//                 }
//             }
//             return max
//         }
//         const numbers =[1,4,5,1,2,5,6,2]
//     const maxNumber = findMax(numbers)
//     console.log(maxNumber,"maxx")

//     //----------------------------------------
// //find minimum

// const numberss = [4,5,2,5,6,7.7,9,6,2]

// findMin=()=>{
//     if(numberss.length ===0){
//         return null;
//     }
//         let min =numberss[0]
//         for(let i=1; i<numberss.length;i++){
//             if(numberss[i]<min){
//                 min=numberss[i];
//             }
//         }
//         return min
//     }
// // const numberss = [4, 5, 2, 5, 6, 7.7, 9, 6, 2];

// // findMin = () => {
// //     if (numberss.length === 0) {
// //         return null;
// //     }

// //     let min = numberss[0];
// //     for (let i = 1; i < numberss.length; i++) {
// //         if (numberss[i] < min) {
// //             min = numberss[i];
// //         }
// //     }
// //     return min;
// // }

// const minNumber =findMin(numberss)
// console.log(minNumber,'min')
// //--------------------------------------------

// // const marks = [33,44,55,66,22,88]


// // calulateSum =()=>{
// //     let sum =0;

// //     for(let i=0;i<marks.length;i++){
// //         sum+= marks[i]
// //     }
// //     return sum
// // }
// // const sum = calulateSum()
// // const average = sum/marks.length

// // console.log("avg:", average)
// //-------------------------------------------------

// const marks =[77,56,77,38,90]

// avgCalculation=()=>{
//     let sum = 0;
    
//     for(let i=0; i<marks.length;i++){
//         sum+= marks[i]
//     }
//     return sum;
// }

// const sum= avgCalculation()
// const average= sum/marks.length
// console.log(average)

// //---------------------------------


    const counter={
        value :0,
        
        updateCounter: function(){
            document.getElementById('counterValue').value=this.value
        },

        increment: function(){
            this.value++
            this.updateCounter()
        },

        decrement: function(){
        if(this.value>0)  { 
            this.value--
    this.updateCounter()   }},

        reset: function(){
            this.value=0
    this.updateCounter()    }


    }
    counter.updateCounter();


    document.getElementById("incrementBtn").addEventListener('click', ()=>counter.increment())
    document.getElementById("decrementBtn").addEventListener('click', ()=>counter.decrement())
    document.getElementById("resetBtn").addEventListener('click', ()=>counter.reset())
//--------------------------------------------------------------------------------------------------------------
      //stopwatch
      let stopwatchInterval;
let stopwatchSeconds = 0;
let stopwatchMinutes = 0;
let stopwatchHours = 0;

const startStopwatch = () => {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
}

const stopStopwatch = () => {
    clearInterval(stopwatchInterval);
}

const resetStopwatch = () => {
    clearInterval(stopwatchInterval);
    stopwatchSeconds = 0;
    stopwatchMinutes = 0;
    stopwatchHours = 0;
    updateStopwatch();
}

const updateStopwatch = () => {
    stopwatchSeconds++;
    if (stopwatchSeconds >= 60) {
        stopwatchSeconds = 0;
        stopwatchMinutes++;
        if (stopwatchMinutes >= 60) {
            stopwatchMinutes = 0;
            stopwatchHours++;
        }
    }

    const formattedTime = `${(stopwatchHours < 10 ? "0" : "") + stopwatchHours}:${(stopwatchMinutes < 10 ? "0" : "") + stopwatchMinutes}:${(stopwatchSeconds < 10 ? "0" : "") + stopwatchSeconds}`;
    document.getElementById('display').textContent = formattedTime;
}

document.getElementById('startWatch').addEventListener('click', startStopwatch);
document.getElementById('stopWatch').addEventListener('click', stopStopwatch);
document.getElementById('ResetWatch').addEventListener('click', resetStopwatch);

    //     let stopwatchInterval;
    //     let stopwatchSeconds=0;
    //     let stopwatchMinutes=0;
    //     let stopwatchHours=0;
  
    
    //    const startStopwatch=()=>{
    //         stopwatchInterval = setInterval(updateStopwatch,1000)
    //     }

    //    const stopStopwatch =()=>{
    //         clearInterval(stopwatchInterval)
    //     }

    //    const resetStopwatch=()=>{
    //         clearInterval(stopwatchInterval)
    //         stopwatchMinutes=0
    //         stopwatchHours=0
    //         stopwatchSeconds=0
    //         updateStopwatch()
    //     }

    //     const updateStopwatch =()=>{
    //         stopwatchSeconds++;
    //         if(stopwatchSeconds>=60){
    //             stopwatchSeconds=0
    //             stopwatchMinutes++}
    //            else if(stopwatchMinutes>=60){
    //                 stopwatchMinutes =0
    //                 stopwatchHours++
    //             }
            
    //     }

    //     const formattedTime = `${(stopwatchHours < 10 ? "0" : "") + stopwatchHours}:${(stopwatchMinutes < 10 ? "0" : "") + stopwatchMinutes}:${(stopwatchSeconds < 10 ? "0" : "") + stopwatchSeconds}`;

    //     document.getElementById('display').textContent   = formattedTime;
    //     document.getElementById('startWatch').addEventListener('click', startStopwatch)
    //     document.getElementById('stopWatch').addEventListener('click', stopStopwatch)   
    //     document.getElementById('ResetWatch').addEventListener('click', resetStopwatch)
        
//-----------------------------------------------------------------------------------------------------------------
    showCounter=()=>{
        document.getElementById('counter').style.display ='block'
        document.getElementById('stopwatch').style.display ='none'
        document.getElementById('calender').style.display ='none'
    }

    showStopwatch=()=>{
        document.getElementById('counter').style.display ='none'
        document.getElementById('stopwatch').style.display ='block'
        document.getElementById('calender').style.display ='none'
    }

    showCalender =()=>{
        document.getElementById('counter').style.display ='none'
        document.getElementById('stopwatch').style.display ='none'
        document.getElementById('calender').style.display ='block'
    }