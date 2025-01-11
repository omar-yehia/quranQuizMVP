const mainSuraId = 24;
const nearbySurasNames = {
    23: 'المؤمنُون',
    24: 'النور',
    25: 'الفُرقَان',
    26: 'الشعراء',
};
const choicesObjects = {
    "357": "قل اطيعوا الله واطيعوا الرسول",
    "358": "واذا بلغ الاطفال منكم الحلم",
    "360": "واتخذوا من دونه الهه لا",
    "361": "اذا راتهم من مكان بعيد",
};
const ayas = [{"aya_id": 2853, "coordinates": [[84, 47, 322, 34], [118, 47, 322, 34], [153, 47, 322, 34], [187, 47, 322, 34], [221, 193, 177, 34]], "aya_moshaf": "إِنَّمَا ٱلۡمُؤۡمِنُونَ ٱلَّذِينَ ءَامَنُواْ بِٱللَّهِ وَرَسُولِهِۦ وَإِذَا كَانُواْ مَعَهُۥ عَلَىٰٓ أَمۡرٖ جَامِعٖ لَّمۡ يَذۡهَبُواْ حَتَّىٰ يَسۡتَـٔۡذِنُوهُۚ إِنَّ ٱلَّذِينَ يَسۡتَـٔۡذِنُونَكَ أُوْلَٰٓئِكَ ٱلَّذِينَ يُؤۡمِنُونَ بِٱللَّهِ وَرَسُولِهِۦۚ فَإِذَا ٱسۡتَـٔۡذَنُوكَ لِبَعۡضِ شَأۡنِهِمۡ فَأۡذَن لِّمَن شِئۡتَ مِنۡهُمۡ وَٱسۡتَغۡفِرۡ لَهُمُ ٱللَّهَۚ إِنَّ ٱللَّهَ غَفُورٞ رَّحِيمٞ "}, {"aya_id": 2854, "coordinates": [[221, 47, 146, 34], [256, 47, 322, 34], [290, 47, 322, 34], [324, 112, 258, 34]], "aya_moshaf": "لَّا تَجۡعَلُواْ دُعَآءَ ٱلرَّسُولِ بَيۡنَكُمۡ كَدُعَآءِ بَعۡضِكُم بَعۡضٗاۚ قَدۡ يَعۡلَمُ ٱللَّهُ ٱلَّذِينَ يَتَسَلَّلُونَ مِنكُمۡ لِوَاذٗاۚ فَلۡيَحۡذَرِ ٱلَّذِينَ يُخَالِفُونَ عَنۡ أَمۡرِهِۦٓ أَن تُصِيبَهُمۡ فِتۡنَةٌ أَوۡ يُصِيبَهُمۡ عَذَابٌ أَلِيمٌ "}, {"aya_id": 2855, "coordinates": [[324, 47, 65, 34], [359, 47, 322, 34], [393, 47, 322, 34]], "aya_moshaf": "أَلَآ إِنَّ لِلَّهِ مَا فِي ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۖ قَدۡ يَعۡلَمُ مَآ أَنتُمۡ عَلَيۡهِ وَيَوۡمَ يُرۡجَعُونَ إِلَيۡهِ فَيُنَبِّئُهُم بِمَا عَمِلُواْۗ وَٱللَّهُ بِكُلِّ شَيۡءٍ عَلِيمُۢ "}, {"aya_id": 2856, "coordinates": [[496, 47, 322, 34], [530, 346, 24, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ تَبَارَكَ ٱلَّذِي نَزَّلَ ٱلۡفُرۡقَانَ عَلَىٰ عَبۡدِهِۦ لِيَكُونَ لِلۡعَٰلَمِينَ نَذِيرًا "}, {"aya_id": 2857, "coordinates": [[530, 47, 299, 34], [565, 47, 322, 34]], "aya_moshaf": "ٱلَّذِي لَهُۥ مُلۡكُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَلَمۡ يَتَّخِذۡ وَلَدٗا وَلَمۡ يَكُن لَّهُۥ شَرِيكٞ فِي ٱلۡمُلۡكِ وَخَلَقَ كُلَّ شَيۡءٖ فَقَدَّرَهُۥ تَقۡدِيرٗا "}]