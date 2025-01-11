const nearbySurasNames = {
    1: 'الفَاتِحة',
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
};
const choicesObjects = {
    "32": "واذكروا الله في ايام معدودات",
    "33": "سل بني اسرائيل كم اتيناهم",
    "35": "في الدنيا والاخره ويسالونك عن",
    "36": "لا يؤاخذكم الله باللغو في",
};
const ayas = [{"aya_id": 223, "coordinates": [[85, 93, 322, 34], [119, 93, 322, 34], [154, 209, 207, 34]], "aya_moshaf": "كُتِبَ عَلَيۡكُمُ ٱلۡقِتَالُ وَهُوَ كُرۡهٞ لَّكُمۡۖ وَعَسَىٰٓ أَن تَكۡرَهُواْ شَيۡـٔٗا وَهُوَ خَيۡرٞ لَّكُمۡۖ وَعَسَىٰٓ أَن تُحِبُّواْ شَيۡـٔٗا وَهُوَ شَرّٞ لَّكُمۡۚ وَٱللَّهُ يَعۡلَمُ وَأَنتُمۡ لَا تَعۡلَمُونَ "}, {"aya_id": 224, "coordinates": [[154, 93, 116, 34], [188, 93, 322, 34], [222, 93, 322, 34], [257, 93, 322, 34], [291, 93, 322, 34], [325, 93, 322, 34], [360, 93, 322, 34], [394, 257, 159, 34]], "aya_moshaf": "يَسۡـَٔلُونَكَ عَنِ ٱلشَّهۡرِ ٱلۡحَرَامِ قِتَالٖ فِيهِۖ قُلۡ قِتَالٞ فِيهِ كَبِيرٞۚ وَصَدٌّ عَن سَبِيلِ ٱللَّهِ وَكُفۡرُۢ بِهِۦ وَٱلۡمَسۡجِدِ ٱلۡحَرَامِ وَإِخۡرَاجُ أَهۡلِهِۦ مِنۡهُ أَكۡبَرُ عِندَ ٱللَّهِۚ وَٱلۡفِتۡنَةُ أَكۡبَرُ مِنَ ٱلۡقَتۡلِۗ وَلَا يَزَالُونَ يُقَٰتِلُونَكُمۡ حَتَّىٰ يَرُدُّوكُمۡ عَن دِينِكُمۡ إِنِ ٱسۡتَطَٰعُواْۚ وَمَن يَرۡتَدِدۡ مِنكُمۡ عَن دِينِهِۦ فَيَمُتۡ وَهُوَ كَافِرٞ فَأُوْلَٰٓئِكَ حَبِطَتۡ أَعۡمَٰلُهُمۡ فِي ٱلدُّنۡيَا وَٱلۡأٓخِرَةِۖ وَأُوْلَٰٓئِكَ أَصۡحَٰبُ ٱلنَّارِۖ هُمۡ فِيهَا خَٰلِدُونَ "}, {"aya_id": 225, "coordinates": [[394, 93, 164, 34], [428, 93, 322, 34], [463, 262, 154, 34]], "aya_moshaf": "إِنَّ ٱلَّذِينَ ءَامَنُواْ وَٱلَّذِينَ هَاجَرُواْ وَجَٰهَدُواْ فِي سَبِيلِ ٱللَّهِ أُوْلَٰٓئِكَ يَرۡجُونَ رَحۡمَتَ ٱللَّهِۚ وَٱللَّهُ غَفُورٞ رَّحِيمٞ "}, {"aya_id": 226, "coordinates": [[463, 93, 169, 34], [497, 93, 322, 34], [531, 93, 322, 34], [566, 93, 322, 34]], "aya_moshaf": "۞ يَسۡـَٔلُونَكَ عَنِ ٱلۡخَمۡرِ وَٱلۡمَيۡسِرِۖ قُلۡ فِيهِمَآ إِثۡمٞ كَبِيرٞ وَمَنَٰفِعُ لِلنَّاسِ وَإِثۡمُهُمَآ أَكۡبَرُ مِن نَّفۡعِهِمَاۗ وَيَسۡـَٔلُونَكَ مَاذَا يُنفِقُونَۖ قُلِ ٱلۡعَفۡوَۗ كَذَٰلِكَ يُبَيِّنُ ٱللَّهُ لَكُمُ ٱلۡأٓيَٰتِ لَعَلَّكُمۡ تَتَفَكَّرُونَ "}]
const ayasRanges = [{"ayas_ids_range": [223, 226], "sura_id": 2}];
