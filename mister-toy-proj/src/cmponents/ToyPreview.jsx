import { useState } from "react";

export function ToyPreview({ toy }) {
    const [isImgLoading, setIsImgLoading] = useState(true)

    function handleImgLoad() {
        setIsImgLoading(false)
    }

    return (
        <article className="toy-preview">
            <h1 className="toy-name">{toy.name}</h1>
            {isImgLoading && <div className="skeleton-loader">Loading Photo...</div>}
            <div className="img=container">
                <img
                 src={`https://robohash.org/${toy.name}?set=set4`}
                 alt={toy.name}
                 onLoad={handleImgLoad}
                 style={{display: isImgLoading ? 'none' : 'block'}}
                 />
            </div>
            <h1>Price:{toy.price}$</h1>
            <h1 style={{width:20 , height:20 , backgroundColor : toy.inStock ? "green" : 'red'}}></h1>
        </article>
    )
}