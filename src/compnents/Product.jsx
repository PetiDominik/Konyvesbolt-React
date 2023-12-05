import "./product.css";

function Product(props) {

    function clicked() {
        props.clickEvent(props);
    }

    return (
        <div className="Product" id={props.id}>
            <div className="p-head">
            {props.datas.title}
            </div>
            <div className="p-body">
                <p>{props.datas.writer}</p>
                <p>{props.datas.price}</p>
            </div>
            <div className="p-footer">
                <button onClick={clicked}>Klikkelj rám!</button>
            </div>
        </div>
    );
}

export default Product;