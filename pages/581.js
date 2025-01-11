const mainSuraId = 77;
const nearbySurasNames = {
    76: 'الإنسَان',
    77: 'المُرسَلات',
    78: 'النَّبَإ',
    79: 'النَّازعَات',
};
const choicesObjects = {
    "579": "عينا يشرب بها عباد الله",
    "580": "ومن الليل فاسجد له وسبحه",
    "582": "عم يتساءلون",
    "583": "ان للمتقين مفازا",
};
const ayas = [{"aya_id": 5642, "coordinates": [[87, 227, 145, 34]], "aya_moshaf": "أَلَمۡ نَخۡلُقكُّم مِّن مَّآءٖ مَّهِينٖ "}, {"aya_id": 5643, "coordinates": [[87, 93, 134, 34]], "aya_moshaf": "فَجَعَلۡنَٰهُ فِي قَرَارٖ مَّكِينٍ "}, {"aya_id": 5644, "coordinates": [[87, 49, 44, 34], [121, 312, 60, 34]], "aya_moshaf": "إِلَىٰ قَدَرٖ مَّعۡلُومٖ "}, {"aya_id": 5645, "coordinates": [[121, 180, 132, 34]], "aya_moshaf": "فَقَدَرۡنَا فَنِعۡمَ ٱلۡقَٰدِرُونَ "}, {"aya_id": 5646, "coordinates": [[121, 49, 131, 34]], "aya_moshaf": "وَيۡلٞ يَوۡمَئِذٖ لِّلۡمُكَذِّبِينَ "}, {"aya_id": 5647, "coordinates": [[156, 240, 132, 34]], "aya_moshaf": "أَلَمۡ نَجۡعَلِ ٱلۡأَرۡضَ كِفَاتًا "}, {"aya_id": 5648, "coordinates": [[156, 149, 91, 34]], "aya_moshaf": "أَحۡيَآءٗ وَأَمۡوَٰتٗا "}, {"aya_id": 5649, "coordinates": [[156, 49, 100, 34], [190, 195, 177, 34]], "aya_moshaf": "وَجَعَلۡنَا فِيهَا رَوَٰسِيَ شَٰمِخَٰتٖ وَأَسۡقَيۡنَٰكُم مَّآءٗ فُرَاتٗا "}, {"aya_id": 5650, "coordinates": [[190, 49, 146, 34]], "aya_moshaf": "وَيۡلٞ يَوۡمَئِذٖ لِّلۡمُكَذِّبِينَ "}, {"aya_id": 5651, "coordinates": [[224, 188, 184, 34]], "aya_moshaf": "ٱنطَلِقُوٓاْ إِلَىٰ مَا كُنتُم بِهِۦ تُكَذِّبُونَ "}, {"aya_id": 5652, "coordinates": [[224, 49, 139, 34], [259, 317, 55, 34]], "aya_moshaf": "ٱنطَلِقُوٓاْ إِلَىٰ ظِلّٖ ذِي ثَلَٰثِ شُعَبٖ "}, {"aya_id": 5653, "coordinates": [[259, 150, 167, 34]], "aya_moshaf": "لَّا ظَلِيلٖ وَلَا يُغۡنِي مِنَ ٱللَّهَبِ "}, {"aya_id": 5654, "coordinates": [[259, 49, 101, 34], [293, 306, 66, 34]], "aya_moshaf": "إِنَّهَا تَرۡمِي بِشَرَرٖ كَٱلۡقَصۡرِ "}, {"aya_id": 5655, "coordinates": [[293, 186, 120, 34]], "aya_moshaf": "كَأَنَّهُۥ جِمَٰلَتٞ صُفۡرٞ "}, {"aya_id": 5656, "coordinates": [[293, 49, 137, 34]], "aya_moshaf": "وَيۡلٞ يَوۡمَئِذٖ لِّلۡمُكَذِّبِينَ "}, {"aya_id": 5657, "coordinates": [[327, 249, 123, 34]], "aya_moshaf": "هَٰذَا يَوۡمُ لَا يَنطِقُونَ "}, {"aya_id": 5658, "coordinates": [[327, 103, 146, 34]], "aya_moshaf": "وَلَا يُؤۡذَنُ لَهُمۡ فَيَعۡتَذِرُونَ "}, {"aya_id": 5659, "coordinates": [[327, 49, 54, 34], [362, 293, 79, 34]], "aya_moshaf": "وَيۡلٞ يَوۡمَئِذٖ لِّلۡمُكَذِّبِينَ "}, {"aya_id": 5660, "coordinates": [[362, 95, 198, 34]], "aya_moshaf": "هَٰذَا يَوۡمُ ٱلۡفَصۡلِۖ جَمَعۡنَٰكُمۡ وَٱلۡأَوَّلِينَ "}, {"aya_id": 5661, "coordinates": [[362, 49, 46, 34], [396, 255, 117, 34]], "aya_moshaf": "فَإِن كَانَ لَكُمۡ كَيۡدٞ فَكِيدُونِ "}, {"aya_id": 5662, "coordinates": [[396, 131, 124, 34]], "aya_moshaf": "وَيۡلٞ يَوۡمَئِذٖ لِّلۡمُكَذِّبِينَ "}, {"aya_id": 5663, "coordinates": [[396, 49, 82, 34], [430, 275, 97, 34]], "aya_moshaf": "إِنَّ ٱلۡمُتَّقِينَ فِي ظِلَٰلٖ وَعُيُونٖ "}, {"aya_id": 5664, "coordinates": [[430, 151, 124, 34]], "aya_moshaf": "وَفَوَٰكِهَ مِمَّا يَشۡتَهُونَ "}, {"aya_id": 5665, "coordinates": [[430, 49, 102, 34], [465, 258, 114, 34]], "aya_moshaf": "كُلُواْ وَٱشۡرَبُواْ هَنِيٓـَٔۢا بِمَا كُنتُمۡ تَعۡمَلُونَ "}, {"aya_id": 5666, "coordinates": [[465, 104, 154, 34]], "aya_moshaf": "إِنَّا كَذَٰلِكَ نَجۡزِي ٱلۡمُحۡسِنِينَ "}, {"aya_id": 5667, "coordinates": [[465, 49, 55, 34], [499, 291, 81, 34]], "aya_moshaf": "وَيۡلٞ يَوۡمَئِذٖ لِّلۡمُكَذِّبِينَ "}, {"aya_id": 5668, "coordinates": [[499, 111, 180, 34]], "aya_moshaf": "كُلُواْ وَتَمَتَّعُواْ قَلِيلًا إِنَّكُم مُّجۡرِمُونَ "}, {"aya_id": 5669, "coordinates": [[499, 49, 62, 34], [533, 274, 98, 34]], "aya_moshaf": "وَيۡلٞ يَوۡمَئِذٖ لِّلۡمُكَذِّبِينَ "}, {"aya_id": 5670, "coordinates": [[533, 79, 195, 34]], "aya_moshaf": "وَإِذَا قِيلَ لَهُمُ ٱرۡكَعُواْ لَا يَرۡكَعُونَ "}, {"aya_id": 5671, "coordinates": [[533, 49, 30, 34], [568, 252, 120, 34]], "aya_moshaf": "وَيۡلٞ يَوۡمَئِذٖ لِّلۡمُكَذِّبِينَ "}, {"aya_id": 5672, "coordinates": [[568, 49, 203, 34]], "aya_moshaf": "فَبِأَيِّ حَدِيثِۭ بَعۡدَهُۥ يُؤۡمِنُونَ "}]