const mainSuraId = 2;
const nearbySurasNames = {
    1: 'الفَاتِحة',
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
};
const choicesObjects = {
    "10": "ان الذين امنوا والذين هادوا",
    "11": "قالوا ادع لنا ربك يبين",
    "13": "واذ اخذنا ميثاقكم لا تسفكون",
    "14": "ولما جاءهم كتاب من عند",
};
const ayas = [{"aya_id": 84, "coordinates": [[81, 89, 322, 34]], "aya_moshaf": "أَوَلَا يَعۡلَمُونَ أَنَّ ٱللَّهَ يَعۡلَمُ مَا يُسِرُّونَ وَمَا يُعۡلِنُونَ "}, {"aya_id": 85, "coordinates": [[115, 89, 322, 34], [150, 321, 91, 34]], "aya_moshaf": "وَمِنۡهُمۡ أُمِّيُّونَ لَا يَعۡلَمُونَ ٱلۡكِتَٰبَ إِلَّآ أَمَانِيَّ وَإِنۡ هُمۡ إِلَّا يَظُنُّونَ "}, {"aya_id": 86, "coordinates": [[150, 89, 232, 34], [184, 89, 322, 34], [218, 89, 322, 34], [253, 389, 23, 34]], "aya_moshaf": "فَوَيۡلٞ لِّلَّذِينَ يَكۡتُبُونَ ٱلۡكِتَٰبَ بِأَيۡدِيهِمۡ ثُمَّ يَقُولُونَ هَٰذَا مِنۡ عِندِ ٱللَّهِ لِيَشۡتَرُواْ بِهِۦ ثَمَنٗا قَلِيلٗاۖ فَوَيۡلٞ لَّهُم مِّمَّا كَتَبَتۡ أَيۡدِيهِمۡ وَوَيۡلٞ لَّهُم مِّمَّا يَكۡسِبُونَ "}, {"aya_id": 87, "coordinates": [[253, 89, 300, 34], [287, 89, 322, 34], [321, 239, 173, 34]], "aya_moshaf": "وَقَالُواْ لَن تَمَسَّنَا ٱلنَّارُ إِلَّآ أَيَّامٗا مَّعۡدُودَةٗۚ قُلۡ أَتَّخَذۡتُمۡ عِندَ ٱللَّهِ عَهۡدٗا فَلَن يُخۡلِفَ ٱللَّهُ عَهۡدَهُۥٓۖ أَمۡ تَقُولُونَ عَلَى ٱللَّهِ مَا لَا تَعۡلَمُونَ "}, {"aya_id": 88, "coordinates": [[321, 89, 150, 34], [356, 89, 322, 34], [390, 296, 116, 34]], "aya_moshaf": "بَلَىٰۚ مَن كَسَبَ سَيِّئَةٗ وَأَحَٰطَتۡ بِهِۦ خَطِيٓـَٔتُهُۥ فَأُوْلَٰٓئِكَ أَصۡحَٰبُ ٱلنَّارِۖ هُمۡ فِيهَا خَٰلِدُونَ "}, {"aya_id": 89, "coordinates": [[390, 89, 207, 34], [424, 126, 286, 34]], "aya_moshaf": "وَٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ أُوْلَٰٓئِكَ أَصۡحَٰبُ ٱلۡجَنَّةِۖ هُمۡ فِيهَا خَٰلِدُونَ "}, {"aya_id": 90, "coordinates": [[424, 89, 37, 34], [459, 89, 322, 34], [493, 89, 322, 34], [527, 89, 322, 34], [562, 89, 322, 34]], "aya_moshaf": "وَإِذۡ أَخَذۡنَا مِيثَٰقَ بَنِيٓ إِسۡرَٰٓءِيلَ لَا تَعۡبُدُونَ إِلَّا ٱللَّهَ وَبِٱلۡوَٰلِدَيۡنِ إِحۡسَانٗا وَذِي ٱلۡقُرۡبَىٰ وَٱلۡيَتَٰمَىٰ وَٱلۡمَسَٰكِينِ وَقُولُواْ لِلنَّاسِ حُسۡنٗا وَأَقِيمُواْ ٱلصَّلَوٰةَ وَءَاتُواْ ٱلزَّكَوٰةَ ثُمَّ تَوَلَّيۡتُمۡ إِلَّا قَلِيلٗا مِّنكُمۡ وَأَنتُم مُّعۡرِضُونَ "}]