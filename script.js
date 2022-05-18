function Div(n) {
    if (n%21==0) {
        console.log("this number can be divided by 3 and 7");
    }
    else{
        console.log("this number cannot be divided by 3 and 7");
    }
}
Div(43)

function Even(array) {
    let result=0;
    array.forEach((num)=>{

        if(num%2==0){
            num*=num
            result+=num
        };
    });
    return result;
}
console.log(Even([1,2,3,4,5,6]));