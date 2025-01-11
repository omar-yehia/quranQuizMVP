const mainSuraId = 18;
const nearbySurasNames = {
    17: 'الإسرَاء',
    18: 'الكَهف',
    19: 'مَريَم',
    20: 'طه',
};
const choicesObjects = {
    "301": "فلما جاوزا قال لفتاه اتنا",
    "302": "قال الم اقل لك انك",
    "304": "قال هذا رحمه من ربي",
    "305": "كهيعص",
};
const ayas = [{"aya_id": 2224, "coordinates": [[87, 114, 258, 34]], "aya_moshaf": "إِنَّا مَكَّنَّا لَهُۥ فِي ٱلۡأَرۡضِ وَءَاتَيۡنَٰهُ مِن كُلِّ شَيۡءٖ سَبَبٗا "}, {"aya_id": 2225, "coordinates": [[87, 49, 65, 34], [121, 347, 25, 34]], "aya_moshaf": "فَأَتۡبَعَ سَبَبًا "}, {"aya_id": 2226, "coordinates": [[121, 49, 298, 34], [156, 49, 322, 34], [190, 292, 80, 34]], "aya_moshaf": "حَتَّىٰٓ إِذَا بَلَغَ مَغۡرِبَ ٱلشَّمۡسِ وَجَدَهَا تَغۡرُبُ فِي عَيۡنٍ حَمِئَةٖ وَوَجَدَ عِندَهَا قَوۡمٗاۖ قُلۡنَا يَٰذَا ٱلۡقَرۡنَيۡنِ إِمَّآ أَن تُعَذِّبَ وَإِمَّآ أَن تَتَّخِذَ فِيهِمۡ حُسۡنٗا "}, {"aya_id": 2227, "coordinates": [[190, 49, 243, 34], [224, 251, 121, 34]], "aya_moshaf": "قَالَ أَمَّا مَن ظَلَمَ فَسَوۡفَ نُعَذِّبُهُۥ ثُمَّ يُرَدُّ إِلَىٰ رَبِّهِۦ فَيُعَذِّبُهُۥ عَذَابٗا نُّكۡرٗا "}, {"aya_id": 2228, "coordinates": [[224, 49, 202, 34], [259, 176, 196, 34]], "aya_moshaf": "وَأَمَّا مَنۡ ءَامَنَ وَعَمِلَ صَٰلِحٗا فَلَهُۥ جَزَآءً ٱلۡحُسۡنَىٰۖ وَسَنَقُولُ لَهُۥ مِنۡ أَمۡرِنَا يُسۡرٗا "}, {"aya_id": 2229, "coordinates": [[259, 82, 94, 34]], "aya_moshaf": "ثُمَّ أَتۡبَعَ سَبَبًا "}, {"aya_id": 2230, "coordinates": [[259, 49, 33, 34], [293, 49, 322, 34], [327, 287, 85, 34]], "aya_moshaf": "حَتَّىٰٓ إِذَا بَلَغَ مَطۡلِعَ ٱلشَّمۡسِ وَجَدَهَا تَطۡلُعُ عَلَىٰ قَوۡمٖ لَّمۡ نَجۡعَل لَّهُم مِّن دُونِهَا سِتۡرٗا "}, {"aya_id": 2231, "coordinates": [[327, 97, 190, 34]], "aya_moshaf": "كَذَٰلِكَۖ وَقَدۡ أَحَطۡنَا بِمَا لَدَيۡهِ خُبۡرٗا "}, {"aya_id": 2232, "coordinates": [[327, 49, 48, 34], [362, 318, 54, 34]], "aya_moshaf": "ثُمَّ أَتۡبَعَ سَبَبًا "}, {"aya_id": 2233, "coordinates": [[362, 49, 269, 34], [396, 233, 139, 34]], "aya_moshaf": "حَتَّىٰٓ إِذَا بَلَغَ بَيۡنَ ٱلسَّدَّيۡنِ وَجَدَ مِن دُونِهِمَا قَوۡمٗا لَّا يَكَادُونَ يَفۡقَهُونَ قَوۡلٗا "}, {"aya_id": 2234, "coordinates": [[396, 49, 184, 34], [430, 49, 322, 34], [465, 324, 48, 34]], "aya_moshaf": "قَالُواْ يَٰذَا ٱلۡقَرۡنَيۡنِ إِنَّ يَأۡجُوجَ وَمَأۡجُوجَ مُفۡسِدُونَ فِي ٱلۡأَرۡضِ فَهَلۡ نَجۡعَلُ لَكَ خَرۡجًا عَلَىٰٓ أَن تَجۡعَلَ بَيۡنَنَا وَبَيۡنَهُمۡ سَدّٗا "}, {"aya_id": 2235, "coordinates": [[465, 49, 275, 34], [499, 293, 79, 34]], "aya_moshaf": "قَالَ مَا مَكَّنِّي فِيهِ رَبِّي خَيۡرٞ فَأَعِينُونِي بِقُوَّةٍ أَجۡعَلۡ بَيۡنَكُمۡ وَبَيۡنَهُمۡ رَدۡمًا "}, {"aya_id": 2236, "coordinates": [[499, 49, 244, 34], [533, 49, 322, 34], [568, 352, 20, 34]], "aya_moshaf": "ءَاتُونِي زُبَرَ ٱلۡحَدِيدِۖ حَتَّىٰٓ إِذَا سَاوَىٰ بَيۡنَ ٱلصَّدَفَيۡنِ قَالَ ٱنفُخُواْۖ حَتَّىٰٓ إِذَا جَعَلَهُۥ نَارٗا قَالَ ءَاتُونِيٓ أُفۡرِغۡ عَلَيۡهِ قِطۡرٗا "}, {"aya_id": 2237, "coordinates": [[568, 49, 303, 34]], "aya_moshaf": "فَمَا ٱسۡطَٰعُوٓاْ أَن يَظۡهَرُوهُ وَمَا ٱسۡتَطَٰعُواْ لَهُۥ نَقۡبٗا "}]