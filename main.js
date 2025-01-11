const aya_page_map =[7,12,23,31,36,44,55,64,68,76,83,90,95,100,108,112,119,126,133,141,148,152,160,170,176,183,188,193,197,203,209,217,222,226,231,237,240,244,252,255,259,263,266,271,276,281,288,289,293,302,308,315,322,330,338,345,354,363,370,376,384,393,401,408,414,425,433,441,446,450,458,466,473,479,487,493,499,504,507,512,516,519,526,530,537,544,552,558,567,572,579,584,587,594,598,606,614,620,627,633,640,647,655,663,668,671,674,678,682,686,692,700,705,710,714,719,726,733,739,745,751,758,764,772,777,782,789,797,807,816,824,833,841,848,857,862,870,879,883,890,899,907,913,920,926,931,935,940,946,954,965,976,984,991,997,1005,1011,1021,1027,1035,1041,1049,1058,1074,1084,1091,1097,1103,1109,1113,1117,1124,1132,1141,1149,1160,1168,1176,1185,1193,1200,1205,1212,1221,1229,1235,1241,1248,1255,1261,1266,1271,1275,1282,1289,1296,1303,1307,1314,1321,1328,1334,1341,1346,1352,1357,1364,1370,1378,1384,1389,1397,1406,1417,1425,1434,1442,1452,1461,1470,1478,1485,1492,1501,1510,1518,1526,1535,1544,1554,1561,1570,1581,1590,1600,1610,1618,1626,1633,1639,1648,1659,1665,1674,1682,1691,1699,1707,1712,1720,1725,1735,1741,1749,1755,1760,1768,1774,1783,1792,1802,1817,1833,1853,1872,1892,1907,1915,1927,1935,1943,1955,1965,1973,1980,1988,1994,2003,2011,2019,2029,2036,2046,2056,2067,2078,2087,2095,2105,2115,2125,2133,2144,2155,2160,2167,2174,2185,2193,2201,2214,2223,2237,2250,2261,2275,2288,2301,2314,2326,2345,2360,2385,2399,2412,2424,2435,2446,2461,2473,2483,2493,2507,2518,2527,2540,2555,2564,2573,2584,2595,2600,2610,2618,2625,2633,2641,2650,2659,2667,2673,2690,2700,2715,2732,2747,2762,2777,2791,2801,2811,2818,2822,2827,2834,2844,2849,2852,2857,2866,2875,2887,2898,2910,2922,2932,2951,2971,2992,3015,3043,3068,3091,3115,3138,3159,3172,3181,3194,3203,3214,3222,3235,3247,3257,3265,3273,3280,3287,3295,3302,3311,3322,3329,3336,3346,3354,3363,3370,3378,3385,3392,3403,3414,3424,3433,3441,3450,3459,3469,3480,3488,3497,3503,3514,3523,3533,3539,3548,3555,3563,3568,3576,3583,3587,3595,3606,3613,3620,3628,3637,3645,3654,3663,3671,3678,3690,3698,3704,3717,3732,3745,3759,3775,3788,3812,3839,3864,3890,3914,3941,3970,3986,3996,4012,4031,4053,4063,4068,4079,4089,4098,4105,4114,4125,4132,4140,4149,4158,4166,4173,4182,4191,4199,4210,4218,4229,4238,4247,4256,4264,4272,4282,4287,4294,4303,4316,4323,4335,4347,4358,4372,4385,4398,4414,4432,4453,4473,4486,4495,4505,4515,4524,4530,4538,4545,4556,4564,4574,4583,4592,4598,4606,4611,4616,4623,4630,4645,4665,4681,4705,4726,4749,4766,4784,4810,4828,4852,4873,4895,4917,4941,4968,4995,5029,5055,5078,5086,5093,5099,5104,5110,5115,5125,5129,5135,5142,5150,5155,5161,5168,5177,5185,5192,5199,5208,5217,5222,5229,5236,5241,5253,5267,5286,5313,5331,5357,5385,5414,5429,5447,5460,5475,5494,5512,5542,5570,5596,5616,5641,5672,5702,5727,5758,5800,5829,5854,5882,5909,5931,5963,5993,6016,6043,6072,6098,6125,6137,6155,6176,6193,6207,6221,6236];

const mainAyaId = new URLSearchParams(window.location.search).get('i');

const pageNumber=findPage(mainAyaId,aya_page_map);
const pageName='pages/'+pageNumber+'.js?v=0';



const canvas = document.getElementById('canvas');
const backgroundImage = document.getElementById('backgroundImage');
backgroundImage.src = "https://app.quranflash.com/book/MedinaOld/epub/EPUB/imgs/"+String(pageNumber+3).padStart(4, '0')+".png";

function drawRectangles(backgroundImage,ayas) {
    const imageWidth = backgroundImage.offsetWidth;
    const imageHeight = backgroundImage.offsetHeight;
    const naturalWidth = backgroundImage.naturalWidth;
    const naturalHeight = backgroundImage.naturalHeight;

    // Remove existing rectangles to avoid duplication
    canvas.querySelectorAll('.rectangle').forEach(rect => rect.remove());

    let scl = 1.62;
    const scaleX = scl * imageWidth / naturalWidth;
    const scaleY = scl * imageHeight / naturalHeight;

    ayas.forEach(function (ayaElement) {
        ayaElement.coordinates.forEach(function(arr){
            const [top, left, width, height] = arr; // Correctly destructure `coordinates`
            const rect = document.createElement('div');
            rect.classList.add('rectangle');
            rect.dataset.aya_id = ayaElement.aya_id;
            rect.style.zIndex = '10';
        
            // Scale positions and dimensions
            rect.style.position = 'absolute'; // Ensure it positions correctly
            rect.style.top = top * scaleY + 'px';
            rect.style.left = left * scaleX + 'px';
            rect.style.width = width * scaleX + 'px';
            rect.style.height = height * scaleY + 'px';
        
            canvas.appendChild(rect);
        });
        
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
function suraQuestionCallBack(){
    $('#rlModal').modal('toggle');
}
function rlQuestionCallBack(){
    $('#fourChoicesModal').modal('toggle');
}
function ayaNextPageQuestionCallBack(){
    startRecitingMode();
}
function newAyaId(){
    return getRandomInt(1,5104);
}
function reciteQuestionCallBack(){
    $('#new_test_link').attr('href',"?i="+newAyaId());
    $('#finalStatsModal').modal('toggle');
}


// reciting functions
function recitingMode() {
    resetAllAyas();
    reciteClickListener();
    $('#reciteButton').trigger('click');
}
function startRecitingMode(){
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
    $('#reciteButton').on('click', function() {
        console.log('hererere');
        var firstOpaqueRectangle = $('.rectangle').filter(function() {
            return $(this).css('opacity') != 0;
        }).first();
        if(firstOpaqueRectangle.length==0){
            $('#reciteButton').prop('disabled',true);
            reciteQuestionCallBack();
        }
        firstOpaqueRectangle.css('opacity', 0);
        console.log(firstOpaqueRectangle);
    });
}
$('#counterRedButton').on('click',function(){
    let count=$('#counter').data('count');
    count++;
    $('#counter').data('count',count);
    $('#counter').text(count);
});
// end reciting functions

function showCheckMark(x,y){
    var image = $('#checkMark');
    image.show();
    image.css({zIndex:999,position: 'absolute', left:x, top:y+200, opacity:1});
    image.animate({ left: x, top: y , opacity:0 }, 1000);
    console.log('animation here');
}


$('.modal').on('show.bs.modal', function() {
    $('.modal').not($(this)).each(function() {
        $(this).modal('hide');
    });
});



function findPage(ayaId, lastAyas) {
    if(ayaId<=7){
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
            left=mid+1;
            break;
        }
    }

    for (let i = left; i <= right; i++) {
        if (lastAyas[i] == ayaId || lastAyas[i] > ayaId) {
            return i+1;
        }
    }

    return  1; //just a fallback to prevent errors
}
