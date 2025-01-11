const mainSuraId = 30;
const nearbySurasNames = {
    29: 'العَنكبُوت',
    30: 'الرُّوم',
    31: 'لُقمَان',
    32: 'السَّجدة',
};
const choicesObjects = {
    "408": "واذا مس الناس ضر دعوا",
    "409": "قل سيروا في الارض فانظروا",
    "411": "الم",
    "412": "ولقد اتينا لقمان الحكمه ان",
};
const ayas = [{"aya_id": 3460, "coordinates": [[85, 93, 322, 34], [119, 391, 25, 34]], "aya_moshaf": "وَلَئِنۡ أَرۡسَلۡنَا رِيحٗا فَرَأَوۡهُ مُصۡفَرّٗا لَّظَلُّواْ مِنۢ بَعۡدِهِۦ يَكۡفُرُونَ "}, {"aya_id": 3461, "coordinates": [[119, 93, 298, 34], [154, 351, 65, 34]], "aya_moshaf": "فَإِنَّكَ لَا تُسۡمِعُ ٱلۡمَوۡتَىٰ وَلَا تُسۡمِعُ ٱلصُّمَّ ٱلدُّعَآءَ إِذَا وَلَّوۡاْ مُدۡبِرِينَ "}, {"aya_id": 3462, "coordinates": [[154, 93, 258, 34], [188, 227, 189, 34]], "aya_moshaf": "وَمَآ أَنتَ بِهَٰدِ ٱلۡعُمۡيِ عَن ضَلَٰلَتِهِمۡۖ إِن تُسۡمِعُ إِلَّا مَن يُؤۡمِنُ بِـَٔايَٰتِنَا فَهُم مُّسۡلِمُونَ "}, {"aya_id": 3463, "coordinates": [[188, 93, 134, 34], [222, 93, 322, 34], [257, 93, 322, 34]], "aya_moshaf": "۞ ٱللَّهُ ٱلَّذِي خَلَقَكُم مِّن ضَعۡفٖ ثُمَّ جَعَلَ مِنۢ بَعۡدِ ضَعۡفٖ قُوَّةٗ ثُمَّ جَعَلَ مِنۢ بَعۡدِ قُوَّةٖ ضَعۡفٗا وَشَيۡبَةٗۚ يَخۡلُقُ مَا يَشَآءُۚ وَهُوَ ٱلۡعَلِيمُ ٱلۡقَدِيرُ "}, {"aya_id": 3464, "coordinates": [[291, 93, 322, 34], [325, 265, 151, 34]], "aya_moshaf": "وَيَوۡمَ تَقُومُ ٱلسَّاعَةُ يُقۡسِمُ ٱلۡمُجۡرِمُونَ مَا لَبِثُواْ غَيۡرَ سَاعَةٖۚ كَذَٰلِكَ كَانُواْ يُؤۡفَكُونَ "}, {"aya_id": 3465, "coordinates": [[325, 93, 172, 34], [360, 93, 322, 34], [394, 228, 188, 34]], "aya_moshaf": "وَقَالَ ٱلَّذِينَ أُوتُواْ ٱلۡعِلۡمَ وَٱلۡإِيمَٰنَ لَقَدۡ لَبِثۡتُمۡ فِي كِتَٰبِ ٱللَّهِ إِلَىٰ يَوۡمِ ٱلۡبَعۡثِۖ فَهَٰذَا يَوۡمُ ٱلۡبَعۡثِ وَلَٰكِنَّكُمۡ كُنتُمۡ لَا تَعۡلَمُونَ "}, {"aya_id": 3466, "coordinates": [[394, 93, 135, 34], [428, 163, 253, 34]], "aya_moshaf": "فَيَوۡمَئِذٖ لَّا يَنفَعُ ٱلَّذِينَ ظَلَمُواْ مَعۡذِرَتُهُمۡ وَلَا هُمۡ يُسۡتَعۡتَبُونَ "}, {"aya_id": 3467, "coordinates": [[428, 93, 70, 34], [463, 93, 322, 34], [497, 155, 261, 34]], "aya_moshaf": "وَلَقَدۡ ضَرَبۡنَا لِلنَّاسِ فِي هَٰذَا ٱلۡقُرۡءَانِ مِن كُلِّ مَثَلٖۚ وَلَئِن جِئۡتَهُم بِـَٔايَةٖ لَّيَقُولَنَّ ٱلَّذِينَ كَفَرُوٓاْ إِنۡ أَنتُمۡ إِلَّا مُبۡطِلُونَ "}, {"aya_id": 3468, "coordinates": [[497, 93, 62, 34], [531, 163, 253, 34]], "aya_moshaf": "كَذَٰلِكَ يَطۡبَعُ ٱللَّهُ عَلَىٰ قُلُوبِ ٱلَّذِينَ لَا يَعۡلَمُونَ "}, {"aya_id": 3469, "coordinates": [[531, 93, 70, 34], [566, 93, 322, 34]], "aya_moshaf": "فَٱصۡبِرۡ إِنَّ وَعۡدَ ٱللَّهِ حَقّٞۖ وَلَا يَسۡتَخِفَّنَّكَ ٱلَّذِينَ لَا يُوقِنُونَ "}]