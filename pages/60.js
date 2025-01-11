const mainSuraId = 3;
const nearbySurasNames = {
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
    5: 'المَائدة',
};
const choicesObjects = {
    "58": "ان هذا لهو القصص الحق",
    "59": "يااهل الكتاب لم تلبسون الحق",
    "61": "قل امنا بالله وما انزل",
    "62": "لن تنالوا البر حتي تنفقوا",
};
const ayas = [{"aya_id": 371, "coordinates": [[85, 92, 322, 34], [119, 92, 322, 34], [154, 92, 322, 34], [188, 307, 108, 34]], "aya_moshaf": "وَإِنَّ مِنۡهُمۡ لَفَرِيقٗا يَلۡوُۥنَ أَلۡسِنَتَهُم بِٱلۡكِتَٰبِ لِتَحۡسَبُوهُ مِنَ ٱلۡكِتَٰبِ وَمَا هُوَ مِنَ ٱلۡكِتَٰبِ وَيَقُولُونَ هُوَ مِنۡ عِندِ ٱللَّهِ وَمَا هُوَ مِنۡ عِندِ ٱللَّهِۖ وَيَقُولُونَ عَلَى ٱللَّهِ ٱلۡكَذِبَ وَهُمۡ يَعۡلَمُونَ "}, {"aya_id": 372, "coordinates": [[188, 92, 215, 34], [222, 92, 322, 34], [257, 92, 322, 34], [291, 272, 143, 34]], "aya_moshaf": "مَا كَانَ لِبَشَرٍ أَن يُؤۡتِيَهُ ٱللَّهُ ٱلۡكِتَٰبَ وَٱلۡحُكۡمَ وَٱلنُّبُوَّةَ ثُمَّ يَقُولَ لِلنَّاسِ كُونُواْ عِبَادٗا لِّي مِن دُونِ ٱللَّهِ وَلَٰكِن كُونُواْ رَبَّٰنِيِّـۧنَ بِمَا كُنتُمۡ تُعَلِّمُونَ ٱلۡكِتَٰبَ وَبِمَا كُنتُمۡ تَدۡرُسُونَ "}, {"aya_id": 373, "coordinates": [[291, 92, 180, 34], [325, 92, 322, 34]], "aya_moshaf": "وَلَا يَأۡمُرَكُمۡ أَن تَتَّخِذُواْ ٱلۡمَلَٰٓئِكَةَ وَٱلنَّبِيِّـۧنَ أَرۡبَابًاۚ أَيَأۡمُرُكُم بِٱلۡكُفۡرِ بَعۡدَ إِذۡ أَنتُم مُّسۡلِمُونَ "}, {"aya_id": 374, "coordinates": [[360, 92, 322, 34], [394, 92, 322, 34], [428, 92, 322, 34], [463, 92, 322, 34]], "aya_moshaf": "وَإِذۡ أَخَذَ ٱللَّهُ مِيثَٰقَ ٱلنَّبِيِّـۧنَ لَمَآ ءَاتَيۡتُكُم مِّن كِتَٰبٖ وَحِكۡمَةٖ ثُمَّ جَآءَكُمۡ رَسُولٞ مُّصَدِّقٞ لِّمَا مَعَكُمۡ لَتُؤۡمِنُنَّ بِهِۦ وَلَتَنصُرُنَّهُۥۚ قَالَ ءَأَقۡرَرۡتُمۡ وَأَخَذۡتُمۡ عَلَىٰ ذَٰلِكُمۡ إِصۡرِيۖ قَالُوٓاْ أَقۡرَرۡنَاۚ قَالَ فَٱشۡهَدُواْ وَأَنَا۠ مَعَكُم مِّنَ ٱلشَّٰهِدِينَ "}, {"aya_id": 375, "coordinates": [[497, 92, 322, 34]], "aya_moshaf": "فَمَن تَوَلَّىٰ بَعۡدَ ذَٰلِكَ فَأُوْلَٰٓئِكَ هُمُ ٱلۡفَٰسِقُونَ "}, {"aya_id": 376, "coordinates": [[531, 92, 322, 34], [566, 92, 322, 34]], "aya_moshaf": "أَفَغَيۡرَ دِينِ ٱللَّهِ يَبۡغُونَ وَلَهُۥٓ أَسۡلَمَ مَن فِي ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ طَوۡعٗا وَكَرۡهٗا وَإِلَيۡهِ يُرۡجَعُونَ "}]