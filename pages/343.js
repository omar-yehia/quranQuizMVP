const nearbySurasNames = {
    22: 'الحج',
    23: 'المؤمنُون',
    24: 'النور',
    25: 'الفُرقَان',
};
const choicesObjects = {
    "341": "ياايها الناس ضرب مثل فاستمعوا",
    "342": "قد افلح المؤمنون",
    "344": "فاذا استويت انت ومن معك",
    "345": "ما تسبق من امه اجلها",
};
const ayas = [{"aya_id": 2691, "coordinates": [[87, 49, 322, 34], [121, 280, 91, 34]], "aya_moshaf": "وَأَنزَلۡنَا مِنَ ٱلسَّمَآءِ مَآءَۢ بِقَدَرٖ فَأَسۡكَنَّٰهُ فِي ٱلۡأَرۡضِۖ وَإِنَّا عَلَىٰ ذَهَابِۭ بِهِۦ لَقَٰدِرُونَ "}, {"aya_id": 2692, "coordinates": [[121, 49, 231, 34], [156, 158, 213, 34]], "aya_moshaf": "فَأَنشَأۡنَا لَكُم بِهِۦ جَنَّٰتٖ مِّن نَّخِيلٖ وَأَعۡنَٰبٖ لَّكُمۡ فِيهَا فَوَٰكِهُ كَثِيرَةٞ وَمِنۡهَا تَأۡكُلُونَ "}, {"aya_id": 2693, "coordinates": [[156, 49, 109, 34], [190, 123, 248, 34]], "aya_moshaf": "وَشَجَرَةٗ تَخۡرُجُ مِن طُورِ سَيۡنَآءَ تَنۢبُتُ بِٱلدُّهۡنِ وَصِبۡغٖ لِّلۡأٓكِلِينَ "}, {"aya_id": 2694, "coordinates": [[190, 49, 74, 34], [224, 49, 322, 34], [259, 278, 93, 34]], "aya_moshaf": "وَإِنَّ لَكُمۡ فِي ٱلۡأَنۡعَٰمِ لَعِبۡرَةٗۖ نُّسۡقِيكُم مِّمَّا فِي بُطُونِهَا وَلَكُمۡ فِيهَا مَنَٰفِعُ كَثِيرَةٞ وَمِنۡهَا تَأۡكُلُونَ "}, {"aya_id": 2695, "coordinates": [[259, 100, 178, 34]], "aya_moshaf": "وَعَلَيۡهَا وَعَلَى ٱلۡفُلۡكِ تُحۡمَلُونَ "}, {"aya_id": 2696, "coordinates": [[259, 49, 51, 34], [293, 49, 322, 34], [327, 264, 107, 34]], "aya_moshaf": "وَلَقَدۡ أَرۡسَلۡنَا نُوحًا إِلَىٰ قَوۡمِهِۦ فَقَالَ يَٰقَوۡمِ ٱعۡبُدُواْ ٱللَّهَ مَا لَكُم مِّنۡ إِلَٰهٍ غَيۡرُهُۥٓۚ أَفَلَا تَتَّقُونَ "}, {"aya_id": 2697, "coordinates": [[327, 49, 215, 34], [362, 49, 322, 34], [396, 108, 263, 34]], "aya_moshaf": "فَقَالَ ٱلۡمَلَؤُاْ ٱلَّذِينَ كَفَرُواْ مِن قَوۡمِهِۦ مَا هَٰذَآ إِلَّا بَشَرٞ مِّثۡلُكُمۡ يُرِيدُ أَن يَتَفَضَّلَ عَلَيۡكُمۡ وَلَوۡ شَآءَ ٱللَّهُ لَأَنزَلَ مَلَٰٓئِكَةٗ مَّا سَمِعۡنَا بِهَٰذَا فِيٓ ءَابَآئِنَا ٱلۡأَوَّلِينَ "}, {"aya_id": 2698, "coordinates": [[396, 49, 59, 34], [430, 142, 229, 34]], "aya_moshaf": "إِنۡ هُوَ إِلَّا رَجُلُۢ بِهِۦ جِنَّةٞ فَتَرَبَّصُواْ بِهِۦ حَتَّىٰ حِينٖ "}, {"aya_id": 2699, "coordinates": [[430, 49, 93, 34], [465, 266, 105, 34]], "aya_moshaf": "قَالَ رَبِّ ٱنصُرۡنِي بِمَا كَذَّبُونِ "}, {"aya_id": 2700, "coordinates": [[465, 49, 217, 34], [499, 49, 322, 34], [533, 49, 322, 34], [568, 49, 322, 34]], "aya_moshaf": "فَأَوۡحَيۡنَآ إِلَيۡهِ أَنِ ٱصۡنَعِ ٱلۡفُلۡكَ بِأَعۡيُنِنَا وَوَحۡيِنَا فَإِذَا جَآءَ أَمۡرُنَا وَفَارَ ٱلتَّنُّورُ فَٱسۡلُكۡ فِيهَا مِن كُلّٖ زَوۡجَيۡنِ ٱثۡنَيۡنِ وَأَهۡلَكَ إِلَّا مَن سَبَقَ عَلَيۡهِ ٱلۡقَوۡلُ مِنۡهُمۡۖ وَلَا تُخَٰطِبۡنِي فِي ٱلَّذِينَ ظَلَمُوٓاْ إِنَّهُم مُّغۡرَقُونَ "}]
const ayasRanges = [{"ayas_ids_range": [2691, 2700], "sura_id": 23}];
