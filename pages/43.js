const nearbySurasNames = {
    1: 'الفَاتِحة',
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
};
const choicesObjects = {
    "41": "فلما فصل طالوت بالجنود قال",
    "42": "تلك الرسل فضلنا بعضهم علي",
    "44": "واذ قال ابراهيم رب ارني",
    "45": "ومثل الذين ينفقون اموالهم ابتغاء",
};
const ayas = [{"aya_id": 264, "coordinates": [[87, 49, 322, 34], [121, 49, 322, 34], [156, 49, 322, 34], [190, 274, 98, 34]], "aya_moshaf": "ٱللَّهُ وَلِيُّ ٱلَّذِينَ ءَامَنُواْ يُخۡرِجُهُم مِّنَ ٱلظُّلُمَٰتِ إِلَى ٱلنُّورِۖ وَٱلَّذِينَ كَفَرُوٓاْ أَوۡلِيَآؤُهُمُ ٱلطَّٰغُوتُ يُخۡرِجُونَهُم مِّنَ ٱلنُّورِ إِلَى ٱلظُّلُمَٰتِۗ أُوْلَٰٓئِكَ أَصۡحَٰبُ ٱلنَّارِۖ هُمۡ فِيهَا خَٰلِدُونَ "}, {"aya_id": 265, "coordinates": [[190, 49, 225, 34], [224, 49, 322, 34], [259, 49, 322, 34], [293, 49, 322, 34], [327, 144, 228, 34]], "aya_moshaf": "أَلَمۡ تَرَ إِلَى ٱلَّذِي حَآجَّ إِبۡرَٰهِـۧمَ فِي رَبِّهِۦٓ أَنۡ ءَاتَىٰهُ ٱللَّهُ ٱلۡمُلۡكَ إِذۡ قَالَ إِبۡرَٰهِـۧمُ رَبِّيَ ٱلَّذِي يُحۡيِۦ وَيُمِيتُ قَالَ أَنَا۠ أُحۡيِۦ وَأُمِيتُۖ قَالَ إِبۡرَٰهِـۧمُ فَإِنَّ ٱللَّهَ يَأۡتِي بِٱلشَّمۡسِ مِنَ ٱلۡمَشۡرِقِ فَأۡتِ بِهَا مِنَ ٱلۡمَغۡرِبِ فَبُهِتَ ٱلَّذِي كَفَرَۗ وَٱللَّهُ لَا يَهۡدِي ٱلۡقَوۡمَ ٱلظَّٰلِمِينَ "}, {"aya_id": 266, "coordinates": [[327, 49, 95, 34], [362, 49, 322, 34], [396, 49, 322, 34], [430, 49, 322, 34], [465, 49, 322, 34], [499, 49, 322, 34], [533, 49, 322, 34], [568, 53, 319, 34]], "aya_moshaf": "أَوۡ كَٱلَّذِي مَرَّ عَلَىٰ قَرۡيَةٖ وَهِيَ خَاوِيَةٌ عَلَىٰ عُرُوشِهَا قَالَ أَنَّىٰ يُحۡيِۦ هَٰذِهِ ٱللَّهُ بَعۡدَ مَوۡتِهَاۖ فَأَمَاتَهُ ٱللَّهُ مِاْئَةَ عَامٖ ثُمَّ بَعَثَهُۥۖ قَالَ كَمۡ لَبِثۡتَۖ قَالَ لَبِثۡتُ يَوۡمًا أَوۡ بَعۡضَ يَوۡمٖۖ قَالَ بَل لَّبِثۡتَ مِاْئَةَ عَامٖ فَٱنظُرۡ إِلَىٰ طَعَامِكَ وَشَرَابِكَ لَمۡ يَتَسَنَّهۡۖ وَٱنظُرۡ إِلَىٰ حِمَارِكَ وَلِنَجۡعَلَكَ ءَايَةٗ لِّلنَّاسِۖ وَٱنظُرۡ إِلَى ٱلۡعِظَامِ كَيۡفَ نُنشِزُهَا ثُمَّ نَكۡسُوهَا لَحۡمٗاۚ فَلَمَّا تَبَيَّنَ لَهُۥ قَالَ أَعۡلَمُ أَنَّ ٱللَّهَ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٞ "}]
const ayasRanges = [{"ayas_ids_range": [264, 266], "sura_id": 2}];
