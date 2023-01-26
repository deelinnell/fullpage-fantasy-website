const firstLink = document.getElementById('firstPageLink')
const secondLink = document.getElementById('secondPageLink')
const thirdLink = document.getElementById('thirdPageLink')
const forthLink = document.getElementById('forthPageLink')
const fifthLink = document.getElementById('fifthPageLink')
const sixithLink = document.getElementById('sixithPageLink')
const border = document.getElementById('border')
const navbar = document.getElementById('navbar')
const navigation = document.getElementById('navigation')
const circle = document.getElementById('circle')
const cityscape = document.getElementById('cityscape')
const smallLogo = document.getElementById('small_logo')
const header_1 = document.getElementById('header_1')
const text_1 = document.getElementById('text_1')
const images_1 = document.getElementById('images_1')


const linkArray = [firstLink, secondLink, thirdLink, forthLink, fifthLink, sixithLink]

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
            removeHidden(header_1, text_1, images_1)
        }
        if (origin.anchor == 2) {
            addHidden(header_1, text_1, images_1)
        }
        if (destination.anchor == 5) {
            removeInvert()
        }
        if (destination.anchor == 4) {
            addInvert()
        }
        if (destination.anchor == 3) {
            addInvert()
        }
        if (destination.anchor == 6) {
            addInvert()
        }
    }
})

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
    border.classList.remove('invert')
    navbar.classList.remove('invert')
    navigation.classList.remove('invert')
    circle.classList.remove('invert')
    cityscape.style.display = 'none'
}

function addInvert() {
    border.classList.add('invert')
    navbar.classList.add('invert')
    navigation.classList.add('invert')
    circle.classList.add('invert')
    cityscape.style.display = 'block'
}

fullpage_api.setScrollingSpeed(300);

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