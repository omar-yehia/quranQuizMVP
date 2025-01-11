const mainSuraId = 7;
const nearbySurasNames = {
    6: 'الأنعَام',
    7: 'الأعرَاف',
    8: 'الأنفَال',
    9: 'التوبَة',
};
const choicesObjects = {
    "150": "هل ينظرون الا ان تاتيهم",
    "151": "المص",
    "153": "قالا ربنا ظلمنا انفسنا وان",
    "154": "يابني ادم خذوا زينتكم عند",
};
const ayas = [{"aya_id": 966, "coordinates": [[85, 87, 322, 34], [119, 302, 108, 34]], "aya_moshaf": "قَالَ مَا مَنَعَكَ أَلَّا تَسۡجُدَ إِذۡ أَمَرۡتُكَۖ قَالَ أَنَا۠ خَيۡرٞ مِّنۡهُ خَلَقۡتَنِي مِن نَّارٖ وَخَلَقۡتَهُۥ مِن طِينٖ "}, {"aya_id": 967, "coordinates": [[119, 87, 215, 34], [154, 236, 174, 34]], "aya_moshaf": "قَالَ فَٱهۡبِطۡ مِنۡهَا فَمَا يَكُونُ لَكَ أَن تَتَكَبَّرَ فِيهَا فَٱخۡرُجۡ إِنَّكَ مِنَ ٱلصَّٰغِرِينَ "}, {"aya_id": 968, "coordinates": [[154, 87, 149, 34], [188, 389, 21, 34]], "aya_moshaf": "قَالَ أَنظِرۡنِيٓ إِلَىٰ يَوۡمِ يُبۡعَثُونَ "}, {"aya_id": 969, "coordinates": [[188, 244, 145, 34]], "aya_moshaf": "قَالَ إِنَّكَ مِنَ ٱلۡمُنظَرِينَ "}, {"aya_id": 970, "coordinates": [[188, 87, 157, 34], [222, 288, 122, 34]], "aya_moshaf": "قَالَ فَبِمَآ أَغۡوَيۡتَنِي لَأَقۡعُدَنَّ لَهُمۡ صِرَٰطَكَ ٱلۡمُسۡتَقِيمَ "}, {"aya_id": 971, "coordinates": [[222, 87, 201, 34], [257, 116, 294, 34]], "aya_moshaf": "ثُمَّ لَأٓتِيَنَّهُم مِّنۢ بَيۡنِ أَيۡدِيهِمۡ وَمِنۡ خَلۡفِهِمۡ وَعَنۡ أَيۡمَٰنِهِمۡ وَعَن شَمَآئِلِهِمۡۖ وَلَا تَجِدُ أَكۡثَرَهُمۡ شَٰكِرِينَ "}, {"aya_id": 972, "coordinates": [[257, 87, 29, 34], [291, 87, 322, 34], [325, 345, 65, 34]], "aya_moshaf": "قَالَ ٱخۡرُجۡ مِنۡهَا مَذۡءُومٗا مَّدۡحُورٗاۖ لَّمَن تَبِعَكَ مِنۡهُمۡ لَأَمۡلَأَنَّ جَهَنَّمَ مِنكُمۡ أَجۡمَعِينَ "}, {"aya_id": 973, "coordinates": [[325, 87, 258, 34], [360, 143, 267, 34]], "aya_moshaf": "وَيَٰٓـَٔادَمُ ٱسۡكُنۡ أَنتَ وَزَوۡجُكَ ٱلۡجَنَّةَ فَكُلَا مِنۡ حَيۡثُ شِئۡتُمَا وَلَا تَقۡرَبَا هَٰذِهِ ٱلشَّجَرَةَ فَتَكُونَا مِنَ ٱلظَّٰلِمِينَ "}, {"aya_id": 974, "coordinates": [[360, 87, 56, 34], [394, 87, 322, 34], [428, 87, 322, 34], [463, 324, 86, 34]], "aya_moshaf": "فَوَسۡوَسَ لَهُمَا ٱلشَّيۡطَٰنُ لِيُبۡدِيَ لَهُمَا مَا وُۥرِيَ عَنۡهُمَا مِن سَوۡءَٰتِهِمَا وَقَالَ مَا نَهَىٰكُمَا رَبُّكُمَا عَنۡ هَٰذِهِ ٱلشَّجَرَةِ إِلَّآ أَن تَكُونَا مَلَكَيۡنِ أَوۡ تَكُونَا مِنَ ٱلۡخَٰلِدِينَ "}, {"aya_id": 975, "coordinates": [[463, 87, 237, 34]], "aya_moshaf": "وَقَاسَمَهُمَآ إِنِّي لَكُمَا لَمِنَ ٱلنَّٰصِحِينَ "}, {"aya_id": 976, "coordinates": [[497, 87, 322, 34], [531, 87, 322, 34], [566, 87, 322, 34]], "aya_moshaf": "فَدَلَّىٰهُمَا بِغُرُورٖۚ فَلَمَّا ذَاقَا ٱلشَّجَرَةَ بَدَتۡ لَهُمَا سَوۡءَٰتُهُمَا وَطَفِقَا يَخۡصِفَانِ عَلَيۡهِمَا مِن وَرَقِ ٱلۡجَنَّةِۖ وَنَادَىٰهُمَا رَبُّهُمَآ أَلَمۡ أَنۡهَكُمَا عَن تِلۡكُمَا ٱلشَّجَرَةِ وَأَقُل لَّكُمَآ إِنَّ ٱلشَّيۡطَٰنَ لَكُمَا عَدُوّٞ مُّبِينٞ "}]