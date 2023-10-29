import { useEffect } from 'react';
import '../style/searchCar.css';

const SearchFormComponent = () => {

    useEffect(()=>{
        formAnimation();
    })


    const formAnimation = () => {
        const wrapperBlur = document.getElementById("wrapperBlur");
        const navbar = document.getElementById("navbar");
        const pickDriverButton = document.getElementById('pickDriver');
        const pickTimeButton = document.getElementById('pickTime');
        const pickDateButton = document.getElementById('pickDate');
        const pickCountPersonButton = document.getElementById('pickCountPerson');
        const searchCarButton = document.getElementById('searchCarButton');
        const selectOptions = document.querySelectorAll('.select-options');
        let pickDriverValue = document.getElementById('pickDriver').value = '';

        pickDriverButton.addEventListener('click', function () {
            selectOptions[0].style.display = selectOptions[0].style.display === 'block' ? 'none' : 'block';
            document.querySelectorAll('.select-styled')[0].style.border = '2px solid #5CB85F';
            wrapperBlur.classList.add("wrapper-blur");
            navbar.style.cssText = 'z-index: 0 !important;'
        });

        pickTimeButton.addEventListener('click', function () {
            selectOptions[1].style.display = selectOptions[1].style.display === 'block' ? 'none' : 'block';
            document.querySelectorAll('.select-styled')[1].style.border = '2px solid #5CB85F';
            wrapperBlur.classList.add("wrapper-blur");
            navbar.style.cssText = 'z-index: 0 !important;'
            
        });

        pickDateButton.addEventListener('focus', function (event) {
            event.target.type = "date";
            wrapperBlur.classList.add("wrapper-blur");
            navbar.style.cssText = 'z-index: 0 !important;'
        });

        pickCountPersonButton.addEventListener('click', function () {
            wrapperBlur.classList.add("wrapper-blur");
            navbar.style.cssText = 'z-index: 0 !important;'
        });

        searchCarButton.addEventListener('click', function () {
            wrapperBlur.classList.remove("wrapper-blur");
            navbar.style.zIndex = '';
        });

        selectOptions[0].addEventListener('click', function (e) {
            if (e.target.tagName === 'LI') {
                const selectedValue = e.target.textContent;
                document.querySelectorAll('.select-styled')[0].textContent = selectedValue;
                pickDriverValue.value = selectedValue;
                selectOptions[0].style.display = 'none !important';
            }
        });
        selectOptions[1].addEventListener('click', function (e) {
            if (e.target.tagName === 'LI') {
                const selectedValue = e.target.textContent;
                document.querySelectorAll('.select-styled')[1].textContent = `${selectedValue.slice(0,2)}:00 WIB`;
                selectOptions[1].style.display = 'none !important';
            }
        });

        document.addEventListener('click', function (e) {
            if (!pickDriverButton.contains(e.target)) {
                selectOptions[0].style.display = 'none';
                document.querySelectorAll('.select-styled')[0].style.border = '2px solid #ccc';
            }
        });

        document.addEventListener('click', function (e) {
            if (!pickTimeButton.contains(e.target)) {
                selectOptions[1].style.display = 'none';
                document.querySelectorAll('.select-styled')[1].style.border = '2px solid #ccc';
            }
        });

        document.addEventListener('click', function (e) {
            if(e.target.classList[0] == "wrapper-blur"){
                wrapperBlur.classList.remove("wrapper-blur");
                navbar.style.cssText = 'z-index: 10 !important;'
            }
        });
    }


    return (
        <>
            <div id="wrapperBlur">
                <div className="car-finded-container flex flex-xl-row flex-column ">
                    <div className="wrapper-form-item col-14 col-xl-11 row ">
                        <div className="wrapper-item col-12 col-xl-3">
                            <label htmlFor="pickDriver">Pilih Tipe Driver</label>
                            <form>
                                <div className="custom-select" id="pickDriver">
                                    <div className="select-styled">Pilih Driver</div>
                                    <ul className="select-options">
                                        <li>Dengan Sopir</li>
                                        <li>Tanpa Sopir</li>
                                    </ul>
                                </div>
                                <img id="chevronIcon" src="../src/assets/images/icon/car/icon-chevron-bold.png" alt="icon-image" />
                            </form>
                        </div>
                        <div className="wrapper-item col-12 col-xl-3">
                            <label htmlFor="pickDate" className="form-label">Tanggal</label>
                            <input id="pickDate" type="text" className="form-input form-control"
                                placeholder="Pilih Tanggal"/>
                            <img id="calendarIcon" src="../src/assets/images/icon/car/icon-calendar-bold.png" alt="icon-image" />
                        </div>
                        <div className=" wrapper-item col-12 col-xl-3">
                            <label htmlFor="pickTime">Waktu Jemput/Ambil</label>
                            <form>
                                <div className="custom-select" id="pickTime">
                                    <div className="select-styled">Pilih Waktu</div>
                                    <ul className="select-options">
                                        <li>
                                            <p>08.00</p>
                                            <p>WIB</p>
                                        </li>
                                        <li>
                                            <p>09.00</p>
                                            <p>WIB</p>
                                        </li>
                                        <li>
                                            <p>10.00</p>
                                            <p>WIB</p>
                                        </li>
                                        <li>
                                            <p>11.00</p>
                                            <p>WIB</p>
                                        </li>
                                        <li>
                                            <p>12.00</p>
                                            <p>WIB</p>
                                        </li>
                                    </ul>
                                </div>
                                <img id="clockIcon" src="../src/assets/images/icon/car/icon-clock-bold.png" alt="icon-image" />
                            </form>
                        </div>
                        <div className="wrapper-item col-12 col-xl-3">
                            <label htmlFor="pickCountPerson" className="form-label">Jumlah Penumpang (optional)</label>
                            <input type="number" id="pickCountPerson" className="form-input form-control"
                                placeholder="Jumlah Penumpang" />
                            <img id="personGroupIcon" src="../src/assets/images/icon/car/icon-users-bold.png" alt="icon-image" />
                        </div>
                    </div>
                    <div className="wrapper-button col-auto col-xl-2">
                        <button className="btn btn-success " type="submit" id="searchCarButton">Cari Mobil</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchFormComponent;