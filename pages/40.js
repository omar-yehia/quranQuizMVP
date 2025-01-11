const nearbySurasNames = {
    1: 'الفَاتِحة',
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
};
const choicesObjects = {
    "38": "والذين يتوفون منكم ويذرون ازواجا",
    "39": "حافظوا علي الصلوات والصلاه الوسطي",
    "41": "فلما فصل طالوت بالجنود قال",
    "42": "تلك الرسل فضلنا بعضهم علي",
};
const ayas = [{"aya_id": 253, "coordinates": [[80, 85, 322, 34], [114, 85, 322, 34], [149, 85, 322, 34], [183, 85, 322, 34], [217, 85, 322, 34], [252, 134, 274, 34]], "aya_moshaf": "أَلَمۡ تَرَ إِلَى ٱلۡمَلَإِ مِنۢ بَنِيٓ إِسۡرَٰٓءِيلَ مِنۢ بَعۡدِ مُوسَىٰٓ إِذۡ قَالُواْ لِنَبِيّٖ لَّهُمُ ٱبۡعَثۡ لَنَا مَلِكٗا نُّقَٰتِلۡ فِي سَبِيلِ ٱللَّهِۖ قَالَ هَلۡ عَسَيۡتُمۡ إِن كُتِبَ عَلَيۡكُمُ ٱلۡقِتَالُ أَلَّا تُقَٰتِلُواْۖ قَالُواْ وَمَا لَنَآ أَلَّا نُقَٰتِلَ فِي سَبِيلِ ٱللَّهِ وَقَدۡ أُخۡرِجۡنَا مِن دِيَٰرِنَا وَأَبۡنَآئِنَاۖ فَلَمَّا كُتِبَ عَلَيۡهِمُ ٱلۡقِتَالُ تَوَلَّوۡاْ إِلَّا قَلِيلٗا مِّنۡهُمۡۚ وَٱللَّهُ عَلِيمُۢ بِٱلظَّٰلِمِينَ "}, {"aya_id": 254, "coordinates": [[252, 85, 49, 34], [286, 85, 322, 34], [320, 85, 322, 34], [355, 85, 322, 34], [389, 85, 322, 34], [423, 86, 322, 34]], "aya_moshaf": "وَقَالَ لَهُمۡ نَبِيُّهُمۡ إِنَّ ٱللَّهَ قَدۡ بَعَثَ لَكُمۡ طَالُوتَ مَلِكٗاۚ قَالُوٓاْ أَنَّىٰ يَكُونُ لَهُ ٱلۡمُلۡكُ عَلَيۡنَا وَنَحۡنُ أَحَقُّ بِٱلۡمُلۡكِ مِنۡهُ وَلَمۡ يُؤۡتَ سَعَةٗ مِّنَ ٱلۡمَالِۚ قَالَ إِنَّ ٱللَّهَ ٱصۡطَفَىٰهُ عَلَيۡكُمۡ وَزَادَهُۥ بَسۡطَةٗ فِي ٱلۡعِلۡمِ وَٱلۡجِسۡمِۖ وَٱللَّهُ يُؤۡتِي مُلۡكَهُۥ مَن يَشَآءُۚ وَٱللَّهُ وَٰسِعٌ عَلِيمٞ "}, {"aya_id": 255, "coordinates": [[423, 85, 1, 34], [458, 85, 322, 34], [492, 85, 322, 34], [526, 85, 322, 34], [561, 85, 322, 34]], "aya_moshaf": "وَقَالَ لَهُمۡ نَبِيُّهُمۡ إِنَّ ءَايَةَ مُلۡكِهِۦٓ أَن يَأۡتِيَكُمُ ٱلتَّابُوتُ فِيهِ سَكِينَةٞ مِّن رَّبِّكُمۡ وَبَقِيَّةٞ مِّمَّا تَرَكَ ءَالُ مُوسَىٰ وَءَالُ هَٰرُونَ تَحۡمِلُهُ ٱلۡمَلَٰٓئِكَةُۚ إِنَّ فِي ذَٰلِكَ لَأٓيَةٗ لَّكُمۡ إِن كُنتُم مُّؤۡمِنِينَ "}]
const ayasRanges = [{"ayas_ids_range": [253, 255], "sura_id": 2}];
