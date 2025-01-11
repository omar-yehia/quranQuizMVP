const mainSuraId = 50;
const nearbySurasNames = {
    49: 'الحُجُرَات',
    50: 'قٓ',
    51: 'الذَّاريَات',
    52: 'الطُّور',
};
const choicesObjects = {
    "517": "ياايها الذين امنوا اجتنبوا كثيرا",
    "518": "ق والقران المجيد",
    "520": "وكم اهلكنا قبلهم من قرن",
    "521": "والسماء ذات الحبك",
};
const ayas = [{"aya_id": 4646, "coordinates": [[92, 46, 322, 34], [126, 272, 97, 34]], "aya_moshaf": "وَلَقَدۡ خَلَقۡنَا ٱلۡإِنسَٰنَ وَنَعۡلَمُ مَا تُوَسۡوِسُ بِهِۦ نَفۡسُهُۥۖ وَنَحۡنُ أَقۡرَبُ إِلَيۡهِ مِنۡ حَبۡلِ ٱلۡوَرِيدِ "}, {"aya_id": 4647, "coordinates": [[126, 46, 226, 34], [161, 350, 19, 34]], "aya_moshaf": "إِذۡ يَتَلَقَّى ٱلۡمُتَلَقِّيَانِ عَنِ ٱلۡيَمِينِ وَعَنِ ٱلشِّمَالِ قَعِيدٞ "}, {"aya_id": 4648, "coordinates": [[161, 139, 211, 34]], "aya_moshaf": "مَّا يَلۡفِظُ مِن قَوۡلٍ إِلَّا لَدَيۡهِ رَقِيبٌ عَتِيدٞ "}, {"aya_id": 4649, "coordinates": [[161, 46, 93, 34], [195, 166, 203, 34]], "aya_moshaf": "وَجَآءَتۡ سَكۡرَةُ ٱلۡمَوۡتِ بِٱلۡحَقِّۖ ذَٰلِكَ مَا كُنتَ مِنۡهُ تَحِيدُ "}, {"aya_id": 4650, "coordinates": [[195, 46, 120, 34], [229, 289, 80, 34]], "aya_moshaf": "وَنُفِخَ فِي ٱلصُّورِۚ ذَٰلِكَ يَوۡمُ ٱلۡوَعِيدِ "}, {"aya_id": 4651, "coordinates": [[229, 87, 202, 34]], "aya_moshaf": "وَجَآءَتۡ كُلُّ نَفۡسٖ مَّعَهَا سَآئِقٞ وَشَهِيدٞ "}, {"aya_id": 4652, "coordinates": [[229, 46, 41, 34], [264, 46, 322, 34], [298, 350, 19, 34]], "aya_moshaf": "لَّقَدۡ كُنتَ فِي غَفۡلَةٖ مِّنۡ هَٰذَا فَكَشَفۡنَا عَنكَ غِطَآءَكَ فَبَصَرُكَ ٱلۡيَوۡمَ حَدِيدٞ "}, {"aya_id": 4653, "coordinates": [[298, 178, 172, 34]], "aya_moshaf": "وَقَالَ قَرِينُهُۥ هَٰذَا مَا لَدَيَّ عَتِيدٌ "}, {"aya_id": 4654, "coordinates": [[298, 46, 132, 34], [332, 319, 50, 34]], "aya_moshaf": "أَلۡقِيَا فِي جَهَنَّمَ كُلَّ كَفَّارٍ عَنِيدٖ "}, {"aya_id": 4655, "coordinates": [[332, 180, 139, 34]], "aya_moshaf": "مَّنَّاعٖ لِّلۡخَيۡرِ مُعۡتَدٖ مُّرِيبٍ "}, {"aya_id": 4656, "coordinates": [[332, 46, 134, 34], [367, 203, 166, 34]], "aya_moshaf": "ٱلَّذِي جَعَلَ مَعَ ٱللَّهِ إِلَٰهًا ءَاخَرَ فَأَلۡقِيَاهُ فِي ٱلۡعَذَابِ ٱلشَّدِيدِ "}, {"aya_id": 4657, "coordinates": [[367, 46, 157, 34], [401, 224, 145, 34]], "aya_moshaf": "۞ قَالَ قَرِينُهُۥ رَبَّنَا مَآ أَطۡغَيۡتُهُۥ وَلَٰكِن كَانَ فِي ضَلَٰلِۭ بَعِيدٖ "}, {"aya_id": 4658, "coordinates": [[401, 46, 178, 34], [435, 275, 94, 34]], "aya_moshaf": "قَالَ لَا تَخۡتَصِمُواْ لَدَيَّ وَقَدۡ قَدَّمۡتُ إِلَيۡكُم بِٱلۡوَعِيدِ "}, {"aya_id": 4659, "coordinates": [[435, 46, 229, 34]], "aya_moshaf": "مَا يُبَدَّلُ ٱلۡقَوۡلُ لَدَيَّ وَمَآ أَنَا۠ بِظَلَّٰمٖ لِّلۡعَبِيدِ "}, {"aya_id": 4660, "coordinates": [[470, 104, 265, 34]], "aya_moshaf": "يَوۡمَ نَقُولُ لِجَهَنَّمَ هَلِ ٱمۡتَلَأۡتِ وَتَقُولُ هَلۡ مِن مَّزِيدٖ "}, {"aya_id": 4661, "coordinates": [[470, 46, 58, 34], [504, 233, 136, 34]], "aya_moshaf": "وَأُزۡلِفَتِ ٱلۡجَنَّةُ لِلۡمُتَّقِينَ غَيۡرَ بَعِيدٍ "}, {"aya_id": 4662, "coordinates": [[504, 46, 187, 34], [538, 348, 21, 34]], "aya_moshaf": "هَٰذَا مَا تُوعَدُونَ لِكُلِّ أَوَّابٍ حَفِيظٖ "}, {"aya_id": 4663, "coordinates": [[538, 114, 234, 34]], "aya_moshaf": "مَّنۡ خَشِيَ ٱلرَّحۡمَٰنَ بِٱلۡغَيۡبِ وَجَآءَ بِقَلۡبٖ مُّنِيبٍ "}, {"aya_id": 4664, "coordinates": [[538, 46, 68, 34], [573, 241, 128, 34]], "aya_moshaf": "ٱدۡخُلُوهَا بِسَلَٰمٖۖ ذَٰلِكَ يَوۡمُ ٱلۡخُلُودِ "}, {"aya_id": 4665, "coordinates": [[573, 46, 195, 34]], "aya_moshaf": "لَهُم مَّا يَشَآءُونَ فِيهَا وَلَدَيۡنَا مَزِيدٞ "}]