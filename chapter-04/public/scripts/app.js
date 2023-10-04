class App{
    constructor() {
        this.baseURL = 'http://localhost:5000/cars';
        this.listCar = document.getElementById('listCar');
        this.toCreate = document.getElementById('add-button');
        this.cancelCreate = document.getElementById('cancelCreate');
        this.cancelUpdate = document.getElementById('cancelUpdate');
    }

    async init() {
        const cars =  await this.readAll()
            const render = cars.map( car => {
                const uint8ArrayData = new Uint8Array(car.image.data);
                const image = base64js.fromByteArray(uint8ArrayData);

                return new Car(
                    car.id,
                    car.name,
                    image,
                    car.size,
                    car.rentPerDay,
                    car.description,
                    car.createdAt,
                    car.updatedAt,
                    ).render();
                });

        for(let i = 0 ; i < render.length ; i++ ){
            this.listCar.innerHTML += render[i];
        }

    }

    load(){
        window.onload = async () => {
            await this.init();

            const cars =  await this.readAll()
            cars.map( car => {
                const uint8ArrayData = new Uint8Array(car.image.data);
                const image = base64js.fromByteArray(uint8ArrayData);
                new Car(
                    car.id,
                    car.name,
                    image,
                    car.size,
                    car.rentPerDay,
                    car.description,
                    car.createdAt,
                    car.updatedAt,
                    ).handleButton();
                });
        }
    }

    async readAll() {
        const response = await fetch(this.baseURL);
        const cars = await response.json();
        return cars;
    }

    async delete(id){
        const options = {
            method: "DELETE",
        };
        const response = await fetch(`${this.baseURL}/${id}` , options);
        const cars = await response.json();
    }

    navigateToCreate = () => {
        this.toCreate.onclick = () =>  {
            window.location.href = './pages/addCarPage.html';
        }
    }

    navigateAtUpdate = () => {
        this.cancelUpdate.onclick = () =>  {
            window.location.href = '../index.html';
        }
    }
    navigateAtCreate = () => {
        this.cancelCreate.onclick = () =>  {
            window.location.href = '../index.html';
        }
    }

}