

import "./CatalogFilter.scss";

export default function CatalogFilter({ onSearch, onFilter }) {
    return (
        <div className="catalog-filter">
            <div className="container">
                <div className="catalog-filter__wrapper">
                    <div className="catalog-filter__search">
                        <label htmlFor="search">Looking for</label>
                        <input type="text" id="search" placeholder="start typing here" onChange={(e) => onSearch(e.target.value)} />
                    </div>
                    <div className="catalog-filter__filter">
                        <label htmlFor="country">Or filter</label>
                        <div className="catalog-filter__buttons">
                            <button className="catalog-filter__button" onClick={() => onFilter('')}>All</button>
                            <button className="catalog-filter__button" onClick={() => onFilter('Brazil')}>Brazil</button>
                            <button className="catalog-filter__button" onClick={() => onFilter('Kenya')}>Kenya</button>
                            <button className="catalog-filter__button" onClick={() => onFilter('Colombia')}>Colombia</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}