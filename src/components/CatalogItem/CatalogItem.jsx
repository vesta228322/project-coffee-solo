
import { Link } from "react-router-dom";
import "./CatalogItem.scss";

export default function CatalogItem({ name, price, country, image, id, bannerTitle, bannerClass }) {
    return (
        <Link to={`/product/${id}`}
            state={{
                title: bannerTitle,
                bgClass: bannerClass
            }}>
            <div className="catalog-item">
                <img src={image} alt={name} />
                <div className="catalog-item__content">
                    <h3 className="catalog-item__name">{name}</h3>
                    <p className="catalog-item__price">{price}</p>
                    <p className="catalog-item__country">{country}</p>
                </div>
            </div>
        </Link>
    )
}