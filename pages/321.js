const nearbySurasNames = {
    19: 'مَريَم',
    20: 'طه',
    21: 'الأنبيَاء',
    22: 'الحج',
};
const choicesObjects = {
    "319": "كذلك نقص عليك من انباء",
    "320": "فتعالي الله الملك الحق ولا",
    "322": "اقترب للناس حسابهم وهم في",
    "323": "وكم قصمنا من قريه كانت",
};
const ayas = [{"aya_id": 2474, "coordinates": [[91, 93, 278, 34]], "aya_moshaf": "قَالَ كَذَٰلِكَ أَتَتۡكَ ءَايَٰتُنَا فَنَسِيتَهَاۖ وَكَذَٰلِكَ ٱلۡيَوۡمَ تُنسَىٰ "}, {"aya_id": 2475, "coordinates": [[91, 48, 45, 34], [125, 48, 322, 34], [160, 318, 53, 34]], "aya_moshaf": "وَكَذَٰلِكَ نَجۡزِي مَنۡ أَسۡرَفَ وَلَمۡ يُؤۡمِنۢ بِـَٔايَٰتِ رَبِّهِۦۚ وَلَعَذَابُ ٱلۡأٓخِرَةِ أَشَدُّ وَأَبۡقَىٰٓ "}, {"aya_id": 2476, "coordinates": [[160, 48, 270, 34], [194, 108, 263, 34]], "aya_moshaf": "أَفَلَمۡ يَهۡدِ لَهُمۡ كَمۡ أَهۡلَكۡنَا قَبۡلَهُم مِّنَ ٱلۡقُرُونِ يَمۡشُونَ فِي مَسَٰكِنِهِمۡۚ إِنَّ فِي ذَٰلِكَ لَأٓيَٰتٖ لِّأُوْلِي ٱلنُّهَىٰ "}, {"aya_id": 2477, "coordinates": [[194, 48, 60, 34], [228, 125, 246, 34]], "aya_moshaf": "وَلَوۡلَا كَلِمَةٞ سَبَقَتۡ مِن رَّبِّكَ لَكَانَ لِزَامٗا وَأَجَلٞ مُّسَمّٗى "}, {"aya_id": 2478, "coordinates": [[228, 48, 77, 34], [263, 48, 322, 34], [297, 79, 292, 34]], "aya_moshaf": "فَٱصۡبِرۡ عَلَىٰ مَا يَقُولُونَ وَسَبِّحۡ بِحَمۡدِ رَبِّكَ قَبۡلَ طُلُوعِ ٱلشَّمۡسِ وَقَبۡلَ غُرُوبِهَاۖ وَمِنۡ ءَانَآيِٕ ٱلَّيۡلِ فَسَبِّحۡ وَأَطۡرَافَ ٱلنَّهَارِ لَعَلَّكَ تَرۡضَىٰ "}, {"aya_id": 2479, "coordinates": [[297, 48, 31, 34], [331, 48, 322, 34], [366, 169, 202, 34]], "aya_moshaf": "وَلَا تَمُدَّنَّ عَيۡنَيۡكَ إِلَىٰ مَا مَتَّعۡنَا بِهِۦٓ أَزۡوَٰجٗا مِّنۡهُمۡ زَهۡرَةَ ٱلۡحَيَوٰةِ ٱلدُّنۡيَا لِنَفۡتِنَهُمۡ فِيهِۚ وَرِزۡقُ رَبِّكَ خَيۡرٞ وَأَبۡقَىٰ "}, {"aya_id": 2480, "coordinates": [[366, 48, 121, 34], [400, 48, 322, 34], [434, 348, 23, 34]], "aya_moshaf": "وَأۡمُرۡ أَهۡلَكَ بِٱلصَّلَوٰةِ وَٱصۡطَبِرۡ عَلَيۡهَاۖ لَا نَسۡـَٔلُكَ رِزۡقٗاۖ نَّحۡنُ نَرۡزُقُكَۗ وَٱلۡعَٰقِبَةُ لِلتَّقۡوَىٰ "}, {"aya_id": 2481, "coordinates": [[434, 48, 300, 34], [469, 250, 121, 34]], "aya_moshaf": "وَقَالُواْ لَوۡلَا يَأۡتِينَا بِـَٔايَةٖ مِّن رَّبِّهِۦٓۚ أَوَلَمۡ تَأۡتِهِم بَيِّنَةُ مَا فِي ٱلصُّحُفِ ٱلۡأُولَىٰ "}, {"aya_id": 2482, "coordinates": [[469, 48, 202, 34], [503, 48, 322, 34], [537, 206, 165, 34]], "aya_moshaf": "وَلَوۡ أَنَّآ أَهۡلَكۡنَٰهُم بِعَذَابٖ مِّن قَبۡلِهِۦ لَقَالُواْ رَبَّنَا لَوۡلَآ أَرۡسَلۡتَ إِلَيۡنَا رَسُولٗا فَنَتَّبِعَ ءَايَٰتِكَ مِن قَبۡلِ أَن نَّذِلَّ وَنَخۡزَىٰ "}, {"aya_id": 2483, "coordinates": [[537, 48, 158, 34], [572, 48, 322, 34]], "aya_moshaf": "قُلۡ كُلّٞ مُّتَرَبِّصٞ فَتَرَبَّصُواْۖ فَسَتَعۡلَمُونَ مَنۡ أَصۡحَٰبُ ٱلصِّرَٰطِ ٱلسَّوِيِّ وَمَنِ ٱهۡتَدَىٰ "}]
const ayasRanges = [{"ayas_ids_range": [2474, 2483], "sura_id": 20}];
