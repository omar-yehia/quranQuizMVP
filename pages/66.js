const mainSuraId = 3;
const nearbySurasNames = {
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
    5: 'المَائدة',
};
const choicesObjects = {
    "64": "ولله ما في السموات وما",
    "65": "ان الذين كفروا لن تغني",
    "67": "وسارعوا الي مغفره من ربكم",
    "68": "وليمحص الله الذين امنوا ويمحق",
};
const ayas = [{"aya_id": 415, "coordinates": [[86, 87, 322, 34], [120, 255, 155, 34]], "aya_moshaf": "إِذۡ هَمَّت طَّآئِفَتَانِ مِنكُمۡ أَن تَفۡشَلَا وَٱللَّهُ وَلِيُّهُمَاۗ وَعَلَى ٱللَّهِ فَلۡيَتَوَكَّلِ ٱلۡمُؤۡمِنُونَ "}, {"aya_id": 416, "coordinates": [[120, 87, 168, 34], [155, 203, 207, 34]], "aya_moshaf": "وَلَقَدۡ نَصَرَكُمُ ٱللَّهُ بِبَدۡرٖ وَأَنتُمۡ أَذِلَّةٞۖ فَٱتَّقُواْ ٱللَّهَ لَعَلَّكُمۡ تَشۡكُرُونَ "}, {"aya_id": 417, "coordinates": [[155, 87, 116, 34], [189, 87, 322, 34], [223, 341, 69, 34]], "aya_moshaf": "إِذۡ تَقُولُ لِلۡمُؤۡمِنِينَ أَلَن يَكۡفِيَكُمۡ أَن يُمِدَّكُمۡ رَبُّكُم بِثَلَٰثَةِ ءَالَٰفٖ مِّنَ ٱلۡمَلَٰٓئِكَةِ مُنزَلِينَ "}, {"aya_id": 418, "coordinates": [[223, 87, 254, 34], [258, 87, 322, 34], [292, 388, 22, 34]], "aya_moshaf": "بَلَىٰٓۚ إِن تَصۡبِرُواْ وَتَتَّقُواْ وَيَأۡتُوكُم مِّن فَوۡرِهِمۡ هَٰذَا يُمۡدِدۡكُمۡ رَبُّكُم بِخَمۡسَةِ ءَالَٰفٖ مِّنَ ٱلۡمَلَٰٓئِكَةِ مُسَوِّمِينَ "}, {"aya_id": 419, "coordinates": [[292, 87, 301, 34], [326, 171, 239, 34]], "aya_moshaf": "وَمَا جَعَلَهُ ٱللَّهُ إِلَّا بُشۡرَىٰ لَكُمۡ وَلِتَطۡمَئِنَّ قُلُوبُكُم بِهِۦۗ وَمَا ٱلنَّصۡرُ إِلَّا مِنۡ عِندِ ٱللَّهِ ٱلۡعَزِيزِ ٱلۡحَكِيمِ "}, {"aya_id": 420, "coordinates": [[326, 87, 84, 34], [361, 151, 259, 34]], "aya_moshaf": "لِيَقۡطَعَ طَرَفٗا مِّنَ ٱلَّذِينَ كَفَرُوٓاْ أَوۡ يَكۡبِتَهُمۡ فَيَنقَلِبُواْ خَآئِبِينَ "}, {"aya_id": 421, "coordinates": [[361, 87, 64, 34], [395, 87, 322, 34], [429, 383, 27, 34]], "aya_moshaf": "لَيۡسَ لَكَ مِنَ ٱلۡأَمۡرِ شَيۡءٌ أَوۡ يَتُوبَ عَلَيۡهِمۡ أَوۡ يُعَذِّبَهُمۡ فَإِنَّهُمۡ ظَٰلِمُونَ "}, {"aya_id": 422, "coordinates": [[429, 87, 296, 34], [464, 182, 228, 34]], "aya_moshaf": "وَلِلَّهِ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۚ يَغۡفِرُ لِمَن يَشَآءُ وَيُعَذِّبُ مَن يَشَآءُۚ وَٱللَّهُ غَفُورٞ رَّحِيمٞ "}, {"aya_id": 423, "coordinates": [[464, 87, 95, 34], [498, 87, 322, 34], [532, 292, 118, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَا تَأۡكُلُواْ ٱلرِّبَوٰٓاْ أَضۡعَٰفٗا مُّضَٰعَفَةٗۖ وَٱتَّقُواْ ٱللَّهَ لَعَلَّكُمۡ تُفۡلِحُونَ "}, {"aya_id": 424, "coordinates": [[532, 87, 205, 34], [567, 386, 24, 34]], "aya_moshaf": "وَٱتَّقُواْ ٱلنَّارَ ٱلَّتِيٓ أُعِدَّتۡ لِلۡكَٰفِرِينَ "}, {"aya_id": 425, "coordinates": [[567, 87, 299, 34]], "aya_moshaf": "وَأَطِيعُواْ ٱللَّهَ وَٱلرَّسُولَ لَعَلَّكُمۡ تُرۡحَمُونَ "}]