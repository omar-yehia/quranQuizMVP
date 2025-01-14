const nearbySurasNames = {
    4: 'النِّسَاء',
    5: 'المَائدة',
    6: 'الأنعَام',
    7: 'الأعرَاف',
};
const choicesObjects = {
    "125": "واذا قيل لهم تعالوا الي",
    "126": "يوم يجمع الله الرسل فيقول",
    "128": "الحمد لله الذي خلق السموات",
    "129": "ولو جعلناه ملكا لجعلناه رجلا",
};
const ayas = [{"aya_id": 783, "coordinates": [[87, 44, 322, 34], [121, 44, 322, 34], [156, 276, 91, 34]], "aya_moshaf": "قَالَ عِيسَى ٱبۡنُ مَرۡيَمَ ٱللَّهُمَّ رَبَّنَآ أَنزِلۡ عَلَيۡنَا مَآئِدَةٗ مِّنَ ٱلسَّمَآءِ تَكُونُ لَنَا عِيدٗا لِّأَوَّلِنَا وَءَاخِرِنَا وَءَايَةٗ مِّنكَۖ وَٱرۡزُقۡنَا وَأَنتَ خَيۡرُ ٱلرَّٰزِقِينَ "}, {"aya_id": 784, "coordinates": [[156, 44, 232, 34], [190, 44, 322, 34]], "aya_moshaf": "قَالَ ٱللَّهُ إِنِّي مُنَزِّلُهَا عَلَيۡكُمۡۖ فَمَن يَكۡفُرۡ بَعۡدُ مِنكُمۡ فَإِنِّيٓ أُعَذِّبُهُۥ عَذَابٗا لَّآ أُعَذِّبُهُۥٓ أَحَدٗا مِّنَ ٱلۡعَٰلَمِينَ "}, {"aya_id": 785, "coordinates": [[224, 44, 322, 34], [259, 44, 322, 34], [293, 44, 322, 34], [327, 73, 294, 34]], "aya_moshaf": "وَإِذۡ قَالَ ٱللَّهُ يَٰعِيسَى ٱبۡنَ مَرۡيَمَ ءَأَنتَ قُلۡتَ لِلنَّاسِ ٱتَّخِذُونِي وَأُمِّيَ إِلَٰهَيۡنِ مِن دُونِ ٱللَّهِۖ قَالَ سُبۡحَٰنَكَ مَا يَكُونُ لِيٓ أَنۡ أَقُولَ مَا لَيۡسَ لِي بِحَقٍّۚ إِن كُنتُ قُلۡتُهُۥ فَقَدۡ عَلِمۡتَهُۥۚ تَعۡلَمُ مَا فِي نَفۡسِي وَلَآ أَعۡلَمُ مَا فِي نَفۡسِكَۚ إِنَّكَ أَنتَ عَلَّٰمُ ٱلۡغُيُوبِ "}, {"aya_id": 786, "coordinates": [[327, 44, 29, 34], [362, 44, 322, 34], [396, 44, 322, 34], [430, 182, 185, 34]], "aya_moshaf": "مَا قُلۡتُ لَهُمۡ إِلَّا مَآ أَمَرۡتَنِي بِهِۦٓ أَنِ ٱعۡبُدُواْ ٱللَّهَ رَبِّي وَرَبَّكُمۡۚ وَكُنتُ عَلَيۡهِمۡ شَهِيدٗا مَّا دُمۡتُ فِيهِمۡۖ فَلَمَّا تَوَفَّيۡتَنِي كُنتَ أَنتَ ٱلرَّقِيبَ عَلَيۡهِمۡۚ وَأَنتَ عَلَىٰ كُلِّ شَيۡءٖ شَهِيدٌ "}, {"aya_id": 787, "coordinates": [[430, 44, 138, 34], [465, 131, 236, 34]], "aya_moshaf": "إِن تُعَذِّبۡهُمۡ فَإِنَّهُمۡ عِبَادُكَۖ وَإِن تَغۡفِرۡ لَهُمۡ فَإِنَّكَ أَنتَ ٱلۡعَزِيزُ ٱلۡحَكِيمُ "}, {"aya_id": 788, "coordinates": [[465, 44, 87, 34], [499, 44, 322, 34], [533, 44, 322, 34]], "aya_moshaf": "قَالَ ٱللَّهُ هَٰذَا يَوۡمُ يَنفَعُ ٱلصَّٰدِقِينَ صِدۡقُهُمۡۚ لَهُمۡ جَنَّٰتٞ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُ خَٰلِدِينَ فِيهَآ أَبَدٗاۖ رَّضِيَ ٱللَّهُ عَنۡهُمۡ وَرَضُواْ عَنۡهُۚ ذَٰلِكَ ٱلۡفَوۡزُ ٱلۡعَظِيمُ "}, {"aya_id": 789, "coordinates": [[568, 44, 322, 34]], "aya_moshaf": "لِلَّهِ مُلۡكُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَمَا فِيهِنَّۚ وَهُوَ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرُۢ "}]
const ayasRanges = [{"ayas_ids_range": [783, 789], "sura_id": 5}];
