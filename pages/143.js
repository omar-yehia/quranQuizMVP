const nearbySurasNames = {
    5: 'المَائدة',
    6: 'الأنعَام',
    7: 'الأعرَاف',
    8: 'الأنفَال',
};
const choicesObjects = {
    "141": "ذلكم الله ربكم لا اله",
    "142": "ولو اننا نزلنا اليهم الملائكه",
    "144": "فمن يرد الله ان يهديه",
    "145": "ولكل درجات مما عملوا وما",
};
const ayas = [{"aya_id": 908, "coordinates": [[87, 49, 322, 34], [121, 49, 322, 34], [156, 49, 322, 34]], "aya_moshaf": "وَمَا لَكُمۡ أَلَّا تَأۡكُلُواْ مِمَّا ذُكِرَ ٱسۡمُ ٱللَّهِ عَلَيۡهِ وَقَدۡ فَصَّلَ لَكُم مَّا حَرَّمَ عَلَيۡكُمۡ إِلَّا مَا ٱضۡطُرِرۡتُمۡ إِلَيۡهِۗ وَإِنَّ كَثِيرٗا لَّيُضِلُّونَ بِأَهۡوَآئِهِم بِغَيۡرِ عِلۡمٍۚ إِنَّ رَبَّكَ هُوَ أَعۡلَمُ بِٱلۡمُعۡتَدِينَ "}, {"aya_id": 909, "coordinates": [[190, 49, 322, 34], [224, 190, 182, 34]], "aya_moshaf": "وَذَرُواْ ظَٰهِرَ ٱلۡإِثۡمِ وَبَاطِنَهُۥٓۚ إِنَّ ٱلَّذِينَ يَكۡسِبُونَ ٱلۡإِثۡمَ سَيُجۡزَوۡنَ بِمَا كَانُواْ يَقۡتَرِفُونَ "}, {"aya_id": 910, "coordinates": [[224, 49, 141, 34], [259, 49, 322, 34], [293, 49, 322, 34]], "aya_moshaf": "وَلَا تَأۡكُلُواْ مِمَّا لَمۡ يُذۡكَرِ ٱسۡمُ ٱللَّهِ عَلَيۡهِ وَإِنَّهُۥ لَفِسۡقٞۗ وَإِنَّ ٱلشَّيَٰطِينَ لَيُوحُونَ إِلَىٰٓ أَوۡلِيَآئِهِمۡ لِيُجَٰدِلُوكُمۡۖ وَإِنۡ أَطَعۡتُمُوهُمۡ إِنَّكُمۡ لَمُشۡرِكُونَ "}, {"aya_id": 911, "coordinates": [[327, 49, 322, 34], [362, 49, 322, 34], [396, 144, 228, 34]], "aya_moshaf": "أَوَمَن كَانَ مَيۡتٗا فَأَحۡيَيۡنَٰهُ وَجَعَلۡنَا لَهُۥ نُورٗا يَمۡشِي بِهِۦ فِي ٱلنَّاسِ كَمَن مَّثَلُهُۥ فِي ٱلظُّلُمَٰتِ لَيۡسَ بِخَارِجٖ مِّنۡهَاۚ كَذَٰلِكَ زُيِّنَ لِلۡكَٰفِرِينَ مَا كَانُواْ يَعۡمَلُونَ "}, {"aya_id": 912, "coordinates": [[396, 49, 95, 34], [430, 49, 322, 34], [465, 136, 236, 34]], "aya_moshaf": "وَكَذَٰلِكَ جَعَلۡنَا فِي كُلِّ قَرۡيَةٍ أَكَٰبِرَ مُجۡرِمِيهَا لِيَمۡكُرُواْ فِيهَاۖ وَمَا يَمۡكُرُونَ إِلَّا بِأَنفُسِهِمۡ وَمَا يَشۡعُرُونَ "}, {"aya_id": 913, "coordinates": [[465, 49, 87, 34], [499, 49, 322, 34], [533, 49, 322, 34], [568, 49, 322, 34]], "aya_moshaf": "وَإِذَا جَآءَتۡهُمۡ ءَايَةٞ قَالُواْ لَن نُّؤۡمِنَ حَتَّىٰ نُؤۡتَىٰ مِثۡلَ مَآ أُوتِيَ رُسُلُ ٱللَّهِۘ ٱللَّهُ أَعۡلَمُ حَيۡثُ يَجۡعَلُ رِسَالَتَهُۥۗ سَيُصِيبُ ٱلَّذِينَ أَجۡرَمُواْ صَغَارٌ عِندَ ٱللَّهِ وَعَذَابٞ شَدِيدُۢ بِمَا كَانُواْ يَمۡكُرُونَ "}]
const ayasRanges = [{"ayas_ids_range": [908, 913], "sura_id": 6}];
