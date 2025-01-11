const mainSuraId = 2;
const nearbySurasNames = {
    1: 'الفَاتِحة',
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
};
const choicesObjects = {
    "44": "واذ قال ابراهيم رب ارني",
    "45": "ومثل الذين ينفقون اموالهم ابتغاء",
    "47": "الذين ياكلون الربا لا يقومون",
    "48": "ياايها الذين امنوا اذا تداينتم",
};
const ayas = [{"aya_id": 277, "coordinates": [[80, 92, 322, 34], [114, 166, 249, 34]], "aya_moshaf": "وَمَآ أَنفَقۡتُم مِّن نَّفَقَةٍ أَوۡ نَذَرۡتُم مِّن نَّذۡرٖ فَإِنَّ ٱللَّهَ يَعۡلَمُهُۥۗ وَمَا لِلظَّٰلِمِينَ مِنۡ أَنصَارٍ "}, {"aya_id": 278, "coordinates": [[114, 92, 74, 34], [149, 92, 322, 34], [183, 92, 322, 34], [217, 246, 169, 34]], "aya_moshaf": "إِن تُبۡدُواْ ٱلصَّدَقَٰتِ فَنِعِمَّا هِيَۖ وَإِن تُخۡفُوهَا وَتُؤۡتُوهَا ٱلۡفُقَرَآءَ فَهُوَ خَيۡرٞ لَّكُمۡۚ وَيُكَفِّرُ عَنكُم مِّن سَيِّـَٔاتِكُمۡۗ وَٱللَّهُ بِمَا تَعۡمَلُونَ خَبِيرٞ "}, {"aya_id": 279, "coordinates": [[217, 92, 154, 34], [252, 92, 322, 34], [286, 92, 322, 34], [320, 92, 322, 34], [355, 387, 28, 34]], "aya_moshaf": "۞ لَّيۡسَ عَلَيۡكَ هُدَىٰهُمۡ وَلَٰكِنَّ ٱللَّهَ يَهۡدِي مَن يَشَآءُۗ وَمَا تُنفِقُواْ مِنۡ خَيۡرٖ فَلِأَنفُسِكُمۡۚ وَمَا تُنفِقُونَ إِلَّا ٱبۡتِغَآءَ وَجۡهِ ٱللَّهِۚ وَمَا تُنفِقُواْ مِنۡ خَيۡرٖ يُوَفَّ إِلَيۡكُمۡ وَأَنتُمۡ لَا تُظۡلَمُونَ "}, {"aya_id": 280, "coordinates": [[355, 92, 295, 34], [389, 92, 322, 34], [423, 92, 322, 34], [458, 92, 322, 34], [492, 262, 153, 34]], "aya_moshaf": "لِلۡفُقَرَآءِ ٱلَّذِينَ أُحۡصِرُواْ فِي سَبِيلِ ٱللَّهِ لَا يَسۡتَطِيعُونَ ضَرۡبٗا فِي ٱلۡأَرۡضِ يَحۡسَبُهُمُ ٱلۡجَاهِلُ أَغۡنِيَآءَ مِنَ ٱلتَّعَفُّفِ تَعۡرِفُهُم بِسِيمَٰهُمۡ لَا يَسۡـَٔلُونَ ٱلنَّاسَ إِلۡحَافٗاۗ وَمَا تُنفِقُواْ مِنۡ خَيۡرٖ فَإِنَّ ٱللَّهَ بِهِۦ عَلِيمٌ "}, {"aya_id": 281, "coordinates": [[492, 92, 170, 34], [526, 92, 322, 34], [561, 92, 322, 34]], "aya_moshaf": "ٱلَّذِينَ يُنفِقُونَ أَمۡوَٰلَهُم بِٱلَّيۡلِ وَٱلنَّهَارِ سِرّٗا وَعَلَانِيَةٗ فَلَهُمۡ أَجۡرُهُمۡ عِندَ رَبِّهِمۡ وَلَا خَوۡفٌ عَلَيۡهِمۡ وَلَا هُمۡ يَحۡزَنُونَ "}]