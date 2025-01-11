const nearbySurasNames = {
    22: 'الحج',
    23: 'المؤمنُون',
    24: 'النور',
    25: 'الفُرقَان',
};
const choicesObjects = {
    "340": "الم تر ان الله سخر",
    "341": "ياايها الناس ضرب مثل فاستمعوا",
    "343": "وانزلنا من السماء ماء بقدر",
    "344": "فاذا استويت انت ومن معك",
};
const ayas = [{"aya_id": 2674, "coordinates": [[116, 288, 126, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ قَدۡ أَفۡلَحَ ٱلۡمُؤۡمِنُونَ "}, {"aya_id": 2675, "coordinates": [[116, 91, 197, 34]], "aya_moshaf": "ٱلَّذِينَ هُمۡ فِي صَلَاتِهِمۡ خَٰشِعُونَ "}, {"aya_id": 2676, "coordinates": [[151, 206, 208, 34]], "aya_moshaf": "وَٱلَّذِينَ هُمۡ عَنِ ٱللَّغۡوِ مُعۡرِضُونَ "}, {"aya_id": 2677, "coordinates": [[151, 91, 115, 34], [185, 338, 76, 34]], "aya_moshaf": "وَٱلَّذِينَ هُمۡ لِلزَّكَوٰةِ فَٰعِلُونَ "}, {"aya_id": 2678, "coordinates": [[185, 132, 206, 34]], "aya_moshaf": "وَٱلَّذِينَ هُمۡ لِفُرُوجِهِمۡ حَٰفِظُونَ "}, {"aya_id": 2679, "coordinates": [[185, 91, 41, 34], [219, 91, 322, 34]], "aya_moshaf": "إِلَّا عَلَىٰٓ أَزۡوَٰجِهِمۡ أَوۡ مَا مَلَكَتۡ أَيۡمَٰنُهُمۡ فَإِنَّهُمۡ غَيۡرُ مَلُومِينَ "}, {"aya_id": 2680, "coordinates": [[254, 151, 263, 34]], "aya_moshaf": "فَمَنِ ٱبۡتَغَىٰ وَرَآءَ ذَٰلِكَ فَأُوْلَٰٓئِكَ هُمُ ٱلۡعَادُونَ "}, {"aya_id": 2681, "coordinates": [[254, 91, 60, 34], [288, 230, 184, 34]], "aya_moshaf": "وَٱلَّذِينَ هُمۡ لِأَمَٰنَٰتِهِمۡ وَعَهۡدِهِمۡ رَٰعُونَ "}, {"aya_id": 2682, "coordinates": [[288, 91, 139, 34], [322, 332, 82, 34]], "aya_moshaf": "وَٱلَّذِينَ هُمۡ عَلَىٰ صَلَوَٰتِهِمۡ يُحَافِظُونَ "}, {"aya_id": 2683, "coordinates": [[322, 192, 140, 34]], "aya_moshaf": "أُوْلَٰٓئِكَ هُمُ ٱلۡوَٰرِثُونَ "}, {"aya_id": 2684, "coordinates": [[322, 91, 101, 34], [357, 240, 174, 34]], "aya_moshaf": "ٱلَّذِينَ يَرِثُونَ ٱلۡفِرۡدَوۡسَ هُمۡ فِيهَا خَٰلِدُونَ "}, {"aya_id": 2685, "coordinates": [[357, 91, 149, 34], [391, 305, 109, 34]], "aya_moshaf": "وَلَقَدۡ خَلَقۡنَا ٱلۡإِنسَٰنَ مِن سُلَٰلَةٖ مِّن طِينٖ "}, {"aya_id": 2686, "coordinates": [[391, 110, 195, 34]], "aya_moshaf": "ثُمَّ جَعَلۡنَٰهُ نُطۡفَةٗ فِي قَرَارٖ مَّكِينٖ "}, {"aya_id": 2687, "coordinates": [[391, 91, 19, 34], [425, 91, 322, 34], [460, 91, 322, 34], [494, 205, 209, 34]], "aya_moshaf": "ثُمَّ خَلَقۡنَا ٱلنُّطۡفَةَ عَلَقَةٗ فَخَلَقۡنَا ٱلۡعَلَقَةَ مُضۡغَةٗ فَخَلَقۡنَا ٱلۡمُضۡغَةَ عِظَٰمٗا فَكَسَوۡنَا ٱلۡعِظَٰمَ لَحۡمٗا ثُمَّ أَنشَأۡنَٰهُ خَلۡقًا ءَاخَرَۚ فَتَبَارَكَ ٱللَّهُ أَحۡسَنُ ٱلۡخَٰلِقِينَ "}, {"aya_id": 2688, "coordinates": [[494, 91, 114, 34], [528, 351, 63, 34]], "aya_moshaf": "ثُمَّ إِنَّكُم بَعۡدَ ذَٰلِكَ لَمَيِّتُونَ "}, {"aya_id": 2689, "coordinates": [[528, 140, 211, 34]], "aya_moshaf": "ثُمَّ إِنَّكُمۡ يَوۡمَ ٱلۡقِيَٰمَةِ تُبۡعَثُونَ "}, {"aya_id": 2690, "coordinates": [[528, 91, 49, 34], [563, 91, 322, 34]], "aya_moshaf": "وَلَقَدۡ خَلَقۡنَا فَوۡقَكُمۡ سَبۡعَ طَرَآئِقَ وَمَا كُنَّا عَنِ ٱلۡخَلۡقِ غَٰفِلِينَ "}]
const ayasRanges = [{"ayas_ids_range": [2674, 2690], "sura_id": 23}];
