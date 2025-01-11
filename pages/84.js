const mainSuraId = 4;
const nearbySurasNames = {
    3: 'آل عِمران',
    4: 'النِّسَاء',
    5: 'المَائدة',
    6: 'الأنعَام',
};
const choicesObjects = {
    "82": "والمحصنات من النساء الا ما",
    "83": "والله يريد ان يتوب عليكم",
    "85": "والذين ينفقون اموالهم رئاء الناس",
    "86": "والله اعلم باعدائكم وكفي بالله",
};
const ayas = [{"aya_id": 527, "coordinates": [[81, 80, 322, 34], [115, 80, 322, 34], [150, 80, 322, 34], [184, 80, 322, 34], [218, 80, 322, 34], [253, 207, 196, 34]], "aya_moshaf": "ٱلرِّجَالُ قَوَّٰمُونَ عَلَى ٱلنِّسَآءِ بِمَا فَضَّلَ ٱللَّهُ بَعۡضَهُمۡ عَلَىٰ بَعۡضٖ وَبِمَآ أَنفَقُواْ مِنۡ أَمۡوَٰلِهِمۡۚ فَٱلصَّٰلِحَٰتُ قَٰنِتَٰتٌ حَٰفِظَٰتٞ لِّلۡغَيۡبِ بِمَا حَفِظَ ٱللَّهُۚ وَٱلَّٰتِي تَخَافُونَ نُشُوزَهُنَّ فَعِظُوهُنَّ وَٱهۡجُرُوهُنَّ فِي ٱلۡمَضَاجِعِ وَٱضۡرِبُوهُنَّۖ فَإِنۡ أَطَعۡنَكُمۡ فَلَا تَبۡغُواْ عَلَيۡهِنَّ سَبِيلًاۗ إِنَّ ٱللَّهَ كَانَ عَلِيّٗا كَبِيرٗا "}, {"aya_id": 528, "coordinates": [[253, 80, 127, 34], [287, 80, 322, 34], [321, 80, 322, 34], [356, 379, 24, 34]], "aya_moshaf": "وَإِنۡ خِفۡتُمۡ شِقَاقَ بَيۡنِهِمَا فَٱبۡعَثُواْ حَكَمٗا مِّنۡ أَهۡلِهِۦ وَحَكَمٗا مِّنۡ أَهۡلِهَآ إِن يُرِيدَآ إِصۡلَٰحٗا يُوَفِّقِ ٱللَّهُ بَيۡنَهُمَآۗ إِنَّ ٱللَّهَ كَانَ عَلِيمًا خَبِيرٗا "}, {"aya_id": 529, "coordinates": [[356, 80, 299, 34], [390, 80, 322, 34], [424, 80, 322, 34], [459, 80, 322, 34], [493, 242, 161, 34]], "aya_moshaf": "۞ وَٱعۡبُدُواْ ٱللَّهَ وَلَا تُشۡرِكُواْ بِهِۦ شَيۡـٔٗاۖ وَبِٱلۡوَٰلِدَيۡنِ إِحۡسَٰنٗا وَبِذِي ٱلۡقُرۡبَىٰ وَٱلۡيَتَٰمَىٰ وَٱلۡمَسَٰكِينِ وَٱلۡجَارِ ذِي ٱلۡقُرۡبَىٰ وَٱلۡجَارِ ٱلۡجُنُبِ وَٱلصَّاحِبِ بِٱلۡجَنۢبِ وَٱبۡنِ ٱلسَّبِيلِ وَمَا مَلَكَتۡ أَيۡمَٰنُكُمۡۗ إِنَّ ٱللَّهَ لَا يُحِبُّ مَن كَانَ مُخۡتَالٗا فَخُورًا "}, {"aya_id": 530, "coordinates": [[493, 80, 162, 34], [527, 80, 322, 34], [562, 80, 322, 34]], "aya_moshaf": "ٱلَّذِينَ يَبۡخَلُونَ وَيَأۡمُرُونَ ٱلنَّاسَ بِٱلۡبُخۡلِ وَيَكۡتُمُونَ مَآ ءَاتَىٰهُمُ ٱللَّهُ مِن فَضۡلِهِۦۗ وَأَعۡتَدۡنَا لِلۡكَٰفِرِينَ عَذَابٗا مُّهِينٗا "}]