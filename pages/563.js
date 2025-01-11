const mainSuraId = 67;
const nearbySurasNames = {
    66: 'التَّحرِيم',
    67: 'المُلك',
    68: 'القَلَم',
    69: 'الحَاقة',
};
const choicesObjects = {
    "561": "ياايها الذين امنوا توبوا الي",
    "562": "تبارك الذي بيده الملك وهو",
    "564": "فلما راوه زلفه سيئت وجوه",
    "565": "انا بلوناهم كما بلونا اصحاب",
};
const ayas = [{"aya_id": 5254, "coordinates": [[82, 77, 296, 34]], "aya_moshaf": "وَأَسِرُّواْ قَوۡلَكُمۡ أَوِ ٱجۡهَرُواْ بِهِۦٓۖ إِنَّهُۥ عَلِيمُۢ بِذَاتِ ٱلصُّدُورِ "}, {"aya_id": 5255, "coordinates": [[82, 50, 27, 34], [116, 180, 193, 34]], "aya_moshaf": "أَلَا يَعۡلَمُ مَنۡ خَلَقَ وَهُوَ ٱللَّطِيفُ ٱلۡخَبِيرُ "}, {"aya_id": 5256, "coordinates": [[116, 50, 130, 34], [151, 50, 322, 34], [185, 348, 25, 34]], "aya_moshaf": "هُوَ ٱلَّذِي جَعَلَ لَكُمُ ٱلۡأَرۡضَ ذَلُولٗا فَٱمۡشُواْ فِي مَنَاكِبِهَا وَكُلُواْ مِن رِّزۡقِهِۦۖ وَإِلَيۡهِ ٱلنُّشُورُ "}, {"aya_id": 5257, "coordinates": [[185, 50, 298, 34], [219, 318, 55, 34]], "aya_moshaf": "ءَأَمِنتُم مَّن فِي ٱلسَّمَآءِ أَن يَخۡسِفَ بِكُمُ ٱلۡأَرۡضَ فَإِذَا هِيَ تَمُورُ "}, {"aya_id": 5258, "coordinates": [[219, 50, 268, 34], [254, 240, 133, 34]], "aya_moshaf": "أَمۡ أَمِنتُم مَّن فِي ٱلسَّمَآءِ أَن يُرۡسِلَ عَلَيۡكُمۡ حَاصِبٗاۖ فَسَتَعۡلَمُونَ كَيۡفَ نَذِيرِ "}, {"aya_id": 5259, "coordinates": [[254, 50, 190, 34], [288, 303, 70, 34]], "aya_moshaf": "وَلَقَدۡ كَذَّبَ ٱلَّذِينَ مِن قَبۡلِهِمۡ فَكَيۡفَ كَانَ نَكِيرِ "}, {"aya_id": 5260, "coordinates": [[288, 50, 253, 34], [322, 124, 249, 34]], "aya_moshaf": "أَوَلَمۡ يَرَوۡاْ إِلَى ٱلطَّيۡرِ فَوۡقَهُمۡ صَٰٓفَّٰتٖ وَيَقۡبِضۡنَۚ مَا يُمۡسِكُهُنَّ إِلَّا ٱلرَّحۡمَٰنُۚ إِنَّهُۥ بِكُلِّ شَيۡءِۭ بَصِيرٌ "}, {"aya_id": 5261, "coordinates": [[322, 50, 74, 34], [357, 50, 322, 34], [391, 351, 22, 34]], "aya_moshaf": "أَمَّنۡ هَٰذَا ٱلَّذِي هُوَ جُندٞ لَّكُمۡ يَنصُرُكُم مِّن دُونِ ٱلرَّحۡمَٰنِۚ إِنِ ٱلۡكَٰفِرُونَ إِلَّا فِي غُرُورٍ "}, {"aya_id": 5262, "coordinates": [[391, 50, 301, 34], [425, 317, 56, 34]], "aya_moshaf": "أَمَّنۡ هَٰذَا ٱلَّذِي يَرۡزُقُكُمۡ إِنۡ أَمۡسَكَ رِزۡقَهُۥۚ بَل لَّجُّواْ فِي عُتُوّٖ وَنُفُورٍ "}, {"aya_id": 5263, "coordinates": [[425, 50, 267, 34], [460, 259, 114, 34]], "aya_moshaf": "أَفَمَن يَمۡشِي مُكِبًّا عَلَىٰ وَجۡهِهِۦٓ أَهۡدَىٰٓ أَمَّن يَمۡشِي سَوِيًّا عَلَىٰ صِرَٰطٖ مُّسۡتَقِيمٖ "}, {"aya_id": 5264, "coordinates": [[460, 50, 209, 34], [494, 153, 220, 34]], "aya_moshaf": "قُلۡ هُوَ ٱلَّذِيٓ أَنشَأَكُمۡ وَجَعَلَ لَكُمُ ٱلسَّمۡعَ وَٱلۡأَبۡصَٰرَ وَٱلۡأَفۡـِٔدَةَۚ قَلِيلٗا مَّا تَشۡكُرُونَ "}, {"aya_id": 5265, "coordinates": [[494, 50, 103, 34], [528, 226, 147, 34]], "aya_moshaf": "قُلۡ هُوَ ٱلَّذِي ذَرَأَكُمۡ فِي ٱلۡأَرۡضِ وَإِلَيۡهِ تُحۡشَرُونَ "}, {"aya_id": 5266, "coordinates": [[528, 50, 176, 34], [563, 305, 68, 34]], "aya_moshaf": "وَيَقُولُونَ مَتَىٰ هَٰذَا ٱلۡوَعۡدُ إِن كُنتُمۡ صَٰدِقِينَ "}, {"aya_id": 5267, "coordinates": [[563, 50, 255, 34]], "aya_moshaf": "قُلۡ إِنَّمَا ٱلۡعِلۡمُ عِندَ ٱللَّهِ وَإِنَّمَآ أَنَا۠ نَذِيرٞ مُّبِينٞ "}]