let btn = document.querySelectorAll('.btn')
const items = document.querySelectorAll('.tabs')
btn.forEach(elem => {
    elem.addEventListener('click', function (e) {
        const currentItem = elem
        const idTab = currentItem.getAttribute('data-tabs')
        let tab = document.querySelector(idTab)
        if( !tab.classList.contains('active1')){
            btn.forEach(item => {
                item.classList.remove('active')
            })
            items.forEach(i=>{
                i.classList.remove('active1')
            })
            elem.classList.add('active')
            tab.classList.add('active1')
        }
    })
});
