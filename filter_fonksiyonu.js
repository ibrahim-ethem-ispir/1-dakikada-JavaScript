// - filter -   fonksiyonu 
// verilen şarta uyan dizi 
// elemanlarını dizi içerisinde bize
// döner eğer istenen şarta uygun
// eleman yok ise boş dizi döner.

const renkler = [
  {id: 1, ad: "kırmızı", kod: "#ff0000"},
  {id: 2, ad: "sarı", kod: "#ffc0cb"},
  {id: 3, ad: "mavi", kod: "#0000ff"},
  {id: 4, ad: "siyah", kod: "#000000"},
  {id: 5, ad: "beyaz", kod: "#ffffff"},
]

const bul = 
  renkler.filter(a => a.id > 7)

console.log(bul);