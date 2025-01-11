const mainSuraId = 20;
const nearbySurasNames = {
    19: 'مَريَم',
    20: 'طه',
    21: 'الأنبيَاء',
    22: 'الحج',
};
const choicesObjects = {
    "311": "افرايت الذي كفر باياتنا وقال",
    "312": "ان الذين امنوا وعملوا الصالحات",
    "314": "اذ اوحينا الي امك ما",
    "315": "قال علمها عند ربي في",
};
const ayas = [{"aya_id": 2361, "coordinates": [[75, 189, 183, 34]], "aya_moshaf": "وَأَنَا ٱخۡتَرۡتُكَ فَٱسۡتَمِعۡ لِمَا يُوحَىٰٓ "}, {"aya_id": 2362, "coordinates": [[75, 49, 140, 34], [109, 160, 212, 34]], "aya_moshaf": "إِنَّنِيٓ أَنَا ٱللَّهُ لَآ إِلَٰهَ إِلَّآ أَنَا۠ فَٱعۡبُدۡنِي وَأَقِمِ ٱلصَّلَوٰةَ لِذِكۡرِيٓ "}, {"aya_id": 2363, "coordinates": [[109, 49, 111, 34], [144, 128, 244, 34]], "aya_moshaf": "إِنَّ ٱلسَّاعَةَ ءَاتِيَةٌ أَكَادُ أُخۡفِيهَا لِتُجۡزَىٰ كُلُّ نَفۡسِۭ بِمَا تَسۡعَىٰ "}, {"aya_id": 2364, "coordinates": [[144, 49, 79, 34], [178, 120, 252, 34]], "aya_moshaf": "فَلَا يَصُدَّنَّكَ عَنۡهَا مَن لَّا يُؤۡمِنُ بِهَا وَٱتَّبَعَ هَوَىٰهُ فَتَرۡدَىٰ "}, {"aya_id": 2365, "coordinates": [[178, 49, 71, 34], [212, 239, 133, 34]], "aya_moshaf": "وَمَا تِلۡكَ بِيَمِينِكَ يَٰمُوسَىٰ "}, {"aya_id": 2366, "coordinates": [[212, 49, 190, 34], [247, 108, 264, 34]], "aya_moshaf": "قَالَ هِيَ عَصَايَ أَتَوَكَّؤُاْ عَلَيۡهَا وَأَهُشُّ بِهَا عَلَىٰ غَنَمِي وَلِيَ فِيهَا مَـَٔارِبُ أُخۡرَىٰ "}, {"aya_id": 2367, "coordinates": [[247, 49, 59, 34], [281, 298, 74, 34]], "aya_moshaf": "قَالَ أَلۡقِهَا يَٰمُوسَىٰ "}, {"aya_id": 2368, "coordinates": [[281, 117, 181, 34]], "aya_moshaf": "فَأَلۡقَىٰهَا فَإِذَا هِيَ حَيَّةٞ تَسۡعَىٰ "}, {"aya_id": 2369, "coordinates": [[281, 49, 68, 34], [315, 132, 240, 34]], "aya_moshaf": "قَالَ خُذۡهَا وَلَا تَخَفۡۖ سَنُعِيدُهَا سِيرَتَهَا ٱلۡأُولَىٰ "}, {"aya_id": 2370, "coordinates": [[315, 49, 83, 34], [350, 89, 283, 34]], "aya_moshaf": "وَٱضۡمُمۡ يَدَكَ إِلَىٰ جَنَاحِكَ تَخۡرُجۡ بَيۡضَآءَ مِنۡ غَيۡرِ سُوٓءٍ ءَايَةً أُخۡرَىٰ "}, {"aya_id": 2371, "coordinates": [[350, 49, 40, 34], [384, 248, 124, 34]], "aya_moshaf": "لِنُرِيَكَ مِنۡ ءَايَٰتِنَا ٱلۡكُبۡرَى "}, {"aya_id": 2372, "coordinates": [[384, 87, 161, 34]], "aya_moshaf": "ٱذۡهَبۡ إِلَىٰ فِرۡعَوۡنَ إِنَّهُۥ طَغَىٰ "}, {"aya_id": 2373, "coordinates": [[384, 49, 38, 34], [418, 239, 133, 34]], "aya_moshaf": "قَالَ رَبِّ ٱشۡرَحۡ لِي صَدۡرِي "}, {"aya_id": 2374, "coordinates": [[418, 145, 94, 34]], "aya_moshaf": "وَيَسِّرۡ لِيٓ أَمۡرِي "}, {"aya_id": 2375, "coordinates": [[418, 49, 96, 34], [453, 313, 59, 34]], "aya_moshaf": "وَٱحۡلُلۡ عُقۡدَةٗ مِّن لِّسَانِي "}, {"aya_id": 2376, "coordinates": [[453, 230, 83, 34]], "aya_moshaf": "يَفۡقَهُواْ قَوۡلِي "}, {"aya_id": 2377, "coordinates": [[453, 86, 144, 34]], "aya_moshaf": "وَٱجۡعَل لِّي وَزِيرٗا مِّنۡ أَهۡلِي "}, {"aya_id": 2378, "coordinates": [[453, 49, 37, 34], [487, 313, 59, 34]], "aya_moshaf": "هَٰرُونَ أَخِي "}, {"aya_id": 2379, "coordinates": [[487, 212, 101, 34]], "aya_moshaf": "ٱشۡدُدۡ بِهِۦٓ أَزۡرِي "}, {"aya_id": 2380, "coordinates": [[487, 106, 106, 34]], "aya_moshaf": "وَأَشۡرِكۡهُ فِيٓ أَمۡرِي "}, {"aya_id": 2381, "coordinates": [[487, 49, 57, 34], [521, 318, 54, 34]], "aya_moshaf": "كَيۡ نُسَبِّحَكَ كَثِيرٗا "}, {"aya_id": 2382, "coordinates": [[521, 220, 98, 34]], "aya_moshaf": "وَنَذۡكُرَكَ كَثِيرًا "}, {"aya_id": 2383, "coordinates": [[521, 94, 126, 34]], "aya_moshaf": "إِنَّكَ كُنتَ بِنَا بَصِيرٗا "}, {"aya_id": 2384, "coordinates": [[521, 49, 45, 34], [556, 232, 140, 34]], "aya_moshaf": "قَالَ قَدۡ أُوتِيتَ سُؤۡلَكَ يَٰمُوسَىٰ "}, {"aya_id": 2385, "coordinates": [[556, 49, 183, 34]], "aya_moshaf": "وَلَقَدۡ مَنَنَّا عَلَيۡكَ مَرَّةً أُخۡرَىٰٓ "}]