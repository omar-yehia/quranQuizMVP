const mainSuraId = 3;
const nearbySurasNames = {
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
    5: 'المَائدة',
};
const choicesObjects = {
    "50": "الم",
    "51": "ان الذين كفروا لن تغني",
    "53": "الم تر الي الذين اوتوا",
    "54": "يوم تجد كل نفس ما",
};
const ayas = [{"aya_id": 309, "coordinates": [[80, 83, 322, 34], [114, 313, 93, 34]], "aya_moshaf": "ٱلَّذِينَ يَقُولُونَ رَبَّنَآ إِنَّنَآ ءَامَنَّا فَٱغۡفِرۡ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ ٱلنَّارِ "}, {"aya_id": 310, "coordinates": [[114, 83, 230, 34], [149, 140, 266, 34]], "aya_moshaf": "ٱلصَّٰبِرِينَ وَٱلصَّٰدِقِينَ وَٱلۡقَٰنِتِينَ وَٱلۡمُنفِقِينَ وَٱلۡمُسۡتَغۡفِرِينَ بِٱلۡأَسۡحَارِ "}, {"aya_id": 311, "coordinates": [[149, 83, 57, 34], [183, 83, 322, 34], [217, 195, 211, 34]], "aya_moshaf": "شَهِدَ ٱللَّهُ أَنَّهُۥ لَآ إِلَٰهَ إِلَّا هُوَ وَٱلۡمَلَٰٓئِكَةُ وَأُوْلُواْ ٱلۡعِلۡمِ قَآئِمَۢا بِٱلۡقِسۡطِۚ لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡعَزِيزُ ٱلۡحَكِيمُ "}, {"aya_id": 312, "coordinates": [[217, 83, 112, 34], [252, 83, 322, 34], [286, 83, 322, 34], [320, 215, 191, 34]], "aya_moshaf": "إِنَّ ٱلدِّينَ عِندَ ٱللَّهِ ٱلۡإِسۡلَٰمُۗ وَمَا ٱخۡتَلَفَ ٱلَّذِينَ أُوتُواْ ٱلۡكِتَٰبَ إِلَّا مِنۢ بَعۡدِ مَا جَآءَهُمُ ٱلۡعِلۡمُ بَغۡيَۢا بَيۡنَهُمۡۗ وَمَن يَكۡفُرۡ بِـَٔايَٰتِ ٱللَّهِ فَإِنَّ ٱللَّهَ سَرِيعُ ٱلۡحِسَابِ "}, {"aya_id": 313, "coordinates": [[320, 83, 132, 34], [355, 83, 322, 34], [389, 83, 322, 34], [423, 199, 207, 34]], "aya_moshaf": "فَإِنۡ حَآجُّوكَ فَقُلۡ أَسۡلَمۡتُ وَجۡهِيَ لِلَّهِ وَمَنِ ٱتَّبَعَنِۗ وَقُل لِّلَّذِينَ أُوتُواْ ٱلۡكِتَٰبَ وَٱلۡأُمِّيِّـۧنَ ءَأَسۡلَمۡتُمۡۚ فَإِنۡ أَسۡلَمُواْ فَقَدِ ٱهۡتَدَواْۖ وَّإِن تَوَلَّوۡاْ فَإِنَّمَا عَلَيۡكَ ٱلۡبَلَٰغُۗ وَٱللَّهُ بَصِيرُۢ بِٱلۡعِبَادِ "}, {"aya_id": 314, "coordinates": [[423, 83, 116, 34], [458, 83, 322, 34], [492, 83, 322, 34], [526, 292, 114, 34]], "aya_moshaf": "إِنَّ ٱلَّذِينَ يَكۡفُرُونَ بِـَٔايَٰتِ ٱللَّهِ وَيَقۡتُلُونَ ٱلنَّبِيِّـۧنَ بِغَيۡرِ حَقّٖ وَيَقۡتُلُونَ ٱلَّذِينَ يَأۡمُرُونَ بِٱلۡقِسۡطِ مِنَ ٱلنَّاسِ فَبَشِّرۡهُم بِعَذَابٍ أَلِيمٍ "}, {"aya_id": 315, "coordinates": [[526, 83, 209, 34], [561, 83, 322, 34]], "aya_moshaf": "أُوْلَٰٓئِكَ ٱلَّذِينَ حَبِطَتۡ أَعۡمَٰلُهُمۡ فِي ٱلدُّنۡيَا وَٱلۡأٓخِرَةِ وَمَا لَهُم مِّن نَّٰصِرِينَ "}]