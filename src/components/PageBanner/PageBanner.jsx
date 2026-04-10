
import './PageBanner.scss';

export default function PageBanner({ title, bgClass }) {
    return (
        <div className={`page-banner ${bgClass}`}>
            <h1 className="page-banner__title">{title}</h1>
        </div>
    )
}