const mainAyaId = new URLSearchParams(window.location.search).get('i');
console.log(mainAyaId);



const canvas = document.getElementById('canvas');
const backgroundImage = document.getElementById('backgroundImage');

function drawRectangles(ayas) {
    const imageWidth = backgroundImage.offsetWidth;
    const imageHeight = backgroundImage.offsetHeight;
    const naturalWidth = backgroundImage.naturalWidth;
    const naturalHeight = backgroundImage.naturalHeight;

    // Remove existing rectangles to avoid duplication
    canvas.querySelectorAll('.rectangle').forEach(rect => rect.remove());

    let scl = 1.62;
    const scaleX = scl * imageWidth / naturalWidth;
    const scaleY = scl * imageHeight / naturalHeight;

    // positions.forEach(([top, left, width, height]) => {
    // ayas.forEach(ayaElement,function(){
    //     [top, left, width, height]=ayaElement.positions;
    //     const rect = document.createElement('div');
    //     rect.classList.add('rectangle');

    //     // Scale positions and dimensions
    //     rect.style.top = top * scaleY + 'px';
    //     rect.style.left = left * scaleX + 'px';
    //     rect.style.width = width * scaleX + 'px';
    //     rect.style.height = height * scaleY + 'px';

    //     canvas.appendChild(rect);
    // });
    ayas.forEach(function (ayaElement) {
        const [top, left, width, height] = ayaElement.coordinates; // Correctly destructure `coordinates`
        const rect = document.createElement('div');
        rect.classList.add('rectangle');
        rect.dataset.aya_id = ayaElement.aya_id;
    
        // Scale positions and dimensions
        rect.style.position = 'absolute'; // Ensure it positions correctly
        rect.style.top = top * scaleY + 'px';
        rect.style.left = left * scaleX + 'px';
        rect.style.width = width * scaleX + 'px';
        rect.style.height = height * scaleY + 'px';
    
        canvas.appendChild(rect);
    });
}

function rectangleClickEvent(){
    $('.rectangle').on('click', function(e) {
        var element = $(this);
        element.css({
            'opacity': 0,
            'background-color': 'rgb(255, 255, 255)'
        });
        if (mainAyaId == element.data('aya_id')) {
            showCheckMark(e.pageX, e.pageY);
            $('.rectangle[data-aya_id="' + element.data('aya_id') + '"]').each(function(ele) {
                $(this).css({
                    'opacity': 0.25,
                    'background-color': 'rgb(0, 255, 0)'
                }).off('click');
            });
            
            ayaPositionQuestionCallBack();
        }
        element.off('click');
    });
}


function ayaPositionQuestionCallBack(){
    $('#fourChoicesSuraModal').modal('toggle');
}


function showCheckMark(x,y){
    var image = $('#checkMark');
    image.show();
    image.css({zIndex:999,position: 'absolute', left:x, top:y+200, opacity:1});
    image.animate({ left: x, top: y , opacity:0 }, 1000);
    console.log('animation here');
}
