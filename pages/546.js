const mainSuraId = 59;
const nearbySurasNames = {
    58: 'المُجَادلة',
    59: 'الحَشر',
    60: 'المُمتَحنَة',
    61: 'الصَّف',
};
const choicesObjects = {
    "544": "ياايها الذين امنوا اذا ناجيتم",
    "545": "لا تجد قوما يؤمنون بالله",
    "547": "والذين جاءوا من بعدهم يقولون",
    "548": "فكان عاقبتهما انهما في النار",
};
const ayas = [{"aya_id": 5130, "coordinates": [[87, 97, 322, 34], [121, 340, 80, 34]], "aya_moshaf": "ذَٰلِكَ بِأَنَّهُمۡ شَآقُّواْ ٱللَّهَ وَرَسُولَهُۥۖ وَمَن يُشَآقِّ ٱللَّهَ فَإِنَّ ٱللَّهَ شَدِيدُ ٱلۡعِقَابِ "}, {"aya_id": 5131, "coordinates": [[121, 97, 243, 34], [156, 165, 255, 34]], "aya_moshaf": "مَا قَطَعۡتُم مِّن لِّينَةٍ أَوۡ تَرَكۡتُمُوهَا قَآئِمَةً عَلَىٰٓ أُصُولِهَا فَبِإِذۡنِ ٱللَّهِ وَلِيُخۡزِيَ ٱلۡفَٰسِقِينَ "}, {"aya_id": 5132, "coordinates": [[156, 97, 68, 34], [190, 97, 322, 34], [224, 97, 322, 34], [259, 362, 58, 34]], "aya_moshaf": "وَمَآ أَفَآءَ ٱللَّهُ عَلَىٰ رَسُولِهِۦ مِنۡهُمۡ فَمَآ أَوۡجَفۡتُمۡ عَلَيۡهِ مِنۡ خَيۡلٖ وَلَا رِكَابٖ وَلَٰكِنَّ ٱللَّهَ يُسَلِّطُ رُسُلَهُۥ عَلَىٰ مَن يَشَآءُۚ وَٱللَّهُ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٞ "}, {"aya_id": 5133, "coordinates": [[259, 97, 265, 34], [293, 97, 322, 34], [327, 97, 322, 34], [362, 97, 322, 34]], "aya_moshaf": "مَّآ أَفَآءَ ٱللَّهُ عَلَىٰ رَسُولِهِۦ مِنۡ أَهۡلِ ٱلۡقُرَىٰ فَلِلَّهِ وَلِلرَّسُولِ وَلِذِي ٱلۡقُرۡبَىٰ وَٱلۡيَتَٰمَىٰ وَٱلۡمَسَٰكِينِ وَٱبۡنِ ٱلسَّبِيلِ كَيۡ لَا يَكُونَ دُولَةَۢ بَيۡنَ ٱلۡأَغۡنِيَآءِ مِنكُمۡۚ وَمَآ ءَاتَىٰكُمُ ٱلرَّسُولُ فَخُذُوهُ وَمَا نَهَىٰكُمۡ عَنۡهُ فَٱنتَهُواْۚ وَٱتَّقُواْ ٱللَّهَۖ إِنَّ ٱللَّهَ شَدِيدُ ٱلۡعِقَابِ "}, {"aya_id": 5134, "coordinates": [[396, 97, 322, 34], [430, 97, 322, 34], [465, 313, 107, 34]], "aya_moshaf": "لِلۡفُقَرَآءِ ٱلۡمُهَٰجِرِينَ ٱلَّذِينَ أُخۡرِجُواْ مِن دِيَٰرِهِمۡ وَأَمۡوَٰلِهِمۡ يَبۡتَغُونَ فَضۡلٗا مِّنَ ٱللَّهِ وَرِضۡوَٰنٗا وَيَنصُرُونَ ٱللَّهَ وَرَسُولَهُۥٓۚ أُوْلَٰٓئِكَ هُمُ ٱلصَّٰدِقُونَ "}, {"aya_id": 5135, "coordinates": [[465, 97, 216, 34], [499, 97, 322, 34], [533, 97, 322, 34], [568, 97, 322, 34]], "aya_moshaf": "وَٱلَّذِينَ تَبَوَّءُو ٱلدَّارَ وَٱلۡإِيمَٰنَ مِن قَبۡلِهِمۡ يُحِبُّونَ مَنۡ هَاجَرَ إِلَيۡهِمۡ وَلَا يَجِدُونَ فِي صُدُورِهِمۡ حَاجَةٗ مِّمَّآ أُوتُواْ وَيُؤۡثِرُونَ عَلَىٰٓ أَنفُسِهِمۡ وَلَوۡ كَانَ بِهِمۡ خَصَاصَةٞۚ وَمَن يُوقَ شُحَّ نَفۡسِهِۦ فَأُوْلَٰٓئِكَ هُمُ ٱلۡمُفۡلِحُونَ "}]