const mainSuraId = 2;
const nearbySurasNames = {
    1: 'الفَاتِحة',
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
};
const choicesObjects = {
    "4": "مثلهم كمثل الذي استوقد نارا",
    "5": "وبشر الذين امنوا وعملوا الصالحات",
    "7": "قلنا اهبطوا منها جميعا فاما",
    "8": "واذ نجيناكم من ال فرعون",
};
const ayas = [{"aya_id": 37, "coordinates": [[83, 87, 322, 34], [117, 87, 322, 34], [152, 87, 322, 34], [186, 379, 31, 34]], "aya_moshaf": "وَإِذۡ قَالَ رَبُّكَ لِلۡمَلَٰٓئِكَةِ إِنِّي جَاعِلٞ فِي ٱلۡأَرۡضِ خَلِيفَةٗۖ قَالُوٓاْ أَتَجۡعَلُ فِيهَا مَن يُفۡسِدُ فِيهَا وَيَسۡفِكُ ٱلدِّمَآءَ وَنَحۡنُ نُسَبِّحُ بِحَمۡدِكَ وَنُقَدِّسُ لَكَۖ قَالَ إِنِّيٓ أَعۡلَمُ مَا لَا تَعۡلَمُونَ "}, {"aya_id": 38, "coordinates": [[186, 87, 292, 34], [220, 117, 293, 34]], "aya_moshaf": "وَعَلَّمَ ءَادَمَ ٱلۡأَسۡمَآءَ كُلَّهَا ثُمَّ عَرَضَهُمۡ عَلَى ٱلۡمَلَٰٓئِكَةِ فَقَالَ أَنۢبِـُٔونِي بِأَسۡمَآءِ هَٰٓؤُلَآءِ إِن كُنتُمۡ صَٰدِقِينَ "}, {"aya_id": 39, "coordinates": [[220, 87, 30, 34], [255, 87, 322, 34], [289, 380, 30, 34]], "aya_moshaf": "قَالُواْ سُبۡحَٰنَكَ لَا عِلۡمَ لَنَآ إِلَّا مَا عَلَّمۡتَنَآۖ إِنَّكَ أَنتَ ٱلۡعَلِيمُ ٱلۡحَكِيمُ "}, {"aya_id": 40, "coordinates": [[289, 87, 293, 34], [323, 87, 322, 34], [358, 251, 159, 34]], "aya_moshaf": "قَالَ يَٰٓـَٔادَمُ أَنۢبِئۡهُم بِأَسۡمَآئِهِمۡۖ فَلَمَّآ أَنۢبَأَهُم بِأَسۡمَآئِهِمۡ قَالَ أَلَمۡ أَقُل لَّكُمۡ إِنِّيٓ أَعۡلَمُ غَيۡبَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَأَعۡلَمُ مَا تُبۡدُونَ وَمَا كُنتُمۡ تَكۡتُمُونَ "}, {"aya_id": 41, "coordinates": [[358, 87, 164, 34], [392, 87, 322, 34], [426, 382, 28, 34]], "aya_moshaf": "وَإِذۡ قُلۡنَا لِلۡمَلَٰٓئِكَةِ ٱسۡجُدُواْ لِأٓدَمَ فَسَجَدُوٓاْ إِلَّآ إِبۡلِيسَ أَبَىٰ وَٱسۡتَكۡبَرَ وَكَانَ مِنَ ٱلۡكَٰفِرِينَ "}, {"aya_id": 42, "coordinates": [[426, 87, 295, 34], [461, 87, 322, 34]], "aya_moshaf": "وَقُلۡنَا يَٰٓـَٔادَمُ ٱسۡكُنۡ أَنتَ وَزَوۡجُكَ ٱلۡجَنَّةَ وَكُلَا مِنۡهَا رَغَدًا حَيۡثُ شِئۡتُمَا وَلَا تَقۡرَبَا هَٰذِهِ ٱلشَّجَرَةَ فَتَكُونَا مِنَ ٱلظَّٰلِمِينَ "}, {"aya_id": 43, "coordinates": [[495, 87, 322, 34], [529, 87, 322, 34]], "aya_moshaf": "فَأَزَلَّهُمَا ٱلشَّيۡطَٰنُ عَنۡهَا فَأَخۡرَجَهُمَا مِمَّا كَانَا فِيهِۖ وَقُلۡنَا ٱهۡبِطُواْ بَعۡضُكُمۡ لِبَعۡضٍ عَدُوّٞۖ وَلَكُمۡ فِي ٱلۡأَرۡضِ مُسۡتَقَرّٞ وَمَتَٰعٌ إِلَىٰ حِينٖ "}, {"aya_id": 44, "coordinates": [[564, 87, 322, 34]], "aya_moshaf": "فَتَلَقَّىٰٓ ءَادَمُ مِن رَّبِّهِۦ كَلِمَٰتٖ فَتَابَ عَلَيۡهِۚ إِنَّهُۥ هُوَ ٱلتَّوَّابُ ٱلرَّحِيمُ "}]