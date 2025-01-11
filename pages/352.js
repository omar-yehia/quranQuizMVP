const nearbySurasNames = {
    23: 'المؤمنُون',
    24: 'النور',
    25: 'الفُرقَان',
    26: 'الشعراء',
};
const choicesObjects = {
    "350": "سوره انزلناها وفرضناها وانزلنا فيها",
    "351": "ان الذين جاءوا بالافك عصبه",
    "353": "فان لم تجدوا فيها احدا",
    "354": "وانكحوا الايامي منكم والصالحين من",
};
const ayas = [{"aya_id": 2812, "coordinates": [[85, 89, 322, 34], [119, 89, 322, 34], [154, 89, 322, 34], [188, 259, 153, 34]], "aya_moshaf": "۞ يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَا تَتَّبِعُواْ خُطُوَٰتِ ٱلشَّيۡطَٰنِۚ وَمَن يَتَّبِعۡ خُطُوَٰتِ ٱلشَّيۡطَٰنِ فَإِنَّهُۥ يَأۡمُرُ بِٱلۡفَحۡشَآءِ وَٱلۡمُنكَرِۚ وَلَوۡلَا فَضۡلُ ٱللَّهِ عَلَيۡكُمۡ وَرَحۡمَتُهُۥ مَا زَكَىٰ مِنكُم مِّنۡ أَحَدٍ أَبَدٗا وَلَٰكِنَّ ٱللَّهَ يُزَكِّي مَن يَشَآءُۗ وَٱللَّهُ سَمِيعٌ عَلِيمٞ "}, {"aya_id": 2813, "coordinates": [[188, 89, 170, 34], [222, 89, 322, 34], [257, 89, 322, 34], [291, 296, 116, 34]], "aya_moshaf": "وَلَا يَأۡتَلِ أُوْلُواْ ٱلۡفَضۡلِ مِنكُمۡ وَٱلسَّعَةِ أَن يُؤۡتُوٓاْ أُوْلِي ٱلۡقُرۡبَىٰ وَٱلۡمَسَٰكِينَ وَٱلۡمُهَٰجِرِينَ فِي سَبِيلِ ٱللَّهِۖ وَلۡيَعۡفُواْ وَلۡيَصۡفَحُوٓاْۗ أَلَا تُحِبُّونَ أَن يَغۡفِرَ ٱللَّهُ لَكُمۡۚ وَٱللَّهُ غَفُورٞ رَّحِيمٌ "}, {"aya_id": 2814, "coordinates": [[291, 89, 207, 34], [325, 89, 322, 34]], "aya_moshaf": "إِنَّ ٱلَّذِينَ يَرۡمُونَ ٱلۡمُحۡصَنَٰتِ ٱلۡغَٰفِلَٰتِ ٱلۡمُؤۡمِنَٰتِ لُعِنُواْ فِي ٱلدُّنۡيَا وَٱلۡأٓخِرَةِ وَلَهُمۡ عَذَابٌ عَظِيمٞ "}, {"aya_id": 2815, "coordinates": [[360, 89, 322, 34], [394, 390, 22, 34]], "aya_moshaf": "يَوۡمَ تَشۡهَدُ عَلَيۡهِمۡ أَلۡسِنَتُهُمۡ وَأَيۡدِيهِمۡ وَأَرۡجُلُهُم بِمَا كَانُواْ يَعۡمَلُونَ "}, {"aya_id": 2816, "coordinates": [[394, 89, 301, 34], [428, 350, 62, 34]], "aya_moshaf": "يَوۡمَئِذٖ يُوَفِّيهِمُ ٱللَّهُ دِينَهُمُ ٱلۡحَقَّ وَيَعۡلَمُونَ أَنَّ ٱللَّهَ هُوَ ٱلۡحَقُّ ٱلۡمُبِينُ "}, {"aya_id": 2817, "coordinates": [[428, 89, 261, 34], [463, 89, 322, 34], [497, 153, 259, 34]], "aya_moshaf": "ٱلۡخَبِيثَٰتُ لِلۡخَبِيثِينَ وَٱلۡخَبِيثُونَ لِلۡخَبِيثَٰتِۖ وَٱلطَّيِّبَٰتُ لِلطَّيِّبِينَ وَٱلطَّيِّبُونَ لِلطَّيِّبَٰتِۚ أُوْلَٰٓئِكَ مُبَرَّءُونَ مِمَّا يَقُولُونَۖ لَهُم مَّغۡفِرَةٞ وَرِزۡقٞ كَرِيمٞ "}, {"aya_id": 2818, "coordinates": [[497, 89, 64, 34], [531, 89, 322, 34], [566, 89, 322, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَا تَدۡخُلُواْ بُيُوتًا غَيۡرَ بُيُوتِكُمۡ حَتَّىٰ تَسۡتَأۡنِسُواْ وَتُسَلِّمُواْ عَلَىٰٓ أَهۡلِهَاۚ ذَٰلِكُمۡ خَيۡرٞ لَّكُمۡ لَعَلَّكُمۡ تَذَكَّرُونَ "}]
const ayasRanges = [{"ayas_ids_range": [2812, 2818], "sura_id": 24}];
