const mainSuraId = 19;
const nearbySurasNames = {
    18: 'الكَهف',
    19: 'مَريَم',
    20: 'طه',
    21: 'الأنبيَاء',
};
const choicesObjects = {
    "308": "وانذرهم يوم الحسره اذ قضي",
    "309": "وناديناه من جانب الطور الايمن",
    "311": "افرايت الذي كفر باياتنا وقال",
    "312": "ان الذين امنوا وعملوا الصالحات",
};
const ayas = [{"aya_id": 2315, "coordinates": [[80, 92, 322, 34], [114, 284, 131, 34]], "aya_moshaf": "رَّبُّ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَمَا بَيۡنَهُمَا فَٱعۡبُدۡهُ وَٱصۡطَبِرۡ لِعِبَٰدَتِهِۦۚ هَلۡ تَعۡلَمُ لَهُۥ سَمِيّٗا "}, {"aya_id": 2316, "coordinates": [[114, 92, 192, 34], [149, 329, 86, 34]], "aya_moshaf": "وَيَقُولُ ٱلۡإِنسَٰنُ أَءِذَا مَا مِتُّ لَسَوۡفَ أُخۡرَجُ حَيًّا "}, {"aya_id": 2317, "coordinates": [[149, 92, 237, 34], [183, 314, 101, 34]], "aya_moshaf": "أَوَلَا يَذۡكُرُ ٱلۡإِنسَٰنُ أَنَّا خَلَقۡنَٰهُ مِن قَبۡلُ وَلَمۡ يَكُ شَيۡـٔٗا "}, {"aya_id": 2318, "coordinates": [[183, 92, 222, 34], [217, 214, 201, 34]], "aya_moshaf": "فَوَرَبِّكَ لَنَحۡشُرَنَّهُمۡ وَٱلشَّيَٰطِينَ ثُمَّ لَنُحۡضِرَنَّهُمۡ حَوۡلَ جَهَنَّمَ جِثِيّٗا "}, {"aya_id": 2319, "coordinates": [[217, 92, 122, 34], [252, 210, 205, 34]], "aya_moshaf": "ثُمَّ لَنَنزِعَنَّ مِن كُلِّ شِيعَةٍ أَيُّهُمۡ أَشَدُّ عَلَى ٱلرَّحۡمَٰنِ عِتِيّٗا "}, {"aya_id": 2320, "coordinates": [[252, 92, 118, 34], [286, 301, 114, 34]], "aya_moshaf": "ثُمَّ لَنَحۡنُ أَعۡلَمُ بِٱلَّذِينَ هُمۡ أَوۡلَىٰ بِهَا صِلِيّٗا "}, {"aya_id": 2321, "coordinates": [[286, 92, 209, 34], [320, 316, 99, 34]], "aya_moshaf": "وَإِن مِّنكُمۡ إِلَّا وَارِدُهَاۚ كَانَ عَلَىٰ رَبِّكَ حَتۡمٗا مَّقۡضِيّٗا "}, {"aya_id": 2322, "coordinates": [[320, 92, 224, 34], [355, 341, 74, 34]], "aya_moshaf": "ثُمَّ نُنَجِّي ٱلَّذِينَ ٱتَّقَواْ وَّنَذَرُ ٱلظَّٰلِمِينَ فِيهَا جِثِيّٗا "}, {"aya_id": 2323, "coordinates": [[355, 92, 249, 34], [389, 114, 301, 34]], "aya_moshaf": "وَإِذَا تُتۡلَىٰ عَلَيۡهِمۡ ءَايَٰتُنَا بَيِّنَٰتٖ قَالَ ٱلَّذِينَ كَفَرُواْ لِلَّذِينَ ءَامَنُوٓاْ أَيُّ ٱلۡفَرِيقَيۡنِ خَيۡرٞ مَّقَامٗا وَأَحۡسَنُ نَدِيّٗا "}, {"aya_id": 2324, "coordinates": [[389, 92, 22, 34], [423, 136, 279, 34]], "aya_moshaf": "وَكَمۡ أَهۡلَكۡنَا قَبۡلَهُم مِّن قَرۡنٍ هُمۡ أَحۡسَنُ أَثَٰثٗا وَرِءۡيٗا "}, {"aya_id": 2325, "coordinates": [[423, 92, 44, 34], [458, 92, 322, 34], [492, 92, 322, 34], [526, 298, 117, 34]], "aya_moshaf": "قُلۡ مَن كَانَ فِي ٱلضَّلَٰلَةِ فَلۡيَمۡدُدۡ لَهُ ٱلرَّحۡمَٰنُ مَدًّاۚ حَتَّىٰٓ إِذَا رَأَوۡاْ مَا يُوعَدُونَ إِمَّا ٱلۡعَذَابَ وَإِمَّا ٱلسَّاعَةَ فَسَيَعۡلَمُونَ مَنۡ هُوَ شَرّٞ مَّكَانٗا وَأَضۡعَفُ جُندٗا "}, {"aya_id": 2326, "coordinates": [[526, 92, 206, 34], [561, 92, 322, 34]], "aya_moshaf": "وَيَزِيدُ ٱللَّهُ ٱلَّذِينَ ٱهۡتَدَوۡاْ هُدٗىۗ وَٱلۡبَٰقِيَٰتُ ٱلصَّٰلِحَٰتُ خَيۡرٌ عِندَ رَبِّكَ ثَوَابٗا وَخَيۡرٞ مَّرَدًّا "}]