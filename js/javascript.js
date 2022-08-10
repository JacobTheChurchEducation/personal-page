const navJS = () => {




    const nav = document.querySelector('.nav-icon');
    const navWrapper = document.querySelector('.nav-wrapper');
    const header = document.querySelector('.nav-bar');
    const section1 = document.querySelector('#AboutMe')
    const section2 = document.querySelector('#MyGols')
    const listItems = document.querySelectorAll('.nav-bar ul li');
    const container = document.querySelector("#container");
    const element = document.querySelector(".picked");
    const dot = window.getComputedStyle(element, '::after');



    nav.addEventListener('click', () => {


        navWrapper.classList.toggle('nav-active');



        nav.classList.toggle('toggle');
    });

    container.addEventListener('scroll', () => {
        // alert(header.clientHeight);
        // alert("Section:" + section1.clientHeight)

        // alert(section2.getBoundingClientRect().bottom);

        if(section1.getBoundingClientRect().bottom <= 0 && section2.getBoundingClientRect().bottom > 0) {
            header.classList.add('dark');
            document.querySelector('.line1').classList.add('dark-element');
            document.querySelector('.line2').classList.add('dark-element');
            document.querySelector('.line3').classList.add('dark-element');
            document.querySelector('nav ul').classList.add('dark');
            element.classList.add('dark-element-dot');

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
            element.classList.remove('dark-element-dot');

            for(let i in listItems) {
                listItems[i].classList.remove('dark-element-font');
            }


            document.querySelector('.picked::after').style.backgroundColor = "#212121";
        }

    })

}



navJS();
