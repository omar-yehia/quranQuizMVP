const mainSuraId = 23;
const nearbySurasNames = {
    22: 'الحج',
    23: 'المؤمنُون',
    24: 'النور',
    25: 'الفُرقَان',
};
const choicesObjects = {
    "345": "ما تسبق من امه اجلها",
    "346": "والذين يؤتون ما اتوا وقلوبهم",
    "348": "بل اتيناهم بالحق وانهم لكاذبون",
    "349": "الم تكن اياتي تتلي عليكم",
};
const ayas = [{"aya_id": 2748, "coordinates": [[87, 45, 322, 34], [121, 289, 79, 34]], "aya_moshaf": "۞ وَلَوۡ رَحِمۡنَٰهُمۡ وَكَشَفۡنَا مَا بِهِم مِّن ضُرّٖ لَّلَجُّواْ فِي طُغۡيَٰنِهِمۡ يَعۡمَهُونَ "}, {"aya_id": 2749, "coordinates": [[121, 45, 244, 34], [156, 270, 98, 34]], "aya_moshaf": "وَلَقَدۡ أَخَذۡنَٰهُم بِٱلۡعَذَابِ فَمَا ٱسۡتَكَانُواْ لِرَبِّهِمۡ وَمَا يَتَضَرَّعُونَ "}, {"aya_id": 2750, "coordinates": [[156, 45, 225, 34], [190, 245, 123, 34]], "aya_moshaf": "حَتَّىٰٓ إِذَا فَتَحۡنَا عَلَيۡهِم بَابٗا ذَا عَذَابٖ شَدِيدٍ إِذَا هُمۡ فِيهِ مُبۡلِسُونَ "}, {"aya_id": 2751, "coordinates": [[190, 45, 200, 34], [224, 192, 176, 34]], "aya_moshaf": "وَهُوَ ٱلَّذِيٓ أَنشَأَ لَكُمُ ٱلسَّمۡعَ وَٱلۡأَبۡصَٰرَ وَٱلۡأَفۡـِٔدَةَۚ قَلِيلٗا مَّا تَشۡكُرُونَ "}, {"aya_id": 2752, "coordinates": [[224, 45, 147, 34], [259, 263, 105, 34]], "aya_moshaf": "وَهُوَ ٱلَّذِي ذَرَأَكُمۡ فِي ٱلۡأَرۡضِ وَإِلَيۡهِ تُحۡشَرُونَ "}, {"aya_id": 2753, "coordinates": [[259, 45, 218, 34], [293, 179, 189, 34]], "aya_moshaf": "وَهُوَ ٱلَّذِي يُحۡيِۦ وَيُمِيتُ وَلَهُ ٱخۡتِلَٰفُ ٱلَّيۡلِ وَٱلنَّهَارِۚ أَفَلَا تَعۡقِلُونَ "}, {"aya_id": 2754, "coordinates": [[293, 45, 134, 34], [327, 280, 88, 34]], "aya_moshaf": "بَلۡ قَالُواْ مِثۡلَ مَا قَالَ ٱلۡأَوَّلُونَ "}, {"aya_id": 2755, "coordinates": [[327, 45, 235, 34], [362, 292, 76, 34]], "aya_moshaf": "قَالُوٓاْ أَءِذَا مِتۡنَا وَكُنَّا تُرَابٗا وَعِظَٰمًا أَءِنَّا لَمَبۡعُوثُونَ "}, {"aya_id": 2756, "coordinates": [[362, 45, 247, 34], [396, 216, 152, 34]], "aya_moshaf": "لَقَدۡ وُعِدۡنَا نَحۡنُ وَءَابَآؤُنَا هَٰذَا مِن قَبۡلُ إِنۡ هَٰذَآ إِلَّآ أَسَٰطِيرُ ٱلۡأَوَّلِينَ "}, {"aya_id": 2757, "coordinates": [[396, 45, 171, 34], [430, 225, 143, 34]], "aya_moshaf": "قُل لِّمَنِ ٱلۡأَرۡضُ وَمَن فِيهَآ إِن كُنتُمۡ تَعۡلَمُونَ "}, {"aya_id": 2758, "coordinates": [[430, 45, 180, 34], [465, 345, 23, 34]], "aya_moshaf": "سَيَقُولُونَ لِلَّهِۚ قُلۡ أَفَلَا تَذَكَّرُونَ "}, {"aya_id": 2759, "coordinates": [[465, 45, 300, 34], [499, 342, 26, 34]], "aya_moshaf": "قُلۡ مَن رَّبُّ ٱلسَّمَٰوَٰتِ ٱلسَّبۡعِ وَرَبُّ ٱلۡعَرۡشِ ٱلۡعَظِيمِ "}, {"aya_id": 2760, "coordinates": [[499, 109, 233, 34]], "aya_moshaf": "سَيَقُولُونَ لِلَّهِۚ قُلۡ أَفَلَا تَتَّقُونَ "}, {"aya_id": 2761, "coordinates": [[499, 45, 64, 34], [533, 45, 322, 34], [568, 267, 101, 34]], "aya_moshaf": "قُلۡ مَنۢ بِيَدِهِۦ مَلَكُوتُ كُلِّ شَيۡءٖ وَهُوَ يُجِيرُ وَلَا يُجَارُ عَلَيۡهِ إِن كُنتُمۡ تَعۡلَمُونَ "}, {"aya_id": 2762, "coordinates": [[568, 45, 222, 34]], "aya_moshaf": "سَيَقُولُونَ لِلَّهِۚ قُلۡ فَأَنَّىٰ تُسۡحَرُونَ "}]