function Card({ image, stats = [], name }) {
    return (<div className="Card">
        <div className="card">
            <img src={image} />
            <div className="details">
                <h4>{name}</h4>
                <ul>
                    {stats.map(({ base_stat, stat }) => (
                        <li>{stat.name}: {base_stat}</li>

                    ))}
                </ul>
            </div>
        </div>
    </div>)
}
export default Card