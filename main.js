const aya_page_map = [7, 12, 23, 31, 36, 44, 55, 64, 68, 76, 83, 90, 95, 100, 108, 112, 119, 126, 133, 141, 148, 152, 160, 170, 176, 183, 188, 193, 197, 203, 209, 217, 222, 226, 231, 237, 240, 244, 252, 255, 259, 263, 266, 271, 276, 281, 288, 289, 293, 302, 308, 315, 322, 330, 338, 345, 354, 363, 370, 376, 384, 393, 401, 408, 414, 425, 433, 441, 446, 450, 458, 466, 473, 479, 487, 493, 499, 504, 507, 512, 516, 519, 526, 530, 537, 544, 552, 558, 567, 572, 579, 584, 587, 594, 598, 606, 614, 620, 627, 633, 640, 647, 655, 663, 668, 671, 674, 678, 682, 686, 692, 700, 705, 710, 714, 719, 726, 733, 739, 745, 751, 758, 764, 772, 777, 782, 789, 797, 807, 816, 824, 833, 841, 848, 857, 862, 870, 879, 883, 890, 899, 907, 913, 920, 926, 931, 935, 940, 946, 954, 965, 976, 984, 991, 997, 1005, 1011, 1021, 1027, 1035, 1041, 1049, 1058, 1074, 1084, 1091, 1097, 1103, 1109, 1113, 1117, 1124, 1132, 1141, 1149, 1160, 1168, 1176, 1185, 1193, 1200, 1205, 1212, 1221, 1229, 1235, 1241, 1248, 1255, 1261, 1266, 1271, 1275, 1282, 1289, 1296, 1303, 1307, 1314, 1321, 1328, 1334, 1341, 1346, 1352, 1357, 1364, 1370, 1378, 1384, 1389, 1397, 1406, 1417, 1425, 1434, 1442, 1452, 1461, 1470, 1478, 1485, 1492, 1501, 1510, 1518, 1526, 1535, 1544, 1554, 1561, 1570, 1581, 1590, 1600, 1610, 1618, 1626, 1633, 1639, 1648, 1659, 1665, 1674, 1682, 1691, 1699, 1707, 1712, 1720, 1725, 1735, 1741, 1749, 1755, 1760, 1768, 1774, 1783, 1792, 1802, 1817, 1833, 1853, 1872, 1892, 1907, 1915, 1927, 1935, 1943, 1955, 1965, 1973, 1980, 1988, 1994, 2003, 2011, 2019, 2029, 2036, 2046, 2056, 2067, 2078, 2087, 2095, 2105, 2115, 2125, 2133, 2144, 2155, 2160, 2167, 2174, 2185, 2193, 2201, 2214, 2223, 2237, 2250, 2261, 2275, 2288, 2301, 2314, 2326, 2345, 2360, 2385, 2399, 2412, 2424, 2435, 2446, 2461, 2473, 2483, 2493, 2507, 2518, 2527, 2540, 2555, 2564, 2573, 2584, 2595, 2600, 2610, 2618, 2625, 2633, 2641, 2650, 2659, 2667, 2673, 2690, 2700, 2715, 2732, 2747, 2762, 2777, 2791, 2801, 2811, 2818, 2822, 2827, 2834, 2844, 2849, 2852, 2857, 2866, 2875, 2887, 2898, 2910, 2922, 2932, 2951, 2971, 2992, 3015, 3043, 3068, 3091, 3115, 3138, 3159, 3172, 3181, 3194, 3203, 3214, 3222, 3235, 3247, 3257, 3265, 3273, 3280, 3287, 3295, 3302, 3311, 3322, 3329, 3336, 3346, 3354, 3363, 3370, 3378, 3385, 3392, 3403, 3414, 3424, 3433, 3441, 3450, 3459, 3469, 3480, 3488, 3497, 3503, 3514, 3523, 3533, 3539, 3548, 3555, 3563, 3568, 3576, 3583, 3587, 3595, 3606, 3613, 3620, 3628, 3637, 3645, 3654, 3663, 3671, 3678, 3690, 3698, 3704, 3717, 3732, 3745, 3759, 3775, 3788, 3812, 3839, 3864, 3890, 3914, 3941, 3970, 3986, 3996, 4012, 4031, 4053, 4063, 4068, 4079, 4089, 4098, 4105, 4114, 4125, 4132, 4140, 4149, 4158, 4166, 4173, 4182, 4191, 4199, 4210, 4218, 4229, 4238, 4247, 4256, 4264, 4272, 4282, 4287, 4294, 4303, 4316, 4323, 4335, 4347, 4358, 4372, 4385, 4398, 4414, 4432, 4453, 4473, 4486, 4495, 4505, 4515, 4524, 4530, 4538, 4545, 4556, 4564, 4574, 4583, 4592, 4598, 4606, 4611, 4616, 4623, 4630, 4645, 4665, 4681, 4705, 4726, 4749, 4766, 4784, 4810, 4828, 4852, 4873, 4895, 4917, 4941, 4968, 4995, 5029, 5055, 5078, 5086, 5093, 5099, 5104, 5110, 5115, 5125, 5129, 5135, 5142, 5150, 5155, 5161, 5168, 5177, 5185, 5192, 5199, 5208, 5217, 5222, 5229, 5236, 5241, 5253, 5267, 5286, 5313, 5331, 5357, 5385, 5414, 5429, 5447, 5460, 5475, 5494, 5512, 5542, 5570, 5596, 5616, 5641, 5672, 5702, 5727, 5758, 5800, 5829, 5854, 5882, 5909, 5931, 5963, 5993, 6016, 6043, 6072, 6098, 6125, 6137, 6155, 6176, 6193, 6207, 6221, 6236];

const suras_aya_range=[{"sura_id":1,"start_aya_id":1,"end_aya_id":7},{"sura_id":2,"start_aya_id":8,"end_aya_id":293},{"sura_id":3,"start_aya_id":294,"end_aya_id":493},{"sura_id":4,"start_aya_id":494,"end_aya_id":669},{"sura_id":5,"start_aya_id":670,"end_aya_id":789},{"sura_id":6,"start_aya_id":790,"end_aya_id":954},{"sura_id":7,"start_aya_id":955,"end_aya_id":1160},{"sura_id":8,"start_aya_id":1161,"end_aya_id":1235},{"sura_id":9,"start_aya_id":1236,"end_aya_id":1364},{"sura_id":10,"start_aya_id":1365,"end_aya_id":1473},{"sura_id":11,"start_aya_id":1474,"end_aya_id":1596},{"sura_id":12,"start_aya_id":1597,"end_aya_id":1707},{"sura_id":13,"start_aya_id":1708,"end_aya_id":1750},{"sura_id":14,"start_aya_id":1751,"end_aya_id":1802},{"sura_id":15,"start_aya_id":1803,"end_aya_id":1901},{"sura_id":16,"start_aya_id":1902,"end_aya_id":2029},{"sura_id":17,"start_aya_id":2030,"end_aya_id":2140},{"sura_id":18,"start_aya_id":2141,"end_aya_id":2250},{"sura_id":19,"start_aya_id":2251,"end_aya_id":2348},{"sura_id":20,"start_aya_id":2349,"end_aya_id":2483},{"sura_id":21,"start_aya_id":2484,"end_aya_id":2595},{"sura_id":22,"start_aya_id":2596,"end_aya_id":2673},{"sura_id":23,"start_aya_id":2674,"end_aya_id":2791},{"sura_id":24,"start_aya_id":2792,"end_aya_id":2855},{"sura_id":25,"start_aya_id":2856,"end_aya_id":2932},{"sura_id":26,"start_aya_id":2933,"end_aya_id":3159},{"sura_id":27,"start_aya_id":3160,"end_aya_id":3252},{"sura_id":28,"start_aya_id":3253,"end_aya_id":3340},{"sura_id":29,"start_aya_id":3341,"end_aya_id":3409},{"sura_id":30,"start_aya_id":3410,"end_aya_id":3469},{"sura_id":31,"start_aya_id":3470,"end_aya_id":3503},{"sura_id":32,"start_aya_id":3504,"end_aya_id":3533},{"sura_id":33,"start_aya_id":3534,"end_aya_id":3606},{"sura_id":34,"start_aya_id":3607,"end_aya_id":3660},{"sura_id":35,"start_aya_id":3661,"end_aya_id":3705},{"sura_id":36,"start_aya_id":3706,"end_aya_id":3788},{"sura_id":37,"start_aya_id":3789,"end_aya_id":3970},{"sura_id":38,"start_aya_id":3971,"end_aya_id":4058},{"sura_id":39,"start_aya_id":4059,"end_aya_id":4133},{"sura_id":40,"start_aya_id":4134,"end_aya_id":4218},{"sura_id":41,"start_aya_id":4219,"end_aya_id":4272},{"sura_id":42,"start_aya_id":4273,"end_aya_id":4325},{"sura_id":43,"start_aya_id":4326,"end_aya_id":4414},{"sura_id":44,"start_aya_id":4415,"end_aya_id":4473},{"sura_id":45,"start_aya_id":4474,"end_aya_id":4510},{"sura_id":46,"start_aya_id":4511,"end_aya_id":4545},{"sura_id":47,"start_aya_id":4546,"end_aya_id":4583},{"sura_id":48,"start_aya_id":4584,"end_aya_id":4612},{"sura_id":49,"start_aya_id":4613,"end_aya_id":4630},{"sura_id":50,"start_aya_id":4631,"end_aya_id":4675},{"sura_id":51,"start_aya_id":4676,"end_aya_id":4735},{"sura_id":52,"start_aya_id":4736,"end_aya_id":4784},{"sura_id":53,"start_aya_id":4785,"end_aya_id":4846},{"sura_id":54,"start_aya_id":4847,"end_aya_id":4901},{"sura_id":55,"start_aya_id":4902,"end_aya_id":4979},{"sura_id":56,"start_aya_id":4980,"end_aya_id":5075},{"sura_id":57,"start_aya_id":5076,"end_aya_id":5104},{"sura_id":58,"start_aya_id":5105,"end_aya_id":5126},{"sura_id":59,"start_aya_id":5127,"end_aya_id":5150},{"sura_id":60,"start_aya_id":5151,"end_aya_id":5163},{"sura_id":61,"start_aya_id":5164,"end_aya_id":5177},{"sura_id":62,"start_aya_id":5178,"end_aya_id":5188},{"sura_id":63,"start_aya_id":5189,"end_aya_id":5199},{"sura_id":64,"start_aya_id":5200,"end_aya_id":5217},{"sura_id":65,"start_aya_id":5218,"end_aya_id":5229},{"sura_id":66,"start_aya_id":5230,"end_aya_id":5241},{"sura_id":67,"start_aya_id":5242,"end_aya_id":5271},{"sura_id":68,"start_aya_id":5272,"end_aya_id":5323},{"sura_id":69,"start_aya_id":5324,"end_aya_id":5375},{"sura_id":70,"start_aya_id":5376,"end_aya_id":5419},{"sura_id":71,"start_aya_id":5420,"end_aya_id":5447},{"sura_id":72,"start_aya_id":5448,"end_aya_id":5475},{"sura_id":73,"start_aya_id":5476,"end_aya_id":5495},{"sura_id":74,"start_aya_id":5496,"end_aya_id":5551},{"sura_id":75,"start_aya_id":5552,"end_aya_id":5591},{"sura_id":76,"start_aya_id":5592,"end_aya_id":5622},{"sura_id":77,"start_aya_id":5623,"end_aya_id":5672},{"sura_id":78,"start_aya_id":5673,"end_aya_id":5712},{"sura_id":79,"start_aya_id":5713,"end_aya_id":5758},{"sura_id":80,"start_aya_id":5759,"end_aya_id":5800},{"sura_id":81,"start_aya_id":5801,"end_aya_id":5829},{"sura_id":82,"start_aya_id":5830,"end_aya_id":5848},{"sura_id":83,"start_aya_id":5849,"end_aya_id":5884},{"sura_id":84,"start_aya_id":5885,"end_aya_id":5909},{"sura_id":85,"start_aya_id":5910,"end_aya_id":5931},{"sura_id":86,"start_aya_id":5932,"end_aya_id":5948},{"sura_id":87,"start_aya_id":5949,"end_aya_id":5967},{"sura_id":88,"start_aya_id":5968,"end_aya_id":5993},{"sura_id":89,"start_aya_id":5994,"end_aya_id":6023},{"sura_id":90,"start_aya_id":6024,"end_aya_id":6043},{"sura_id":91,"start_aya_id":6044,"end_aya_id":6058},{"sura_id":92,"start_aya_id":6059,"end_aya_id":6079},{"sura_id":93,"start_aya_id":6080,"end_aya_id":6090},{"sura_id":94,"start_aya_id":6091,"end_aya_id":6098},{"sura_id":95,"start_aya_id":6099,"end_aya_id":6106},{"sura_id":96,"start_aya_id":6107,"end_aya_id":6125},{"sura_id":97,"start_aya_id":6126,"end_aya_id":6130},{"sura_id":98,"start_aya_id":6131,"end_aya_id":6138},{"sura_id":99,"start_aya_id":6139,"end_aya_id":6146},{"sura_id":100,"start_aya_id":6147,"end_aya_id":6157},{"sura_id":101,"start_aya_id":6158,"end_aya_id":6168},{"sura_id":102,"start_aya_id":6169,"end_aya_id":6176},{"sura_id":103,"start_aya_id":6177,"end_aya_id":6179},{"sura_id":104,"start_aya_id":6180,"end_aya_id":6188},{"sura_id":105,"start_aya_id":6189,"end_aya_id":6193},{"sura_id":106,"start_aya_id":6194,"end_aya_id":6197},{"sura_id":107,"start_aya_id":6198,"end_aya_id":6204},{"sura_id":108,"start_aya_id":6205,"end_aya_id":6207},{"sura_id":109,"start_aya_id":6208,"end_aya_id":6213},{"sura_id":110,"start_aya_id":6214,"end_aya_id":6216},{"sura_id":111,"start_aya_id":6217,"end_aya_id":6221},{"sura_id":112,"start_aya_id":6222,"end_aya_id":6225},{"sura_id":113,"start_aya_id":6226,"end_aya_id":6230},{"sura_id":114,"start_aya_id":6231,"end_aya_id":6236}]; 
let i = new URLSearchParams(window.location.search).get('i');

let selected_sura_id = localStorage.getItem('selected_sura_id');
console.log('selected_sura_id',selected_sura_id);
if(selected_sura_id>0){
    fillSuraRange(selected_sura_id);
}else{
    let min_jozz_id = localStorage.getItem('min_jozz_id') ? localStorage.getItem('min_jozz_id') : 27;
    let max_jozz_id = localStorage.getItem('max_jozz_id') ? localStorage.getItem('max_jozz_id') : 30;
    fillJozzRange(min_jozz_id, max_jozz_id);
}

const min_aya_id = localStorage.getItem('min_aya_id') ? parseInt(localStorage.getItem('min_aya_id')) : 4511;
const max_aya_id = localStorage.getItem('max_aya_id') ? parseInt(localStorage.getItem('max_aya_id')) : 6236;

const mainAyaId = i ? i : newAyaId(min_aya_id, max_aya_id);
const pageNumber = findPage(mainAyaId, aya_page_map);
console.log('pageNumber',pageNumber);
const pagePlacement = pageNumber % 2 == 0 ? 'left' : 'right';
const pageName = 'pages/' + pageNumber + '.js?v=0';



const canvas = document.getElementById('canvas');
const quranPageImage = document.getElementById('quranPageImage');
quranPageImage.src = "https://app.quranflash.com/book/MedinaOld/epub/EPUB/imgs/" + String(pageNumber + 3).padStart(4, '0') + ".png";

function drawRectangles(quranPageImage, ayas) {
    // const imageWidth = quranPageImage.offsetWidth;
    // const imageHeight = quranPageImage.offsetHeight;
    // const naturalWidth = quranPageImage.naturalWidth;
    // const naturalHeight = quranPageImage.naturalHeight;

    // Remove existing rectangles to avoid duplication
    canvas.querySelectorAll('.rectangle').forEach(rect => rect.remove());

    let scl = 1.62;
    // const scaleX = scl * imageWidth / naturalWidth;
    // const scaleY = scl * imageHeight / naturalHeight;
    let minusTop=100;
    ayas.forEach(function (ayaElement) {
        ayaElement.coordinates.forEach(function (arr) {
            const [top, left, width, height] = arr; // Correctly destructure `coordinates`
            const rect = document.createElement('div');
            rect.classList.add('rectangle');
            rect.dataset.aya_id = ayaElement.aya_id;
            rect.style.zIndex = '10';
            const extraLeft=pagePlacement?0:0;

            // Scale positions and dimensions
            rect.style.position = 'absolute'; // Ensure it positions correctly
            rect.style.top = -minusTop+ top * 1.63 + 'px';
            rect.style.left = left * scl +extraLeft+ 'px'; //1.8 ?
            rect.style.width = width * scl + 'px'; // 1.64
            rect.style.height = height * 1.56 + 'px';


            canvas.appendChild(rect);
        });

    });
}

function rectangleClickEvent() {
    $('.rectangle').on('click', function (e) {
        var element = $(this);
        element.css({
            'opacity': 0,
            'background-color': 'rgb(255, 255, 255)'
        });
        if (mainAyaId == element.data('aya_id')) {
            showCheckMark(e.pageX, e.pageY);
            $('.rectangle[data-aya_id="' + element.data('aya_id') + '"]').each(function (ele) {
                $(this).css({
                    'opacity': 0.25,
                    'background-color': 'rgb(0, 255, 0)'
                }).off('click');
            });

            // ayaPositionQuestionCallBack();
        }
        element.off('click');
    });
}


function ayaPositionQuestionCallBack() {
    $('#fourChoicesSuraModal').modal('toggle');
}
function suraQuestionCallBack() {
    $('#rlModal').modal('toggle');
}
function rlQuestionCallBack() {
    $('#fourChoicesModal').modal('toggle');
}
function ayaNextPageQuestionCallBack() {
    startRecitingMode();
}
function newAyaId(min_aya_id, max_aya_id) {
    return getRandomInt(min_aya_id, max_aya_id);
}
function reciteQuestionCallBack() {
    // $('#new_test_link').attr('href',"?i="+newAyaId());
    $('#finalStatsModal').modal('toggle');
}


// reciting functions
function recitingMode() {
    resetAllAyas();
    reciteClickListener();
    $('#reciteButton').trigger('click');
}
function startRecitingMode() {
    recitingMode();
    $(this).hide();
    $("#recitingDiv").toggleClass('hidden');
}
function resetAllAyas() {
    $('.rectangle').css({
        'opacity': 1,
        'background-color': 'rgb(255, 255, 255)'
    });
}

function reciteClickListener() {
    $('#reciteButton').on('click', function () {
        console.log('hererere');
        var firstOpaqueRectangle = $('.rectangle').filter(function () {
            return $(this).css('opacity') != 0;
        }).first();
        if (firstOpaqueRectangle.length == 0) {
            $('#reciteButton').prop('disabled', true);
            reciteQuestionCallBack();
        }
        firstOpaqueRectangle.css('opacity', 0);
        console.log(firstOpaqueRectangle);
    });
}
$('#counterRedButton').on('click', function () {
    let count = $('#counter').data('count');
    count++;
    $('#counter').data('count', count);
    $('#counter').text(count);
});
// end reciting functions

function showCheckMark(x, y) {
    var image = $('#checkMark');
    image.show();
    image.css({ zIndex: 999, position: 'absolute', left: x, top: y + 200, opacity: 1 });
    image.animate({ left: x, top: y, opacity: 0 }, 1000);
    console.log('animation here');
}


$('.modal').on('show.bs.modal', function () {
    $('.modal').not($(this)).each(function () {
        $(this).modal('hide');
    });
});



function findPage(ayaId, lastAyas) {
    if (ayaId <= 7) {
        return 1;
    }

    let left = 0;
    let right = lastAyas.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (lastAyas[mid] === parseInt(ayaId)) {
            return mid + 1; // Page number (1-indexed)
        } else if (ayaId < lastAyas[mid]) {
            right = mid;
        } else {
            left = mid + 1;
            break;
        }
    }

    for (let i = left; i <= right; i++) {
        if (lastAyas[i] == ayaId || lastAyas[i] > ayaId) {
            return i + 1;
        }
    }

    return 1; //just a fallback to prevent errors
}

function fillJozzRange(min_jozz_id, max_jozz_id) {
    $('#min_jozz_id').val(min_jozz_id);
    $('#max_jozz_id').val(max_jozz_id);
}

function resetJozzRange(){
    $('#min_jozz_id').val('');
    $('#max_jozz_id').val('');

    localStorage.removeItem('min_jozz_id');
    localStorage.removeItem('max_jozz_id');
}
function resetSelectedSura(){
    $('#suras').val('');
    localStorage.setItem('selected_sura_id',0);
}

function setJozzRange() {
    let min_jozz_id = parseInt($('#min_jozz_id').val());
    let max_jozz_id = parseInt($('#max_jozz_id').val());

    localStorage.setItem('min_jozz_id', min_jozz_id);
    localStorage.setItem('max_jozz_id', max_jozz_id);


    let minAya=jozzs_aya_range[min_jozz_id - 1].start_aya_id
    let maxAya=jozzs_aya_range[max_jozz_id - 1].end_aya_id
    setAyasRange(minAya,maxAya);
    resetSelectedSura();
}

function setAyasRange(min_aya_id,max_aya_id){
    localStorage.setItem('min_aya_id', min_aya_id);
    localStorage.setItem('max_aya_id', max_aya_id);
    refresh();
}

function refresh() {
    window.location.reload();
}

const jozzs_aya_range = [
    { "start_aya_id": 1, "end_aya_id": 148 },
    { "start_aya_id": 149, "end_aya_id": 259 },
    { "start_aya_id": 260, "end_aya_id": 384 },
    { "start_aya_id": 385, "end_aya_id": 516 },
    { "start_aya_id": 517, "end_aya_id": 640 },
    { "start_aya_id": 641, "end_aya_id": 750 },
    { "start_aya_id": 751, "end_aya_id": 899 },
    { "start_aya_id": 900, "end_aya_id": 1041 },
    { "start_aya_id": 1042, "end_aya_id": 1200 },
    { "start_aya_id": 1201, "end_aya_id": 1328 },
    { "start_aya_id": 1329, "end_aya_id": 1478 },
    { "start_aya_id": 1479, "end_aya_id": 1648 },
    { "start_aya_id": 1649, "end_aya_id": 1802 },
    { "start_aya_id": 1803, "end_aya_id": 2029 },
    { "start_aya_id": 2030, "end_aya_id": 2214 },
    { "start_aya_id": 2215, "end_aya_id": 2483 },
    { "start_aya_id": 2484, "end_aya_id": 2673 },
    { "start_aya_id": 2674, "end_aya_id": 2875 },
    { "start_aya_id": 2876, "end_aya_id": 3214 },
    { "start_aya_id": 3215, "end_aya_id": 3385 },
    { "start_aya_id": 3386, "end_aya_id": 3563 },
    { "start_aya_id": 3564, "end_aya_id": 3732 },
    { "start_aya_id": 3733, "end_aya_id": 4089 },
    { "start_aya_id": 4090, "end_aya_id": 4264 },
    { "start_aya_id": 4265, "end_aya_id": 4510 },
    { "start_aya_id": 4511, "end_aya_id": 4705 },
    { "start_aya_id": 4706, "end_aya_id": 5104 },
    { "start_aya_id": 5105, "end_aya_id": 5241 },
    { "start_aya_id": 5242, "end_aya_id": 5672 },
    { "start_aya_id": 5673, "end_aya_id": 6236 }
];

  

function fillSuraRange(selected_sura_id){
    $('#suras option[value="'+selected_sura_id+'"]').prop('selected', true);
}
function selectSura(){
    const selected_sura_id=$('#suras').val();
    if(selected_sura_id){
        localStorage.setItem('selected_sura_id',selected_sura_id);
        let selected_sura_aya_range=suras_aya_range[selected_sura_id-1];
        let minAya=selected_sura_aya_range.start_aya_id;
        let maxAya=selected_sura_aya_range.end_aya_id;
        setAyasRange(minAya,maxAya);
    }
}

 