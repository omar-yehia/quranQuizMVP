const mainSuraId = 42;
const nearbySurasNames = {
    41: 'فُصِّلَت',
    42: 'الشُّوري',
    43: 'الزُّخرُف',
    44: 'الدُّخان',
};
const choicesObjects = {
    "485": "والذين يحاجون في الله من",
    "486": "ذلك الذي يبشر الله عباده",
    "488": "وتراهم يعرضون عليها خاشعين من",
    "489": "وكذلك اوحينا اليك روحا من",
};
const ayas = [{"aya_id": 4304, "coordinates": [[87, 164, 208, 34]], "aya_moshaf": "وَمِنۡ ءَايَٰتِهِ ٱلۡجَوَارِ فِي ٱلۡبَحۡرِ كَٱلۡأَعۡلَٰمِ "}, {"aya_id": 4305, "coordinates": [[87, 49, 115, 34], [121, 49, 322, 34], [156, 346, 26, 34]], "aya_moshaf": "إِن يَشَأۡ يُسۡكِنِ ٱلرِّيحَ فَيَظۡلَلۡنَ رَوَاكِدَ عَلَىٰ ظَهۡرِهِۦٓۚ إِنَّ فِي ذَٰلِكَ لَأٓيَٰتٖ لِّكُلِّ صَبَّارٖ شَكُورٍ "}, {"aya_id": 4306, "coordinates": [[156, 134, 212, 34]], "aya_moshaf": "أَوۡ يُوبِقۡهُنَّ بِمَا كَسَبُواْ وَيَعۡفُ عَن كَثِيرٖ "}, {"aya_id": 4307, "coordinates": [[156, 49, 85, 34], [190, 170, 202, 34]], "aya_moshaf": "وَيَعۡلَمَ ٱلَّذِينَ يُجَٰدِلُونَ فِيٓ ءَايَٰتِنَا مَا لَهُم مِّن مَّحِيصٖ "}, {"aya_id": 4308, "coordinates": [[190, 49, 121, 34], [224, 49, 322, 34], [259, 306, 66, 34]], "aya_moshaf": "فَمَآ أُوتِيتُم مِّن شَيۡءٖ فَمَتَٰعُ ٱلۡحَيَوٰةِ ٱلدُّنۡيَاۚ وَمَا عِندَ ٱللَّهِ خَيۡرٞ وَأَبۡقَىٰ لِلَّذِينَ ءَامَنُواْ وَعَلَىٰ رَبِّهِمۡ يَتَوَكَّلُونَ "}, {"aya_id": 4309, "coordinates": [[259, 49, 257, 34], [293, 248, 124, 34]], "aya_moshaf": "وَٱلَّذِينَ يَجۡتَنِبُونَ كَبَٰٓئِرَ ٱلۡإِثۡمِ وَٱلۡفَوَٰحِشَ وَإِذَا مَا غَضِبُواْ هُمۡ يَغۡفِرُونَ "}, {"aya_id": 4310, "coordinates": [[293, 49, 199, 34], [327, 145, 227, 34]], "aya_moshaf": "وَٱلَّذِينَ ٱسۡتَجَابُواْ لِرَبِّهِمۡ وَأَقَامُواْ ٱلصَّلَوٰةَ وَأَمۡرُهُمۡ شُورَىٰ بَيۡنَهُمۡ وَمِمَّا رَزَقۡنَٰهُمۡ يُنفِقُونَ "}, {"aya_id": 4311, "coordinates": [[327, 49, 96, 34], [362, 258, 114, 34]], "aya_moshaf": "وَٱلَّذِينَ إِذَآ أَصَابَهُمُ ٱلۡبَغۡيُ هُمۡ يَنتَصِرُونَ "}, {"aya_id": 4312, "coordinates": [[362, 49, 209, 34], [396, 131, 241, 34]], "aya_moshaf": "وَجَزَٰٓؤُاْ سَيِّئَةٖ سَيِّئَةٞ مِّثۡلُهَاۖ فَمَنۡ عَفَا وَأَصۡلَحَ فَأَجۡرُهُۥ عَلَى ٱللَّهِۚ إِنَّهُۥ لَا يُحِبُّ ٱلظَّٰلِمِينَ "}, {"aya_id": 4313, "coordinates": [[396, 49, 82, 34], [430, 157, 215, 34]], "aya_moshaf": "وَلَمَنِ ٱنتَصَرَ بَعۡدَ ظُلۡمِهِۦ فَأُوْلَٰٓئِكَ مَا عَلَيۡهِم مِّن سَبِيلٍ "}, {"aya_id": 4314, "coordinates": [[430, 49, 108, 34], [465, 49, 322, 34], [499, 286, 86, 34]], "aya_moshaf": "إِنَّمَا ٱلسَّبِيلُ عَلَى ٱلَّذِينَ يَظۡلِمُونَ ٱلنَّاسَ وَيَبۡغُونَ فِي ٱلۡأَرۡضِ بِغَيۡرِ ٱلۡحَقِّۚ أُوْلَٰٓئِكَ لَهُمۡ عَذَابٌ أَلِيمٞ "}, {"aya_id": 4315, "coordinates": [[499, 49, 237, 34], [533, 347, 25, 34]], "aya_moshaf": "وَلَمَن صَبَرَ وَغَفَرَ إِنَّ ذَٰلِكَ لَمِنۡ عَزۡمِ ٱلۡأُمُورِ "}, {"aya_id": 4316, "coordinates": [[533, 49, 298, 34], [568, 49, 322, 34]], "aya_moshaf": "وَمَن يُضۡلِلِ ٱللَّهُ فَمَا لَهُۥ مِن وَلِيّٖ مِّنۢ بَعۡدِهِۦۗ وَتَرَى ٱلظَّٰلِمِينَ لَمَّا رَأَوُاْ ٱلۡعَذَابَ يَقُولُونَ هَلۡ إِلَىٰ مَرَدّٖ مِّن سَبِيلٖ "}]