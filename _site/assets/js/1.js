document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.ba-slider');
    const handle = document.querySelector('.slider-handle');
    const imgOverlay = document.querySelector('.img-overlay');

    const slideReady = (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', slideMove);
        document.addEventListener('mouseup', slideFinish);
    };

    const slideMove = (e) => {
        let rect = slider.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let width = slider.offsetWidth;
        if (x < 0) x = 0;
        else if (x > width) x = width;

        handle.style.left = x + 'px';
        imgOverlay.style.clip = `rect(0, ${x}px, ${rect.height}px, 0)`;
        startAutoChange(); // 重置自动轮换定时器
    };

    const slideFinish = () => {
        document.removeEventListener('mousemove', slideMove);
        document.removeEventListener('mouseup', slideFinish);
    };

    handle.addEventListener('mousedown', slideReady);
// });




// document.addEventListener('DOMContentLoaded', function() {
    const beforeImage = document.querySelector('.before-image');
    const afterImage = document.querySelector('.img-overlay img');
    const prevButton = document.getElementById('prevImage');
    const nextButton = document.getElementById('nextImage');

    // 假设图片数组
    const images = [
        { before: './assets/img/Lway/ours.jpg', after: './assets/img/Lway/stablesr.jpg' },
        { before: './assets/img/Lway/ours2.jpg', after: './assets/img/Lway/stablesr2.jpg' },
        { before: './assets/img/Lway/ours3.png', after: './assets/img/Lway/BSRGAN.png' },
        { before: './assets/img/Lway/ours4.png', after: './assets/img/Lway/stablesr4.png' },
        { before: './assets/img/Lway/stablesr5_ours.png', after: './assets/img/Lway/stablesr5.png' },
        // 添加更多图片路径
    ];

    let currentIndex = 0; // 当前图片索引
    let autoChange; // 用于存储定时器的变量

    // 更新图片函数
    function updateImages(index) {
        beforeImage.src = images[index].before;
        afterImage.src = images[index].after;
    }


    function startAutoChange() {
        if (autoChange) clearInterval(autoChange); // 如果已存在定时器，则清除

        autoChange = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length; // 更新索引，循环显示图片
            updateImages(currentIndex);
        }, 5000); // 包括淡入淡出的总时间
    }

    // 初始化自动轮换
    startAutoChange();
    
    
    // 上一张图片
    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateImages(currentIndex);
        } else {
            // 如果已经是第一张图片，可以选择循环到最后一张
            currentIndex = images.length - 1;
            updateImages(currentIndex);
        }
        startAutoChange(); // 重置自动轮换定时器
    });

    // 下一张图片
    nextButton.addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateImages(currentIndex);
        } else {
            // 如果已经是最后一张图片，可以选择循环到第一张
            currentIndex = 0;
            updateImages(currentIndex);
        }
        startAutoChange(); // 重置自动轮换定时器
    });

    // 自动轮换图片
    // setInterval(() => {
    //     currentIndex = (currentIndex + 1) % images.length; // 更新索引，循环显示图片
    //     updateImages(currentIndex);
    // }, 6000); // 每3秒切换一次图片




});
