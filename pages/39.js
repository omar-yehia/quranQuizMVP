const nearbySurasNames = {
    1: 'الفَاتِحة',
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
};
const choicesObjects = {
    "37": "واذا طلقتم النساء فبلغن اجلهن",
    "38": "والذين يتوفون منكم ويذرون ازواجا",
    "40": "الم تر الي الملا من",
    "41": "فلما فصل طالوت بالجنود قال",
};
const ayas = [{"aya_id": 245, "coordinates": [[87, 49, 322, 34], [121, 296, 76, 34]], "aya_moshaf": "حَٰفِظُواْ عَلَى ٱلصَّلَوَٰتِ وَٱلصَّلَوٰةِ ٱلۡوُسۡطَىٰ وَقُومُواْ لِلَّهِ قَٰنِتِينَ "}, {"aya_id": 246, "coordinates": [[121, 49, 247, 34], [156, 49, 322, 34], [190, 347, 25, 34]], "aya_moshaf": "فَإِنۡ خِفۡتُمۡ فَرِجَالًا أَوۡ رُكۡبَانٗاۖ فَإِذَآ أَمِنتُمۡ فَٱذۡكُرُواْ ٱللَّهَ كَمَا عَلَّمَكُم مَّا لَمۡ تَكُونُواْ تَعۡلَمُونَ "}, {"aya_id": 247, "coordinates": [[190, 49, 298, 34], [224, 49, 322, 34], [259, 49, 322, 34], [293, 158, 214, 34]], "aya_moshaf": "وَٱلَّذِينَ يُتَوَفَّوۡنَ مِنكُمۡ وَيَذَرُونَ أَزۡوَٰجٗا وَصِيَّةٗ لِّأَزۡوَٰجِهِم مَّتَٰعًا إِلَى ٱلۡحَوۡلِ غَيۡرَ إِخۡرَاجٖۚ فَإِنۡ خَرَجۡنَ فَلَا جُنَاحَ عَلَيۡكُمۡ فِي مَا فَعَلۡنَ فِيٓ أَنفُسِهِنَّ مِن مَّعۡرُوفٖۗ وَٱللَّهُ عَزِيزٌ حَكِيمٞ "}, {"aya_id": 248, "coordinates": [[293, 49, 109, 34], [327, 157, 215, 34]], "aya_moshaf": "وَلِلۡمُطَلَّقَٰتِ مَتَٰعُۢ بِٱلۡمَعۡرُوفِۖ حَقًّا عَلَى ٱلۡمُتَّقِينَ "}, {"aya_id": 249, "coordinates": [[327, 49, 108, 34], [362, 128, 244, 34]], "aya_moshaf": "كَذَٰلِكَ يُبَيِّنُ ٱللَّهُ لَكُمۡ ءَايَٰتِهِۦ لَعَلَّكُمۡ تَعۡقِلُونَ "}, {"aya_id": 250, "coordinates": [[362, 49, 79, 34], [396, 49, 322, 34], [430, 49, 322, 34], [465, 49, 322, 34]], "aya_moshaf": "۞ أَلَمۡ تَرَ إِلَى ٱلَّذِينَ خَرَجُواْ مِن دِيَٰرِهِمۡ وَهُمۡ أُلُوفٌ حَذَرَ ٱلۡمَوۡتِ فَقَالَ لَهُمُ ٱللَّهُ مُوتُواْ ثُمَّ أَحۡيَٰهُمۡۚ إِنَّ ٱللَّهَ لَذُو فَضۡلٍ عَلَى ٱلنَّاسِ وَلَٰكِنَّ أَكۡثَرَ ٱلنَّاسِ لَا يَشۡكُرُونَ "}, {"aya_id": 251, "coordinates": [[499, 49, 322, 34]], "aya_moshaf": "وَقَٰتِلُواْ فِي سَبِيلِ ٱللَّهِ وَٱعۡلَمُوٓاْ أَنَّ ٱللَّهَ سَمِيعٌ عَلِيمٞ "}, {"aya_id": 252, "coordinates": [[533, 49, 322, 34], [568, 49, 322, 34]], "aya_moshaf": "مَّن ذَا ٱلَّذِي يُقۡرِضُ ٱللَّهَ قَرۡضًا حَسَنٗا فَيُضَٰعِفَهُۥ لَهُۥٓ أَضۡعَافٗا كَثِيرَةٗۚ وَٱللَّهُ يَقۡبِضُ وَيَبۡصُۜطُ وَإِلَيۡهِ تُرۡجَعُونَ "}]
const ayasRanges = [{"ayas_ids_range": [245, 252], "sura_id": 2}];
