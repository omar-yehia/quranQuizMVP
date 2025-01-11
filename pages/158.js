const mainSuraId = 7;
const nearbySurasNames = {
    6: 'الأنعَام',
    7: 'الأعرَاف',
    8: 'الأنفَال',
    9: 'التوبَة',
};
const choicesObjects = {
    "156": "ونادي اصحاب الجنه اصحاب النار",
    "157": "ولقد جئناهم بكتاب فصلناه علي",
    "159": "ابلغكم رسالات ربي وانا لكم",
    "160": "واذكروا اذ جعلكم خلفاء من",
};
const ayas = [{"aya_id": 1012, "coordinates": [[84, 90, 322, 34], [118, 90, 322, 34]], "aya_moshaf": "وَٱلۡبَلَدُ ٱلطَّيِّبُ يَخۡرُجُ نَبَاتُهُۥ بِإِذۡنِ رَبِّهِۦۖ وَٱلَّذِي خَبُثَ لَا يَخۡرُجُ إِلَّا نَكِدٗاۚ كَذَٰلِكَ نُصَرِّفُ ٱلۡأٓيَٰتِ لِقَوۡمٖ يَشۡكُرُونَ "}, {"aya_id": 1013, "coordinates": [[153, 90, 322, 34], [187, 90, 322, 34]], "aya_moshaf": "لَقَدۡ أَرۡسَلۡنَا نُوحًا إِلَىٰ قَوۡمِهِۦ فَقَالَ يَٰقَوۡمِ ٱعۡبُدُواْ ٱللَّهَ مَا لَكُم مِّنۡ إِلَٰهٍ غَيۡرُهُۥٓ إِنِّيٓ أَخَافُ عَلَيۡكُمۡ عَذَابَ يَوۡمٍ عَظِيمٖ "}, {"aya_id": 1014, "coordinates": [[221, 133, 280, 34]], "aya_moshaf": "قَالَ ٱلۡمَلَأُ مِن قَوۡمِهِۦٓ إِنَّا لَنَرَىٰكَ فِي ضَلَٰلٖ مُّبِينٖ "}, {"aya_id": 1015, "coordinates": [[221, 90, 43, 34], [256, 90, 322, 34], [290, 387, 26, 34]], "aya_moshaf": "قَالَ يَٰقَوۡمِ لَيۡسَ بِي ضَلَٰلَةٞ وَلَٰكِنِّي رَسُولٞ مِّن رَّبِّ ٱلۡعَٰلَمِينَ "}, {"aya_id": 1016, "coordinates": [[290, 90, 297, 34], [324, 317, 96, 34]], "aya_moshaf": "أُبَلِّغُكُمۡ رِسَٰلَٰتِ رَبِّي وَأَنصَحُ لَكُمۡ وَأَعۡلَمُ مِنَ ٱللَّهِ مَا لَا تَعۡلَمُونَ "}, {"aya_id": 1017, "coordinates": [[324, 90, 227, 34], [359, 153, 260, 34]], "aya_moshaf": "أَوَعَجِبۡتُمۡ أَن جَآءَكُمۡ ذِكۡرٞ مِّن رَّبِّكُمۡ عَلَىٰ رَجُلٖ مِّنكُمۡ لِيُنذِرَكُمۡ وَلِتَتَّقُواْ وَلَعَلَّكُمۡ تُرۡحَمُونَ "}, {"aya_id": 1018, "coordinates": [[359, 90, 63, 34], [393, 90, 322, 34], [427, 199, 214, 34]], "aya_moshaf": "فَكَذَّبُوهُ فَأَنجَيۡنَٰهُ وَٱلَّذِينَ مَعَهُۥ فِي ٱلۡفُلۡكِ وَأَغۡرَقۡنَا ٱلَّذِينَ كَذَّبُواْ بِـَٔايَٰتِنَآۚ إِنَّهُمۡ كَانُواْ قَوۡمًا عَمِينَ "}, {"aya_id": 1019, "coordinates": [[427, 90, 109, 34], [462, 90, 322, 34], [496, 389, 24, 34]], "aya_moshaf": "۞ وَإِلَىٰ عَادٍ أَخَاهُمۡ هُودٗاۚ قَالَ يَٰقَوۡمِ ٱعۡبُدُواْ ٱللَّهَ مَا لَكُم مِّنۡ إِلَٰهٍ غَيۡرُهُۥٓۚ أَفَلَا تَتَّقُونَ "}, {"aya_id": 1020, "coordinates": [[496, 90, 299, 34], [530, 153, 260, 34]], "aya_moshaf": "قَالَ ٱلۡمَلَأُ ٱلَّذِينَ كَفَرُواْ مِن قَوۡمِهِۦٓ إِنَّا لَنَرَىٰكَ فِي سَفَاهَةٖ وَإِنَّا لَنَظُنُّكَ مِنَ ٱلۡكَٰذِبِينَ "}, {"aya_id": 1021, "coordinates": [[530, 90, 63, 34], [565, 90, 322, 34]], "aya_moshaf": "قَالَ يَٰقَوۡمِ لَيۡسَ بِي سَفَاهَةٞ وَلَٰكِنِّي رَسُولٞ مِّن رَّبِّ ٱلۡعَٰلَمِينَ "}]