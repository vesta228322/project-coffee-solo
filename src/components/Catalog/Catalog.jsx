import { useState } from "react";
import CatalogList from "../CatalogList/CatalogList";
import CatalogFilter from "../CatalogFilter/CatalogFilter";
import coffe from "../../assets/img/our-best/aromistico.png";

import './Catalog.scss';

export default function Catalog() {

    const data = [
        { name: "AROMISTICO Coffee 1 kg", price: "6.99$", country: "Brazil", image: coffe },
        { name: "AROMISTICO Coffee 1 kg", price: "6.99$", country: "Kenya", image: coffe },
        { name: "AROMISTICO Coffee 1 kg", price: "6.99$", country: "Colombia", image: coffe },
        { name: "AROMISTICO Coffee 1 kg", price: "6.99$", country: "Brazil", image: coffe },
        { name: "AROMISTICO Coffee 1 kg", price: "6.99$", country: "Brazil", image: coffe },
        { name: "AROMISTICO Coffee 1 kg", price: "6.99$", country: "Brazil", image: coffe },
    ]

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
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    })

    return (
        <section className="catalog">
            <div className="container">
                <div className="catalog__wrapper">
                    <CatalogFilter onSearch={setSearchTerm} onFilter={setFilter} />
                    <CatalogList data={searchData} />
                </div>
            </div>
        </section>
    )
}