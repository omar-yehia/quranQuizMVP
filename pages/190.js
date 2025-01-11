const mainSuraId = 9;
const nearbySurasNames = {
    8: 'الأنفَال',
    9: 'التوبَة',
    10: 'يُونس',
    11: 'هُود',
};
const choicesObjects = {
    "188": "كيف يكون للمشركين عهد عند",
    "189": "قاتلوهم يعذبهم الله بايديكم ويخزهم",
    "191": "ثم يتوب الله من بعد",
    "192": "يريدون ان يطفئوا نور الله",
};
const ayas = [{"aya_id": 1256, "coordinates": [[80, 92, 322, 34], [114, 317, 97, 34]], "aya_moshaf": "يُبَشِّرُهُمۡ رَبُّهُم بِرَحۡمَةٖ مِّنۡهُ وَرِضۡوَٰنٖ وَجَنَّٰتٖ لَّهُمۡ فِيهَا نَعِيمٞ مُّقِيمٌ "}, {"aya_id": 1257, "coordinates": [[114, 92, 225, 34], [149, 348, 66, 34]], "aya_moshaf": "خَٰلِدِينَ فِيهَآ أَبَدًاۚ إِنَّ ٱللَّهَ عِندَهُۥٓ أَجۡرٌ عَظِيمٞ "}, {"aya_id": 1258, "coordinates": [[149, 92, 256, 34], [183, 92, 322, 34], [217, 133, 281, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَا تَتَّخِذُوٓاْ ءَابَآءَكُمۡ وَإِخۡوَٰنَكُمۡ أَوۡلِيَآءَ إِنِ ٱسۡتَحَبُّواْ ٱلۡكُفۡرَ عَلَى ٱلۡإِيمَٰنِۚ وَمَن يَتَوَلَّهُم مِّنكُمۡ فَأُوْلَٰٓئِكَ هُمُ ٱلظَّٰلِمُونَ "}, {"aya_id": 1259, "coordinates": [[217, 92, 41, 34], [252, 92, 322, 34], [286, 92, 322, 34], [320, 92, 322, 34], [355, 92, 322, 34], [389, 274, 140, 34]], "aya_moshaf": "قُلۡ إِن كَانَ ءَابَآؤُكُمۡ وَأَبۡنَآؤُكُمۡ وَإِخۡوَٰنُكُمۡ وَأَزۡوَٰجُكُمۡ وَعَشِيرَتُكُمۡ وَأَمۡوَٰلٌ ٱقۡتَرَفۡتُمُوهَا وَتِجَٰرَةٞ تَخۡشَوۡنَ كَسَادَهَا وَمَسَٰكِنُ تَرۡضَوۡنَهَآ أَحَبَّ إِلَيۡكُم مِّنَ ٱللَّهِ وَرَسُولِهِۦ وَجِهَادٖ فِي سَبِيلِهِۦ فَتَرَبَّصُواْ حَتَّىٰ يَأۡتِيَ ٱللَّهُ بِأَمۡرِهِۦۗ وَٱللَّهُ لَا يَهۡدِي ٱلۡقَوۡمَ ٱلۡفَٰسِقِينَ "}, {"aya_id": 1260, "coordinates": [[389, 92, 182, 34], [423, 92, 322, 34], [458, 92, 322, 34], [492, 202, 212, 34]], "aya_moshaf": "لَقَدۡ نَصَرَكُمُ ٱللَّهُ فِي مَوَاطِنَ كَثِيرَةٖ وَيَوۡمَ حُنَيۡنٍ إِذۡ أَعۡجَبَتۡكُمۡ كَثۡرَتُكُمۡ فَلَمۡ تُغۡنِ عَنكُمۡ شَيۡـٔٗا وَضَاقَتۡ عَلَيۡكُمُ ٱلۡأَرۡضُ بِمَا رَحُبَتۡ ثُمَّ وَلَّيۡتُم مُّدۡبِرِينَ "}, {"aya_id": 1261, "coordinates": [[492, 92, 110, 34], [526, 92, 322, 34], [561, 92, 322, 34]], "aya_moshaf": "ثُمَّ أَنزَلَ ٱللَّهُ سَكِينَتَهُۥ عَلَىٰ رَسُولِهِۦ وَعَلَى ٱلۡمُؤۡمِنِينَ وَأَنزَلَ جُنُودٗا لَّمۡ تَرَوۡهَا وَعَذَّبَ ٱلَّذِينَ كَفَرُواْۚ وَذَٰلِكَ جَزَآءُ ٱلۡكَٰفِرِينَ "}]