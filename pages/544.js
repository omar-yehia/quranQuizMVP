const nearbySurasNames = {
    57: 'الحدِيد',
    58: 'المُجَادلة',
    59: 'الحَشر',
    60: 'المُمتَحنَة',
};
const choicesObjects = {
    "542": "قد سمع الله قول التي",
    "543": "الم تر ان الله يعلم",
    "545": "لا تجد قوما يؤمنون بالله",
    "546": "ذلك بانهم شاقوا الله ورسوله",
};
const ayas = [{"aya_id": 5116, "coordinates": [[80, 92, 322, 34], [114, 92, 322, 34], [149, 388, 27, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓاْ إِذَا نَٰجَيۡتُمُ ٱلرَّسُولَ فَقَدِّمُواْ بَيۡنَ يَدَيۡ نَجۡوَىٰكُمۡ صَدَقَةٗۚ ذَٰلِكَ خَيۡرٞ لَّكُمۡ وَأَطۡهَرُۚ فَإِن لَّمۡ تَجِدُواْ فَإِنَّ ٱللَّهَ غَفُورٞ رَّحِيمٌ "}, {"aya_id": 5117, "coordinates": [[149, 92, 296, 34], [183, 92, 322, 34], [217, 235, 180, 34]], "aya_moshaf": "ءَأَشۡفَقۡتُمۡ أَن تُقَدِّمُواْ بَيۡنَ يَدَيۡ نَجۡوَىٰكُمۡ صَدَقَٰتٖۚ فَإِذۡ لَمۡ تَفۡعَلُواْ وَتَابَ ٱللَّهُ عَلَيۡكُمۡ فَأَقِيمُواْ ٱلصَّلَوٰةَ وَءَاتُواْ ٱلزَّكَوٰةَ وَأَطِيعُواْ ٱللَّهَ وَرَسُولَهُۥۚ وَٱللَّهُ خَبِيرُۢ بِمَا تَعۡمَلُونَ "}, {"aya_id": 5118, "coordinates": [[217, 92, 143, 34], [252, 92, 322, 34], [286, 328, 87, 34]], "aya_moshaf": "۞ أَلَمۡ تَرَ إِلَى ٱلَّذِينَ تَوَلَّوۡاْ قَوۡمًا غَضِبَ ٱللَّهُ عَلَيۡهِم مَّا هُم مِّنكُمۡ وَلَا مِنۡهُمۡ وَيَحۡلِفُونَ عَلَى ٱلۡكَذِبِ وَهُمۡ يَعۡلَمُونَ "}, {"aya_id": 5119, "coordinates": [[286, 92, 236, 34], [320, 348, 67, 34]], "aya_moshaf": "أَعَدَّ ٱللَّهُ لَهُمۡ عَذَابٗا شَدِيدًاۖ إِنَّهُمۡ سَآءَ مَا كَانُواْ يَعۡمَلُونَ "}, {"aya_id": 5120, "coordinates": [[320, 92, 256, 34], [355, 321, 94, 34]], "aya_moshaf": "ٱتَّخَذُوٓاْ أَيۡمَٰنَهُمۡ جُنَّةٗ فَصَدُّواْ عَن سَبِيلِ ٱللَّهِ فَلَهُمۡ عَذَابٞ مُّهِينٞ "}, {"aya_id": 5121, "coordinates": [[355, 92, 229, 34], [389, 160, 255, 34]], "aya_moshaf": "لَّن تُغۡنِيَ عَنۡهُمۡ أَمۡوَٰلُهُمۡ وَلَآ أَوۡلَٰدُهُم مِّنَ ٱللَّهِ شَيۡـًٔاۚ أُوْلَٰٓئِكَ أَصۡحَٰبُ ٱلنَّارِۖ هُمۡ فِيهَا خَٰلِدُونَ "}, {"aya_id": 5122, "coordinates": [[389, 92, 68, 34], [423, 92, 322, 34], [458, 290, 125, 34]], "aya_moshaf": "يَوۡمَ يَبۡعَثُهُمُ ٱللَّهُ جَمِيعٗا فَيَحۡلِفُونَ لَهُۥ كَمَا يَحۡلِفُونَ لَكُمۡ وَيَحۡسَبُونَ أَنَّهُمۡ عَلَىٰ شَيۡءٍۚ أَلَآ إِنَّهُمۡ هُمُ ٱلۡكَٰذِبُونَ "}, {"aya_id": 5123, "coordinates": [[458, 92, 198, 34], [492, 92, 322, 34], [526, 388, 27, 34]], "aya_moshaf": "ٱسۡتَحۡوَذَ عَلَيۡهِمُ ٱلشَّيۡطَٰنُ فَأَنسَىٰهُمۡ ذِكۡرَ ٱللَّهِۚ أُوْلَٰٓئِكَ حِزۡبُ ٱلشَّيۡطَٰنِۚ أَلَآ إِنَّ حِزۡبَ ٱلشَّيۡطَٰنِ هُمُ ٱلۡخَٰسِرُونَ "}, {"aya_id": 5124, "coordinates": [[526, 92, 296, 34]], "aya_moshaf": "إِنَّ ٱلَّذِينَ يُحَآدُّونَ ٱللَّهَ وَرَسُولَهُۥٓ أُوْلَٰٓئِكَ فِي ٱلۡأَذَلِّينَ "}, {"aya_id": 5125, "coordinates": [[561, 92, 322, 34]], "aya_moshaf": "كَتَبَ ٱللَّهُ لَأَغۡلِبَنَّ أَنَا۠ وَرُسُلِيٓۚ إِنَّ ٱللَّهَ قَوِيٌّ عَزِيزٞ "}]
const ayasRanges = [{"ayas_ids_range": [5116, 5125], "sura_id": 58}];
