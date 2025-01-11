const mainSuraId = 4;
const nearbySurasNames = {
    3: 'آل عِمران',
    4: 'النِّسَاء',
    5: 'المَائدة',
    6: 'الأنعَام',
};
const choicesObjects = {
    "79": "ولكم نصف ما ترك ازواجكم",
    "80": "واللاتي ياتين الفاحشه من نسائكم",
    "82": "والمحصنات من النساء الا ما",
    "83": "والله يريد ان يتوب عليكم",
};
const ayas = [{"aya_id": 513, "coordinates": [[87, 49, 322, 34], [121, 49, 322, 34], [156, 223, 149, 34]], "aya_moshaf": "وَإِنۡ أَرَدتُّمُ ٱسۡتِبۡدَالَ زَوۡجٖ مَّكَانَ زَوۡجٖ وَءَاتَيۡتُمۡ إِحۡدَىٰهُنَّ قِنطَارٗا فَلَا تَأۡخُذُواْ مِنۡهُ شَيۡـًٔاۚ أَتَأۡخُذُونَهُۥ بُهۡتَٰنٗا وَإِثۡمٗا مُّبِينٗا "}, {"aya_id": 514, "coordinates": [[156, 49, 174, 34], [190, 49, 322, 34], [224, 299, 73, 34]], "aya_moshaf": "وَكَيۡفَ تَأۡخُذُونَهُۥ وَقَدۡ أَفۡضَىٰ بَعۡضُكُمۡ إِلَىٰ بَعۡضٖ وَأَخَذۡنَ مِنكُم مِّيثَٰقًا غَلِيظٗا "}, {"aya_id": 515, "coordinates": [[224, 49, 250, 34], [259, 49, 322, 34], [293, 250, 122, 34]], "aya_moshaf": "وَلَا تَنكِحُواْ مَا نَكَحَ ءَابَآؤُكُم مِّنَ ٱلنِّسَآءِ إِلَّا مَا قَدۡ سَلَفَۚ إِنَّهُۥ كَانَ فَٰحِشَةٗ وَمَقۡتٗا وَسَآءَ سَبِيلًا "}, {"aya_id": 516, "coordinates": [[293, 49, 201, 34], [327, 49, 322, 34], [362, 49, 322, 34], [396, 49, 322, 34], [430, 49, 322, 34], [465, 49, 322, 34], [499, 49, 322, 34], [533, 49, 322, 34], [568, 49, 322, 34]], "aya_moshaf": "حُرِّمَتۡ عَلَيۡكُمۡ أُمَّهَٰتُكُمۡ وَبَنَاتُكُمۡ وَأَخَوَٰتُكُمۡ وَعَمَّٰتُكُمۡ وَخَٰلَٰتُكُمۡ وَبَنَاتُ ٱلۡأَخِ وَبَنَاتُ ٱلۡأُخۡتِ وَأُمَّهَٰتُكُمُ ٱلَّٰتِيٓ أَرۡضَعۡنَكُمۡ وَأَخَوَٰتُكُم مِّنَ ٱلرَّضَٰعَةِ وَأُمَّهَٰتُ نِسَآئِكُمۡ وَرَبَٰٓئِبُكُمُ ٱلَّٰتِي فِي حُجُورِكُم مِّن نِّسَآئِكُمُ ٱلَّٰتِي دَخَلۡتُم بِهِنَّ فَإِن لَّمۡ تَكُونُواْ دَخَلۡتُم بِهِنَّ فَلَا جُنَاحَ عَلَيۡكُمۡ وَحَلَٰٓئِلُ أَبۡنَآئِكُمُ ٱلَّذِينَ مِنۡ أَصۡلَٰبِكُمۡ وَأَن تَجۡمَعُواْ بَيۡنَ ٱلۡأُخۡتَيۡنِ إِلَّا مَا قَدۡ سَلَفَۗ إِنَّ ٱللَّهَ كَانَ غَفُورٗا رَّحِيمٗا "}]