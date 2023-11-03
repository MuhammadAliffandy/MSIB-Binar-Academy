/* eslint-disable react/prop-types */
import '../../style/searchCar.css';

const CarCardComponent = (props) => {
    return (
        <>
            <div className="car-card">
                <img src={`../src/assets/${props.image}`} alt= "car-image" />
                <div>
                    <div className="car-card-text">
                        <h5>{props.name + ' / ' + props.type}</h5>
                        <h2>Rp {props.rentPerDay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} / hari</h2> 
                        <blockquote>
                            {props.description}
                        </blockquote>
                        <ul className="car-list-detail">
                            <li>
                                <img src="/static/images/icon/car/icon-users.png" alt="icon-image" />
                                <p>{props.capacity} orang</p>
                            </li>
                            <li>
                                <img src="/static/images/icon/car/icon-settings.png" alt="icon-image" />
                                <p>{props.transmission}</p>
                            </li>
                            <li>
                                <img src="/static/images/icon/car/icon-calendar.png" alt="icon-image" />
                                <p>Tahun {props.year}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <button type="button">Pilih Mobil</button>
            </div>
        </>
    )
}

export default CarCardComponent;