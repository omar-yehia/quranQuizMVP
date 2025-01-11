const mainSuraId = 47;
const nearbySurasNames = {
    46: 'الأحقَاف',
    47: 'مُحمد',
    48: 'الفَتح',
    49: 'الحُجُرَات',
};
const choicesObjects = {
    "506": "واذ صرفنا اليك نفرا من",
    "507": "الذين كفروا وصدوا عن سبيل",
    "509": "ويقول الذين امنوا لولا نزلت",
    "510": "ولو نشاء لاريناكهم فلعرفتهم بسيماهم",
};
const ayas = [{"aya_id": 4557, "coordinates": [[86, 89, 322, 34], [120, 89, 322, 34], [155, 304, 108, 34]], "aya_moshaf": "إِنَّ ٱللَّهَ يُدۡخِلُ ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ جَنَّٰتٖ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُۖ وَٱلَّذِينَ كَفَرُواْ يَتَمَتَّعُونَ وَيَأۡكُلُونَ كَمَا تَأۡكُلُ ٱلۡأَنۡعَٰمُ وَٱلنَّارُ مَثۡوٗى لَّهُمۡ "}, {"aya_id": 4558, "coordinates": [[155, 89, 215, 34], [189, 183, 229, 34]], "aya_moshaf": "وَكَأَيِّن مِّن قَرۡيَةٍ هِيَ أَشَدُّ قُوَّةٗ مِّن قَرۡيَتِكَ ٱلَّتِيٓ أَخۡرَجَتۡكَ أَهۡلَكۡنَٰهُمۡ فَلَا نَاصِرَ لَهُمۡ "}, {"aya_id": 4559, "coordinates": [[189, 89, 94, 34], [223, 146, 266, 34]], "aya_moshaf": "أَفَمَن كَانَ عَلَىٰ بَيِّنَةٖ مِّن رَّبِّهِۦ كَمَن زُيِّنَ لَهُۥ سُوٓءُ عَمَلِهِۦ وَٱتَّبَعُوٓاْ أَهۡوَآءَهُم "}, {"aya_id": 4560, "coordinates": [[223, 89, 57, 34], [258, 89, 322, 34], [292, 89, 322, 34], [326, 89, 322, 34], [361, 219, 193, 34]], "aya_moshaf": "مَّثَلُ ٱلۡجَنَّةِ ٱلَّتِي وُعِدَ ٱلۡمُتَّقُونَۖ فِيهَآ أَنۡهَٰرٞ مِّن مَّآءٍ غَيۡرِ ءَاسِنٖ وَأَنۡهَٰرٞ مِّن لَّبَنٖ لَّمۡ يَتَغَيَّرۡ طَعۡمُهُۥ وَأَنۡهَٰرٞ مِّنۡ خَمۡرٖ لَّذَّةٖ لِّلشَّٰرِبِينَ وَأَنۡهَٰرٞ مِّنۡ عَسَلٖ مُّصَفّٗىۖ وَلَهُمۡ فِيهَا مِن كُلِّ ٱلثَّمَرَٰتِ وَمَغۡفِرَةٞ مِّن رَّبِّهِمۡۖ كَمَنۡ هُوَ خَٰلِدٞ فِي ٱلنَّارِ وَسُقُواْ مَآءً حَمِيمٗا فَقَطَّعَ أَمۡعَآءَهُمۡ "}, {"aya_id": 4561, "coordinates": [[361, 89, 130, 34], [395, 89, 322, 34], [429, 132, 280, 34]], "aya_moshaf": "وَمِنۡهُم مَّن يَسۡتَمِعُ إِلَيۡكَ حَتَّىٰٓ إِذَا خَرَجُواْ مِنۡ عِندِكَ قَالُواْ لِلَّذِينَ أُوتُواْ ٱلۡعِلۡمَ مَاذَا قَالَ ءَانِفًاۚ أُوْلَٰٓئِكَ ٱلَّذِينَ طَبَعَ ٱللَّهُ عَلَىٰ قُلُوبِهِمۡ وَٱتَّبَعُوٓاْ أَهۡوَآءَهُمۡ "}, {"aya_id": 4562, "coordinates": [[429, 89, 43, 34], [464, 183, 229, 34]], "aya_moshaf": "وَٱلَّذِينَ ٱهۡتَدَوۡاْ زَادَهُمۡ هُدٗى وَءَاتَىٰهُمۡ تَقۡوَىٰهُمۡ "}, {"aya_id": 4563, "coordinates": [[464, 89, 94, 34], [498, 89, 322, 34], [532, 342, 70, 34]], "aya_moshaf": "فَهَلۡ يَنظُرُونَ إِلَّا ٱلسَّاعَةَ أَن تَأۡتِيَهُم بَغۡتَةٗۖ فَقَدۡ جَآءَ أَشۡرَاطُهَاۚ فَأَنَّىٰ لَهُمۡ إِذَا جَآءَتۡهُمۡ ذِكۡرَىٰهُمۡ "}, {"aya_id": 4564, "coordinates": [[532, 89, 253, 34], [567, 89, 322, 34]], "aya_moshaf": "فَٱعۡلَمۡ أَنَّهُۥ لَآ إِلَٰهَ إِلَّا ٱللَّهُ وَٱسۡتَغۡفِرۡ لِذَنۢبِكَ وَلِلۡمُؤۡمِنِينَ وَٱلۡمُؤۡمِنَٰتِۗ وَٱللَّهُ يَعۡلَمُ مُتَقَلَّبَكُمۡ وَمَثۡوَىٰكُمۡ "}]