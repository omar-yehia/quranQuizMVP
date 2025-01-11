const nearbySurasNames = {
    1: 'الفَاتِحة',
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
};
const choicesObjects = {
    "36": "لا يؤاخذكم الله باللغو في",
    "37": "واذا طلقتم النساء فبلغن اجلهن",
    "39": "حافظوا علي الصلوات والصلاه الوسطي",
    "40": "الم تر الي الملا من",
};
const ayas = [{"aya_id": 241, "coordinates": [[80, 92, 322, 34], [114, 92, 322, 34], [149, 92, 322, 34], [183, 387, 28, 34]], "aya_moshaf": "وَٱلَّذِينَ يُتَوَفَّوۡنَ مِنكُمۡ وَيَذَرُونَ أَزۡوَٰجٗا يَتَرَبَّصۡنَ بِأَنفُسِهِنَّ أَرۡبَعَةَ أَشۡهُرٖ وَعَشۡرٗاۖ فَإِذَا بَلَغۡنَ أَجَلَهُنَّ فَلَا جُنَاحَ عَلَيۡكُمۡ فِيمَا فَعَلۡنَ فِيٓ أَنفُسِهِنَّ بِٱلۡمَعۡرُوفِۗ وَٱللَّهُ بِمَا تَعۡمَلُونَ خَبِيرٞ "}, {"aya_id": 242, "coordinates": [[183, 92, 295, 34], [217, 92, 322, 34], [252, 92, 322, 34], [286, 92, 322, 34], [320, 92, 322, 34], [355, 274, 141, 34]], "aya_moshaf": "وَلَا جُنَاحَ عَلَيۡكُمۡ فِيمَا عَرَّضۡتُم بِهِۦ مِنۡ خِطۡبَةِ ٱلنِّسَآءِ أَوۡ أَكۡنَنتُمۡ فِيٓ أَنفُسِكُمۡۚ عَلِمَ ٱللَّهُ أَنَّكُمۡ سَتَذۡكُرُونَهُنَّ وَلَٰكِن لَّا تُوَاعِدُوهُنَّ سِرًّا إِلَّآ أَن تَقُولُواْ قَوۡلٗا مَّعۡرُوفٗاۚ وَلَا تَعۡزِمُواْ عُقۡدَةَ ٱلنِّكَاحِ حَتَّىٰ يَبۡلُغَ ٱلۡكِتَٰبُ أَجَلَهُۥۚ وَٱعۡلَمُوٓاْ أَنَّ ٱللَّهَ يَعۡلَمُ مَا فِيٓ أَنفُسِكُمۡ فَٱحۡذَرُوهُۚ وَٱعۡلَمُوٓاْ أَنَّ ٱللَّهَ غَفُورٌ حَلِيمٞ "}, {"aya_id": 243, "coordinates": [[355, 92, 182, 34], [389, 92, 322, 34], [423, 92, 322, 34], [458, 390, 25, 34]], "aya_moshaf": "لَّا جُنَاحَ عَلَيۡكُمۡ إِن طَلَّقۡتُمُ ٱلنِّسَآءَ مَا لَمۡ تَمَسُّوهُنَّ أَوۡ تَفۡرِضُواْ لَهُنَّ فَرِيضَةٗۚ وَمَتِّعُوهُنَّ عَلَى ٱلۡمُوسِعِ قَدَرُهُۥ وَعَلَى ٱلۡمُقۡتِرِ قَدَرُهُۥ مَتَٰعَۢا بِٱلۡمَعۡرُوفِۖ حَقًّا عَلَى ٱلۡمُحۡسِنِينَ "}, {"aya_id": 244, "coordinates": [[458, 92, 298, 34], [492, 92, 322, 34], [526, 92, 322, 34], [561, 92, 322, 34]], "aya_moshaf": "وَإِن طَلَّقۡتُمُوهُنَّ مِن قَبۡلِ أَن تَمَسُّوهُنَّ وَقَدۡ فَرَضۡتُمۡ لَهُنَّ فَرِيضَةٗ فَنِصۡفُ مَا فَرَضۡتُمۡ إِلَّآ أَن يَعۡفُونَ أَوۡ يَعۡفُوَاْ ٱلَّذِي بِيَدِهِۦ عُقۡدَةُ ٱلنِّكَاحِۚ وَأَن تَعۡفُوٓاْ أَقۡرَبُ لِلتَّقۡوَىٰۚ وَلَا تَنسَوُاْ ٱلۡفَضۡلَ بَيۡنَكُمۡۚ إِنَّ ٱللَّهَ بِمَا تَعۡمَلُونَ بَصِيرٌ "}]
const ayasRanges = [{"ayas_ids_range": [241, 244], "sura_id": 2}];
