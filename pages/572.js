const nearbySurasNames = {
    71: 'نُوح',
    72: 'الجِن',
    73: 'المُزمل',
    74: 'المُدثر',
};
const choicesObjects = {
    "570": "فلا اقسم برب المشارق والمغارب",
    "571": "يرسل السماء عليكم مدرارا",
    "573": "وانا منا المسلمون ومنا القاسطون",
    "574": "ياايها المزمل",
};
const ayas = [{"aya_id": 5448, "coordinates": [[154, 93, 322, 34], [188, 368, 48, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ قُلۡ أُوحِيَ إِلَيَّ أَنَّهُ ٱسۡتَمَعَ نَفَرٞ مِّنَ ٱلۡجِنِّ فَقَالُوٓاْ إِنَّا سَمِعۡنَا قُرۡءَانًا عَجَبٗا "}, {"aya_id": 5449, "coordinates": [[188, 93, 275, 34]], "aya_moshaf": "يَهۡدِيٓ إِلَى ٱلرُّشۡدِ فَـَٔامَنَّا بِهِۦۖ وَلَن نُّشۡرِكَ بِرَبِّنَآ أَحَدٗا "}, {"aya_id": 5450, "coordinates": [[222, 164, 252, 34]], "aya_moshaf": "وَأَنَّهُۥ تَعَٰلَىٰ جَدُّ رَبِّنَا مَا ٱتَّخَذَ صَٰحِبَةٗ وَلَا وَلَدٗا "}, {"aya_id": 5451, "coordinates": [[222, 93, 71, 34], [257, 239, 177, 34]], "aya_moshaf": "وَأَنَّهُۥ كَانَ يَقُولُ سَفِيهُنَا عَلَى ٱللَّهِ شَطَطٗا "}, {"aya_id": 5452, "coordinates": [[257, 93, 146, 34], [291, 297, 119, 34]], "aya_moshaf": "وَأَنَّا ظَنَنَّآ أَن لَّن تَقُولَ ٱلۡإِنسُ وَٱلۡجِنُّ عَلَى ٱللَّهِ كَذِبٗا "}, {"aya_id": 5453, "coordinates": [[291, 93, 204, 34], [325, 275, 141, 34]], "aya_moshaf": "وَأَنَّهُۥ كَانَ رِجَالٞ مِّنَ ٱلۡإِنسِ يَعُوذُونَ بِرِجَالٖ مِّنَ ٱلۡجِنِّ فَزَادُوهُمۡ رَهَقٗا "}, {"aya_id": 5454, "coordinates": [[325, 93, 182, 34], [360, 345, 71, 34]], "aya_moshaf": "وَأَنَّهُمۡ ظَنُّواْ كَمَا ظَنَنتُمۡ أَن لَّن يَبۡعَثَ ٱللَّهُ أَحَدٗا "}, {"aya_id": 5455, "coordinates": [[360, 93, 252, 34], [394, 318, 98, 34]], "aya_moshaf": "وَأَنَّا لَمَسۡنَا ٱلسَّمَآءَ فَوَجَدۡنَٰهَا مُلِئَتۡ حَرَسٗا شَدِيدٗا وَشُهُبٗا "}, {"aya_id": 5456, "coordinates": [[394, 93, 225, 34], [428, 223, 193, 34]], "aya_moshaf": "وَأَنَّا كُنَّا نَقۡعُدُ مِنۡهَا مَقَٰعِدَ لِلسَّمۡعِۖ فَمَن يَسۡتَمِعِ ٱلۡأٓنَ يَجِدۡ لَهُۥ شِهَابٗا رَّصَدٗا "}, {"aya_id": 5457, "coordinates": [[428, 93, 130, 34], [463, 198, 218, 34]], "aya_moshaf": "وَأَنَّا لَا نَدۡرِيٓ أَشَرٌّ أُرِيدَ بِمَن فِي ٱلۡأَرۡضِ أَمۡ أَرَادَ بِهِمۡ رَبُّهُمۡ رَشَدٗا "}, {"aya_id": 5458, "coordinates": [[463, 93, 105, 34], [497, 228, 188, 34]], "aya_moshaf": "وَأَنَّا مِنَّا ٱلصَّٰلِحُونَ وَمِنَّا دُونَ ذَٰلِكَۖ كُنَّا طَرَآئِقَ قِدَدٗا "}, {"aya_id": 5459, "coordinates": [[497, 93, 135, 34], [531, 229, 187, 34]], "aya_moshaf": "وَأَنَّا ظَنَنَّآ أَن لَّن نُّعۡجِزَ ٱللَّهَ فِي ٱلۡأَرۡضِ وَلَن نُّعۡجِزَهُۥ هَرَبٗا "}, {"aya_id": 5460, "coordinates": [[531, 93, 136, 34], [566, 93, 322, 34]], "aya_moshaf": "وَأَنَّا لَمَّا سَمِعۡنَا ٱلۡهُدَىٰٓ ءَامَنَّا بِهِۦۖ فَمَن يُؤۡمِنۢ بِرَبِّهِۦ فَلَا يَخَافُ بَخۡسٗا وَلَا رَهَقٗا "}]
const ayasRanges = [{"ayas_ids_range": [5448, 5460], "sura_id": 72}];
