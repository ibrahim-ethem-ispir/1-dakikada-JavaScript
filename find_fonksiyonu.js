//   - find -   fonksiyonu 
// aranan dizi içerisinde 
// verilen değer varsa bulup
// onu bize, döner yoksa
//    undefined döner.

const kisiler = [
    {id: 1, isim: "ethem"},
    {id: 2, isim: "osman"},
    {id: 3, isim: "isa"},
    {id: 5, isim: "ahmet"},
]

const bul = 
    kisiler.find(a => a.id === 5)

console.log(bul);