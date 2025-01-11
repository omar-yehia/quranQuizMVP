const mainSuraId = 2;
const nearbySurasNames = {
    1: 'الفَاتِحة',
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
};
const choicesObjects = {
    "42": "تلك الرسل فضلنا بعضهم علي",
    "43": "الله ولي الذين امنوا يخرجهم",
    "45": "ومثل الذين ينفقون اموالهم ابتغاء",
    "46": "وما انفقتم من نفقه او",
};
const ayas = [{"aya_id": 267, "coordinates": [[80, 92, 322, 34], [114, 92, 322, 34], [149, 92, 322, 34], [183, 92, 322, 34]], "aya_moshaf": "وَإِذۡ قَالَ إِبۡرَٰهِـۧمُ رَبِّ أَرِنِي كَيۡفَ تُحۡيِ ٱلۡمَوۡتَىٰۖ قَالَ أَوَلَمۡ تُؤۡمِنۖ قَالَ بَلَىٰ وَلَٰكِن لِّيَطۡمَئِنَّ قَلۡبِيۖ قَالَ فَخُذۡ أَرۡبَعَةٗ مِّنَ ٱلطَّيۡرِ فَصُرۡهُنَّ إِلَيۡكَ ثُمَّ ٱجۡعَلۡ عَلَىٰ كُلِّ جَبَلٖ مِّنۡهُنَّ جُزۡءٗا ثُمَّ ٱدۡعُهُنَّ يَأۡتِينَكَ سَعۡيٗاۚ وَٱعۡلَمۡ أَنَّ ٱللَّهَ عَزِيزٌ حَكِيمٞ "}, {"aya_id": 268, "coordinates": [[217, 92, 322, 34], [252, 92, 322, 34], [286, 222, 193, 34]], "aya_moshaf": "مَّثَلُ ٱلَّذِينَ يُنفِقُونَ أَمۡوَٰلَهُمۡ فِي سَبِيلِ ٱللَّهِ كَمَثَلِ حَبَّةٍ أَنۢبَتَتۡ سَبۡعَ سَنَابِلَ فِي كُلِّ سُنۢبُلَةٖ مِّاْئَةُ حَبَّةٖۗ وَٱللَّهُ يُضَٰعِفُ لِمَن يَشَآءُۚ وَٱللَّهُ وَٰسِعٌ عَلِيمٌ "}, {"aya_id": 269, "coordinates": [[286, 92, 130, 34], [320, 92, 322, 34], [355, 92, 322, 34], [389, 387, 28, 34]], "aya_moshaf": "ٱلَّذِينَ يُنفِقُونَ أَمۡوَٰلَهُمۡ فِي سَبِيلِ ٱللَّهِ ثُمَّ لَا يُتۡبِعُونَ مَآ أَنفَقُواْ مَنّٗا وَلَآ أَذٗى لَّهُمۡ أَجۡرُهُمۡ عِندَ رَبِّهِمۡ وَلَا خَوۡفٌ عَلَيۡهِمۡ وَلَا هُمۡ يَحۡزَنُونَ "}, {"aya_id": 270, "coordinates": [[389, 92, 295, 34], [423, 265, 150, 34]], "aya_moshaf": "۞ قَوۡلٞ مَّعۡرُوفٞ وَمَغۡفِرَةٌ خَيۡرٞ مِّن صَدَقَةٖ يَتۡبَعُهَآ أَذٗىۗ وَٱللَّهُ غَنِيٌّ حَلِيمٞ "}, {"aya_id": 271, "coordinates": [[423, 92, 173, 34], [458, 92, 322, 34], [492, 92, 322, 34], [526, 92, 322, 34], [561, 92, 322, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَا تُبۡطِلُواْ صَدَقَٰتِكُم بِٱلۡمَنِّ وَٱلۡأَذَىٰ كَٱلَّذِي يُنفِقُ مَالَهُۥ رِئَآءَ ٱلنَّاسِ وَلَا يُؤۡمِنُ بِٱللَّهِ وَٱلۡيَوۡمِ ٱلۡأٓخِرِۖ فَمَثَلُهُۥ كَمَثَلِ صَفۡوَانٍ عَلَيۡهِ تُرَابٞ فَأَصَابَهُۥ وَابِلٞ فَتَرَكَهُۥ صَلۡدٗاۖ لَّا يَقۡدِرُونَ عَلَىٰ شَيۡءٖ مِّمَّا كَسَبُواْۗ وَٱللَّهُ لَا يَهۡدِي ٱلۡقَوۡمَ ٱلۡكَٰفِرِينَ "}]