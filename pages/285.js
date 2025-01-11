const mainSuraId = 17;
const nearbySurasNames = {
    16: 'النَّحل',
    17: 'الإسرَاء',
    18: 'الكَهف',
    19: 'مَريَم',
};
const choicesObjects = {
    "283": "عسي ربكم ان يرحمكم وان",
    "284": "من كان يريد العاجله عجلنا",
    "286": "ذلك مما اوحي اليك ربك",
    "287": "قل كونوا حجاره او حديدا",
};
const ayas = [{"aya_id": 2057, "coordinates": [[90, 46, 322, 34], [124, 298, 71, 34]], "aya_moshaf": "وَإِمَّا تُعۡرِضَنَّ عَنۡهُمُ ٱبۡتِغَآءَ رَحۡمَةٖ مِّن رَّبِّكَ تَرۡجُوهَا فَقُل لَّهُمۡ قَوۡلٗا مَّيۡسُورٗا "}, {"aya_id": 2058, "coordinates": [[124, 46, 252, 34], [159, 171, 198, 34]], "aya_moshaf": "وَلَا تَجۡعَلۡ يَدَكَ مَغۡلُولَةً إِلَىٰ عُنُقِكَ وَلَا تَبۡسُطۡهَا كُلَّ ٱلۡبَسۡطِ فَتَقۡعُدَ مَلُومٗا مَّحۡسُورًا "}, {"aya_id": 2059, "coordinates": [[159, 46, 125, 34], [193, 101, 268, 34]], "aya_moshaf": "إِنَّ رَبَّكَ يَبۡسُطُ ٱلرِّزۡقَ لِمَن يَشَآءُ وَيَقۡدِرُۚ إِنَّهُۥ كَانَ بِعِبَادِهِۦ خَبِيرَۢا بَصِيرٗا "}, {"aya_id": 2060, "coordinates": [[193, 46, 55, 34], [227, 46, 322, 34], [262, 272, 97, 34]], "aya_moshaf": "وَلَا تَقۡتُلُوٓاْ أَوۡلَٰدَكُمۡ خَشۡيَةَ إِمۡلَٰقٖۖ نَّحۡنُ نَرۡزُقُهُمۡ وَإِيَّاكُمۡۚ إِنَّ قَتۡلَهُمۡ كَانَ خِطۡـٔٗا كَبِيرٗا "}, {"aya_id": 2061, "coordinates": [[262, 46, 226, 34], [296, 303, 66, 34]], "aya_moshaf": "وَلَا تَقۡرَبُواْ ٱلزِّنَىٰٓۖ إِنَّهُۥ كَانَ فَٰحِشَةٗ وَسَآءَ سَبِيلٗا "}, {"aya_id": 2062, "coordinates": [[296, 46, 257, 34], [330, 46, 322, 34], [365, 214, 155, 34]], "aya_moshaf": "وَلَا تَقۡتُلُواْ ٱلنَّفۡسَ ٱلَّتِي حَرَّمَ ٱللَّهُ إِلَّا بِٱلۡحَقِّۗ وَمَن قُتِلَ مَظۡلُومٗا فَقَدۡ جَعَلۡنَا لِوَلِيِّهِۦ سُلۡطَٰنٗا فَلَا يُسۡرِف فِّي ٱلۡقَتۡلِۖ إِنَّهُۥ كَانَ مَنصُورٗا "}, {"aya_id": 2063, "coordinates": [[365, 46, 168, 34], [399, 46, 322, 34], [433, 304, 65, 34]], "aya_moshaf": "وَلَا تَقۡرَبُواْ مَالَ ٱلۡيَتِيمِ إِلَّا بِٱلَّتِي هِيَ أَحۡسَنُ حَتَّىٰ يَبۡلُغَ أَشُدَّهُۥۚ وَأَوۡفُواْ بِٱلۡعَهۡدِۖ إِنَّ ٱلۡعَهۡدَ كَانَ مَسۡـُٔولٗا "}, {"aya_id": 2064, "coordinates": [[433, 46, 258, 34], [468, 211, 158, 34]], "aya_moshaf": "وَأَوۡفُواْ ٱلۡكَيۡلَ إِذَا كِلۡتُمۡ وَزِنُواْ بِٱلۡقِسۡطَاسِ ٱلۡمُسۡتَقِيمِۚ ذَٰلِكَ خَيۡرٞ وَأَحۡسَنُ تَأۡوِيلٗا "}, {"aya_id": 2065, "coordinates": [[468, 46, 165, 34], [502, 46, 322, 34]], "aya_moshaf": "وَلَا تَقۡفُ مَا لَيۡسَ لَكَ بِهِۦ عِلۡمٌۚ إِنَّ ٱلسَّمۡعَ وَٱلۡبَصَرَ وَٱلۡفُؤَادَ كُلُّ أُوْلَٰٓئِكَ كَانَ عَنۡهُ مَسۡـُٔولٗا "}, {"aya_id": 2066, "coordinates": [[536, 46, 322, 34], [571, 276, 93, 34]], "aya_moshaf": "وَلَا تَمۡشِ فِي ٱلۡأَرۡضِ مَرَحًاۖ إِنَّكَ لَن تَخۡرِقَ ٱلۡأَرۡضَ وَلَن تَبۡلُغَ ٱلۡجِبَالَ طُولٗا "}, {"aya_id": 2067, "coordinates": [[571, 46, 230, 34]], "aya_moshaf": "كُلُّ ذَٰلِكَ كَانَ سَيِّئُهُۥ عِندَ رَبِّكَ مَكۡرُوهٗا "}]