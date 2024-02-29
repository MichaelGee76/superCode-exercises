import "./Item.css";

const Item = (props) => {
    return (
        <>
            {/* geschweifte klammer weil js in html */}
            {/* Hier wird ein li element gebaut. props ist platzhalter für array */}
            <li>{props.title}</li>
        </>
    );
};

export default Item;
