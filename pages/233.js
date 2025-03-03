const nearbySurasNames = {
    10: 'يُونس',
    11: 'هُود',
    12: 'يُوسُف',
    13: 'الرَّعد',
};
const choicesObjects = {
    "231": "فلما جاء امرنا جعلنا عاليها",
    "232": "وياقوم لا يجرمنكم شقاقي ان",
    "234": "فلا تك في مريه مما",
    "235": "ولو شاء ربك لجعل الناس",
};
const ayas = [{"aya_id": 1571, "coordinates": [[94, 49, 322, 34], [128, 294, 78, 34]], "aya_moshaf": "يَقۡدُمُ قَوۡمَهُۥ يَوۡمَ ٱلۡقِيَٰمَةِ فَأَوۡرَدَهُمُ ٱلنَّارَۖ وَبِئۡسَ ٱلۡوِرۡدُ ٱلۡمَوۡرُودُ "}, {"aya_id": 1572, "coordinates": [[128, 49, 245, 34], [163, 251, 121, 34]], "aya_moshaf": "وَأُتۡبِعُواْ فِي هَٰذِهِۦ لَعۡنَةٗ وَيَوۡمَ ٱلۡقِيَٰمَةِۚ بِئۡسَ ٱلرِّفۡدُ ٱلۡمَرۡفُودُ "}, {"aya_id": 1573, "coordinates": [[163, 49, 202, 34], [197, 213, 159, 34]], "aya_moshaf": "ذَٰلِكَ مِنۡ أَنۢبَآءِ ٱلۡقُرَىٰ نَقُصُّهُۥ عَلَيۡكَۖ مِنۡهَا قَآئِمٞ وَحَصِيدٞ "}, {"aya_id": 1574, "coordinates": [[197, 49, 164, 34], [231, 49, 322, 34], [266, 49, 322, 34]], "aya_moshaf": "وَمَا ظَلَمۡنَٰهُمۡ وَلَٰكِن ظَلَمُوٓاْ أَنفُسَهُمۡۖ فَمَآ أَغۡنَتۡ عَنۡهُمۡ ءَالِهَتُهُمُ ٱلَّتِي يَدۡعُونَ مِن دُونِ ٱللَّهِ مِن شَيۡءٖ لَّمَّا جَآءَ أَمۡرُ رَبِّكَۖ وَمَا زَادُوهُمۡ غَيۡرَ تَتۡبِيبٖ "}, {"aya_id": 1575, "coordinates": [[300, 49, 322, 34], [334, 283, 89, 34]], "aya_moshaf": "وَكَذَٰلِكَ أَخۡذُ رَبِّكَ إِذَآ أَخَذَ ٱلۡقُرَىٰ وَهِيَ ظَٰلِمَةٌۚ إِنَّ أَخۡذَهُۥٓ أَلِيمٞ شَدِيدٌ "}, {"aya_id": 1576, "coordinates": [[334, 49, 234, 34], [369, 90, 282, 34]], "aya_moshaf": "إِنَّ فِي ذَٰلِكَ لَأٓيَةٗ لِّمَنۡ خَافَ عَذَابَ ٱلۡأٓخِرَةِۚ ذَٰلِكَ يَوۡمٞ مَّجۡمُوعٞ لَّهُ ٱلنَّاسُ وَذَٰلِكَ يَوۡمٞ مَّشۡهُودٞ "}, {"aya_id": 1577, "coordinates": [[369, 49, 41, 34], [403, 204, 168, 34]], "aya_moshaf": "وَمَا نُؤَخِّرُهُۥٓ إِلَّا لِأَجَلٖ مَّعۡدُودٖ "}, {"aya_id": 1578, "coordinates": [[403, 49, 155, 34], [437, 165, 207, 34]], "aya_moshaf": "يَوۡمَ يَأۡتِ لَا تَكَلَّمُ نَفۡسٌ إِلَّا بِإِذۡنِهِۦۚ فَمِنۡهُمۡ شَقِيّٞ وَسَعِيدٞ "}, {"aya_id": 1579, "coordinates": [[437, 49, 116, 34], [472, 198, 174, 34]], "aya_moshaf": "فَأَمَّا ٱلَّذِينَ شَقُواْ فَفِي ٱلنَّارِ لَهُمۡ فِيهَا زَفِيرٞ وَشَهِيقٌ "}, {"aya_id": 1580, "coordinates": [[472, 49, 149, 34], [506, 49, 322, 34], [540, 350, 22, 34]], "aya_moshaf": "خَٰلِدِينَ فِيهَا مَا دَامَتِ ٱلسَّمَٰوَٰتُ وَٱلۡأَرۡضُ إِلَّا مَا شَآءَ رَبُّكَۚ إِنَّ رَبَّكَ فَعَّالٞ لِّمَا يُرِيدُ "}, {"aya_id": 1581, "coordinates": [[540, 49, 301, 34], [575, 49, 322, 34]], "aya_moshaf": "۞ وَأَمَّا ٱلَّذِينَ سُعِدُواْ فَفِي ٱلۡجَنَّةِ خَٰلِدِينَ فِيهَا مَا دَامَتِ ٱلسَّمَٰوَٰتُ وَٱلۡأَرۡضُ إِلَّا مَا شَآءَ رَبُّكَۖ عَطَآءً غَيۡرَ مَجۡذُوذٖ "}]
const ayasRanges = [{"ayas_ids_range": [1571, 1581], "sura_id": 11}];
