// ABOUT
const tabBtn = document.querySelectorAll(".tabPic");
const tabItems = document.querySelectorAll(".infa");

tabBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        tabBtn.forEach(function(item) {
            item.classList.remove('active');
        });

    tabItems.forEach(function(item) {
        item.classList.remove('active');
        });

        currentBtn.classList.add('active');
       currentTab.classList.add('active');
    });

});

// MORTAGE
function count(){
    var num1, num2, num3, result;
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);
    num3 = document.getElementById('num3').value;
    num3 = parseInt(num3);

    result = (num1*(num2/12)*(1+num2/12)^num3)/(1+num2/12)^num3-1
    document.getElementById('out').innerHTML = result + ' $';
}