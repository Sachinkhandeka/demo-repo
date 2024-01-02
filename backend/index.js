
const arr = [1,2,3,4,5];

const map = (arr ,fn)=> {
    const transform = [];
    for(let i =0 ;i<arr.length;i++) {
        transform.push(fn(arr[i]));
    }
    return transform ; 
}

console.log("this is trial phase!!");