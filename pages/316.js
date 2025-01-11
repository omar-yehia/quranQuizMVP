const mainSuraId = 20;
const nearbySurasNames = {
    19: 'مَريَم',
    20: 'طه',
    21: 'الأنبيَاء',
    22: 'الحج',
};
const choicesObjects = {
    "314": "اذ اوحينا الي امك ما",
    "315": "قال علمها عند ربي في",
    "317": "ولقد اوحينا الي موسي ان",
    "318": "فاخرج لهم عجلا جسدا له",
};
const ayas = [{"aya_id": 2413, "coordinates": [[83, 128, 287, 34]], "aya_moshaf": "قَالُواْ يَٰمُوسَىٰٓ إِمَّآ أَن تُلۡقِيَ وَإِمَّآ أَن نَّكُونَ أَوَّلَ مَنۡ أَلۡقَىٰ "}, {"aya_id": 2414, "coordinates": [[83, 92, 36, 34], [117, 92, 322, 34], [152, 392, 23, 34]], "aya_moshaf": "قَالَ بَلۡ أَلۡقُواْۖ فَإِذَا حِبَالُهُمۡ وَعِصِيُّهُمۡ يُخَيَّلُ إِلَيۡهِ مِن سِحۡرِهِمۡ أَنَّهَا تَسۡعَىٰ "}, {"aya_id": 2415, "coordinates": [[152, 202, 190, 34]], "aya_moshaf": "فَأَوۡجَسَ فِي نَفۡسِهِۦ خِيفَةٗ مُّوسَىٰ "}, {"aya_id": 2416, "coordinates": [[152, 92, 110, 34], [186, 327, 88, 34]], "aya_moshaf": "قُلۡنَا لَا تَخَفۡ إِنَّكَ أَنتَ ٱلۡأَعۡلَىٰ "}, {"aya_id": 2417, "coordinates": [[186, 92, 235, 34], [220, 200, 215, 34]], "aya_moshaf": "وَأَلۡقِ مَا فِي يَمِينِكَ تَلۡقَفۡ مَا صَنَعُوٓاْۖ إِنَّمَا صَنَعُواْ كَيۡدُ سَٰحِرٖۖ وَلَا يُفۡلِحُ ٱلسَّاحِرُ حَيۡثُ أَتَىٰ "}, {"aya_id": 2418, "coordinates": [[220, 92, 108, 34], [255, 234, 181, 34]], "aya_moshaf": "فَأُلۡقِيَ ٱلسَّحَرَةُ سُجَّدٗا قَالُوٓاْ ءَامَنَّا بِرَبِّ هَٰرُونَ وَمُوسَىٰ "}, {"aya_id": 2419, "coordinates": [[255, 92, 142, 34], [289, 92, 322, 34], [323, 92, 322, 34], [358, 280, 135, 34]], "aya_moshaf": "قَالَ ءَامَنتُمۡ لَهُۥ قَبۡلَ أَنۡ ءَاذَنَ لَكُمۡۖ إِنَّهُۥ لَكَبِيرُكُمُ ٱلَّذِي عَلَّمَكُمُ ٱلسِّحۡرَۖ فَلَأُقَطِّعَنَّ أَيۡدِيَكُمۡ وَأَرۡجُلَكُم مِّنۡ خِلَٰفٖ وَلَأُصَلِّبَنَّكُمۡ فِي جُذُوعِ ٱلنَّخۡلِ وَلَتَعۡلَمُنَّ أَيُّنَآ أَشَدُّ عَذَابٗا وَأَبۡقَىٰ "}, {"aya_id": 2420, "coordinates": [[358, 92, 188, 34], [392, 92, 322, 34], [426, 324, 91, 34]], "aya_moshaf": "قَالُواْ لَن نُّؤۡثِرَكَ عَلَىٰ مَا جَآءَنَا مِنَ ٱلۡبَيِّنَٰتِ وَٱلَّذِي فَطَرَنَاۖ فَٱقۡضِ مَآ أَنتَ قَاضٍۖ إِنَّمَا تَقۡضِي هَٰذِهِ ٱلۡحَيَوٰةَ ٱلدُّنۡيَآ "}, {"aya_id": 2421, "coordinates": [[426, 92, 232, 34], [461, 225, 190, 34]], "aya_moshaf": "إِنَّآ ءَامَنَّا بِرَبِّنَا لِيَغۡفِرَ لَنَا خَطَٰيَٰنَا وَمَآ أَكۡرَهۡتَنَا عَلَيۡهِ مِنَ ٱلسِّحۡرِۗ وَٱللَّهُ خَيۡرٞ وَأَبۡقَىٰٓ "}, {"aya_id": 2422, "coordinates": [[461, 92, 133, 34], [495, 208, 207, 34]], "aya_moshaf": "إِنَّهُۥ مَن يَأۡتِ رَبَّهُۥ مُجۡرِمٗا فَإِنَّ لَهُۥ جَهَنَّمَ لَا يَمُوتُ فِيهَا وَلَا يَحۡيَىٰ "}, {"aya_id": 2423, "coordinates": [[495, 92, 116, 34], [529, 154, 261, 34]], "aya_moshaf": "وَمَن يَأۡتِهِۦ مُؤۡمِنٗا قَدۡ عَمِلَ ٱلصَّٰلِحَٰتِ فَأُوْلَٰٓئِكَ لَهُمُ ٱلدَّرَجَٰتُ ٱلۡعُلَىٰ "}, {"aya_id": 2424, "coordinates": [[529, 92, 62, 34], [564, 92, 322, 34]], "aya_moshaf": "جَنَّٰتُ عَدۡنٖ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُ خَٰلِدِينَ فِيهَاۚ وَذَٰلِكَ جَزَآءُ مَن تَزَكَّىٰ "}]