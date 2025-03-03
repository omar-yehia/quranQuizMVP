const nearbySurasNames = {
    1: 'الفَاتِحة',
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
};
const choicesObjects = {
    "28": "فمن خاف من موص جنفا",
    "29": "احل لكم ليله الصيام الرفث",
    "31": "الحج اشهر معلومات فمن فرض",
    "32": "واذكروا الله في ايام معدودات",
};
const ayas = [{"aya_id": 198, "coordinates": [[80, 92, 322, 34], [114, 92, 322, 34], [149, 144, 271, 34]], "aya_moshaf": "وَٱقۡتُلُوهُمۡ حَيۡثُ ثَقِفۡتُمُوهُمۡ وَأَخۡرِجُوهُم مِّنۡ حَيۡثُ أَخۡرَجُوكُمۡۚ وَٱلۡفِتۡنَةُ أَشَدُّ مِنَ ٱلۡقَتۡلِۚ وَلَا تُقَٰتِلُوهُمۡ عِندَ ٱلۡمَسۡجِدِ ٱلۡحَرَامِ حَتَّىٰ يُقَٰتِلُوكُمۡ فِيهِۖ فَإِن قَٰتَلُوكُمۡ فَٱقۡتُلُوهُمۡۗ كَذَٰلِكَ جَزَآءُ ٱلۡكَٰفِرِينَ "}, {"aya_id": 199, "coordinates": [[149, 92, 52, 34], [183, 289, 126, 34]], "aya_moshaf": "فَإِنِ ٱنتَهَوۡاْ فَإِنَّ ٱللَّهَ غَفُورٞ رَّحِيمٞ "}, {"aya_id": 200, "coordinates": [[183, 92, 197, 34], [217, 153, 262, 34]], "aya_moshaf": "وَقَٰتِلُوهُمۡ حَتَّىٰ لَا تَكُونَ فِتۡنَةٞ وَيَكُونَ ٱلدِّينُ لِلَّهِۖ فَإِنِ ٱنتَهَوۡاْ فَلَا عُدۡوَٰنَ إِلَّا عَلَى ٱلظَّٰلِمِينَ "}, {"aya_id": 201, "coordinates": [[217, 92, 61, 34], [252, 92, 322, 34], [286, 92, 322, 34], [320, 345, 70, 34]], "aya_moshaf": "ٱلشَّهۡرُ ٱلۡحَرَامُ بِٱلشَّهۡرِ ٱلۡحَرَامِ وَٱلۡحُرُمَٰتُ قِصَاصٞۚ فَمَنِ ٱعۡتَدَىٰ عَلَيۡكُمۡ فَٱعۡتَدُواْ عَلَيۡهِ بِمِثۡلِ مَا ٱعۡتَدَىٰ عَلَيۡكُمۡۚ وَٱتَّقُواْ ٱللَّهَ وَٱعۡلَمُوٓاْ أَنَّ ٱللَّهَ مَعَ ٱلۡمُتَّقِينَ "}, {"aya_id": 202, "coordinates": [[320, 92, 253, 34], [355, 221, 194, 34]], "aya_moshaf": "وَأَنفِقُواْ فِي سَبِيلِ ٱللَّهِ وَلَا تُلۡقُواْ بِأَيۡدِيكُمۡ إِلَى ٱلتَّهۡلُكَةِ وَأَحۡسِنُوٓاْۚ إِنَّ ٱللَّهَ يُحِبُّ ٱلۡمُحۡسِنِينَ "}, {"aya_id": 203, "coordinates": [[355, 92, 129, 34], [389, 92, 322, 34], [423, 92, 322, 34], [458, 92, 322, 34], [492, 92, 322, 34], [526, 92, 322, 34], [561, 92, 322, 34]], "aya_moshaf": "وَأَتِمُّواْ ٱلۡحَجَّ وَٱلۡعُمۡرَةَ لِلَّهِۚ فَإِنۡ أُحۡصِرۡتُمۡ فَمَا ٱسۡتَيۡسَرَ مِنَ ٱلۡهَدۡيِۖ وَلَا تَحۡلِقُواْ رُءُوسَكُمۡ حَتَّىٰ يَبۡلُغَ ٱلۡهَدۡيُ مَحِلَّهُۥۚ فَمَن كَانَ مِنكُم مَّرِيضًا أَوۡ بِهِۦٓ أَذٗى مِّن رَّأۡسِهِۦ فَفِدۡيَةٞ مِّن صِيَامٍ أَوۡ صَدَقَةٍ أَوۡ نُسُكٖۚ فَإِذَآ أَمِنتُمۡ فَمَن تَمَتَّعَ بِٱلۡعُمۡرَةِ إِلَى ٱلۡحَجِّ فَمَا ٱسۡتَيۡسَرَ مِنَ ٱلۡهَدۡيِۚ فَمَن لَّمۡ يَجِدۡ فَصِيَامُ ثَلَٰثَةِ أَيَّامٖ فِي ٱلۡحَجِّ وَسَبۡعَةٍ إِذَا رَجَعۡتُمۡۗ تِلۡكَ عَشَرَةٞ كَامِلَةٞۗ ذَٰلِكَ لِمَن لَّمۡ يَكُنۡ أَهۡلُهُۥ حَاضِرِي ٱلۡمَسۡجِدِ ٱلۡحَرَامِۚ وَٱتَّقُواْ ٱللَّهَ وَٱعۡلَمُوٓاْ أَنَّ ٱللَّهَ شَدِيدُ ٱلۡعِقَابِ "}]
const ayasRanges = [{"ayas_ids_range": [198, 203], "sura_id": 2}];
