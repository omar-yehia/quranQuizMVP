const nearbySurasNames = {
    26: 'الشعراء',
    27: 'النَّمل',
    28: 'القَصَص',
    29: 'العَنكبُوت',
};
const choicesObjects = {
    "375": "واتقوا الذي خلقكم والجبله الاولين",
    "376": "ما اغني عنهم ما كانوا",
    "378": "وجحدوا بها واستيقنتها انفسهم ظلما",
    "379": "اني وجدت امراه تملكهم واوتيت",
};
const ayas = [{"aya_id": 3160, "coordinates": [[121, 132, 240, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ طسٓۚ تِلۡكَ ءَايَٰتُ ٱلۡقُرۡءَانِ وَكِتَابٖ مُّبِينٍ "}, {"aya_id": 3161, "coordinates": [[121, 49, 83, 34], [156, 295, 77, 34]], "aya_moshaf": "هُدٗى وَبُشۡرَىٰ لِلۡمُؤۡمِنِينَ "}, {"aya_id": 3162, "coordinates": [[156, 49, 246, 34], [190, 237, 135, 34]], "aya_moshaf": "ٱلَّذِينَ يُقِيمُونَ ٱلصَّلَوٰةَ وَيُؤۡتُونَ ٱلزَّكَوٰةَ وَهُم بِٱلۡأٓخِرَةِ هُمۡ يُوقِنُونَ "}, {"aya_id": 3163, "coordinates": [[190, 49, 188, 34], [224, 216, 156, 34]], "aya_moshaf": "إِنَّ ٱلَّذِينَ لَا يُؤۡمِنُونَ بِٱلۡأٓخِرَةِ زَيَّنَّا لَهُمۡ أَعۡمَٰلَهُمۡ فَهُمۡ يَعۡمَهُونَ "}, {"aya_id": 3164, "coordinates": [[224, 49, 167, 34], [259, 190, 182, 34]], "aya_moshaf": "أُوْلَٰٓئِكَ ٱلَّذِينَ لَهُمۡ سُوٓءُ ٱلۡعَذَابِ وَهُمۡ فِي ٱلۡأٓخِرَةِ هُمُ ٱلۡأَخۡسَرُونَ "}, {"aya_id": 3165, "coordinates": [[259, 49, 141, 34], [293, 270, 102, 34]], "aya_moshaf": "وَإِنَّكَ لَتُلَقَّى ٱلۡقُرۡءَانَ مِن لَّدُنۡ حَكِيمٍ عَلِيمٍ "}, {"aya_id": 3166, "coordinates": [[293, 49, 221, 34], [327, 82, 290, 34]], "aya_moshaf": "إِذۡ قَالَ مُوسَىٰ لِأَهۡلِهِۦٓ إِنِّيٓ ءَانَسۡتُ نَارٗا سَـَٔاتِيكُم مِّنۡهَا بِخَبَرٍ أَوۡ ءَاتِيكُم بِشِهَابٖ قَبَسٖ لَّعَلَّكُمۡ تَصۡطَلُونَ "}, {"aya_id": 3167, "coordinates": [[327, 49, 33, 34], [362, 49, 322, 34], [396, 304, 68, 34]], "aya_moshaf": "فَلَمَّا جَآءَهَا نُودِيَ أَنۢ بُورِكَ مَن فِي ٱلنَّارِ وَمَنۡ حَوۡلَهَا وَسُبۡحَٰنَ ٱللَّهِ رَبِّ ٱلۡعَٰلَمِينَ "}, {"aya_id": 3168, "coordinates": [[396, 118, 186, 34]], "aya_moshaf": "يَٰمُوسَىٰٓ إِنَّهُۥٓ أَنَا ٱللَّهُ ٱلۡعَزِيزُ ٱلۡحَكِيمُ "}, {"aya_id": 3169, "coordinates": [[396, 49, 69, 34], [430, 49, 322, 34], [465, 211, 161, 34]], "aya_moshaf": "وَأَلۡقِ عَصَاكَۚ فَلَمَّا رَءَاهَا تَهۡتَزُّ كَأَنَّهَا جَآنّٞ وَلَّىٰ مُدۡبِرٗا وَلَمۡ يُعَقِّبۡۚ يَٰمُوسَىٰ لَا تَخَفۡ إِنِّي لَا يَخَافُ لَدَيَّ ٱلۡمُرۡسَلُونَ "}, {"aya_id": 3170, "coordinates": [[465, 49, 162, 34], [499, 241, 131, 34]], "aya_moshaf": "إِلَّا مَن ظَلَمَ ثُمَّ بَدَّلَ حُسۡنَۢا بَعۡدَ سُوٓءٖ فَإِنِّي غَفُورٞ رَّحِيمٞ "}, {"aya_id": 3171, "coordinates": [[499, 49, 192, 34], [533, 49, 322, 34], [568, 347, 25, 34]], "aya_moshaf": "وَأَدۡخِلۡ يَدَكَ فِي جَيۡبِكَ تَخۡرُجۡ بَيۡضَآءَ مِنۡ غَيۡرِ سُوٓءٖۖ فِي تِسۡعِ ءَايَٰتٍ إِلَىٰ فِرۡعَوۡنَ وَقَوۡمِهِۦٓۚ إِنَّهُمۡ كَانُواْ قَوۡمٗا فَٰسِقِينَ "}, {"aya_id": 3172, "coordinates": [[568, 49, 298, 34]], "aya_moshaf": "فَلَمَّا جَآءَتۡهُمۡ ءَايَٰتُنَا مُبۡصِرَةٗ قَالُواْ هَٰذَا سِحۡرٞ مُّبِينٞ "}]
const ayasRanges = [{"ayas_ids_range": [3160, 3172], "sura_id": 27}];
