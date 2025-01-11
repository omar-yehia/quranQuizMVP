const mainSuraId = 46;
const nearbySurasNames = {
    45: 'الجاثِية',
    46: 'الأحقَاف',
    47: 'مُحمد',
    48: 'الفَتح',
};
const choicesObjects = {
    "501": "افرايت من اتخذ الهه هواه",
    "502": "وبدا لهم سيئات ما عملوا",
    "504": "ووصينا الانسان بوالديه احسانا حملته",
    "505": "واذكر اخا عاد اذ انذر",
};
const ayas = [{"aya_id": 4516, "coordinates": [[87, 89, 289, 34]], "aya_moshaf": "وَإِذَا حُشِرَ ٱلنَّاسُ كَانُواْ لَهُمۡ أَعۡدَآءٗ وَكَانُواْ بِعِبَادَتِهِمۡ كَٰفِرِينَ "}, {"aya_id": 4517, "coordinates": [[87, 55, 34, 34], [121, 55, 322, 34], [156, 300, 78, 34]], "aya_moshaf": "وَإِذَا تُتۡلَىٰ عَلَيۡهِمۡ ءَايَٰتُنَا بَيِّنَٰتٖ قَالَ ٱلَّذِينَ كَفَرُواْ لِلۡحَقِّ لَمَّا جَآءَهُمۡ هَٰذَا سِحۡرٞ مُّبِينٌ "}, {"aya_id": 4518, "coordinates": [[156, 55, 245, 34], [190, 55, 322, 34], [224, 210, 168, 34]], "aya_moshaf": "أَمۡ يَقُولُونَ ٱفۡتَرَىٰهُۖ قُلۡ إِنِ ٱفۡتَرَيۡتُهُۥ فَلَا تَمۡلِكُونَ لِي مِنَ ٱللَّهِ شَيۡـًٔاۖ هُوَ أَعۡلَمُ بِمَا تُفِيضُونَ فِيهِۚ كَفَىٰ بِهِۦ شَهِيدَۢا بَيۡنِي وَبَيۡنَكُمۡۖ وَهُوَ ٱلۡغَفُورُ ٱلرَّحِيمُ "}, {"aya_id": 4519, "coordinates": [[224, 55, 155, 34], [259, 55, 322, 34], [293, 280, 98, 34]], "aya_moshaf": "قُلۡ مَا كُنتُ بِدۡعٗا مِّنَ ٱلرُّسُلِ وَمَآ أَدۡرِي مَا يُفۡعَلُ بِي وَلَا بِكُمۡۖ إِنۡ أَتَّبِعُ إِلَّا مَا يُوحَىٰٓ إِلَيَّ وَمَآ أَنَا۠ إِلَّا نَذِيرٞ مُّبِينٞ "}, {"aya_id": 4520, "coordinates": [[293, 55, 225, 34], [327, 55, 322, 34], [362, 180, 198, 34]], "aya_moshaf": "قُلۡ أَرَءَيۡتُمۡ إِن كَانَ مِنۡ عِندِ ٱللَّهِ وَكَفَرۡتُم بِهِۦ وَشَهِدَ شَاهِدٞ مِّنۢ بَنِيٓ إِسۡرَٰٓءِيلَ عَلَىٰ مِثۡلِهِۦ فَـَٔامَنَ وَٱسۡتَكۡبَرۡتُمۡۚ إِنَّ ٱللَّهَ لَا يَهۡدِي ٱلۡقَوۡمَ ٱلظَّٰلِمِينَ "}, {"aya_id": 4521, "coordinates": [[362, 55, 125, 34], [396, 55, 322, 34], [430, 198, 180, 34]], "aya_moshaf": "وَقَالَ ٱلَّذِينَ كَفَرُواْ لِلَّذِينَ ءَامَنُواْ لَوۡ كَانَ خَيۡرٗا مَّا سَبَقُونَآ إِلَيۡهِۚ وَإِذۡ لَمۡ يَهۡتَدُواْ بِهِۦ فَسَيَقُولُونَ هَٰذَآ إِفۡكٞ قَدِيمٞ "}, {"aya_id": 4522, "coordinates": [[430, 55, 143, 34], [465, 55, 322, 34], [499, 168, 210, 34]], "aya_moshaf": "وَمِن قَبۡلِهِۦ كِتَٰبُ مُوسَىٰٓ إِمَامٗا وَرَحۡمَةٗۚ وَهَٰذَا كِتَٰبٞ مُّصَدِّقٞ لِّسَانًا عَرَبِيّٗا لِّيُنذِرَ ٱلَّذِينَ ظَلَمُواْ وَبُشۡرَىٰ لِلۡمُحۡسِنِينَ "}, {"aya_id": 4523, "coordinates": [[499, 55, 113, 34], [533, 55, 322, 34]], "aya_moshaf": "إِنَّ ٱلَّذِينَ قَالُواْ رَبُّنَا ٱللَّهُ ثُمَّ ٱسۡتَقَٰمُواْ فَلَا خَوۡفٌ عَلَيۡهِمۡ وَلَا هُمۡ يَحۡزَنُونَ "}, {"aya_id": 4524, "coordinates": [[568, 55, 322, 34]], "aya_moshaf": "أُوْلَٰٓئِكَ أَصۡحَٰبُ ٱلۡجَنَّةِ خَٰلِدِينَ فِيهَا جَزَآءَۢ بِمَا كَانُواْ يَعۡمَلُونَ "}]