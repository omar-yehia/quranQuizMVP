const nearbySurasNames = {
    3: 'آل عِمران',
    4: 'النِّسَاء',
    5: 'المَائدة',
    6: 'الأنعَام',
};
const choicesObjects = {
    "99": "وان امراه خافت من بعلها",
    "100": "ياايها الذين امنوا كونوا قوامين",
    "102": "لا يحب الله الجهر بالسوء",
    "103": "فبما نقضهم ميثاقهم وكفرهم بايات",
};
const ayas = [{"aya_id": 634, "coordinates": [[87, 49, 322, 34], [121, 49, 322, 34], [156, 49, 322, 34], [190, 49, 322, 34]], "aya_moshaf": "ٱلَّذِينَ يَتَرَبَّصُونَ بِكُمۡ فَإِن كَانَ لَكُمۡ فَتۡحٞ مِّنَ ٱللَّهِ قَالُوٓاْ أَلَمۡ نَكُن مَّعَكُمۡ وَإِن كَانَ لِلۡكَٰفِرِينَ نَصِيبٞ قَالُوٓاْ أَلَمۡ نَسۡتَحۡوِذۡ عَلَيۡكُمۡ وَنَمۡنَعۡكُم مِّنَ ٱلۡمُؤۡمِنِينَۚ فَٱللَّهُ يَحۡكُمُ بَيۡنَكُمۡ يَوۡمَ ٱلۡقِيَٰمَةِۚ وَلَن يَجۡعَلَ ٱللَّهُ لِلۡكَٰفِرِينَ عَلَى ٱلۡمُؤۡمِنِينَ سَبِيلًا "}, {"aya_id": 635, "coordinates": [[224, 49, 322, 34], [259, 49, 322, 34], [293, 320, 52, 34]], "aya_moshaf": "إِنَّ ٱلۡمُنَٰفِقِينَ يُخَٰدِعُونَ ٱللَّهَ وَهُوَ خَٰدِعُهُمۡ وَإِذَا قَامُوٓاْ إِلَى ٱلصَّلَوٰةِ قَامُواْ كُسَالَىٰ يُرَآءُونَ ٱلنَّاسَ وَلَا يَذۡكُرُونَ ٱللَّهَ إِلَّا قَلِيلٗا "}, {"aya_id": 636, "coordinates": [[293, 49, 271, 34], [327, 161, 211, 34]], "aya_moshaf": "مُّذَبۡذَبِينَ بَيۡنَ ذَٰلِكَ لَآ إِلَىٰ هَٰٓؤُلَآءِ وَلَآ إِلَىٰ هَٰٓؤُلَآءِۚ وَمَن يُضۡلِلِ ٱللَّهُ فَلَن تَجِدَ لَهُۥ سَبِيلٗا "}, {"aya_id": 637, "coordinates": [[327, 49, 112, 34], [362, 49, 322, 34], [396, 131, 241, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَا تَتَّخِذُواْ ٱلۡكَٰفِرِينَ أَوۡلِيَآءَ مِن دُونِ ٱلۡمُؤۡمِنِينَۚ أَتُرِيدُونَ أَن تَجۡعَلُواْ لِلَّهِ عَلَيۡكُمۡ سُلۡطَٰنٗا مُّبِينًا "}, {"aya_id": 638, "coordinates": [[396, 49, 82, 34], [430, 49, 322, 34]], "aya_moshaf": "إِنَّ ٱلۡمُنَٰفِقِينَ فِي ٱلدَّرۡكِ ٱلۡأَسۡفَلِ مِنَ ٱلنَّارِ وَلَن تَجِدَ لَهُمۡ نَصِيرًا "}, {"aya_id": 639, "coordinates": [[465, 49, 322, 34], [499, 49, 322, 34], [533, 220, 152, 34]], "aya_moshaf": "إِلَّا ٱلَّذِينَ تَابُواْ وَأَصۡلَحُواْ وَٱعۡتَصَمُواْ بِٱللَّهِ وَأَخۡلَصُواْ دِينَهُمۡ لِلَّهِ فَأُوْلَٰٓئِكَ مَعَ ٱلۡمُؤۡمِنِينَۖ وَسَوۡفَ يُؤۡتِ ٱللَّهُ ٱلۡمُؤۡمِنِينَ أَجۡرًا عَظِيمٗا "}, {"aya_id": 640, "coordinates": [[533, 49, 171, 34], [568, 49, 322, 34]], "aya_moshaf": "مَّا يَفۡعَلُ ٱللَّهُ بِعَذَابِكُمۡ إِن شَكَرۡتُمۡ وَءَامَنتُمۡۚ وَكَانَ ٱللَّهُ شَاكِرًا عَلِيمٗا "}]
const ayasRanges = [{"ayas_ids_range": [634, 640], "sura_id": 4}];
