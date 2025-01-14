const nearbySurasNames = {
    11: 'هُود',
    12: 'يُوسُف',
    13: 'الرَّعد',
    14: 'إبراهِيم',
};
const choicesObjects = {
    "235": "ولو شاء ربك لجعل الناس",
    "236": "قال يابني لا تقصص رؤياك",
    "238": "وراودته التي هو في بيتها",
    "239": "فلما سمعت بمكرهن ارسلت اليهن",
};
const ayas = [{"aya_id": 1611, "coordinates": [[87, 49, 322, 34], [121, 100, 272, 34]], "aya_moshaf": "فَلَمَّا ذَهَبُواْ بِهِۦ وَأَجۡمَعُوٓاْ أَن يَجۡعَلُوهُ فِي غَيَٰبَتِ ٱلۡجُبِّۚ وَأَوۡحَيۡنَآ إِلَيۡهِ لَتُنَبِّئَنَّهُم بِأَمۡرِهِمۡ هَٰذَا وَهُمۡ لَا يَشۡعُرُونَ "}, {"aya_id": 1612, "coordinates": [[121, 49, 51, 34], [156, 220, 152, 34]], "aya_moshaf": "وَجَآءُوٓ أَبَاهُمۡ عِشَآءٗ يَبۡكُونَ "}, {"aya_id": 1613, "coordinates": [[156, 49, 171, 34], [190, 49, 322, 34], [224, 164, 208, 34]], "aya_moshaf": "قَالُواْ يَٰٓأَبَانَآ إِنَّا ذَهَبۡنَا نَسۡتَبِقُ وَتَرَكۡنَا يُوسُفَ عِندَ مَتَٰعِنَا فَأَكَلَهُ ٱلذِّئۡبُۖ وَمَآ أَنتَ بِمُؤۡمِنٖ لَّنَا وَلَوۡ كُنَّا صَٰدِقِينَ "}, {"aya_id": 1614, "coordinates": [[224, 49, 115, 34], [259, 49, 322, 34], [293, 179, 193, 34]], "aya_moshaf": "وَجَآءُو عَلَىٰ قَمِيصِهِۦ بِدَمٖ كَذِبٖۚ قَالَ بَلۡ سَوَّلَتۡ لَكُمۡ أَنفُسُكُمۡ أَمۡرٗاۖ فَصَبۡرٞ جَمِيلٞۖ وَٱللَّهُ ٱلۡمُسۡتَعَانُ عَلَىٰ مَا تَصِفُونَ "}, {"aya_id": 1615, "coordinates": [[293, 49, 130, 34], [327, 49, 322, 34], [362, 194, 178, 34]], "aya_moshaf": "وَجَآءَتۡ سَيَّارَةٞ فَأَرۡسَلُواْ وَارِدَهُمۡ فَأَدۡلَىٰ دَلۡوَهُۥۖ قَالَ يَٰبُشۡرَىٰ هَٰذَا غُلَٰمٞۚ وَأَسَرُّوهُ بِضَٰعَةٗۚ وَٱللَّهُ عَلِيمُۢ بِمَا يَعۡمَلُونَ "}, {"aya_id": 1616, "coordinates": [[362, 49, 145, 34], [396, 83, 289, 34]], "aya_moshaf": "وَشَرَوۡهُ بِثَمَنِۭ بَخۡسٖ دَرَٰهِمَ مَعۡدُودَةٖ وَكَانُواْ فِيهِ مِنَ ٱلزَّٰهِدِينَ "}, {"aya_id": 1617, "coordinates": [[396, 49, 34, 34], [430, 49, 322, 34], [465, 49, 322, 34], [499, 49, 322, 34], [533, 108, 264, 34]], "aya_moshaf": "وَقَالَ ٱلَّذِي ٱشۡتَرَىٰهُ مِن مِّصۡرَ لِٱمۡرَأَتِهِۦٓ أَكۡرِمِي مَثۡوَىٰهُ عَسَىٰٓ أَن يَنفَعَنَآ أَوۡ نَتَّخِذَهُۥ وَلَدٗاۚ وَكَذَٰلِكَ مَكَّنَّا لِيُوسُفَ فِي ٱلۡأَرۡضِ وَلِنُعَلِّمَهُۥ مِن تَأۡوِيلِ ٱلۡأَحَادِيثِۚ وَٱللَّهُ غَالِبٌ عَلَىٰٓ أَمۡرِهِۦ وَلَٰكِنَّ أَكۡثَرَ ٱلنَّاسِ لَا يَعۡلَمُونَ "}, {"aya_id": 1618, "coordinates": [[533, 49, 59, 34], [568, 49, 322, 34]], "aya_moshaf": "وَلَمَّا بَلَغَ أَشُدَّهُۥٓ ءَاتَيۡنَٰهُ حُكۡمٗا وَعِلۡمٗاۚ وَكَذَٰلِكَ نَجۡزِي ٱلۡمُحۡسِنِينَ "}]
const ayasRanges = [{"ayas_ids_range": [1611, 1618], "sura_id": 12}];
