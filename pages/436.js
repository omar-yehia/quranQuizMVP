const mainSuraId = 35;
const nearbySurasNames = {
    34: 'سَبإ',
    35: 'فَاطِر',
    36: 'يسٓ',
    37: 'الصَّافَات',
};
const choicesObjects = {
    "434": "قل جاء الحق وما يبدئ",
    "435": "وان يكذبوك فقد كذبت رسل",
    "437": "وما يستوي الاعمي والبصير",
    "438": "والذي اوحينا اليك من الكتاب",
};
const ayas = [{"aya_id": 3672, "coordinates": [[81, 85, 322, 34], [115, 85, 322, 34], [150, 85, 322, 34], [184, 253, 155, 34]], "aya_moshaf": "وَمَا يَسۡتَوِي ٱلۡبَحۡرَانِ هَٰذَا عَذۡبٞ فُرَاتٞ سَآئِغٞ شَرَابُهُۥ وَهَٰذَا مِلۡحٌ أُجَاجٞۖ وَمِن كُلّٖ تَأۡكُلُونَ لَحۡمٗا طَرِيّٗا وَتَسۡتَخۡرِجُونَ حِلۡيَةٗ تَلۡبَسُونَهَاۖ وَتَرَى ٱلۡفُلۡكَ فِيهِ مَوَاخِرَ لِتَبۡتَغُواْ مِن فَضۡلِهِۦ وَلَعَلَّكُمۡ تَشۡكُرُونَ "}, {"aya_id": 3673, "coordinates": [[184, 85, 168, 34], [218, 85, 322, 34], [253, 85, 322, 34], [287, 108, 300, 34]], "aya_moshaf": "يُولِجُ ٱلَّيۡلَ فِي ٱلنَّهَارِ وَيُولِجُ ٱلنَّهَارَ فِي ٱلَّيۡلِ وَسَخَّرَ ٱلشَّمۡسَ وَٱلۡقَمَرَۖ كُلّٞ يَجۡرِي لِأَجَلٖ مُّسَمّٗىۚ ذَٰلِكُمُ ٱللَّهُ رَبُّكُمۡ لَهُ ٱلۡمُلۡكُۚ وَٱلَّذِينَ تَدۡعُونَ مِن دُونِهِۦ مَا يَمۡلِكُونَ مِن قِطۡمِيرٍ "}, {"aya_id": 3674, "coordinates": [[287, 85, 23, 34], [321, 85, 322, 34], [356, 85, 322, 34], [390, 381, 27, 34]], "aya_moshaf": "إِن تَدۡعُوهُمۡ لَا يَسۡمَعُواْ دُعَآءَكُمۡ وَلَوۡ سَمِعُواْ مَا ٱسۡتَجَابُواْ لَكُمۡۖ وَيَوۡمَ ٱلۡقِيَٰمَةِ يَكۡفُرُونَ بِشِرۡكِكُمۡۚ وَلَا يُنَبِّئُكَ مِثۡلُ خَبِيرٖ "}, {"aya_id": 3675, "coordinates": [[390, 85, 296, 34], [424, 325, 83, 34]], "aya_moshaf": "۞ يَٰٓأَيُّهَا ٱلنَّاسُ أَنتُمُ ٱلۡفُقَرَآءُ إِلَى ٱللَّهِۖ وَٱللَّهُ هُوَ ٱلۡغَنِيُّ ٱلۡحَمِيدُ "}, {"aya_id": 3676, "coordinates": [[424, 85, 240, 34]], "aya_moshaf": "إِن يَشَأۡ يُذۡهِبۡكُمۡ وَيَأۡتِ بِخَلۡقٖ جَدِيدٖ "}, {"aya_id": 3677, "coordinates": [[459, 248, 160, 34]], "aya_moshaf": "وَمَا ذَٰلِكَ عَلَى ٱللَّهِ بِعَزِيزٖ "}, {"aya_id": 3678, "coordinates": [[459, 85, 163, 34], [493, 85, 322, 34], [527, 85, 322, 34], [562, 85, 322, 34]], "aya_moshaf": "وَلَا تَزِرُ وَازِرَةٞ وِزۡرَ أُخۡرَىٰۚ وَإِن تَدۡعُ مُثۡقَلَةٌ إِلَىٰ حِمۡلِهَا لَا يُحۡمَلۡ مِنۡهُ شَيۡءٞ وَلَوۡ كَانَ ذَا قُرۡبَىٰٓۗ إِنَّمَا تُنذِرُ ٱلَّذِينَ يَخۡشَوۡنَ رَبَّهُم بِٱلۡغَيۡبِ وَأَقَامُواْ ٱلصَّلَوٰةَۚ وَمَن تَزَكَّىٰ فَإِنَّمَا يَتَزَكَّىٰ لِنَفۡسِهِۦۚ وَإِلَى ٱللَّهِ ٱلۡمَصِيرُ "}]