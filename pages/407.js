const mainSuraId = 30;
const nearbySurasNames = {
    29: 'العَنكبُوت',
    30: 'الرُّوم',
    31: 'لُقمَان',
    32: 'السَّجدة',
};
const choicesObjects = {
    "405": "وعد الله لا يخلف الله",
    "406": "واما الذين كفروا وكذبوا باياتنا",
    "408": "واذا مس الناس ضر دعوا",
    "409": "قل سيروا في الارض فانظروا",
};
const ayas = [{"aya_id": 3434, "coordinates": [[87, 49, 322, 34], [121, 171, 201, 34]], "aya_moshaf": "وَمِنۡ ءَايَٰتِهِۦٓ أَن تَقُومَ ٱلسَّمَآءُ وَٱلۡأَرۡضُ بِأَمۡرِهِۦۚ ثُمَّ إِذَا دَعَاكُمۡ دَعۡوَةٗ مِّنَ ٱلۡأَرۡضِ إِذَآ أَنتُمۡ تَخۡرُجُونَ "}, {"aya_id": 3435, "coordinates": [[121, 49, 122, 34], [156, 196, 176, 34]], "aya_moshaf": "وَلَهُۥ مَن فِي ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۖ كُلّٞ لَّهُۥ قَٰنِتُونَ "}, {"aya_id": 3436, "coordinates": [[156, 49, 147, 34], [190, 49, 322, 34], [224, 175, 197, 34]], "aya_moshaf": "وَهُوَ ٱلَّذِي يَبۡدَؤُاْ ٱلۡخَلۡقَ ثُمَّ يُعِيدُهُۥ وَهُوَ أَهۡوَنُ عَلَيۡهِۚ وَلَهُ ٱلۡمَثَلُ ٱلۡأَعۡلَىٰ فِي ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۚ وَهُوَ ٱلۡعَزِيزُ ٱلۡحَكِيمُ "}, {"aya_id": 3437, "coordinates": [[224, 49, 126, 34], [259, 49, 322, 34], [293, 49, 322, 34], [327, 49, 322, 34]], "aya_moshaf": "ضَرَبَ لَكُم مَّثَلٗا مِّنۡ أَنفُسِكُمۡۖ هَل لَّكُم مِّن مَّا مَلَكَتۡ أَيۡمَٰنُكُم مِّن شُرَكَآءَ فِي مَا رَزَقۡنَٰكُمۡ فَأَنتُمۡ فِيهِ سَوَآءٞ تَخَافُونَهُمۡ كَخِيفَتِكُمۡ أَنفُسَكُمۡۚ كَذَٰلِكَ نُفَصِّلُ ٱلۡأٓيَٰتِ لِقَوۡمٖ يَعۡقِلُونَ "}, {"aya_id": 3438, "coordinates": [[362, 49, 322, 34], [396, 166, 206, 34]], "aya_moshaf": "بَلِ ٱتَّبَعَ ٱلَّذِينَ ظَلَمُوٓاْ أَهۡوَآءَهُم بِغَيۡرِ عِلۡمٖۖ فَمَن يَهۡدِي مَنۡ أَضَلَّ ٱللَّهُۖ وَمَا لَهُم مِّن نَّٰصِرِينَ "}, {"aya_id": 3439, "coordinates": [[396, 49, 117, 34], [430, 49, 322, 34], [465, 49, 322, 34], [499, 283, 89, 34]], "aya_moshaf": "فَأَقِمۡ وَجۡهَكَ لِلدِّينِ حَنِيفٗاۚ فِطۡرَتَ ٱللَّهِ ٱلَّتِي فَطَرَ ٱلنَّاسَ عَلَيۡهَاۚ لَا تَبۡدِيلَ لِخَلۡقِ ٱللَّهِۚ ذَٰلِكَ ٱلدِّينُ ٱلۡقَيِّمُ وَلَٰكِنَّ أَكۡثَرَ ٱلنَّاسِ لَا يَعۡلَمُونَ "}, {"aya_id": 3440, "coordinates": [[499, 49, 234, 34], [533, 176, 196, 34]], "aya_moshaf": "۞ مُنِيبِينَ إِلَيۡهِ وَٱتَّقُوهُ وَأَقِيمُواْ ٱلصَّلَوٰةَ وَلَا تَكُونُواْ مِنَ ٱلۡمُشۡرِكِينَ "}, {"aya_id": 3441, "coordinates": [[533, 49, 127, 34], [568, 49, 322, 34]], "aya_moshaf": "مِنَ ٱلَّذِينَ فَرَّقُواْ دِينَهُمۡ وَكَانُواْ شِيَعٗاۖ كُلُّ حِزۡبِۭ بِمَا لَدَيۡهِمۡ فَرِحُونَ "}]