const mainSuraId = 2;
const nearbySurasNames = {
    1: 'الفَاتِحة',
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
};
const choicesObjects = {
    "45": "ومثل الذين ينفقون اموالهم ابتغاء",
    "46": "وما انفقتم من نفقه او",
    "48": "ياايها الذين امنوا اذا تداينتم",
    "49": "وان كنتم علي سفر ولم",
};
const ayas = [{"aya_id": 282, "coordinates": [[84, 49, 322, 34], [118, 49, 322, 34], [153, 49, 322, 34], [187, 49, 322, 34], [221, 101, 271, 34]], "aya_moshaf": "ٱلَّذِينَ يَأۡكُلُونَ ٱلرِّبَوٰاْ لَا يَقُومُونَ إِلَّا كَمَا يَقُومُ ٱلَّذِي يَتَخَبَّطُهُ ٱلشَّيۡطَٰنُ مِنَ ٱلۡمَسِّۚ ذَٰلِكَ بِأَنَّهُمۡ قَالُوٓاْ إِنَّمَا ٱلۡبَيۡعُ مِثۡلُ ٱلرِّبَوٰاْۗ وَأَحَلَّ ٱللَّهُ ٱلۡبَيۡعَ وَحَرَّمَ ٱلرِّبَوٰاْۚ فَمَن جَآءَهُۥ مَوۡعِظَةٞ مِّن رَّبِّهِۦ فَٱنتَهَىٰ فَلَهُۥ مَا سَلَفَ وَأَمۡرُهُۥٓ إِلَى ٱللَّهِۖ وَمَنۡ عَادَ فَأُوْلَٰٓئِكَ أَصۡحَٰبُ ٱلنَّارِۖ هُمۡ فِيهَا خَٰلِدُونَ "}, {"aya_id": 283, "coordinates": [[221, 49, 52, 34], [256, 49, 322, 34]], "aya_moshaf": "يَمۡحَقُ ٱللَّهُ ٱلرِّبَوٰاْ وَيُرۡبِي ٱلصَّدَقَٰتِۗ وَٱللَّهُ لَا يُحِبُّ كُلَّ كَفَّارٍ أَثِيمٍ "}, {"aya_id": 284, "coordinates": [[290, 49, 322, 34], [324, 49, 322, 34], [359, 245, 127, 34]], "aya_moshaf": "إِنَّ ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ وَأَقَامُواْ ٱلصَّلَوٰةَ وَءَاتَوُاْ ٱلزَّكَوٰةَ لَهُمۡ أَجۡرُهُمۡ عِندَ رَبِّهِمۡ وَلَا خَوۡفٌ عَلَيۡهِمۡ وَلَا هُمۡ يَحۡزَنُونَ "}, {"aya_id": 285, "coordinates": [[359, 49, 196, 34], [393, 131, 241, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ ٱتَّقُواْ ٱللَّهَ وَذَرُواْ مَا بَقِيَ مِنَ ٱلرِّبَوٰٓاْ إِن كُنتُم مُّؤۡمِنِينَ "}, {"aya_id": 286, "coordinates": [[393, 49, 82, 34], [427, 49, 322, 34], [462, 123, 249, 34]], "aya_moshaf": "فَإِن لَّمۡ تَفۡعَلُواْ فَأۡذَنُواْ بِحَرۡبٖ مِّنَ ٱللَّهِ وَرَسُولِهِۦۖ وَإِن تُبۡتُمۡ فَلَكُمۡ رُءُوسُ أَمۡوَٰلِكُمۡ لَا تَظۡلِمُونَ وَلَا تُظۡلَمُونَ "}, {"aya_id": 287, "coordinates": [[462, 49, 74, 34], [496, 49, 322, 34], [530, 230, 142, 34]], "aya_moshaf": "وَإِن كَانَ ذُو عُسۡرَةٖ فَنَظِرَةٌ إِلَىٰ مَيۡسَرَةٖۚ وَأَن تَصَدَّقُواْ خَيۡرٞ لَّكُمۡ إِن كُنتُمۡ تَعۡلَمُونَ "}, {"aya_id": 288, "coordinates": [[530, 49, 181, 34], [565, 49, 322, 34]], "aya_moshaf": "وَٱتَّقُواْ يَوۡمٗا تُرۡجَعُونَ فِيهِ إِلَى ٱللَّهِۖ ثُمَّ تُوَفَّىٰ كُلُّ نَفۡسٖ مَّا كَسَبَتۡ وَهُمۡ لَا يُظۡلَمُونَ "}]