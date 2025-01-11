const nearbySurasNames = {
    4: 'النِّسَاء',
    5: 'المَائدة',
    6: 'الأنعَام',
    7: 'الأعرَاف',
};
const choicesObjects = {
    "122": "واذا سمعوا ما انزل الي",
    "123": "ياايها الذين امنوا انما الخمر",
    "125": "واذا قيل لهم تعالوا الي",
    "126": "يوم يجمع الله الرسل فيقول",
};
const ayas = [{"aya_id": 765, "coordinates": [[83, 94, 322, 34], [117, 94, 322, 34], [152, 318, 98, 34]], "aya_moshaf": "أُحِلَّ لَكُمۡ صَيۡدُ ٱلۡبَحۡرِ وَطَعَامُهُۥ مَتَٰعٗا لَّكُمۡ وَلِلسَّيَّارَةِۖ وَحُرِّمَ عَلَيۡكُمۡ صَيۡدُ ٱلۡبَرِّ مَا دُمۡتُمۡ حُرُمٗاۗ وَٱتَّقُواْ ٱللَّهَ ٱلَّذِيٓ إِلَيۡهِ تُحۡشَرُونَ "}, {"aya_id": 766, "coordinates": [[152, 94, 224, 34], [186, 94, 322, 34], [220, 94, 322, 34], [255, 321, 95, 34]], "aya_moshaf": "۞ جَعَلَ ٱللَّهُ ٱلۡكَعۡبَةَ ٱلۡبَيۡتَ ٱلۡحَرَامَ قِيَٰمٗا لِّلنَّاسِ وَٱلشَّهۡرَ ٱلۡحَرَامَ وَٱلۡهَدۡيَ وَٱلۡقَلَٰٓئِدَۚ ذَٰلِكَ لِتَعۡلَمُوٓاْ أَنَّ ٱللَّهَ يَعۡلَمُ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِ وَأَنَّ ٱللَّهَ بِكُلِّ شَيۡءٍ عَلِيمٌ "}, {"aya_id": 767, "coordinates": [[255, 94, 227, 34], [289, 310, 106, 34]], "aya_moshaf": "ٱعۡلَمُوٓاْ أَنَّ ٱللَّهَ شَدِيدُ ٱلۡعِقَابِ وَأَنَّ ٱللَّهَ غَفُورٞ رَّحِيمٞ "}, {"aya_id": 768, "coordinates": [[289, 94, 216, 34], [323, 278, 138, 34]], "aya_moshaf": "مَّا عَلَى ٱلرَّسُولِ إِلَّا ٱلۡبَلَٰغُۗ وَٱللَّهُ يَعۡلَمُ مَا تُبۡدُونَ وَمَا تَكۡتُمُونَ "}, {"aya_id": 769, "coordinates": [[323, 94, 184, 34], [358, 94, 322, 34], [392, 281, 135, 34]], "aya_moshaf": "قُل لَّا يَسۡتَوِي ٱلۡخَبِيثُ وَٱلطَّيِّبُ وَلَوۡ أَعۡجَبَكَ كَثۡرَةُ ٱلۡخَبِيثِۚ فَٱتَّقُواْ ٱللَّهَ يَٰٓأُوْلِي ٱلۡأَلۡبَٰبِ لَعَلَّكُمۡ تُفۡلِحُونَ "}, {"aya_id": 770, "coordinates": [[392, 94, 187, 34], [426, 94, 322, 34], [461, 124, 292, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَا تَسۡـَٔلُواْ عَنۡ أَشۡيَآءَ إِن تُبۡدَ لَكُمۡ تَسُؤۡكُمۡ وَإِن تَسۡـَٔلُواْ عَنۡهَا حِينَ يُنَزَّلُ ٱلۡقُرۡءَانُ تُبۡدَ لَكُمۡ عَفَا ٱللَّهُ عَنۡهَاۗ وَٱللَّهُ غَفُورٌ حَلِيمٞ "}, {"aya_id": 771, "coordinates": [[461, 94, 30, 34], [495, 94, 322, 34]], "aya_moshaf": "قَدۡ سَأَلَهَا قَوۡمٞ مِّن قَبۡلِكُمۡ ثُمَّ أَصۡبَحُواْ بِهَا كَٰفِرِينَ "}, {"aya_id": 772, "coordinates": [[529, 94, 322, 34], [564, 94, 322, 34]], "aya_moshaf": "مَا جَعَلَ ٱللَّهُ مِنۢ بَحِيرَةٖ وَلَا سَآئِبَةٖ وَلَا وَصِيلَةٖ وَلَا حَامٖ وَلَٰكِنَّ ٱلَّذِينَ كَفَرُواْ يَفۡتَرُونَ عَلَى ٱللَّهِ ٱلۡكَذِبَۖ وَأَكۡثَرُهُمۡ لَا يَعۡقِلُونَ "}]
const ayasRanges = [{"ayas_ids_range": [765, 772], "sura_id": 5}];
