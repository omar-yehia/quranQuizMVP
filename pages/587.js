const mainSuraId = 82;
const nearbySurasNames = {
    81: 'التَّكوير',
    82: 'الانفِطَار',
    83: 'المُطَففين',
    84: 'الانشِقَاق',
};
const choicesObjects = {
    "585": "عبس وتولي",
    "586": "ترهقها قتره",
    "588": "ليوم عظيم",
    "589": "فاليوم الذين امنوا من الكفار",
};
const ayas = [{"aya_id": 5830, "coordinates": [[117, 239, 130, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ إِذَا ٱلسَّمَآءُ ٱنفَطَرَتۡ "}, {"aya_id": 5831, "coordinates": [[117, 101, 138, 34]], "aya_moshaf": "وَإِذَا ٱلۡكَوَاكِبُ ٱنتَثَرَتۡ "}, {"aya_id": 5832, "coordinates": [[117, 46, 55, 34], [152, 303, 66, 34]], "aya_moshaf": "وَإِذَا ٱلۡبِحَارُ فُجِّرَتۡ "}, {"aya_id": 5833, "coordinates": [[152, 186, 117, 34]], "aya_moshaf": "وَإِذَا ٱلۡقُبُورُ بُعۡثِرَتۡ "}, {"aya_id": 5834, "coordinates": [[152, 46, 140, 34], [186, 304, 65, 34]], "aya_moshaf": "عَلِمَتۡ نَفۡسٞ مَّا قَدَّمَتۡ وَأَخَّرَتۡ "}, {"aya_id": 5835, "coordinates": [[186, 82, 222, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلۡإِنسَٰنُ مَا غَرَّكَ بِرَبِّكَ ٱلۡكَرِيمِ "}, {"aya_id": 5836, "coordinates": [[186, 46, 36, 34], [220, 222, 147, 34]], "aya_moshaf": "ٱلَّذِي خَلَقَكَ فَسَوَّىٰكَ فَعَدَلَكَ "}, {"aya_id": 5837, "coordinates": [[220, 46, 176, 34]], "aya_moshaf": "فِيٓ أَيِّ صُورَةٖ مَّا شَآءَ رَكَّبَكَ "}, {"aya_id": 5838, "coordinates": [[255, 227, 142, 34]], "aya_moshaf": "كـَلَّا بَلۡ تُكَذِّبُونَ بِٱلدِّينِ "}, {"aya_id": 5839, "coordinates": [[255, 93, 134, 34]], "aya_moshaf": "وَإِنَّ عَلَيۡكُمۡ لَحَٰفِظِينَ "}, {"aya_id": 5840, "coordinates": [[255, 46, 47, 34], [289, 310, 59, 34]], "aya_moshaf": "كِرَامٗا كَٰتِبِينَ "}, {"aya_id": 5841, "coordinates": [[289, 198, 112, 34]], "aya_moshaf": "يَعۡلَمُونَ مَا تَفۡعَلُونَ "}, {"aya_id": 5842, "coordinates": [[289, 71, 127, 34]], "aya_moshaf": "إِنَّ ٱلۡأَبۡرَارَ لَفِي نَعِيمٖ "}, {"aya_id": 5843, "coordinates": [[289, 46, 25, 34], [323, 254, 115, 34]], "aya_moshaf": "وَإِنَّ ٱلۡفُجَّارَ لَفِي جَحِيمٖ "}, {"aya_id": 5844, "coordinates": [[323, 143, 111, 34]], "aya_moshaf": "يَصۡلَوۡنَهَا يَوۡمَ ٱلدِّينِ "}, {"aya_id": 5845, "coordinates": [[323, 46, 97, 34], [358, 346, 23, 34]], "aya_moshaf": "وَمَا هُمۡ عَنۡهَا بِغَآئِبِينَ "}, {"aya_id": 5846, "coordinates": [[358, 202, 144, 34]], "aya_moshaf": "وَمَآ أَدۡرَىٰكَ مَا يَوۡمُ ٱلدِّينِ "}, {"aya_id": 5847, "coordinates": [[358, 46, 156, 34], [392, 345, 24, 34]], "aya_moshaf": "ثُمَّ مَآ أَدۡرَىٰكَ مَا يَوۡمُ ٱلدِّينِ "}, {"aya_id": 5848, "coordinates": [[392, 46, 299, 34]], "aya_moshaf": "يَوۡمَ لَا تَمۡلِكُ نَفۡسٞ لِّنَفۡسٖ شَيۡـٔٗاۖ وَٱلۡأَمۡرُ يَوۡمَئِذٖ لِّلَّهِ "}, {"aya_id": 5849, "coordinates": [[495, 260, 109, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ وَيۡلٞ لِّلۡمُطَفِّفِينَ "}, {"aya_id": 5850, "coordinates": [[495, 46, 214, 34]], "aya_moshaf": "ٱلَّذِينَ إِذَا ٱكۡتَالُواْ عَلَى ٱلنَّاسِ يَسۡتَوۡفُونَ "}, {"aya_id": 5851, "coordinates": [[529, 175, 194, 34]], "aya_moshaf": "وَإِذَا كَالُوهُمۡ أَو وَّزَنُوهُمۡ يُخۡسِرُونَ "}, {"aya_id": 5852, "coordinates": [[529, 46, 129, 34], [564, 299, 70, 34]], "aya_moshaf": "أَلَا يَظُنُّ أُوْلَٰٓئِكَ أَنَّهُم مَّبۡعُوثُونَ "}, {"aya_id": 5853, "coordinates": [[564, 220, 79, 34]], "aya_moshaf": "لِيَوۡمٍ عَظِيمٖ "}, {"aya_id": 5854, "coordinates": [[564, 46, 174, 34]], "aya_moshaf": "يَوۡمَ يَقُومُ ٱلنَّاسُ لِرَبِّ ٱلۡعَٰلَمِينَ "}]