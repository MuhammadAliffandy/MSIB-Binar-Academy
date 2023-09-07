class App {

  constructor() {

    this.CarList = [];
    // property landing page
    this.rentCarButton = document.getElementById("rentCarButton");
    // property car finded page
    this.carContainerElement = document.getElementById("carList");
    this.searchCarButton = document.getElementById("searchCarButton");
    this.pickDriver = document.getElementById("pickDriver");
    this.pickDate = document.getElementById("pickDate");
    this.pickTime = document.getElementById("pickTime");
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
    window.onload = () => {
      window.location.href = '../public/pages/landingPage.html'
    }
  }

  navigateToCarPage = () => {
    this.rentCarButton.onclick = () =>  {
      window.location.href = '../pages/carFindedPage.html';
    }
  } 

  searchMachine =  () => {
    this.searchCarButton.onclick = async () => {

      this.searchCarButton.style.backgroundColor = '#fff';
      this.searchCarButton.style.border = '1px solid #0D28A6';
      this.searchCarButton.style.color = '#0D28A6';
      this.searchCarButton.innerText = 'Edit';

      await this.load();
      this.CarList = [];

      Car.list.filter((car) => {
        if( car.capacity == this.pickCountPerson.value ){
          this.CarList.push(car);
        } 
      })
      
      Car.init(this.CarList);
      this.carContainerElement.innerHTML = '';
      this.run();
    }

  }

}
