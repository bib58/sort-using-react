function GenerateCard(props) {
    return (
        <div className="card">
            <img src={props.src} draggable="false" />
            <div className="card-info">
                <h3>{props.product}</h3>
                <p>{props.price}</p>
                <div className="bh"><button className="add-btn"> Add to <i className="fas fa-shopping-cart"></i></button></div>
            </div>
        </div>
    );
}

export default GenerateCard;