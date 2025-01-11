const mainSuraId = 10;
const nearbySurasNames = {
    9: 'التوبَة',
    10: 'يُونس',
    11: 'هُود',
    12: 'يُوسُف',
};
const choicesObjects = {
    "217": "واتل عليهم نبا نوح اذ",
    "218": "وقال فرعون ائتوني بكل ساحر",
    "220": "فلولا كانت قريه امنت فنفعها",
    "221": "وان يمسسك الله بضر فلا",
};
const ayas = [{"aya_id": 1453, "coordinates": [[90, 47, 322, 34], [124, 237, 133, 34]], "aya_moshaf": "قَالَ قَدۡ أُجِيبَت دَّعۡوَتُكُمَا فَٱسۡتَقِيمَا وَلَا تَتَّبِعَآنِّ سَبِيلَ ٱلَّذِينَ لَا يَعۡلَمُونَ "}, {"aya_id": 1454, "coordinates": [[124, 47, 190, 34], [159, 47, 322, 34], [193, 47, 322, 34], [227, 249, 121, 34]], "aya_moshaf": "۞ وَجَٰوَزۡنَا بِبَنِيٓ إِسۡرَٰٓءِيلَ ٱلۡبَحۡرَ فَأَتۡبَعَهُمۡ فِرۡعَوۡنُ وَجُنُودُهُۥ بَغۡيٗا وَعَدۡوًاۖ حَتَّىٰٓ إِذَآ أَدۡرَكَهُ ٱلۡغَرَقُ قَالَ ءَامَنتُ أَنَّهُۥ لَآ إِلَٰهَ إِلَّا ٱلَّذِيٓ ءَامَنَتۡ بِهِۦ بَنُوٓاْ إِسۡرَٰٓءِيلَ وَأَنَا۠ مِنَ ٱلۡمُسۡلِمِينَ "}, {"aya_id": 1455, "coordinates": [[227, 47, 202, 34], [262, 261, 109, 34]], "aya_moshaf": "ءَآلۡـَٰٔنَ وَقَدۡ عَصَيۡتَ قَبۡلُ وَكُنتَ مِنَ ٱلۡمُفۡسِدِينَ "}, {"aya_id": 1456, "coordinates": [[262, 47, 214, 34], [296, 47, 322, 34]], "aya_moshaf": "فَٱلۡيَوۡمَ نُنَجِّيكَ بِبَدَنِكَ لِتَكُونَ لِمَنۡ خَلۡفَكَ ءَايَةٗۚ وَإِنَّ كَثِيرٗا مِّنَ ٱلنَّاسِ عَنۡ ءَايَٰتِنَا لَغَٰفِلُونَ "}, {"aya_id": 1457, "coordinates": [[330, 47, 322, 34], [365, 47, 322, 34], [399, 215, 155, 34]], "aya_moshaf": "وَلَقَدۡ بَوَّأۡنَا بَنِيٓ إِسۡرَٰٓءِيلَ مُبَوَّأَ صِدۡقٖ وَرَزَقۡنَٰهُم مِّنَ ٱلطَّيِّبَٰتِ فَمَا ٱخۡتَلَفُواْ حَتَّىٰ جَآءَهُمُ ٱلۡعِلۡمُۚ إِنَّ رَبَّكَ يَقۡضِي بَيۡنَهُمۡ يَوۡمَ ٱلۡقِيَٰمَةِ فِيمَا كَانُواْ فِيهِ يَخۡتَلِفُونَ "}, {"aya_id": 1458, "coordinates": [[399, 47, 168, 34], [433, 47, 322, 34], [468, 113, 257, 34]], "aya_moshaf": "فَإِن كُنتَ فِي شَكّٖ مِّمَّآ أَنزَلۡنَآ إِلَيۡكَ فَسۡـَٔلِ ٱلَّذِينَ يَقۡرَءُونَ ٱلۡكِتَٰبَ مِن قَبۡلِكَۚ لَقَدۡ جَآءَكَ ٱلۡحَقُّ مِن رَّبِّكَ فَلَا تَكُونَنَّ مِنَ ٱلۡمُمۡتَرِينَ "}, {"aya_id": 1459, "coordinates": [[468, 47, 66, 34], [502, 47, 322, 34], [536, 345, 25, 34]], "aya_moshaf": "وَلَا تَكُونَنَّ مِنَ ٱلَّذِينَ كَذَّبُواْ بِـَٔايَٰتِ ٱللَّهِ فَتَكُونَ مِنَ ٱلۡخَٰسِرِينَ "}, {"aya_id": 1460, "coordinates": [[536, 47, 298, 34], [571, 345, 25, 34]], "aya_moshaf": "إِنَّ ٱلَّذِينَ حَقَّتۡ عَلَيۡهِمۡ كَلِمَتُ رَبِّكَ لَا يُؤۡمِنُونَ "}, {"aya_id": 1461, "coordinates": [[571, 47, 298, 34]], "aya_moshaf": "وَلَوۡ جَآءَتۡهُمۡ كُلُّ ءَايَةٍ حَتَّىٰ يَرَوُاْ ٱلۡعَذَابَ ٱلۡأَلِيمَ "}]