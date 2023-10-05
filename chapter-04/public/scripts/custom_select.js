
const pickSizeButton = document.getElementById('pickSize');
const selectOptions = document.querySelector('.select-options');
let pickSizeValue =  document.getElementById("pickSize").value = '';


pickSizeButton.addEventListener('click', function () {
    selectOptions.style.display = selectOptions.style.display === 'block' ? 'none' : 'block';
    document.querySelector('.select-styled').style.border = '2px solid #5CB85F';
    
});

selectOptions.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        const selectedValue = e.target.textContent;
        document.querySelector('.select-styled').textContent = selectedValue;
        document.getElementById("pickSize").value = selectedValue;
        selectOptions.style.display = 'none !important';
    }
});

document.addEventListener('click', function (e) {
    if (!pickSizeButton.contains(e.target)) {
        selectOptions.style.display = 'none';
        document.querySelector('.select-styled').style.border = '2px solid #ccc';
    }
});



