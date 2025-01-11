const nearbySurasNames = {
    12: 'يُوسُف',
    13: 'الرَّعد',
    14: 'إبراهِيم',
    15: 'الحِجر',
};
const choicesObjects = {
    "248": "وما تسالهم عليه من اجر",
    "249": "المر تلك ايات الكتاب والذي",
    "251": "له دعوه الحق والذين يدعون",
    "252": "افمن يعلم انما انزل اليك",
};
const ayas = [{"aya_id": 1713, "coordinates": [[87, 89, 322, 34], [121, 89, 322, 34], [156, 227, 185, 34]], "aya_moshaf": "وَيَسۡتَعۡجِلُونَكَ بِٱلسَّيِّئَةِ قَبۡلَ ٱلۡحَسَنَةِ وَقَدۡ خَلَتۡ مِن قَبۡلِهِمُ ٱلۡمَثُلَٰتُۗ وَإِنَّ رَبَّكَ لَذُو مَغۡفِرَةٖ لِّلنَّاسِ عَلَىٰ ظُلۡمِهِمۡۖ وَإِنَّ رَبَّكَ لَشَدِيدُ ٱلۡعِقَابِ "}, {"aya_id": 1714, "coordinates": [[156, 89, 138, 34], [190, 89, 322, 34], [224, 385, 27, 34]], "aya_moshaf": "وَيَقُولُ ٱلَّذِينَ كَفَرُواْ لَوۡلَآ أُنزِلَ عَلَيۡهِ ءَايَةٞ مِّن رَّبِّهِۦٓۗ إِنَّمَآ أَنتَ مُنذِرٞۖ وَلِكُلِّ قَوۡمٍ هَادٍ "}, {"aya_id": 1715, "coordinates": [[224, 89, 296, 34], [259, 170, 242, 34]], "aya_moshaf": "ٱللَّهُ يَعۡلَمُ مَا تَحۡمِلُ كُلُّ أُنثَىٰ وَمَا تَغِيضُ ٱلۡأَرۡحَامُ وَمَا تَزۡدَادُۚ وَكُلُّ شَيۡءٍ عِندَهُۥ بِمِقۡدَارٍ "}, {"aya_id": 1716, "coordinates": [[259, 89, 81, 34], [293, 209, 203, 34]], "aya_moshaf": "عَٰلِمُ ٱلۡغَيۡبِ وَٱلشَّهَٰدَةِ ٱلۡكَبِيرُ ٱلۡمُتَعَالِ "}, {"aya_id": 1717, "coordinates": [[293, 89, 120, 34], [327, 89, 322, 34], [362, 352, 60, 34]], "aya_moshaf": "سَوَآءٞ مِّنكُم مَّنۡ أَسَرَّ ٱلۡقَوۡلَ وَمَن جَهَرَ بِهِۦ وَمَنۡ هُوَ مُسۡتَخۡفِۭ بِٱلَّيۡلِ وَسَارِبُۢ بِٱلنَّهَارِ "}, {"aya_id": 1718, "coordinates": [[362, 89, 263, 34], [396, 89, 322, 34], [430, 89, 322, 34], [465, 365, 47, 34]], "aya_moshaf": "لَهُۥ مُعَقِّبَٰتٞ مِّنۢ بَيۡنِ يَدَيۡهِ وَمِنۡ خَلۡفِهِۦ يَحۡفَظُونَهُۥ مِنۡ أَمۡرِ ٱللَّهِۗ إِنَّ ٱللَّهَ لَا يُغَيِّرُ مَا بِقَوۡمٍ حَتَّىٰ يُغَيِّرُواْ مَا بِأَنفُسِهِمۡۗ وَإِذَآ أَرَادَ ٱللَّهُ بِقَوۡمٖ سُوٓءٗا فَلَا مَرَدَّ لَهُۥۚ وَمَا لَهُم مِّن دُونِهِۦ مِن وَالٍ "}, {"aya_id": 1719, "coordinates": [[465, 89, 276, 34], [499, 238, 174, 34]], "aya_moshaf": "هُوَ ٱلَّذِي يُرِيكُمُ ٱلۡبَرۡقَ خَوۡفٗا وَطَمَعٗا وَيُنشِئُ ٱلسَّحَابَ ٱلثِّقَالَ "}, {"aya_id": 1720, "coordinates": [[499, 89, 149, 34], [533, 89, 322, 34], [568, 89, 322, 34]], "aya_moshaf": "وَيُسَبِّحُ ٱلرَّعۡدُ بِحَمۡدِهِۦ وَٱلۡمَلَٰٓئِكَةُ مِنۡ خِيفَتِهِۦ وَيُرۡسِلُ ٱلصَّوَٰعِقَ فَيُصِيبُ بِهَا مَن يَشَآءُ وَهُمۡ يُجَٰدِلُونَ فِي ٱللَّهِ وَهُوَ شَدِيدُ ٱلۡمِحَالِ "}]
const ayasRanges = [{"ayas_ids_range": [1713, 1720], "sura_id": 13}];
