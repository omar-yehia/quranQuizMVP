const mainSuraId = 67;
const nearbySurasNames = {
    66: 'التَّحرِيم',
    67: 'المُلك',
    68: 'القَلَم',
    69: 'الحَاقة',
};
const choicesObjects = {
    "560": "ياايها النبي لم تحرم ما",
    "561": "ياايها الذين امنوا توبوا الي",
    "563": "واسروا قولكم او اجهروا به",
    "564": "فلما راوه زلفه سيئت وجوه",
};
const ayas = [{"aya_id": 5242, "coordinates": [[154, 152, 259, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ تَبَٰرَكَ ٱلَّذِي بِيَدِهِ ٱلۡمُلۡكُ وَهُوَ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٌ "}, {"aya_id": 5243, "coordinates": [[154, 88, 64, 34], [188, 88, 322, 34]], "aya_moshaf": "ٱلَّذِي خَلَقَ ٱلۡمَوۡتَ وَٱلۡحَيَوٰةَ لِيَبۡلُوَكُمۡ أَيُّكُمۡ أَحۡسَنُ عَمَلٗاۚ وَهُوَ ٱلۡعَزِيزُ ٱلۡغَفُورُ "}, {"aya_id": 5244, "coordinates": [[222, 88, 322, 34], [257, 188, 223, 34]], "aya_moshaf": "ٱلَّذِي خَلَقَ سَبۡعَ سَمَٰوَٰتٖ طِبَاقٗاۖ مَّا تَرَىٰ فِي خَلۡقِ ٱلرَّحۡمَٰنِ مِن تَفَٰوُتٖۖ فَٱرۡجِعِ ٱلۡبَصَرَ هَلۡ تَرَىٰ مِن فُطُورٖ "}, {"aya_id": 5245, "coordinates": [[257, 88, 100, 34], [291, 191, 220, 34]], "aya_moshaf": "ثُمَّ ٱرۡجِعِ ٱلۡبَصَرَ كَرَّتَيۡنِ يَنقَلِبۡ إِلَيۡكَ ٱلۡبَصَرُ خَاسِئٗا وَهُوَ حَسِيرٞ "}, {"aya_id": 5246, "coordinates": [[291, 88, 103, 34], [325, 88, 322, 34], [360, 346, 65, 34]], "aya_moshaf": "وَلَقَدۡ زَيَّنَّا ٱلسَّمَآءَ ٱلدُّنۡيَا بِمَصَٰبِيحَ وَجَعَلۡنَٰهَا رُجُومٗا لِّلشَّيَٰطِينِۖ وَأَعۡتَدۡنَا لَهُمۡ عَذَابَ ٱلسَّعِيرِ "}, {"aya_id": 5247, "coordinates": [[360, 88, 258, 34], [394, 387, 24, 34]], "aya_moshaf": "وَلِلَّذِينَ كَفَرُواْ بِرَبِّهِمۡ عَذَابُ جَهَنَّمَۖ وَبِئۡسَ ٱلۡمَصِيرُ "}, {"aya_id": 5248, "coordinates": [[394, 161, 226, 34]], "aya_moshaf": "إِذَآ أُلۡقُواْ فِيهَا سَمِعُواْ لَهَا شَهِيقٗا وَهِيَ تَفُورُ "}, {"aya_id": 5249, "coordinates": [[394, 88, 73, 34], [428, 88, 322, 34]], "aya_moshaf": "تَكَادُ تَمَيَّزُ مِنَ ٱلۡغَيۡظِۖ كُلَّمَآ أُلۡقِيَ فِيهَا فَوۡجٞ سَأَلَهُمۡ خَزَنَتُهَآ أَلَمۡ يَأۡتِكُمۡ نَذِيرٞ "}, {"aya_id": 5250, "coordinates": [[463, 88, 322, 34], [497, 294, 117, 34]], "aya_moshaf": "قَالُواْ بَلَىٰ قَدۡ جَآءَنَا نَذِيرٞ فَكَذَّبۡنَا وَقُلۡنَا مَا نَزَّلَ ٱللَّهُ مِن شَيۡءٍ إِنۡ أَنتُمۡ إِلَّا فِي ضَلَٰلٖ كَبِيرٖ "}, {"aya_id": 5251, "coordinates": [[497, 88, 206, 34], [531, 346, 65, 34]], "aya_moshaf": "وَقَالُواْ لَوۡ كُنَّا نَسۡمَعُ أَوۡ نَعۡقِلُ مَا كُنَّا فِيٓ أَصۡحَٰبِ ٱلسَّعِيرِ "}, {"aya_id": 5252, "coordinates": [[531, 88, 258, 34]], "aya_moshaf": "فَٱعۡتَرَفُواْ بِذَنۢبِهِمۡ فَسُحۡقٗا لِّأَصۡحَٰبِ ٱلسَّعِيرِ "}, {"aya_id": 5253, "coordinates": [[566, 88, 322, 34]], "aya_moshaf": "إِنَّ ٱلَّذِينَ يَخۡشَوۡنَ رَبَّهُم بِٱلۡغَيۡبِ لَهُم مَّغۡفِرَةٞ وَأَجۡرٞ كَبِيرٞ "}]