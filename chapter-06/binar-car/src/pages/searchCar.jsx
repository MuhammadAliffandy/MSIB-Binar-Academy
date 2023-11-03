import { useEffect, useContext, Fragment } from 'react';
import FooterComponent from '../component/footer_component';
import NavbarComponent from '../component/navbar_component';
import HeroSectionComponent from '../component/hero_section_component';
import SearchFormComponent from '../component/search_car_component/search_form_component';
import CarCardComponent from '../component/search_car_component/carCard_component';
import '../style/searchCar.css';
import { CarContext } from '../context/context';

const SearchCar = () => {

    const { carDataUsed , GetCarToLocalData , filteringCarData } = useContext(CarContext);

    useEffect(()=>{
        GetCarToLocalData();
        filteringCarData();
    })


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
                            carDataUsed.map((car)=>{
                                return (
                                    <Fragment key={car.id}>
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
                                    </Fragment>
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