import ReactDOM from "react-dom/client";
import GenerateCard from "./3(Myntra)/GenerateCard";
import Footer from "./3(Myntra)/Footer";
import Header from "./3(Myntra)/Header";
import info from "./3(Myntra)/info";
import { useState } from "react";

function Myntra() {
    const [arrrr, settt] = useState(info);

    const getMinPrice = (priceStr) => {
        const match = priceStr.match(/\$?(\d+)(?:-(\d+))?/);
        return match ? parseInt(match[1]) : 0;
    };
    function sorthigh() {
        const sorted = [...arrrr].sort((a, b) => getMinPrice(b.price) - getMinPrice(a.price));
        settt(sorted);
    }
    function sortlow() {
        const sorted = [...arrrr].sort((a, b) => getMinPrice(a.price) - getMinPrice(b.price));
        settt(sorted);
    }
    function removeFilters() {
        settt(info); // reset to original data
    }

    return (
        <>
            <div id="header_2">
                <button onClick={sorthigh}>Sort: Price: High-low</button>
                <button onClick={sortlow}>Sort: Price: Low-high</button>
                <button onClick={removeFilters} style={{backgroundColor:"red"}}>Remove Filters</button>
            </div>

            <div className="product-container">
                {arrrr.map((item, index) => (
                    <GenerateCard key={index} src={item.src} product={item.product} price={item.price} />
                ))}
            </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Header />
        <Myntra />
        <Footer />
    </>
);
