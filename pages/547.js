const nearbySurasNames = {
    58: 'المُجَادلة',
    59: 'الحَشر',
    60: 'المُمتَحنَة',
    61: 'الصَّف',
};
const choicesObjects = {
    "545": "لا تجد قوما يؤمنون بالله",
    "546": "ذلك بانهم شاقوا الله ورسوله",
    "548": "فكان عاقبتهما انهما في النار",
    "549": "ياايها الذين امنوا لا تتخذوا",
};
const ayas = [{"aya_id": 5136, "coordinates": [[90, 46, 322, 34], [124, 46, 322, 34], [159, 122, 247, 34]], "aya_moshaf": "وَٱلَّذِينَ جَآءُو مِنۢ بَعۡدِهِمۡ يَقُولُونَ رَبَّنَا ٱغۡفِرۡ لَنَا وَلِإِخۡوَٰنِنَا ٱلَّذِينَ سَبَقُونَا بِٱلۡإِيمَٰنِ وَلَا تَجۡعَلۡ فِي قُلُوبِنَا غِلّٗا لِّلَّذِينَ ءَامَنُواْ رَبَّنَآ إِنَّكَ رَءُوفٞ رَّحِيمٌ "}, {"aya_id": 5137, "coordinates": [[159, 46, 76, 34], [193, 46, 322, 34], [227, 46, 322, 34], [262, 46, 322, 34], [296, 334, 35, 34]], "aya_moshaf": "۞ أَلَمۡ تَرَ إِلَى ٱلَّذِينَ نَافَقُواْ يَقُولُونَ لِإِخۡوَٰنِهِمُ ٱلَّذِينَ كَفَرُواْ مِنۡ أَهۡلِ ٱلۡكِتَٰبِ لَئِنۡ أُخۡرِجۡتُمۡ لَنَخۡرُجَنَّ مَعَكُمۡ وَلَا نُطِيعُ فِيكُمۡ أَحَدًا أَبَدٗا وَإِن قُوتِلۡتُمۡ لَنَنصُرَنَّكُمۡ وَٱللَّهُ يَشۡهَدُ إِنَّهُمۡ لَكَٰذِبُونَ "}, {"aya_id": 5138, "coordinates": [[296, 46, 288, 34], [330, 46, 322, 34]], "aya_moshaf": "لَئِنۡ أُخۡرِجُواْ لَا يَخۡرُجُونَ مَعَهُمۡ وَلَئِن قُوتِلُواْ لَا يَنصُرُونَهُمۡ وَلَئِن نَّصَرُوهُمۡ لَيُوَلُّنَّ ٱلۡأَدۡبَٰرَ ثُمَّ لَا يُنصَرُونَ "}, {"aya_id": 5139, "coordinates": [[365, 46, 322, 34], [399, 255, 114, 34]], "aya_moshaf": "لَأَنتُمۡ أَشَدُّ رَهۡبَةٗ فِي صُدُورِهِم مِّنَ ٱللَّهِۚ ذَٰلِكَ بِأَنَّهُمۡ قَوۡمٞ لَّا يَفۡقَهُونَ "}, {"aya_id": 5140, "coordinates": [[399, 46, 209, 34], [433, 46, 322, 34], [468, 46, 322, 34]], "aya_moshaf": "لَا يُقَٰتِلُونَكُمۡ جَمِيعًا إِلَّا فِي قُرٗى مُّحَصَّنَةٍ أَوۡ مِن وَرَآءِ جُدُرِۭۚ بَأۡسُهُم بَيۡنَهُمۡ شَدِيدٞۚ تَحۡسَبُهُمۡ جَمِيعٗا وَقُلُوبُهُمۡ شَتَّىٰۚ ذَٰلِكَ بِأَنَّهُمۡ قَوۡمٞ لَّا يَعۡقِلُونَ "}, {"aya_id": 5141, "coordinates": [[502, 46, 322, 34], [536, 316, 53, 34]], "aya_moshaf": "كَمَثَلِ ٱلَّذِينَ مِن قَبۡلِهِمۡ قَرِيبٗاۖ ذَاقُواْ وَبَالَ أَمۡرِهِمۡ وَلَهُمۡ عَذَابٌ أَلِيمٞ "}, {"aya_id": 5142, "coordinates": [[536, 46, 270, 34], [571, 46, 322, 34]], "aya_moshaf": "كَمَثَلِ ٱلشَّيۡطَٰنِ إِذۡ قَالَ لِلۡإِنسَٰنِ ٱكۡفُرۡ فَلَمَّا كَفَرَ قَالَ إِنِّي بَرِيٓءٞ مِّنكَ إِنِّيٓ أَخَافُ ٱللَّهَ رَبَّ ٱلۡعَٰلَمِينَ "}]
const ayasRanges = [{"ayas_ids_range": [5136, 5142], "sura_id": 59}];
