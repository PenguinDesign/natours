let navigationLinkList = document.getElementsByClassName('navigation__link');
let navigationCheckBox = document.querySelector('input');

for (let i = 0; i < navigationLinkList.length; i++) {
    navigationLinkList[i].addEventListener('click', function () {
        navigationCheckBox.checked = false;
    })
}