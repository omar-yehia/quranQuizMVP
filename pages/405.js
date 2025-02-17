const nearbySurasNames = {
    29: 'العَنكبُوت',
    30: 'الرُّوم',
    31: 'لُقمَان',
    32: 'السَّجدة',
};
const choicesObjects = {
    "403": "ويستعجلونك بالعذاب ولولا اجل مسمي",
    "404": "وما هذه الحياه الدنيا الا",
    "406": "واما الذين كفروا وكذبوا باياتنا",
    "407": "ومن اياته ان تقوم السماء",
};
const ayas = [{"aya_id": 3415, "coordinates": [[87, 53, 322, 34], [121, 348, 27, 34]], "aya_moshaf": "وَعۡدَ ٱللَّهِۖ لَا يُخۡلِفُ ٱللَّهُ وَعۡدَهُۥ وَلَٰكِنَّ أَكۡثَرَ ٱلنَّاسِ لَا يَعۡلَمُونَ "}, {"aya_id": 3416, "coordinates": [[121, 53, 295, 34], [156, 352, 23, 34]], "aya_moshaf": "يَعۡلَمُونَ ظَٰهِرٗا مِّنَ ٱلۡحَيَوٰةِ ٱلدُّنۡيَا وَهُمۡ عَنِ ٱلۡأٓخِرَةِ هُمۡ غَٰفِلُونَ "}, {"aya_id": 3417, "coordinates": [[156, 53, 299, 34], [190, 53, 322, 34], [224, 224, 151, 34]], "aya_moshaf": "أَوَلَمۡ يَتَفَكَّرُواْ فِيٓ أَنفُسِهِمۗ مَّا خَلَقَ ٱللَّهُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ وَمَا بَيۡنَهُمَآ إِلَّا بِٱلۡحَقِّ وَأَجَلٖ مُّسَمّٗىۗ وَإِنَّ كَثِيرٗا مِّنَ ٱلنَّاسِ بِلِقَآيِٕ رَبِّهِمۡ لَكَٰفِرُونَ "}, {"aya_id": 3418, "coordinates": [[224, 53, 171, 34], [259, 53, 322, 34], [293, 53, 322, 34], [327, 53, 322, 34], [362, 253, 122, 34]], "aya_moshaf": "أَوَلَمۡ يَسِيرُواْ فِي ٱلۡأَرۡضِ فَيَنظُرُواْ كَيۡفَ كَانَ عَٰقِبَةُ ٱلَّذِينَ مِن قَبۡلِهِمۡۚ كَانُوٓاْ أَشَدَّ مِنۡهُمۡ قُوَّةٗ وَأَثَارُواْ ٱلۡأَرۡضَ وَعَمَرُوهَآ أَكۡثَرَ مِمَّا عَمَرُوهَا وَجَآءَتۡهُمۡ رُسُلُهُم بِٱلۡبَيِّنَٰتِۖ فَمَا كَانَ ٱللَّهُ لِيَظۡلِمَهُمۡ وَلَٰكِن كَانُوٓاْ أَنفُسَهُمۡ يَظۡلِمُونَ "}, {"aya_id": 3419, "coordinates": [[362, 53, 200, 34], [396, 85, 290, 34]], "aya_moshaf": "ثُمَّ كَانَ عَٰقِبَةَ ٱلَّذِينَ أَسَٰٓـُٔواْ ٱلسُّوٓأَىٰٓ أَن كَذَّبُواْ بِـَٔايَٰتِ ٱللَّهِ وَكَانُواْ بِهَا يَسۡتَهۡزِءُونَ "}, {"aya_id": 3420, "coordinates": [[396, 53, 32, 34], [430, 119, 256, 34]], "aya_moshaf": "ٱللَّهُ يَبۡدَؤُاْ ٱلۡخَلۡقَ ثُمَّ يُعِيدُهُۥ ثُمَّ إِلَيۡهِ تُرۡجَعُونَ "}, {"aya_id": 3421, "coordinates": [[430, 53, 66, 34], [465, 220, 155, 34]], "aya_moshaf": "وَيَوۡمَ تَقُومُ ٱلسَّاعَةُ يُبۡلِسُ ٱلۡمُجۡرِمُونَ "}, {"aya_id": 3422, "coordinates": [[465, 53, 167, 34], [499, 97, 278, 34]], "aya_moshaf": "وَلَمۡ يَكُن لَّهُم مِّن شُرَكَآئِهِمۡ شُفَعَٰٓؤُاْ وَكَانُواْ بِشُرَكَآئِهِمۡ كَٰفِرِينَ "}, {"aya_id": 3423, "coordinates": [[499, 53, 44, 34], [533, 177, 198, 34]], "aya_moshaf": "وَيَوۡمَ تَقُومُ ٱلسَّاعَةُ يَوۡمَئِذٖ يَتَفَرَّقُونَ "}, {"aya_id": 3424, "coordinates": [[533, 53, 124, 34], [568, 53, 322, 34]], "aya_moshaf": "فَأَمَّا ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ فَهُمۡ فِي رَوۡضَةٖ يُحۡبَرُونَ "}]
const ayasRanges = [{"ayas_ids_range": [3415, 3424], "sura_id": 30}];
