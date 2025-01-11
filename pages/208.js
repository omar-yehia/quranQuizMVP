const mainSuraId = 10;
const nearbySurasNames = {
    9: 'التوبَة',
    10: 'يُونس',
    11: 'هُود',
    12: 'يُوسُف',
};
const choicesObjects = {
    "206": "وعلي الثلاثه الذين خلفوا حتي",
    "207": "ياايها الذين امنوا قاتلوا الذين",
    "209": "ان الذين لا يرجون لقاءنا",
    "210": "واذا تتلي عليهم اياتنا بينات",
};
const ayas = [{"aya_id": 1365, "coordinates": [[123, 209, 203, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ الٓرۚ تِلۡكَ ءَايَٰتُ ٱلۡكِتَٰبِ ٱلۡحَكِيمِ "}, {"aya_id": 1366, "coordinates": [[123, 89, 120, 34], [158, 89, 322, 34], [192, 89, 322, 34], [226, 316, 96, 34]], "aya_moshaf": "أَكَانَ لِلنَّاسِ عَجَبًا أَنۡ أَوۡحَيۡنَآ إِلَىٰ رَجُلٖ مِّنۡهُمۡ أَنۡ أَنذِرِ ٱلنَّاسَ وَبَشِّرِ ٱلَّذِينَ ءَامَنُوٓاْ أَنَّ لَهُمۡ قَدَمَ صِدۡقٍ عِندَ رَبِّهِمۡۗ قَالَ ٱلۡكَٰفِرُونَ إِنَّ هَٰذَا لَسَٰحِرٞ مُّبِينٌ "}, {"aya_id": 1367, "coordinates": [[226, 89, 227, 34], [261, 89, 322, 34], [295, 89, 322, 34], [329, 318, 94, 34]], "aya_moshaf": "إِنَّ رَبَّكُمُ ٱللَّهُ ٱلَّذِي خَلَقَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ فِي سِتَّةِ أَيَّامٖ ثُمَّ ٱسۡتَوَىٰ عَلَى ٱلۡعَرۡشِۖ يُدَبِّرُ ٱلۡأَمۡرَۖ مَا مِن شَفِيعٍ إِلَّا مِنۢ بَعۡدِ إِذۡنِهِۦۚ ذَٰلِكُمُ ٱللَّهُ رَبُّكُمۡ فَٱعۡبُدُوهُۚ أَفَلَا تَذَكَّرُونَ "}, {"aya_id": 1368, "coordinates": [[329, 89, 229, 34], [364, 89, 322, 34], [398, 89, 322, 34], [432, 230, 182, 34]], "aya_moshaf": "إِلَيۡهِ مَرۡجِعُكُمۡ جَمِيعٗاۖ وَعۡدَ ٱللَّهِ حَقًّاۚ إِنَّهُۥ يَبۡدَؤُاْ ٱلۡخَلۡقَ ثُمَّ يُعِيدُهُۥ لِيَجۡزِيَ ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ بِٱلۡقِسۡطِۚ وَٱلَّذِينَ كَفَرُواْ لَهُمۡ شَرَابٞ مِّنۡ حَمِيمٖ وَعَذَابٌ أَلِيمُۢ بِمَا كَانُواْ يَكۡفُرُونَ "}, {"aya_id": 1369, "coordinates": [[432, 89, 141, 34], [467, 89, 322, 34], [501, 89, 322, 34], [535, 309, 103, 34]], "aya_moshaf": "هُوَ ٱلَّذِي جَعَلَ ٱلشَّمۡسَ ضِيَآءٗ وَٱلۡقَمَرَ نُورٗا وَقَدَّرَهُۥ مَنَازِلَ لِتَعۡلَمُواْ عَدَدَ ٱلسِّنِينَ وَٱلۡحِسَابَۚ مَا خَلَقَ ٱللَّهُ ذَٰلِكَ إِلَّا بِٱلۡحَقِّۚ يُفَصِّلُ ٱلۡأٓيَٰتِ لِقَوۡمٖ يَعۡلَمُونَ "}, {"aya_id": 1370, "coordinates": [[535, 89, 220, 34], [570, 89, 322, 34]], "aya_moshaf": "إِنَّ فِي ٱخۡتِلَٰفِ ٱلَّيۡلِ وَٱلنَّهَارِ وَمَا خَلَقَ ٱللَّهُ فِي ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ لَأٓيَٰتٖ لِّقَوۡمٖ يَتَّقُونَ "}]