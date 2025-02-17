const nearbySurasNames = {
    15: 'الحِجر',
    16: 'النَّحل',
    17: 'الإسرَاء',
    18: 'الكَهف',
};
const choicesObjects = {
    "276": "والله جعل لكم من بيوتكم",
    "277": "الذين كفروا وصدوا عن سبيل",
    "279": "ولقد نعلم انهم يقولون انما",
    "280": "يوم تاتي كل نفس تجادل",
};
const ayas = [{"aya_id": 1995, "coordinates": [[82, 92, 322, 34], [116, 92, 322, 34], [151, 347, 68, 34]], "aya_moshaf": "وَلَا تَتَّخِذُوٓاْ أَيۡمَٰنَكُمۡ دَخَلَۢا بَيۡنَكُمۡ فَتَزِلَّ قَدَمُۢ بَعۡدَ ثُبُوتِهَا وَتَذُوقُواْ ٱلسُّوٓءَ بِمَا صَدَدتُّمۡ عَن سَبِيلِ ٱللَّهِ وَلَكُمۡ عَذَابٌ عَظِيمٞ "}, {"aya_id": 1996, "coordinates": [[151, 92, 255, 34], [185, 184, 231, 34]], "aya_moshaf": "وَلَا تَشۡتَرُواْ بِعَهۡدِ ٱللَّهِ ثَمَنٗا قَلِيلًاۚ إِنَّمَا عِندَ ٱللَّهِ هُوَ خَيۡرٞ لَّكُمۡ إِن كُنتُمۡ تَعۡلَمُونَ "}, {"aya_id": 1997, "coordinates": [[185, 92, 92, 34], [219, 92, 322, 34], [254, 261, 154, 34]], "aya_moshaf": "مَا عِندَكُمۡ يَنفَدُ وَمَا عِندَ ٱللَّهِ بَاقٖۗ وَلَنَجۡزِيَنَّ ٱلَّذِينَ صَبَرُوٓاْ أَجۡرَهُم بِأَحۡسَنِ مَا كَانُواْ يَعۡمَلُونَ "}, {"aya_id": 1998, "coordinates": [[254, 92, 169, 34], [288, 92, 322, 34], [322, 188, 227, 34]], "aya_moshaf": "مَنۡ عَمِلَ صَٰلِحٗا مِّن ذَكَرٍ أَوۡ أُنثَىٰ وَهُوَ مُؤۡمِنٞ فَلَنُحۡيِيَنَّهُۥ حَيَوٰةٗ طَيِّبَةٗۖ وَلَنَجۡزِيَنَّهُمۡ أَجۡرَهُم بِأَحۡسَنِ مَا كَانُواْ يَعۡمَلُونَ "}, {"aya_id": 1999, "coordinates": [[322, 92, 96, 34], [357, 201, 214, 34]], "aya_moshaf": "فَإِذَا قَرَأۡتَ ٱلۡقُرۡءَانَ فَٱسۡتَعِذۡ بِٱللَّهِ مِنَ ٱلشَّيۡطَٰنِ ٱلرَّجِيمِ "}, {"aya_id": 2000, "coordinates": [[357, 92, 109, 34], [391, 132, 283, 34]], "aya_moshaf": "إِنَّهُۥ لَيۡسَ لَهُۥ سُلۡطَٰنٌ عَلَى ٱلَّذِينَ ءَامَنُواْ وَعَلَىٰ رَبِّهِمۡ يَتَوَكَّلُونَ "}, {"aya_id": 2001, "coordinates": [[391, 92, 40, 34], [425, 92, 322, 34], [460, 391, 24, 34]], "aya_moshaf": "إِنَّمَا سُلۡطَٰنُهُۥ عَلَى ٱلَّذِينَ يَتَوَلَّوۡنَهُۥ وَٱلَّذِينَ هُم بِهِۦ مُشۡرِكُونَ "}, {"aya_id": 2002, "coordinates": [[460, 92, 299, 34], [494, 92, 322, 34], [528, 389, 26, 34]], "aya_moshaf": "وَإِذَا بَدَّلۡنَآ ءَايَةٗ مَّكَانَ ءَايَةٖ وَٱللَّهُ أَعۡلَمُ بِمَا يُنَزِّلُ قَالُوٓاْ إِنَّمَآ أَنتَ مُفۡتَرِۭۚ بَلۡ أَكۡثَرُهُمۡ لَا يَعۡلَمُونَ "}, {"aya_id": 2003, "coordinates": [[528, 92, 297, 34], [563, 92, 322, 34]], "aya_moshaf": "قُلۡ نَزَّلَهُۥ رُوحُ ٱلۡقُدُسِ مِن رَّبِّكَ بِٱلۡحَقِّ لِيُثَبِّتَ ٱلَّذِينَ ءَامَنُواْ وَهُدٗى وَبُشۡرَىٰ لِلۡمُسۡلِمِينَ "}]
const ayasRanges = [{"ayas_ids_range": [1995, 2003], "sura_id": 16}];
