const mainSuraId = 43;
const nearbySurasNames = {
    42: 'الشُّوري',
    43: 'الزُّخرُف',
    44: 'الدُّخان',
    45: 'الجاثِية',
};
const choicesObjects = {
    "488": "وتراهم يعرضون عليها خاشعين من",
    "489": "وكذلك اوحينا اليك روحا من",
    "491": "وكذلك ما ارسلنا من قبلك",
    "492": "ولبيوتهم ابوابا وسررا عليها يتكئون",
};
const ayas = [{"aya_id": 4336, "coordinates": [[80, 92, 322, 34], [114, 282, 133, 34]], "aya_moshaf": "وَٱلَّذِي نَزَّلَ مِنَ ٱلسَّمَآءِ مَآءَۢ بِقَدَرٖ فَأَنشَرۡنَا بِهِۦ بَلۡدَةٗ مَّيۡتٗاۚ كَذَٰلِكَ تُخۡرَجُونَ "}, {"aya_id": 4337, "coordinates": [[114, 92, 190, 34], [149, 198, 217, 34]], "aya_moshaf": "وَٱلَّذِي خَلَقَ ٱلۡأَزۡوَٰجَ كُلَّهَا وَجَعَلَ لَكُم مِّنَ ٱلۡفُلۡكِ وَٱلۡأَنۡعَٰمِ مَا تَرۡكَبُونَ "}, {"aya_id": 4338, "coordinates": [[149, 92, 106, 34], [183, 92, 322, 34], [217, 154, 261, 34]], "aya_moshaf": "لِتَسۡتَوُۥاْ عَلَىٰ ظُهُورِهِۦ ثُمَّ تَذۡكُرُواْ نِعۡمَةَ رَبِّكُمۡ إِذَا ٱسۡتَوَيۡتُمۡ عَلَيۡهِ وَتَقُولُواْ سُبۡحَٰنَ ٱلَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُۥ مُقۡرِنِينَ "}, {"aya_id": 4339, "coordinates": [[217, 92, 62, 34], [252, 334, 81, 34]], "aya_moshaf": "وَإِنَّآ إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ "}, {"aya_id": 4340, "coordinates": [[252, 92, 242, 34], [286, 304, 111, 34]], "aya_moshaf": "وَجَعَلُواْ لَهُۥ مِنۡ عِبَادِهِۦ جُزۡءًاۚ إِنَّ ٱلۡإِنسَٰنَ لَكَفُورٞ مُّبِينٌ "}, {"aya_id": 4341, "coordinates": [[286, 92, 212, 34], [320, 338, 77, 34]], "aya_moshaf": "أَمِ ٱتَّخَذَ مِمَّا يَخۡلُقُ بَنَاتٖ وَأَصۡفَىٰكُم بِٱلۡبَنِينَ "}, {"aya_id": 4342, "coordinates": [[320, 92, 246, 34], [355, 206, 209, 34]], "aya_moshaf": "وَإِذَا بُشِّرَ أَحَدُهُم بِمَا ضَرَبَ لِلرَّحۡمَٰنِ مَثَلٗا ظَلَّ وَجۡهُهُۥ مُسۡوَدّٗا وَهُوَ كَظِيمٌ "}, {"aya_id": 4343, "coordinates": [[355, 92, 114, 34], [389, 206, 209, 34]], "aya_moshaf": "أَوَمَن يُنَشَّؤُاْ فِي ٱلۡحِلۡيَةِ وَهُوَ فِي ٱلۡخِصَامِ غَيۡرُ مُبِينٖ "}, {"aya_id": 4344, "coordinates": [[389, 92, 114, 34], [423, 92, 322, 34], [458, 272, 143, 34]], "aya_moshaf": "وَجَعَلُواْ ٱلۡمَلَٰٓئِكَةَ ٱلَّذِينَ هُمۡ عِبَٰدُ ٱلرَّحۡمَٰنِ إِنَٰثًاۚ أَشَهِدُواْ خَلۡقَهُمۡۚ سَتُكۡتَبُ شَهَٰدَتُهُمۡ وَيُسۡـَٔلُونَ "}, {"aya_id": 4345, "coordinates": [[458, 92, 180, 34], [492, 145, 270, 34]], "aya_moshaf": "وَقَالُواْ لَوۡ شَآءَ ٱلرَّحۡمَٰنُ مَا عَبَدۡنَٰهُمۗ مَّا لَهُم بِذَٰلِكَ مِنۡ عِلۡمٍۖ إِنۡ هُمۡ إِلَّا يَخۡرُصُونَ "}, {"aya_id": 4346, "coordinates": [[492, 92, 53, 34], [526, 149, 266, 34]], "aya_moshaf": "أَمۡ ءَاتَيۡنَٰهُمۡ كِتَٰبٗا مِّن قَبۡلِهِۦ فَهُم بِهِۦ مُسۡتَمۡسِكُونَ "}, {"aya_id": 4347, "coordinates": [[526, 92, 57, 34], [561, 92, 322, 34]], "aya_moshaf": "بَلۡ قَالُوٓاْ إِنَّا وَجَدۡنَآ ءَابَآءَنَا عَلَىٰٓ أُمَّةٖ وَإِنَّا عَلَىٰٓ ءَاثَٰرِهِم مُّهۡتَدُونَ "}]