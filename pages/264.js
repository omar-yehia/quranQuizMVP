const mainSuraId = 15;
const nearbySurasNames = {
    14: 'إبراهِيم',
    15: 'الحِجر',
    16: 'النَّحل',
    17: 'الإسرَاء',
};
const choicesObjects = {
    "262": "الر تلك ايات الكتاب وقران",
    "263": "ولقد جعلنا في السماء بروجا",
    "265": "اذ دخلوا عليه فقالوا سلاما",
    "266": "قال هؤلاء بناتي ان كنتم",
};
const ayas = [{"aya_id": 1834, "coordinates": [[82, 162, 253, 34]], "aya_moshaf": "قَالَ يَٰٓإِبۡلِيسُ مَا لَكَ أَلَّا تَكُونَ مَعَ ٱلسَّٰجِدِينَ "}, {"aya_id": 1835, "coordinates": [[82, 92, 70, 34], [116, 122, 293, 34]], "aya_moshaf": "قَالَ لَمۡ أَكُن لِّأَسۡجُدَ لِبَشَرٍ خَلَقۡتَهُۥ مِن صَلۡصَٰلٖ مِّنۡ حَمَإٖ مَّسۡنُونٖ "}, {"aya_id": 1836, "coordinates": [[116, 92, 30, 34], [151, 253, 162, 34]], "aya_moshaf": "قَالَ فَٱخۡرُجۡ مِنۡهَا فَإِنَّكَ رَجِيمٞ "}, {"aya_id": 1837, "coordinates": [[151, 92, 161, 34], [185, 362, 53, 34]], "aya_moshaf": "وَإِنَّ عَلَيۡكَ ٱللَّعۡنَةَ إِلَىٰ يَوۡمِ ٱلدِّينِ "}, {"aya_id": 1838, "coordinates": [[185, 157, 205, 34]], "aya_moshaf": "قَالَ رَبِّ فَأَنظِرۡنِيٓ إِلَىٰ يَوۡمِ يُبۡعَثُونَ "}, {"aya_id": 1839, "coordinates": [[185, 92, 65, 34], [219, 312, 103, 34]], "aya_moshaf": "قَالَ فَإِنَّكَ مِنَ ٱلۡمُنظَرِينَ "}, {"aya_id": 1840, "coordinates": [[219, 155, 157, 34]], "aya_moshaf": "إِلَىٰ يَوۡمِ ٱلۡوَقۡتِ ٱلۡمَعۡلُومِ "}, {"aya_id": 1841, "coordinates": [[219, 92, 63, 34], [254, 92, 322, 34]], "aya_moshaf": "قَالَ رَبِّ بِمَآ أَغۡوَيۡتَنِي لَأُزَيِّنَنَّ لَهُمۡ فِي ٱلۡأَرۡضِ وَلَأُغۡوِيَنَّهُمۡ أَجۡمَعِينَ "}, {"aya_id": 1842, "coordinates": [[288, 214, 201, 34]], "aya_moshaf": "إِلَّا عِبَادَكَ مِنۡهُمُ ٱلۡمُخۡلَصِينَ "}, {"aya_id": 1843, "coordinates": [[288, 92, 122, 34], [322, 331, 84, 34]], "aya_moshaf": "قَالَ هَٰذَا صِرَٰطٌ عَلَيَّ مُسۡتَقِيمٌ "}, {"aya_id": 1844, "coordinates": [[322, 92, 239, 34], [357, 276, 139, 34]], "aya_moshaf": "إِنَّ عِبَادِي لَيۡسَ لَكَ عَلَيۡهِمۡ سُلۡطَٰنٌ إِلَّا مَنِ ٱتَّبَعَكَ مِنَ ٱلۡغَاوِينَ "}, {"aya_id": 1845, "coordinates": [[357, 92, 184, 34]], "aya_moshaf": "وَإِنَّ جَهَنَّمَ لَمَوۡعِدُهُمۡ أَجۡمَعِينَ "}, {"aya_id": 1846, "coordinates": [[391, 138, 277, 34]], "aya_moshaf": "لَهَا سَبۡعَةُ أَبۡوَٰبٖ لِّكُلِّ بَابٖ مِّنۡهُمۡ جُزۡءٞ مَّقۡسُومٌ "}, {"aya_id": 1847, "coordinates": [[391, 92, 46, 34], [425, 246, 169, 34]], "aya_moshaf": "إِنَّ ٱلۡمُتَّقِينَ فِي جَنَّٰتٖ وَعُيُونٍ "}, {"aya_id": 1848, "coordinates": [[425, 92, 154, 34]], "aya_moshaf": "ٱدۡخُلُوهَا بِسَلَٰمٍ ءَامِنِينَ "}, {"aya_id": 1849, "coordinates": [[460, 92, 322, 34], [494, 391, 24, 34]], "aya_moshaf": "وَنَزَعۡنَا مَا فِي صُدُورِهِم مِّنۡ غِلٍّ إِخۡوَٰنًا عَلَىٰ سُرُرٖ مُّتَقَٰبِلِينَ "}, {"aya_id": 1850, "coordinates": [[494, 92, 299, 34]], "aya_moshaf": "لَا يَمَسُّهُمۡ فِيهَا نَصَبٞ وَمَا هُم مِّنۡهَا بِمُخۡرَجِينَ "}, {"aya_id": 1851, "coordinates": [[528, 173, 242, 34]], "aya_moshaf": "۞ نَبِّئۡ عِبَادِيٓ أَنِّيٓ أَنَا ٱلۡغَفُورُ ٱلرَّحِيمُ "}, {"aya_id": 1852, "coordinates": [[528, 92, 81, 34], [563, 275, 140, 34]], "aya_moshaf": "وَأَنَّ عَذَابِي هُوَ ٱلۡعَذَابُ ٱلۡأَلِيمُ "}, {"aya_id": 1853, "coordinates": [[563, 92, 183, 34]], "aya_moshaf": "وَنَبِّئۡهُمۡ عَن ضَيۡفِ إِبۡرَٰهِيمَ "}]