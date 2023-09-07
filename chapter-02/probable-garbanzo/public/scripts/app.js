class App {

  constructor() {

    this.CarList = [];
    // property landing page
    this.rentCarButton = document.getElementById("rentCarButton");
    // property car finded page
    this.carContainerElement = document.getElementById("carList");
    this.searchCarButton = document.getElementById("searchCarButton");
    this.pickDriver = document.querySelector("#pickDriver select");
    this.pickDate = document.getElementById("pickDate");
    this.pickTime =  document.querySelector("#pickTime select");
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
      
      console.log(this.pickDate.value);
      console.log(new Date("2023-09-20T08:00:00.563Z"))
      console.log(new Date( `${this.pickDate.value}T${this.pickTime.value}.563Z`));

      Car.list.filter((car) => {
        if(  
            new Date(`${this.pickDate.value}T${this.pickTime.value}.563Z`) >= new Date(car.availableAt) && car.capacity == this.pickCountPerson.value 
          ){
          this.CarList.push(car);
        } 
      })
      
      Car.init(this.CarList);
      this.carContainerElement.innerHTML = '';
      this.run();
    }

  }

}
