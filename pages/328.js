const nearbySurasNames = {
    20: 'طه',
    21: 'الأنبيَاء',
    22: 'الحج',
    23: 'المؤمنُون',
};
const choicesObjects = {
    "326": "قل انما انذركم بالوحي ولا",
    "327": "فجعلهم جذاذا الا كبيرا لهم",
    "329": "ومن الشياطين من يغوصون له",
    "330": "والتي احصنت فرجها فنفخنا فيها",
};
const ayas = [{"aya_id": 2556, "coordinates": [[81, 95, 322, 34], [115, 95, 322, 34], [150, 339, 79, 34]], "aya_moshaf": "وَجَعَلۡنَٰهُمۡ أَئِمَّةٗ يَهۡدُونَ بِأَمۡرِنَا وَأَوۡحَيۡنَآ إِلَيۡهِمۡ فِعۡلَ ٱلۡخَيۡرَٰتِ وَإِقَامَ ٱلصَّلَوٰةِ وَإِيتَآءَ ٱلزَّكَوٰةِۖ وَكَانُواْ لَنَا عَٰبِدِينَ "}, {"aya_id": 2557, "coordinates": [[150, 95, 244, 34], [184, 95, 322, 34], [218, 334, 84, 34]], "aya_moshaf": "وَلُوطًا ءَاتَيۡنَٰهُ حُكۡمٗا وَعِلۡمٗا وَنَجَّيۡنَٰهُ مِنَ ٱلۡقَرۡيَةِ ٱلَّتِي كَانَت تَّعۡمَلُ ٱلۡخَبَٰٓئِثَۚ إِنَّهُمۡ كَانُواْ قَوۡمَ سَوۡءٖ فَٰسِقِينَ "}, {"aya_id": 2558, "coordinates": [[218, 95, 239, 34], [253, 383, 35, 34]], "aya_moshaf": "وَأَدۡخَلۡنَٰهُ فِي رَحۡمَتِنَآۖ إِنَّهُۥ مِنَ ٱلصَّٰلِحِينَ "}, {"aya_id": 2559, "coordinates": [[253, 95, 288, 34], [287, 194, 224, 34]], "aya_moshaf": "وَنُوحًا إِذۡ نَادَىٰ مِن قَبۡلُ فَٱسۡتَجَبۡنَا لَهُۥ فَنَجَّيۡنَٰهُ وَأَهۡلَهُۥ مِنَ ٱلۡكَرۡبِ ٱلۡعَظِيمِ "}, {"aya_id": 2560, "coordinates": [[287, 95, 99, 34], [321, 95, 322, 34], [356, 348, 70, 34]], "aya_moshaf": "وَنَصَرۡنَٰهُ مِنَ ٱلۡقَوۡمِ ٱلَّذِينَ كَذَّبُواْ بِـَٔايَٰتِنَآۚ إِنَّهُمۡ كَانُواْ قَوۡمَ سَوۡءٖ فَأَغۡرَقۡنَٰهُمۡ أَجۡمَعِينَ "}, {"aya_id": 2561, "coordinates": [[356, 95, 253, 34], [390, 95, 322, 34]], "aya_moshaf": "وَدَاوُۥدَ وَسُلَيۡمَٰنَ إِذۡ يَحۡكُمَانِ فِي ٱلۡحَرۡثِ إِذۡ نَفَشَتۡ فِيهِ غَنَمُ ٱلۡقَوۡمِ وَكُنَّا لِحُكۡمِهِمۡ شَٰهِدِينَ "}, {"aya_id": 2562, "coordinates": [[424, 95, 322, 34], [459, 95, 322, 34]], "aya_moshaf": "فَفَهَّمۡنَٰهَا سُلَيۡمَٰنَۚ وَكُلًّا ءَاتَيۡنَا حُكۡمٗا وَعِلۡمٗاۚ وَسَخَّرۡنَا مَعَ دَاوُۥدَ ٱلۡجِبَالَ يُسَبِّحۡنَ وَٱلطَّيۡرَۚ وَكُنَّا فَٰعِلِينَ "}, {"aya_id": 2563, "coordinates": [[493, 95, 322, 34], [527, 280, 138, 34]], "aya_moshaf": "وَعَلَّمۡنَٰهُ صَنۡعَةَ لَبُوسٖ لَّكُمۡ لِتُحۡصِنَكُم مِّنۢ بَأۡسِكُمۡۖ فَهَلۡ أَنتُمۡ شَٰكِرُونَ "}, {"aya_id": 2564, "coordinates": [[527, 95, 185, 34], [562, 95, 322, 34]], "aya_moshaf": "وَلِسُلَيۡمَٰنَ ٱلرِّيحَ عَاصِفَةٗ تَجۡرِي بِأَمۡرِهِۦٓ إِلَى ٱلۡأَرۡضِ ٱلَّتِي بَٰرَكۡنَا فِيهَاۚ وَكُنَّا بِكُلِّ شَيۡءٍ عَٰلِمِينَ "}]
const ayasRanges = [{"ayas_ids_range": [2556, 2564], "sura_id": 21}];
