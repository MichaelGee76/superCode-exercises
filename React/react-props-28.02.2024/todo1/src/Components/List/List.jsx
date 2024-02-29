import Item from "../Item/Item";
import "./List.css";

const List = () => {
    const data = [{ title: "Lear " }, { title: "Send Email" }, { title: "Buy Finish Assigmment" }, { title: " Write blog " }, { title: "Bake cake " }];
    return (
        <div>
            <h2>Todo</h2>
            <ul>
                {/* geschweifte klammer weil js in html */}

                <Item title={data[0].title} />
                <Item title={data[1].title} />
                <Item title={data[2].title} />
                <Item title={data[3].title} />
                <Item title={data[4].title} />
            </ul>
        </div>
    );
};

export default List;
