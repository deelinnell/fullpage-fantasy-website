const firstLink = document.getElementById('firstPageLink')
const secondLink = document.getElementById('secondPageLink')
const thirdLink = document.getElementById('thirdPageLink')
const forthLink = document.getElementById('forthPageLink')
const fifthLink = document.getElementById('fifthPageLink')
const sixithLink = document.getElementById('sixithPageLink')
const linkArray = [firstLink, secondLink, thirdLink, forthLink, fifthLink, sixithLink]

new fullpage('#fullpage', {
    sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
    anchors: ['1', '2', '3', '4', '5', '6'],
    autoScrolling: true,
    scrollHorizontally: true,
    menu: '#navMenu',

    onLeave: function (origin, destination) {
        const circle = document.getElementById('circle')
        circle.style.transform = `rotate(${(destination.anchor) * 30}deg)`

        linkArray[origin.anchor - 1].classList.remove('highlight')
        linkArray[destination.anchor - 1].classList.add('highlight')
    }
});

fullpage_api.setScrollingSpeed(300);

firstLink.onclick = () => scrollOnclick(1)
secondLink.onclick = () => scrollOnclick(2)
thirdLink.onclick = () => scrollOnclick(3)
forthLink.onclick = () => scrollOnclick(4)

function scrollOnclick(number) {
    fullpage_api.moveTo(number)
    const active = fullpage_api.getActiveSection()
    linkArray.forEach(link => link.classList.remove('highlight'))
    linkArray[active.anchor - 1].classList.add('highlight')
}