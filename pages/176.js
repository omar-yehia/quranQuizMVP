const mainSuraId = 7;
const nearbySurasNames = {
    6: 'الأنعَام',
    7: 'الأعرَاف',
    8: 'الأنفَال',
    9: 'التوبَة',
};
const choicesObjects = {
    "174": "ولقد ذرانا لجهنم كثيرا من",
    "175": "قل لا املك لنفسي نفعا",
    "177": "يسالونك عن الانفال قل الانفال",
    "178": "اذ تستغيثون ربكم فاستجاب لكم",
};
const ayas = [{"aya_id": 1150, "coordinates": [[80, 89, 322, 34]], "aya_moshaf": "إِنَّ وَلِـِّۧيَ ٱللَّهُ ٱلَّذِي نَزَّلَ ٱلۡكِتَٰبَۖ وَهُوَ يَتَوَلَّى ٱلصَّٰلِحِينَ "}, {"aya_id": 1151, "coordinates": [[114, 89, 322, 34], [149, 282, 130, 34]], "aya_moshaf": "وَٱلَّذِينَ تَدۡعُونَ مِن دُونِهِۦ لَا يَسۡتَطِيعُونَ نَصۡرَكُمۡ وَلَآ أَنفُسَهُمۡ يَنصُرُونَ "}, {"aya_id": 1152, "coordinates": [[149, 89, 193, 34], [183, 169, 243, 34]], "aya_moshaf": "وَإِن تَدۡعُوهُمۡ إِلَى ٱلۡهُدَىٰ لَا يَسۡمَعُواْۖ وَتَرَىٰهُمۡ يَنظُرُونَ إِلَيۡكَ وَهُمۡ لَا يُبۡصِرُونَ "}, {"aya_id": 1153, "coordinates": [[183, 89, 80, 34], [217, 206, 206, 34]], "aya_moshaf": "خُذِ ٱلۡعَفۡوَ وَأۡمُرۡ بِٱلۡعُرۡفِ وَأَعۡرِضۡ عَنِ ٱلۡجَٰهِلِينَ "}, {"aya_id": 1154, "coordinates": [[217, 89, 117, 34], [252, 126, 286, 34]], "aya_moshaf": "وَإِمَّا يَنزَغَنَّكَ مِنَ ٱلشَّيۡطَٰنِ نَزۡغٞ فَٱسۡتَعِذۡ بِٱللَّهِۚ إِنَّهُۥ سَمِيعٌ عَلِيمٌ "}, {"aya_id": 1155, "coordinates": [[252, 89, 37, 34], [286, 89, 322, 34], [320, 288, 124, 34]], "aya_moshaf": "إِنَّ ٱلَّذِينَ ٱتَّقَوۡاْ إِذَا مَسَّهُمۡ طَٰٓئِفٞ مِّنَ ٱلشَّيۡطَٰنِ تَذَكَّرُواْ فَإِذَا هُم مُّبۡصِرُونَ "}, {"aya_id": 1156, "coordinates": [[320, 89, 199, 34], [355, 320, 92, 34]], "aya_moshaf": "وَإِخۡوَٰنُهُمۡ يَمُدُّونَهُمۡ فِي ٱلۡغَيِّ ثُمَّ لَا يُقۡصِرُونَ "}, {"aya_id": 1157, "coordinates": [[355, 89, 231, 34], [389, 89, 322, 34], [423, 225, 187, 34]], "aya_moshaf": "وَإِذَا لَمۡ تَأۡتِهِم بِـَٔايَةٖ قَالُواْ لَوۡلَا ٱجۡتَبَيۡتَهَاۚ قُلۡ إِنَّمَآ أَتَّبِعُ مَا يُوحَىٰٓ إِلَيَّ مِن رَّبِّيۚ هَٰذَا بَصَآئِرُ مِن رَّبِّكُمۡ وَهُدٗى وَرَحۡمَةٞ لِّقَوۡمٖ يُؤۡمِنُونَ "}, {"aya_id": 1158, "coordinates": [[423, 89, 136, 34], [458, 172, 240, 34]], "aya_moshaf": "وَإِذَا قُرِئَ ٱلۡقُرۡءَانُ فَٱسۡتَمِعُواْ لَهُۥ وَأَنصِتُواْ لَعَلَّكُمۡ تُرۡحَمُونَ "}, {"aya_id": 1159, "coordinates": [[458, 89, 83, 34], [492, 89, 322, 34], [526, 213, 199, 34]], "aya_moshaf": "وَٱذۡكُر رَّبَّكَ فِي نَفۡسِكَ تَضَرُّعٗا وَخِيفَةٗ وَدُونَ ٱلۡجَهۡرِ مِنَ ٱلۡقَوۡلِ بِٱلۡغُدُوِّ وَٱلۡأٓصَالِ وَلَا تَكُن مِّنَ ٱلۡغَٰفِلِينَ "}, {"aya_id": 1160, "coordinates": [[526, 89, 124, 34], [561, 89, 322, 34]], "aya_moshaf": "إِنَّ ٱلَّذِينَ عِندَ رَبِّكَ لَا يَسۡتَكۡبِرُونَ عَنۡ عِبَادَتِهِۦ وَيُسَبِّحُونَهُۥ وَلَهُۥ يَسۡجُدُونَۤ۩ "}]