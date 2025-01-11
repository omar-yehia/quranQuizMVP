const nearbySurasNames = {
    3: 'آل عِمران',
    4: 'النِّسَاء',
    5: 'المَائدة',
    6: 'الأنعَام',
};
const choicesObjects = {
    "96": "واستغفر الله ان الله كان",
    "97": "لا خير في كثير من",
    "99": "وان امراه خافت من بعلها",
    "100": "ياايها الذين امنوا كونوا قوامين",
};
const ayas = [{"aya_id": 615, "coordinates": [[85, 87, 322, 34], [119, 87, 322, 34], [154, 184, 226, 34]], "aya_moshaf": "وَٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ سَنُدۡخِلُهُمۡ جَنَّٰتٖ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُ خَٰلِدِينَ فِيهَآ أَبَدٗاۖ وَعۡدَ ٱللَّهِ حَقّٗاۚ وَمَنۡ أَصۡدَقُ مِنَ ٱللَّهِ قِيلٗا "}, {"aya_id": 616, "coordinates": [[154, 87, 97, 34], [188, 87, 322, 34], [222, 146, 264, 34]], "aya_moshaf": "لَّيۡسَ بِأَمَانِيِّكُمۡ وَلَآ أَمَانِيِّ أَهۡلِ ٱلۡكِتَٰبِۗ مَن يَعۡمَلۡ سُوٓءٗا يُجۡزَ بِهِۦ وَلَا يَجِدۡ لَهُۥ مِن دُونِ ٱللَّهِ وَلِيّٗا وَلَا نَصِيرٗا "}, {"aya_id": 617, "coordinates": [[222, 87, 59, 34], [257, 87, 322, 34], [291, 129, 281, 34]], "aya_moshaf": "وَمَن يَعۡمَلۡ مِنَ ٱلصَّٰلِحَٰتِ مِن ذَكَرٍ أَوۡ أُنثَىٰ وَهُوَ مُؤۡمِنٞ فَأُوْلَٰٓئِكَ يَدۡخُلُونَ ٱلۡجَنَّةَ وَلَا يُظۡلَمُونَ نَقِيرٗا "}, {"aya_id": 618, "coordinates": [[291, 87, 42, 34], [325, 87, 322, 34], [360, 135, 275, 34]], "aya_moshaf": "وَمَنۡ أَحۡسَنُ دِينٗا مِّمَّنۡ أَسۡلَمَ وَجۡهَهُۥ لِلَّهِ وَهُوَ مُحۡسِنٞ وَٱتَّبَعَ مِلَّةَ إِبۡرَٰهِيمَ حَنِيفٗاۗ وَٱتَّخَذَ ٱللَّهُ إِبۡرَٰهِيمَ خَلِيلٗا "}, {"aya_id": 619, "coordinates": [[360, 87, 48, 34], [394, 87, 322, 34], [428, 345, 65, 34]], "aya_moshaf": "وَلِلَّهِ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۚ وَكَانَ ٱللَّهُ بِكُلِّ شَيۡءٖ مُّحِيطٗا "}, {"aya_id": 620, "coordinates": [[428, 87, 258, 34], [463, 87, 322, 34], [497, 87, 322, 34], [531, 87, 322, 34], [566, 87, 322, 34]], "aya_moshaf": "وَيَسۡتَفۡتُونَكَ فِي ٱلنِّسَآءِۖ قُلِ ٱللَّهُ يُفۡتِيكُمۡ فِيهِنَّ وَمَا يُتۡلَىٰ عَلَيۡكُمۡ فِي ٱلۡكِتَٰبِ فِي يَتَٰمَى ٱلنِّسَآءِ ٱلَّٰتِي لَا تُؤۡتُونَهُنَّ مَا كُتِبَ لَهُنَّ وَتَرۡغَبُونَ أَن تَنكِحُوهُنَّ وَٱلۡمُسۡتَضۡعَفِينَ مِنَ ٱلۡوِلۡدَٰنِ وَأَن تَقُومُواْ لِلۡيَتَٰمَىٰ بِٱلۡقِسۡطِۚ وَمَا تَفۡعَلُواْ مِنۡ خَيۡرٖ فَإِنَّ ٱللَّهَ كَانَ بِهِۦ عَلِيمٗا "}]
const ayasRanges = [{"ayas_ids_range": [615, 620], "sura_id": 4}];
