import { ToyPreview } from "./ToyPreview"


export function ToyList({toys}) {
    return (
        <section className="toy-list">
            {!toys.length ? (
                <h1>It's empty here</h1>
            ) : (
                <ul>
                    {toys.map(toy => (
                        <li key={toy._id}>
                            <ToyPreview toy={toy}/>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}