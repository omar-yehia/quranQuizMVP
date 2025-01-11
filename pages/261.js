const mainSuraId = 14;
const nearbySurasNames = {
    13: 'الرَّعد',
    14: 'إبراهِيم',
    15: 'الحِجر',
    16: 'النَّحل',
};
const choicesObjects = {
    "259": "تؤتي اكلها كل حين باذن",
    "260": "واتاكم من كل ما سالتموه",
    "262": "الر تلك ايات الكتاب وقران",
    "263": "ولقد جعلنا في السماء بروجا",
};
const ayas = [{"aya_id": 1793, "coordinates": [[92, 48, 322, 34], [126, 318, 53, 34]], "aya_moshaf": "مُهۡطِعِينَ مُقۡنِعِي رُءُوسِهِمۡ لَا يَرۡتَدُّ إِلَيۡهِمۡ طَرۡفُهُمۡۖ وَأَفۡـِٔدَتُهُمۡ هَوَآءٞ "}, {"aya_id": 1794, "coordinates": [[126, 48, 270, 34], [161, 48, 322, 34], [195, 48, 322, 34], [229, 292, 79, 34]], "aya_moshaf": "وَأَنذِرِ ٱلنَّاسَ يَوۡمَ يَأۡتِيهِمُ ٱلۡعَذَابُ فَيَقُولُ ٱلَّذِينَ ظَلَمُواْ رَبَّنَآ أَخِّرۡنَآ إِلَىٰٓ أَجَلٖ قَرِيبٖ نُّجِبۡ دَعۡوَتَكَ وَنَتَّبِعِ ٱلرُّسُلَۗ أَوَلَمۡ تَكُونُوٓاْ أَقۡسَمۡتُم مِّن قَبۡلُ مَا لَكُم مِّن زَوَالٖ "}, {"aya_id": 1795, "coordinates": [[229, 48, 244, 34], [264, 48, 322, 34], [298, 258, 113, 34]], "aya_moshaf": "وَسَكَنتُمۡ فِي مَسَٰكِنِ ٱلَّذِينَ ظَلَمُوٓاْ أَنفُسَهُمۡ وَتَبَيَّنَ لَكُمۡ كَيۡفَ فَعَلۡنَا بِهِمۡ وَضَرَبۡنَا لَكُمُ ٱلۡأَمۡثَالَ "}, {"aya_id": 1796, "coordinates": [[298, 48, 210, 34], [332, 48, 322, 34], [367, 344, 27, 34]], "aya_moshaf": "وَقَدۡ مَكَرُواْ مَكۡرَهُمۡ وَعِندَ ٱللَّهِ مَكۡرُهُمۡ وَإِن كَانَ مَكۡرُهُمۡ لِتَزُولَ مِنۡهُ ٱلۡجِبَالُ "}, {"aya_id": 1797, "coordinates": [[367, 48, 296, 34], [401, 285, 86, 34]], "aya_moshaf": "فَلَا تَحۡسَبَنَّ ٱللَّهَ مُخۡلِفَ وَعۡدِهِۦ رُسُلَهُۥٓۚ إِنَّ ٱللَّهَ عَزِيزٞ ذُو ٱنتِقَامٖ "}, {"aya_id": 1798, "coordinates": [[401, 48, 237, 34], [435, 203, 168, 34]], "aya_moshaf": "يَوۡمَ تُبَدَّلُ ٱلۡأَرۡضُ غَيۡرَ ٱلۡأَرۡضِ وَٱلسَّمَٰوَٰتُۖ وَبَرَزُواْ لِلَّهِ ٱلۡوَٰحِدِ ٱلۡقَهَّارِ "}, {"aya_id": 1799, "coordinates": [[435, 48, 155, 34], [470, 223, 148, 34]], "aya_moshaf": "وَتَرَى ٱلۡمُجۡرِمِينَ يَوۡمَئِذٖ مُّقَرَّنِينَ فِي ٱلۡأَصۡفَادِ "}, {"aya_id": 1800, "coordinates": [[470, 48, 175, 34], [504, 244, 127, 34]], "aya_moshaf": "سَرَابِيلُهُم مِّن قَطِرَانٖ وَتَغۡشَىٰ وُجُوهَهُمُ ٱلنَّارُ "}, {"aya_id": 1801, "coordinates": [[504, 48, 196, 34], [538, 200, 171, 34]], "aya_moshaf": "لِيَجۡزِيَ ٱللَّهُ كُلَّ نَفۡسٖ مَّا كَسَبَتۡۚ إِنَّ ٱللَّهَ سَرِيعُ ٱلۡحِسَابِ "}, {"aya_id": 1802, "coordinates": [[538, 48, 152, 34], [573, 48, 322, 34]], "aya_moshaf": "هَٰذَا بَلَٰغٞ لِّلنَّاسِ وَلِيُنذَرُواْ بِهِۦ وَلِيَعۡلَمُوٓاْ أَنَّمَا هُوَ إِلَٰهٞ وَٰحِدٞ وَلِيَذَّكَّرَ أُوْلُواْ ٱلۡأَلۡبَٰبِ "}]