const nearbySurasNames = {
    7: 'الأعرَاف',
    8: 'الأنفَال',
    9: 'التوبَة',
    10: 'يُونس',
};
const choicesObjects = {
    "183": "واطيعوا الله ورسوله ولا تنازعوا",
    "184": "ذلك بان الله لم يك",
    "186": "ياايها النبي قل لمن في",
    "187": "براءه من الله ورسوله الي",
};
const ayas = [{"aya_id": 1222, "coordinates": [[87, 49, 322, 34], [121, 217, 155, 34]], "aya_moshaf": "وَإِن يُرِيدُوٓاْ أَن يَخۡدَعُوكَ فَإِنَّ حَسۡبَكَ ٱللَّهُۚ هُوَ ٱلَّذِيٓ أَيَّدَكَ بِنَصۡرِهِۦ وَبِٱلۡمُؤۡمِنِينَ "}, {"aya_id": 1223, "coordinates": [[121, 49, 168, 34], [156, 49, 322, 34], [190, 167, 205, 34]], "aya_moshaf": "وَأَلَّفَ بَيۡنَ قُلُوبِهِمۡۚ لَوۡ أَنفَقۡتَ مَا فِي ٱلۡأَرۡضِ جَمِيعٗا مَّآ أَلَّفۡتَ بَيۡنَ قُلُوبِهِمۡ وَلَٰكِنَّ ٱللَّهَ أَلَّفَ بَيۡنَهُمۡۚ إِنَّهُۥ عَزِيزٌ حَكِيمٞ "}, {"aya_id": 1224, "coordinates": [[190, 49, 118, 34], [224, 174, 198, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلنَّبِيُّ حَسۡبُكَ ٱللَّهُ وَمَنِ ٱتَّبَعَكَ مِنَ ٱلۡمُؤۡمِنِينَ "}, {"aya_id": 1225, "coordinates": [[224, 49, 125, 34], [259, 49, 322, 34], [293, 49, 322, 34], [327, 125, 247, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلنَّبِيُّ حَرِّضِ ٱلۡمُؤۡمِنِينَ عَلَى ٱلۡقِتَالِۚ إِن يَكُن مِّنكُمۡ عِشۡرُونَ صَٰبِرُونَ يَغۡلِبُواْ مِاْئَتَيۡنِۚ وَإِن يَكُن مِّنكُم مِّاْئَةٞ يَغۡلِبُوٓاْ أَلۡفٗا مِّنَ ٱلَّذِينَ كَفَرُواْ بِأَنَّهُمۡ قَوۡمٞ لَّا يَفۡقَهُونَ "}, {"aya_id": 1226, "coordinates": [[327, 49, 76, 34], [362, 49, 322, 34], [396, 49, 322, 34], [430, 186, 186, 34]], "aya_moshaf": "ٱلۡـَٰٔنَ خَفَّفَ ٱللَّهُ عَنكُمۡ وَعَلِمَ أَنَّ فِيكُمۡ ضَعۡفٗاۚ فَإِن يَكُن مِّنكُم مِّاْئَةٞ صَابِرَةٞ يَغۡلِبُواْ مِاْئَتَيۡنِۚ وَإِن يَكُن مِّنكُمۡ أَلۡفٞ يَغۡلِبُوٓاْ أَلۡفَيۡنِ بِإِذۡنِ ٱللَّهِۗ وَٱللَّهُ مَعَ ٱلصَّٰبِرِينَ "}, {"aya_id": 1227, "coordinates": [[430, 49, 137, 34], [465, 49, 322, 34], [499, 138, 234, 34]], "aya_moshaf": "مَا كَانَ لِنَبِيٍّ أَن يَكُونَ لَهُۥٓ أَسۡرَىٰ حَتَّىٰ يُثۡخِنَ فِي ٱلۡأَرۡضِۚ تُرِيدُونَ عَرَضَ ٱلدُّنۡيَا وَٱللَّهُ يُرِيدُ ٱلۡأٓخِرَةَۗ وَٱللَّهُ عَزِيزٌ حَكِيمٞ "}, {"aya_id": 1228, "coordinates": [[499, 49, 89, 34], [533, 112, 260, 34]], "aya_moshaf": "لَّوۡلَا كِتَٰبٞ مِّنَ ٱللَّهِ سَبَقَ لَمَسَّكُمۡ فِيمَآ أَخَذۡتُمۡ عَذَابٌ عَظِيمٞ "}, {"aya_id": 1229, "coordinates": [[533, 49, 63, 34], [568, 49, 322, 34]], "aya_moshaf": "فَكُلُواْ مِمَّا غَنِمۡتُمۡ حَلَٰلٗا طَيِّبٗاۚ وَٱتَّقُواْ ٱللَّهَۚ إِنَّ ٱللَّهَ غَفُورٞ رَّحِيمٞ "}]
const ayasRanges = [{"ayas_ids_range": [1222, 1229], "sura_id": 8}];
