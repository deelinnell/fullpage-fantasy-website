// ANCHORS
const firstLink = document.getElementById('firstPageLink')
const secondLink = document.getElementById('secondPageLink')
const thirdLink = document.getElementById('thirdPageLink')
const forthLink = document.getElementById('forthPageLink')
const fifthLink = document.getElementById('fifthPageLink')
const sixithLink = document.getElementById('sixithPageLink')
const linkArray = [firstLink, secondLink, thirdLink, forthLink, fifthLink, sixithLink]
// NAVBAR
const navbar = document.getElementById('navbar')
const navigation = document.getElementById('navigation')
const circle = document.getElementById('circle')
const smallLogo = document.getElementById('small_logo')
// SECTION 2
const header_2 = document.getElementById('header_2')
const text_2 = document.getElementById('text_2')
const images_2 = document.getElementById('images_2')
// SECTION 3
const image_3 = document.getElementById('image-3-1')
const small_city = document.getElementById('small_city')
const small_river = document.getElementById('small_river')
// SECTION 4
const header_4 = document.getElementById('header_4')
const text_4 = document.getElementById('text_4')
const images_4 = document.getElementById('images_4')
// SECTION 5

// SECTION 6
const email = document.getElementById('email')

new fullpage('#fullpage', {
    sectionsColor: ['rgb(253, 245, 235)', 'rgb(253, 245, 235)', 'rgb(253, 245, 235)', 'rgb(253, 245, 235)', 'rgb(253, 245, 235)', 'rgb(253, 245, 235)'],
    anchors: ['1', '2', '3', '4', '5', '6'],
    autoScrolling: true,
    scrollHorizontally: true,
    menu: '#navMenu',

    onLeave: function (origin, destination) {
        const circle = document.getElementById('circle')
        circle.style.transform = `rotate(${(destination.anchor) * 30}deg)`

        linkArray[origin.anchor - 1].classList.remove('highlight')
        linkArray[destination.anchor - 1].classList.add('highlight')


        if (destination.anchor == 1) {
            removeInvert()
            smallLogo.style.display = 'none'
        } else {
            smallLogo.style.display = 'block'
        }
        if (destination.anchor == 2) {
            removeInvert()
            removeHidden(header_2, text_2, images_2)
        }
        if (origin.anchor == 2) {
            addHidden(header_2, text_2, images_2)
        }
        if (destination.anchor == 3) {
            addInvert()
        }
        if (destination.anchor == 4) {
            removeInvert()
            removeHidden(header_4, text_4, images_4)
        }
        if (origin.anchor == 4) {
            addHidden(header_4, text_4, images_4)
        }
        if (destination.anchor == 5) {
            addInvert()
        }
        if (destination.anchor == 6) {
            addInvert()
            email.classList.remove('hidden')
        }
        if (origin.anchor == 6) {
            addInvert()
            email.classList.add('hidden')
        }
    }
})

fullpage_api.setScrollingSpeed(300);

function removeHidden(header, text, images) {
    header.classList.remove('hidden')
    text.classList.remove('hidden')
    images.classList.remove('hidden')
}

function addHidden(header, text, images) {
    header.classList.add('hidden')
    text.classList.add('hidden')
    images.classList.add('hidden')
}

function removeInvert() {
    navbar.classList.remove('invert')
    navigation.classList.remove('invert')
    circle.classList.remove('invert')
}

function addInvert() {
    navbar.classList.add('invert')
    navigation.classList.add('invert')
    circle.classList.add('invert')
}

firstLink.onclick = () => scrollOnclick(1)
secondLink.onclick = () => scrollOnclick(2)
thirdLink.onclick = () => scrollOnclick(3)
forthLink.onclick = () => scrollOnclick(4)
fifthLink.onclick = () => scrollOnclick(5)
sixithLink.onclick = () => scrollOnclick(6)

function scrollOnclick(number) {
    fullpage_api.moveTo(number)
    const active = fullpage_api.getActiveSection()
    linkArray.forEach(link => link.classList.remove('highlight'))
    linkArray[active.anchor - 1].classList.add('highlight')
}


small_city.onclick = () => changeImage(small_city)
small_river.onclick = () => changeImage(small_river)

function changeImage(img) {
    if (img == small_city) {
        image_3.src = "./images/n-s-medieval.jpg"
        small_river.classList.remove('highlight')
        small_city.classList.add('highlight')
    } else if (img == small_river) {
        image_3.src = "./images/river.jpeg"
        small_city.classList.remove('highlight')
        small_river.classList.add('highlight')
    }
}
