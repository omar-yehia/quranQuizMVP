const nearbySurasNames = {
    82: 'الانفِطَار',
    83: 'المُطَففين',
    84: 'الانشِقَاق',
    85: 'البُرُوج',
};
const choicesObjects = {
    "586": "اذا الشمس كورت",
    "587": "اذا السماء انفطرت",
    "589": "علي الارائك ينظرون",
    "590": "والسماء ذات البروج",
};
const ayas = [{"aya_id": 5855, "coordinates": [[80, 239, 176, 34]], "aya_moshaf": "كـَلَّآ إِنَّ كِتَٰبَ ٱلۡفُجَّارِ لَفِي سِجِّينٖ "}, {"aya_id": 5856, "coordinates": [[80, 126, 113, 34]], "aya_moshaf": "وَمَآ أَدۡرَىٰكَ مَا سِجِّينٞ "}, {"aya_id": 5857, "coordinates": [[80, 92, 34, 34], [114, 361, 54, 34]], "aya_moshaf": "كِتَٰبٞ مَّرۡقُومٞ "}, {"aya_id": 5858, "coordinates": [[114, 234, 127, 34]], "aya_moshaf": "وَيۡلٞ يَوۡمَئِذٖ لِّلۡمُكَذِّبِينَ "}, {"aya_id": 5859, "coordinates": [[114, 92, 142, 34]], "aya_moshaf": "ٱلَّذِينَ يُكَذِّبُونَ بِيَوۡمِ ٱلدِّينِ "}, {"aya_id": 5860, "coordinates": [[149, 236, 179, 34]], "aya_moshaf": "وَمَا يُكَذِّبُ بِهِۦٓ إِلَّا كُلُّ مُعۡتَدٍ أَثِيمٍ "}, {"aya_id": 5861, "coordinates": [[149, 92, 144, 34], [183, 353, 62, 34]], "aya_moshaf": "إِذَا تُتۡلَىٰ عَلَيۡهِ ءَايَٰتُنَا قَالَ أَسَٰطِيرُ ٱلۡأَوَّلِينَ "}, {"aya_id": 5862, "coordinates": [[183, 141, 212, 34]], "aya_moshaf": "كـَلَّاۖ بَلۡۜ رَانَ عَلَىٰ قُلُوبِهِم مَّا كَانُواْ يَكۡسِبُونَ "}, {"aya_id": 5863, "coordinates": [[183, 92, 49, 34], [217, 261, 154, 34]], "aya_moshaf": "كـَلَّآ إِنَّهُمۡ عَن رَّبِّهِمۡ يَوۡمَئِذٖ لَّمَحۡجُوبُونَ "}, {"aya_id": 5864, "coordinates": [[217, 128, 133, 34]], "aya_moshaf": "ثُمَّ إِنَّهُمۡ لَصَالُواْ ٱلۡجَحِيمِ "}, {"aya_id": 5865, "coordinates": [[217, 92, 36, 34], [252, 265, 150, 34]], "aya_moshaf": "ثُمَّ يُقَالُ هَٰذَا ٱلَّذِي كُنتُم بِهِۦ تُكَذِّبُونَ "}, {"aya_id": 5866, "coordinates": [[252, 92, 173, 34], [286, 391, 24, 34]], "aya_moshaf": "كـَلَّآ إِنَّ كِتَٰبَ ٱلۡأَبۡرَارِ لَفِي عِلِّيِّينَ "}, {"aya_id": 5867, "coordinates": [[286, 265, 126, 34]], "aya_moshaf": "وَمَآ أَدۡرَىٰكَ مَا عِلِّيُّونَ "}, {"aya_id": 5868, "coordinates": [[286, 174, 91, 34]], "aya_moshaf": "كِتَٰبٞ مَّرۡقُومٞ "}, {"aya_id": 5869, "coordinates": [[286, 92, 82, 34], [320, 389, 26, 34]], "aya_moshaf": "يَشۡهَدُهُ ٱلۡمُقَرَّبُونَ "}, {"aya_id": 5870, "coordinates": [[320, 270, 119, 34]], "aya_moshaf": "إِنَّ ٱلۡأَبۡرَارَ لَفِي نَعِيمٍ "}, {"aya_id": 5871, "coordinates": [[320, 143, 127, 34]], "aya_moshaf": "عَلَى ٱلۡأَرَآئِكِ يَنظُرُونَ "}, {"aya_id": 5872, "coordinates": [[320, 92, 51, 34], [355, 264, 151, 34]], "aya_moshaf": "تَعۡرِفُ فِي وُجُوهِهِمۡ نَضۡرَةَ ٱلنَّعِيمِ "}, {"aya_id": 5873, "coordinates": [[355, 92, 172, 34]], "aya_moshaf": "يُسۡقَوۡنَ مِن رَّحِيقٖ مَّخۡتُومٍ "}, {"aya_id": 5874, "coordinates": [[389, 144, 271, 34]], "aya_moshaf": "خِتَٰمُهُۥ مِسۡكٞۚ وَفِي ذَٰلِكَ فَلۡيَتَنَافَسِ ٱلۡمُتَنَٰفِسُونَ "}, {"aya_id": 5875, "coordinates": [[389, 92, 52, 34], [423, 339, 76, 34]], "aya_moshaf": "وَمِزَاجُهُۥ مِن تَسۡنِيمٍ "}, {"aya_id": 5876, "coordinates": [[423, 152, 187, 34]], "aya_moshaf": "عَيۡنٗا يَشۡرَبُ بِهَا ٱلۡمُقَرَّبُونَ "}, {"aya_id": 5877, "coordinates": [[423, 92, 60, 34], [458, 182, 233, 34]], "aya_moshaf": "إِنَّ ٱلَّذِينَ أَجۡرَمُواْ كَانُواْ مِنَ ٱلَّذِينَ ءَامَنُواْ يَضۡحَكُونَ "}, {"aya_id": 5878, "coordinates": [[458, 92, 90, 34], [492, 336, 79, 34]], "aya_moshaf": "وَإِذَا مَرُّواْ بِهِمۡ يَتَغَامَزُونَ "}, {"aya_id": 5879, "coordinates": [[492, 92, 244, 34]], "aya_moshaf": "وَإِذَا ٱنقَلَبُوٓاْ إِلَىٰٓ أَهۡلِهِمُ ٱنقَلَبُواْ فَكِهِينَ "}, {"aya_id": 5880, "coordinates": [[526, 184, 231, 34]], "aya_moshaf": "وَإِذَا رَأَوۡهُمۡ قَالُوٓاْ إِنَّ هَٰٓؤُلَآءِ لَضَآلُّونَ "}, {"aya_id": 5881, "coordinates": [[526, 92, 92, 34], [561, 337, 78, 34]], "aya_moshaf": "وَمَآ أُرۡسِلُواْ عَلَيۡهِمۡ حَٰفِظِينَ "}, {"aya_id": 5882, "coordinates": [[561, 92, 245, 34]], "aya_moshaf": "فَٱلۡيَوۡمَ ٱلَّذِينَ ءَامَنُواْ مِنَ ٱلۡكُفَّارِ يَضۡحَكُونَ "}]
const ayasRanges = [{"ayas_ids_range": [5855, 5882], "sura_id": 83}];
