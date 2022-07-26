export default function Card(props){
    console.log(props)
    return(

        <div class="card">
            <img className="card--image" src={props.item.imageUrl} />
            <div class="info">
                <p className="card--location"><img src="/images/location.svg" className="location-logo" />Japan <a href="">View on Google Maps</a></p>
                <h2 className="card--title">Mount Fuji</h2>
                <p className="card--duration">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="card--description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    );
}