const nearbySurasNames = {
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
    5: 'المَائدة',
};
const choicesObjects = {
    "54": "يوم تجد كل نفس ما",
    "55": "هنالك دعا زكريا ربه قال",
    "57": "ربنا امنا بما انزلت واتبعنا",
    "58": "ان هذا لهو القصص الحق",
};
const ayas = [{"aya_id": 339, "coordinates": [[80, 92, 322, 34]], "aya_moshaf": "وَيُكَلِّمُ ٱلنَّاسَ فِي ٱلۡمَهۡدِ وَكَهۡلٗا وَمِنَ ٱلصَّٰلِحِينَ "}, {"aya_id": 340, "coordinates": [[114, 92, 322, 34], [149, 92, 322, 34]], "aya_moshaf": "قَالَتۡ رَبِّ أَنَّىٰ يَكُونُ لِي وَلَدٞ وَلَمۡ يَمۡسَسۡنِي بَشَرٞۖ قَالَ كَذَٰلِكِ ٱللَّهُ يَخۡلُقُ مَا يَشَآءُۚ إِذَا قَضَىٰٓ أَمۡرٗا فَإِنَّمَا يَقُولُ لَهُۥ كُن فَيَكُونُ "}, {"aya_id": 341, "coordinates": [[183, 92, 322, 34]], "aya_moshaf": "وَيُعَلِّمُهُ ٱلۡكِتَٰبَ وَٱلۡحِكۡمَةَ وَٱلتَّوۡرَىٰةَ وَٱلۡإِنجِيلَ "}, {"aya_id": 342, "coordinates": [[217, 92, 322, 34], [252, 92, 322, 34], [286, 92, 322, 34], [320, 92, 322, 34], [355, 92, 322, 34]], "aya_moshaf": "وَرَسُولًا إِلَىٰ بَنِيٓ إِسۡرَٰٓءِيلَ أَنِّي قَدۡ جِئۡتُكُم بِـَٔايَةٖ مِّن رَّبِّكُمۡ أَنِّيٓ أَخۡلُقُ لَكُم مِّنَ ٱلطِّينِ كَهَيۡـَٔةِ ٱلطَّيۡرِ فَأَنفُخُ فِيهِ فَيَكُونُ طَيۡرَۢا بِإِذۡنِ ٱللَّهِۖ وَأُبۡرِئُ ٱلۡأَكۡمَهَ وَٱلۡأَبۡرَصَ وَأُحۡيِ ٱلۡمَوۡتَىٰ بِإِذۡنِ ٱللَّهِۖ وَأُنَبِّئُكُم بِمَا تَأۡكُلُونَ وَمَا تَدَّخِرُونَ فِي بُيُوتِكُمۡۚ إِنَّ فِي ذَٰلِكَ لَأٓيَةٗ لَّكُمۡ إِن كُنتُم مُّؤۡمِنِينَ "}, {"aya_id": 343, "coordinates": [[389, 92, 322, 34], [423, 92, 322, 34], [458, 273, 142, 34]], "aya_moshaf": "وَمُصَدِّقٗا لِّمَا بَيۡنَ يَدَيَّ مِنَ ٱلتَّوۡرَىٰةِ وَلِأُحِلَّ لَكُم بَعۡضَ ٱلَّذِي حُرِّمَ عَلَيۡكُمۡۚ وَجِئۡتُكُم بِـَٔايَةٖ مِّن رَّبِّكُمۡ فَٱتَّقُواْ ٱللَّهَ وَأَطِيعُونِ "}, {"aya_id": 344, "coordinates": [[458, 92, 181, 34], [492, 262, 153, 34]], "aya_moshaf": "إِنَّ ٱللَّهَ رَبِّي وَرَبُّكُمۡ فَٱعۡبُدُوهُۚ هَٰذَا صِرَٰطٞ مُّسۡتَقِيمٞ "}, {"aya_id": 345, "coordinates": [[492, 92, 170, 34], [526, 92, 322, 34], [561, 92, 322, 34]], "aya_moshaf": "۞ فَلَمَّآ أَحَسَّ عِيسَىٰ مِنۡهُمُ ٱلۡكُفۡرَ قَالَ مَنۡ أَنصَارِيٓ إِلَى ٱللَّهِۖ قَالَ ٱلۡحَوَارِيُّونَ نَحۡنُ أَنصَارُ ٱللَّهِ ءَامَنَّا بِٱللَّهِ وَٱشۡهَدۡ بِأَنَّا مُسۡلِمُونَ "}]
const ayasRanges = [{"ayas_ids_range": [339, 345], "sura_id": 3}];
