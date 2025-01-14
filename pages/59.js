const nearbySurasNames = {
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
    5: 'المَائدة',
};
const choicesObjects = {
    "57": "ربنا امنا بما انزلت واتبعنا",
    "58": "ان هذا لهو القصص الحق",
    "60": "وان منهم لفريقا يلوون السنتهم",
    "61": "قل امنا بالله وما انزل",
};
const ayas = [{"aya_id": 364, "coordinates": [[87, 49, 322, 34], [121, 263, 109, 34]], "aya_moshaf": "يَٰٓأَهۡلَ ٱلۡكِتَٰبِ لِمَ تَلۡبِسُونَ ٱلۡحَقَّ بِٱلۡبَٰطِلِ وَتَكۡتُمُونَ ٱلۡحَقَّ وَأَنتُمۡ تَعۡلَمُونَ "}, {"aya_id": 365, "coordinates": [[121, 49, 214, 34], [156, 49, 322, 34], [190, 254, 118, 34]], "aya_moshaf": "وَقَالَت طَّآئِفَةٞ مِّنۡ أَهۡلِ ٱلۡكِتَٰبِ ءَامِنُواْ بِٱلَّذِيٓ أُنزِلَ عَلَى ٱلَّذِينَ ءَامَنُواْ وَجۡهَ ٱلنَّهَارِ وَٱكۡفُرُوٓاْ ءَاخِرَهُۥ لَعَلَّهُمۡ يَرۡجِعُونَ "}, {"aya_id": 366, "coordinates": [[190, 49, 205, 34], [224, 49, 322, 34], [259, 49, 322, 34], [293, 312, 60, 34]], "aya_moshaf": "وَلَا تُؤۡمِنُوٓاْ إِلَّا لِمَن تَبِعَ دِينَكُمۡ قُلۡ إِنَّ ٱلۡهُدَىٰ هُدَى ٱللَّهِ أَن يُؤۡتَىٰٓ أَحَدٞ مِّثۡلَ مَآ أُوتِيتُمۡ أَوۡ يُحَآجُّوكُمۡ عِندَ رَبِّكُمۡۗ قُلۡ إِنَّ ٱلۡفَضۡلَ بِيَدِ ٱللَّهِ يُؤۡتِيهِ مَن يَشَآءُۗ وَٱللَّهُ وَٰسِعٌ عَلِيمٞ "}, {"aya_id": 367, "coordinates": [[293, 49, 263, 34], [327, 294, 78, 34]], "aya_moshaf": "يَخۡتَصُّ بِرَحۡمَتِهِۦ مَن يَشَآءُۗ وَٱللَّهُ ذُو ٱلۡفَضۡلِ ٱلۡعَظِيمِ "}, {"aya_id": 368, "coordinates": [[327, 49, 245, 34], [362, 49, 322, 34], [396, 49, 322, 34], [430, 49, 322, 34]], "aya_moshaf": "۞ وَمِنۡ أَهۡلِ ٱلۡكِتَٰبِ مَنۡ إِن تَأۡمَنۡهُ بِقِنطَارٖ يُؤَدِّهِۦٓ إِلَيۡكَ وَمِنۡهُم مَّنۡ إِن تَأۡمَنۡهُ بِدِينَارٖ لَّا يُؤَدِّهِۦٓ إِلَيۡكَ إِلَّا مَا دُمۡتَ عَلَيۡهِ قَآئِمٗاۗ ذَٰلِكَ بِأَنَّهُمۡ قَالُواْ لَيۡسَ عَلَيۡنَا فِي ٱلۡأُمِّيِّـۧنَ سَبِيلٞ وَيَقُولُونَ عَلَى ٱللَّهِ ٱلۡكَذِبَ وَهُمۡ يَعۡلَمُونَ "}, {"aya_id": 369, "coordinates": [[465, 75, 297, 34]], "aya_moshaf": "بَلَىٰۚ مَنۡ أَوۡفَىٰ بِعَهۡدِهِۦ وَٱتَّقَىٰ فَإِنَّ ٱللَّهَ يُحِبُّ ٱلۡمُتَّقِينَ "}, {"aya_id": 370, "coordinates": [[465, 49, 26, 34], [499, 49, 322, 34], [533, 49, 322, 34], [568, 49, 322, 34]], "aya_moshaf": "إِنَّ ٱلَّذِينَ يَشۡتَرُونَ بِعَهۡدِ ٱللَّهِ وَأَيۡمَٰنِهِمۡ ثَمَنٗا قَلِيلًا أُوْلَٰٓئِكَ لَا خَلَٰقَ لَهُمۡ فِي ٱلۡأٓخِرَةِ وَلَا يُكَلِّمُهُمُ ٱللَّهُ وَلَا يَنظُرُ إِلَيۡهِمۡ يَوۡمَ ٱلۡقِيَٰمَةِ وَلَا يُزَكِّيهِمۡ وَلَهُمۡ عَذَابٌ أَلِيمٞ "}]
const ayasRanges = [{"ayas_ids_range": [364, 370], "sura_id": 3}];
