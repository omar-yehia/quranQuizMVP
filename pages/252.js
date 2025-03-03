const nearbySurasNames = {
    12: 'يُوسُف',
    13: 'الرَّعد',
    14: 'إبراهِيم',
    15: 'الحِجر',
};
const choicesObjects = {
    "250": "ويستعجلونك بالسيئه قبل الحسنه وقد",
    "251": "له دعوه الحق والذين يدعون",
    "253": "الذين امنوا وعملوا الصالحات طوبي",
    "254": "مثل الجنه التي وعد المتقون",
};
const ayas = [{"aya_id": 1726, "coordinates": [[86, 90, 322, 34], [120, 320, 93, 34]], "aya_moshaf": "۞ أَفَمَن يَعۡلَمُ أَنَّمَآ أُنزِلَ إِلَيۡكَ مِن رَّبِّكَ ٱلۡحَقُّ كَمَنۡ هُوَ أَعۡمَىٰٓۚ إِنَّمَا يَتَذَكَّرُ أُوْلُواْ ٱلۡأَلۡبَٰبِ "}, {"aya_id": 1727, "coordinates": [[120, 90, 230, 34], [155, 389, 24, 34]], "aya_moshaf": "ٱلَّذِينَ يُوفُونَ بِعَهۡدِ ٱللَّهِ وَلَا يَنقُضُونَ ٱلۡمِيثَٰقَ "}, {"aya_id": 1728, "coordinates": [[155, 90, 299, 34], [189, 273, 140, 34]], "aya_moshaf": "وَٱلَّذِينَ يَصِلُونَ مَآ أَمَرَ ٱللَّهُ بِهِۦٓ أَن يُوصَلَ وَيَخۡشَوۡنَ رَبَّهُمۡ وَيَخَافُونَ سُوٓءَ ٱلۡحِسَابِ "}, {"aya_id": 1729, "coordinates": [[189, 90, 183, 34], [223, 90, 322, 34], [258, 194, 219, 34]], "aya_moshaf": "وَٱلَّذِينَ صَبَرُواْ ٱبۡتِغَآءَ وَجۡهِ رَبِّهِمۡ وَأَقَامُواْ ٱلصَّلَوٰةَ وَأَنفَقُواْ مِمَّا رَزَقۡنَٰهُمۡ سِرّٗا وَعَلَانِيَةٗ وَيَدۡرَءُونَ بِٱلۡحَسَنَةِ ٱلسَّيِّئَةَ أُوْلَٰٓئِكَ لَهُمۡ عُقۡبَى ٱلدَّارِ "}, {"aya_id": 1730, "coordinates": [[258, 90, 104, 34], [292, 90, 322, 34], [326, 304, 109, 34]], "aya_moshaf": "جَنَّٰتُ عَدۡنٖ يَدۡخُلُونَهَا وَمَن صَلَحَ مِنۡ ءَابَآئِهِمۡ وَأَزۡوَٰجِهِمۡ وَذُرِّيَّٰتِهِمۡۖ وَٱلۡمَلَٰٓئِكَةُ يَدۡخُلُونَ عَلَيۡهِم مِّن كُلِّ بَابٖ "}, {"aya_id": 1731, "coordinates": [[326, 90, 214, 34], [361, 391, 22, 34]], "aya_moshaf": "سَلَٰمٌ عَلَيۡكُم بِمَا صَبَرۡتُمۡۚ فَنِعۡمَ عُقۡبَى ٱلدَّارِ "}, {"aya_id": 1732, "coordinates": [[361, 90, 301, 34], [395, 90, 322, 34], [429, 312, 101, 34]], "aya_moshaf": "وَٱلَّذِينَ يَنقُضُونَ عَهۡدَ ٱللَّهِ مِنۢ بَعۡدِ مِيثَٰقِهِۦ وَيَقۡطَعُونَ مَآ أَمَرَ ٱللَّهُ بِهِۦٓ أَن يُوصَلَ وَيُفۡسِدُونَ فِي ٱلۡأَرۡضِ أُوْلَٰٓئِكَ لَهُمُ ٱللَّعۡنَةُ وَلَهُمۡ سُوٓءُ ٱلدَّارِ "}, {"aya_id": 1733, "coordinates": [[429, 90, 222, 34], [464, 137, 276, 34]], "aya_moshaf": "ٱللَّهُ يَبۡسُطُ ٱلرِّزۡقَ لِمَن يَشَآءُ وَيَقۡدِرُۚ وَفَرِحُواْ بِٱلۡحَيَوٰةِ ٱلدُّنۡيَا وَمَا ٱلۡحَيَوٰةُ ٱلدُّنۡيَا فِي ٱلۡأٓخِرَةِ إِلَّا مَتَٰعٞ "}, {"aya_id": 1734, "coordinates": [[464, 90, 47, 34], [498, 90, 322, 34], [532, 217, 196, 34]], "aya_moshaf": "وَيَقُولُ ٱلَّذِينَ كَفَرُواْ لَوۡلَآ أُنزِلَ عَلَيۡهِ ءَايَةٞ مِّن رَّبِّهِۦۚ قُلۡ إِنَّ ٱللَّهَ يُضِلُّ مَن يَشَآءُ وَيَهۡدِيٓ إِلَيۡهِ مَنۡ أَنَابَ "}, {"aya_id": 1735, "coordinates": [[532, 90, 127, 34], [567, 90, 322, 34]], "aya_moshaf": "ٱلَّذِينَ ءَامَنُواْ وَتَطۡمَئِنُّ قُلُوبُهُم بِذِكۡرِ ٱللَّهِۗ أَلَا بِذِكۡرِ ٱللَّهِ تَطۡمَئِنُّ ٱلۡقُلُوبُ "}]
const ayasRanges = [{"ayas_ids_range": [1726, 1735], "sura_id": 13}];
