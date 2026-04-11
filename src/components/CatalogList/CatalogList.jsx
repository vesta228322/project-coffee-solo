import CatalogItem from "../CatalogItem/CatalogItem";

import "./CatalogList.scss";

export default function CatalogList({ data, bannerTitle, bannerClass }) {
    return (
        <div className="catalog__list">
            {data.map((item) => {
                return (
                    <CatalogItem key={item.id}
                        name={item.name}
                        price={item.price}
                        country={item.country}
                        image={item.image}
                        id={item.id}
                        bannerTitle={bannerTitle}
                        bannerClass={bannerClass} />
                )
            })}
        </div>
    )
}