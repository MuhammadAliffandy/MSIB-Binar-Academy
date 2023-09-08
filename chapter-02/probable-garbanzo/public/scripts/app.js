class App {

  constructor() {
    // property landing page
    this.rentCarButton = document.getElementById("rentCarButton");
    // property car finded page
    this.carContainerElement = document.getElementById("carList");
    this.searchCarButton = document.getElementById("searchCarButton");
    this.pickDriver = document.getElementById("pickDriver");
    this.pickDate = document.getElementById("pickDate");
    this.pickTime =  document.getElementById("pickTime");
    this.pickCountPerson = document.getElementById("pickCountPerson");  
  }

  async init() {
    await this.load();
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }
  
  loadingPage = () => {
      window.location.href = '../public/pages/landingPage.html'
  }

  navigateToCarPage = () => {
    this.rentCarButton.onclick = () =>  {
      window.location.href = '../pages/carFindedPage.html';
    }
  } 

  searchMachine =  () => {
    this.searchCarButton.onclick = async () => {
      
      if(this.pickDate.value != '' || this.pickTime.value != '' || this.pickCountPerson.value != ''){
        
        this.searchCarButton.style.cssText = 'background-color: #fff; border : 1px solid #0D28A6 ; color : #0D28A6 ;';
        this.searchCarButton.innerText = 'Edit';

        if( this.pickDate.value == '') {
          this.pickDate.value = new Date(Date.now());
        }

        if(this.pickTime.value ){
          this.pickTime.value = "08:00:00";
        }

        const cars = await Binar.listCars((car) => {
          if(  new Date(car.availableAt).getTime() >= new Date(`${this.pickDate.value} ${this.pickTime.value}`).getTime() && car.capacity >= this.pickCountPerson.value ){
              return car;
            }
          } 
        );

        if(cars.length == 0 ){
          this.carContainerElement.innerHTML = '<h1 class = "warning-text">Mobil yang Anda Cari Kosong</h1>';

        }else{
          Car.init(cars);
          this.carContainerElement.innerHTML = '';
          this.run();
        }

      }else{
        alert("Silahkan Diisi Semua Terlebih dahulu !!!")
      }
    }

  }

}
