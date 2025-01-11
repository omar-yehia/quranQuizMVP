const mainSuraId = 3;
const nearbySurasNames = {
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
    5: 'المَائدة',
};
const choicesObjects = {
    "59": "يااهل الكتاب لم تلبسون الحق",
    "60": "وان منهم لفريقا يلوون السنتهم",
    "62": "لن تنالوا البر حتي تنفقوا",
    "63": "وكيف تكفرون وانتم تتلي عليكم",
};
const ayas = [{"aya_id": 377, "coordinates": [[84, 49, 322, 34], [118, 49, 322, 34], [153, 49, 322, 34], [187, 186, 186, 34]], "aya_moshaf": "قُلۡ ءَامَنَّا بِٱللَّهِ وَمَآ أُنزِلَ عَلَيۡنَا وَمَآ أُنزِلَ عَلَىٰٓ إِبۡرَٰهِيمَ وَإِسۡمَٰعِيلَ وَإِسۡحَٰقَ وَيَعۡقُوبَ وَٱلۡأَسۡبَاطِ وَمَآ أُوتِيَ مُوسَىٰ وَعِيسَىٰ وَٱلنَّبِيُّونَ مِن رَّبِّهِمۡ لَا نُفَرِّقُ بَيۡنَ أَحَدٖ مِّنۡهُمۡ وَنَحۡنُ لَهُۥ مُسۡلِمُونَ "}, {"aya_id": 378, "coordinates": [[187, 49, 137, 34], [221, 49, 322, 34]], "aya_moshaf": "وَمَن يَبۡتَغِ غَيۡرَ ٱلۡإِسۡلَٰمِ دِينٗا فَلَن يُقۡبَلَ مِنۡهُ وَهُوَ فِي ٱلۡأٓخِرَةِ مِنَ ٱلۡخَٰسِرِينَ "}, {"aya_id": 379, "coordinates": [[256, 49, 322, 34], [290, 49, 322, 34], [324, 288, 84, 34]], "aya_moshaf": "كَيۡفَ يَهۡدِي ٱللَّهُ قَوۡمٗا كَفَرُواْ بَعۡدَ إِيمَٰنِهِمۡ وَشَهِدُوٓاْ أَنَّ ٱلرَّسُولَ حَقّٞ وَجَآءَهُمُ ٱلۡبَيِّنَٰتُۚ وَٱللَّهُ لَا يَهۡدِي ٱلۡقَوۡمَ ٱلظَّٰلِمِينَ "}, {"aya_id": 380, "coordinates": [[324, 49, 239, 34], [359, 180, 192, 34]], "aya_moshaf": "أُوْلَٰٓئِكَ جَزَآؤُهُمۡ أَنَّ عَلَيۡهِمۡ لَعۡنَةَ ٱللَّهِ وَٱلۡمَلَٰٓئِكَةِ وَٱلنَّاسِ أَجۡمَعِينَ "}, {"aya_id": 381, "coordinates": [[359, 49, 131, 34], [393, 160, 212, 34]], "aya_moshaf": "خَٰلِدِينَ فِيهَا لَا يُخَفَّفُ عَنۡهُمُ ٱلۡعَذَابُ وَلَا هُمۡ يُنظَرُونَ "}, {"aya_id": 382, "coordinates": [[393, 49, 111, 34], [427, 107, 265, 34]], "aya_moshaf": "إِلَّا ٱلَّذِينَ تَابُواْ مِنۢ بَعۡدِ ذَٰلِكَ وَأَصۡلَحُواْ فَإِنَّ ٱللَّهَ غَفُورٞ رَّحِيمٌ "}, {"aya_id": 383, "coordinates": [[427, 49, 58, 34], [462, 49, 322, 34], [496, 206, 166, 34]], "aya_moshaf": "إِنَّ ٱلَّذِينَ كَفَرُواْ بَعۡدَ إِيمَٰنِهِمۡ ثُمَّ ٱزۡدَادُواْ كُفۡرٗا لَّن تُقۡبَلَ تَوۡبَتُهُمۡ وَأُوْلَٰٓئِكَ هُمُ ٱلضَّآلُّونَ "}, {"aya_id": 384, "coordinates": [[496, 49, 157, 34], [530, 49, 322, 34], [565, 49, 322, 34]], "aya_moshaf": "إِنَّ ٱلَّذِينَ كَفَرُواْ وَمَاتُواْ وَهُمۡ كُفَّارٞ فَلَن يُقۡبَلَ مِنۡ أَحَدِهِم مِّلۡءُ ٱلۡأَرۡضِ ذَهَبٗا وَلَوِ ٱفۡتَدَىٰ بِهِۦٓۗ أُوْلَٰٓئِكَ لَهُمۡ عَذَابٌ أَلِيمٞ وَمَا لَهُم مِّن نَّٰصِرِينَ "}]