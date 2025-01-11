const nearbySurasNames = {
    1: 'الفَاتِحة',
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
};
const choicesObjects = {
    "16": "واتبعوا ما تتلوا الشياطين علي",
    "17": "ما ننسخ من ايه او",
    "19": "ولن ترضي عنك اليهود ولا",
    "20": "واذ يرفع ابراهيم القواعد من",
};
const ayas = [{"aya_id": 120, "coordinates": [[80, 86, 322, 34], [114, 86, 322, 34], [149, 86, 322, 34], [183, 248, 161, 34]], "aya_moshaf": "وَقَالَتِ ٱلۡيَهُودُ لَيۡسَتِ ٱلنَّصَٰرَىٰ عَلَىٰ شَيۡءٖ وَقَالَتِ ٱلنَّصَٰرَىٰ لَيۡسَتِ ٱلۡيَهُودُ عَلَىٰ شَيۡءٖ وَهُمۡ يَتۡلُونَ ٱلۡكِتَٰبَۗ كَذَٰلِكَ قَالَ ٱلَّذِينَ لَا يَعۡلَمُونَ مِثۡلَ قَوۡلِهِمۡۚ فَٱللَّهُ يَحۡكُمُ بَيۡنَهُمۡ يَوۡمَ ٱلۡقِيَٰمَةِ فِيمَا كَانُواْ فِيهِ يَخۡتَلِفُونَ "}, {"aya_id": 121, "coordinates": [[183, 86, 162, 34], [217, 86, 322, 34], [252, 86, 322, 34], [286, 201, 208, 34]], "aya_moshaf": "وَمَنۡ أَظۡلَمُ مِمَّن مَّنَعَ مَسَٰجِدَ ٱللَّهِ أَن يُذۡكَرَ فِيهَا ٱسۡمُهُۥ وَسَعَىٰ فِي خَرَابِهَآۚ أُوْلَٰٓئِكَ مَا كَانَ لَهُمۡ أَن يَدۡخُلُوهَآ إِلَّا خَآئِفِينَۚ لَهُمۡ فِي ٱلدُّنۡيَا خِزۡيٞ وَلَهُمۡ فِي ٱلۡأٓخِرَةِ عَذَابٌ عَظِيمٞ "}, {"aya_id": 122, "coordinates": [[286, 86, 115, 34], [320, 86, 322, 34]], "aya_moshaf": "وَلِلَّهِ ٱلۡمَشۡرِقُ وَٱلۡمَغۡرِبُۚ فَأَيۡنَمَا تُوَلُّواْ فَثَمَّ وَجۡهُ ٱللَّهِۚ إِنَّ ٱللَّهَ وَٰسِعٌ عَلِيمٞ "}, {"aya_id": 123, "coordinates": [[355, 86, 322, 34], [389, 249, 160, 34]], "aya_moshaf": "وَقَالُواْ ٱتَّخَذَ ٱللَّهُ وَلَدٗاۗ سُبۡحَٰنَهُۥۖ بَل لَّهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۖ كُلّٞ لَّهُۥ قَٰنِتُونَ "}, {"aya_id": 124, "coordinates": [[389, 86, 163, 34], [423, 157, 252, 34]], "aya_moshaf": "بَدِيعُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۖ وَإِذَا قَضَىٰٓ أَمۡرٗا فَإِنَّمَا يَقُولُ لَهُۥ كُن فَيَكُونُ "}, {"aya_id": 125, "coordinates": [[423, 86, 71, 34], [458, 86, 322, 34], [492, 86, 322, 34], [526, 178, 231, 34]], "aya_moshaf": "وَقَالَ ٱلَّذِينَ لَا يَعۡلَمُونَ لَوۡلَا يُكَلِّمُنَا ٱللَّهُ أَوۡ تَأۡتِينَآ ءَايَةٞۗ كَذَٰلِكَ قَالَ ٱلَّذِينَ مِن قَبۡلِهِم مِّثۡلَ قَوۡلِهِمۡۘ تَشَٰبَهَتۡ قُلُوبُهُمۡۗ قَدۡ بَيَّنَّا ٱلۡأٓيَٰتِ لِقَوۡمٖ يُوقِنُونَ "}, {"aya_id": 126, "coordinates": [[526, 86, 92, 34], [561, 86, 322, 34]], "aya_moshaf": "إِنَّآ أَرۡسَلۡنَٰكَ بِٱلۡحَقِّ بَشِيرٗا وَنَذِيرٗاۖ وَلَا تُسۡـَٔلُ عَنۡ أَصۡحَٰبِ ٱلۡجَحِيمِ "}]
const ayasRanges = [{"ayas_ids_range": [120, 126], "sura_id": 2}];
