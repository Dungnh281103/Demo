    let btn = document.querySelector('.taskBar');
    let t = document.querySelector('.nav_1');
    let btnLogIn = document.querySelector('.btn2');
    let logIN = document.querySelector('.formMain');
    let form = document.querySelector('.form-login');
    let exit1 = document.querySelector('.fa1')
    let exit2 = document.querySelector('.fa2')
    let btnRegister = document.querySelector('.btn1')
    let registerLogIN = document.querySelector('.registerLogIn')
    let formRegister = document.querySelector('.form-register')
    let formRegisterMain = document.querySelector('.formRegisterMain')
    let header = document.querySelector('.header')
    let logInRegister = document.querySelector('.logInRegister')
    const imgElement = document.querySelector('.img-a');
    const images = [
        './img/0017512.webp',
        './img/0017613.webp',
        './img/anh1.jpg',
        './img/anh2.jpg'
    ];

    function toggleBodyScroll(enable) {
        document.body.style.overflow = enable ? 'auto' : 'hidden';
    }

    //ẩn hiện thanh header
    btn.addEventListener('click', function() {
        t.classList.toggle('hide1');
        t.classList.toggle('hide');
    });
    
    //ẩn login
    exit1.addEventListener('click', function(){
        logIN.classList.add('hide2')
        toggleBodyScroll(true);
    });

    //ẩn register
    exit2.addEventListener('click', function(){
        formRegisterMain.classList.add('hide2')
        toggleBodyScroll(true);
    });

    //hiện form đăng nhập khi ấn vào đăng nhập
    btnLogIn.addEventListener('click', function(event) {
        event.stopPropagation(); // Ngăn sự kiện lan ra ngoài
        event.preventDefault(); // Ngăn chặn hành vi mặc định của nút
        logIN.classList.toggle('hide2');
        toggleBodyScroll(!logIN.classList.contains('hide2'));
    });

    //hiện form đăng ký khi ấn vào btn đăng kí
    btnRegister.addEventListener('click', function(event){
        event.stopPropagation();
        event.preventDefault();
        formRegisterMain.classList.toggle('hide2')
        toggleBodyScroll(!formRegisterMain.classList.contains('hide2'));
    })

    //gpt Đóng form khi nhấn vào bất kỳ đâu ngoài form hoặc nút đăng nhập
    document.addEventListener('click', function(event) {
        if (!form.contains(event.target) && !btnLogIn.contains(event.target)) {
            logIN.classList.add('hide2');
            toggleBodyScroll(true);
        }
    });

    // Ngăn chặn đóng form khi nhấn vào chính form
    form.addEventListener('click', function(event) {
        event.stopPropagation();
    });

   
    //gpt Đóng form khi nhấn vào bất kỳ đâu ngoài form hoặc nút đăng ký
    document.addEventListener('click', function(event) {
        if (!formRegister.contains(event.target) && !btnRegister.contains(event.target)) {
            formRegisterMain.classList.add('hide2');
            toggleBodyScroll(true);
        }
    });

    // Ngăn chặn đóng form khi nhấn vào chính form
    formRegister.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    //đổi từ login sang register
    registerLogIN.addEventListener('click', function(event){
        event.preventDefault();
        formRegisterMain.classList.remove('hide2')
        logIN.classList.add('hide2')
    })
    //đổi từ register sang login
    logInRegister.addEventListener('click', function(event){
        event.preventDefault();
        formRegisterMain.classList.add('hide2')
        logIN.classList.remove('hide2')
    })

    //Đóng menu khi cuộn xuống
    window.addEventListener('scroll', function(event) {
        event.preventDefault();
        t.classList.remove('hide1');
        t.classList.remove('hide');
    });

    // Đóng menu khi nhấn vào bất kỳ đâu ngoài menu hoặc nút menu
    document.addEventListener('click', function(event) {
        if (!header.contains(event.target) && !t.contains(event.target)) {
            event.preventDefault();
            t.classList.remove('hide1');
            t.classList.remove('hide');
        }
    });





//GPT
let currentIndex = 0;
// Hàm để thay đổi hình ảnh
function changeImage() {
    // Tăng chỉ số hình ảnh
    currentIndex++;
    // Nếu chỉ số vượt quá số lượng hình ảnh, quay lại hình ảnh đầu tiên
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    // Thay đổi thuộc tính src của thẻ img
    imgElement.src = images[currentIndex];
}

// Thiết lập interval để thay đổi hình ảnh mỗi 5 giây
setInterval(changeImage, 5000);

document.addEventListener('DOMContentLoaded', () => {
    fetch('./data/category.json')
        .then(response => response.json())
        .then(data => {
            const categoryContainer = document.getElementById('category-container');
            // Create a wrapper for every two movie cards
            for (let i = 0; i < data.length; i += 2) {
                const movieWrapper = document.createElement('div');
                movieWrapper.className = 'movies-container'; // New container for two movie cards
                for (let j = i; j < i + 2 && j < data.length; j++) {
                    const movie = data[j];
                    const movieElement = document.createElement('div');
                    movieElement.className = 'movie-card';
                    movieElement.innerHTML = `
                        <img src="${movie.image_url}" alt="${movie.title}" class="movie-poster">
                        <div class="movie-details">
                            <p class="p1">${movie.genre}    ${movie.duration} phút</p>
                            <h3>${movie.title}</h3>
                            <p>Xuất xứ: ${movie.origin}</p>
                            <p>Khởi chiếu: ${movie.release_date}</p>
                            <p class="rating">${movie.rating} - ${movie.description}</p>
                            <h4>Lịch chiếu</h4>
                            <div class="showtimes">${movie.showtimes.map(time => `<span>${time}</span>`).join('')}</div>
                        </div>
                    `;
                    movieWrapper.appendChild(movieElement);
                }
                categoryContainer.appendChild(movieWrapper);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});


// giới thiệu
var intro = document.querySelector('.intro')
var produce = document.querySelector('.produce')
var section1 = document.querySelector('.section1')
var section2 = document.querySelector('.section2')

intro.addEventListener('click', function(){
    section1.classList.add('active')
    section2.classList.remove('active')

})

produce.addEventListener('click', function(){
    section2.classList.add('active')
    section1.classList.remove('active')
})

