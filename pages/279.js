const nearbySurasNames = {
    15: 'الحِجر',
    16: 'النَّحل',
    17: 'الإسرَاء',
    18: 'الكَهف',
};
const choicesObjects = {
    "277": "الذين كفروا وصدوا عن سبيل",
    "278": "ولا تتخذوا ايمانكم دخلا بينكم",
    "280": "يوم تاتي كل نفس تجادل",
    "281": "ثم ان ربك للذين عملوا",
};
const ayas = [{"aya_id": 2004, "coordinates": [[89, 47, 322, 34], [123, 47, 322, 34], [158, 298, 72, 34]], "aya_moshaf": "وَلَقَدۡ نَعۡلَمُ أَنَّهُمۡ يَقُولُونَ إِنَّمَا يُعَلِّمُهُۥ بَشَرٞۗ لِّسَانُ ٱلَّذِي يُلۡحِدُونَ إِلَيۡهِ أَعۡجَمِيّٞ وَهَٰذَا لِسَانٌ عَرَبِيّٞ مُّبِينٌ "}, {"aya_id": 2005, "coordinates": [[158, 47, 251, 34], [192, 211, 159, 34]], "aya_moshaf": "إِنَّ ٱلَّذِينَ لَا يُؤۡمِنُونَ بِـَٔايَٰتِ ٱللَّهِ لَا يَهۡدِيهِمُ ٱللَّهُ وَلَهُمۡ عَذَابٌ أَلِيمٌ "}, {"aya_id": 2006, "coordinates": [[192, 47, 164, 34], [226, 47, 322, 34], [261, 341, 29, 34]], "aya_moshaf": "إِنَّمَا يَفۡتَرِي ٱلۡكَذِبَ ٱلَّذِينَ لَا يُؤۡمِنُونَ بِـَٔايَٰتِ ٱللَّهِۖ وَأُوْلَٰٓئِكَ هُمُ ٱلۡكَٰذِبُونَ "}, {"aya_id": 2007, "coordinates": [[261, 47, 294, 34], [295, 47, 322, 34], [329, 47, 322, 34]], "aya_moshaf": "مَن كَفَرَ بِٱللَّهِ مِنۢ بَعۡدِ إِيمَٰنِهِۦٓ إِلَّا مَنۡ أُكۡرِهَ وَقَلۡبُهُۥ مُطۡمَئِنُّۢ بِٱلۡإِيمَٰنِ وَلَٰكِن مَّن شَرَحَ بِٱلۡكُفۡرِ صَدۡرٗا فَعَلَيۡهِمۡ غَضَبٞ مِّنَ ٱللَّهِ وَلَهُمۡ عَذَابٌ عَظِيمٞ "}, {"aya_id": 2008, "coordinates": [[364, 47, 322, 34], [398, 110, 260, 34]], "aya_moshaf": "ذَٰلِكَ بِأَنَّهُمُ ٱسۡتَحَبُّواْ ٱلۡحَيَوٰةَ ٱلدُّنۡيَا عَلَى ٱلۡأٓخِرَةِ وَأَنَّ ٱللَّهَ لَا يَهۡدِي ٱلۡقَوۡمَ ٱلۡكَٰفِرِينَ "}, {"aya_id": 2009, "coordinates": [[398, 47, 63, 34], [432, 47, 322, 34], [467, 178, 192, 34]], "aya_moshaf": "أُوْلَٰٓئِكَ ٱلَّذِينَ طَبَعَ ٱللَّهُ عَلَىٰ قُلُوبِهِمۡ وَسَمۡعِهِمۡ وَأَبۡصَٰرِهِمۡۖ وَأُوْلَٰٓئِكَ هُمُ ٱلۡغَٰفِلُونَ "}, {"aya_id": 2010, "coordinates": [[467, 47, 131, 34], [501, 162, 208, 34]], "aya_moshaf": "لَا جَرَمَ أَنَّهُمۡ فِي ٱلۡأٓخِرَةِ هُمُ ٱلۡخَٰسِرُونَ "}, {"aya_id": 2011, "coordinates": [[501, 47, 115, 34], [535, 47, 322, 34], [570, 47, 322, 34]], "aya_moshaf": "ثُمَّ إِنَّ رَبَّكَ لِلَّذِينَ هَاجَرُواْ مِنۢ بَعۡدِ مَا فُتِنُواْ ثُمَّ جَٰهَدُواْ وَصَبَرُوٓاْ إِنَّ رَبَّكَ مِنۢ بَعۡدِهَا لَغَفُورٞ رَّحِيمٞ "}]
const ayasRanges = [{"ayas_ids_range": [2004, 2011], "sura_id": 16}];
