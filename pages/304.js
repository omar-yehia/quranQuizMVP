const mainSuraId = 18;
const nearbySurasNames = {
    17: 'الإسرَاء',
    18: 'الكَهف',
    19: 'مَريَم',
    20: 'طه',
};
const choicesObjects = {
    "302": "قال الم اقل لك انك",
    "303": "انا مكنا له في الارض",
    "305": "كهيعص",
    "306": "يايحيي خذ الكتاب بقوه واتيناه",
};
const ayas = [{"aya_id": 2238, "coordinates": [[85, 88, 322, 34], [119, 360, 51, 34]], "aya_moshaf": "قَالَ هَٰذَا رَحۡمَةٞ مِّن رَّبِّيۖ فَإِذَا جَآءَ وَعۡدُ رَبِّي جَعَلَهُۥ دَكَّآءَۖ وَكَانَ وَعۡدُ رَبِّي حَقّٗا "}, {"aya_id": 2239, "coordinates": [[119, 88, 272, 34], [154, 316, 95, 34]], "aya_moshaf": "۞ وَتَرَكۡنَا بَعۡضَهُمۡ يَوۡمَئِذٖ يَمُوجُ فِي بَعۡضٖۖ وَنُفِخَ فِي ٱلصُّورِ فَجَمَعۡنَٰهُمۡ جَمۡعٗا "}, {"aya_id": 2240, "coordinates": [[154, 88, 228, 34]], "aya_moshaf": "وَعَرَضۡنَا جَهَنَّمَ يَوۡمَئِذٖ لِّلۡكَٰفِرِينَ عَرۡضًا "}, {"aya_id": 2241, "coordinates": [[188, 88, 322, 34], [222, 359, 52, 34]], "aya_moshaf": "ٱلَّذِينَ كَانَتۡ أَعۡيُنُهُمۡ فِي غِطَآءٍ عَن ذِكۡرِي وَكَانُواْ لَا يَسۡتَطِيعُونَ سَمۡعًا "}, {"aya_id": 2242, "coordinates": [[222, 88, 271, 34], [257, 211, 200, 34]], "aya_moshaf": "أَفَحَسِبَ ٱلَّذِينَ كَفَرُوٓاْ أَن يَتَّخِذُواْ عِبَادِي مِن دُونِيٓ أَوۡلِيَآءَۚ إِنَّآ أَعۡتَدۡنَا جَهَنَّمَ لِلۡكَٰفِرِينَ نُزُلٗا "}, {"aya_id": 2243, "coordinates": [[257, 88, 123, 34], [291, 349, 62, 34]], "aya_moshaf": "قُلۡ هَلۡ نُنَبِّئُكُم بِٱلۡأَخۡسَرِينَ أَعۡمَٰلًا "}, {"aya_id": 2244, "coordinates": [[291, 88, 261, 34], [325, 307, 104, 34]], "aya_moshaf": "ٱلَّذِينَ ضَلَّ سَعۡيُهُمۡ فِي ٱلۡحَيَوٰةِ ٱلدُّنۡيَا وَهُمۡ يَحۡسَبُونَ أَنَّهُمۡ يُحۡسِنُونَ صُنۡعًا "}, {"aya_id": 2245, "coordinates": [[325, 88, 219, 34], [360, 156, 255, 34]], "aya_moshaf": "أُوْلَٰٓئِكَ ٱلَّذِينَ كَفَرُواْ بِـَٔايَٰتِ رَبِّهِمۡ وَلِقَآئِهِۦ فَحَبِطَتۡ أَعۡمَٰلُهُمۡ فَلَا نُقِيمُ لَهُمۡ يَوۡمَ ٱلۡقِيَٰمَةِ وَزۡنٗا "}, {"aya_id": 2246, "coordinates": [[360, 88, 68, 34], [394, 162, 249, 34]], "aya_moshaf": "ذَٰلِكَ جَزَآؤُهُمۡ جَهَنَّمُ بِمَا كَفَرُواْ وَٱتَّخَذُوٓاْ ءَايَٰتِي وَرُسُلِي هُزُوًا "}, {"aya_id": 2247, "coordinates": [[394, 88, 74, 34], [428, 131, 280, 34]], "aya_moshaf": "إِنَّ ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ كَانَتۡ لَهُمۡ جَنَّٰتُ ٱلۡفِرۡدَوۡسِ نُزُلًا "}, {"aya_id": 2248, "coordinates": [[428, 88, 43, 34], [463, 271, 140, 34]], "aya_moshaf": "خَٰلِدِينَ فِيهَا لَا يَبۡغُونَ عَنۡهَا حِوَلٗا "}, {"aya_id": 2249, "coordinates": [[463, 88, 183, 34], [497, 112, 299, 34]], "aya_moshaf": "قُل لَّوۡ كَانَ ٱلۡبَحۡرُ مِدَادٗا لِّكَلِمَٰتِ رَبِّي لَنَفِدَ ٱلۡبَحۡرُ قَبۡلَ أَن تَنفَدَ كَلِمَٰتُ رَبِّي وَلَوۡ جِئۡنَا بِمِثۡلِهِۦ مَدَدٗا "}, {"aya_id": 2250, "coordinates": [[497, 88, 24, 34], [531, 88, 322, 34], [566, 88, 322, 34]], "aya_moshaf": "قُلۡ إِنَّمَآ أَنَا۠ بَشَرٞ مِّثۡلُكُمۡ يُوحَىٰٓ إِلَيَّ أَنَّمَآ إِلَٰهُكُمۡ إِلَٰهٞ وَٰحِدٞۖ فَمَن كَانَ يَرۡجُواْ لِقَآءَ رَبِّهِۦ فَلۡيَعۡمَلۡ عَمَلٗا صَٰلِحٗا وَلَا يُشۡرِكۡ بِعِبَادَةِ رَبِّهِۦٓ أَحَدَۢا "}]