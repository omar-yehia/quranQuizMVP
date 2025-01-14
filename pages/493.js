const nearbySurasNames = {
    42: 'الشُّوري',
    43: 'الزُّخرُف',
    44: 'الدُّخان',
    45: 'الجاثِية',
};
const choicesObjects = {
    "491": "وكذلك ما ارسلنا من قبلك",
    "492": "ولبيوتهم ابوابا وسررا عليها يتكئون",
    "494": "وانه لعلم للساعه فلا تمترن",
    "495": "ان المجرمين في عذاب جهنم",
};
const ayas = [{"aya_id": 4373, "coordinates": [[87, 49, 322, 34], [121, 204, 168, 34]], "aya_moshaf": "وَمَا نُرِيهِم مِّنۡ ءَايَةٍ إِلَّا هِيَ أَكۡبَرُ مِنۡ أُخۡتِهَاۖ وَأَخَذۡنَٰهُم بِٱلۡعَذَابِ لَعَلَّهُمۡ يَرۡجِعُونَ "}, {"aya_id": 4374, "coordinates": [[121, 49, 155, 34], [156, 155, 217, 34]], "aya_moshaf": "وَقَالُواْ يَٰٓأَيُّهَ ٱلسَّاحِرُ ٱدۡعُ لَنَا رَبَّكَ بِمَا عَهِدَ عِندَكَ إِنَّنَا لَمُهۡتَدُونَ "}, {"aya_id": 4375, "coordinates": [[156, 49, 106, 34], [190, 204, 168, 34]], "aya_moshaf": "فَلَمَّا كَشَفۡنَا عَنۡهُمُ ٱلۡعَذَابَ إِذَا هُمۡ يَنكُثُونَ "}, {"aya_id": 4376, "coordinates": [[190, 49, 155, 34], [224, 49, 322, 34], [259, 242, 130, 34]], "aya_moshaf": "وَنَادَىٰ فِرۡعَوۡنُ فِي قَوۡمِهِۦ قَالَ يَٰقَوۡمِ أَلَيۡسَ لِي مُلۡكُ مِصۡرَ وَهَٰذِهِ ٱلۡأَنۡهَٰرُ تَجۡرِي مِن تَحۡتِيٓۚ أَفَلَا تُبۡصِرُونَ "}, {"aya_id": 4377, "coordinates": [[259, 49, 193, 34], [293, 274, 98, 34]], "aya_moshaf": "أَمۡ أَنَا۠ خَيۡرٞ مِّنۡ هَٰذَا ٱلَّذِي هُوَ مَهِينٞ وَلَا يَكَادُ يُبِينُ "}, {"aya_id": 4378, "coordinates": [[293, 49, 225, 34], [327, 154, 218, 34]], "aya_moshaf": "فَلَوۡلَآ أُلۡقِيَ عَلَيۡهِ أَسۡوِرَةٞ مِّن ذَهَبٍ أَوۡ جَآءَ مَعَهُ ٱلۡمَلَٰٓئِكَةُ مُقۡتَرِنِينَ "}, {"aya_id": 4379, "coordinates": [[327, 49, 105, 34], [362, 156, 216, 34]], "aya_moshaf": "فَٱسۡتَخَفَّ قَوۡمَهُۥ فَأَطَاعُوهُۚ إِنَّهُمۡ كَانُواْ قَوۡمٗا فَٰسِقِينَ "}, {"aya_id": 4380, "coordinates": [[362, 49, 107, 34], [396, 130, 242, 34]], "aya_moshaf": "فَلَمَّآ ءَاسَفُونَا ٱنتَقَمۡنَا مِنۡهُمۡ فَأَغۡرَقۡنَٰهُمۡ أَجۡمَعِينَ "}, {"aya_id": 4381, "coordinates": [[396, 49, 81, 34], [430, 198, 174, 34]], "aya_moshaf": "فَجَعَلۡنَٰهُمۡ سَلَفٗا وَمَثَلٗا لِّلۡأٓخِرِينَ "}, {"aya_id": 4382, "coordinates": [[430, 49, 149, 34], [465, 156, 216, 34]], "aya_moshaf": "۞ وَلَمَّا ضُرِبَ ٱبۡنُ مَرۡيَمَ مَثَلًا إِذَا قَوۡمُكَ مِنۡهُ يَصِدُّونَ "}, {"aya_id": 4383, "coordinates": [[465, 49, 107, 34], [499, 49, 322, 34]], "aya_moshaf": "وَقَالُوٓاْ ءَأَٰلِهَتُنَا خَيۡرٌ أَمۡ هُوَۚ مَا ضَرَبُوهُ لَكَ إِلَّا جَدَلَۢاۚ بَلۡ هُمۡ قَوۡمٌ خَصِمُونَ "}, {"aya_id": 4384, "coordinates": [[533, 49, 322, 34], [568, 343, 29, 34]], "aya_moshaf": "إِنۡ هُوَ إِلَّا عَبۡدٌ أَنۡعَمۡنَا عَلَيۡهِ وَجَعَلۡنَٰهُ مَثَلٗا لِّبَنِيٓ إِسۡرَٰٓءِيلَ "}, {"aya_id": 4385, "coordinates": [[568, 49, 294, 34]], "aya_moshaf": "وَلَوۡ نَشَآءُ لَجَعَلۡنَا مِنكُم مَّلَٰٓئِكَةٗ فِي ٱلۡأَرۡضِ يَخۡلُفُونَ "}]
const ayasRanges = [{"ayas_ids_range": [4373, 4385], "sura_id": 43}];
