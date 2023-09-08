const wrapperBlur = document.getElementById("wrapperBlur");
const navbar = document.getElementById("navbar");
const pickDriverButton = document.getElementById('pickDriver');
const pickTimeButton = document.getElementById('pickTime');
const pickDateButton = document.getElementById('pickDate');
const pickCountPersonButton = document.getElementById('pickCountPerson');
const searchCarButton = document.getElementById('searchCarButton');
const selectOptions = document.querySelectorAll('.select-options');
let pickDriverValue = document.getElementById('pickDriver').value = '';
let pickTimeValue =  document.getElementById("pickTime").value = '';

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

pickDateButton.addEventListener('focus', function () {
    wrapperBlur.classList.add("wrapper-blur");
    navbar.style.cssText = 'z-index: 0 !important;'
});

pickCountPersonButton.addEventListener('click', function () {
    wrapperBlur.classList.add("wrapper-blur");
    navbar.style.cssText = 'z-index: 0 !important;'
});

searchCarButton.addEventListener('click', function () {
    wrapperBlur.classList.remove("wrapper-blur");
    navbar.style.zIndex = '1 !important';
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
        pickTimeValue = `${selectedValue.slice(0,2)}:00:00`;
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
