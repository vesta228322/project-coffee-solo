import { useState } from "react";
import CatalogList from "../CatalogList/CatalogList";
import CatalogFilter from "../CatalogFilter/CatalogFilter";
import { data } from "../../data";

import './Catalog.scss';

export default function Catalog({ hasFilter, bannerTitle, bannerClass }) {

    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');

    const filterData = data.filter(item => {
        if (filter === '') {
            return true;
        }
        return item.country === filter;
    })

    const searchData = filterData.filter(item => {
        if (searchTerm === '') {
            return true;
        }
        return item.country.toLowerCase().includes(searchTerm.toLowerCase());
    })

    return (
        <section className="catalog">
            <div className="container">
                <div className="catalog__wrapper">
                    {hasFilter && <CatalogFilter searchTerm={searchTerm} onSearch={setSearchTerm} onFilter={setFilter} />}
                    <CatalogList data={searchData} bannerTitle={bannerTitle} bannerClass={bannerClass} />
                </div>
            </div>
        </section>
    )
}