const mainSuraId = 17;
const nearbySurasNames = {
    16: 'النَّحل',
    17: 'الإسرَاء',
    18: 'الكَهف',
    19: 'مَريَم',
};
const choicesObjects = {
    "291": "الا رحمه من ربك ان",
    "292": "ومن يهد الله فهو المهتد",
    "294": "ما لهم به من علم",
    "295": "واذ اعتزلتموهم وما يعبدون الا",
};
const ayas = [{"aya_id": 2134, "coordinates": [[87, 51, 322, 34]], "aya_moshaf": "وَبِٱلۡحَقِّ أَنزَلۡنَٰهُ وَبِٱلۡحَقِّ نَزَلَۗ وَمَآ أَرۡسَلۡنَٰكَ إِلَّا مُبَشِّرٗا وَنَذِيرٗا "}, {"aya_id": 2135, "coordinates": [[121, 51, 322, 34]], "aya_moshaf": "وَقُرۡءَانٗا فَرَقۡنَٰهُ لِتَقۡرَأَهُۥ عَلَى ٱلنَّاسِ عَلَىٰ مُكۡثٖ وَنَزَّلۡنَٰهُ تَنزِيلٗا "}, {"aya_id": 2136, "coordinates": [[156, 51, 322, 34], [190, 202, 172, 34]], "aya_moshaf": "قُلۡ ءَامِنُواْ بِهِۦٓ أَوۡ لَا تُؤۡمِنُوٓاْۚ إِنَّ ٱلَّذِينَ أُوتُواْ ٱلۡعِلۡمَ مِن قَبۡلِهِۦٓ إِذَا يُتۡلَىٰ عَلَيۡهِمۡ يَخِرُّونَۤ لِلۡأَذۡقَانِۤ سُجَّدٗاۤ "}, {"aya_id": 2137, "coordinates": [[190, 51, 151, 34], [224, 260, 114, 34]], "aya_moshaf": "وَيَقُولُونَ سُبۡحَٰنَ رَبِّنَآ إِن كَانَ وَعۡدُ رَبِّنَا لَمَفۡعُولٗا "}, {"aya_id": 2138, "coordinates": [[224, 51, 209, 34], [259, 294, 80, 34]], "aya_moshaf": "وَيَخِرُّونَ لِلۡأَذۡقَانِ يَبۡكُونَ وَيَزِيدُهُمۡ خُشُوعٗا۩ "}, {"aya_id": 2139, "coordinates": [[259, 51, 243, 34], [293, 51, 322, 34], [327, 269, 105, 34]], "aya_moshaf": "قُلِ ٱدۡعُواْ ٱللَّهَ أَوِ ٱدۡعُواْ ٱلرَّحۡمَٰنَۖ أَيّٗا مَّا تَدۡعُواْ فَلَهُ ٱلۡأَسۡمَآءُ ٱلۡحُسۡنَىٰۚ وَلَا تَجۡهَرۡ بِصَلَاتِكَ وَلَا تُخَافِتۡ بِهَا وَٱبۡتَغِ بَيۡنَ ذَٰلِكَ سَبِيلٗا "}, {"aya_id": 2140, "coordinates": [[327, 51, 218, 34], [362, 51, 322, 34]], "aya_moshaf": "وَقُلِ ٱلۡحَمۡدُ لِلَّهِ ٱلَّذِي لَمۡ يَتَّخِذۡ وَلَدٗا وَلَمۡ يَكُن لَّهُۥ شَرِيكٞ فِي ٱلۡمُلۡكِ وَلَمۡ يَكُن لَّهُۥ وَلِيّٞ مِّنَ ٱلذُّلِّۖ وَكَبِّرۡهُ تَكۡبِيرَۢا "}, {"aya_id": 2141, "coordinates": [[465, 51, 322, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ ٱلۡحَمۡدُ لِلَّهِ ٱلَّذِيٓ أَنزَلَ عَلَىٰ عَبۡدِهِ ٱلۡكِتَٰبَ وَلَمۡ يَجۡعَل لَّهُۥ عِوَجَاۜ "}, {"aya_id": 2142, "coordinates": [[499, 51, 322, 34], [533, 115, 259, 34]], "aya_moshaf": "قَيِّمٗا لِّيُنذِرَ بَأۡسٗا شَدِيدٗا مِّن لَّدُنۡهُ وَيُبَشِّرَ ٱلۡمُؤۡمِنِينَ ٱلَّذِينَ يَعۡمَلُونَ ٱلصَّٰلِحَٰتِ أَنَّ لَهُمۡ أَجۡرًا حَسَنٗا "}, {"aya_id": 2143, "coordinates": [[533, 51, 64, 34], [568, 302, 72, 34]], "aya_moshaf": "مَّٰكِثِينَ فِيهِ أَبَدٗا "}, {"aya_id": 2144, "coordinates": [[568, 51, 251, 34]], "aya_moshaf": "وَيُنذِرَ ٱلَّذِينَ قَالُواْ ٱتَّخَذَ ٱللَّهُ وَلَدٗا "}]