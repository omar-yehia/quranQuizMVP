const nearbySurasNames = {
    5: 'المَائدة',
    6: 'الأنعَام',
    7: 'الأعرَاف',
    8: 'الأنفَال',
};
const choicesObjects = {
    "127": "قال عيسي ابن مريم اللهم",
    "128": "الحمد لله الذي خلق السموات",
    "130": "قل اي شيء اكبر شهاده",
    "131": "بل بدا لهم ما كانوا",
};
const ayas = [{"aya_id": 798, "coordinates": [[87, 47, 322, 34], [121, 272, 98, 34]], "aya_moshaf": "وَلَوۡ جَعَلۡنَٰهُ مَلَكٗا لَّجَعَلۡنَٰهُ رَجُلٗا وَلَلَبَسۡنَا عَلَيۡهِم مَّا يَلۡبِسُونَ "}, {"aya_id": 799, "coordinates": [[121, 47, 225, 34], [156, 47, 322, 34]], "aya_moshaf": "وَلَقَدِ ٱسۡتُهۡزِئَ بِرُسُلٖ مِّن قَبۡلِكَ فَحَاقَ بِٱلَّذِينَ سَخِرُواْ مِنۡهُم مَّا كَانُواْ بِهِۦ يَسۡتَهۡزِءُونَ "}, {"aya_id": 800, "coordinates": [[190, 47, 322, 34], [224, 276, 94, 34]], "aya_moshaf": "قُلۡ سِيرُواْ فِي ٱلۡأَرۡضِ ثُمَّ ٱنظُرُواْ كَيۡفَ كَانَ عَٰقِبَةُ ٱلۡمُكَذِّبِينَ "}, {"aya_id": 801, "coordinates": [[224, 47, 229, 34], [259, 47, 322, 34], [293, 47, 322, 34], [327, 337, 33, 34]], "aya_moshaf": "قُل لِّمَن مَّا فِي ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۖ قُل لِّلَّهِۚ كَتَبَ عَلَىٰ نَفۡسِهِ ٱلرَّحۡمَةَۚ لَيَجۡمَعَنَّكُمۡ إِلَىٰ يَوۡمِ ٱلۡقِيَٰمَةِ لَا رَيۡبَ فِيهِۚ ٱلَّذِينَ خَسِرُوٓاْ أَنفُسَهُمۡ فَهُمۡ لَا يُؤۡمِنُونَ "}, {"aya_id": 802, "coordinates": [[327, 47, 290, 34], [362, 342, 28, 34]], "aya_moshaf": "۞ وَلَهُۥ مَا سَكَنَ فِي ٱلَّيۡلِ وَٱلنَّهَارِۚ وَهُوَ ٱلسَّمِيعُ ٱلۡعَلِيمُ "}, {"aya_id": 803, "coordinates": [[362, 47, 295, 34], [396, 47, 322, 34], [430, 207, 163, 34]], "aya_moshaf": "قُلۡ أَغَيۡرَ ٱللَّهِ أَتَّخِذُ وَلِيّٗا فَاطِرِ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَهُوَ يُطۡعِمُ وَلَا يُطۡعَمُۗ قُلۡ إِنِّيٓ أُمِرۡتُ أَنۡ أَكُونَ أَوَّلَ مَنۡ أَسۡلَمَۖ وَلَا تَكُونَنَّ مِنَ ٱلۡمُشۡرِكِينَ "}, {"aya_id": 804, "coordinates": [[430, 47, 160, 34], [465, 217, 153, 34]], "aya_moshaf": "قُلۡ إِنِّيٓ أَخَافُ إِنۡ عَصَيۡتُ رَبِّي عَذَابَ يَوۡمٍ عَظِيمٖ "}, {"aya_id": 805, "coordinates": [[465, 47, 170, 34], [499, 190, 180, 34]], "aya_moshaf": "مَّن يُصۡرَفۡ عَنۡهُ يَوۡمَئِذٖ فَقَدۡ رَحِمَهُۥۚ وَذَٰلِكَ ٱلۡفَوۡزُ ٱلۡمُبِينُ "}, {"aya_id": 806, "coordinates": [[499, 47, 143, 34], [533, 47, 322, 34], [568, 311, 59, 34]], "aya_moshaf": "وَإِن يَمۡسَسۡكَ ٱللَّهُ بِضُرّٖ فَلَا كَاشِفَ لَهُۥٓ إِلَّا هُوَۖ وَإِن يَمۡسَسۡكَ بِخَيۡرٖ فَهُوَ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٞ "}, {"aya_id": 807, "coordinates": [[568, 47, 264, 34]], "aya_moshaf": "وَهُوَ ٱلۡقَاهِرُ فَوۡقَ عِبَادِهِۦۚ وَهُوَ ٱلۡحَكِيمُ ٱلۡخَبِيرُ "}]
const ayasRanges = [{"ayas_ids_range": [798, 807], "sura_id": 6}];
