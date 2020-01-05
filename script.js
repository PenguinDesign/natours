let navigationLinkList = document.getElementsByClassName('navigation__link');
let navigationCheckBox = document.querySelector('input');

let disableAllLinks = true;

for (let i = 0; i < navigationLinkList.length; i++) {
    navigationLinkList[i].style.pointerEvents = 'none';
}

navigationCheckBox.addEventListener('click', function () {
    disableAllLinks = !disableAllLinks;
    console.log(disableAllLinks);
    for (let i = 0; i < navigationLinkList.length; i++) {
        if (disableAllLinks) {
            navigationLinkList[i].style.pointerEvents = 'none';
        } else {
            navigationLinkList[i].style.pointerEvents = 'auto';
        }
    }
})

for (let i = 0; i < navigationLinkList.length; i++) {
    navigationLinkList[i].addEventListener('click', function () {
        navigationCheckBox.checked = false;
        for (let i = 0; i < navigationLinkList.length; i++) {
            disableAllLinks = true;
            navigationLinkList[i].style.pointerEvents = 'none';
        }
    })
}
