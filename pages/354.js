const nearbySurasNames = {
    23: 'المؤمنُون',
    24: 'النور',
    25: 'الفُرقَان',
    26: 'الشعراء',
};
const choicesObjects = {
    "352": "ياايها الذين امنوا لا تتبعوا",
    "353": "فان لم تجدوا فيها احدا",
    "355": "رجال لا تلهيهم تجاره ولا",
    "356": "يقلب الله الليل والنهار ان",
};
const ayas = [{"aya_id": 2823, "coordinates": [[84, 89, 322, 34], [118, 89, 322, 34]], "aya_moshaf": "وَأَنكِحُواْ ٱلۡأَيَٰمَىٰ مِنكُمۡ وَٱلصَّٰلِحِينَ مِنۡ عِبَادِكُمۡ وَإِمَآئِكُمۡۚ إِن يَكُونُواْ فُقَرَآءَ يُغۡنِهِمُ ٱللَّهُ مِن فَضۡلِهِۦۗ وَٱللَّهُ وَٰسِعٌ عَلِيمٞ "}, {"aya_id": 2824, "coordinates": [[153, 89, 322, 34], [187, 89, 322, 34], [221, 89, 322, 34], [256, 89, 322, 34], [290, 89, 322, 34], [324, 389, 23, 34]], "aya_moshaf": "وَلۡيَسۡتَعۡفِفِ ٱلَّذِينَ لَا يَجِدُونَ نِكَاحًا حَتَّىٰ يُغۡنِيَهُمُ ٱللَّهُ مِن فَضۡلِهِۦۗ وَٱلَّذِينَ يَبۡتَغُونَ ٱلۡكِتَٰبَ مِمَّا مَلَكَتۡ أَيۡمَٰنُكُمۡ فَكَاتِبُوهُمۡ إِنۡ عَلِمۡتُمۡ فِيهِمۡ خَيۡرٗاۖ وَءَاتُوهُم مِّن مَّالِ ٱللَّهِ ٱلَّذِيٓ ءَاتَىٰكُمۡۚ وَلَا تُكۡرِهُواْ فَتَيَٰتِكُمۡ عَلَى ٱلۡبِغَآءِ إِنۡ أَرَدۡنَ تَحَصُّنٗا لِّتَبۡتَغُواْ عَرَضَ ٱلۡحَيَوٰةِ ٱلدُّنۡيَاۚ وَمَن يُكۡرِههُّنَّ فَإِنَّ ٱللَّهَ مِنۢ بَعۡدِ إِكۡرَٰهِهِنَّ غَفُورٞ رَّحِيمٞ "}, {"aya_id": 2825, "coordinates": [[324, 89, 300, 34], [359, 230, 182, 34]], "aya_moshaf": "وَلَقَدۡ أَنزَلۡنَآ إِلَيۡكُمۡ ءَايَٰتٖ مُّبَيِّنَٰتٖ وَمَثَلٗا مِّنَ ٱلَّذِينَ خَلَوۡاْ مِن قَبۡلِكُمۡ وَمَوۡعِظَةٗ لِّلۡمُتَّقِينَ "}, {"aya_id": 2826, "coordinates": [[359, 89, 141, 34], [393, 89, 322, 34], [427, 89, 322, 34], [462, 89, 322, 34], [496, 89, 322, 34], [530, 231, 181, 34]], "aya_moshaf": "۞ ٱللَّهُ نُورُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۚ مَثَلُ نُورِهِۦ كَمِشۡكَوٰةٖ فِيهَا مِصۡبَاحٌۖ ٱلۡمِصۡبَاحُ فِي زُجَاجَةٍۖ ٱلزُّجَاجَةُ كَأَنَّهَا كَوۡكَبٞ دُرِّيّٞ يُوقَدُ مِن شَجَرَةٖ مُّبَٰرَكَةٖ زَيۡتُونَةٖ لَّا شَرۡقِيَّةٖ وَلَا غَرۡبِيَّةٖ يَكَادُ زَيۡتُهَا يُضِيٓءُ وَلَوۡ لَمۡ تَمۡسَسۡهُ نَارٞۚ نُّورٌ عَلَىٰ نُورٖۚ يَهۡدِي ٱللَّهُ لِنُورِهِۦ مَن يَشَآءُۚ وَيَضۡرِبُ ٱللَّهُ ٱلۡأَمۡثَٰلَ لِلنَّاسِۗ وَٱللَّهُ بِكُلِّ شَيۡءٍ عَلِيمٞ "}, {"aya_id": 2827, "coordinates": [[530, 89, 142, 34], [565, 89, 322, 34]], "aya_moshaf": "فِي بُيُوتٍ أَذِنَ ٱللَّهُ أَن تُرۡفَعَ وَيُذۡكَرَ فِيهَا ٱسۡمُهُۥ يُسَبِّحُ لَهُۥ فِيهَا بِٱلۡغُدُوِّ وَٱلۡأٓصَالِ "}]
const ayasRanges = [{"ayas_ids_range": [2823, 2827], "sura_id": 24}];
