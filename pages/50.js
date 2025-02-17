const nearbySurasNames = {
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
    5: 'المَائدة',
};
const choicesObjects = {
    "48": "ياايها الذين امنوا اذا تداينتم",
    "49": "وان كنتم علي سفر ولم",
    "51": "ان الذين كفروا لن تغني",
    "52": "الذين يقولون ربنا اننا امنا",
};
const ayas = [{"aya_id": 294, "coordinates": [[153, 357, 49, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ الٓمٓ "}, {"aya_id": 295, "coordinates": [[153, 190, 167, 34]], "aya_moshaf": "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡحَيُّ ٱلۡقَيُّومُ "}, {"aya_id": 296, "coordinates": [[153, 83, 107, 34], [187, 111, 295, 34]], "aya_moshaf": "نَزَّلَ عَلَيۡكَ ٱلۡكِتَٰبَ بِٱلۡحَقِّ مُصَدِّقٗا لِّمَا بَيۡنَ يَدَيۡهِ وَأَنزَلَ ٱلتَّوۡرَىٰةَ وَٱلۡإِنجِيلَ "}, {"aya_id": 297, "coordinates": [[187, 83, 28, 34], [221, 83, 322, 34], [256, 193, 213, 34]], "aya_moshaf": "مِن قَبۡلُ هُدٗى لِّلنَّاسِ وَأَنزَلَ ٱلۡفُرۡقَانَۗ إِنَّ ٱلَّذِينَ كَفَرُواْ بِـَٔايَٰتِ ٱللَّهِ لَهُمۡ عَذَابٞ شَدِيدٞۗ وَٱللَّهُ عَزِيزٞ ذُو ٱنتِقَامٍ "}, {"aya_id": 298, "coordinates": [[256, 83, 110, 34], [290, 217, 189, 34]], "aya_moshaf": "إِنَّ ٱللَّهَ لَا يَخۡفَىٰ عَلَيۡهِ شَيۡءٞ فِي ٱلۡأَرۡضِ وَلَا فِي ٱلسَّمَآءِ "}, {"aya_id": 299, "coordinates": [[290, 83, 134, 34], [324, 111, 295, 34]], "aya_moshaf": "هُوَ ٱلَّذِي يُصَوِّرُكُمۡ فِي ٱلۡأَرۡحَامِ كَيۡفَ يَشَآءُۚ لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡعَزِيزُ ٱلۡحَكِيمُ "}, {"aya_id": 300, "coordinates": [[324, 83, 28, 34], [359, 83, 322, 34], [393, 83, 322, 34], [427, 83, 322, 34], [462, 83, 322, 34], [496, 281, 125, 34]], "aya_moshaf": "هُوَ ٱلَّذِيٓ أَنزَلَ عَلَيۡكَ ٱلۡكِتَٰبَ مِنۡهُ ءَايَٰتٞ مُّحۡكَمَٰتٌ هُنَّ أُمُّ ٱلۡكِتَٰبِ وَأُخَرُ مُتَشَٰبِهَٰتٞۖ فَأَمَّا ٱلَّذِينَ فِي قُلُوبِهِمۡ زَيۡغٞ فَيَتَّبِعُونَ مَا تَشَٰبَهَ مِنۡهُ ٱبۡتِغَآءَ ٱلۡفِتۡنَةِ وَٱبۡتِغَآءَ تَأۡوِيلِهِۦۖ وَمَا يَعۡلَمُ تَأۡوِيلَهُۥٓ إِلَّا ٱللَّهُۗ وَٱلرَّٰسِخُونَ فِي ٱلۡعِلۡمِ يَقُولُونَ ءَامَنَّا بِهِۦ كُلّٞ مِّنۡ عِندِ رَبِّنَاۗ وَمَا يَذَّكَّرُ إِلَّآ أُوْلُواْ ٱلۡأَلۡبَٰبِ "}, {"aya_id": 301, "coordinates": [[496, 83, 198, 34], [530, 189, 217, 34]], "aya_moshaf": "رَبَّنَا لَا تُزِغۡ قُلُوبَنَا بَعۡدَ إِذۡ هَدَيۡتَنَا وَهَبۡ لَنَا مِن لَّدُنكَ رَحۡمَةًۚ إِنَّكَ أَنتَ ٱلۡوَهَّابُ "}, {"aya_id": 302, "coordinates": [[530, 83, 106, 34], [565, 83, 322, 34]], "aya_moshaf": "رَبَّنَآ إِنَّكَ جَامِعُ ٱلنَّاسِ لِيَوۡمٖ لَّا رَيۡبَ فِيهِۚ إِنَّ ٱللَّهَ لَا يُخۡلِفُ ٱلۡمِيعَادَ "}]
const ayasRanges = [{"ayas_ids_range": [294, 302], "sura_id": 3}];
