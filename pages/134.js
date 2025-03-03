const nearbySurasNames = {
    5: 'المَائدة',
    6: 'الأنعَام',
    7: 'الأعرَاف',
    8: 'الأنفَال',
};
const choicesObjects = {
    "132": "انما يستجيب الذين يسمعون والموتي",
    "133": "فقطع دابر القوم الذين ظلموا",
    "135": "وهو الذي يتوفاكم بالليل ويعلم",
    "136": "وما علي الذين يتقون من",
};
const ayas = [{"aya_id": 842, "coordinates": [[80, 92, 322, 34], [114, 118, 297, 34]], "aya_moshaf": "وَكَذَٰلِكَ فَتَنَّا بَعۡضَهُم بِبَعۡضٖ لِّيَقُولُوٓاْ أَهَٰٓؤُلَآءِ مَنَّ ٱللَّهُ عَلَيۡهِم مِّنۢ بَيۡنِنَآۗ أَلَيۡسَ ٱللَّهُ بِأَعۡلَمَ بِٱلشَّٰكِرِينَ "}, {"aya_id": 843, "coordinates": [[114, 92, 26, 34], [149, 92, 322, 34], [183, 92, 322, 34], [217, 92, 322, 34]], "aya_moshaf": "وَإِذَا جَآءَكَ ٱلَّذِينَ يُؤۡمِنُونَ بِـَٔايَٰتِنَا فَقُلۡ سَلَٰمٌ عَلَيۡكُمۡۖ كَتَبَ رَبُّكُمۡ عَلَىٰ نَفۡسِهِ ٱلرَّحۡمَةَ أَنَّهُۥ مَنۡ عَمِلَ مِنكُمۡ سُوٓءَۢا بِجَهَٰلَةٖ ثُمَّ تَابَ مِنۢ بَعۡدِهِۦ وَأَصۡلَحَ فَأَنَّهُۥ غَفُورٞ رَّحِيمٞ "}, {"aya_id": 844, "coordinates": [[252, 92, 322, 34]], "aya_moshaf": "وَكَذَٰلِكَ نُفَصِّلُ ٱلۡأٓيَٰتِ وَلِتَسۡتَبِينَ سَبِيلُ ٱلۡمُجۡرِمِينَ "}, {"aya_id": 845, "coordinates": [[286, 92, 322, 34], [320, 92, 322, 34]], "aya_moshaf": "قُلۡ إِنِّي نُهِيتُ أَنۡ أَعۡبُدَ ٱلَّذِينَ تَدۡعُونَ مِن دُونِ ٱللَّهِۚ قُل لَّآ أَتَّبِعُ أَهۡوَآءَكُمۡ قَدۡ ضَلَلۡتُ إِذٗا وَمَآ أَنَا۠ مِنَ ٱلۡمُهۡتَدِينَ "}, {"aya_id": 846, "coordinates": [[355, 92, 322, 34], [389, 92, 322, 34], [423, 335, 80, 34]], "aya_moshaf": "قُلۡ إِنِّي عَلَىٰ بَيِّنَةٖ مِّن رَّبِّي وَكَذَّبۡتُم بِهِۦۚ مَا عِندِي مَا تَسۡتَعۡجِلُونَ بِهِۦٓۚ إِنِ ٱلۡحُكۡمُ إِلَّا لِلَّهِۖ يَقُصُّ ٱلۡحَقَّۖ وَهُوَ خَيۡرُ ٱلۡفَٰصِلِينَ "}, {"aya_id": 847, "coordinates": [[423, 92, 243, 34], [458, 92, 322, 34]], "aya_moshaf": "قُل لَّوۡ أَنَّ عِندِي مَا تَسۡتَعۡجِلُونَ بِهِۦ لَقُضِيَ ٱلۡأَمۡرُ بَيۡنِي وَبَيۡنَكُمۡۗ وَٱللَّهُ أَعۡلَمُ بِٱلظَّٰلِمِينَ "}, {"aya_id": 848, "coordinates": [[492, 92, 322, 34], [526, 92, 322, 34], [561, 92, 322, 34]], "aya_moshaf": "۞ وَعِندَهُۥ مَفَاتِحُ ٱلۡغَيۡبِ لَا يَعۡلَمُهَآ إِلَّا هُوَۚ وَيَعۡلَمُ مَا فِي ٱلۡبَرِّ وَٱلۡبَحۡرِۚ وَمَا تَسۡقُطُ مِن وَرَقَةٍ إِلَّا يَعۡلَمُهَا وَلَا حَبَّةٖ فِي ظُلُمَٰتِ ٱلۡأَرۡضِ وَلَا رَطۡبٖ وَلَا يَابِسٍ إِلَّا فِي كِتَٰبٖ مُّبِينٖ "}]
const ayasRanges = [{"ayas_ids_range": [842, 848], "sura_id": 6}];
