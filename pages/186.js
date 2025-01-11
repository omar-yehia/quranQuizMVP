const mainSuraId = 8;
const nearbySurasNames = {
    7: 'الأعرَاف',
    8: 'الأنفَال',
    9: 'التوبَة',
    10: 'يُونس',
};
const choicesObjects = {
    "184": "ذلك بان الله لم يك",
    "185": "وان يريدوا ان يخدعوك فان",
    "187": "براءه من الله ورسوله الي",
    "188": "كيف يكون للمشركين عهد عند",
};
const ayas = [{"aya_id": 1230, "coordinates": [[82, 91, 322, 34], [116, 91, 322, 34], [151, 289, 125, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلنَّبِيُّ قُل لِّمَن فِيٓ أَيۡدِيكُم مِّنَ ٱلۡأَسۡرَىٰٓ إِن يَعۡلَمِ ٱللَّهُ فِي قُلُوبِكُمۡ خَيۡرٗا يُؤۡتِكُمۡ خَيۡرٗا مِّمَّآ أُخِذَ مِنكُمۡ وَيَغۡفِرۡ لَكُمۡۚ وَٱللَّهُ غَفُورٞ رَّحِيمٞ "}, {"aya_id": 1231, "coordinates": [[151, 91, 198, 34], [185, 152, 262, 34]], "aya_moshaf": "وَإِن يُرِيدُواْ خِيَانَتَكَ فَقَدۡ خَانُواْ ٱللَّهَ مِن قَبۡلُ فَأَمۡكَنَ مِنۡهُمۡۗ وَٱللَّهُ عَلِيمٌ حَكِيمٌ "}, {"aya_id": 1232, "coordinates": [[185, 91, 61, 34], [219, 91, 322, 34], [254, 91, 322, 34], [288, 91, 322, 34], [322, 91, 322, 34], [357, 137, 277, 34]], "aya_moshaf": "إِنَّ ٱلَّذِينَ ءَامَنُواْ وَهَاجَرُواْ وَجَٰهَدُواْ بِأَمۡوَٰلِهِمۡ وَأَنفُسِهِمۡ فِي سَبِيلِ ٱللَّهِ وَٱلَّذِينَ ءَاوَواْ وَّنَصَرُوٓاْ أُوْلَٰٓئِكَ بَعۡضُهُمۡ أَوۡلِيَآءُ بَعۡضٖۚ وَٱلَّذِينَ ءَامَنُواْ وَلَمۡ يُهَاجِرُواْ مَا لَكُم مِّن وَلَٰيَتِهِم مِّن شَيۡءٍ حَتَّىٰ يُهَاجِرُواْۚ وَإِنِ ٱسۡتَنصَرُوكُمۡ فِي ٱلدِّينِ فَعَلَيۡكُمُ ٱلنَّصۡرُ إِلَّا عَلَىٰ قَوۡمِۭ بَيۡنَكُمۡ وَبَيۡنَهُم مِّيثَٰقٞۗ وَٱللَّهُ بِمَا تَعۡمَلُونَ بَصِيرٞ "}, {"aya_id": 1233, "coordinates": [[357, 91, 46, 34], [391, 91, 322, 34], [425, 247, 167, 34]], "aya_moshaf": "وَٱلَّذِينَ كَفَرُواْ بَعۡضُهُمۡ أَوۡلِيَآءُ بَعۡضٍۚ إِلَّا تَفۡعَلُوهُ تَكُن فِتۡنَةٞ فِي ٱلۡأَرۡضِ وَفَسَادٞ كَبِيرٞ "}, {"aya_id": 1234, "coordinates": [[425, 91, 156, 34], [460, 91, 322, 34], [494, 197, 217, 34]], "aya_moshaf": "وَٱلَّذِينَ ءَامَنُواْ وَهَاجَرُواْ وَجَٰهَدُواْ فِي سَبِيلِ ٱللَّهِ وَٱلَّذِينَ ءَاوَواْ وَّنَصَرُوٓاْ أُوْلَٰٓئِكَ هُمُ ٱلۡمُؤۡمِنُونَ حَقّٗاۚ لَّهُم مَّغۡفِرَةٞ وَرِزۡقٞ كَرِيمٞ "}, {"aya_id": 1235, "coordinates": [[494, 91, 106, 34], [528, 91, 322, 34], [563, 91, 322, 34]], "aya_moshaf": "وَٱلَّذِينَ ءَامَنُواْ مِنۢ بَعۡدُ وَهَاجَرُواْ وَجَٰهَدُواْ مَعَكُمۡ فَأُوْلَٰٓئِكَ مِنكُمۡۚ وَأُوْلُواْ ٱلۡأَرۡحَامِ بَعۡضُهُمۡ أَوۡلَىٰ بِبَعۡضٖ فِي كِتَٰبِ ٱللَّهِۚ إِنَّ ٱللَّهَ بِكُلِّ شَيۡءٍ عَلِيمُۢ "}]