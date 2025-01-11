const mainSuraId = 50;
const nearbySurasNames = {
    49: 'الحُجُرَات',
    50: 'قٓ',
    51: 'الذَّاريَات',
    52: 'الطُّور',
};
const choicesObjects = {
    "518": "ق والقران المجيد",
    "519": "ولقد خلقنا الانسان ونعلم ما",
    "521": "والسماء ذات الحبك",
    "522": "قال فما خطبكم ايها المرسلون",
};
const ayas = [{"aya_id": 4666, "coordinates": [[84, 91, 322, 34], [118, 262, 152, 34]], "aya_moshaf": "وَكَمۡ أَهۡلَكۡنَا قَبۡلَهُم مِّن قَرۡنٍ هُمۡ أَشَدُّ مِنۡهُم بَطۡشٗا فَنَقَّبُواْ فِي ٱلۡبِلَٰدِ هَلۡ مِن مَّحِيصٍ "}, {"aya_id": 4667, "coordinates": [[118, 91, 171, 34], [153, 188, 226, 34]], "aya_moshaf": "إِنَّ فِي ذَٰلِكَ لَذِكۡرَىٰ لِمَن كَانَ لَهُۥ قَلۡبٌ أَوۡ أَلۡقَى ٱلسَّمۡعَ وَهُوَ شَهِيدٞ "}, {"aya_id": 4668, "coordinates": [[153, 91, 97, 34], [187, 91, 322, 34], [221, 329, 85, 34]], "aya_moshaf": "وَلَقَدۡ خَلَقۡنَا ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ وَمَا بَيۡنَهُمَا فِي سِتَّةِ أَيَّامٖ وَمَا مَسَّنَا مِن لُّغُوبٖ "}, {"aya_id": 4669, "coordinates": [[221, 91, 238, 34], [256, 199, 215, 34]], "aya_moshaf": "فَٱصۡبِرۡ عَلَىٰ مَا يَقُولُونَ وَسَبِّحۡ بِحَمۡدِ رَبِّكَ قَبۡلَ طُلُوعِ ٱلشَّمۡسِ وَقَبۡلَ ٱلۡغُرُوبِ "}, {"aya_id": 4670, "coordinates": [[256, 91, 108, 34], [290, 306, 108, 34]], "aya_moshaf": "وَمِنَ ٱلَّيۡلِ فَسَبِّحۡهُ وَأَدۡبَٰرَ ٱلسُّجُودِ "}, {"aya_id": 4671, "coordinates": [[290, 91, 215, 34], [324, 390, 24, 34]], "aya_moshaf": "وَٱسۡتَمِعۡ يَوۡمَ يُنَادِ ٱلۡمُنَادِ مِن مَّكَانٖ قَرِيبٖ "}, {"aya_id": 4672, "coordinates": [[324, 123, 267, 34]], "aya_moshaf": "يَوۡمَ يَسۡمَعُونَ ٱلصَّيۡحَةَ بِٱلۡحَقِّۚ ذَٰلِكَ يَوۡمُ ٱلۡخُرُوجِ "}, {"aya_id": 4673, "coordinates": [[324, 91, 32, 34], [359, 217, 197, 34]], "aya_moshaf": "إِنَّا نَحۡنُ نُحۡيِۦ وَنُمِيتُ وَإِلَيۡنَا ٱلۡمَصِيرُ "}, {"aya_id": 4674, "coordinates": [[359, 91, 126, 34], [393, 193, 221, 34]], "aya_moshaf": "يَوۡمَ تَشَقَّقُ ٱلۡأَرۡضُ عَنۡهُمۡ سِرَاعٗاۚ ذَٰلِكَ حَشۡرٌ عَلَيۡنَا يَسِيرٞ "}, {"aya_id": 4675, "coordinates": [[393, 91, 102, 34], [427, 91, 322, 34]], "aya_moshaf": "نَّحۡنُ أَعۡلَمُ بِمَا يَقُولُونَۖ وَمَآ أَنتَ عَلَيۡهِم بِجَبَّارٖۖ فَذَكِّرۡ بِٱلۡقُرۡءَانِ مَن يَخَافُ وَعِيدِ "}, {"aya_id": 4676, "coordinates": [[530, 305, 109, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ وَٱلذَّٰرِيَٰتِ ذَرۡوٗا "}, {"aya_id": 4677, "coordinates": [[530, 200, 105, 34]], "aya_moshaf": "فَٱلۡحَٰمِلَٰتِ وِقۡرٗا "}, {"aya_id": 4678, "coordinates": [[530, 91, 109, 34]], "aya_moshaf": "فَٱلۡجَٰرِيَٰتِ يُسۡرٗا "}, {"aya_id": 4679, "coordinates": [[565, 305, 109, 34]], "aya_moshaf": "فَٱلۡمُقَسِّمَٰتِ أَمۡرًا "}, {"aya_id": 4680, "coordinates": [[565, 188, 117, 34]], "aya_moshaf": "إِنَّمَا تُوعَدُونَ لَصَادِقٞ "}, {"aya_id": 4681, "coordinates": [[565, 91, 97, 34]], "aya_moshaf": "وَإِنَّ ٱلدِّينَ لَوَٰقِعٞ "}]