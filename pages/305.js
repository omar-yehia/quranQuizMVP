const mainSuraId = 19;
const nearbySurasNames = {
    18: 'الكَهف',
    19: 'مَريَم',
    20: 'طه',
    21: 'الأنبيَاء',
};
const choicesObjects = {
    "303": "انا مكنا له في الارض",
    "304": "قال هذا رحمه من ربي",
    "306": "يايحيي خذ الكتاب بقوه واتيناه",
    "307": "فكلي واشربي وقري عينا فاما",
};
const ayas = [{"aya_id": 2251, "coordinates": [[156, 268, 108, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ كٓهيعٓصٓ "}, {"aya_id": 2252, "coordinates": [[156, 53, 215, 34]], "aya_moshaf": "ذِكۡرُ رَحۡمَتِ رَبِّكَ عَبۡدَهُۥ زَكَرِيَّآ "}, {"aya_id": 2253, "coordinates": [[190, 196, 180, 34]], "aya_moshaf": "إِذۡ نَادَىٰ رَبَّهُۥ نِدَآءً خَفِيّٗا "}, {"aya_id": 2254, "coordinates": [[190, 53, 143, 34], [224, 53, 322, 34], [259, 310, 66, 34]], "aya_moshaf": "قَالَ رَبِّ إِنِّي وَهَنَ ٱلۡعَظۡمُ مِنِّي وَٱشۡتَعَلَ ٱلرَّأۡسُ شَيۡبٗا وَلَمۡ أَكُنۢ بِدُعَآئِكَ رَبِّ شَقِيّٗا "}, {"aya_id": 2255, "coordinates": [[259, 53, 257, 34], [293, 125, 251, 34]], "aya_moshaf": "وَإِنِّي خِفۡتُ ٱلۡمَوَٰلِيَ مِن وَرَآءِي وَكَانَتِ ٱمۡرَأَتِي عَاقِرٗا فَهَبۡ لِي مِن لَّدُنكَ وَلِيّٗا "}, {"aya_id": 2256, "coordinates": [[293, 53, 72, 34], [327, 133, 243, 34]], "aya_moshaf": "يَرِثُنِي وَيَرِثُ مِنۡ ءَالِ يَعۡقُوبَۖ وَٱجۡعَلۡهُ رَبِّ رَضِيّٗا "}, {"aya_id": 2257, "coordinates": [[327, 53, 80, 34], [362, 53, 322, 34], [396, 345, 31, 34]], "aya_moshaf": "يَٰزَكَرِيَّآ إِنَّا نُبَشِّرُكَ بِغُلَٰمٍ ٱسۡمُهُۥ يَحۡيَىٰ لَمۡ نَجۡعَل لَّهُۥ مِن قَبۡلُ سَمِيّٗا "}, {"aya_id": 2258, "coordinates": [[396, 53, 292, 34], [430, 136, 240, 34]], "aya_moshaf": "قَالَ رَبِّ أَنَّىٰ يَكُونُ لِي غُلَٰمٞ وَكَانَتِ ٱمۡرَأَتِي عَاقِرٗا وَقَدۡ بَلَغۡتُ مِنَ ٱلۡكِبَرِ عِتِيّٗا "}, {"aya_id": 2259, "coordinates": [[430, 53, 83, 34], [465, 53, 322, 34], [499, 312, 64, 34]], "aya_moshaf": "قَالَ كَذَٰلِكَ قَالَ رَبُّكَ هُوَ عَلَيَّ هَيِّنٞ وَقَدۡ خَلَقۡتُكَ مِن قَبۡلُ وَلَمۡ تَكُ شَيۡـٔٗا "}, {"aya_id": 2260, "coordinates": [[499, 53, 259, 34], [533, 145, 231, 34]], "aya_moshaf": "قَالَ رَبِّ ٱجۡعَل لِّيٓ ءَايَةٗۖ قَالَ ءَايَتُكَ أَلَّا تُكَلِّمَ ٱلنَّاسَ ثَلَٰثَ لَيَالٖ سَوِيّٗا "}, {"aya_id": 2261, "coordinates": [[533, 53, 92, 34], [568, 53, 322, 34]], "aya_moshaf": "فَخَرَجَ عَلَىٰ قَوۡمِهِۦ مِنَ ٱلۡمِحۡرَابِ فَأَوۡحَىٰٓ إِلَيۡهِمۡ أَن سَبِّحُواْ بُكۡرَةٗ وَعَشِيّٗا "}]