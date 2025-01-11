const nearbySurasNames = {
    1: 'الفَاتِحة',
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
};
const choicesObjects = {
    "43": "الله ولي الذين امنوا يخرجهم",
    "44": "واذ قال ابراهيم رب ارني",
    "46": "وما انفقتم من نفقه او",
    "47": "الذين ياكلون الربا لا يقومون",
};
const ayas = [{"aya_id": 272, "coordinates": [[84, 49, 322, 34], [118, 49, 322, 34], [153, 49, 322, 34], [187, 204, 168, 34]], "aya_moshaf": "وَمَثَلُ ٱلَّذِينَ يُنفِقُونَ أَمۡوَٰلَهُمُ ٱبۡتِغَآءَ مَرۡضَاتِ ٱللَّهِ وَتَثۡبِيتٗا مِّنۡ أَنفُسِهِمۡ كَمَثَلِ جَنَّةِۭ بِرَبۡوَةٍ أَصَابَهَا وَابِلٞ فَـَٔاتَتۡ أُكُلَهَا ضِعۡفَيۡنِ فَإِن لَّمۡ يُصِبۡهَا وَابِلٞ فَطَلّٞۗ وَٱللَّهُ بِمَا تَعۡمَلُونَ بَصِيرٌ "}, {"aya_id": 273, "coordinates": [[187, 49, 155, 34], [221, 49, 322, 34], [256, 49, 322, 34], [290, 49, 322, 34], [324, 131, 241, 34]], "aya_moshaf": "أَيَوَدُّ أَحَدُكُمۡ أَن تَكُونَ لَهُۥ جَنَّةٞ مِّن نَّخِيلٖ وَأَعۡنَابٖ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُ لَهُۥ فِيهَا مِن كُلِّ ٱلثَّمَرَٰتِ وَأَصَابَهُ ٱلۡكِبَرُ وَلَهُۥ ذُرِّيَّةٞ ضُعَفَآءُ فَأَصَابَهَآ إِعۡصَارٞ فِيهِ نَارٞ فَٱحۡتَرَقَتۡۗ كَذَٰلِكَ يُبَيِّنُ ٱللَّهُ لَكُمُ ٱلۡأٓيَٰتِ لَعَلَّكُمۡ تَتَفَكَّرُونَ "}, {"aya_id": 274, "coordinates": [[324, 49, 82, 34], [359, 49, 322, 34], [393, 49, 322, 34], [427, 49, 322, 34], [462, 348, 24, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓاْ أَنفِقُواْ مِن طَيِّبَٰتِ مَا كَسَبۡتُمۡ وَمِمَّآ أَخۡرَجۡنَا لَكُم مِّنَ ٱلۡأَرۡضِۖ وَلَا تَيَمَّمُواْ ٱلۡخَبِيثَ مِنۡهُ تُنفِقُونَ وَلَسۡتُم بِـَٔاخِذِيهِ إِلَّآ أَن تُغۡمِضُواْ فِيهِۚ وَٱعۡلَمُوٓاْ أَنَّ ٱللَّهَ غَنِيٌّ حَمِيدٌ "}, {"aya_id": 275, "coordinates": [[462, 49, 299, 34], [496, 49, 322, 34]], "aya_moshaf": "ٱلشَّيۡطَٰنُ يَعِدُكُمُ ٱلۡفَقۡرَ وَيَأۡمُرُكُم بِٱلۡفَحۡشَآءِۖ وَٱللَّهُ يَعِدُكُم مَّغۡفِرَةٗ مِّنۡهُ وَفَضۡلٗاۗ وَٱللَّهُ وَٰسِعٌ عَلِيمٞ "}, {"aya_id": 276, "coordinates": [[530, 49, 322, 34], [565, 49, 322, 34]], "aya_moshaf": "يُؤۡتِي ٱلۡحِكۡمَةَ مَن يَشَآءُۚ وَمَن يُؤۡتَ ٱلۡحِكۡمَةَ فَقَدۡ أُوتِيَ خَيۡرٗا كَثِيرٗاۗ وَمَا يَذَّكَّرُ إِلَّآ أُوْلُواْ ٱلۡأَلۡبَٰبِ "}]
const ayasRanges = [{"ayas_ids_range": [272, 276], "sura_id": 2}];
