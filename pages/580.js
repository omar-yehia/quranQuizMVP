const mainSuraId = 76;
const nearbySurasNames = {
    75: 'القِيَامة',
    76: 'الإنسَان',
    77: 'المُرسَلات',
    78: 'النَّبَإ',
};
const choicesObjects = {
    "578": "كلا بل تحبون العاجله",
    "579": "عينا يشرب بها عباد الله",
    "581": "الم نخلقكم من ماء مهين",
    "582": "عم يتساءلون",
};
const ayas = [{"aya_id": 5617, "coordinates": [[80, 138, 277, 34]], "aya_moshaf": "وَمِنَ ٱلَّيۡلِ فَٱسۡجُدۡ لَهُۥ وَسَبِّحۡهُ لَيۡلٗا طَوِيلًا "}, {"aya_id": 5618, "coordinates": [[80, 92, 46, 34], [114, 129, 286, 34]], "aya_moshaf": "إِنَّ هَٰٓؤُلَآءِ يُحِبُّونَ ٱلۡعَاجِلَةَ وَيَذَرُونَ وَرَآءَهُمۡ يَوۡمٗا ثَقِيلٗا "}, {"aya_id": 5619, "coordinates": [[114, 92, 37, 34], [149, 92, 322, 34], [183, 391, 24, 34]], "aya_moshaf": "نَّحۡنُ خَلَقۡنَٰهُمۡ وَشَدَدۡنَآ أَسۡرَهُمۡۖ وَإِذَا شِئۡنَا بَدَّلۡنَآ أَمۡثَٰلَهُمۡ تَبۡدِيلًا "}, {"aya_id": 5620, "coordinates": [[183, 92, 299, 34]], "aya_moshaf": "إِنَّ هَٰذِهِۦ تَذۡكِرَةٞۖ فَمَن شَآءَ ٱتَّخَذَ إِلَىٰ رَبِّهِۦ سَبِيلٗا "}, {"aya_id": 5621, "coordinates": [[217, 92, 322, 34]], "aya_moshaf": "وَمَا تَشَآءُونَ إِلَّآ أَن يَشَآءَ ٱللَّهُۚ إِنَّ ٱللَّهَ كَانَ عَلِيمًا حَكِيمٗا "}, {"aya_id": 5622, "coordinates": [[252, 92, 322, 34]], "aya_moshaf": "يُدۡخِلُ مَن يَشَآءُ فِي رَحۡمَتِهِۦۚ وَٱلظَّٰلِمِينَ أَعَدَّ لَهُمۡ عَذَابًا أَلِيمَۢا "}, {"aya_id": 5623, "coordinates": [[355, 312, 103, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ وَٱلۡمُرۡسَلَٰتِ عُرۡفٗا "}, {"aya_id": 5624, "coordinates": [[355, 198, 114, 34]], "aya_moshaf": "فَٱلۡعَٰصِفَٰتِ عَصۡفٗا "}, {"aya_id": 5625, "coordinates": [[355, 92, 106, 34]], "aya_moshaf": "وَٱلنَّٰشِرَٰتِ نَشۡرٗا "}, {"aya_id": 5626, "coordinates": [[389, 319, 96, 34]], "aya_moshaf": "فَٱلۡفَٰرِقَٰتِ فَرۡقٗا "}, {"aya_id": 5627, "coordinates": [[389, 216, 103, 34]], "aya_moshaf": "فَٱلۡمُلۡقِيَٰتِ ذِكۡرًا "}, {"aya_id": 5628, "coordinates": [[389, 127, 89, 34]], "aya_moshaf": "عُذۡرًا أَوۡ نُذۡرًا "}, {"aya_id": 5629, "coordinates": [[389, 92, 35, 34], [423, 320, 95, 34]], "aya_moshaf": "إِنَّمَا تُوعَدُونَ لَوَٰقِعٞ "}, {"aya_id": 5630, "coordinates": [[423, 196, 124, 34]], "aya_moshaf": "فَإِذَا ٱلنُّجُومُ طُمِسَتۡ "}, {"aya_id": 5631, "coordinates": [[423, 92, 104, 34], [458, 390, 25, 34]], "aya_moshaf": "وَإِذَا ٱلسَّمَآءُ فُرِجَتۡ "}, {"aya_id": 5632, "coordinates": [[458, 275, 115, 34]], "aya_moshaf": "وَإِذَا ٱلۡجِبَالُ نُسِفَتۡ "}, {"aya_id": 5633, "coordinates": [[458, 172, 103, 34]], "aya_moshaf": "وَإِذَا ٱلرُّسُلُ أُقِّتَتۡ "}, {"aya_id": 5634, "coordinates": [[458, 92, 80, 34], [492, 387, 28, 34]], "aya_moshaf": "لِأَيِّ يَوۡمٍ أُجِّلَتۡ "}, {"aya_id": 5635, "coordinates": [[492, 301, 86, 34]], "aya_moshaf": "لِيَوۡمِ ٱلۡفَصۡلِ "}, {"aya_id": 5636, "coordinates": [[492, 151, 150, 34]], "aya_moshaf": "وَمَآ أَدۡرَىٰكَ مَا يَوۡمُ ٱلۡفَصۡلِ "}, {"aya_id": 5637, "coordinates": [[492, 92, 59, 34], [526, 328, 87, 34]], "aya_moshaf": "وَيۡلٞ يَوۡمَئِذٖ لِّلۡمُكَذِّبِينَ "}, {"aya_id": 5638, "coordinates": [[526, 209, 119, 34]], "aya_moshaf": "أَلَمۡ نُهۡلِكِ ٱلۡأَوَّلِينَ "}, {"aya_id": 5639, "coordinates": [[526, 92, 117, 34], [561, 388, 27, 34]], "aya_moshaf": "ثُمَّ نُتۡبِعُهُمُ ٱلۡأٓخِرِينَ "}, {"aya_id": 5640, "coordinates": [[561, 235, 153, 34]], "aya_moshaf": "كَذَٰلِكَ نَفۡعَلُ بِٱلۡمُجۡرِمِينَ "}, {"aya_id": 5641, "coordinates": [[561, 92, 143, 34]], "aya_moshaf": "وَيۡلٞ يَوۡمَئِذٖ لِّلۡمُكَذِّبِينَ "}]