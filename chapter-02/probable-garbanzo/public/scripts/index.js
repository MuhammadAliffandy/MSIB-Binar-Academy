const pickDriverButton = document.getElementById('pickDriver');
const pickTimeButton = document.getElementById('pickTime');
const selectOptions = document.querySelectorAll('.select-options');

pickDriverButton.addEventListener('click', function () {
    selectOptions[0].style.display = selectOptions[0].style.display === 'block' ? 'none' : 'block';
    document.querySelectorAll('.select-styled')[0].style.border = '2px solid #5CB85F';
});

pickTimeButton.addEventListener('click', function () {
    selectOptions[1].style.display = selectOptions[1].style.display === 'block' ? 'none' : 'block';
    document.querySelectorAll('.select-styled')[1].style.border = '2px solid #5CB85F';
});

selectOptions[0].addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        const selectedValue = e.target.textContent;
        document.querySelectorAll('.select-styled')[0].textContent = selectedValue;
        selectOptions[0].style.display = 'none';
    }
});
selectOptions[1].addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        const selectedValue = e.target.textContent;
        document.querySelectorAll('.select-styled')[1].textContent = selectedValue;
        selectOptions[1].style.display = 'none';
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