// - Concat Metodu - 
// iki veya daha fazla diziyi
// birleştirir yeni bir dizi
// olarak bize döner. 
// Var olan dizileri değiştirmez.

const a = [ 
    "mavi", "yeşil", "kırmızı" 
]
const b = [ 
    "sarı", "mor", "turuncu" 
]
const c = [
    "beyaz", "siyah", "lacivert"
]

const array = a.concat(b, c)

console.log(array);
