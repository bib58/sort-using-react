function GenerateCard(props) {
    return (
        <div className="card">
            <img src={props.src} draggable="false" />
            <div className="card-info">
                <h3>{props.product}</h3>
                <p>{props.price}</p>
            </div>
        </div>
    );
}

export default GenerateCard;