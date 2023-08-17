const product = [
{
    id : 0,
    image: 'image/gg-1.jpg',
    title: 'mars',
    price: 2,
},

{

    id: 1,
    image: 'image/ff-2.jpg',
    title: 'Sneakers',
    price:2.5
},
{
  id: 2,
  image: 'image/ee-3.jpg',
  title:'resses',
  price:4,
}
];
 const categories=[...new set(product.map((item)=>
     {return item}))]
    console.log(categories)
    let i=0 
    document.getElementById('root').innerhtml= product.map((item)=>{
        var {image,title,price}=item

        return(
        '<div class='box'>

        <div class ='img-box'>
            <img class='images' src${image}></img>


        )
    