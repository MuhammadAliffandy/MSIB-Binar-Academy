class Car {
    constructor(
        id,
        name,
        image,
        size,
        rentPerDay,
        description,
        createdAt,
        updatedAt,
    ){
        this.id = id,
        this.name = name ,
        this.image = image,
        this.size = size,
        this.rentPerDay = rentPerDay,
        this.description = description,
        this.createdAt = createdAt,
        this.updatedAt = this.convertDate(updatedAt)
    }

    handleButton = () =>  {
        document.getElementById(`del${this.id}`).addEventListener("click",
        async (e)=>{
            await new App().delete(this.id);
            document.getElementById('listCar').innerHTML = '';
            new App().init();
        })

        document.querySelectorAll('.edit-button').forEach(element => {
            element.onclick = () =>  {
                sessionStorage.setItem('data', this.id);
                window.location.href = './pages/updateCarPage.html';
            }
        });
    }

    convertDate = (data) => {
        const dateObject = new Date(data);

        const months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];
        const year = dateObject.getFullYear();
        const month = dateObject.getMonth();
        const day = dateObject.getDate();
        const hours = dateObject.getHours();
        const minutes = dateObject.getMinutes()
        const formattedDate = `${day} ${months[month]} ${year}, ${hours.toString().padStart(2, '0')}.${minutes.toString().padStart(2, '0')}`;
        console.log(formattedDate)
        return formattedDate;
    }

    render(){

        return `
        <div class="car-card">
            <div class="wrap-img">
                <img class="car-img" src="data:image/jpeg;base64,${this.image}" alt="car-images"/>
            </div>
            <div class="car-detail">
                <div class="car-text">
                    <p>${this.name}</p>
                    <h4>Rp ${this.rentPerDay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} / hari</h4>
                </div>
                <div class="car-date">
                    <img src="./assets/icon/clock.png" alt="clock-icon" /> 
                    <p>Updated at ${this.updatedAt}</p>
                </div>
            </div>
            <div class="wrap-button">
                <button class="del-button" type="button" id="del${this.id}">
                    <img src="./assets/icon/trash.png" alt="delete-icon"  /> 
                    <p>Delete</p>
                </button>
                <button class="edit-button" type="button">
                    <img src="./assets/icon/edit.png" alt="edit-icon" />
                    <p>Edit</p>
                </button>
            </div>
        </div>`;
    }

}