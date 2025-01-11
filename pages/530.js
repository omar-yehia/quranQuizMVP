const mainSuraId = 54;
const nearbySurasNames = {
    53: 'النَّجم',
    54: 'القَمَر',
    55: 'الرَّحمٰن',
    56: 'الوَاقِعة',
};
const choicesObjects = {
    "528": "وانه خلق الزوجين الذكر والانثي",
    "529": "خشعا ابصارهم يخرجون من الاجداث",
    "531": "وما امرنا الا واحده كلمح",
    "532": "مرج البحرين يلتقيان",
};
const ayas = [{"aya_id": 4874, "coordinates": [[89, 172, 242, 34]], "aya_moshaf": "وَنَبِّئۡهُمۡ أَنَّ ٱلۡمَآءَ قِسۡمَةُۢ بَيۡنَهُمۡۖ كُلُّ شِرۡبٖ مُّحۡتَضَرٞ "}, {"aya_id": 4875, "coordinates": [[89, 91, 81, 34], [123, 321, 93, 34]], "aya_moshaf": "فَنَادَوۡاْ صَاحِبَهُمۡ فَتَعَاطَىٰ فَعَقَرَ "}, {"aya_id": 4876, "coordinates": [[123, 182, 139, 34]], "aya_moshaf": "فَكَيۡفَ كَانَ عَذَابِي وَنُذُرِ "}, {"aya_id": 4877, "coordinates": [[123, 91, 91, 34], [158, 194, 220, 34]], "aya_moshaf": "إِنَّآ أَرۡسَلۡنَا عَلَيۡهِمۡ صَيۡحَةٗ وَٰحِدَةٗ فَكَانُواْ كَهَشِيمِ ٱلۡمُحۡتَظِرِ "}, {"aya_id": 4878, "coordinates": [[158, 91, 103, 34], [192, 287, 127, 34]], "aya_moshaf": "وَلَقَدۡ يَسَّرۡنَا ٱلۡقُرۡءَانَ لِلذِّكۡرِ فَهَلۡ مِن مُّدَّكِرٖ "}, {"aya_id": 4879, "coordinates": [[192, 148, 139, 34]], "aya_moshaf": "كَذَّبَتۡ قَوۡمُ لُوطِۭ بِٱلنُّذُرِ "}, {"aya_id": 4880, "coordinates": [[192, 91, 57, 34], [226, 190, 224, 34]], "aya_moshaf": "إِنَّآ أَرۡسَلۡنَا عَلَيۡهِمۡ حَاصِبًا إِلَّآ ءَالَ لُوطٖۖ نَّجَّيۡنَٰهُم بِسَحَرٖ "}, {"aya_id": 4881, "coordinates": [[226, 91, 99, 34], [261, 272, 142, 34]], "aya_moshaf": "نِّعۡمَةٗ مِّنۡ عِندِنَاۚ كَذَٰلِكَ نَجۡزِي مَن شَكَرَ "}, {"aya_id": 4882, "coordinates": [[261, 91, 181, 34], [295, 357, 57, 34]], "aya_moshaf": "وَلَقَدۡ أَنذَرَهُم بَطۡشَتَنَا فَتَمَارَوۡاْ بِٱلنُّذُرِ "}, {"aya_id": 4883, "coordinates": [[295, 91, 266, 34], [329, 326, 88, 34]], "aya_moshaf": "وَلَقَدۡ رَٰوَدُوهُ عَن ضَيۡفِهِۦ فَطَمَسۡنَآ أَعۡيُنَهُمۡ فَذُوقُواْ عَذَابِي وَنُذُرِ "}, {"aya_id": 4884, "coordinates": [[329, 91, 235, 34]], "aya_moshaf": "وَلَقَدۡ صَبَّحَهُم بُكۡرَةً عَذَابٞ مُّسۡتَقِرّٞ "}, {"aya_id": 4885, "coordinates": [[364, 291, 123, 34]], "aya_moshaf": "فَذُوقُواْ عَذَابِي وَنُذُرِ "}, {"aya_id": 4886, "coordinates": [[364, 91, 200, 34], [398, 390, 24, 34]], "aya_moshaf": "وَلَقَدۡ يَسَّرۡنَا ٱلۡقُرۡءَانَ لِلذِّكۡرِ فَهَلۡ مِن مُّدَّكِرٖ "}, {"aya_id": 4887, "coordinates": [[398, 231, 159, 34]], "aya_moshaf": "وَلَقَدۡ جَآءَ ءَالَ فِرۡعَوۡنَ ٱلنُّذُرُ "}, {"aya_id": 4888, "coordinates": [[398, 91, 140, 34], [432, 301, 113, 34]], "aya_moshaf": "كَذَّبُواْ بِـَٔايَٰتِنَا كُلِّهَا فَأَخَذۡنَٰهُمۡ أَخۡذَ عَزِيزٖ مُّقۡتَدِرٍ "}, {"aya_id": 4889, "coordinates": [[432, 91, 210, 34], [467, 347, 67, 34]], "aya_moshaf": "أَكُفَّارُكُمۡ خَيۡرٞ مِّنۡ أُوْلَٰٓئِكُمۡ أَمۡ لَكُم بَرَآءَةٞ فِي ٱلزُّبُرِ "}, {"aya_id": 4890, "coordinates": [[467, 181, 166, 34]], "aya_moshaf": "أَمۡ يَقُولُونَ نَحۡنُ جَمِيعٞ مُّنتَصِرٞ "}, {"aya_id": 4891, "coordinates": [[467, 91, 90, 34], [501, 313, 101, 34]], "aya_moshaf": "سَيُهۡزَمُ ٱلۡجَمۡعُ وَيُوَلُّونَ ٱلدُّبُرَ "}, {"aya_id": 4892, "coordinates": [[501, 91, 222, 34], [535, 391, 23, 34]], "aya_moshaf": "بَلِ ٱلسَّاعَةُ مَوۡعِدُهُمۡ وَٱلسَّاعَةُ أَدۡهَىٰ وَأَمَرُّ "}, {"aya_id": 4893, "coordinates": [[535, 212, 179, 34]], "aya_moshaf": "إِنَّ ٱلۡمُجۡرِمِينَ فِي ضَلَٰلٖ وَسُعُرٖ "}, {"aya_id": 4894, "coordinates": [[535, 91, 121, 34], [570, 240, 174, 34]], "aya_moshaf": "يَوۡمَ يُسۡحَبُونَ فِي ٱلنَّارِ عَلَىٰ وُجُوهِهِمۡ ذُوقُواْ مَسَّ سَقَرَ "}, {"aya_id": 4895, "coordinates": [[570, 91, 149, 34]], "aya_moshaf": "إِنَّا كُلَّ شَيۡءٍ خَلَقۡنَٰهُ بِقَدَرٖ "}]