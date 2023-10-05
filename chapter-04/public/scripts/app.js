class App{
    constructor() {
        this.baseURL = 'http://localhost:5000/cars';
        this.listCar = document.getElementById('listCar');
        // 
        this.toCreate = document.getElementById('add-button');
        this.cancelCreate = document.getElementById('cancelCreate');
        this.cancelUpdate = document.getElementById('cancelUpdate');
        this.saveCreate = document.getElementById('saveCreate');
        this.saveUpdate = document.getElementById('saveUpdate');
        // 
        this.name = document.getElementById('name');
        this.rentPerDay = document.getElementById('rentPerDay');
        this.size = document.getElementById("pickSize");
        this.image = document.getElementById('file-input');
    }

    init = async () => {
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

    load = () => {
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

    /**
     * Algorithm to fetch API
     */

    readAll = async () => {
        const response = await fetch(this.baseURL);
        const cars = await response.json();
        return cars;
    }

    create = async(data) => {
        try {

            const response = await fetch(`${this.baseURL}`,{ 
                method: "POST",
                body: data ,
            });
        
            const result = await response.json();
            console.log("Success:", result);
            } catch (error) {
                console.error("Error:", error);
            }
    }

    update = async(data , id) => {
        try {

            const response = await fetch(`${this.baseURL}/${id}`,{ 
                method: "PUT",
                body: data ,
            });
        
            const result = await response.json();
            console.log("Success:", result);
            } catch (error) {
                console.error("Error:", error);
            }
    }

    delete = async (id) => {
        const options = {
            method: "DELETE",
        };
        const response = await fetch(`${this.baseURL}/${id}` , options);
        const cars = await response.json();
    }

    /**
     * Handle DOM Manipulation button form to send data at API 
     */

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

    handleSavedCreate = () => {

        
        this.saveCreate.onclick = () => {

            const name = this.name.value;
            const rentPerDay = this.rentPerDay.value;
            const size = this.size.value;
            const image = this.image.files[0];
            
            const formData = new FormData();

            formData.append('data', JSON.stringify({
                name: name,
                rentPerDay:rentPerDay,
                size :size
            }))

            formData.append('car-image', image , 'image.jpg');
            
            this.create(formData);
            
            window.location.href = '../index.html';
        }
    }
    
    handleSavedUpdate = () => {
        this.saveUpdate.onclick = () => {

            const id = sessionStorage.getItem('data');
            const name = this.name.value;
            const rentPerDay = this.rentPerDay.value;
            const size = this.size.value;
            const image = this.image.files[0];
            
            const formData = new FormData();

            if(rentPerDay == '' && size == ''){
                formData.append('data', JSON.stringify({
                    name: name,
                }));
            }else if(rentPerDay == '' && name == ''){
                formData.append('data', JSON.stringify({
                    size :size
                }));
            }else if(size == '' && name == ''){
                formData.append('data', JSON.stringify({
                    rentPerDay : rentPerDay,
                }));
            }else if(size != '' && name != '' && rentPerDay != ''){
                formData.append('data', JSON.stringify({
                    name: name,
                    rentPerDay:rentPerDay,
                    size :size
                }));
            }else{
                alert('Masukkan data yang akan di update ! ! !')
            }

            console.log(image)
            
            if(image != null){
                formData.append('car-image', image , 'image.jpg');
            }

            this.update(formData , id);

            window.location.href = '../index.html';
        }
    }

}