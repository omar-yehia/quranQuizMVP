const mainSuraId = 16;
const nearbySurasNames = {
    15: 'الحِجر',
    16: 'النَّحل',
    17: 'الإسرَاء',
    18: 'الكَهف',
};
const choicesObjects = {
    "279": "ولقد نعلم انهم يقولون انما",
    "280": "يوم تاتي كل نفس تجادل",
    "282": "سبحان الذي اسري بعبده ليلا",
    "283": "عسي ربكم ان يرحمكم وان",
};
const ayas = [{"aya_id": 2020, "coordinates": [[87, 47, 322, 34], [121, 47, 322, 34]], "aya_moshaf": "ثُمَّ إِنَّ رَبَّكَ لِلَّذِينَ عَمِلُواْ ٱلسُّوٓءَ بِجَهَٰلَةٖ ثُمَّ تَابُواْ مِنۢ بَعۡدِ ذَٰلِكَ وَأَصۡلَحُوٓاْ إِنَّ رَبَّكَ مِنۢ بَعۡدِهَا لَغَفُورٞ رَّحِيمٌ "}, {"aya_id": 2021, "coordinates": [[156, 47, 322, 34], [190, 343, 26, 34]], "aya_moshaf": "إِنَّ إِبۡرَٰهِيمَ كَانَ أُمَّةٗ قَانِتٗا لِّلَّهِ حَنِيفٗا وَلَمۡ يَكُ مِنَ ٱلۡمُشۡرِكِينَ "}, {"aya_id": 2022, "coordinates": [[190, 47, 296, 34], [224, 345, 24, 34]], "aya_moshaf": "شَاكِرٗا لِّأَنۡعُمِهِۚ ٱجۡتَبَىٰهُ وَهَدَىٰهُ إِلَىٰ صِرَٰطٖ مُّسۡتَقِيمٖ "}, {"aya_id": 2023, "coordinates": [[224, 47, 298, 34], [259, 347, 22, 34]], "aya_moshaf": "وَءَاتَيۡنَٰهُ فِي ٱلدُّنۡيَا حَسَنَةٗۖ وَإِنَّهُۥ فِي ٱلۡأٓخِرَةِ لَمِنَ ٱلصَّٰلِحِينَ "}, {"aya_id": 2024, "coordinates": [[259, 47, 300, 34], [293, 238, 131, 34]], "aya_moshaf": "ثُمَّ أَوۡحَيۡنَآ إِلَيۡكَ أَنِ ٱتَّبِعۡ مِلَّةَ إِبۡرَٰهِيمَ حَنِيفٗاۖ وَمَا كَانَ مِنَ ٱلۡمُشۡرِكِينَ "}, {"aya_id": 2025, "coordinates": [[293, 47, 191, 34], [327, 47, 322, 34], [362, 213, 156, 34]], "aya_moshaf": "إِنَّمَا جُعِلَ ٱلسَّبۡتُ عَلَى ٱلَّذِينَ ٱخۡتَلَفُواْ فِيهِۚ وَإِنَّ رَبَّكَ لَيَحۡكُمُ بَيۡنَهُمۡ يَوۡمَ ٱلۡقِيَٰمَةِ فِيمَا كَانُواْ فِيهِ يَخۡتَلِفُونَ "}, {"aya_id": 2026, "coordinates": [[362, 47, 166, 34], [396, 47, 322, 34], [430, 47, 322, 34]], "aya_moshaf": "ٱدۡعُ إِلَىٰ سَبِيلِ رَبِّكَ بِٱلۡحِكۡمَةِ وَٱلۡمَوۡعِظَةِ ٱلۡحَسَنَةِۖ وَجَٰدِلۡهُم بِٱلَّتِي هِيَ أَحۡسَنُۚ إِنَّ رَبَّكَ هُوَ أَعۡلَمُ بِمَن ضَلَّ عَن سَبِيلِهِۦ وَهُوَ أَعۡلَمُ بِٱلۡمُهۡتَدِينَ "}, {"aya_id": 2027, "coordinates": [[465, 47, 322, 34], [499, 217, 152, 34]], "aya_moshaf": "وَإِنۡ عَاقَبۡتُمۡ فَعَاقِبُواْ بِمِثۡلِ مَا عُوقِبۡتُم بِهِۦۖ وَلَئِن صَبَرۡتُمۡ لَهُوَ خَيۡرٞ لِّلصَّٰبِرِينَ "}, {"aya_id": 2028, "coordinates": [[499, 47, 170, 34], [533, 47, 322, 34], [568, 347, 22, 34]], "aya_moshaf": "وَٱصۡبِرۡ وَمَا صَبۡرُكَ إِلَّا بِٱللَّهِۚ وَلَا تَحۡزَنۡ عَلَيۡهِمۡ وَلَا تَكُ فِي ضَيۡقٖ مِّمَّا يَمۡكُرُونَ "}, {"aya_id": 2029, "coordinates": [[568, 47, 300, 34]], "aya_moshaf": "إِنَّ ٱللَّهَ مَعَ ٱلَّذِينَ ٱتَّقَواْ وَّٱلَّذِينَ هُم مُّحۡسِنُونَ "}]