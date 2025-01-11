const mainSuraId = 3;
const nearbySurasNames = {
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
    5: 'المَائدة',
};
const choicesObjects = {
    "55": "هنالك دعا زكريا ربه قال",
    "56": "ويكلم الناس في المهد وكهلا",
    "58": "ان هذا لهو القصص الحق",
    "59": "يااهل الكتاب لم تلبسون الحق",
};
const ayas = [{"aya_id": 346, "coordinates": [[87, 49, 322, 34], [121, 257, 115, 34]], "aya_moshaf": "رَبَّنَآ ءَامَنَّا بِمَآ أَنزَلۡتَ وَٱتَّبَعۡنَا ٱلرَّسُولَ فَٱكۡتُبۡنَا مَعَ ٱلشَّٰهِدِينَ "}, {"aya_id": 347, "coordinates": [[121, 49, 208, 34], [156, 288, 84, 34]], "aya_moshaf": "وَمَكَرُواْ وَمَكَرَ ٱللَّهُۖ وَٱللَّهُ خَيۡرُ ٱلۡمَٰكِرِينَ "}, {"aya_id": 348, "coordinates": [[156, 49, 239, 34], [190, 49, 322, 34], [224, 49, 322, 34], [259, 105, 267, 34]], "aya_moshaf": "إِذۡ قَالَ ٱللَّهُ يَٰعِيسَىٰٓ إِنِّي مُتَوَفِّيكَ وَرَافِعُكَ إِلَيَّ وَمُطَهِّرُكَ مِنَ ٱلَّذِينَ كَفَرُواْ وَجَاعِلُ ٱلَّذِينَ ٱتَّبَعُوكَ فَوۡقَ ٱلَّذِينَ كَفَرُوٓاْ إِلَىٰ يَوۡمِ ٱلۡقِيَٰمَةِۖ ثُمَّ إِلَيَّ مَرۡجِعُكُمۡ فَأَحۡكُمُ بَيۡنَكُمۡ فِيمَا كُنتُمۡ فِيهِ تَخۡتَلِفُونَ "}, {"aya_id": 349, "coordinates": [[259, 49, 56, 34], [293, 49, 322, 34], [327, 248, 124, 34]], "aya_moshaf": "فَأَمَّا ٱلَّذِينَ كَفَرُواْ فَأُعَذِّبُهُمۡ عَذَابٗا شَدِيدٗا فِي ٱلدُّنۡيَا وَٱلۡأٓخِرَةِ وَمَا لَهُم مِّن نَّٰصِرِينَ "}, {"aya_id": 350, "coordinates": [[327, 49, 199, 34], [362, 49, 322, 34]], "aya_moshaf": "وَأَمَّا ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ فَيُوَفِّيهِمۡ أُجُورَهُمۡۗ وَٱللَّهُ لَا يُحِبُّ ٱلظَّٰلِمِينَ "}, {"aya_id": 351, "coordinates": [[396, 82, 290, 34]], "aya_moshaf": "ذَٰلِكَ نَتۡلُوهُ عَلَيۡكَ مِنَ ٱلۡأٓيَٰتِ وَٱلذِّكۡرِ ٱلۡحَكِيمِ "}, {"aya_id": 352, "coordinates": [[396, 49, 33, 34], [430, 49, 322, 34], [465, 268, 104, 34]], "aya_moshaf": "إِنَّ مَثَلَ عِيسَىٰ عِندَ ٱللَّهِ كَمَثَلِ ءَادَمَۖ خَلَقَهُۥ مِن تُرَابٖ ثُمَّ قَالَ لَهُۥ كُن فَيَكُونُ "}, {"aya_id": 353, "coordinates": [[465, 49, 219, 34]], "aya_moshaf": "ٱلۡحَقُّ مِن رَّبِّكَ فَلَا تَكُن مِّنَ ٱلۡمُمۡتَرِينَ "}, {"aya_id": 354, "coordinates": [[499, 49, 322, 34], [533, 49, 322, 34], [568, 49, 322, 34]], "aya_moshaf": "فَمَنۡ حَآجَّكَ فِيهِ مِنۢ بَعۡدِ مَا جَآءَكَ مِنَ ٱلۡعِلۡمِ فَقُلۡ تَعَالَوۡاْ نَدۡعُ أَبۡنَآءَنَا وَأَبۡنَآءَكُمۡ وَنِسَآءَنَا وَنِسَآءَكُمۡ وَأَنفُسَنَا وَأَنفُسَكُمۡ ثُمَّ نَبۡتَهِلۡ فَنَجۡعَل لَّعۡنَتَ ٱللَّهِ عَلَى ٱلۡكَٰذِبِينَ "}]