const mainSuraId = 38;
const nearbySurasNames = {
    37: 'الصَّافَات',
    38: 'صٓ',
    39: 'الزُّمَر',
    40: 'غَافِر',
};
const choicesObjects = {
    "452": "ما لكم كيف تحكمون",
    "453": "ص والقران ذي الذكر",
    "455": "وما خلقنا السماء والارض وما",
    "456": "ووهبنا له اهله ومثلهم معهم",
};
const ayas = [{"aya_id": 3987, "coordinates": [[80, 94, 322, 34]], "aya_moshaf": "ٱصۡبِرۡ عَلَىٰ مَا يَقُولُونَ وَٱذۡكُرۡ عَبۡدَنَا دَاوُۥدَ ذَا ٱلۡأَيۡدِۖ إِنَّهُۥٓ أَوَّابٌ "}, {"aya_id": 3988, "coordinates": [[114, 140, 277, 34]], "aya_moshaf": "إِنَّا سَخَّرۡنَا ٱلۡجِبَالَ مَعَهُۥ يُسَبِّحۡنَ بِٱلۡعَشِيِّ وَٱلۡإِشۡرَاقِ "}, {"aya_id": 3989, "coordinates": [[114, 94, 46, 34], [149, 286, 131, 34]], "aya_moshaf": "وَٱلطَّيۡرَ مَحۡشُورَةٗۖ كُلّٞ لَّهُۥٓ أَوَّابٞ "}, {"aya_id": 3990, "coordinates": [[149, 94, 192, 34], [183, 311, 106, 34]], "aya_moshaf": "وَشَدَدۡنَا مُلۡكَهُۥ وَءَاتَيۡنَٰهُ ٱلۡحِكۡمَةَ وَفَصۡلَ ٱلۡخِطَابِ "}, {"aya_id": 3991, "coordinates": [[183, 94, 217, 34], [217, 340, 77, 34]], "aya_moshaf": "۞ وَهَلۡ أَتَىٰكَ نَبَؤُاْ ٱلۡخَصۡمِ إِذۡ تَسَوَّرُواْ ٱلۡمِحۡرَابَ "}, {"aya_id": 3992, "coordinates": [[217, 94, 246, 34], [252, 94, 322, 34], [286, 267, 150, 34]], "aya_moshaf": "إِذۡ دَخَلُواْ عَلَىٰ دَاوُۥدَ فَفَزِعَ مِنۡهُمۡۖ قَالُواْ لَا تَخَفۡۖ خَصۡمَانِ بَغَىٰ بَعۡضُنَا عَلَىٰ بَعۡضٖ فَٱحۡكُم بَيۡنَنَا بِٱلۡحَقِّ وَلَا تُشۡطِطۡ وَٱهۡدِنَآ إِلَىٰ سَوَآءِ ٱلصِّرَٰطِ "}, {"aya_id": 3993, "coordinates": [[286, 94, 173, 34], [320, 125, 292, 34]], "aya_moshaf": "إِنَّ هَٰذَآ أَخِي لَهُۥ تِسۡعٞ وَتِسۡعُونَ نَعۡجَةٗ وَلِيَ نَعۡجَةٞ وَٰحِدَةٞ فَقَالَ أَكۡفِلۡنِيهَا وَعَزَّنِي فِي ٱلۡخِطَابِ "}, {"aya_id": 3994, "coordinates": [[320, 94, 31, 34], [355, 94, 322, 34], [389, 94, 322, 34], [423, 94, 322, 34], [458, 373, 44, 34]], "aya_moshaf": "قَالَ لَقَدۡ ظَلَمَكَ بِسُؤَالِ نَعۡجَتِكَ إِلَىٰ نِعَاجِهِۦۖ وَإِنَّ كَثِيرٗا مِّنَ ٱلۡخُلَطَآءِ لَيَبۡغِي بَعۡضُهُمۡ عَلَىٰ بَعۡضٍ إِلَّا ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ وَقَلِيلٞ مَّا هُمۡۗ وَظَنَّ دَاوُۥدُ أَنَّمَا فَتَنَّٰهُ فَٱسۡتَغۡفَرَ رَبَّهُۥ وَخَرَّۤ رَاكِعٗاۤ وَأَنَابَ۩ "}, {"aya_id": 3995, "coordinates": [[458, 94, 279, 34], [492, 394, 23, 34]], "aya_moshaf": "فَغَفَرۡنَا لَهُۥ ذَٰلِكَۖ وَإِنَّ لَهُۥ عِندَنَا لَزُلۡفَىٰ وَحُسۡنَ مَـَٔابٖ "}, {"aya_id": 3996, "coordinates": [[492, 94, 300, 34], [526, 94, 322, 34], [561, 94, 322, 34]], "aya_moshaf": "يَٰدَاوُۥدُ إِنَّا جَعَلۡنَٰكَ خَلِيفَةٗ فِي ٱلۡأَرۡضِ فَٱحۡكُم بَيۡنَ ٱلنَّاسِ بِٱلۡحَقِّ وَلَا تَتَّبِعِ ٱلۡهَوَىٰ فَيُضِلَّكَ عَن سَبِيلِ ٱللَّهِۚ إِنَّ ٱلَّذِينَ يَضِلُّونَ عَن سَبِيلِ ٱللَّهِ لَهُمۡ عَذَابٞ شَدِيدُۢ بِمَا نَسُواْ يَوۡمَ ٱلۡحِسَابِ "}]