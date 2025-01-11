const nearbySurasNames = {
    80: 'عَبَسَ',
    81: 'التَّكوير',
    82: 'الانفِطَار',
    83: 'المُطَففين',
};
const choicesObjects = {
    "584": "اذ ناداه ربه بالواد المقدس",
    "585": "عبس وتولي",
    "587": "اذا السماء انفطرت",
    "588": "كلا ان كتاب الفجار لفي",
};
const ayas = [{"aya_id": 5801, "coordinates": [[144, 307, 109, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ إِذَا ٱلشَّمۡسُ كُوِّرَتۡ "}, {"aya_id": 5802, "coordinates": [[144, 164, 143, 34]], "aya_moshaf": "وَإِذَا ٱلنُّجُومُ ٱنكَدَرَتۡ "}, {"aya_id": 5803, "coordinates": [[144, 93, 71, 34], [178, 351, 65, 34]], "aya_moshaf": "وَإِذَا ٱلۡجِبَالُ سُيِّرَتۡ "}, {"aya_id": 5804, "coordinates": [[178, 218, 133, 34]], "aya_moshaf": "وَإِذَا ٱلۡعِشَارُ عُطِّلَتۡ "}, {"aya_id": 5805, "coordinates": [[178, 93, 125, 34], [212, 392, 24, 34]], "aya_moshaf": "وَإِذَا ٱلۡوُحُوشُ حُشِرَتۡ "}, {"aya_id": 5806, "coordinates": [[212, 265, 127, 34]], "aya_moshaf": "وَإِذَا ٱلۡبِحَارُ سُجِّرَتۡ "}, {"aya_id": 5807, "coordinates": [[212, 130, 135, 34]], "aya_moshaf": "وَإِذَا ٱلنُّفُوسُ زُوِّجَتۡ "}, {"aya_id": 5808, "coordinates": [[212, 93, 37, 34], [247, 307, 109, 34]], "aya_moshaf": "وَإِذَا ٱلۡمَوۡءُۥدَةُ سُئِلَتۡ "}, {"aya_id": 5809, "coordinates": [[247, 207, 100, 34]], "aya_moshaf": "بِأَيِّ ذَنۢبٖ قُتِلَتۡ "}, {"aya_id": 5810, "coordinates": [[247, 93, 114, 34], [281, 391, 25, 34]], "aya_moshaf": "وَإِذَا ٱلصُّحُفُ نُشِرَتۡ "}, {"aya_id": 5811, "coordinates": [[281, 277, 114, 34]], "aya_moshaf": "وَإِذَا ٱلسَّمَآءُ كُشِطَتۡ "}, {"aya_id": 5812, "coordinates": [[281, 152, 125, 34]], "aya_moshaf": "وَإِذَا ٱلۡجَحِيمُ سُعِّرَتۡ "}, {"aya_id": 5813, "coordinates": [[281, 93, 59, 34], [315, 354, 62, 34]], "aya_moshaf": "وَإِذَا ٱلۡجَنَّةُ أُزۡلِفَتۡ "}, {"aya_id": 5814, "coordinates": [[315, 206, 148, 34]], "aya_moshaf": "عَلِمَتۡ نَفۡسٞ مَّآ أَحۡضَرَتۡ "}, {"aya_id": 5815, "coordinates": [[315, 93, 113, 34]], "aya_moshaf": "فَلَآ أُقۡسِمُ بِٱلۡخُنَّسِ "}, {"aya_id": 5816, "coordinates": [[350, 319, 97, 34]], "aya_moshaf": "ٱلۡجَوَارِ ٱلۡكُنَّسِ "}, {"aya_id": 5817, "coordinates": [[350, 209, 110, 34]], "aya_moshaf": "وَٱلَّيۡلِ إِذَا عَسۡعَسَ "}, {"aya_id": 5818, "coordinates": [[350, 93, 116, 34]], "aya_moshaf": "وَٱلصُّبۡحِ إِذَا تَنَفَّسَ "}, {"aya_id": 5819, "coordinates": [[384, 297, 119, 34]], "aya_moshaf": "إِنَّهُۥ لَقَوۡلُ رَسُولٖ كَرِيمٖ "}, {"aya_id": 5820, "coordinates": [[384, 132, 165, 34]], "aya_moshaf": "ذِي قُوَّةٍ عِندَ ذِي ٱلۡعَرۡشِ مَكِينٖ "}, {"aya_id": 5821, "coordinates": [[384, 93, 39, 34], [418, 353, 63, 34]], "aya_moshaf": "مُّطَاعٖ ثَمَّ أَمِينٖ "}, {"aya_id": 5822, "coordinates": [[418, 218, 135, 34]], "aya_moshaf": "وَمَا صَاحِبُكُم بِمَجۡنُونٖ "}, {"aya_id": 5823, "coordinates": [[418, 93, 125, 34], [453, 387, 29, 34]], "aya_moshaf": "وَلَقَدۡ رَءَاهُ بِٱلۡأُفُقِ ٱلۡمُبِينِ "}, {"aya_id": 5824, "coordinates": [[453, 243, 144, 34]], "aya_moshaf": "وَمَا هُوَ عَلَى ٱلۡغَيۡبِ بِضَنِينٖ "}, {"aya_id": 5825, "coordinates": [[453, 93, 150, 34]], "aya_moshaf": "وَمَا هُوَ بِقَوۡلِ شَيۡطَٰنٖ رَّجِيمٖ "}, {"aya_id": 5826, "coordinates": [[487, 326, 90, 34]], "aya_moshaf": "فَأَيۡنَ تَذۡهَبُونَ "}, {"aya_id": 5827, "coordinates": [[487, 187, 139, 34]], "aya_moshaf": "إِنۡ هُوَ إِلَّا ذِكۡرٞ لِّلۡعَٰلَمِينَ "}, {"aya_id": 5828, "coordinates": [[487, 93, 94, 34], [521, 345, 71, 34]], "aya_moshaf": "لِمَن شَآءَ مِنكُمۡ أَن يَسۡتَقِيمَ "}, {"aya_id": 5829, "coordinates": [[521, 93, 252, 34]], "aya_moshaf": "وَمَا تَشَآءُونَ إِلَّآ أَن يَشَآءَ ٱللَّهُ رَبُّ ٱلۡعَٰلَمِينَ "}]
const ayasRanges = [{"ayas_ids_range": [5801, 5829], "sura_id": 81}];
