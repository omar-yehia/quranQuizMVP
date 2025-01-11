const nearbySurasNames = {
    35: 'فَاطِر',
    36: 'يسٓ',
    37: 'الصَّافَات',
    38: 'صٓ',
};
const choicesObjects = {
    "440": "ولو يؤاخذ الله الناس بما",
    "441": "واضرب لهم مثلا اصحاب القريه",
    "443": "وايه لهم انا حملنا ذريتهم",
    "444": "ان اصحاب الجنه اليوم في",
};
const ayas = [{"aya_id": 3733, "coordinates": [[84, 92, 322, 34], [118, 333, 82, 34]], "aya_moshaf": "۞ وَمَآ أَنزَلۡنَا عَلَىٰ قَوۡمِهِۦ مِنۢ بَعۡدِهِۦ مِن جُندٖ مِّنَ ٱلسَّمَآءِ وَمَا كُنَّا مُنزِلِينَ "}, {"aya_id": 3734, "coordinates": [[118, 92, 241, 34], [153, 391, 24, 34]], "aya_moshaf": "إِن كَانَتۡ إِلَّا صَيۡحَةٗ وَٰحِدَةٗ فَإِذَا هُمۡ خَٰمِدُونَ "}, {"aya_id": 3735, "coordinates": [[153, 92, 299, 34], [187, 327, 88, 34]], "aya_moshaf": "يَٰحَسۡرَةً عَلَى ٱلۡعِبَادِۚ مَا يَأۡتِيهِم مِّن رَّسُولٍ إِلَّا كَانُواْ بِهِۦ يَسۡتَهۡزِءُونَ "}, {"aya_id": 3736, "coordinates": [[187, 92, 235, 34], [221, 275, 140, 34]], "aya_moshaf": "أَلَمۡ يَرَوۡاْ كَمۡ أَهۡلَكۡنَا قَبۡلَهُم مِّنَ ٱلۡقُرُونِ أَنَّهُمۡ إِلَيۡهِمۡ لَا يَرۡجِعُونَ "}, {"aya_id": 3737, "coordinates": [[221, 92, 183, 34], [256, 389, 26, 34]], "aya_moshaf": "وَإِن كُلّٞ لَّمَّا جَمِيعٞ لَّدَيۡنَا مُحۡضَرُونَ "}, {"aya_id": 3738, "coordinates": [[256, 92, 297, 34], [290, 289, 126, 34]], "aya_moshaf": "وَءَايَةٞ لَّهُمُ ٱلۡأَرۡضُ ٱلۡمَيۡتَةُ أَحۡيَيۡنَٰهَا وَأَخۡرَجۡنَا مِنۡهَا حَبّٗا فَمِنۡهُ يَأۡكُلُونَ "}, {"aya_id": 3739, "coordinates": [[290, 92, 197, 34], [324, 209, 206, 34]], "aya_moshaf": "وَجَعَلۡنَا فِيهَا جَنَّٰتٖ مِّن نَّخِيلٖ وَأَعۡنَٰبٖ وَفَجَّرۡنَا فِيهَا مِنَ ٱلۡعُيُونِ "}, {"aya_id": 3740, "coordinates": [[324, 92, 117, 34], [359, 176, 239, 34]], "aya_moshaf": "لِيَأۡكُلُواْ مِن ثَمَرِهِۦ وَمَا عَمِلَتۡهُ أَيۡدِيهِمۡۚ أَفَلَا يَشۡكُرُونَ "}, {"aya_id": 3741, "coordinates": [[359, 92, 84, 34], [393, 92, 322, 34], [427, 292, 123, 34]], "aya_moshaf": "سُبۡحَٰنَ ٱلَّذِي خَلَقَ ٱلۡأَزۡوَٰجَ كُلَّهَا مِمَّا تُنۢبِتُ ٱلۡأَرۡضُ وَمِنۡ أَنفُسِهِمۡ وَمِمَّا لَا يَعۡلَمُونَ "}, {"aya_id": 3742, "coordinates": [[427, 92, 200, 34], [462, 289, 126, 34]], "aya_moshaf": "وَءَايَةٞ لَّهُمُ ٱلَّيۡلُ نَسۡلَخُ مِنۡهُ ٱلنَّهَارَ فَإِذَا هُم مُّظۡلِمُونَ "}, {"aya_id": 3743, "coordinates": [[462, 92, 197, 34], [496, 247, 168, 34]], "aya_moshaf": "وَٱلشَّمۡسُ تَجۡرِي لِمُسۡتَقَرّٖ لَّهَاۚ ذَٰلِكَ تَقۡدِيرُ ٱلۡعَزِيزِ ٱلۡعَلِيمِ "}, {"aya_id": 3744, "coordinates": [[496, 92, 155, 34], [530, 269, 146, 34]], "aya_moshaf": "وَٱلۡقَمَرَ قَدَّرۡنَٰهُ مَنَازِلَ حَتَّىٰ عَادَ كَٱلۡعُرۡجُونِ ٱلۡقَدِيمِ "}, {"aya_id": 3745, "coordinates": [[530, 92, 177, 34], [565, 92, 322, 34]], "aya_moshaf": "لَا ٱلشَّمۡسُ يَنۢبَغِي لَهَآ أَن تُدۡرِكَ ٱلۡقَمَرَ وَلَا ٱلَّيۡلُ سَابِقُ ٱلنَّهَارِۚ وَكُلّٞ فِي فَلَكٖ يَسۡبَحُونَ "}]
const ayasRanges = [{"ayas_ids_range": [3733, 3745], "sura_id": 36}];
