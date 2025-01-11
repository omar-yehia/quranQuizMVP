const mainSuraId = 69;
const nearbySurasNames = {
    68: 'القَلَم',
    69: 'الحَاقة',
    70: 'المَعَارج',
    71: 'نُوح',
};
const choicesObjects = {
    "566": "خاشعه ابصارهم ترهقهم ذله وقد",
    "567": "وجاء فرعون ومن قبله والمؤتفكات",
    "569": "يبصرونهم يود المجرم لو يفتدي",
    "570": "علي ان نبدل خيرا منهم",
};
const ayas = [{"aya_id": 5358, "coordinates": [[85, 278, 136, 34]], "aya_moshaf": "فَلَيۡسَ لَهُ ٱلۡيَوۡمَ هَٰهُنَا حَمِيمٞ "}, {"aya_id": 5359, "coordinates": [[85, 144, 134, 34]], "aya_moshaf": "وَلَا طَعَامٌ إِلَّا مِنۡ غِسۡلِينٖ "}, {"aya_id": 5360, "coordinates": [[85, 91, 53, 34], [119, 322, 92, 34]], "aya_moshaf": "لَّا يَأۡكُلُهُۥٓ إِلَّا ٱلۡخَٰطِـُٔونَ "}, {"aya_id": 5361, "coordinates": [[119, 195, 127, 34]], "aya_moshaf": "فَلَآ أُقۡسِمُ بِمَا تُبۡصِرُونَ "}, {"aya_id": 5362, "coordinates": [[119, 91, 104, 34]], "aya_moshaf": "وَمَا لَا تُبۡصِرُونَ "}, {"aya_id": 5363, "coordinates": [[154, 285, 129, 34]], "aya_moshaf": "إِنَّهُۥ لَقَوۡلُ رَسُولٖ كَرِيمٖ "}, {"aya_id": 5364, "coordinates": [[154, 91, 194, 34]], "aya_moshaf": "وَمَا هُوَ بِقَوۡلِ شَاعِرٖۚ قَلِيلٗا مَّا تُؤۡمِنُونَ "}, {"aya_id": 5365, "coordinates": [[188, 240, 174, 34]], "aya_moshaf": "وَلَا بِقَوۡلِ كَاهِنٖۚ قَلِيلٗا مَّا تَذَكَّرُونَ "}, {"aya_id": 5366, "coordinates": [[188, 116, 124, 34]], "aya_moshaf": "تَنزِيلٞ مِّن رَّبِّ ٱلۡعَٰلَمِينَ "}, {"aya_id": 5367, "coordinates": [[188, 91, 25, 34], [222, 265, 149, 34]], "aya_moshaf": "وَلَوۡ تَقَوَّلَ عَلَيۡنَا بَعۡضَ ٱلۡأَقَاوِيلِ "}, {"aya_id": 5368, "coordinates": [[222, 145, 120, 34]], "aya_moshaf": "لَأَخَذۡنَا مِنۡهُ بِٱلۡيَمِينِ "}, {"aya_id": 5369, "coordinates": [[222, 91, 54, 34], [257, 337, 77, 34]], "aya_moshaf": "ثُمَّ لَقَطَعۡنَا مِنۡهُ ٱلۡوَتِينَ "}, {"aya_id": 5370, "coordinates": [[257, 159, 178, 34]], "aya_moshaf": "فَمَا مِنكُم مِّنۡ أَحَدٍ عَنۡهُ حَٰجِزِينَ "}, {"aya_id": 5371, "coordinates": [[257, 91, 68, 34], [291, 344, 70, 34]], "aya_moshaf": "وَإِنَّهُۥ لَتَذۡكِرَةٞ لِّلۡمُتَّقِينَ "}, {"aya_id": 5372, "coordinates": [[291, 178, 166, 34]], "aya_moshaf": "وَإِنَّا لَنَعۡلَمُ أَنَّ مِنكُم مُّكَذِّبِينَ "}, {"aya_id": 5373, "coordinates": [[291, 91, 87, 34], [325, 341, 73, 34]], "aya_moshaf": "وَإِنَّهُۥ لَحَسۡرَةٌ عَلَى ٱلۡكَٰفِرِينَ "}, {"aya_id": 5374, "coordinates": [[325, 237, 104, 34]], "aya_moshaf": "وَإِنَّهُۥ لَحَقُّ ٱلۡيَقِينِ "}, {"aya_id": 5375, "coordinates": [[325, 91, 146, 34]], "aya_moshaf": "فَسَبِّحۡ بِٱسۡمِ رَبِّكَ ٱلۡعَظِيمِ "}, {"aya_id": 5376, "coordinates": [[428, 270, 144, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ سَأَلَ سَآئِلُۢ بِعَذَابٖ وَاقِعٖ "}, {"aya_id": 5377, "coordinates": [[428, 132, 138, 34]], "aya_moshaf": "لِّلۡكَٰفِرِينَ لَيۡسَ لَهُۥ دَافِعٞ "}, {"aya_id": 5378, "coordinates": [[428, 91, 41, 34], [463, 292, 122, 34]], "aya_moshaf": "مِّنَ ٱللَّهِ ذِي ٱلۡمَعَارِجِ "}, {"aya_id": 5379, "coordinates": [[463, 91, 201, 34], [497, 215, 199, 34]], "aya_moshaf": "تَعۡرُجُ ٱلۡمَلَٰٓئِكَةُ وَٱلرُّوحُ إِلَيۡهِ فِي يَوۡمٖ كَانَ مِقۡدَارُهُۥ خَمۡسِينَ أَلۡفَ سَنَةٖ "}, {"aya_id": 5380, "coordinates": [[497, 91, 124, 34]], "aya_moshaf": "فَٱصۡبِرۡ صَبۡرٗا جَمِيلًا "}, {"aya_id": 5381, "coordinates": [[531, 300, 114, 34]], "aya_moshaf": "إِنَّهُمۡ يَرَوۡنَهُۥ بَعِيدٗا "}, {"aya_id": 5382, "coordinates": [[531, 219, 81, 34]], "aya_moshaf": "وَنَرَىٰهُ قَرِيبٗا "}, {"aya_id": 5383, "coordinates": [[531, 91, 128, 34], [566, 387, 27, 34]], "aya_moshaf": "يَوۡمَ تَكُونُ ٱلسَّمَآءُ كَٱلۡمُهۡلِ "}, {"aya_id": 5384, "coordinates": [[566, 242, 145, 34]], "aya_moshaf": "وَتَكُونُ ٱلۡجِبَالُ كَٱلۡعِهۡنِ "}, {"aya_id": 5385, "coordinates": [[566, 91, 151, 34]], "aya_moshaf": "وَلَا يَسۡـَٔلُ حَمِيمٌ حَمِيمٗا "}]