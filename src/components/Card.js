export default function Card(props){
    let i = props.item.length;
    console.log(i);
    return(
        <div class="card">
            <img className="card--image" src={props.item.imageUrl} />
            <div class="info">
                <p className="card--location"><img src="/images/location.svg" className="location-logo" />{props.item.location} <a href={props.item.googleMapsUrl}>View on Google Maps</a></p>
                <h2 className="card--title">{props.item.title}</h2>
                <p className="card--duration">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card--description">{props.item.description}</p>
            </div>
            <br></br>
        </div>
    );
}