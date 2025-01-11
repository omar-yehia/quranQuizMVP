const mainSuraId = 12;
const nearbySurasNames = {
    11: 'هُود',
    12: 'يُوسُف',
    13: 'الرَّعد',
    14: 'إبراهِيم',
};
const choicesObjects = {
    "240": "واتبعت مله ابائي ابراهيم واسحاق",
    "241": "قالوا اضغاث احلام وما نحن",
    "243": "قال هل امنكم عليه الا",
    "244": "فلما جهزهم بجهازهم جعل السقايه",
};
const ayas = [{"aya_id": 1649, "coordinates": [[80, 88, 322, 34], [114, 268, 143, 34]], "aya_moshaf": "۞ وَمَآ أُبَرِّئُ نَفۡسِيٓۚ إِنَّ ٱلنَّفۡسَ لَأَمَّارَةُۢ بِٱلسُّوٓءِ إِلَّا مَا رَحِمَ رَبِّيٓۚ إِنَّ رَبِّي غَفُورٞ رَّحِيمٞ "}, {"aya_id": 1650, "coordinates": [[114, 88, 180, 34], [149, 122, 289, 34]], "aya_moshaf": "وَقَالَ ٱلۡمَلِكُ ٱئۡتُونِي بِهِۦٓ أَسۡتَخۡلِصۡهُ لِنَفۡسِيۖ فَلَمَّا كَلَّمَهُۥ قَالَ إِنَّكَ ٱلۡيَوۡمَ لَدَيۡنَا مَكِينٌ أَمِينٞ "}, {"aya_id": 1651, "coordinates": [[149, 88, 34, 34], [183, 144, 267, 34]], "aya_moshaf": "قَالَ ٱجۡعَلۡنِي عَلَىٰ خَزَآئِنِ ٱلۡأَرۡضِۖ إِنِّي حَفِيظٌ عَلِيمٞ "}, {"aya_id": 1652, "coordinates": [[183, 88, 56, 34], [217, 88, 322, 34], [252, 142, 269, 34]], "aya_moshaf": "وَكَذَٰلِكَ مَكَّنَّا لِيُوسُفَ فِي ٱلۡأَرۡضِ يَتَبَوَّأُ مِنۡهَا حَيۡثُ يَشَآءُۚ نُصِيبُ بِرَحۡمَتِنَا مَن نَّشَآءُۖ وَلَا نُضِيعُ أَجۡرَ ٱلۡمُحۡسِنِينَ "}, {"aya_id": 1653, "coordinates": [[252, 88, 54, 34], [286, 171, 240, 34]], "aya_moshaf": "وَلَأَجۡرُ ٱلۡأٓخِرَةِ خَيۡرٞ لِّلَّذِينَ ءَامَنُواْ وَكَانُواْ يَتَّقُونَ "}, {"aya_id": 1654, "coordinates": [[286, 88, 83, 34], [320, 120, 291, 34]], "aya_moshaf": "وَجَآءَ إِخۡوَةُ يُوسُفَ فَدَخَلُواْ عَلَيۡهِ فَعَرَفَهُمۡ وَهُمۡ لَهُۥ مُنكِرُونَ "}, {"aya_id": 1655, "coordinates": [[320, 88, 32, 34], [355, 88, 322, 34], [389, 203, 208, 34]], "aya_moshaf": "وَلَمَّا جَهَّزَهُم بِجَهَازِهِمۡ قَالَ ٱئۡتُونِي بِأَخٖ لَّكُم مِّنۡ أَبِيكُمۡۚ أَلَا تَرَوۡنَ أَنِّيٓ أُوفِي ٱلۡكَيۡلَ وَأَنَا۠ خَيۡرُ ٱلۡمُنزِلِينَ "}, {"aya_id": 1656, "coordinates": [[389, 88, 115, 34], [423, 221, 190, 34]], "aya_moshaf": "فَإِن لَّمۡ تَأۡتُونِي بِهِۦ فَلَا كَيۡلَ لَكُمۡ عِندِي وَلَا تَقۡرَبُونِ "}, {"aya_id": 1657, "coordinates": [[423, 88, 133, 34], [458, 315, 96, 34]], "aya_moshaf": "قَالُواْ سَنُرَٰوِدُ عَنۡهُ أَبَاهُ وَإِنَّا لَفَٰعِلُونَ "}, {"aya_id": 1658, "coordinates": [[458, 88, 227, 34], [492, 88, 322, 34], [526, 386, 25, 34]], "aya_moshaf": "وَقَالَ لِفِتۡيَٰنِهِ ٱجۡعَلُواْ بِضَٰعَتَهُمۡ فِي رِحَالِهِمۡ لَعَلَّهُمۡ يَعۡرِفُونَهَآ إِذَا ٱنقَلَبُوٓاْ إِلَىٰٓ أَهۡلِهِمۡ لَعَلَّهُمۡ يَرۡجِعُونَ "}, {"aya_id": 1659, "coordinates": [[526, 88, 298, 34], [561, 88, 322, 34]], "aya_moshaf": "فَلَمَّا رَجَعُوٓاْ إِلَىٰٓ أَبِيهِمۡ قَالُواْ يَٰٓأَبَانَا مُنِعَ مِنَّا ٱلۡكَيۡلُ فَأَرۡسِلۡ مَعَنَآ أَخَانَا نَكۡتَلۡ وَإِنَّا لَهُۥ لَحَٰفِظُونَ "}]