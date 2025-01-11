const mainSuraId = 21;
const nearbySurasNames = {
    20: 'طه',
    21: 'الأنبيَاء',
    22: 'الحج',
    23: 'المؤمنُون',
};
const choicesObjects = {
    "323": "وكم قصمنا من قريه كانت",
    "324": "وما ارسلنا من قبلك من",
    "326": "قل انما انذركم بالوحي ولا",
    "327": "فجعلهم جذاذا الا كبيرا لهم",
};
const ayas = [{"aya_id": 2519, "coordinates": [[87, 49, 322, 34], [121, 49, 322, 34], [156, 241, 131, 34]], "aya_moshaf": "وَإِذَا رَءَاكَ ٱلَّذِينَ كَفَرُوٓاْ إِن يَتَّخِذُونَكَ إِلَّا هُزُوًا أَهَٰذَا ٱلَّذِي يَذۡكُرُ ءَالِهَتَكُمۡ وَهُم بِذِكۡرِ ٱلرَّحۡمَٰنِ هُمۡ كَٰفِرُونَ "}, {"aya_id": 2520, "coordinates": [[156, 49, 192, 34], [190, 210, 162, 34]], "aya_moshaf": "خُلِقَ ٱلۡإِنسَٰنُ مِنۡ عَجَلٖۚ سَأُوْرِيكُمۡ ءَايَٰتِي فَلَا تَسۡتَعۡجِلُونِ "}, {"aya_id": 2521, "coordinates": [[190, 49, 161, 34], [224, 210, 162, 34]], "aya_moshaf": "وَيَقُولُونَ مَتَىٰ هَٰذَا ٱلۡوَعۡدُ إِن كُنتُمۡ صَٰدِقِينَ "}, {"aya_id": 2522, "coordinates": [[224, 49, 161, 34], [259, 49, 322, 34], [293, 255, 117, 34]], "aya_moshaf": "لَوۡ يَعۡلَمُ ٱلَّذِينَ كَفَرُواْ حِينَ لَا يَكُفُّونَ عَن وُجُوهِهِمُ ٱلنَّارَ وَلَا عَن ظُهُورِهِمۡ وَلَا هُمۡ يُنصَرُونَ "}, {"aya_id": 2523, "coordinates": [[293, 49, 206, 34], [327, 139, 233, 34]], "aya_moshaf": "بَلۡ تَأۡتِيهِم بَغۡتَةٗ فَتَبۡهَتُهُمۡ فَلَا يَسۡتَطِيعُونَ رَدَّهَا وَلَا هُمۡ يُنظَرُونَ "}, {"aya_id": 2524, "coordinates": [[327, 49, 90, 34], [362, 49, 322, 34], [396, 266, 106, 34]], "aya_moshaf": "وَلَقَدِ ٱسۡتُهۡزِئَ بِرُسُلٖ مِّن قَبۡلِكَ فَحَاقَ بِٱلَّذِينَ سَخِرُواْ مِنۡهُم مَّا كَانُواْ بِهِۦ يَسۡتَهۡزِءُونَ "}, {"aya_id": 2525, "coordinates": [[396, 49, 217, 34], [430, 80, 292, 34]], "aya_moshaf": "قُلۡ مَن يَكۡلَؤُكُم بِٱلَّيۡلِ وَٱلنَّهَارِ مِنَ ٱلرَّحۡمَٰنِۚ بَلۡ هُمۡ عَن ذِكۡرِ رَبِّهِم مُّعۡرِضُونَ "}, {"aya_id": 2526, "coordinates": [[430, 49, 31, 34], [465, 49, 322, 34], [499, 154, 218, 34]], "aya_moshaf": "أَمۡ لَهُمۡ ءَالِهَةٞ تَمۡنَعُهُم مِّن دُونِنَاۚ لَا يَسۡتَطِيعُونَ نَصۡرَ أَنفُسِهِمۡ وَلَا هُم مِّنَّا يُصۡحَبُونَ "}, {"aya_id": 2527, "coordinates": [[499, 49, 105, 34], [533, 49, 322, 34], [568, 49, 322, 34]], "aya_moshaf": "بَلۡ مَتَّعۡنَا هَٰٓؤُلَآءِ وَءَابَآءَهُمۡ حَتَّىٰ طَالَ عَلَيۡهِمُ ٱلۡعُمُرُۗ أَفَلَا يَرَوۡنَ أَنَّا نَأۡتِي ٱلۡأَرۡضَ نَنقُصُهَا مِنۡ أَطۡرَافِهَآۚ أَفَهُمُ ٱلۡغَٰلِبُونَ "}]