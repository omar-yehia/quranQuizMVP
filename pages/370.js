const nearbySurasNames = {
    25: 'الفُرقَان',
    26: 'الشعراء',
    27: 'النَّمل',
    28: 'القَصَص',
};
const choicesObjects = {
    "368": "قال فعلتها اذا وانا من",
    "369": "لعلنا نتبع السحره ان كانوا",
    "371": "واجعل لي لسان صدق في",
    "372": "قال وما علمي بما كانوا",
};
const ayas = [{"aya_id": 2993, "coordinates": [[85, 111, 297, 34]], "aya_moshaf": "فَلَمَّا تَرَٰٓءَا ٱلۡجَمۡعَانِ قَالَ أَصۡحَٰبُ مُوسَىٰٓ إِنَّا لَمُدۡرَكُونَ "}, {"aya_id": 2994, "coordinates": [[85, 85, 26, 34], [119, 251, 157, 34]], "aya_moshaf": "قَالَ كـَلَّآۖ إِنَّ مَعِيَ رَبِّي سَيَهۡدِينِ "}, {"aya_id": 2995, "coordinates": [[119, 85, 166, 34], [154, 85, 322, 34]], "aya_moshaf": "فَأَوۡحَيۡنَآ إِلَىٰ مُوسَىٰٓ أَنِ ٱضۡرِب بِّعَصَاكَ ٱلۡبَحۡرَۖ فَٱنفَلَقَ فَكَانَ كُلُّ فِرۡقٖ كَٱلطَّوۡدِ ٱلۡعَظِيمِ "}, {"aya_id": 2996, "coordinates": [[188, 282, 126, 34]], "aya_moshaf": "وَأَزۡلَفۡنَا ثَمَّ ٱلۡأٓخَرِينَ "}, {"aya_id": 2997, "coordinates": [[188, 85, 197, 34]], "aya_moshaf": "وَأَنجَيۡنَا مُوسَىٰ وَمَن مَّعَهُۥٓ أَجۡمَعِينَ "}, {"aya_id": 2998, "coordinates": [[222, 269, 139, 34]], "aya_moshaf": "ثُمَّ أَغۡرَقۡنَا ٱلۡأٓخَرِينَ "}, {"aya_id": 2999, "coordinates": [[222, 85, 184, 34], [257, 339, 69, 34]], "aya_moshaf": "إِنَّ فِي ذَٰلِكَ لَأٓيَةٗۖ وَمَا كَانَ أَكۡثَرُهُم مُّؤۡمِنِينَ "}, {"aya_id": 3000, "coordinates": [[257, 162, 177, 34]], "aya_moshaf": "وَإِنَّ رَبَّكَ لَهُوَ ٱلۡعَزِيزُ ٱلرَّحِيمُ "}, {"aya_id": 3001, "coordinates": [[257, 85, 77, 34], [291, 320, 88, 34]], "aya_moshaf": "وَٱتۡلُ عَلَيۡهِمۡ نَبَأَ إِبۡرَٰهِيمَ "}, {"aya_id": 3002, "coordinates": [[291, 120, 200, 34]], "aya_moshaf": "إِذۡ قَالَ لِأَبِيهِ وَقَوۡمِهِۦ مَا تَعۡبُدُونَ "}, {"aya_id": 3003, "coordinates": [[291, 85, 35, 34], [325, 214, 194, 34]], "aya_moshaf": "قَالُواْ نَعۡبُدُ أَصۡنَامٗا فَنَظَلُّ لَهَا عَٰكِفِينَ "}, {"aya_id": 3004, "coordinates": [[325, 85, 129, 34], [360, 344, 64, 34]], "aya_moshaf": "قَالَ هَلۡ يَسۡمَعُونَكُمۡ إِذۡ تَدۡعُونَ "}, {"aya_id": 3005, "coordinates": [[360, 196, 148, 34]], "aya_moshaf": "أَوۡ يَنفَعُونَكُمۡ أَوۡ يَضُرُّونَ "}, {"aya_id": 3006, "coordinates": [[360, 85, 111, 34], [394, 305, 103, 34]], "aya_moshaf": "قَالُواْ بَلۡ وَجَدۡنَآ ءَابَآءَنَا كَذَٰلِكَ يَفۡعَلُونَ "}, {"aya_id": 3007, "coordinates": [[394, 124, 181, 34]], "aya_moshaf": "قَالَ أَفَرَءَيۡتُم مَّا كُنتُمۡ تَعۡبُدُونَ "}, {"aya_id": 3008, "coordinates": [[394, 85, 39, 34], [428, 255, 153, 34]], "aya_moshaf": "أَنتُمۡ وَءَابَآؤُكُمُ ٱلۡأَقۡدَمُونَ "}, {"aya_id": 3009, "coordinates": [[428, 85, 170, 34], [463, 384, 24, 34]], "aya_moshaf": "فَإِنَّهُمۡ عَدُوّٞ لِّيٓ إِلَّا رَبَّ ٱلۡعَٰلَمِينَ "}, {"aya_id": 3010, "coordinates": [[463, 233, 151, 34]], "aya_moshaf": "ٱلَّذِي خَلَقَنِي فَهُوَ يَهۡدِينِ "}, {"aya_id": 3011, "coordinates": [[463, 85, 148, 34], [497, 385, 23, 34]], "aya_moshaf": "وَٱلَّذِي هُوَ يُطۡعِمُنِي وَيَسۡقِينِ "}, {"aya_id": 3012, "coordinates": [[497, 203, 182, 34]], "aya_moshaf": "وَإِذَا مَرِضۡتُ فَهُوَ يَشۡفِينِ "}, {"aya_id": 3013, "coordinates": [[497, 85, 118, 34], [531, 343, 65, 34]], "aya_moshaf": "وَٱلَّذِي يُمِيتُنِي ثُمَّ يُحۡيِينِ "}, {"aya_id": 3014, "coordinates": [[531, 85, 258, 34], [566, 378, 30, 34]], "aya_moshaf": "وَٱلَّذِيٓ أَطۡمَعُ أَن يَغۡفِرَ لِي خَطِيٓـَٔتِي يَوۡمَ ٱلدِّينِ "}, {"aya_id": 3015, "coordinates": [[566, 85, 293, 34]], "aya_moshaf": "رَبِّ هَبۡ لِي حُكۡمٗا وَأَلۡحِقۡنِي بِٱلصَّٰلِحِينَ "}]
const ayasRanges = [{"ayas_ids_range": [2993, 3015], "sura_id": 26}];
