class Component {
    constructor(
        name,
        type,
        year,
        rentPerDay,
        image,
        description,
        capacity,
        transmission,
    ){
        this.name = name;
        this.type = type;
        this.year = year;
        this.rentPerDay = rentPerDay;
        this.image = image;
        this.image = description;
        this.capacity = capacity;
        this.transmission = transmission;
    }

    render(){
        return `
            <div class="car-card">
                <div>
                    <img src="../${this.image}" alt= "car-image" />
                    <div class="car-card-text">
                        <h5>${this.name + ' / ' + this.type}</h5>
                        <h2>Rp ${this.rentPerDay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} / hari</h2> 
                        <blockquote>
                            ${this.description}
                        </blockquote>
                        <ul class="car-list-detail">
                            <li>
                                <img src="../images/icon/car/icon-users.png" alt="icon-image" />
                                <p>${this.capacity} orang</p>
                            </li>
                            <li>
                                <img src="../images/icon/car/icon-settings.png" alt="icon-image" />
                                <p>${this.transmission}</p>
                            </li>
                            <li>
                                <img src="../images/icon/car/icon-calendar.png" alt="icon-image" />
                                <p>Tahun ${this.year}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <button type="button">Pilih Mobil</button>
            </div>
            `
    }
}