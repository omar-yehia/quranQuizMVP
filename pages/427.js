const mainSuraId = 33;
const nearbySurasNames = {
    32: 'السَّجدة',
    33: 'الأحزَاب',
    34: 'سَبإ',
    35: 'فَاطِر',
};
const choicesObjects = {
    "425": "ترجي من تشاء منهن وتؤوي",
    "426": "لا جناح عليهن في ابائهن",
    "428": "الحمد لله الذي له ما",
    "429": "افتري علي الله كذبا ام",
};
const ayas = [{"aya_id": 3596, "coordinates": [[87, 49, 322, 34], [121, 199, 173, 34]], "aya_moshaf": "يَسۡـَٔلُكَ ٱلنَّاسُ عَنِ ٱلسَّاعَةِۖ قُلۡ إِنَّمَا عِلۡمُهَا عِندَ ٱللَّهِۚ وَمَا يُدۡرِيكَ لَعَلَّ ٱلسَّاعَةَ تَكُونُ قَرِيبًا "}, {"aya_id": 3597, "coordinates": [[121, 49, 150, 34], [156, 289, 83, 34]], "aya_moshaf": "إِنَّ ٱللَّهَ لَعَنَ ٱلۡكَٰفِرِينَ وَأَعَدَّ لَهُمۡ سَعِيرًا "}, {"aya_id": 3598, "coordinates": [[156, 49, 240, 34], [190, 344, 28, 34]], "aya_moshaf": "خَٰلِدِينَ فِيهَآ أَبَدٗاۖ لَّا يَجِدُونَ وَلِيّٗا وَلَا نَصِيرٗا "}, {"aya_id": 3599, "coordinates": [[190, 49, 295, 34], [224, 256, 116, 34]], "aya_moshaf": "يَوۡمَ تُقَلَّبُ وُجُوهُهُمۡ فِي ٱلنَّارِ يَقُولُونَ يَٰلَيۡتَنَآ أَطَعۡنَا ٱللَّهَ وَأَطَعۡنَا ٱلرَّسُولَا۠ "}, {"aya_id": 3600, "coordinates": [[224, 49, 207, 34], [259, 242, 130, 34]], "aya_moshaf": "وَقَالُواْ رَبَّنَآ إِنَّآ أَطَعۡنَا سَادَتَنَا وَكُبَرَآءَنَا فَأَضَلُّونَا ٱلسَّبِيلَا۠ "}, {"aya_id": 3601, "coordinates": [[259, 49, 193, 34], [293, 246, 126, 34]], "aya_moshaf": "رَبَّنَآ ءَاتِهِمۡ ضِعۡفَيۡنِ مِنَ ٱلۡعَذَابِ وَٱلۡعَنۡهُمۡ لَعۡنٗا كَبِيرٗا "}, {"aya_id": 3602, "coordinates": [[293, 49, 197, 34], [327, 49, 322, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَا تَكُونُواْ كَٱلَّذِينَ ءَاذَوۡاْ مُوسَىٰ فَبَرَّأَهُ ٱللَّهُ مِمَّا قَالُواْۚ وَكَانَ عِندَ ٱللَّهِ وَجِيهٗا "}, {"aya_id": 3603, "coordinates": [[362, 88, 284, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ ٱتَّقُواْ ٱللَّهَ وَقُولُواْ قَوۡلٗا سَدِيدٗا "}, {"aya_id": 3604, "coordinates": [[362, 49, 39, 34], [396, 49, 322, 34], [430, 235, 137, 34]], "aya_moshaf": "يُصۡلِحۡ لَكُمۡ أَعۡمَٰلَكُمۡ وَيَغۡفِرۡ لَكُمۡ ذُنُوبَكُمۡۗ وَمَن يُطِعِ ٱللَّهَ وَرَسُولَهُۥ فَقَدۡ فَازَ فَوۡزًا عَظِيمًا "}, {"aya_id": 3605, "coordinates": [[430, 49, 186, 34], [465, 49, 322, 34], [499, 179, 193, 34]], "aya_moshaf": "إِنَّا عَرَضۡنَا ٱلۡأَمَانَةَ عَلَى ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَٱلۡجِبَالِ فَأَبَيۡنَ أَن يَحۡمِلۡنَهَا وَأَشۡفَقۡنَ مِنۡهَا وَحَمَلَهَا ٱلۡإِنسَٰنُۖ إِنَّهُۥ كَانَ ظَلُومٗا جَهُولٗا "}, {"aya_id": 3606, "coordinates": [[499, 49, 130, 34], [533, 49, 322, 34], [568, 49, 322, 34]], "aya_moshaf": "لِّيُعَذِّبَ ٱللَّهُ ٱلۡمُنَٰفِقِينَ وَٱلۡمُنَٰفِقَٰتِ وَٱلۡمُشۡرِكِينَ وَٱلۡمُشۡرِكَٰتِ وَيَتُوبَ ٱللَّهُ عَلَى ٱلۡمُؤۡمِنِينَ وَٱلۡمُؤۡمِنَٰتِۗ وَكَانَ ٱللَّهُ غَفُورٗا رَّحِيمَۢا "}]