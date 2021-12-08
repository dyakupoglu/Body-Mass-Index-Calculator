let weight = document.querySelector(`#weight`);
let height = document.querySelector(`#height`);
let calc = document.querySelector(`#data`);

calc.addEventListener("click", function () {
    let mHeight = height.value/100;
    const bmi = weight.value/(Math.pow(mHeight,2));
    
    if(bmi<18.5) {
        return alert(`Your Body Mass Index is: ${bmi}, Your values are low.`);
    }
    if(bmi>= 18.5 && bmi <= 24.9) {
        return alert(`Your Body Mass Index is: ${bmi}, Your values are normal.`);
    }
    if(bmi>= 25.0 && bmi <= 29.9) {
        return alert(`Your Body Mass Index is: ${bmi}, You are overweight.`);
    }
    if(bmi>= 30) {
        return alert(`Your Body Mass Index is: ${bmi}, You are very overweight.`);
    }
    else {
        return alert("Please Check the Entered Values");
    }
    weight.value = "";
    height.value = "";
});