const nearbySurasNames = {
    54: 'القَمَر',
    55: 'الرَّحمٰن',
    56: 'الوَاقِعة',
    57: 'الحدِيد',
};
const choicesObjects = {
    "530": "ونبئهم ان الماء قسمه بينهم",
    "531": "وما امرنا الا واحده كلمح",
    "533": "يعرف المجرمون بسيماهم فيؤخذ بالنواصي",
    "534": "فيهما فاكهه ونخل ورمان",
};
const ayas = [{"aya_id": 4918, "coordinates": [[85, 250, 165, 34]], "aya_moshaf": "رَبُّ ٱلۡمَشۡرِقَيۡنِ وَرَبُّ ٱلۡمَغۡرِبَيۡنِ "}, {"aya_id": 4919, "coordinates": [[85, 92, 158, 34]], "aya_moshaf": "فَبِأَيِّ ءَالَآءِ رَبِّكُمَا تُكَذِّبَانِ "}, {"aya_id": 4920, "coordinates": [[119, 286, 129, 34]], "aya_moshaf": "مَرَجَ ٱلۡبَحۡرَيۡنِ يَلۡتَقِيَانِ "}, {"aya_id": 4921, "coordinates": [[119, 150, 136, 34]], "aya_moshaf": "بَيۡنَهُمَا بَرۡزَخٞ لَّا يَبۡغِيَانِ "}, {"aya_id": 4922, "coordinates": [[119, 92, 58, 34], [154, 306, 109, 34]], "aya_moshaf": "فَبِأَيِّ ءَالَآءِ رَبِّكُمَا تُكَذِّبَانِ "}, {"aya_id": 4923, "coordinates": [[154, 126, 180, 34]], "aya_moshaf": "يَخۡرُجُ مِنۡهُمَا ٱللُّؤۡلُؤُ وَٱلۡمَرۡجَانُ "}, {"aya_id": 4924, "coordinates": [[154, 92, 34, 34], [188, 279, 136, 34]], "aya_moshaf": "فَبِأَيِّ ءَالَآءِ رَبِّكُمَا تُكَذِّبَانِ "}, {"aya_id": 4925, "coordinates": [[188, 92, 187, 34], [222, 392, 23, 34]], "aya_moshaf": "وَلَهُ ٱلۡجَوَارِ ٱلۡمُنشَـَٔاتُ فِي ٱلۡبَحۡرِ كَٱلۡأَعۡلَٰمِ "}, {"aya_id": 4926, "coordinates": [[222, 229, 163, 34]], "aya_moshaf": "فَبِأَيِّ ءَالَآءِ رَبِّكُمَا تُكَذِّبَانِ "}, {"aya_id": 4927, "coordinates": [[222, 127, 102, 34]], "aya_moshaf": "كُلُّ مَنۡ عَلَيۡهَا فَانٖ "}, {"aya_id": 4928, "coordinates": [[222, 92, 35, 34], [257, 231, 184, 34]], "aya_moshaf": "وَيَبۡقَىٰ وَجۡهُ رَبِّكَ ذُو ٱلۡجَلَٰلِ وَٱلۡإِكۡرَامِ "}, {"aya_id": 4929, "coordinates": [[257, 92, 139, 34], [291, 389, 26, 34]], "aya_moshaf": "فَبِأَيِّ ءَالَآءِ رَبِّكُمَا تُكَذِّبَانِ "}, {"aya_id": 4930, "coordinates": [[291, 121, 268, 34]], "aya_moshaf": "يَسۡـَٔلُهُۥ مَن فِي ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۚ كُلَّ يَوۡمٍ هُوَ فِي شَأۡنٖ "}, {"aya_id": 4931, "coordinates": [[291, 92, 29, 34], [325, 281, 134, 34]], "aya_moshaf": "فَبِأَيِّ ءَالَآءِ رَبِّكُمَا تُكَذِّبَانِ "}, {"aya_id": 4932, "coordinates": [[325, 124, 157, 34]], "aya_moshaf": "سَنَفۡرُغُ لَكُمۡ أَيُّهَ ٱلثَّقَلَانِ "}, {"aya_id": 4933, "coordinates": [[325, 92, 32, 34], [360, 276, 139, 34]], "aya_moshaf": "فَبِأَيِّ ءَالَآءِ رَبِّكُمَا تُكَذِّبَانِ "}, {"aya_id": 4934, "coordinates": [[360, 92, 184, 34], [394, 92, 322, 34], [428, 329, 86, 34]], "aya_moshaf": "يَٰمَعۡشَرَ ٱلۡجِنِّ وَٱلۡإِنسِ إِنِ ٱسۡتَطَعۡتُمۡ أَن تَنفُذُواْ مِنۡ أَقۡطَارِ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ فَٱنفُذُواْۚ لَا تَنفُذُونَ إِلَّا بِسُلۡطَٰنٖ "}, {"aya_id": 4935, "coordinates": [[428, 164, 165, 34]], "aya_moshaf": "فَبِأَيِّ ءَالَآءِ رَبِّكُمَا تُكَذِّبَانِ "}, {"aya_id": 4936, "coordinates": [[428, 92, 72, 34], [463, 203, 212, 34]], "aya_moshaf": "يُرۡسَلُ عَلَيۡكُمَا شُوَاظٞ مِّن نَّارٖ وَنُحَاسٞ فَلَا تَنتَصِرَانِ "}, {"aya_id": 4937, "coordinates": [[463, 92, 111, 34], [497, 340, 75, 34]], "aya_moshaf": "فَبِأَيِّ ءَالَآءِ رَبِّكُمَا تُكَذِّبَانِ "}, {"aya_id": 4938, "coordinates": [[497, 92, 248, 34], [531, 390, 25, 34]], "aya_moshaf": "فَإِذَا ٱنشَقَّتِ ٱلسَّمَآءُ فَكَانَتۡ وَرۡدَةٗ كَٱلدِّهَانِ "}, {"aya_id": 4939, "coordinates": [[531, 230, 160, 34]], "aya_moshaf": "فَبِأَيِّ ءَالَآءِ رَبِّكُمَا تُكَذِّبَانِ "}, {"aya_id": 4940, "coordinates": [[531, 92, 138, 34], [566, 303, 112, 34]], "aya_moshaf": "فَيَوۡمَئِذٖ لَّا يُسۡـَٔلُ عَن ذَنۢبِهِۦٓ إِنسٞ وَلَا جَآنّٞ "}, {"aya_id": 4941, "coordinates": [[566, 92, 211, 34]], "aya_moshaf": "فَبِأَيِّ ءَالَآءِ رَبِّكُمَا تُكَذِّبَانِ "}]
const ayasRanges = [{"ayas_ids_range": [4918, 4941], "sura_id": 55}];
