/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { generateRandomTime } from "../lib/randomTime";

export const CarContext = createContext();

const CarContextProvider = (props) => {

    const [ carData , setCarData  ] = useState([]);

    const reqGetCars =  async () => {
        try {
            const options = {
                method : 'GET'
            }
            const response = await fetch('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json', options);
            const data = await response.json(); 
            return data;
        } catch (error) {
            return error;
        }
    }

    const GetCarToLocalData = () => {
        if(carData.length <= 0  ){
            reqGetCars().then((data)=>{

                data.map((car)=>{
                    return car.availableAt = generateRandomTime();
                });
    
                setCarData(data);
            })
        }else{
            return carData;
        }
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
                document.getElementById("wrapperBlur").classList.remove("wrapper-blur");
                document.getElementById("navbar").style.zIndex = '';
                searchCarButton.innerText = 'Edit';

                if( pickDate.value == '') {
                    pickDate.value = new Date(Date.now());
                }

                if(pickTime.value == null){
                    pickTime.value = "08:00:00";
                }

                const cars = carData.filter((car) => {
                    if( new Date(car.availableAt).getTime() >= new Date(`${new Date(pickDate.value).toISOString().split('T')[0]}T${pickTime.value}Z`).getTime() && car.capacity >= pickCountPerson.value ){
                            return car;
                        }
                    } 
                );

                if(cars.length == 0 ){
                    carContainerElement.innerHTML = '<h1 class = "warning-text">Mobil yang Anda Cari Kosong</h1>';

                }else{
                    setCarData(cars);
                }

            }else{
                alert("Silahkan Diisi Semua Terlebih dahulu !!!")
            }
        }
        
    }

    return(
        <CarContext.Provider value={{ carData, GetCarToLocalData , filteringCarData}}>
            {props.children}
        </CarContext.Provider>
    ) 
}

export default CarContextProvider;