import ProductItem from "../Components/ProductItem/ProductItem";

import "./Home.css";

const Home = () => {
    const arr = [
        {
            name: "Coco Oil",
            price: "10$",
            img: "./public/coco.jpg",
            alt: "It's Coco Oil",
        },
        {
            name: "Fish Oil",
            price: "20$",
            img: "./public/coco.jpg",
            alt: "It's fisho Oil",
        },
        {
            name: "Dog Oil",
            price: "100$",
            img: "./public/coco.jpg",
            alt: "It's dogo Oil",
        },
    ];
    return (
        <>
            <div className="container">
                <ProductItem img={arr[0].img} name={arr[0].name} price={arr[0].price} alt={arr[0].alt} />
                <ProductItem img={arr[1].img} name={arr[1].name} price={arr[1].price} alt={arr[1].alt} />
                <ProductItem img={arr[2].img} name={arr[2].name} price={arr[2].price} alt={arr[2].alt} />
            </div>
        </>
    );
};

export default Home;
