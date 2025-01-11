const nearbySurasNames = {
    38: 'صٓ',
    39: 'الزُّمَر',
    40: 'غَافِر',
    41: 'فُصِّلَت',
};
const choicesObjects = {
    "462": "فمن اظلم ممن كذب علي",
    "463": "انا انزلنا عليك الكتاب للناس",
    "465": "او تقول لو ان الله",
    "466": "ونفخ في الصور فصعق من",
};
const ayas = [{"aya_id": 4106, "coordinates": [[80, 92, 322, 34], [114, 321, 94, 34]], "aya_moshaf": "وَبَدَا لَهُمۡ سَيِّـَٔاتُ مَا كَسَبُواْ وَحَاقَ بِهِم مَّا كَانُواْ بِهِۦ يَسۡتَهۡزِءُونَ "}, {"aya_id": 4107, "coordinates": [[114, 92, 229, 34], [149, 92, 322, 34], [183, 290, 125, 34]], "aya_moshaf": "فَإِذَا مَسَّ ٱلۡإِنسَٰنَ ضُرّٞ دَعَانَا ثُمَّ إِذَا خَوَّلۡنَٰهُ نِعۡمَةٗ مِّنَّا قَالَ إِنَّمَآ أُوتِيتُهُۥ عَلَىٰ عِلۡمِۭۚ بَلۡ هِيَ فِتۡنَةٞ وَلَٰكِنَّ أَكۡثَرَهُمۡ لَا يَعۡلَمُونَ "}, {"aya_id": 4108, "coordinates": [[183, 92, 198, 34], [217, 257, 158, 34]], "aya_moshaf": "قَدۡ قَالَهَا ٱلَّذِينَ مِن قَبۡلِهِمۡ فَمَآ أَغۡنَىٰ عَنۡهُم مَّا كَانُواْ يَكۡسِبُونَ "}, {"aya_id": 4109, "coordinates": [[217, 92, 165, 34], [252, 92, 322, 34], [286, 283, 132, 34]], "aya_moshaf": "فَأَصَابَهُمۡ سَيِّـَٔاتُ مَا كَسَبُواْۚ وَٱلَّذِينَ ظَلَمُواْ مِنۡ هَٰٓؤُلَآءِ سَيُصِيبُهُمۡ سَيِّـَٔاتُ مَا كَسَبُواْ وَمَا هُم بِمُعۡجِزِينَ "}, {"aya_id": 4110, "coordinates": [[286, 92, 191, 34], [320, 92, 322, 34]], "aya_moshaf": "أَوَلَمۡ يَعۡلَمُوٓاْ أَنَّ ٱللَّهَ يَبۡسُطُ ٱلرِّزۡقَ لِمَن يَشَآءُ وَيَقۡدِرُۚ إِنَّ فِي ذَٰلِكَ لَأٓيَٰتٖ لِّقَوۡمٖ يُؤۡمِنُونَ "}, {"aya_id": 4111, "coordinates": [[355, 92, 322, 34], [389, 92, 322, 34], [423, 390, 25, 34]], "aya_moshaf": "۞ قُلۡ يَٰعِبَادِيَ ٱلَّذِينَ أَسۡرَفُواْ عَلَىٰٓ أَنفُسِهِمۡ لَا تَقۡنَطُواْ مِن رَّحۡمَةِ ٱللَّهِۚ إِنَّ ٱللَّهَ يَغۡفِرُ ٱلذُّنُوبَ جَمِيعًاۚ إِنَّهُۥ هُوَ ٱلۡغَفُورُ ٱلرَّحِيمُ "}, {"aya_id": 4112, "coordinates": [[423, 92, 298, 34], [458, 235, 180, 34]], "aya_moshaf": "وَأَنِيبُوٓاْ إِلَىٰ رَبِّكُمۡ وَأَسۡلِمُواْ لَهُۥ مِن قَبۡلِ أَن يَأۡتِيَكُمُ ٱلۡعَذَابُ ثُمَّ لَا تُنصَرُونَ "}, {"aya_id": 4113, "coordinates": [[458, 92, 143, 34], [492, 92, 322, 34], [526, 231, 184, 34]], "aya_moshaf": "وَٱتَّبِعُوٓاْ أَحۡسَنَ مَآ أُنزِلَ إِلَيۡكُم مِّن رَّبِّكُم مِّن قَبۡلِ أَن يَأۡتِيَكُمُ ٱلۡعَذَابُ بَغۡتَةٗ وَأَنتُمۡ لَا تَشۡعُرُونَ "}, {"aya_id": 4114, "coordinates": [[526, 92, 139, 34], [561, 92, 322, 34]], "aya_moshaf": "أَن تَقُولَ نَفۡسٞ يَٰحَسۡرَتَىٰ عَلَىٰ مَا فَرَّطتُ فِي جَنۢبِ ٱللَّهِ وَإِن كُنتُ لَمِنَ ٱلسَّٰخِرِينَ "}]
const ayasRanges = [{"ayas_ids_range": [4106, 4114], "sura_id": 39}];
