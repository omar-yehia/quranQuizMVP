const nearbySurasNames = {
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
    5: 'المَائدة',
};
const choicesObjects = {
    "68": "وليمحص الله الذين امنوا ويمحق",
    "69": "ياايها الذين امنوا ان تطيعوا",
    "71": "ولئن متم او قتلتم لالي",
    "72": "وما اصابكم يوم التقي الجمعان",
};
const ayas = [{"aya_id": 447, "coordinates": [[81, 92, 322, 34], [115, 92, 322, 34], [150, 92, 322, 34], [184, 92, 322, 34], [218, 92, 322, 34], [253, 92, 322, 34], [287, 92, 322, 34], [321, 223, 192, 34]], "aya_moshaf": "ثُمَّ أَنزَلَ عَلَيۡكُم مِّنۢ بَعۡدِ ٱلۡغَمِّ أَمَنَةٗ نُّعَاسٗا يَغۡشَىٰ طَآئِفَةٗ مِّنكُمۡۖ وَطَآئِفَةٞ قَدۡ أَهَمَّتۡهُمۡ أَنفُسُهُمۡ يَظُنُّونَ بِٱللَّهِ غَيۡرَ ٱلۡحَقِّ ظَنَّ ٱلۡجَٰهِلِيَّةِۖ يَقُولُونَ هَل لَّنَا مِنَ ٱلۡأَمۡرِ مِن شَيۡءٖۗ قُلۡ إِنَّ ٱلۡأَمۡرَ كُلَّهُۥ لِلَّهِۗ يُخۡفُونَ فِيٓ أَنفُسِهِم مَّا لَا يُبۡدُونَ لَكَۖ يَقُولُونَ لَوۡ كَانَ لَنَا مِنَ ٱلۡأَمۡرِ شَيۡءٞ مَّا قُتِلۡنَا هَٰهُنَاۗ قُل لَّوۡ كُنتُمۡ فِي بُيُوتِكُمۡ لَبَرَزَ ٱلَّذِينَ كُتِبَ عَلَيۡهِمُ ٱلۡقَتۡلُ إِلَىٰ مَضَاجِعِهِمۡۖ وَلِيَبۡتَلِيَ ٱللَّهُ مَا فِي صُدُورِكُمۡ وَلِيُمَحِّصَ مَا فِي قُلُوبِكُمۡۚ وَٱللَّهُ عَلِيمُۢ بِذَاتِ ٱلصُّدُورِ "}, {"aya_id": 448, "coordinates": [[321, 92, 131, 34], [356, 92, 322, 34], [390, 136, 279, 34]], "aya_moshaf": "إِنَّ ٱلَّذِينَ تَوَلَّوۡاْ مِنكُمۡ يَوۡمَ ٱلۡتَقَى ٱلۡجَمۡعَانِ إِنَّمَا ٱسۡتَزَلَّهُمُ ٱلشَّيۡطَٰنُ بِبَعۡضِ مَا كَسَبُواْۖ وَلَقَدۡ عَفَا ٱللَّهُ عَنۡهُمۡۗ إِنَّ ٱللَّهَ غَفُورٌ حَلِيمٞ "}, {"aya_id": 449, "coordinates": [[390, 92, 44, 34], [424, 92, 322, 34], [459, 92, 322, 34], [493, 92, 322, 34], [527, 252, 163, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَا تَكُونُواْ كَٱلَّذِينَ كَفَرُواْ وَقَالُواْ لِإِخۡوَٰنِهِمۡ إِذَا ضَرَبُواْ فِي ٱلۡأَرۡضِ أَوۡ كَانُواْ غُزّٗى لَّوۡ كَانُواْ عِندَنَا مَا مَاتُواْ وَمَا قُتِلُواْ لِيَجۡعَلَ ٱللَّهُ ذَٰلِكَ حَسۡرَةٗ فِي قُلُوبِهِمۡۗ وَٱللَّهُ يُحۡيِۦ وَيُمِيتُۗ وَٱللَّهُ بِمَا تَعۡمَلُونَ بَصِيرٞ "}, {"aya_id": 450, "coordinates": [[527, 92, 160, 34], [562, 92, 322, 34]], "aya_moshaf": "وَلَئِن قُتِلۡتُمۡ فِي سَبِيلِ ٱللَّهِ أَوۡ مُتُّمۡ لَمَغۡفِرَةٞ مِّنَ ٱللَّهِ وَرَحۡمَةٌ خَيۡرٞ مِّمَّا يَجۡمَعُونَ "}]
const ayasRanges = [{"ayas_ids_range": [447, 450], "sura_id": 3}];
