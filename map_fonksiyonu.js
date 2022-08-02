// - map - fonksiyonu
// dize içerisinde geçen her bir
// elemanı gezerek istenilen işlemi 
// yapar ve tekrar bir dizi olarak
// döndürür.

const myList = [1, 2, 3, 4, 5];
const data = [
    { name: "test1", age: "27" },
    { name: "test2", age: "35" },
    { name: "test3", age: "49" },
    { name: "test4", age: "53" },
]

const multply = 
    myList.map(item => item * 3)
console.log(multply);

const dataMap = 
    data.map(item => item.age)

console.log(dataMap);
