const nearbySurasNames = {
    10: 'يُونس',
    11: 'هُود',
    12: 'يُوسُف',
    13: 'الرَّعد',
};
const choicesObjects = {
    "233": "يقدم قومه يوم القيامه فاوردهم",
    "234": "فلا تك في مريه مما",
    "236": "قال يابني لا تقصص رؤياك",
    "237": "فلما ذهبوا به واجمعوا ان",
};
const ayas = [{"aya_id": 1591, "coordinates": [[94, 49, 322, 34], [128, 343, 29, 34]], "aya_moshaf": "وَلَوۡ شَآءَ رَبُّكَ لَجَعَلَ ٱلنَّاسَ أُمَّةٗ وَٰحِدَةٗۖ وَلَا يَزَالُونَ مُخۡتَلِفِينَ "}, {"aya_id": 1592, "coordinates": [[128, 49, 294, 34], [163, 113, 259, 34]], "aya_moshaf": "إِلَّا مَن رَّحِمَ رَبُّكَۚ وَلِذَٰلِكَ خَلَقَهُمۡۗ وَتَمَّتۡ كَلِمَةُ رَبِّكَ لَأَمۡلَأَنَّ جَهَنَّمَ مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ أَجۡمَعِينَ "}, {"aya_id": 1593, "coordinates": [[163, 49, 64, 34], [197, 49, 322, 34], [231, 157, 215, 34]], "aya_moshaf": "وَكُلّٗا نَّقُصُّ عَلَيۡكَ مِنۡ أَنۢبَآءِ ٱلرُّسُلِ مَا نُثَبِّتُ بِهِۦ فُؤَادَكَۚ وَجَآءَكَ فِي هَٰذِهِ ٱلۡحَقُّ وَمَوۡعِظَةٞ وَذِكۡرَىٰ لِلۡمُؤۡمِنِينَ "}, {"aya_id": 1594, "coordinates": [[231, 49, 108, 34], [266, 175, 197, 34]], "aya_moshaf": "وَقُل لِّلَّذِينَ لَا يُؤۡمِنُونَ ٱعۡمَلُواْ عَلَىٰ مَكَانَتِكُمۡ إِنَّا عَٰمِلُونَ "}, {"aya_id": 1595, "coordinates": [[266, 49, 126, 34], [300, 345, 27, 34]], "aya_moshaf": "وَٱنتَظِرُوٓاْ إِنَّا مُنتَظِرُونَ "}, {"aya_id": 1596, "coordinates": [[300, 49, 296, 34], [334, 49, 322, 34]], "aya_moshaf": "وَلِلَّهِ غَيۡبُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَإِلَيۡهِ يُرۡجَعُ ٱلۡأَمۡرُ كُلُّهُۥ فَٱعۡبُدۡهُ وَتَوَكَّلۡ عَلَيۡهِۚ وَمَا رَبُّكَ بِغَٰفِلٍ عَمَّا تَعۡمَلُونَ "}, {"aya_id": 1597, "coordinates": [[437, 177, 195, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ الٓرۚ تِلۡكَ ءَايَٰتُ ٱلۡكِتَٰبِ ٱلۡمُبِينِ "}, {"aya_id": 1598, "coordinates": [[437, 49, 128, 34], [472, 238, 134, 34]], "aya_moshaf": "إِنَّآ أَنزَلۡنَٰهُ قُرۡءَٰنًا عَرَبِيّٗا لَّعَلَّكُمۡ تَعۡقِلُونَ "}, {"aya_id": 1599, "coordinates": [[472, 49, 189, 34], [506, 49, 322, 34], [540, 259, 113, 34]], "aya_moshaf": "نَحۡنُ نَقُصُّ عَلَيۡكَ أَحۡسَنَ ٱلۡقَصَصِ بِمَآ أَوۡحَيۡنَآ إِلَيۡكَ هَٰذَا ٱلۡقُرۡءَانَ وَإِن كُنتَ مِن قَبۡلِهِۦ لَمِنَ ٱلۡغَٰفِلِينَ "}, {"aya_id": 1600, "coordinates": [[540, 49, 210, 34], [575, 49, 322, 34]], "aya_moshaf": "إِذۡ قَالَ يُوسُفُ لِأَبِيهِ يَٰٓأَبَتِ إِنِّي رَأَيۡتُ أَحَدَ عَشَرَ كَوۡكَبٗا وَٱلشَّمۡسَ وَٱلۡقَمَرَ رَأَيۡتُهُمۡ لِي سَٰجِدِينَ "}]
const ayasRanges = [{"ayas_ids_range": [1591, 1596], "sura_id": 11}, {"ayas_ids_range": [1597, 1600], "sura_id": 12}];
