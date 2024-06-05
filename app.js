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
        '0017512.webp',
        '0017613.webp',
        'anh1.jpg',
        'anh2.jpg'
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