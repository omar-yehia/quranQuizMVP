const nearbySurasNames = {
    32: 'السَّجدة',
    33: 'الأحزَاب',
    34: 'سَبإ',
    35: 'فَاطِر',
};
const choicesObjects = {
    "424": "تحيتهم يوم يلقونه سلام واعد",
    "425": "ترجي من تشاء منهن وتؤوي",
    "427": "يسالك الناس عن الساعه قل",
    "428": "الحمد لله الذي له ما",
};
const ayas = [{"aya_id": 3588, "coordinates": [[80, 92, 322, 34], [114, 92, 322, 34], [149, 92, 322, 34], [183, 391, 24, 34]], "aya_moshaf": "لَّا جُنَاحَ عَلَيۡهِنَّ فِيٓ ءَابَآئِهِنَّ وَلَآ أَبۡنَآئِهِنَّ وَلَآ إِخۡوَٰنِهِنَّ وَلَآ أَبۡنَآءِ إِخۡوَٰنِهِنَّ وَلَآ أَبۡنَآءِ أَخَوَٰتِهِنَّ وَلَا نِسَآئِهِنَّ وَلَا مَا مَلَكَتۡ أَيۡمَٰنُهُنَّۗ وَٱتَّقِينَ ٱللَّهَۚ إِنَّ ٱللَّهَ كَانَ عَلَىٰ كُلِّ شَيۡءٖ شَهِيدًا "}, {"aya_id": 3589, "coordinates": [[183, 92, 299, 34], [217, 188, 227, 34]], "aya_moshaf": "إِنَّ ٱللَّهَ وَمَلَٰٓئِكَتَهُۥ يُصَلُّونَ عَلَى ٱلنَّبِيِّۚ يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ صَلُّواْ عَلَيۡهِ وَسَلِّمُواْ تَسۡلِيمًا "}, {"aya_id": 3590, "coordinates": [[217, 92, 96, 34], [252, 92, 322, 34], [286, 351, 64, 34]], "aya_moshaf": "إِنَّ ٱلَّذِينَ يُؤۡذُونَ ٱللَّهَ وَرَسُولَهُۥ لَعَنَهُمُ ٱللَّهُ فِي ٱلدُّنۡيَا وَٱلۡأٓخِرَةِ وَأَعَدَّ لَهُمۡ عَذَابٗا مُّهِينٗا "}, {"aya_id": 3591, "coordinates": [[286, 92, 259, 34], [320, 92, 322, 34]], "aya_moshaf": "وَٱلَّذِينَ يُؤۡذُونَ ٱلۡمُؤۡمِنِينَ وَٱلۡمُؤۡمِنَٰتِ بِغَيۡرِ مَا ٱكۡتَسَبُواْ فَقَدِ ٱحۡتَمَلُواْ بُهۡتَٰنٗا وَإِثۡمٗا مُّبِينٗا "}, {"aya_id": 3592, "coordinates": [[355, 92, 322, 34], [389, 92, 322, 34], [423, 277, 138, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلنَّبِيُّ قُل لِّأَزۡوَٰجِكَ وَبَنَاتِكَ وَنِسَآءِ ٱلۡمُؤۡمِنِينَ يُدۡنِينَ عَلَيۡهِنَّ مِن جَلَٰبِيبِهِنَّۚ ذَٰلِكَ أَدۡنَىٰٓ أَن يُعۡرَفۡنَ فَلَا يُؤۡذَيۡنَۗ وَكَانَ ٱللَّهُ غَفُورٗا رَّحِيمٗا "}, {"aya_id": 3593, "coordinates": [[423, 92, 185, 34], [458, 92, 322, 34], [492, 168, 247, 34]], "aya_moshaf": "۞ لَّئِن لَّمۡ يَنتَهِ ٱلۡمُنَٰفِقُونَ وَٱلَّذِينَ فِي قُلُوبِهِم مَّرَضٞ وَٱلۡمُرۡجِفُونَ فِي ٱلۡمَدِينَةِ لَنُغۡرِيَنَّكَ بِهِمۡ ثُمَّ لَا يُجَاوِرُونَكَ فِيهَآ إِلَّا قَلِيلٗا "}, {"aya_id": 3594, "coordinates": [[492, 92, 76, 34], [526, 189, 226, 34]], "aya_moshaf": "مَّلۡعُونِينَۖ أَيۡنَمَا ثُقِفُوٓاْ أُخِذُواْ وَقُتِّلُواْ تَقۡتِيلٗا "}, {"aya_id": 3595, "coordinates": [[526, 92, 97, 34], [561, 92, 322, 34]], "aya_moshaf": "سُنَّةَ ٱللَّهِ فِي ٱلَّذِينَ خَلَوۡاْ مِن قَبۡلُۖ وَلَن تَجِدَ لِسُنَّةِ ٱللَّهِ تَبۡدِيلٗا "}]
const ayasRanges = [{"ayas_ids_range": [3588, 3595], "sura_id": 33}];
