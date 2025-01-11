const nearbySurasNames = {
    25: 'الفُرقَان',
    26: 'الشعراء',
    27: 'النَّمل',
    28: 'القَصَص',
};
const choicesObjects = {
    "371": "واجعل لي لسان صدق في",
    "372": "قال وما علمي بما كانوا",
    "374": "كذبت قوم لوط المرسلين",
    "375": "واتقوا الذي خلقكم والجبله الاولين",
};
const ayas = [{"aya_id": 3069, "coordinates": [[87, 230, 147, 34]], "aya_moshaf": "إِنۡ هَٰذَآ إِلَّا خُلُقُ ٱلۡأَوَّلِينَ "}, {"aya_id": 3070, "coordinates": [[87, 111, 119, 34]], "aya_moshaf": "وَمَا نَحۡنُ بِمُعَذَّبِينَ "}, {"aya_id": 3071, "coordinates": [[87, 54, 57, 34], [121, 76, 301, 34]], "aya_moshaf": "فَكَذَّبُوهُ فَأَهۡلَكۡنَٰهُمۡۚ إِنَّ فِي ذَٰلِكَ لَأٓيَةٗۖ وَمَا كَانَ أَكۡثَرُهُم مُّؤۡمِنِينَ "}, {"aya_id": 3072, "coordinates": [[121, 54, 22, 34], [156, 238, 139, 34]], "aya_moshaf": "وَإِنَّ رَبَّكَ لَهُوَ ٱلۡعَزِيزُ ٱلرَّحِيمُ "}, {"aya_id": 3073, "coordinates": [[156, 90, 148, 34]], "aya_moshaf": "كَذَّبَتۡ ثَمُودُ ٱلۡمُرۡسَلِينَ "}, {"aya_id": 3074, "coordinates": [[156, 54, 36, 34], [190, 200, 177, 34]], "aya_moshaf": "إِذۡ قَالَ لَهُمۡ أَخُوهُمۡ صَٰلِحٌ أَلَا تَتَّقُونَ "}, {"aya_id": 3075, "coordinates": [[190, 54, 146, 34]], "aya_moshaf": "إِنِّي لَكُمۡ رَسُولٌ أَمِينٞ "}, {"aya_id": 3076, "coordinates": [[224, 240, 137, 34]], "aya_moshaf": "فَٱتَّقُواْ ٱللَّهَ وَأَطِيعُونِ "}, {"aya_id": 3077, "coordinates": [[224, 54, 186, 34], [259, 248, 129, 34]], "aya_moshaf": "وَمَآ أَسۡـَٔلُكُمۡ عَلَيۡهِ مِنۡ أَجۡرٍۖ إِنۡ أَجۡرِيَ إِلَّا عَلَىٰ رَبِّ ٱلۡعَٰلَمِينَ "}, {"aya_id": 3078, "coordinates": [[259, 54, 194, 34]], "aya_moshaf": "أَتُتۡرَكُونَ فِي مَا هَٰهُنَآ ءَامِنِينَ "}, {"aya_id": 3079, "coordinates": [[293, 260, 117, 34]], "aya_moshaf": "فِي جَنَّٰتٖ وَعُيُونٖ "}, {"aya_id": 3080, "coordinates": [[293, 54, 206, 34]], "aya_moshaf": "وَزُرُوعٖ وَنَخۡلٖ طَلۡعُهَا هَضِيمٞ "}, {"aya_id": 3081, "coordinates": [[327, 168, 209, 34]], "aya_moshaf": "وَتَنۡحِتُونَ مِنَ ٱلۡجِبَالِ بُيُوتٗا فَٰرِهِينَ "}, {"aya_id": 3082, "coordinates": [[327, 54, 114, 34], [362, 353, 24, 34]], "aya_moshaf": "فَٱتَّقُواْ ٱللَّهَ وَأَطِيعُونِ "}, {"aya_id": 3083, "coordinates": [[362, 197, 156, 34]], "aya_moshaf": "وَلَا تُطِيعُوٓاْ أَمۡرَ ٱلۡمُسۡرِفِينَ "}, {"aya_id": 3084, "coordinates": [[362, 54, 143, 34], [396, 282, 95, 34]], "aya_moshaf": "ٱلَّذِينَ يُفۡسِدُونَ فِي ٱلۡأَرۡضِ وَلَا يُصۡلِحُونَ "}, {"aya_id": 3085, "coordinates": [[396, 107, 175, 34]], "aya_moshaf": "قَالُوٓاْ إِنَّمَآ أَنتَ مِنَ ٱلۡمُسَحَّرِينَ "}, {"aya_id": 3086, "coordinates": [[396, 54, 53, 34], [430, 89, 288, 34]], "aya_moshaf": "مَآ أَنتَ إِلَّا بَشَرٞ مِّثۡلُنَا فَأۡتِ بِـَٔايَةٍ إِن كُنتَ مِنَ ٱلصَّٰدِقِينَ "}, {"aya_id": 3087, "coordinates": [[430, 54, 35, 34], [465, 129, 248, 34]], "aya_moshaf": "قَالَ هَٰذِهِۦ نَاقَةٞ لَّهَا شِرۡبٞ وَلَكُمۡ شِرۡبُ يَوۡمٖ مَّعۡلُومٖ "}, {"aya_id": 3088, "coordinates": [[465, 54, 75, 34], [499, 178, 199, 34]], "aya_moshaf": "وَلَا تَمَسُّوهَا بِسُوٓءٖ فَيَأۡخُذَكُمۡ عَذَابُ يَوۡمٍ عَظِيمٖ "}, {"aya_id": 3089, "coordinates": [[499, 54, 124, 34], [533, 311, 66, 34]], "aya_moshaf": "فَعَقَرُوهَا فَأَصۡبَحُواْ نَٰدِمِينَ "}, {"aya_id": 3090, "coordinates": [[533, 54, 257, 34], [568, 245, 132, 34]], "aya_moshaf": "فَأَخَذَهُمُ ٱلۡعَذَابُۚ إِنَّ فِي ذَٰلِكَ لَأٓيَةٗۖ وَمَا كَانَ أَكۡثَرُهُم مُّؤۡمِنِينَ "}, {"aya_id": 3091, "coordinates": [[568, 54, 191, 34]], "aya_moshaf": "وَإِنَّ رَبَّكَ لَهُوَ ٱلۡعَزِيزُ ٱلرَّحِيمُ "}]
const ayasRanges = [{"ayas_ids_range": [3069, 3091], "sura_id": 26}];
