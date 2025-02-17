const nearbySurasNames = {
    8: 'الأنفَال',
    9: 'التوبَة',
    10: 'يُونس',
    11: 'هُود',
};
const choicesObjects = {
    "198": "كالذين من قبلكم كانوا اشد",
    "199": "ياايها النبي جاهد الكفار والمنافقين",
    "201": "رضوا بان يكونوا مع الخوالف",
    "202": "يعتذرون اليكم اذا رجعتم اليهم",
};
const ayas = [{"aya_id": 1315, "coordinates": [[80, 92, 322, 34], [114, 92, 322, 34], [149, 217, 198, 34]], "aya_moshaf": "ٱسۡتَغۡفِرۡ لَهُمۡ أَوۡ لَا تَسۡتَغۡفِرۡ لَهُمۡ إِن تَسۡتَغۡفِرۡ لَهُمۡ سَبۡعِينَ مَرَّةٗ فَلَن يَغۡفِرَ ٱللَّهُ لَهُمۡۚ ذَٰلِكَ بِأَنَّهُمۡ كَفَرُواْ بِٱللَّهِ وَرَسُولِهِۦۗ وَٱللَّهُ لَا يَهۡدِي ٱلۡقَوۡمَ ٱلۡفَٰسِقِينَ "}, {"aya_id": 1316, "coordinates": [[149, 92, 125, 34], [183, 92, 322, 34], [217, 92, 322, 34], [252, 257, 158, 34]], "aya_moshaf": "فَرِحَ ٱلۡمُخَلَّفُونَ بِمَقۡعَدِهِمۡ خِلَٰفَ رَسُولِ ٱللَّهِ وَكَرِهُوٓاْ أَن يُجَٰهِدُواْ بِأَمۡوَٰلِهِمۡ وَأَنفُسِهِمۡ فِي سَبِيلِ ٱللَّهِ وَقَالُواْ لَا تَنفِرُواْ فِي ٱلۡحَرِّۗ قُلۡ نَارُ جَهَنَّمَ أَشَدُّ حَرّٗاۚ لَّوۡ كَانُواْ يَفۡقَهُونَ "}, {"aya_id": 1317, "coordinates": [[252, 92, 165, 34], [286, 246, 169, 34]], "aya_moshaf": "فَلۡيَضۡحَكُواْ قَلِيلٗا وَلۡيَبۡكُواْ كَثِيرٗا جَزَآءَۢ بِمَا كَانُواْ يَكۡسِبُونَ "}, {"aya_id": 1318, "coordinates": [[286, 92, 154, 34], [320, 92, 322, 34], [355, 92, 322, 34], [389, 320, 95, 34]], "aya_moshaf": "فَإِن رَّجَعَكَ ٱللَّهُ إِلَىٰ طَآئِفَةٖ مِّنۡهُمۡ فَٱسۡتَـٔۡذَنُوكَ لِلۡخُرُوجِ فَقُل لَّن تَخۡرُجُواْ مَعِيَ أَبَدٗا وَلَن تُقَٰتِلُواْ مَعِيَ عَدُوًّاۖ إِنَّكُمۡ رَضِيتُم بِٱلۡقُعُودِ أَوَّلَ مَرَّةٖ فَٱقۡعُدُواْ مَعَ ٱلۡخَٰلِفِينَ "}, {"aya_id": 1319, "coordinates": [[389, 92, 228, 34], [423, 92, 322, 34], [458, 390, 25, 34]], "aya_moshaf": "وَلَا تُصَلِّ عَلَىٰٓ أَحَدٖ مِّنۡهُم مَّاتَ أَبَدٗا وَلَا تَقُمۡ عَلَىٰ قَبۡرِهِۦٓۖ إِنَّهُمۡ كَفَرُواْ بِٱللَّهِ وَرَسُولِهِۦ وَمَاتُواْ وَهُمۡ فَٰسِقُونَ "}, {"aya_id": 1320, "coordinates": [[458, 92, 298, 34], [492, 128, 287, 34]], "aya_moshaf": "وَلَا تُعۡجِبۡكَ أَمۡوَٰلُهُمۡ وَأَوۡلَٰدُهُمۡۚ إِنَّمَا يُرِيدُ ٱللَّهُ أَن يُعَذِّبَهُم بِهَا فِي ٱلدُّنۡيَا وَتَزۡهَقَ أَنفُسُهُمۡ وَهُمۡ كَٰفِرُونَ "}, {"aya_id": 1321, "coordinates": [[492, 92, 36, 34], [526, 92, 322, 34], [561, 92, 322, 34]], "aya_moshaf": "وَإِذَآ أُنزِلَتۡ سُورَةٌ أَنۡ ءَامِنُواْ بِٱللَّهِ وَجَٰهِدُواْ مَعَ رَسُولِهِ ٱسۡتَـٔۡذَنَكَ أُوْلُواْ ٱلطَّوۡلِ مِنۡهُمۡ وَقَالُواْ ذَرۡنَا نَكُن مَّعَ ٱلۡقَٰعِدِينَ "}]
const ayasRanges = [{"ayas_ids_range": [1315, 1321], "sura_id": 9}];
