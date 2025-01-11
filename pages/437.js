const mainSuraId = 35;
const nearbySurasNames = {
    34: 'سَبإ',
    35: 'فَاطِر',
    36: 'يسٓ',
    37: 'الصَّافَات',
};
const choicesObjects = {
    "435": "وان يكذبوك فقد كذبت رسل",
    "436": "وما يستوي البحران هذا عذب",
    "438": "والذي اوحينا اليك من الكتاب",
    "439": "هو الذي جعلكم خلائف في",
};
const ayas = [{"aya_id": 3679, "coordinates": [[87, 197, 181, 34]], "aya_moshaf": "وَمَا يَسۡتَوِي ٱلۡأَعۡمَىٰ وَٱلۡبَصِيرُ "}, {"aya_id": 3680, "coordinates": [[87, 56, 141, 34], [121, 349, 29, 34]], "aya_moshaf": "وَلَا ٱلظُّلُمَٰتُ وَلَا ٱلنُّورُ "}, {"aya_id": 3681, "coordinates": [[121, 209, 140, 34]], "aya_moshaf": "وَلَا ٱلظِّلُّ وَلَا ٱلۡحَرُورُ "}, {"aya_id": 3682, "coordinates": [[121, 56, 153, 34], [156, 82, 296, 34]], "aya_moshaf": "وَمَا يَسۡتَوِي ٱلۡأَحۡيَآءُ وَلَا ٱلۡأَمۡوَٰتُۚ إِنَّ ٱللَّهَ يُسۡمِعُ مَن يَشَآءُۖ وَمَآ أَنتَ بِمُسۡمِعٖ مَّن فِي ٱلۡقُبُورِ "}, {"aya_id": 3683, "coordinates": [[156, 56, 26, 34], [190, 284, 94, 34]], "aya_moshaf": "إِنۡ أَنتَ إِلَّا نَذِيرٌ "}, {"aya_id": 3684, "coordinates": [[190, 56, 228, 34], [224, 238, 140, 34]], "aya_moshaf": "إِنَّآ أَرۡسَلۡنَٰكَ بِٱلۡحَقِّ بَشِيرٗا وَنَذِيرٗاۚ وَإِن مِّنۡ أُمَّةٍ إِلَّا خَلَا فِيهَا نَذِيرٞ "}, {"aya_id": 3685, "coordinates": [[224, 56, 182, 34], [259, 56, 322, 34], [293, 318, 60, 34]], "aya_moshaf": "وَإِن يُكَذِّبُوكَ فَقَدۡ كَذَّبَ ٱلَّذِينَ مِن قَبۡلِهِمۡ جَآءَتۡهُمۡ رُسُلُهُم بِٱلۡبَيِّنَٰتِ وَبِٱلزُّبُرِ وَبِٱلۡكِتَٰبِ ٱلۡمُنِيرِ "}, {"aya_id": 3686, "coordinates": [[293, 56, 262, 34]], "aya_moshaf": "ثُمَّ أَخَذۡتُ ٱلَّذِينَ كَفَرُواْۖ فَكَيۡفَ كَانَ نَكِيرِ "}, {"aya_id": 3687, "coordinates": [[327, 56, 322, 34], [362, 56, 322, 34], [396, 269, 109, 34]], "aya_moshaf": "أَلَمۡ تَرَ أَنَّ ٱللَّهَ أَنزَلَ مِنَ ٱلسَّمَآءِ مَآءٗ فَأَخۡرَجۡنَا بِهِۦ ثَمَرَٰتٖ مُّخۡتَلِفًا أَلۡوَٰنُهَاۚ وَمِنَ ٱلۡجِبَالِ جُدَدُۢ بِيضٞ وَحُمۡرٞ مُّخۡتَلِفٌ أَلۡوَٰنُهَا وَغَرَابِيبُ سُودٞ "}, {"aya_id": 3688, "coordinates": [[396, 56, 213, 34], [430, 56, 322, 34], [465, 226, 152, 34]], "aya_moshaf": "وَمِنَ ٱلنَّاسِ وَٱلدَّوَآبِّ وَٱلۡأَنۡعَٰمِ مُخۡتَلِفٌ أَلۡوَٰنُهُۥ كَذَٰلِكَۗ إِنَّمَا يَخۡشَى ٱللَّهَ مِنۡ عِبَادِهِ ٱلۡعُلَمَٰٓؤُاْۗ إِنَّ ٱللَّهَ عَزِيزٌ غَفُورٌ "}, {"aya_id": 3689, "coordinates": [[465, 56, 170, 34], [499, 56, 322, 34], [533, 190, 188, 34]], "aya_moshaf": "إِنَّ ٱلَّذِينَ يَتۡلُونَ كِتَٰبَ ٱللَّهِ وَأَقَامُواْ ٱلصَّلَوٰةَ وَأَنفَقُواْ مِمَّا رَزَقۡنَٰهُمۡ سِرّٗا وَعَلَانِيَةٗ يَرۡجُونَ تِجَٰرَةٗ لَّن تَبُورَ "}, {"aya_id": 3690, "coordinates": [[533, 56, 134, 34], [568, 56, 322, 34]], "aya_moshaf": "لِيُوَفِّيَهُمۡ أُجُورَهُمۡ وَيَزِيدَهُم مِّن فَضۡلِهِۦٓۚ إِنَّهُۥ غَفُورٞ شَكُورٞ "}]