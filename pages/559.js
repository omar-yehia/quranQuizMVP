const mainSuraId = 65;
const nearbySurasNames = {
    64: 'التغَابُن',
    65: 'الطَّلَاق',
    66: 'التَّحرِيم',
    67: 'المُلك',
};
const choicesObjects = {
    "557": "والذين كفروا وكذبوا باياتنا اولئك",
    "558": "ياايها النبي اذا طلقتم النساء",
    "560": "ياايها النبي لم تحرم ما",
    "561": "ياايها الذين امنوا توبوا الي",
};
const ayas = [{"aya_id": 5223, "coordinates": [[85, 52, 322, 34], [119, 52, 322, 34], [153, 52, 322, 34], [187, 204, 171, 34]], "aya_moshaf": "أَسۡكِنُوهُنَّ مِنۡ حَيۡثُ سَكَنتُم مِّن وُجۡدِكُمۡ وَلَا تُضَآرُّوهُنَّ لِتُضَيِّقُواْ عَلَيۡهِنَّۚ وَإِن كُنَّ أُوْلَٰتِ حَمۡلٖ فَأَنفِقُواْ عَلَيۡهِنَّ حَتَّىٰ يَضَعۡنَ حَمۡلَهُنَّۚ فَإِنۡ أَرۡضَعۡنَ لَكُمۡ فَـَٔاتُوهُنَّ أُجُورَهُنَّ وَأۡتَمِرُواْ بَيۡنَكُم بِمَعۡرُوفٖۖ وَإِن تَعَاسَرۡتُمۡ فَسَتُرۡضِعُ لَهُۥٓ أُخۡرَىٰ "}, {"aya_id": 5224, "coordinates": [[187, 52, 152, 34], [221, 52, 322, 34], [255, 140, 235, 34]], "aya_moshaf": "لِيُنفِقۡ ذُو سَعَةٖ مِّن سَعَتِهِۦۖ وَمَن قُدِرَ عَلَيۡهِ رِزۡقُهُۥ فَلۡيُنفِقۡ مِمَّآ ءَاتَىٰهُ ٱللَّهُۚ لَا يُكَلِّفُ ٱللَّهُ نَفۡسًا إِلَّا مَآ ءَاتَىٰهَاۚ سَيَجۡعَلُ ٱللَّهُ بَعۡدَ عُسۡرٖ يُسۡرٗا "}, {"aya_id": 5225, "coordinates": [[255, 52, 88, 34], [289, 52, 322, 34], [323, 295, 80, 34]], "aya_moshaf": "وَكَأَيِّن مِّن قَرۡيَةٍ عَتَتۡ عَنۡ أَمۡرِ رَبِّهَا وَرُسُلِهِۦ فَحَاسَبۡنَٰهَا حِسَابٗا شَدِيدٗا وَعَذَّبۡنَٰهَا عَذَابٗا نُّكۡرٗا "}, {"aya_id": 5226, "coordinates": [[323, 52, 243, 34]], "aya_moshaf": "فَذَاقَتۡ وَبَالَ أَمۡرِهَا وَكَانَ عَٰقِبَةُ أَمۡرِهَا خُسۡرًا "}, {"aya_id": 5227, "coordinates": [[356, 52, 322, 34], [390, 239, 136, 34]], "aya_moshaf": "أَعَدَّ ٱللَّهُ لَهُمۡ عَذَابٗا شَدِيدٗاۖ فَٱتَّقُواْ ٱللَّهَ يَٰٓأُوْلِي ٱلۡأَلۡبَٰبِ ٱلَّذِينَ ءَامَنُواْۚ قَدۡ أَنزَلَ ٱللَّهُ إِلَيۡكُمۡ ذِكۡرٗا "}, {"aya_id": 5228, "coordinates": [[390, 52, 187, 34], [424, 52, 322, 34], [458, 52, 322, 34], [492, 129, 246, 34]], "aya_moshaf": "رَّسُولٗا يَتۡلُواْ عَلَيۡكُمۡ ءَايَٰتِ ٱللَّهِ مُبَيِّنَٰتٖ لِّيُخۡرِجَ ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ مِنَ ٱلظُّلُمَٰتِ إِلَى ٱلنُّورِۚ وَمَن يُؤۡمِنۢ بِٱللَّهِ وَيَعۡمَلۡ صَٰلِحٗا يُدۡخِلۡهُ جَنَّٰتٖ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُ خَٰلِدِينَ فِيهَآ أَبَدٗاۖ قَدۡ أَحۡسَنَ ٱللَّهُ لَهُۥ رِزۡقًا "}, {"aya_id": 5229, "coordinates": [[492, 52, 77, 34], [526, 52, 322, 34], [560, 52, 322, 34]], "aya_moshaf": "ٱللَّهُ ٱلَّذِي خَلَقَ سَبۡعَ سَمَٰوَٰتٖ وَمِنَ ٱلۡأَرۡضِ مِثۡلَهُنَّۖ يَتَنَزَّلُ ٱلۡأَمۡرُ بَيۡنَهُنَّ لِتَعۡلَمُوٓاْ أَنَّ ٱللَّهَ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٞ وَأَنَّ ٱللَّهَ قَدۡ أَحَاطَ بِكُلِّ شَيۡءٍ عِلۡمَۢا "}]