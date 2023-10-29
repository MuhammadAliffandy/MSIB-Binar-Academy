import { useState , useEffect } from 'react';
import FooterComponent from '../component/footer_component';
import NavbarComponent from '../component/navbar_component';
import HeroSectionComponent from '../component/hero_section_component';
import SearchFormComponent from '../component/search_form_component';
import CarCardComponent from '../component/carCard_component';
import '../style/searchCar.css';

const SearchCar = () => {

    const [ carArray , setCarArray ] = useState([]);

    useEffect(()=>{
        GetCarToLocalData();
        filteringCarData();
    })

    const reqGetCars =  async () => {
        try {
            const options = {
                method : 'GET'
            }
            const response = await fetch('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json', options);
            const data = response.json(); 
            return data;
        } catch (error) {
            return error;
        }
    }

    const GetCarToLocalData = () => {
        reqGetCars().then((data)=>{
            setCarArray(data);
        })
    }

    const filteringCarData = () => {

        const carContainerElement = document.getElementById("carList");
        const searchCarButton = document.getElementById("searchCarButton");
        const pickDate = document.getElementById("pickDate");
        const pickTime =  document.getElementById("pickTime");
        const pickCountPerson = document.getElementById("pickCountPerson");  

        searchCarButton.onclick = async () => {
            if(pickDate.value != '' || pickTime.value != '' || pickCountPerson.value != ''){
            
                searchCarButton.style.cssText = 'background-color: #fff; border : 1px solid #0D28A6 ; color : #0D28A6 ;';
                searchCarButton.innerText = 'Edit';

                if( pickDate.value == '') {
                    pickDate.value = new Date(Date.now());
                }

                if(pickTime.value == ''){
                    pickTime.value = "08:00:00";
                }

                const cars = carArray.filter((car) => {
                    // new Date(car.availableAt).getTime() >= new Date(`${pickDate.value} ${pickTime.value}`).getTime() &&
                        if(  car.capacity >= pickCountPerson.value ){
                            return car;
                        }
                    } 
                );

                if(cars.length == 0 ){
                    carContainerElement.innerHTML = '<h1 class = "warning-text">Mobil yang Anda Cari Kosong</h1>';

                }else{
                    setCarArray(cars);
                }

            }else{
                alert("Silahkan Diisi Semua Terlebih dahulu !!!")
            }
        }
        
    }

    return(
        <>
            <NavbarComponent />
            <main>
                {/* hero section */}
                <HeroSectionComponent 
                    buttonDisplay = 'false'
                />
                {/* car finded container */}
                <section className="car-finded-section">
                    <SearchFormComponent/>
                    {/* inject dom car list */}
                    <div className="car-list" id="carList">
                        {
                            carArray.map((car)=>{
                                return (
                                    <>
                                        <CarCardComponent
                                            image = {car.image}
                                            name = {car.manufacture}
                                            type = {car.type}
                                            rentPerDay = {car.rentPerDay}
                                            description = {car.description}
                                            capacity = {car.capacity}
                                            transmission = {car.transmission}
                                            year = {car.year}
                                        />
                                    </>
                                )
                            })
                        }
                    </div>
                </section>
            </main>
            {/* footer */}
            <FooterComponent />
        </>
    );
}

export default SearchCar;