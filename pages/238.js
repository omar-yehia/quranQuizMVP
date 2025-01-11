const mainSuraId = 12;
const nearbySurasNames = {
    11: 'هُود',
    12: 'يُوسُف',
    13: 'الرَّعد',
    14: 'إبراهِيم',
};
const choicesObjects = {
    "236": "قال يابني لا تقصص رؤياك",
    "237": "فلما ذهبوا به واجمعوا ان",
    "239": "فلما سمعت بمكرهن ارسلت اليهن",
    "240": "واتبعت مله ابائي ابراهيم واسحاق",
};
const ayas = [{"aya_id": 1619, "coordinates": [[76, 89, 322, 34], [110, 89, 322, 34], [145, 239, 173, 34]], "aya_moshaf": "وَرَٰوَدَتۡهُ ٱلَّتِي هُوَ فِي بَيۡتِهَا عَن نَّفۡسِهِۦ وَغَلَّقَتِ ٱلۡأَبۡوَٰبَ وَقَالَتۡ هَيۡتَ لَكَۚ قَالَ مَعَاذَ ٱللَّهِۖ إِنَّهُۥ رَبِّيٓ أَحۡسَنَ مَثۡوَايَۖ إِنَّهُۥ لَا يُفۡلِحُ ٱلظَّٰلِمُونَ "}, {"aya_id": 1620, "coordinates": [[145, 89, 150, 34], [179, 89, 322, 34], [213, 158, 254, 34]], "aya_moshaf": "وَلَقَدۡ هَمَّتۡ بِهِۦۖ وَهَمَّ بِهَا لَوۡلَآ أَن رَّءَا بُرۡهَٰنَ رَبِّهِۦۚ كَذَٰلِكَ لِنَصۡرِفَ عَنۡهُ ٱلسُّوٓءَ وَٱلۡفَحۡشَآءَۚ إِنَّهُۥ مِنۡ عِبَادِنَا ٱلۡمُخۡلَصِينَ "}, {"aya_id": 1621, "coordinates": [[213, 89, 69, 34], [248, 89, 322, 34], [282, 89, 322, 34], [316, 358, 54, 34]], "aya_moshaf": "وَٱسۡتَبَقَا ٱلۡبَابَ وَقَدَّتۡ قَمِيصَهُۥ مِن دُبُرٖ وَأَلۡفَيَا سَيِّدَهَا لَدَا ٱلۡبَابِۚ قَالَتۡ مَا جَزَآءُ مَنۡ أَرَادَ بِأَهۡلِكَ سُوٓءًا إِلَّآ أَن يُسۡجَنَ أَوۡ عَذَابٌ أَلِيمٞ "}, {"aya_id": 1622, "coordinates": [[316, 89, 269, 34], [351, 89, 322, 34], [385, 331, 81, 34]], "aya_moshaf": "قَالَ هِيَ رَٰوَدَتۡنِي عَن نَّفۡسِيۚ وَشَهِدَ شَاهِدٞ مِّنۡ أَهۡلِهَآ إِن كَانَ قَمِيصُهُۥ قُدَّ مِن قُبُلٖ فَصَدَقَتۡ وَهُوَ مِنَ ٱلۡكَٰذِبِينَ "}, {"aya_id": 1623, "coordinates": [[385, 89, 242, 34], [419, 307, 105, 34]], "aya_moshaf": "وَإِن كَانَ قَمِيصُهُۥ قُدَّ مِن دُبُرٖ فَكَذَبَتۡ وَهُوَ مِنَ ٱلصَّٰدِقِينَ "}, {"aya_id": 1624, "coordinates": [[419, 89, 218, 34], [454, 200, 212, 34]], "aya_moshaf": "فَلَمَّا رَءَا قَمِيصَهُۥ قُدَّ مِن دُبُرٖ قَالَ إِنَّهُۥ مِن كَيۡدِكُنَّۖ إِنَّ كَيۡدَكُنَّ عَظِيمٞ "}, {"aya_id": 1625, "coordinates": [[454, 89, 111, 34], [488, 89, 322, 34], [522, 383, 29, 34]], "aya_moshaf": "يُوسُفُ أَعۡرِضۡ عَنۡ هَٰذَاۚ وَٱسۡتَغۡفِرِي لِذَنۢبِكِۖ إِنَّكِ كُنتِ مِنَ ٱلۡخَاطِـِٔينَ "}, {"aya_id": 1626, "coordinates": [[522, 89, 294, 34], [557, 89, 322, 34]], "aya_moshaf": "۞ وَقَالَ نِسۡوَةٞ فِي ٱلۡمَدِينَةِ ٱمۡرَأَتُ ٱلۡعَزِيزِ تُرَٰوِدُ فَتَىٰهَا عَن نَّفۡسِهِۦۖ قَدۡ شَغَفَهَا حُبًّاۖ إِنَّا لَنَرَىٰهَا فِي ضَلَٰلٖ مُّبِينٖ "}]