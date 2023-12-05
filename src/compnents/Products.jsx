import Product from "./Product";
import "./products.css";

function Products(props) {

    return (
        <div className="products">
            {props.productDatas.map((element, index) => {
                return (
                    <Product datas={element} id={index} clickEvent={props.clickEvent}/>
                );
            })}
        </div>
    );
}

export default Products;