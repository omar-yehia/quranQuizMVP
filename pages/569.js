const nearbySurasNames = {
    69: 'الحَاقة',
    70: 'المَعَارج',
    71: 'نُوح',
    72: 'الجِن',
};
const choicesObjects = {
    "567": "وجاء فرعون ومن قبله والمؤتفكات",
    "568": "فليس له اليوم هاهنا حميم",
    "570": "فلا اقسم برب المشارق والمغارب",
    "571": "يرسل السماء عليكم مدرارا",
};
const ayas = [{"aya_id": 5386, "coordinates": [[92, 49, 322, 34]], "aya_moshaf": "يُبَصَّرُونَهُمۡۚ يَوَدُّ ٱلۡمُجۡرِمُ لَوۡ يَفۡتَدِي مِنۡ عَذَابِ يَوۡمِئِذِۭ بِبَنِيهِ "}, {"aya_id": 5387, "coordinates": [[126, 249, 123, 34]], "aya_moshaf": "وَصَٰحِبَتِهِۦ وَأَخِيهِ "}, {"aya_id": 5388, "coordinates": [[126, 125, 124, 34]], "aya_moshaf": "وَفَصِيلَتِهِ ٱلَّتِي تُـٔۡوِيهِ "}, {"aya_id": 5389, "coordinates": [[126, 49, 76, 34], [161, 273, 99, 34]], "aya_moshaf": "وَمَن فِي ٱلۡأَرۡضِ جَمِيعٗا ثُمَّ يُنجِيهِ "}, {"aya_id": 5390, "coordinates": [[161, 175, 98, 34]], "aya_moshaf": "كـَلَّآۖ إِنَّهَا لَظَىٰ "}, {"aya_id": 5391, "coordinates": [[161, 80, 95, 34]], "aya_moshaf": "نَزَّاعَةٗ لِّلشَّوَىٰ "}, {"aya_id": 5392, "coordinates": [[161, 49, 31, 34], [195, 278, 94, 34]], "aya_moshaf": "تَدۡعُواْ مَنۡ أَدۡبَرَ وَتَوَلَّىٰ "}, {"aya_id": 5393, "coordinates": [[195, 190, 88, 34]], "aya_moshaf": "وَجَمَعَ فَأَوۡعَىٰٓ "}, {"aya_id": 5394, "coordinates": [[195, 49, 141, 34], [229, 345, 27, 34]], "aya_moshaf": "۞ إِنَّ ٱلۡإِنسَٰنَ خُلِقَ هَلُوعًا "}, {"aya_id": 5395, "coordinates": [[229, 222, 123, 34]], "aya_moshaf": "إِذَا مَسَّهُ ٱلشَّرُّ جَزُوعٗا "}, {"aya_id": 5396, "coordinates": [[229, 74, 148, 34]], "aya_moshaf": "وَإِذَا مَسَّهُ ٱلۡخَيۡرُ مَنُوعًا "}, {"aya_id": 5397, "coordinates": [[229, 49, 25, 34], [264, 300, 72, 34]], "aya_moshaf": "إِلَّا ٱلۡمُصَلِّينَ "}, {"aya_id": 5398, "coordinates": [[264, 122, 178, 34]], "aya_moshaf": "ٱلَّذِينَ هُمۡ عَلَىٰ صَلَاتِهِمۡ دَآئِمُونَ "}, {"aya_id": 5399, "coordinates": [[264, 49, 73, 34], [298, 258, 114, 34]], "aya_moshaf": "وَٱلَّذِينَ فِيٓ أَمۡوَٰلِهِمۡ حَقّٞ مَّعۡلُومٞ "}, {"aya_id": 5400, "coordinates": [[298, 137, 121, 34]], "aya_moshaf": "لِّلسَّآئِلِ وَٱلۡمَحۡرُومِ "}, {"aya_id": 5401, "coordinates": [[298, 49, 88, 34], [332, 298, 74, 34]], "aya_moshaf": "وَٱلَّذِينَ يُصَدِّقُونَ بِيَوۡمِ ٱلدِّينِ "}, {"aya_id": 5402, "coordinates": [[332, 103, 195, 34]], "aya_moshaf": "وَٱلَّذِينَ هُم مِّنۡ عَذَابِ رَبِّهِم مُّشۡفِقُونَ "}, {"aya_id": 5403, "coordinates": [[332, 49, 54, 34], [367, 265, 107, 34]], "aya_moshaf": "إِنَّ عَذَابَ رَبِّهِمۡ غَيۡرُ مَأۡمُونٖ "}, {"aya_id": 5404, "coordinates": [[367, 94, 171, 34]], "aya_moshaf": "وَٱلَّذِينَ هُمۡ لِفُرُوجِهِمۡ حَٰفِظُونَ "}, {"aya_id": 5405, "coordinates": [[367, 49, 45, 34], [401, 112, 260, 34]], "aya_moshaf": "إِلَّا عَلَىٰٓ أَزۡوَٰجِهِمۡ أَوۡ مَا مَلَكَتۡ أَيۡمَٰنُهُمۡ فَإِنَّهُمۡ غَيۡرُ مَلُومِينَ "}, {"aya_id": 5406, "coordinates": [[401, 49, 63, 34], [435, 221, 151, 34]], "aya_moshaf": "فَمَنِ ٱبۡتَغَىٰ وَرَآءَ ذَٰلِكَ فَأُوْلَٰٓئِكَ هُمُ ٱلۡعَادُونَ "}, {"aya_id": 5407, "coordinates": [[435, 49, 172, 34], [470, 346, 26, 34]], "aya_moshaf": "وَٱلَّذِينَ هُمۡ لِأَمَٰنَٰتِهِمۡ وَعَهۡدِهِمۡ رَٰعُونَ "}, {"aya_id": 5408, "coordinates": [[470, 196, 150, 34]], "aya_moshaf": "وَٱلَّذِينَ هُم بِشَهَٰدَٰتِهِمۡ قَآئِمُونَ "}, {"aya_id": 5409, "coordinates": [[470, 49, 147, 34], [504, 345, 27, 34]], "aya_moshaf": "وَٱلَّذِينَ هُمۡ عَلَىٰ صَلَاتِهِمۡ يُحَافِظُونَ "}, {"aya_id": 5410, "coordinates": [[504, 194, 151, 34]], "aya_moshaf": "أُوْلَٰٓئِكَ فِي جَنَّٰتٖ مُّكۡرَمُونَ "}, {"aya_id": 5411, "coordinates": [[504, 49, 145, 34], [538, 346, 26, 34]], "aya_moshaf": "فَمَالِ ٱلَّذِينَ كَفَرُواْ قِبَلَكَ مُهۡطِعِينَ "}, {"aya_id": 5412, "coordinates": [[538, 184, 162, 34]], "aya_moshaf": "عَنِ ٱلۡيَمِينِ وَعَنِ ٱلشِّمَالِ عِزِينَ "}, {"aya_id": 5413, "coordinates": [[538, 49, 135, 34], [573, 240, 132, 34]], "aya_moshaf": "أَيَطۡمَعُ كُلُّ ٱمۡرِيٕٖ مِّنۡهُمۡ أَن يُدۡخَلَ جَنَّةَ نَعِيمٖ "}, {"aya_id": 5414, "coordinates": [[573, 49, 191, 34]], "aya_moshaf": "كـَلَّآۖ إِنَّا خَلَقۡنَٰهُم مِّمَّا يَعۡلَمُونَ "}]
const ayasRanges = [{"ayas_ids_range": [5386, 5414], "sura_id": 70}];
