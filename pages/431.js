const nearbySurasNames = {
    33: 'الأحزَاب',
    34: 'سَبإ',
    35: 'فَاطِر',
    36: 'يسٓ',
};
const choicesObjects = {
    "429": "افتري علي الله كذبا ام",
    "430": "لقد كان لسبا في مسكنهم",
    "432": "قال الذين استكبروا للذين استضعفوا",
    "433": "ويوم يحشرهم جميعا ثم يقول",
};
const ayas = [{"aya_id": 3629, "coordinates": [[85, 49, 322, 34], [119, 49, 322, 34], [154, 341, 31, 34]], "aya_moshaf": "وَلَا تَنفَعُ ٱلشَّفَٰعَةُ عِندَهُۥٓ إِلَّا لِمَنۡ أَذِنَ لَهُۥۚ حَتَّىٰٓ إِذَا فُزِّعَ عَن قُلُوبِهِمۡ قَالُواْ مَاذَا قَالَ رَبُّكُمۡۖ قَالُواْ ٱلۡحَقَّۖ وَهُوَ ٱلۡعَلِيُّ ٱلۡكَبِيرُ "}, {"aya_id": 3630, "coordinates": [[154, 49, 292, 34], [188, 75, 297, 34]], "aya_moshaf": "۞ قُلۡ مَن يَرۡزُقُكُم مِّنَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۖ قُلِ ٱللَّهُۖ وَإِنَّآ أَوۡ إِيَّاكُمۡ لَعَلَىٰ هُدًى أَوۡ فِي ضَلَٰلٖ مُّبِينٖ "}, {"aya_id": 3631, "coordinates": [[188, 49, 26, 34], [222, 75, 297, 34]], "aya_moshaf": "قُل لَّا تُسۡـَٔلُونَ عَمَّآ أَجۡرَمۡنَا وَلَا نُسۡـَٔلُ عَمَّا تَعۡمَلُونَ "}, {"aya_id": 3632, "coordinates": [[222, 49, 26, 34], [257, 49, 322, 34], [291, 354, 18, 34]], "aya_moshaf": "قُلۡ يَجۡمَعُ بَيۡنَنَا رَبُّنَا ثُمَّ يَفۡتَحُ بَيۡنَنَا بِٱلۡحَقِّ وَهُوَ ٱلۡفَتَّاحُ ٱلۡعَلِيمُ "}, {"aya_id": 3633, "coordinates": [[291, 49, 305, 34], [325, 251, 121, 34]], "aya_moshaf": "قُلۡ أَرُونِيَ ٱلَّذِينَ أَلۡحَقۡتُم بِهِۦ شُرَكَآءَۖ كـَلَّاۚ بَلۡ هُوَ ٱللَّهُ ٱلۡعَزِيزُ ٱلۡحَكِيمُ "}, {"aya_id": 3634, "coordinates": [[325, 49, 202, 34], [360, 49, 322, 34]], "aya_moshaf": "وَمَآ أَرۡسَلۡنَٰكَ إِلَّا كَآفَّةٗ لِّلنَّاسِ بَشِيرٗا وَنَذِيرٗا وَلَٰكِنَّ أَكۡثَرَ ٱلنَّاسِ لَا يَعۡلَمُونَ "}, {"aya_id": 3635, "coordinates": [[394, 49, 322, 34]], "aya_moshaf": "وَيَقُولُونَ مَتَىٰ هَٰذَا ٱلۡوَعۡدُ إِن كُنتُمۡ صَٰدِقِينَ "}, {"aya_id": 3636, "coordinates": [[428, 49, 322, 34], [463, 349, 23, 34]], "aya_moshaf": "قُل لَّكُم مِّيعَادُ يَوۡمٖ لَّا تَسۡتَـٔۡخِرُونَ عَنۡهُ سَاعَةٗ وَلَا تَسۡتَقۡدِمُونَ "}, {"aya_id": 3637, "coordinates": [[463, 49, 300, 34], [497, 49, 322, 34], [531, 49, 322, 34], [566, 49, 322, 34]], "aya_moshaf": "وَقَالَ ٱلَّذِينَ كَفَرُواْ لَن نُّؤۡمِنَ بِهَٰذَا ٱلۡقُرۡءَانِ وَلَا بِٱلَّذِي بَيۡنَ يَدَيۡهِۗ وَلَوۡ تَرَىٰٓ إِذِ ٱلظَّٰلِمُونَ مَوۡقُوفُونَ عِندَ رَبِّهِمۡ يَرۡجِعُ بَعۡضُهُمۡ إِلَىٰ بَعۡضٍ ٱلۡقَوۡلَ يَقُولُ ٱلَّذِينَ ٱسۡتُضۡعِفُواْ لِلَّذِينَ ٱسۡتَكۡبَرُواْ لَوۡلَآ أَنتُمۡ لَكُنَّا مُؤۡمِنِينَ "}]
const ayasRanges = [{"ayas_ids_range": [3629, 3637], "sura_id": 34}];
