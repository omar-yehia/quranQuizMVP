const nearbySurasNames = {
    19: 'مَريَم',
    20: 'طه',
    21: 'الأنبيَاء',
    22: 'الحج',
};
const choicesObjects = {
    "315": "قال علمها عند ربي في",
    "316": "قالوا ياموسي اما ان تلقي",
    "318": "فاخرج لهم عجلا جسدا له",
    "319": "كذلك نقص عليك من انباء",
};
const ayas = [{"aya_id": 2425, "coordinates": [[91, 47, 322, 34], [125, 135, 235, 34]], "aya_moshaf": "وَلَقَدۡ أَوۡحَيۡنَآ إِلَىٰ مُوسَىٰٓ أَنۡ أَسۡرِ بِعِبَادِي فَٱضۡرِبۡ لَهُمۡ طَرِيقٗا فِي ٱلۡبَحۡرِ يَبَسٗا لَّا تَخَٰفُ دَرَكٗا وَلَا تَخۡشَىٰ "}, {"aya_id": 2426, "coordinates": [[125, 47, 88, 34], [160, 151, 219, 34]], "aya_moshaf": "فَأَتۡبَعَهُمۡ فِرۡعَوۡنُ بِجُنُودِهِۦ فَغَشِيَهُم مِّنَ ٱلۡيَمِّ مَا غَشِيَهُمۡ "}, {"aya_id": 2427, "coordinates": [[160, 47, 104, 34], [194, 288, 82, 34]], "aya_moshaf": "وَأَضَلَّ فِرۡعَوۡنُ قَوۡمَهُۥ وَمَا هَدَىٰ "}, {"aya_id": 2428, "coordinates": [[194, 47, 241, 34], [228, 82, 288, 34]], "aya_moshaf": "يَٰبَنِيٓ إِسۡرَٰٓءِيلَ قَدۡ أَنجَيۡنَٰكُم مِّنۡ عَدُوِّكُمۡ وَوَٰعَدۡنَٰكُمۡ جَانِبَ ٱلطُّورِ ٱلۡأَيۡمَنَ وَنَزَّلۡنَا عَلَيۡكُمُ ٱلۡمَنَّ وَٱلسَّلۡوَىٰ "}, {"aya_id": 2429, "coordinates": [[228, 47, 35, 34], [263, 47, 322, 34], [297, 159, 211, 34]], "aya_moshaf": "كُلُواْ مِن طَيِّبَٰتِ مَا رَزَقۡنَٰكُمۡ وَلَا تَطۡغَوۡاْ فِيهِ فَيَحِلَّ عَلَيۡكُمۡ غَضَبِيۖ وَمَن يَحۡلِلۡ عَلَيۡهِ غَضَبِي فَقَدۡ هَوَىٰ "}, {"aya_id": 2430, "coordinates": [[297, 47, 112, 34], [331, 178, 192, 34]], "aya_moshaf": "وَإِنِّي لَغَفَّارٞ لِّمَن تَابَ وَءَامَنَ وَعَمِلَ صَٰلِحٗا ثُمَّ ٱهۡتَدَىٰ "}, {"aya_id": 2431, "coordinates": [[331, 47, 131, 34], [366, 259, 111, 34]], "aya_moshaf": "۞ وَمَآ أَعۡجَلَكَ عَن قَوۡمِكَ يَٰمُوسَىٰ "}, {"aya_id": 2432, "coordinates": [[366, 47, 212, 34], [400, 286, 84, 34]], "aya_moshaf": "قَالَ هُمۡ أُوْلَآءِ عَلَىٰٓ أَثَرِي وَعَجِلۡتُ إِلَيۡكَ رَبِّ لِتَرۡضَىٰ "}, {"aya_id": 2433, "coordinates": [[400, 47, 239, 34], [434, 294, 76, 34]], "aya_moshaf": "قَالَ فَإِنَّا قَدۡ فَتَنَّا قَوۡمَكَ مِنۢ بَعۡدِكَ وَأَضَلَّهُمُ ٱلسَّامِرِيُّ "}, {"aya_id": 2434, "coordinates": [[434, 47, 247, 34], [469, 47, 322, 34], [503, 47, 322, 34], [537, 302, 68, 34]], "aya_moshaf": "فَرَجَعَ مُوسَىٰٓ إِلَىٰ قَوۡمِهِۦ غَضۡبَٰنَ أَسِفٗاۚ قَالَ يَٰقَوۡمِ أَلَمۡ يَعِدۡكُمۡ رَبُّكُمۡ وَعۡدًا حَسَنًاۚ أَفَطَالَ عَلَيۡكُمُ ٱلۡعَهۡدُ أَمۡ أَرَدتُّمۡ أَن يَحِلَّ عَلَيۡكُمۡ غَضَبٞ مِّن رَّبِّكُمۡ فَأَخۡلَفۡتُم مَّوۡعِدِي "}, {"aya_id": 2435, "coordinates": [[537, 47, 255, 34], [572, 47, 322, 34]], "aya_moshaf": "قَالُواْ مَآ أَخۡلَفۡنَا مَوۡعِدَكَ بِمَلۡكِنَا وَلَٰكِنَّا حُمِّلۡنَآ أَوۡزَارٗا مِّن زِينَةِ ٱلۡقَوۡمِ فَقَذَفۡنَٰهَا فَكَذَٰلِكَ أَلۡقَى ٱلسَّامِرِيُّ "}]
const ayasRanges = [{"ayas_ids_range": [2425, 2435], "sura_id": 20}];
