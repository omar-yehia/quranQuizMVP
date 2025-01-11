const mainSuraId = 6;
const nearbySurasNames = {
    5: 'المَائدة',
    6: 'الأنعَام',
    7: 'الأعرَاف',
    8: 'الأنفَال',
};
const choicesObjects = {
    "140": "ان الله فالق الحب والنوي",
    "141": "ذلكم الله ربكم لا اله",
    "143": "وما لكم الا تاكلوا مما",
    "144": "فمن يرد الله ان يهديه",
};
const ayas = [{"aya_id": 900, "coordinates": [[75, 88, 322, 34], [109, 88, 322, 34], [144, 272, 139, 34]], "aya_moshaf": "۞ وَلَوۡ أَنَّنَا نَزَّلۡنَآ إِلَيۡهِمُ ٱلۡمَلَٰٓئِكَةَ وَكَلَّمَهُمُ ٱلۡمَوۡتَىٰ وَحَشَرۡنَا عَلَيۡهِمۡ كُلَّ شَيۡءٖ قُبُلٗا مَّا كَانُواْ لِيُؤۡمِنُوٓاْ إِلَّآ أَن يَشَآءَ ٱللَّهُ وَلَٰكِنَّ أَكۡثَرَهُمۡ يَجۡهَلُونَ "}, {"aya_id": 901, "coordinates": [[144, 88, 184, 34], [178, 88, 322, 34], [212, 88, 322, 34], [247, 385, 26, 34]], "aya_moshaf": "وَكَذَٰلِكَ جَعَلۡنَا لِكُلِّ نَبِيٍّ عَدُوّٗا شَيَٰطِينَ ٱلۡإِنسِ وَٱلۡجِنِّ يُوحِي بَعۡضُهُمۡ إِلَىٰ بَعۡضٖ زُخۡرُفَ ٱلۡقَوۡلِ غُرُورٗاۚ وَلَوۡ شَآءَ رَبُّكَ مَا فَعَلُوهُۖ فَذَرۡهُمۡ وَمَا يَفۡتَرُونَ "}, {"aya_id": 902, "coordinates": [[247, 88, 297, 34], [281, 162, 249, 34]], "aya_moshaf": "وَلِتَصۡغَىٰٓ إِلَيۡهِ أَفۡـِٔدَةُ ٱلَّذِينَ لَا يُؤۡمِنُونَ بِٱلۡأٓخِرَةِ وَلِيَرۡضَوۡهُ وَلِيَقۡتَرِفُواْ مَا هُم مُّقۡتَرِفُونَ "}, {"aya_id": 903, "coordinates": [[281, 88, 74, 34], [315, 88, 322, 34], [350, 88, 322, 34], [384, 237, 174, 34]], "aya_moshaf": "أَفَغَيۡرَ ٱللَّهِ أَبۡتَغِي حَكَمٗا وَهُوَ ٱلَّذِيٓ أَنزَلَ إِلَيۡكُمُ ٱلۡكِتَٰبَ مُفَصَّلٗاۚ وَٱلَّذِينَ ءَاتَيۡنَٰهُمُ ٱلۡكِتَٰبَ يَعۡلَمُونَ أَنَّهُۥ مُنَزَّلٞ مِّن رَّبِّكَ بِٱلۡحَقِّۖ فَلَا تَكُونَنَّ مِنَ ٱلۡمُمۡتَرِينَ "}, {"aya_id": 904, "coordinates": [[384, 88, 149, 34], [418, 120, 291, 34]], "aya_moshaf": "وَتَمَّتۡ كَلِمَتُ رَبِّكَ صِدۡقٗا وَعَدۡلٗاۚ لَّا مُبَدِّلَ لِكَلِمَٰتِهِۦۚ وَهُوَ ٱلسَّمِيعُ ٱلۡعَلِيمُ "}, {"aya_id": 905, "coordinates": [[418, 88, 32, 34], [453, 88, 322, 34], [487, 164, 247, 34]], "aya_moshaf": "وَإِن تُطِعۡ أَكۡثَرَ مَن فِي ٱلۡأَرۡضِ يُضِلُّوكَ عَن سَبِيلِ ٱللَّهِۚ إِن يَتَّبِعُونَ إِلَّا ٱلظَّنَّ وَإِنۡ هُمۡ إِلَّا يَخۡرُصُونَ "}, {"aya_id": 906, "coordinates": [[487, 88, 76, 34], [521, 88, 322, 34]], "aya_moshaf": "إِنَّ رَبَّكَ هُوَ أَعۡلَمُ مَن يَضِلُّ عَن سَبِيلِهِۦۖ وَهُوَ أَعۡلَمُ بِٱلۡمُهۡتَدِينَ "}, {"aya_id": 907, "coordinates": [[556, 88, 322, 34]], "aya_moshaf": "فَكُلُواْ مِمَّا ذُكِرَ ٱسۡمُ ٱللَّهِ عَلَيۡهِ إِن كُنتُم بِـَٔايَٰتِهِۦ مُؤۡمِنِينَ "}]