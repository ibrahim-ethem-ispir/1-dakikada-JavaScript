// - Some Method -
// Dizideki en az bir elemanın
// istanilen şarta uyup 
// uymadığını kontrol eder ve 
// true veya false döner.

const arr = [1,2,3,14,5]

const check =
    arr.some(a => a % 7 === 0)
console.log(check);