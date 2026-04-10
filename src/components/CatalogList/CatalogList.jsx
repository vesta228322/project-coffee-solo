import CatalogItem from "../CatalogItem/CatalogItem";

import "./CatalogList.scss";

export default function CatalogList({ data }) {
    return (
        <div className="catalog__list">
            {data.map((item, i) => {
                return (
                    <CatalogItem key={i} name={item.name} price={item.price} country={item.country} image={item.image} />
                )
            })}
        </div>
    )
}