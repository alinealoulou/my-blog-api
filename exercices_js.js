const produits = [
  { nom: 'Clavier', prix: 45 },
  { nom: 'Écran', prix: 320 },
  { nom: 'Souris', prix: 25 } 

];

//1.Destructuring : Extraction de valeurs d'un objet ou d'un tableau
const { nom, prix } = produits[0];
console.log(nom, prix);
//2.find : Trouver le premier élément d'un tableau qui satisfait une condition
const souris = produits.find(p => p.nom === 'Souris');
console.log(souris.prix);
//3.filter: Filtrer les éléments d'un tableau qui satisfont une condition
console.log(produits.filter(p => p.prix < 100));
// 4. Arrow function
const avecRemise = prix => prix - prix * 0.1;
console.log(avecRemise(320));