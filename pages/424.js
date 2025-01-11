const mainSuraId = 33;
const nearbySurasNames = {
    32: 'السَّجدة',
    33: 'الأحزَاب',
    34: 'سَبإ',
    35: 'فَاطِر',
};
const choicesObjects = {
    "422": "ومن يقنت منكن لله ورسوله",
    "423": "وما كان لمؤمن ولا مؤمنه",
    "425": "ترجي من تشاء منهن وتؤوي",
    "426": "لا جناح عليهن في ابائهن",
};
const ayas = [{"aya_id": 3577, "coordinates": [[80, 139, 276, 34]], "aya_moshaf": "تَحِيَّتُهُمۡ يَوۡمَ يَلۡقَوۡنَهُۥ سَلَٰمٞۚ وَأَعَدَّ لَهُمۡ أَجۡرٗا كَرِيمٗا "}, {"aya_id": 3578, "coordinates": [[80, 92, 47, 34], [114, 144, 271, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلنَّبِيُّ إِنَّآ أَرۡسَلۡنَٰكَ شَٰهِدٗا وَمُبَشِّرٗا وَنَذِيرٗا "}, {"aya_id": 3579, "coordinates": [[114, 92, 52, 34], [149, 233, 182, 34]], "aya_moshaf": "وَدَاعِيًا إِلَى ٱللَّهِ بِإِذۡنِهِۦ وَسِرَاجٗا مُّنِيرٗا "}, {"aya_id": 3580, "coordinates": [[149, 92, 141, 34], [183, 282, 133, 34]], "aya_moshaf": "وَبَشِّرِ ٱلۡمُؤۡمِنِينَ بِأَنَّ لَهُم مِّنَ ٱللَّهِ فَضۡلٗا كَبِيرٗا "}, {"aya_id": 3581, "coordinates": [[183, 92, 190, 34], [217, 92, 322, 34]], "aya_moshaf": "وَلَا تُطِعِ ٱلۡكَٰفِرِينَ وَٱلۡمُنَٰفِقِينَ وَدَعۡ أَذَىٰهُمۡ وَتَوَكَّلۡ عَلَى ٱللَّهِۚ وَكَفَىٰ بِٱللَّهِ وَكِيلٗا "}, {"aya_id": 3582, "coordinates": [[252, 92, 322, 34], [286, 92, 322, 34], [320, 192, 223, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓاْ إِذَا نَكَحۡتُمُ ٱلۡمُؤۡمِنَٰتِ ثُمَّ طَلَّقۡتُمُوهُنَّ مِن قَبۡلِ أَن تَمَسُّوهُنَّ فَمَا لَكُمۡ عَلَيۡهِنَّ مِنۡ عِدَّةٖ تَعۡتَدُّونَهَاۖ فَمَتِّعُوهُنَّ وَسَرِّحُوهُنَّ سَرَاحٗا جَمِيلٗا "}, {"aya_id": 3583, "coordinates": [[320, 92, 100, 34], [355, 92, 322, 34], [389, 92, 322, 34], [423, 92, 322, 34], [458, 92, 322, 34], [492, 92, 322, 34], [526, 92, 322, 34], [561, 92, 322, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلنَّبِيُّ إِنَّآ أَحۡلَلۡنَا لَكَ أَزۡوَٰجَكَ ٱلَّٰتِيٓ ءَاتَيۡتَ أُجُورَهُنَّ وَمَا مَلَكَتۡ يَمِينُكَ مِمَّآ أَفَآءَ ٱللَّهُ عَلَيۡكَ وَبَنَاتِ عَمِّكَ وَبَنَاتِ عَمَّٰتِكَ وَبَنَاتِ خَالِكَ وَبَنَاتِ خَٰلَٰتِكَ ٱلَّٰتِي هَاجَرۡنَ مَعَكَ وَٱمۡرَأَةٗ مُّؤۡمِنَةً إِن وَهَبَتۡ نَفۡسَهَا لِلنَّبِيِّ إِنۡ أَرَادَ ٱلنَّبِيُّ أَن يَسۡتَنكِحَهَا خَالِصَةٗ لَّكَ مِن دُونِ ٱلۡمُؤۡمِنِينَۗ قَدۡ عَلِمۡنَا مَا فَرَضۡنَا عَلَيۡهِمۡ فِيٓ أَزۡوَٰجِهِمۡ وَمَا مَلَكَتۡ أَيۡمَٰنُهُمۡ لِكَيۡلَا يَكُونَ عَلَيۡكَ حَرَجٞۗ وَكَانَ ٱللَّهُ غَفُورٗا رَّحِيمٗا "}]