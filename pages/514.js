const nearbySurasNames = {
    47: 'مُحمد',
    48: 'الفَتح',
    49: 'الحُجُرَات',
    50: 'قٓ',
};
const choicesObjects = {
    "512": "ان الذين يبايعونك انما يبايعون",
    "513": "قل للمخلفين من الاعراب ستدعون",
    "515": "محمد رسول الله والذين معه",
    "516": "ولو انهم صبروا حتي تخرج",
};
const ayas = [{"aya_id": 4607, "coordinates": [[88, 94, 322, 34], [122, 127, 290, 34]], "aya_moshaf": "وَهُوَ ٱلَّذِي كَفَّ أَيۡدِيَهُمۡ عَنكُمۡ وَأَيۡدِيَكُمۡ عَنۡهُم بِبَطۡنِ مَكَّةَ مِنۢ بَعۡدِ أَنۡ أَظۡفَرَكُمۡ عَلَيۡهِمۡۚ وَكَانَ ٱللَّهُ بِمَا تَعۡمَلُونَ بَصِيرًا "}, {"aya_id": 4608, "coordinates": [[122, 94, 33, 34], [157, 94, 322, 34], [191, 94, 322, 34], [225, 94, 322, 34], [260, 94, 322, 34], [294, 238, 179, 34]], "aya_moshaf": "هُمُ ٱلَّذِينَ كَفَرُواْ وَصَدُّوكُمۡ عَنِ ٱلۡمَسۡجِدِ ٱلۡحَرَامِ وَٱلۡهَدۡيَ مَعۡكُوفًا أَن يَبۡلُغَ مَحِلَّهُۥۚ وَلَوۡلَا رِجَالٞ مُّؤۡمِنُونَ وَنِسَآءٞ مُّؤۡمِنَٰتٞ لَّمۡ تَعۡلَمُوهُمۡ أَن تَطَـُٔوهُمۡ فَتُصِيبَكُم مِّنۡهُم مَّعَرَّةُۢ بِغَيۡرِ عِلۡمٖۖ لِّيُدۡخِلَ ٱللَّهُ فِي رَحۡمَتِهِۦ مَن يَشَآءُۚ لَوۡ تَزَيَّلُواْ لَعَذَّبۡنَا ٱلَّذِينَ كَفَرُواْ مِنۡهُمۡ عَذَابًا أَلِيمًا "}, {"aya_id": 4609, "coordinates": [[294, 94, 144, 34], [328, 94, 322, 34], [363, 94, 322, 34], [397, 94, 322, 34]], "aya_moshaf": "إِذۡ جَعَلَ ٱلَّذِينَ كَفَرُواْ فِي قُلُوبِهِمُ ٱلۡحَمِيَّةَ حَمِيَّةَ ٱلۡجَٰهِلِيَّةِ فَأَنزَلَ ٱللَّهُ سَكِينَتَهُۥ عَلَىٰ رَسُولِهِۦ وَعَلَى ٱلۡمُؤۡمِنِينَ وَأَلۡزَمَهُمۡ كَلِمَةَ ٱلتَّقۡوَىٰ وَكَانُوٓاْ أَحَقَّ بِهَا وَأَهۡلَهَاۚ وَكَانَ ٱللَّهُ بِكُلِّ شَيۡءٍ عَلِيمٗا "}, {"aya_id": 4610, "coordinates": [[431, 94, 322, 34], [466, 94, 322, 34], [500, 94, 322, 34], [534, 322, 95, 34]], "aya_moshaf": "لَّقَدۡ صَدَقَ ٱللَّهُ رَسُولَهُ ٱلرُّءۡيَا بِٱلۡحَقِّۖ لَتَدۡخُلُنَّ ٱلۡمَسۡجِدَ ٱلۡحَرَامَ إِن شَآءَ ٱللَّهُ ءَامِنِينَ مُحَلِّقِينَ رُءُوسَكُمۡ وَمُقَصِّرِينَ لَا تَخَافُونَۖ فَعَلِمَ مَا لَمۡ تَعۡلَمُواْ فَجَعَلَ مِن دُونِ ذَٰلِكَ فَتۡحٗا قَرِيبًا "}, {"aya_id": 4611, "coordinates": [[534, 94, 228, 34], [569, 94, 322, 34]], "aya_moshaf": "هُوَ ٱلَّذِيٓ أَرۡسَلَ رَسُولَهُۥ بِٱلۡهُدَىٰ وَدِينِ ٱلۡحَقِّ لِيُظۡهِرَهُۥ عَلَى ٱلدِّينِ كُلِّهِۦۚ وَكَفَىٰ بِٱللَّهِ شَهِيدٗا "}]
const ayasRanges = [{"ayas_ids_range": [4607, 4611], "sura_id": 48}];
