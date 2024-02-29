import "./ProductItem.css";

const ProductItem = (props) => {
    return (
        <>
            <div className="tile">
                <img src={props.img} alt={props.alt} />
                <h3>{props.name}</h3>
                <p>{props.price}</p>
                <a href="#">Buy now</a>
            </div>
        </>
    );
};

export default ProductItem;
