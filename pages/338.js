const mainSuraId = 22;
const nearbySurasNames = {
    21: 'الأنبيَاء',
    22: 'الحج',
    23: 'المؤمنُون',
    24: 'النور',
};
const choicesObjects = {
    "336": "حنفاء لله غير مشركين به",
    "337": "اذن للذين يقاتلون بانهم ظلموا",
    "339": "الملك يومئذ لله يحكم بينهم",
    "340": "الم تر ان الله سخر",
};
const ayas = [{"aya_id": 2642, "coordinates": [[84, 84, 322, 34], [118, 168, 239, 34]], "aya_moshaf": "وَيَسۡتَعۡجِلُونَكَ بِٱلۡعَذَابِ وَلَن يُخۡلِفَ ٱللَّهُ وَعۡدَهُۥۚ وَإِنَّ يَوۡمًا عِندَ رَبِّكَ كَأَلۡفِ سَنَةٖ مِّمَّا تَعُدُّونَ "}, {"aya_id": 2643, "coordinates": [[118, 84, 84, 34], [153, 84, 322, 34], [187, 380, 27, 34]], "aya_moshaf": "وَكَأَيِّن مِّن قَرۡيَةٍ أَمۡلَيۡتُ لَهَا وَهِيَ ظَالِمَةٞ ثُمَّ أَخَذۡتُهَا وَإِلَيَّ ٱلۡمَصِيرُ "}, {"aya_id": 2644, "coordinates": [[187, 141, 239, 34]], "aya_moshaf": "قُلۡ يَٰٓأَيُّهَا ٱلنَّاسُ إِنَّمَآ أَنَا۠ لَكُمۡ نَذِيرٞ مُّبِينٞ "}, {"aya_id": 2645, "coordinates": [[187, 84, 57, 34], [221, 84, 322, 34]], "aya_moshaf": "فَٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ لَهُم مَّغۡفِرَةٞ وَرِزۡقٞ كَرِيمٞ "}, {"aya_id": 2646, "coordinates": [[256, 84, 322, 34], [290, 387, 20, 34]], "aya_moshaf": "وَٱلَّذِينَ سَعَوۡاْ فِيٓ ءَايَٰتِنَا مُعَٰجِزِينَ أُوْلَٰٓئِكَ أَصۡحَٰبُ ٱلۡجَحِيمِ "}, {"aya_id": 2647, "coordinates": [[290, 84, 303, 34], [324, 84, 322, 34], [359, 135, 272, 34]], "aya_moshaf": "وَمَآ أَرۡسَلۡنَا مِن قَبۡلِكَ مِن رَّسُولٖ وَلَا نَبِيٍّ إِلَّآ إِذَا تَمَنَّىٰٓ أَلۡقَى ٱلشَّيۡطَٰنُ فِيٓ أُمۡنِيَّتِهِۦ فَيَنسَخُ ٱللَّهُ مَا يُلۡقِي ٱلشَّيۡطَٰنُ ثُمَّ يُحۡكِمُ ٱللَّهُ ءَايَٰتِهِۦۗ وَٱللَّهُ عَلِيمٌ حَكِيمٞ "}, {"aya_id": 2648, "coordinates": [[359, 84, 51, 34], [393, 84, 322, 34], [427, 130, 277, 34]], "aya_moshaf": "لِّيَجۡعَلَ مَا يُلۡقِي ٱلشَّيۡطَٰنُ فِتۡنَةٗ لِّلَّذِينَ فِي قُلُوبِهِم مَّرَضٞ وَٱلۡقَاسِيَةِ قُلُوبُهُمۡۗ وَإِنَّ ٱلظَّٰلِمِينَ لَفِي شِقَاقِۭ بَعِيدٖ "}, {"aya_id": 2649, "coordinates": [[427, 84, 46, 34], [462, 84, 322, 34], [496, 84, 322, 34], [530, 330, 77, 34]], "aya_moshaf": "وَلِيَعۡلَمَ ٱلَّذِينَ أُوتُواْ ٱلۡعِلۡمَ أَنَّهُ ٱلۡحَقُّ مِن رَّبِّكَ فَيُؤۡمِنُواْ بِهِۦ فَتُخۡبِتَ لَهُۥ قُلُوبُهُمۡۗ وَإِنَّ ٱللَّهَ لَهَادِ ٱلَّذِينَ ءَامَنُوٓاْ إِلَىٰ صِرَٰطٖ مُّسۡتَقِيمٖ "}, {"aya_id": 2650, "coordinates": [[530, 84, 246, 34], [565, 84, 322, 34]], "aya_moshaf": "وَلَا يَزَالُ ٱلَّذِينَ كَفَرُواْ فِي مِرۡيَةٖ مِّنۡهُ حَتَّىٰ تَأۡتِيَهُمُ ٱلسَّاعَةُ بَغۡتَةً أَوۡ يَأۡتِيَهُمۡ عَذَابُ يَوۡمٍ عَقِيمٍ "}]