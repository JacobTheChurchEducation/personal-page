const decideColor = () => {

    alert("decideClor")
    alert(window.location.pathname)

    if(window.location.pathname.split(".html")[1] === "myWork")
    {
        alert("if spk")
        document.documentElement.style.setProperty("--main-color", "#212121");
        document.documentElement.style.setProperty("--main-font-color", "#F8F8F8");
    }

}


const mNavbarAppearDisAppear = () => {

    const nav = document.querySelector('.nav-icon');
    const navWrapper = document.querySelector('.nav-wrapper');




    nav.addEventListener('click', () => {


        navWrapper.classList.toggle('nav-active');



        nav.classList.toggle('toggle');
    });


}
    // const dot = document.querySelector('#dot');

const mNavBarScrollColorChange = () =>
{
const header = document.querySelector('.nav-bar');
const section1 = document.querySelector('#AboutMe')
const section2 = document.querySelector('#MyGols')
const listItems = document.querySelectorAll('.nav-bar ul li');
const container = document.querySelector("#container");
const picked = document.querySelector(".picked");


   container.addEventListener('scroll', () => {

    if(section1.getBoundingClientRect().bottom <= 0 && section2.getBoundingClientRect().bottom > 0) {
        header.classList.add('dark');
        document.querySelector('.line1').classList.add('dark-element');
        document.querySelector('.line2').classList.add('dark-element');
        document.querySelector('.line3').classList.add('dark-element');
        document.querySelector('nav ul').classList.add('dark');
        picked.classList.add('dark-element-dot');


        for(let i in listItems) {
            listItems[i].classList.add('dark-element-font');
        }
    }
    else {
        header.classList.remove('dark');
        document.querySelector('.line1').classList.remove('dark-element');
        document.querySelector('.line2').classList.remove('dark-element');
        document.querySelector('.line3').classList.remove('dark-element');
        document.querySelector('nav ul').classList.remove('dark');
        document.querySelector('nav ul li a').classList.remove('dark-element-font');
        picked.classList.remove('dark-element-dot');

        for(let i in listItems) {
            listItems[i].classList.remove('dark-element-font');
        }

    }
})

}


const navBarDot = () =>
{

    const home = document.querySelector('#home');
    const blog = document.querySelector('#blog');
    const myWork = document.querySelector('#myWork');
    const picked = document.querySelector(".picked");


    home.addEventListener('mouseover', function(){dotIn(home)});
    blog.addEventListener('mouseover', function(){dotIn(blog)});
    myWork.addEventListener('mouseover', function(){dotIn(myWork)});

    home.addEventListener('mouseout', dotOut);
    blog.addEventListener('mouseout', dotOut);
    myWork.addEventListener('mouseout', dotOut);





    function dotIn(li) {
        // const left = li.getBoundingClientRect().x + (li.clientWidth / 2 - 3);

        if(li !== picked) {
        const right =( li.getBoundingClientRect().x + (li.clientWidth / 2 + 3) - picked.getBoundingClientRect().x - (picked.clientWidth) )*(-1);
        console.log("right: " + right);
        console.log("li x: " + li.getBoundingClientRect().x)

        console.log("picked x: " +  picked.getBoundingClientRect().x)

        console.log("picked width: " + (picked.clientWidth / 2 - 3 ))

        picked.classList.add('.blog');

        // alert(window.getComputedStyle(picked, '::after').backgroundColor)

        picked.style.setProperty('--leftChange', 'initial');
        picked.style.setProperty('--rightChange', + right.toString() + 'px');
        // picked.style.setProperty('--leftChange', '5345435px');
        // document.querySelector('.blog::after').style.left = left.toString();

        }

    }
    function dotOut()
    {

        // picked.style.setProperty('--leftChange', 'calc(50% - 3px)');
        picked.style.setProperty('--rightChange', 'calc(50% - 3px)');
    }
}



const start = () =>
{
    mNavbarAppearDisAppear();
    navBarDot();
}

const main = () =>
{
    mNavbarAppearDisAppear();
    mNavBarScrollColorChange();
    navBarDot();
}

