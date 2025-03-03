const nearbySurasNames = {
    15: 'الحِجر',
    16: 'النَّحل',
    17: 'الإسرَاء',
    18: 'الكَهف',
};
const choicesObjects = {
    "278": "ولا تتخذوا ايمانكم دخلا بينكم",
    "279": "ولقد نعلم انهم يقولون انما",
    "281": "ثم ان ربك للذين عملوا",
    "282": "سبحان الذي اسري بعبده ليلا",
};
const ayas = [{"aya_id": 2012, "coordinates": [[85, 92, 322, 34], [119, 186, 229, 34]], "aya_moshaf": "۞ يَوۡمَ تَأۡتِي كُلُّ نَفۡسٖ تُجَٰدِلُ عَن نَّفۡسِهَا وَتُوَفَّىٰ كُلُّ نَفۡسٖ مَّا عَمِلَتۡ وَهُمۡ لَا يُظۡلَمُونَ "}, {"aya_id": 2013, "coordinates": [[119, 92, 94, 34], [154, 92, 322, 34], [188, 92, 322, 34], [222, 137, 278, 34]], "aya_moshaf": "وَضَرَبَ ٱللَّهُ مَثَلٗا قَرۡيَةٗ كَانَتۡ ءَامِنَةٗ مُّطۡمَئِنَّةٗ يَأۡتِيهَا رِزۡقُهَا رَغَدٗا مِّن كُلِّ مَكَانٖ فَكَفَرَتۡ بِأَنۡعُمِ ٱللَّهِ فَأَذَٰقَهَا ٱللَّهُ لِبَاسَ ٱلۡجُوعِ وَٱلۡخَوۡفِ بِمَا كَانُواْ يَصۡنَعُونَ "}, {"aya_id": 2014, "coordinates": [[222, 92, 45, 34], [257, 92, 322, 34], [291, 323, 92, 34]], "aya_moshaf": "وَلَقَدۡ جَآءَهُمۡ رَسُولٞ مِّنۡهُمۡ فَكَذَّبُوهُ فَأَخَذَهُمُ ٱلۡعَذَابُ وَهُمۡ ظَٰلِمُونَ "}, {"aya_id": 2015, "coordinates": [[291, 92, 231, 34], [325, 92, 322, 34]], "aya_moshaf": "فَكُلُواْ مِمَّا رَزَقَكُمُ ٱللَّهُ حَلَٰلٗا طَيِّبٗا وَٱشۡكُرُواْ نِعۡمَتَ ٱللَّهِ إِن كُنتُمۡ إِيَّاهُ تَعۡبُدُونَ "}, {"aya_id": 2016, "coordinates": [[360, 92, 322, 34], [394, 92, 322, 34], [428, 295, 120, 34]], "aya_moshaf": "إِنَّمَا حَرَّمَ عَلَيۡكُمُ ٱلۡمَيۡتَةَ وَٱلدَّمَ وَلَحۡمَ ٱلۡخِنزِيرِ وَمَآ أُهِلَّ لِغَيۡرِ ٱللَّهِ بِهِۦۖ فَمَنِ ٱضۡطُرَّ غَيۡرَ بَاغٖ وَلَا عَادٖ فَإِنَّ ٱللَّهَ غَفُورٞ رَّحِيمٞ "}, {"aya_id": 2017, "coordinates": [[428, 92, 203, 34], [463, 92, 322, 34], [497, 159, 256, 34]], "aya_moshaf": "وَلَا تَقُولُواْ لِمَا تَصِفُ أَلۡسِنَتُكُمُ ٱلۡكَذِبَ هَٰذَا حَلَٰلٞ وَهَٰذَا حَرَامٞ لِّتَفۡتَرُواْ عَلَى ٱللَّهِ ٱلۡكَذِبَۚ إِنَّ ٱلَّذِينَ يَفۡتَرُونَ عَلَى ٱللَّهِ ٱلۡكَذِبَ لَا يُفۡلِحُونَ "}, {"aya_id": 2018, "coordinates": [[497, 92, 67, 34], [531, 306, 109, 34]], "aya_moshaf": "مَتَٰعٞ قَلِيلٞ وَلَهُمۡ عَذَابٌ أَلِيمٞ "}, {"aya_id": 2019, "coordinates": [[531, 92, 214, 34], [566, 92, 322, 34]], "aya_moshaf": "وَعَلَى ٱلَّذِينَ هَادُواْ حَرَّمۡنَا مَا قَصَصۡنَا عَلَيۡكَ مِن قَبۡلُۖ وَمَا ظَلَمۡنَٰهُمۡ وَلَٰكِن كَانُوٓاْ أَنفُسَهُمۡ يَظۡلِمُونَ "}]
const ayasRanges = [{"ayas_ids_range": [2012, 2019], "sura_id": 16}];
