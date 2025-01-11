const mainSuraId = 11;
const nearbySurasNames = {
    10: 'يُونس',
    11: 'هُود',
    12: 'يُوسُف',
    13: 'الرَّعد',
};
const choicesObjects = {
    "232": "وياقوم لا يجرمنكم شقاقي ان",
    "233": "يقدم قومه يوم القيامه فاوردهم",
    "235": "ولو شاء ربك لجعل الناس",
    "236": "قال يابني لا تقصص رؤياك",
};
const ayas = [{"aya_id": 1582, "coordinates": [[86, 91, 322, 34], [120, 91, 322, 34]], "aya_moshaf": "فَلَا تَكُ فِي مِرۡيَةٖ مِّمَّا يَعۡبُدُ هَٰٓؤُلَآءِۚ مَا يَعۡبُدُونَ إِلَّا كَمَا يَعۡبُدُ ءَابَآؤُهُم مِّن قَبۡلُۚ وَإِنَّا لَمُوَفُّوهُمۡ نَصِيبَهُمۡ غَيۡرَ مَنقُوصٖ "}, {"aya_id": 1583, "coordinates": [[155, 91, 322, 34], [189, 91, 322, 34], [223, 390, 24, 34]], "aya_moshaf": "وَلَقَدۡ ءَاتَيۡنَا مُوسَى ٱلۡكِتَٰبَ فَٱخۡتُلِفَ فِيهِۚ وَلَوۡلَا كَلِمَةٞ سَبَقَتۡ مِن رَّبِّكَ لَقُضِيَ بَيۡنَهُمۡۚ وَإِنَّهُمۡ لَفِي شَكّٖ مِّنۡهُ مُرِيبٖ "}, {"aya_id": 1584, "coordinates": [[223, 91, 299, 34], [258, 345, 69, 34]], "aya_moshaf": "وَإِنَّ كُلّٗا لَّمَّا لَيُوَفِّيَنَّهُمۡ رَبُّكَ أَعۡمَٰلَهُمۡۚ إِنَّهُۥ بِمَا يَعۡمَلُونَ خَبِيرٞ "}, {"aya_id": 1585, "coordinates": [[258, 91, 254, 34], [292, 250, 164, 34]], "aya_moshaf": "فَٱسۡتَقِمۡ كَمَآ أُمِرۡتَ وَمَن تَابَ مَعَكَ وَلَا تَطۡغَوۡاْۚ إِنَّهُۥ بِمَا تَعۡمَلُونَ بَصِيرٞ "}, {"aya_id": 1586, "coordinates": [[292, 91, 159, 34], [326, 91, 322, 34], [361, 304, 110, 34]], "aya_moshaf": "وَلَا تَرۡكَنُوٓاْ إِلَى ٱلَّذِينَ ظَلَمُواْ فَتَمَسَّكُمُ ٱلنَّارُ وَمَا لَكُم مِّن دُونِ ٱللَّهِ مِنۡ أَوۡلِيَآءَ ثُمَّ لَا تُنصَرُونَ "}, {"aya_id": 1587, "coordinates": [[361, 91, 213, 34], [395, 91, 322, 34], [429, 388, 26, 34]], "aya_moshaf": "وَأَقِمِ ٱلصَّلَوٰةَ طَرَفَيِ ٱلنَّهَارِ وَزُلَفٗا مِّنَ ٱلَّيۡلِۚ إِنَّ ٱلۡحَسَنَٰتِ يُذۡهِبۡنَ ٱلسَّيِّـَٔاتِۚ ذَٰلِكَ ذِكۡرَىٰ لِلذَّٰكِرِينَ "}, {"aya_id": 1588, "coordinates": [[429, 135, 253, 34]], "aya_moshaf": "وَٱصۡبِرۡ فَإِنَّ ٱللَّهَ لَا يُضِيعُ أَجۡرَ ٱلۡمُحۡسِنِينَ "}, {"aya_id": 1589, "coordinates": [[429, 91, 44, 34], [464, 91, 322, 34], [498, 91, 322, 34], [532, 165, 249, 34]], "aya_moshaf": "فَلَوۡلَا كَانَ مِنَ ٱلۡقُرُونِ مِن قَبۡلِكُمۡ أُوْلُواْ بَقِيَّةٖ يَنۡهَوۡنَ عَنِ ٱلۡفَسَادِ فِي ٱلۡأَرۡضِ إِلَّا قَلِيلٗا مِّمَّنۡ أَنجَيۡنَا مِنۡهُمۡۗ وَٱتَّبَعَ ٱلَّذِينَ ظَلَمُواْ مَآ أُتۡرِفُواْ فِيهِ وَكَانُواْ مُجۡرِمِينَ "}, {"aya_id": 1590, "coordinates": [[532, 91, 74, 34], [567, 91, 322, 34]], "aya_moshaf": "وَمَا كَانَ رَبُّكَ لِيُهۡلِكَ ٱلۡقُرَىٰ بِظُلۡمٖ وَأَهۡلُهَا مُصۡلِحُونَ "}]