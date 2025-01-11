const mainSuraId = 75;
const nearbySurasNames = {
    74: 'المُدثر',
    75: 'القِيَامة',
    76: 'الإنسَان',
    77: 'المُرسَلات',
};
const choicesObjects = {
    "576": "فقتل كيف قدر",
    "577": "فما تنفعهم شفاعه الشافعين",
    "579": "عينا يشرب بها عباد الله",
    "580": "ومن الليل فاسجد له وسبحه",
};
const ayas = [{"aya_id": 5571, "coordinates": [[85, 301, 114, 34]], "aya_moshaf": "كـَلَّا بَلۡ تُحِبُّونَ ٱلۡعَاجِلَةَ "}, {"aya_id": 5572, "coordinates": [[85, 207, 94, 34]], "aya_moshaf": "وَتَذَرُونَ ٱلۡأٓخِرَةَ "}, {"aya_id": 5573, "coordinates": [[85, 92, 115, 34]], "aya_moshaf": "وُجُوهٞ يَوۡمَئِذٖ نَّاضِرَةٌ "}, {"aya_id": 5574, "coordinates": [[119, 328, 87, 34]], "aya_moshaf": "إِلَىٰ رَبِّهَا نَاظِرَةٞ "}, {"aya_id": 5575, "coordinates": [[119, 216, 112, 34]], "aya_moshaf": "وَوُجُوهٞ يَوۡمَئِذِۭ بَاسِرَةٞ "}, {"aya_id": 5576, "coordinates": [[119, 92, 124, 34]], "aya_moshaf": "تَظُنُّ أَن يُفۡعَلَ بِهَا فَاقِرَةٞ "}, {"aya_id": 5577, "coordinates": [[154, 302, 113, 34]], "aya_moshaf": "كـَلَّآ إِذَا بَلَغَتِ ٱلتَّرَاقِيَ "}, {"aya_id": 5578, "coordinates": [[154, 226, 76, 34]], "aya_moshaf": "وَقِيلَ مَنۡۜ رَاقٖ "}, {"aya_id": 5579, "coordinates": [[154, 136, 90, 34]], "aya_moshaf": "وَظَنَّ أَنَّهُ ٱلۡفِرَاقُ "}, {"aya_id": 5580, "coordinates": [[154, 92, 44, 34], [188, 322, 93, 34]], "aya_moshaf": "وَٱلۡتَفَّتِ ٱلسَّاقُ بِٱلسَّاقِ "}, {"aya_id": 5581, "coordinates": [[188, 179, 143, 34]], "aya_moshaf": "إِلَىٰ رَبِّكَ يَوۡمَئِذٍ ٱلۡمَسَاقُ "}, {"aya_id": 5582, "coordinates": [[188, 92, 87, 34], [222, 394, 21, 34]], "aya_moshaf": "فَلَا صَدَّقَ وَلَا صَلَّىٰ "}, {"aya_id": 5583, "coordinates": [[222, 283, 111, 34]], "aya_moshaf": "وَلَٰكِن كَذَّبَ وَتَوَلَّىٰ "}, {"aya_id": 5584, "coordinates": [[222, 140, 143, 34]], "aya_moshaf": "ثُمَّ ذَهَبَ إِلَىٰٓ أَهۡلِهِۦ يَتَمَطَّىٰٓ "}, {"aya_id": 5585, "coordinates": [[222, 92, 48, 34], [257, 365, 50, 34]], "aya_moshaf": "أَوۡلَىٰ لَكَ فَأَوۡلَىٰ "}, {"aya_id": 5586, "coordinates": [[257, 260, 105, 34]], "aya_moshaf": "ثُمَّ أَوۡلَىٰ لَكَ فَأَوۡلَىٰٓ "}, {"aya_id": 5587, "coordinates": [[257, 92, 168, 34]], "aya_moshaf": "أَيَحۡسَبُ ٱلۡإِنسَٰنُ أَن يُتۡرَكَ سُدًى "}, {"aya_id": 5588, "coordinates": [[291, 275, 140, 34]], "aya_moshaf": "أَلَمۡ يَكُ نُطۡفَةٗ مِّن مَّنِيّٖ يُمۡنَىٰ "}, {"aya_id": 5589, "coordinates": [[291, 138, 137, 34]], "aya_moshaf": "ثُمَّ كَانَ عَلَقَةٗ فَخَلَقَ فَسَوَّىٰ "}, {"aya_id": 5590, "coordinates": [[291, 92, 46, 34], [325, 280, 135, 34]], "aya_moshaf": "فَجَعَلَ مِنۡهُ ٱلزَّوۡجَيۡنِ ٱلذَّكَرَ وَٱلۡأُنثَىٰٓ "}, {"aya_id": 5591, "coordinates": [[325, 92, 188, 34]], "aya_moshaf": "أَلَيۡسَ ذَٰلِكَ بِقَٰدِرٍ عَلَىٰٓ أَن يُحۡـِۧيَ ٱلۡمَوۡتَىٰ "}, {"aya_id": 5592, "coordinates": [[428, 92, 322, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ هَلۡ أَتَىٰ عَلَى ٱلۡإِنسَٰنِ حِينٞ مِّنَ ٱلدَّهۡرِ لَمۡ يَكُن شَيۡـٔٗا مَّذۡكُورًا "}, {"aya_id": 5593, "coordinates": [[463, 92, 322, 34], [497, 353, 62, 34]], "aya_moshaf": "إِنَّا خَلَقۡنَا ٱلۡإِنسَٰنَ مِن نُّطۡفَةٍ أَمۡشَاجٖ نَّبۡتَلِيهِ فَجَعَلۡنَٰهُ سَمِيعَۢا بَصِيرًا "}, {"aya_id": 5594, "coordinates": [[497, 92, 261, 34]], "aya_moshaf": "إِنَّا هَدَيۡنَٰهُ ٱلسَّبِيلَ إِمَّا شَاكِرٗا وَإِمَّا كَفُورًا "}, {"aya_id": 5595, "coordinates": [[531, 118, 297, 34]], "aya_moshaf": "إِنَّآ أَعۡتَدۡنَا لِلۡكَٰفِرِينَ سَلَٰسِلَاْ وَأَغۡلَٰلٗا وَسَعِيرًا "}, {"aya_id": 5596, "coordinates": [[531, 92, 26, 34], [566, 92, 322, 34]], "aya_moshaf": "إِنَّ ٱلۡأَبۡرَارَ يَشۡرَبُونَ مِن كَأۡسٖ كَانَ مِزَاجُهَا كَافُورًا "}]