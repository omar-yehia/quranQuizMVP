const mainSuraId = 5;
const nearbySurasNames = {
    4: 'النِّسَاء',
    5: 'المَائدة',
    6: 'الأنعَام',
    7: 'الأعرَاف',
};
const choicesObjects = {
    "121": "لعن الذين كفروا من بني",
    "122": "وما لنا لا نؤمن بالله",
    "124": "احل لكم صيد البحر وطعامه",
    "125": "واذا قيل لهم تعالوا الي",
};
const ayas = [{"aya_id": 759, "coordinates": [[91, 54, 322, 34], [125, 126, 251, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓاْ إِنَّمَا ٱلۡخَمۡرُ وَٱلۡمَيۡسِرُ وَٱلۡأَنصَابُ وَٱلۡأَزۡلَٰمُ رِجۡسٞ مِّنۡ عَمَلِ ٱلشَّيۡطَٰنِ فَٱجۡتَنِبُوهُ لَعَلَّكُمۡ تُفۡلِحُونَ "}, {"aya_id": 760, "coordinates": [[125, 54, 72, 34], [160, 54, 322, 34], [194, 99, 278, 34]], "aya_moshaf": "إِنَّمَا يُرِيدُ ٱلشَّيۡطَٰنُ أَن يُوقِعَ بَيۡنَكُمُ ٱلۡعَدَٰوَةَ وَٱلۡبَغۡضَآءَ فِي ٱلۡخَمۡرِ وَٱلۡمَيۡسِرِ وَيَصُدَّكُمۡ عَن ذِكۡرِ ٱللَّهِ وَعَنِ ٱلصَّلَوٰةِۖ فَهَلۡ أَنتُم مُّنتَهُونَ "}, {"aya_id": 761, "coordinates": [[194, 54, 45, 34], [228, 54, 322, 34], [263, 245, 132, 34]], "aya_moshaf": "وَأَطِيعُواْ ٱللَّهَ وَأَطِيعُواْ ٱلرَّسُولَ وَٱحۡذَرُواْۚ فَإِن تَوَلَّيۡتُمۡ فَٱعۡلَمُوٓاْ أَنَّمَا عَلَىٰ رَسُولِنَا ٱلۡبَلَٰغُ ٱلۡمُبِينُ "}, {"aya_id": 762, "coordinates": [[263, 54, 191, 34], [297, 54, 322, 34], [331, 54, 322, 34], [366, 351, 26, 34]], "aya_moshaf": "لَيۡسَ عَلَى ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ جُنَاحٞ فِيمَا طَعِمُوٓاْ إِذَا مَا ٱتَّقَواْ وَّءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ ثُمَّ ٱتَّقَواْ وَّءَامَنُواْ ثُمَّ ٱتَّقَواْ وَّأَحۡسَنُواْۚ وَٱللَّهُ يُحِبُّ ٱلۡمُحۡسِنِينَ "}, {"aya_id": 763, "coordinates": [[366, 54, 297, 34], [400, 54, 322, 34], [434, 236, 141, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَيَبۡلُوَنَّكُمُ ٱللَّهُ بِشَيۡءٖ مِّنَ ٱلصَّيۡدِ تَنَالُهُۥٓ أَيۡدِيكُمۡ وَرِمَاحُكُمۡ لِيَعۡلَمَ ٱللَّهُ مَن يَخَافُهُۥ بِٱلۡغَيۡبِۚ فَمَنِ ٱعۡتَدَىٰ بَعۡدَ ذَٰلِكَ فَلَهُۥ عَذَابٌ أَلِيمٞ "}, {"aya_id": 764, "coordinates": [[434, 54, 182, 34], [469, 54, 322, 34], [503, 54, 322, 34], [537, 54, 322, 34], [572, 54, 322, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَا تَقۡتُلُواْ ٱلصَّيۡدَ وَأَنتُمۡ حُرُمٞۚ وَمَن قَتَلَهُۥ مِنكُم مُّتَعَمِّدٗا فَجَزَآءٞ مِّثۡلُ مَا قَتَلَ مِنَ ٱلنَّعَمِ يَحۡكُمُ بِهِۦ ذَوَا عَدۡلٖ مِّنكُمۡ هَدۡيَۢا بَٰلِغَ ٱلۡكَعۡبَةِ أَوۡ كَفَّٰرَةٞ طَعَامُ مَسَٰكِينَ أَوۡ عَدۡلُ ذَٰلِكَ صِيَامٗا لِّيَذُوقَ وَبَالَ أَمۡرِهِۦۗ عَفَا ٱللَّهُ عَمَّا سَلَفَۚ وَمَنۡ عَادَ فَيَنتَقِمُ ٱللَّهُ مِنۡهُۚ وَٱللَّهُ عَزِيزٞ ذُو ٱنتِقَامٍ "}]