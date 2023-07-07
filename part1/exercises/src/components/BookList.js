export default function BookList() {
   let pageTitle = "WritersDelight";
   let book1 = "https://qph.cf2.quoracdn.net/main-qimg-5db903a1587d1ba13715ff5d0b03ea3b-lq";
   let book2 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1492591566i/28872275.jpg";
   let book3 = "https://cdn-ed.versobooks.com/images/000007/201/9781784783525-0d8615dfe875d3fcb68c16dd11511b59.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Velpari by Su.Venkatesan" />
         <img src={book2} alt="Kutraparambarai by Vela Ramamurthy" />
         <img src={book3} alt="Anhilation of Caste by Dr.B.R.Ambedkar" />
      </div>      
   );
}