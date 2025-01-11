const nearbySurasNames = {
    6: 'الأنعَام',
    7: 'الأعرَاف',
    8: 'الأنفَال',
    9: 'التوبَة',
};
const choicesObjects = {
    "163": "ولو ان اهل القري امنوا",
    "164": "حقيق علي ان لا اقول",
    "166": "فاذا جاءتهم الحسنه قالوا لنا",
    "167": "وجاوزنا ببني اسرائيل البحر فاتوا",
};
const ayas = [{"aya_id": 1075, "coordinates": [[87, 207, 165, 34]], "aya_moshaf": "قَالُوٓاْ ءَامَنَّا بِرَبِّ ٱلۡعَٰلَمِينَ "}, {"aya_id": 1076, "coordinates": [[87, 83, 124, 34]], "aya_moshaf": "رَبِّ مُوسَىٰ وَهَٰرُونَ "}, {"aya_id": 1077, "coordinates": [[87, 49, 34, 34], [121, 49, 322, 34], [156, 101, 271, 34]], "aya_moshaf": "قَالَ فِرۡعَوۡنُ ءَامَنتُم بِهِۦ قَبۡلَ أَنۡ ءَاذَنَ لَكُمۡۖ إِنَّ هَٰذَا لَمَكۡرٞ مَّكَرۡتُمُوهُ فِي ٱلۡمَدِينَةِ لِتُخۡرِجُواْ مِنۡهَآ أَهۡلَهَاۖ فَسَوۡفَ تَعۡلَمُونَ "}, {"aya_id": 1078, "coordinates": [[156, 49, 52, 34], [190, 49, 322, 34]], "aya_moshaf": "لَأُقَطِّعَنَّ أَيۡدِيَكُمۡ وَأَرۡجُلَكُم مِّنۡ خِلَٰفٖ ثُمَّ لَأُصَلِّبَنَّكُمۡ أَجۡمَعِينَ "}, {"aya_id": 1079, "coordinates": [[224, 211, 161, 34]], "aya_moshaf": "قَالُوٓاْ إِنَّآ إِلَىٰ رَبِّنَا مُنقَلِبُونَ "}, {"aya_id": 1080, "coordinates": [[224, 49, 162, 34], [259, 49, 322, 34], [293, 345, 27, 34]], "aya_moshaf": "وَمَا تَنقِمُ مِنَّآ إِلَّآ أَنۡ ءَامَنَّا بِـَٔايَٰتِ رَبِّنَا لَمَّا جَآءَتۡنَاۚ رَبَّنَآ أَفۡرِغۡ عَلَيۡنَا صَبۡرٗا وَتَوَفَّنَا مُسۡلِمِينَ "}, {"aya_id": 1081, "coordinates": [[293, 49, 296, 34], [327, 49, 322, 34], [362, 153, 219, 34]], "aya_moshaf": "وَقَالَ ٱلۡمَلَأُ مِن قَوۡمِ فِرۡعَوۡنَ أَتَذَرُ مُوسَىٰ وَقَوۡمَهُۥ لِيُفۡسِدُواْ فِي ٱلۡأَرۡضِ وَيَذَرَكَ وَءَالِهَتَكَۚ قَالَ سَنُقَتِّلُ أَبۡنَآءَهُمۡ وَنَسۡتَحۡيِۦ نِسَآءَهُمۡ وَإِنَّا فَوۡقَهُمۡ قَٰهِرُونَ "}, {"aya_id": 1082, "coordinates": [[362, 49, 104, 34], [396, 49, 322, 34], [430, 123, 249, 34]], "aya_moshaf": "قَالَ مُوسَىٰ لِقَوۡمِهِ ٱسۡتَعِينُواْ بِٱللَّهِ وَٱصۡبِرُوٓاْۖ إِنَّ ٱلۡأَرۡضَ لِلَّهِ يُورِثُهَا مَن يَشَآءُ مِنۡ عِبَادِهِۦۖ وَٱلۡعَٰقِبَةُ لِلۡمُتَّقِينَ "}, {"aya_id": 1083, "coordinates": [[430, 49, 74, 34], [465, 49, 322, 34], [499, 49, 322, 34], [533, 197, 175, 34]], "aya_moshaf": "قَالُوٓاْ أُوذِينَا مِن قَبۡلِ أَن تَأۡتِيَنَا وَمِنۢ بَعۡدِ مَا جِئۡتَنَاۚ قَالَ عَسَىٰ رَبُّكُمۡ أَن يُهۡلِكَ عَدُوَّكُمۡ وَيَسۡتَخۡلِفَكُمۡ فِي ٱلۡأَرۡضِ فَيَنظُرَ كَيۡفَ تَعۡمَلُونَ "}, {"aya_id": 1084, "coordinates": [[533, 49, 148, 34], [568, 49, 322, 34]], "aya_moshaf": "وَلَقَدۡ أَخَذۡنَآ ءَالَ فِرۡعَوۡنَ بِٱلسِّنِينَ وَنَقۡصٖ مِّنَ ٱلثَّمَرَٰتِ لَعَلَّهُمۡ يَذَّكَّرُونَ "}]
const ayasRanges = [{"ayas_ids_range": [1075, 1084], "sura_id": 7}];
