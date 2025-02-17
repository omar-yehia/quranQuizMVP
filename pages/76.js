const nearbySurasNames = {
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
    5: 'المَائدة',
};
const choicesObjects = {
    "74": "لقد سمع الله قول الذين",
    "75": "واذ اخذ الله ميثاق الذين",
    "77": "ياايها الناس اتقوا ربكم الذي",
    "78": "للرجال نصيب مما ترك الوالدان",
};
const ayas = [{"aya_id": 488, "coordinates": [[75, 90, 322, 34], [109, 90, 322, 34], [144, 90, 322, 34], [178, 90, 322, 34], [212, 90, 322, 34]], "aya_moshaf": "فَٱسۡتَجَابَ لَهُمۡ رَبُّهُمۡ أَنِّي لَآ أُضِيعُ عَمَلَ عَٰمِلٖ مِّنكُم مِّن ذَكَرٍ أَوۡ أُنثَىٰۖ بَعۡضُكُم مِّنۢ بَعۡضٖۖ فَٱلَّذِينَ هَاجَرُواْ وَأُخۡرِجُواْ مِن دِيَٰرِهِمۡ وَأُوذُواْ فِي سَبِيلِي وَقَٰتَلُواْ وَقُتِلُواْ لَأُكَفِّرَنَّ عَنۡهُمۡ سَيِّـَٔاتِهِمۡ وَلَأُدۡخِلَنَّهُمۡ جَنَّٰتٖ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُ ثَوَابٗا مِّنۡ عِندِ ٱللَّهِۚ وَٱللَّهُ عِندَهُۥ حُسۡنُ ٱلثَّوَابِ "}, {"aya_id": 489, "coordinates": [[247, 161, 252, 34]], "aya_moshaf": "لَا يَغُرَّنَّكَ تَقَلُّبُ ٱلَّذِينَ كَفَرُواْ فِي ٱلۡبِلَٰدِ "}, {"aya_id": 490, "coordinates": [[247, 90, 71, 34], [281, 196, 217, 34]], "aya_moshaf": "مَتَٰعٞ قَلِيلٞ ثُمَّ مَأۡوَىٰهُمۡ جَهَنَّمُۖ وَبِئۡسَ ٱلۡمِهَادُ "}, {"aya_id": 491, "coordinates": [[281, 90, 106, 34], [315, 90, 322, 34], [350, 146, 267, 34]], "aya_moshaf": "لَٰكِنِ ٱلَّذِينَ ٱتَّقَوۡاْ رَبَّهُمۡ لَهُمۡ جَنَّٰتٞ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُ خَٰلِدِينَ فِيهَا نُزُلٗا مِّنۡ عِندِ ٱللَّهِۗ وَمَا عِندَ ٱللَّهِ خَيۡرٞ لِّلۡأَبۡرَارِ "}, {"aya_id": 492, "coordinates": [[350, 90, 56, 34], [384, 90, 322, 34], [418, 90, 322, 34], [453, 90, 322, 34], [487, 280, 133, 34]], "aya_moshaf": "وَإِنَّ مِنۡ أَهۡلِ ٱلۡكِتَٰبِ لَمَن يُؤۡمِنُ بِٱللَّهِ وَمَآ أُنزِلَ إِلَيۡكُمۡ وَمَآ أُنزِلَ إِلَيۡهِمۡ خَٰشِعِينَ لِلَّهِ لَا يَشۡتَرُونَ بِـَٔايَٰتِ ٱللَّهِ ثَمَنٗا قَلِيلًاۚ أُوْلَٰٓئِكَ لَهُمۡ أَجۡرُهُمۡ عِندَ رَبِّهِمۡۗ إِنَّ ٱللَّهَ سَرِيعُ ٱلۡحِسَابِ "}, {"aya_id": 493, "coordinates": [[487, 90, 190, 34], [521, 90, 322, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ ٱصۡبِرُواْ وَصَابِرُواْ وَرَابِطُواْ وَٱتَّقُواْ ٱللَّهَ لَعَلَّكُمۡ تُفۡلِحُونَ "}]
const ayasRanges = [{"ayas_ids_range": [488, 493], "sura_id": 3}];
