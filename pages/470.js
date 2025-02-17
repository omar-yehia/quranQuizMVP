const nearbySurasNames = {
    39: 'الزُّمَر',
    40: 'غَافِر',
    41: 'فُصِّلَت',
    42: 'الشُّوري',
};
const choicesObjects = {
    "468": "ربنا وادخلهم جنات عدن التي",
    "469": "اليوم تجزي كل نفس بما",
    "471": "ولقد جاءكم يوسف من قبل",
    "472": "وياقوم ما لي ادعوكم الي",
};
const ayas = [{"aya_id": 4159, "coordinates": [[83, 90, 322, 34], [117, 90, 322, 34]], "aya_moshaf": "وَقَالَ فِرۡعَوۡنُ ذَرُونِيٓ أَقۡتُلۡ مُوسَىٰ وَلۡيَدۡعُ رَبَّهُۥٓۖ إِنِّيٓ أَخَافُ أَن يُبَدِّلَ دِينَكُمۡ أَوۡ أَن يُظۡهِرَ فِي ٱلۡأَرۡضِ ٱلۡفَسَادَ "}, {"aya_id": 4160, "coordinates": [[152, 90, 322, 34], [186, 247, 166, 34]], "aya_moshaf": "وَقَالَ مُوسَىٰٓ إِنِّي عُذۡتُ بِرَبِّي وَرَبِّكُم مِّن كُلِّ مُتَكَبِّرٖ لَّا يُؤۡمِنُ بِيَوۡمِ ٱلۡحِسَابِ "}, {"aya_id": 4161, "coordinates": [[186, 90, 157, 34], [220, 90, 322, 34], [255, 90, 322, 34], [289, 90, 322, 34], [323, 132, 281, 34]], "aya_moshaf": "وَقَالَ رَجُلٞ مُّؤۡمِنٞ مِّنۡ ءَالِ فِرۡعَوۡنَ يَكۡتُمُ إِيمَٰنَهُۥٓ أَتَقۡتُلُونَ رَجُلًا أَن يَقُولَ رَبِّيَ ٱللَّهُ وَقَدۡ جَآءَكُم بِٱلۡبَيِّنَٰتِ مِن رَّبِّكُمۡۖ وَإِن يَكُ كَٰذِبٗا فَعَلَيۡهِ كَذِبُهُۥۖ وَإِن يَكُ صَادِقٗا يُصِبۡكُم بَعۡضُ ٱلَّذِي يَعِدُكُمۡۖ إِنَّ ٱللَّهَ لَا يَهۡدِي مَنۡ هُوَ مُسۡرِفٞ كَذَّابٞ "}, {"aya_id": 4162, "coordinates": [[323, 90, 42, 34], [358, 90, 322, 34], [392, 90, 322, 34], [426, 244, 169, 34]], "aya_moshaf": "يَٰقَوۡمِ لَكُمُ ٱلۡمُلۡكُ ٱلۡيَوۡمَ ظَٰهِرِينَ فِي ٱلۡأَرۡضِ فَمَن يَنصُرُنَا مِنۢ بَأۡسِ ٱللَّهِ إِن جَآءَنَاۚ قَالَ فِرۡعَوۡنُ مَآ أُرِيكُمۡ إِلَّا مَآ أَرَىٰ وَمَآ أَهۡدِيكُمۡ إِلَّا سَبِيلَ ٱلرَّشَادِ "}, {"aya_id": 4163, "coordinates": [[426, 90, 154, 34], [461, 191, 222, 34]], "aya_moshaf": "وَقَالَ ٱلَّذِيٓ ءَامَنَ يَٰقَوۡمِ إِنِّيٓ أَخَافُ عَلَيۡكُم مِّثۡلَ يَوۡمِ ٱلۡأَحۡزَابِ "}, {"aya_id": 4164, "coordinates": [[461, 90, 101, 34], [495, 90, 322, 34]], "aya_moshaf": "مِثۡلَ دَأۡبِ قَوۡمِ نُوحٖ وَعَادٖ وَثَمُودَ وَٱلَّذِينَ مِنۢ بَعۡدِهِمۡۚ وَمَا ٱللَّهُ يُرِيدُ ظُلۡمٗا لِّلۡعِبَادِ "}, {"aya_id": 4165, "coordinates": [[529, 189, 224, 34]], "aya_moshaf": "وَيَٰقَوۡمِ إِنِّيٓ أَخَافُ عَلَيۡكُمۡ يَوۡمَ ٱلتَّنَادِ "}, {"aya_id": 4166, "coordinates": [[529, 90, 99, 34], [564, 90, 322, 34]], "aya_moshaf": "يَوۡمَ تُوَلُّونَ مُدۡبِرِينَ مَا لَكُم مِّنَ ٱللَّهِ مِنۡ عَاصِمٖۗ وَمَن يُضۡلِلِ ٱللَّهُ فَمَا لَهُۥ مِنۡ هَادٖ "}]
const ayasRanges = [{"ayas_ids_range": [4159, 4166], "sura_id": 40}];
