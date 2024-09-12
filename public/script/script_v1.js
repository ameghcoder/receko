const $ = e => document.querySelector(e);
const $all = e => document.querySelectorAll(e);
const $id = e => document.getElementById(e);
const $attr = (e, val) => e.getAttribute(val);

const classInterChanger = (from, to, ele, multiple = false) => {
    if (multiple) {
        for (let i = 0; i < from.length; i++) {
            ele.classList.remove(from[i]);
        }
        for (let i = 0; i < to.length; i++) {
            ele.classList.add(to[i]);
        }
    } else {
        ele.classList.remove(from);
        ele.classList.add(to);
    }
}

const getComputedScale = (ele) => {
    let computedStyle = window.getComputedStyle(ele);

    computedStyle = computedStyle.transform || computedStyle.webkitTransform;

    if (computedStyle && computedStyle !== 'none') {
        const matrixValues = computedStyle.match(/matrix\((.+)\)/)[1].split(', ');

        // For 2D transforms, scale values are at index 0 and 3 (matrix(a, b, c, d, e, f))
        const scaleX = parseFloat(matrixValues[0]); // 'a' value (scaleX)
        const scaleY = parseFloat(matrixValues[3]); // 'd' value (scaleY)

        return {
            "scaleX": scaleX,
            "scaleY": scaleY
        };
    } else {
        return false;
    }
}
const autoSlider = () => {
    const fImg = $(".slide_images[data-image='1']");
    const sImg = $(".slide_images[data-image='2']");
    const tImg = $(".slide_images[data-image='3']");
    const container_image = $id("image-container");

    const [
        FcurrentImgVal,
        ScurrentImgVal,
        TcurrentImgVal
    ] = [
            parseInt($attr(fImg, 'data-image')),
            parseInt($attr(sImg, 'data-image')),
            parseInt($attr(tImg, 'data-image'))
        ];

    const getArrayVal = (number) => {
        return (container_image.getAttribute(`data-${number}-class`)).split(' ');
    }

    classInterChanger(
        getArrayVal(FcurrentImgVal),
        getArrayVal(ScurrentImgVal),
        fImg,
        true
    );
    classInterChanger(
        getArrayVal(ScurrentImgVal),
        getArrayVal(TcurrentImgVal),
        sImg,
        true
    );
    classInterChanger(
        getArrayVal(TcurrentImgVal),
        getArrayVal(FcurrentImgVal),
        tImg,
        true
    );

    fImg.setAttribute("data-image", FcurrentImgVal == 3 ? 1 : FcurrentImgVal + 1);
    sImg.setAttribute("data-image", ScurrentImgVal == 3 ? 1 : ScurrentImgVal + 1);
    tImg.setAttribute("data-image", TcurrentImgVal == 3 ? 1 : TcurrentImgVal + 1);

}
const init = () => {
    $id("image-container").setAttribute("style", `height: ${$(".slide_images[data-image='1']").clientHeight}px;`);
    $id("image-container").classList.remove("min-h-screen");

    const secondImage = $(".slide_images[data-image='2']");
    console.log(secondImage.clientWidth);
    const scaleOfSecond = getComputedScale(secondImage);
    let scaleDownPrecentOnLeftSide = ((1.00 - scaleOfSecond.scaleX) * 100) / 2;
    let valueFromRightInPx = secondImage.clientWidth - ((scaleDownPrecentOnLeftSide * secondImage.clientWidth) / 100);

    const slideImages = $all(".slide_images");
    for (let i = 0; i < slideImages.length; i++) {
        slideImages[i].setAttribute("style", `--calcs-for-second-ele: ${valueFromRightInPx}px`);
    }

    setInterval(() => {
        autoSlider();
    }, 3500);
}

document.readyState == "interactive" ? init() : document.addEventListener('DOMContentLoaded', init);