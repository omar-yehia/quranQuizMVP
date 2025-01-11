const mainSuraId = 2;
const nearbySurasNames = {
    1: 'الفَاتِحة',
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
};
const choicesObjects = {
    "6": "واذ قال ربك للملائكه اني",
    "7": "قلنا اهبطوا منها جميعا فاما",
    "9": "واذ قلنا ادخلوا هذه القريه",
    "10": "ان الذين امنوا والذين هادوا",
};
const ayas = [{"aya_id": 56, "coordinates": [[80, 85, 322, 34], [114, 85, 322, 34], [149, 293, 115, 34]], "aya_moshaf": "وَإِذۡ نَجَّيۡنَٰكُم مِّنۡ ءَالِ فِرۡعَوۡنَ يَسُومُونَكُمۡ سُوٓءَ ٱلۡعَذَابِ يُذَبِّحُونَ أَبۡنَآءَكُمۡ وَيَسۡتَحۡيُونَ نِسَآءَكُمۡۚ وَفِي ذَٰلِكُم بَلَآءٞ مِّن رَّبِّكُمۡ عَظِيمٞ "}, {"aya_id": 57, "coordinates": [[149, 85, 208, 34], [183, 185, 223, 34]], "aya_moshaf": "وَإِذۡ فَرَقۡنَا بِكُمُ ٱلۡبَحۡرَ فَأَنجَيۡنَٰكُمۡ وَأَغۡرَقۡنَآ ءَالَ فِرۡعَوۡنَ وَأَنتُمۡ تَنظُرُونَ "}, {"aya_id": 58, "coordinates": [[183, 85, 100, 34], [217, 85, 322, 34], [252, 387, 21, 34]], "aya_moshaf": "وَإِذۡ وَٰعَدۡنَا مُوسَىٰٓ أَرۡبَعِينَ لَيۡلَةٗ ثُمَّ ٱتَّخَذۡتُمُ ٱلۡعِجۡلَ مِنۢ بَعۡدِهِۦ وَأَنتُمۡ ظَٰلِمُونَ "}, {"aya_id": 59, "coordinates": [[252, 85, 302, 34]], "aya_moshaf": "ثُمَّ عَفَوۡنَا عَنكُم مِّنۢ بَعۡدِ ذَٰلِكَ لَعَلَّكُمۡ تَشۡكُرُونَ "}, {"aya_id": 60, "coordinates": [[286, 85, 322, 34]], "aya_moshaf": "وَإِذۡ ءَاتَيۡنَا مُوسَى ٱلۡكِتَٰبَ وَٱلۡفُرۡقَانَ لَعَلَّكُمۡ تَهۡتَدُونَ "}, {"aya_id": 61, "coordinates": [[320, 85, 322, 34], [355, 85, 322, 34], [389, 85, 322, 34], [423, 384, 24, 34]], "aya_moshaf": "وَإِذۡ قَالَ مُوسَىٰ لِقَوۡمِهِۦ يَٰقَوۡمِ إِنَّكُمۡ ظَلَمۡتُمۡ أَنفُسَكُم بِٱتِّخَاذِكُمُ ٱلۡعِجۡلَ فَتُوبُوٓاْ إِلَىٰ بَارِئِكُمۡ فَٱقۡتُلُوٓاْ أَنفُسَكُمۡ ذَٰلِكُمۡ خَيۡرٞ لَّكُمۡ عِندَ بَارِئِكُمۡ فَتَابَ عَلَيۡكُمۡۚ إِنَّهُۥ هُوَ ٱلتَّوَّابُ ٱلرَّحِيمُ "}, {"aya_id": 62, "coordinates": [[423, 85, 299, 34], [458, 185, 223, 34]], "aya_moshaf": "وَإِذۡ قُلۡتُمۡ يَٰمُوسَىٰ لَن نُّؤۡمِنَ لَكَ حَتَّىٰ نَرَى ٱللَّهَ جَهۡرَةٗ فَأَخَذَتۡكُمُ ٱلصَّٰعِقَةُ وَأَنتُمۡ تَنظُرُونَ "}, {"aya_id": 63, "coordinates": [[458, 85, 100, 34], [492, 199, 209, 34]], "aya_moshaf": "ثُمَّ بَعَثۡنَٰكُم مِّنۢ بَعۡدِ مَوۡتِكُمۡ لَعَلَّكُمۡ تَشۡكُرُونَ "}, {"aya_id": 64, "coordinates": [[492, 85, 114, 34], [526, 85, 322, 34], [561, 88, 320, 34]], "aya_moshaf": "وَظَلَّلۡنَا عَلَيۡكُمُ ٱلۡغَمَامَ وَأَنزَلۡنَا عَلَيۡكُمُ ٱلۡمَنَّ وَٱلسَّلۡوَىٰۖ كُلُواْ مِن طَيِّبَٰتِ مَا رَزَقۡنَٰكُمۡۚ وَمَا ظَلَمُونَا وَلَٰكِن كَانُوٓاْ أَنفُسَهُمۡ يَظۡلِمُونَ "}]