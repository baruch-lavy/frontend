


export function toyList({toys}) {
    return (
        <section className="toy-list">
            {! toys.length ? (
                <h1>It's empty here</h1>
            ) : (
                <ul>
                    {toys.map(toy => (
                        <li key={toy._id}>
                            <toyPreview toy={toy}/>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}