const nearbySurasNames = {
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
    5: 'المَائدة',
};
const choicesObjects = {
    "61": "قل امنا بالله وما انزل",
    "62": "لن تنالوا البر حتي تنفقوا",
    "64": "ولله ما في السموات وما",
    "65": "ان الذين كفروا لن تغني",
};
const ayas = [{"aya_id": 394, "coordinates": [[88, 45, 322, 34], [122, 45, 322, 34]], "aya_moshaf": "وَكَيۡفَ تَكۡفُرُونَ وَأَنتُمۡ تُتۡلَىٰ عَلَيۡكُمۡ ءَايَٰتُ ٱللَّهِ وَفِيكُمۡ رَسُولُهُۥۗ وَمَن يَعۡتَصِم بِٱللَّهِ فَقَدۡ هُدِيَ إِلَىٰ صِرَٰطٖ مُّسۡتَقِيمٖ "}, {"aya_id": 395, "coordinates": [[157, 45, 322, 34], [191, 287, 81, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ ٱتَّقُواْ ٱللَّهَ حَقَّ تُقَاتِهِۦ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسۡلِمُونَ "}, {"aya_id": 396, "coordinates": [[191, 45, 242, 34], [225, 45, 322, 34], [260, 45, 322, 34], [294, 45, 322, 34], [328, 344, 24, 34]], "aya_moshaf": "وَٱعۡتَصِمُواْ بِحَبۡلِ ٱللَّهِ جَمِيعٗا وَلَا تَفَرَّقُواْۚ وَٱذۡكُرُواْ نِعۡمَتَ ٱللَّهِ عَلَيۡكُمۡ إِذۡ كُنتُمۡ أَعۡدَآءٗ فَأَلَّفَ بَيۡنَ قُلُوبِكُمۡ فَأَصۡبَحۡتُم بِنِعۡمَتِهِۦٓ إِخۡوَٰنٗا وَكُنتُمۡ عَلَىٰ شَفَا حُفۡرَةٖ مِّنَ ٱلنَّارِ فَأَنقَذَكُم مِّنۡهَاۗ كَذَٰلِكَ يُبَيِّنُ ٱللَّهُ لَكُمۡ ءَايَٰتِهِۦ لَعَلَّكُمۡ تَهۡتَدُونَ "}, {"aya_id": 397, "coordinates": [[328, 45, 299, 34], [363, 76, 292, 34]], "aya_moshaf": "وَلۡتَكُن مِّنكُمۡ أُمَّةٞ يَدۡعُونَ إِلَى ٱلۡخَيۡرِ وَيَأۡمُرُونَ بِٱلۡمَعۡرُوفِ وَيَنۡهَوۡنَ عَنِ ٱلۡمُنكَرِۚ وَأُوْلَٰٓئِكَ هُمُ ٱلۡمُفۡلِحُونَ "}, {"aya_id": 398, "coordinates": [[363, 45, 31, 34], [397, 45, 322, 34], [431, 189, 179, 34]], "aya_moshaf": "وَلَا تَكُونُواْ كَٱلَّذِينَ تَفَرَّقُواْ وَٱخۡتَلَفُواْ مِنۢ بَعۡدِ مَا جَآءَهُمُ ٱلۡبَيِّنَٰتُۚ وَأُوْلَٰٓئِكَ لَهُمۡ عَذَابٌ عَظِيمٞ "}, {"aya_id": 399, "coordinates": [[431, 45, 144, 34], [466, 45, 322, 34], [500, 150, 218, 34]], "aya_moshaf": "يَوۡمَ تَبۡيَضُّ وُجُوهٞ وَتَسۡوَدُّ وُجُوهٞۚ فَأَمَّا ٱلَّذِينَ ٱسۡوَدَّتۡ وُجُوهُهُمۡ أَكَفَرۡتُم بَعۡدَ إِيمَٰنِكُمۡ فَذُوقُواْ ٱلۡعَذَابَ بِمَا كُنتُمۡ تَكۡفُرُونَ "}, {"aya_id": 400, "coordinates": [[500, 45, 105, 34], [534, 115, 253, 34]], "aya_moshaf": "وَأَمَّا ٱلَّذِينَ ٱبۡيَضَّتۡ وُجُوهُهُمۡ فَفِي رَحۡمَةِ ٱللَّهِۖ هُمۡ فِيهَا خَٰلِدُونَ "}, {"aya_id": 401, "coordinates": [[534, 45, 70, 34], [569, 45, 322, 34]], "aya_moshaf": "تِلۡكَ ءَايَٰتُ ٱللَّهِ نَتۡلُوهَا عَلَيۡكَ بِٱلۡحَقِّۗ وَمَا ٱللَّهُ يُرِيدُ ظُلۡمٗا لِّلۡعَٰلَمِينَ "}]
const ayasRanges = [{"ayas_ids_range": [394, 401], "sura_id": 3}];
