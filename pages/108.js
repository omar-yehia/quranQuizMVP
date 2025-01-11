const mainSuraId = 5;
const nearbySurasNames = {
    4: 'النِّسَاء',
    5: 'المَائدة',
    6: 'الأنعَام',
    7: 'الأعرَاف',
};
const choicesObjects = {
    "106": "يستفتونك قل الله يفتيكم في",
    "107": "حرمت عليكم الميته والدم ولحم",
    "109": "والذين كفروا وكذبوا باياتنا اولئك",
    "110": "ومن الذين قالوا انا نصاري",
};
const ayas = [{"aya_id": 675, "coordinates": [[80, 92, 322, 34], [114, 92, 322, 34], [149, 92, 322, 34], [183, 92, 322, 34], [217, 92, 322, 34], [252, 92, 322, 34], [286, 92, 322, 34], [320, 92, 322, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓاْ إِذَا قُمۡتُمۡ إِلَى ٱلصَّلَوٰةِ فَٱغۡسِلُواْ وُجُوهَكُمۡ وَأَيۡدِيَكُمۡ إِلَى ٱلۡمَرَافِقِ وَٱمۡسَحُواْ بِرُءُوسِكُمۡ وَأَرۡجُلَكُمۡ إِلَى ٱلۡكَعۡبَيۡنِۚ وَإِن كُنتُمۡ جُنُبٗا فَٱطَّهَّرُواْۚ وَإِن كُنتُم مَّرۡضَىٰٓ أَوۡ عَلَىٰ سَفَرٍ أَوۡ جَآءَ أَحَدٞ مِّنكُم مِّنَ ٱلۡغَآئِطِ أَوۡ لَٰمَسۡتُمُ ٱلنِّسَآءَ فَلَمۡ تَجِدُواْ مَآءٗ فَتَيَمَّمُواْ صَعِيدٗا طَيِّبٗا فَٱمۡسَحُواْ بِوُجُوهِكُمۡ وَأَيۡدِيكُم مِّنۡهُۚ مَا يُرِيدُ ٱللَّهُ لِيَجۡعَلَ عَلَيۡكُم مِّنۡ حَرَجٖ وَلَٰكِن يُرِيدُ لِيُطَهِّرَكُمۡ وَلِيُتِمَّ نِعۡمَتَهُۥ عَلَيۡكُمۡ لَعَلَّكُمۡ تَشۡكُرُونَ "}, {"aya_id": 676, "coordinates": [[355, 92, 322, 34], [389, 92, 322, 34], [423, 331, 84, 34]], "aya_moshaf": "وَٱذۡكُرُواْ نِعۡمَةَ ٱللَّهِ عَلَيۡكُمۡ وَمِيثَٰقَهُ ٱلَّذِي وَاثَقَكُم بِهِۦٓ إِذۡ قُلۡتُمۡ سَمِعۡنَا وَأَطَعۡنَاۖ وَٱتَّقُواْ ٱللَّهَۚ إِنَّ ٱللَّهَ عَلِيمُۢ بِذَاتِ ٱلصُّدُورِ "}, {"aya_id": 677, "coordinates": [[423, 92, 239, 34], [458, 92, 322, 34], [492, 92, 322, 34], [526, 221, 194, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ كُونُواْ قَوَّٰمِينَ لِلَّهِ شُهَدَآءَ بِٱلۡقِسۡطِۖ وَلَا يَجۡرِمَنَّكُمۡ شَنَـَٔانُ قَوۡمٍ عَلَىٰٓ أَلَّا تَعۡدِلُواْۚ ٱعۡدِلُواْ هُوَ أَقۡرَبُ لِلتَّقۡوَىٰۖ وَٱتَّقُواْ ٱللَّهَۚ إِنَّ ٱللَّهَ خَبِيرُۢ بِمَا تَعۡمَلُونَ "}, {"aya_id": 678, "coordinates": [[526, 92, 129, 34], [561, 92, 322, 34]], "aya_moshaf": "وَعَدَ ٱللَّهُ ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ لَهُم مَّغۡفِرَةٞ وَأَجۡرٌ عَظِيمٞ "}]