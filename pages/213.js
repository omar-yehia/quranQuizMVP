const mainSuraId = 10;
const nearbySurasNames = {
    9: 'التوبَة',
    10: 'يُونس',
    11: 'هُود',
    12: 'يُوسُف',
};
const choicesObjects = {
    "211": "واذا اذقنا الناس رحمه من",
    "212": "للذين احسنوا الحسني وزياده ولا",
    "214": "ومنهم من ينظر اليك افانت",
    "215": "ولو ان لكل نفس ظلمت",
};
const ayas = [{"aya_id": 1398, "coordinates": [[89, 49, 322, 34], [123, 196, 176, 34]], "aya_moshaf": "قُلۡ هَلۡ مِن شُرَكَآئِكُم مَّن يَبۡدَؤُاْ ٱلۡخَلۡقَ ثُمَّ يُعِيدُهُۥۚ قُلِ ٱللَّهُ يَبۡدَؤُاْ ٱلۡخَلۡقَ ثُمَّ يُعِيدُهُۥۖ فَأَنَّىٰ تُؤۡفَكُونَ "}, {"aya_id": 1399, "coordinates": [[123, 49, 147, 34], [158, 49, 322, 34], [192, 49, 322, 34]], "aya_moshaf": "قُلۡ هَلۡ مِن شُرَكَآئِكُم مَّن يَهۡدِيٓ إِلَى ٱلۡحَقِّۚ قُلِ ٱللَّهُ يَهۡدِي لِلۡحَقِّۗ أَفَمَن يَهۡدِيٓ إِلَى ٱلۡحَقِّ أَحَقُّ أَن يُتَّبَعَ أَمَّن لَّا يَهِدِّيٓ إِلَّآ أَن يُهۡدَىٰۖ فَمَا لَكُمۡ كَيۡفَ تَحۡكُمُونَ "}, {"aya_id": 1400, "coordinates": [[226, 49, 322, 34], [261, 266, 106, 34]], "aya_moshaf": "وَمَا يَتَّبِعُ أَكۡثَرُهُمۡ إِلَّا ظَنًّاۚ إِنَّ ٱلظَّنَّ لَا يُغۡنِي مِنَ ٱلۡحَقِّ شَيۡـًٔاۚ إِنَّ ٱللَّهَ عَلِيمُۢ بِمَا يَفۡعَلُونَ "}, {"aya_id": 1401, "coordinates": [[261, 49, 217, 34], [295, 49, 322, 34], [329, 239, 133, 34]], "aya_moshaf": "وَمَا كَانَ هَٰذَا ٱلۡقُرۡءَانُ أَن يُفۡتَرَىٰ مِن دُونِ ٱللَّهِ وَلَٰكِن تَصۡدِيقَ ٱلَّذِي بَيۡنَ يَدَيۡهِ وَتَفۡصِيلَ ٱلۡكِتَٰبِ لَا رَيۡبَ فِيهِ مِن رَّبِّ ٱلۡعَٰلَمِينَ "}, {"aya_id": 1402, "coordinates": [[329, 49, 190, 34], [364, 49, 322, 34]], "aya_moshaf": "أَمۡ يَقُولُونَ ٱفۡتَرَىٰهُۖ قُلۡ فَأۡتُواْ بِسُورَةٖ مِّثۡلِهِۦ وَٱدۡعُواْ مَنِ ٱسۡتَطَعۡتُم مِّن دُونِ ٱللَّهِ إِن كُنتُمۡ صَٰدِقِينَ "}, {"aya_id": 1403, "coordinates": [[398, 49, 322, 34], [432, 49, 322, 34]], "aya_moshaf": "بَلۡ كَذَّبُواْ بِمَا لَمۡ يُحِيطُواْ بِعِلۡمِهِۦ وَلَمَّا يَأۡتِهِمۡ تَأۡوِيلُهُۥۚ كَذَٰلِكَ كَذَّبَ ٱلَّذِينَ مِن قَبۡلِهِمۡۖ فَٱنظُرۡ كَيۡفَ كَانَ عَٰقِبَةُ ٱلظَّٰلِمِينَ "}, {"aya_id": 1404, "coordinates": [[467, 49, 322, 34], [501, 285, 87, 34]], "aya_moshaf": "وَمِنۡهُم مَّن يُؤۡمِنُ بِهِۦ وَمِنۡهُم مَّن لَّا يُؤۡمِنُ بِهِۦۚ وَرَبُّكَ أَعۡلَمُ بِٱلۡمُفۡسِدِينَ "}, {"aya_id": 1405, "coordinates": [[501, 49, 236, 34], [535, 103, 269, 34]], "aya_moshaf": "وَإِن كَذَّبُوكَ فَقُل لِّي عَمَلِي وَلَكُمۡ عَمَلُكُمۡۖ أَنتُم بَرِيٓـُٔونَ مِمَّآ أَعۡمَلُ وَأَنَا۠ بَرِيٓءٞ مِّمَّا تَعۡمَلُونَ "}, {"aya_id": 1406, "coordinates": [[535, 49, 54, 34], [570, 49, 322, 34]], "aya_moshaf": "وَمِنۡهُم مَّن يَسۡتَمِعُونَ إِلَيۡكَۚ أَفَأَنتَ تُسۡمِعُ ٱلصُّمَّ وَلَوۡ كَانُواْ لَا يَعۡقِلُونَ "}]