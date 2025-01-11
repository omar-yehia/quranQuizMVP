const mainSuraId = 15;
const nearbySurasNames = {
    14: 'إبراهِيم',
    15: 'الحِجر',
    16: 'النَّحل',
    17: 'الإسرَاء',
};
const choicesObjects = {
    "263": "ولقد جعلنا في السماء بروجا",
    "264": "قال ياابليس ما لك الا",
    "266": "قال هؤلاء بناتي ان كنتم",
    "267": "الذين جعلوا القران عضين",
};
const ayas = [{"aya_id": 1854, "coordinates": [[87, 89, 283, 34]], "aya_moshaf": "إِذۡ دَخَلُواْ عَلَيۡهِ فَقَالُواْ سَلَٰمٗا قَالَ إِنَّا مِنكُمۡ وَجِلُونَ "}, {"aya_id": 1855, "coordinates": [[87, 49, 40, 34], [121, 178, 194, 34]], "aya_moshaf": "قَالُواْ لَا تَوۡجَلۡ إِنَّا نُبَشِّرُكَ بِغُلَٰمٍ عَلِيمٖ "}, {"aya_id": 1856, "coordinates": [[121, 49, 129, 34], [156, 179, 193, 34]], "aya_moshaf": "قَالَ أَبَشَّرۡتُمُونِي عَلَىٰٓ أَن مَّسَّنِيَ ٱلۡكِبَرُ فَبِمَ تُبَشِّرُونَ "}, {"aya_id": 1857, "coordinates": [[156, 49, 130, 34], [190, 212, 160, 34]], "aya_moshaf": "قَالُواْ بَشَّرۡنَٰكَ بِٱلۡحَقِّ فَلَا تَكُن مِّنَ ٱلۡقَٰنِطِينَ "}, {"aya_id": 1858, "coordinates": [[190, 49, 163, 34], [224, 234, 138, 34]], "aya_moshaf": "قَالَ وَمَن يَقۡنَطُ مِن رَّحۡمَةِ رَبِّهِۦٓ إِلَّا ٱلضَّآلُّونَ "}, {"aya_id": 1859, "coordinates": [[224, 49, 185, 34], [259, 352, 20, 34]], "aya_moshaf": "قَالَ فَمَا خَطۡبُكُمۡ أَيُّهَا ٱلۡمُرۡسَلُونَ "}, {"aya_id": 1860, "coordinates": [[259, 132, 220, 34]], "aya_moshaf": "قَالُوٓاْ إِنَّآ أُرۡسِلۡنَآ إِلَىٰ قَوۡمٖ مُّجۡرِمِينَ "}, {"aya_id": 1861, "coordinates": [[259, 49, 83, 34], [293, 207, 165, 34]], "aya_moshaf": "إِلَّآ ءَالَ لُوطٍ إِنَّا لَمُنَجُّوهُمۡ أَجۡمَعِينَ "}, {"aya_id": 1862, "coordinates": [[293, 49, 158, 34], [327, 275, 97, 34]], "aya_moshaf": "إِلَّا ٱمۡرَأَتَهُۥ قَدَّرۡنَآ إِنَّهَا لَمِنَ ٱلۡغَٰبِرِينَ "}, {"aya_id": 1863, "coordinates": [[327, 86, 189, 34]], "aya_moshaf": "فَلَمَّا جَآءَ ءَالَ لُوطٍ ٱلۡمُرۡسَلُونَ "}, {"aya_id": 1864, "coordinates": [[327, 49, 37, 34], [362, 224, 148, 34]], "aya_moshaf": "قَالَ إِنَّكُمۡ قَوۡمٞ مُّنكَرُونَ "}, {"aya_id": 1865, "coordinates": [[362, 49, 175, 34], [396, 294, 78, 34]], "aya_moshaf": "قَالُواْ بَلۡ جِئۡنَٰكَ بِمَا كَانُواْ فِيهِ يَمۡتَرُونَ "}, {"aya_id": 1866, "coordinates": [[396, 93, 201, 34]], "aya_moshaf": "وَأَتَيۡنَٰكَ بِٱلۡحَقِّ وَإِنَّا لَصَٰدِقُونَ "}, {"aya_id": 1867, "coordinates": [[396, 49, 44, 34], [430, 49, 322, 34], [465, 221, 151, 34]], "aya_moshaf": "فَأَسۡرِ بِأَهۡلِكَ بِقِطۡعٖ مِّنَ ٱلَّيۡلِ وَٱتَّبِعۡ أَدۡبَٰرَهُمۡ وَلَا يَلۡتَفِتۡ مِنكُمۡ أَحَدٞ وَٱمۡضُواْ حَيۡثُ تُؤۡمَرُونَ "}, {"aya_id": 1868, "coordinates": [[465, 49, 172, 34], [499, 185, 187, 34]], "aya_moshaf": "وَقَضَيۡنَآ إِلَيۡهِ ذَٰلِكَ ٱلۡأَمۡرَ أَنَّ دَابِرَ هَٰٓؤُلَآءِ مَقۡطُوعٞ مُّصۡبِحِينَ "}, {"aya_id": 1869, "coordinates": [[499, 49, 136, 34], [533, 294, 78, 34]], "aya_moshaf": "وَجَآءَ أَهۡلُ ٱلۡمَدِينَةِ يَسۡتَبۡشِرُونَ "}, {"aya_id": 1870, "coordinates": [[533, 89, 205, 34]], "aya_moshaf": "قَالَ إِنَّ هَٰٓؤُلَآءِ ضَيۡفِي فَلَا تَفۡضَحُونِ "}, {"aya_id": 1871, "coordinates": [[533, 49, 40, 34], [568, 269, 103, 34]], "aya_moshaf": "وَٱتَّقُواْ ٱللَّهَ وَلَا تُخۡزُونِ "}, {"aya_id": 1872, "coordinates": [[568, 49, 220, 34]], "aya_moshaf": "قَالُوٓاْ أَوَلَمۡ نَنۡهَكَ عَنِ ٱلۡعَٰلَمِينَ "}]