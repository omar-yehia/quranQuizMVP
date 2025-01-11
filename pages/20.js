const mainSuraId = 2;
const nearbySurasNames = {
    1: 'الفَاتِحة',
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
};
const choicesObjects = {
    "18": "وقالت اليهود ليست النصاري علي",
    "19": "ولن ترضي عنك اليهود ولا",
    "21": "وقالوا كونوا هودا او نصاري",
    "22": "سيقول السفهاء من الناس ما",
};
const ayas = [{"aya_id": 134, "coordinates": [[81, 84, 322, 34], [115, 219, 188, 34]], "aya_moshaf": "وَإِذۡ يَرۡفَعُ إِبۡرَٰهِـۧمُ ٱلۡقَوَاعِدَ مِنَ ٱلۡبَيۡتِ وَإِسۡمَٰعِيلُ رَبَّنَا تَقَبَّلۡ مِنَّآۖ إِنَّكَ أَنتَ ٱلسَّمِيعُ ٱلۡعَلِيمُ "}, {"aya_id": 135, "coordinates": [[115, 84, 135, 34], [150, 84, 322, 34], [184, 233, 174, 34]], "aya_moshaf": "رَبَّنَا وَٱجۡعَلۡنَا مُسۡلِمَيۡنِ لَكَ وَمِن ذُرِّيَّتِنَآ أُمَّةٗ مُّسۡلِمَةٗ لَّكَ وَأَرِنَا مَنَاسِكَنَا وَتُبۡ عَلَيۡنَآۖ إِنَّكَ أَنتَ ٱلتَّوَّابُ ٱلرَّحِيمُ "}, {"aya_id": 136, "coordinates": [[184, 84, 149, 34], [218, 84, 322, 34], [253, 192, 215, 34]], "aya_moshaf": "رَبَّنَا وَٱبۡعَثۡ فِيهِمۡ رَسُولٗا مِّنۡهُمۡ يَتۡلُواْ عَلَيۡهِمۡ ءَايَٰتِكَ وَيُعَلِّمُهُمُ ٱلۡكِتَٰبَ وَٱلۡحِكۡمَةَ وَيُزَكِّيهِمۡۖ إِنَّكَ أَنتَ ٱلۡعَزِيزُ ٱلۡحَكِيمُ "}, {"aya_id": 137, "coordinates": [[253, 84, 108, 34], [287, 84, 322, 34], [321, 204, 203, 34]], "aya_moshaf": "وَمَن يَرۡغَبُ عَن مِّلَّةِ إِبۡرَٰهِـۧمَ إِلَّا مَن سَفِهَ نَفۡسَهُۥۚ وَلَقَدِ ٱصۡطَفَيۡنَٰهُ فِي ٱلدُّنۡيَاۖ وَإِنَّهُۥ فِي ٱلۡأٓخِرَةِ لَمِنَ ٱلصَّٰلِحِينَ "}, {"aya_id": 138, "coordinates": [[321, 84, 120, 34], [356, 223, 184, 34]], "aya_moshaf": "إِذۡ قَالَ لَهُۥ رَبُّهُۥٓ أَسۡلِمۡۖ قَالَ أَسۡلَمۡتُ لِرَبِّ ٱلۡعَٰلَمِينَ "}, {"aya_id": 139, "coordinates": [[356, 84, 139, 34], [390, 84, 322, 34], [424, 293, 114, 34]], "aya_moshaf": "وَوَصَّىٰ بِهَآ إِبۡرَٰهِـۧمُ بَنِيهِ وَيَعۡقُوبُ يَٰبَنِيَّ إِنَّ ٱللَّهَ ٱصۡطَفَىٰ لَكُمُ ٱلدِّينَ فَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسۡلِمُونَ "}, {"aya_id": 140, "coordinates": [[424, 84, 209, 34], [459, 84, 322, 34], [493, 84, 322, 34], [527, 238, 169, 34]], "aya_moshaf": "أَمۡ كُنتُمۡ شُهَدَآءَ إِذۡ حَضَرَ يَعۡقُوبَ ٱلۡمَوۡتُ إِذۡ قَالَ لِبَنِيهِ مَا تَعۡبُدُونَ مِنۢ بَعۡدِيۖ قَالُواْ نَعۡبُدُ إِلَٰهَكَ وَإِلَٰهَ ءَابَآئِكَ إِبۡرَٰهِـۧمَ وَإِسۡمَٰعِيلَ وَإِسۡحَٰقَ إِلَٰهٗا وَٰحِدٗا وَنَحۡنُ لَهُۥ مُسۡلِمُونَ "}, {"aya_id": 141, "coordinates": [[527, 84, 154, 34], [562, 84, 322, 34]], "aya_moshaf": "تِلۡكَ أُمَّةٞ قَدۡ خَلَتۡۖ لَهَا مَا كَسَبَتۡ وَلَكُم مَّا كَسَبۡتُمۡۖ وَلَا تُسۡـَٔلُونَ عَمَّا كَانُواْ يَعۡمَلُونَ "}]