const mainSuraId = 9;
const nearbySurasNames = {
    8: 'الأنفَال',
    9: 'التوبَة',
    10: 'يُونس',
    11: 'هُود',
};
const choicesObjects = {
    "194": "انفروا خفافا وثقالا وجاهدوا باموالكم",
    "195": "لقد ابتغوا الفتنه من قبل",
    "197": "يحلفون بالله لكم ليرضوكم والله",
    "198": "كالذين من قبلكم كانوا اشد",
};
const ayas = [{"aya_id": 1290, "coordinates": [[80, 92, 322, 34], [114, 92, 322, 34]], "aya_moshaf": "فَلَا تُعۡجِبۡكَ أَمۡوَٰلُهُمۡ وَلَآ أَوۡلَٰدُهُمۡۚ إِنَّمَا يُرِيدُ ٱللَّهُ لِيُعَذِّبَهُم بِهَا فِي ٱلۡحَيَوٰةِ ٱلدُّنۡيَا وَتَزۡهَقَ أَنفُسُهُمۡ وَهُمۡ كَٰفِرُونَ "}, {"aya_id": 1291, "coordinates": [[149, 92, 322, 34], [183, 297, 118, 34]], "aya_moshaf": "وَيَحۡلِفُونَ بِٱللَّهِ إِنَّهُمۡ لَمِنكُمۡ وَمَا هُم مِّنكُمۡ وَلَٰكِنَّهُمۡ قَوۡمٞ يَفۡرَقُونَ "}, {"aya_id": 1292, "coordinates": [[183, 92, 205, 34], [217, 192, 223, 34]], "aya_moshaf": "لَوۡ يَجِدُونَ مَلۡجَـًٔا أَوۡ مَغَٰرَٰتٍ أَوۡ مُدَّخَلٗا لَّوَلَّوۡاْ إِلَيۡهِ وَهُمۡ يَجۡمَحُونَ "}, {"aya_id": 1293, "coordinates": [[217, 92, 100, 34], [252, 92, 322, 34], [286, 289, 126, 34]], "aya_moshaf": "وَمِنۡهُم مَّن يَلۡمِزُكَ فِي ٱلصَّدَقَٰتِ فَإِنۡ أُعۡطُواْ مِنۡهَا رَضُواْ وَإِن لَّمۡ يُعۡطَوۡاْ مِنۡهَآ إِذَا هُمۡ يَسۡخَطُونَ "}, {"aya_id": 1294, "coordinates": [[286, 92, 197, 34], [320, 92, 322, 34], [355, 209, 206, 34]], "aya_moshaf": "وَلَوۡ أَنَّهُمۡ رَضُواْ مَآ ءَاتَىٰهُمُ ٱللَّهُ وَرَسُولُهُۥ وَقَالُواْ حَسۡبُنَا ٱللَّهُ سَيُؤۡتِينَا ٱللَّهُ مِن فَضۡلِهِۦ وَرَسُولُهُۥٓ إِنَّآ إِلَى ٱللَّهِ رَٰغِبُونَ "}, {"aya_id": 1295, "coordinates": [[355, 92, 117, 34], [389, 92, 322, 34], [423, 92, 322, 34], [458, 138, 277, 34]], "aya_moshaf": "۞ إِنَّمَا ٱلصَّدَقَٰتُ لِلۡفُقَرَآءِ وَٱلۡمَسَٰكِينِ وَٱلۡعَٰمِلِينَ عَلَيۡهَا وَٱلۡمُؤَلَّفَةِ قُلُوبُهُمۡ وَفِي ٱلرِّقَابِ وَٱلۡغَٰرِمِينَ وَفِي سَبِيلِ ٱللَّهِ وَٱبۡنِ ٱلسَّبِيلِۖ فَرِيضَةٗ مِّنَ ٱللَّهِۗ وَٱللَّهُ عَلِيمٌ حَكِيمٞ "}, {"aya_id": 1296, "coordinates": [[458, 92, 46, 34], [492, 92, 322, 34], [526, 92, 322, 34], [561, 92, 322, 34]], "aya_moshaf": "وَمِنۡهُمُ ٱلَّذِينَ يُؤۡذُونَ ٱلنَّبِيَّ وَيَقُولُونَ هُوَ أُذُنٞۚ قُلۡ أُذُنُ خَيۡرٖ لَّكُمۡ يُؤۡمِنُ بِٱللَّهِ وَيُؤۡمِنُ لِلۡمُؤۡمِنِينَ وَرَحۡمَةٞ لِّلَّذِينَ ءَامَنُواْ مِنكُمۡۚ وَٱلَّذِينَ يُؤۡذُونَ رَسُولَ ٱللَّهِ لَهُمۡ عَذَابٌ أَلِيمٞ "}]