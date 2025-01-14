const nearbySurasNames = {
    1: 'الفَاتِحة',
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
};
const choicesObjects = {
    "11": "قالوا ادع لنا ربك يبين",
    "12": "او لا يعلمون ان الله",
    "14": "ولما جاءهم كتاب من عند",
    "15": "قل ان كانت لكم الدار",
};
const ayas = [{"aya_id": 91, "coordinates": [[83, 52, 322, 34], [117, 52, 322, 34]], "aya_moshaf": "وَإِذۡ أَخَذۡنَا مِيثَٰقَكُمۡ لَا تَسۡفِكُونَ دِمَآءَكُمۡ وَلَا تُخۡرِجُونَ أَنفُسَكُم مِّن دِيَٰرِكُمۡ ثُمَّ أَقۡرَرۡتُمۡ وَأَنتُمۡ تَشۡهَدُونَ "}, {"aya_id": 92, "coordinates": [[152, 52, 322, 34], [186, 52, 322, 34], [220, 52, 322, 34], [255, 52, 322, 34], [289, 52, 322, 34], [323, 52, 322, 34], [358, 183, 192, 34]], "aya_moshaf": "ثُمَّ أَنتُمۡ هَٰٓؤُلَآءِ تَقۡتُلُونَ أَنفُسَكُمۡ وَتُخۡرِجُونَ فَرِيقٗا مِّنكُم مِّن دِيَٰرِهِمۡ تَظَٰهَرُونَ عَلَيۡهِم بِٱلۡإِثۡمِ وَٱلۡعُدۡوَٰنِ وَإِن يَأۡتُوكُمۡ أُسَٰرَىٰ تُفَٰدُوهُمۡ وَهُوَ مُحَرَّمٌ عَلَيۡكُمۡ إِخۡرَاجُهُمۡۚ أَفَتُؤۡمِنُونَ بِبَعۡضِ ٱلۡكِتَٰبِ وَتَكۡفُرُونَ بِبَعۡضٖۚ فَمَا جَزَآءُ مَن يَفۡعَلُ ذَٰلِكَ مِنكُمۡ إِلَّا خِزۡيٞ فِي ٱلۡحَيَوٰةِ ٱلدُّنۡيَاۖ وَيَوۡمَ ٱلۡقِيَٰمَةِ يُرَدُّونَ إِلَىٰٓ أَشَدِّ ٱلۡعَذَابِۗ وَمَا ٱللَّهُ بِغَٰفِلٍ عَمَّا تَعۡمَلُونَ "}, {"aya_id": 93, "coordinates": [[358, 52, 131, 34], [392, 52, 322, 34], [426, 296, 79, 34]], "aya_moshaf": "أُوْلَٰٓئِكَ ٱلَّذِينَ ٱشۡتَرَوُاْ ٱلۡحَيَوٰةَ ٱلدُّنۡيَا بِٱلۡأٓخِرَةِۖ فَلَا يُخَفَّفُ عَنۡهُمُ ٱلۡعَذَابُ وَلَا هُمۡ يُنصَرُونَ "}, {"aya_id": 94, "coordinates": [[426, 52, 244, 34], [461, 52, 322, 34], [495, 52, 322, 34], [529, 107, 268, 34]], "aya_moshaf": "وَلَقَدۡ ءَاتَيۡنَا مُوسَى ٱلۡكِتَٰبَ وَقَفَّيۡنَا مِنۢ بَعۡدِهِۦ بِٱلرُّسُلِۖ وَءَاتَيۡنَا عِيسَى ٱبۡنَ مَرۡيَمَ ٱلۡبَيِّنَٰتِ وَأَيَّدۡنَٰهُ بِرُوحِ ٱلۡقُدُسِۗ أَفَكُلَّمَا جَآءَكُمۡ رَسُولُۢ بِمَا لَا تَهۡوَىٰٓ أَنفُسُكُمُ ٱسۡتَكۡبَرۡتُمۡ فَفَرِيقٗا كَذَّبۡتُمۡ وَفَرِيقٗا تَقۡتُلُونَ "}, {"aya_id": 95, "coordinates": [[529, 52, 55, 34], [564, 52, 322, 34]], "aya_moshaf": "وَقَالُواْ قُلُوبُنَا غُلۡفُۢۚ بَل لَّعَنَهُمُ ٱللَّهُ بِكُفۡرِهِمۡ فَقَلِيلٗا مَّا يُؤۡمِنُونَ "}]
const ayasRanges = [{"ayas_ids_range": [91, 95], "sura_id": 2}];
