import { useState } from "react";
import CatalogList from "../CatalogList/CatalogList";
import CatalogFilter from "../CatalogFilter/CatalogFilter";
import { data } from "../../data";

import './Catalog.scss';

export default function Catalog() {

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
                    <CatalogFilter searchTerm={searchTerm} onSearch={setSearchTerm} onFilter={setFilter} />
                    <CatalogList data={searchData} />
                </div>
            </div>
        </section>
    )
}