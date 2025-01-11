const mainSuraId = 9;
const nearbySurasNames = {
    8: 'الأنفَال',
    9: 'التوبَة',
    10: 'يُونس',
    11: 'هُود',
};
const choicesObjects = {
    "202": "يعتذرون اليكم اذا رجعتم اليهم",
    "203": "والسابقون الاولون من المهاجرين والانصار",
    "205": "التائبون العابدون الحامدون السائحون الراكعون",
    "206": "وعلي الثلاثه الذين خلفوا حتي",
};
const ayas = [{"aya_id": 1342, "coordinates": [[75, 91, 322, 34], [109, 91, 322, 34], [144, 91, 322, 34], [178, 386, 28, 34]], "aya_moshaf": "وَٱلَّذِينَ ٱتَّخَذُواْ مَسۡجِدٗا ضِرَارٗا وَكُفۡرٗا وَتَفۡرِيقَۢا بَيۡنَ ٱلۡمُؤۡمِنِينَ وَإِرۡصَادٗا لِّمَنۡ حَارَبَ ٱللَّهَ وَرَسُولَهُۥ مِن قَبۡلُۚ وَلَيَحۡلِفُنَّ إِنۡ أَرَدۡنَآ إِلَّا ٱلۡحُسۡنَىٰۖ وَٱللَّهُ يَشۡهَدُ إِنَّهُمۡ لَكَٰذِبُونَ "}, {"aya_id": 1343, "coordinates": [[178, 91, 295, 34], [212, 91, 322, 34], [247, 244, 170, 34]], "aya_moshaf": "لَا تَقُمۡ فِيهِ أَبَدٗاۚ لَّمَسۡجِدٌ أُسِّسَ عَلَى ٱلتَّقۡوَىٰ مِنۡ أَوَّلِ يَوۡمٍ أَحَقُّ أَن تَقُومَ فِيهِۚ فِيهِ رِجَالٞ يُحِبُّونَ أَن يَتَطَهَّرُواْۚ وَٱللَّهُ يُحِبُّ ٱلۡمُطَّهِّرِينَ "}, {"aya_id": 1344, "coordinates": [[247, 91, 153, 34], [281, 91, 322, 34], [315, 91, 322, 34], [350, 280, 134, 34]], "aya_moshaf": "أَفَمَنۡ أَسَّسَ بُنۡيَٰنَهُۥ عَلَىٰ تَقۡوَىٰ مِنَ ٱللَّهِ وَرِضۡوَٰنٍ خَيۡرٌ أَم مَّنۡ أَسَّسَ بُنۡيَٰنَهُۥ عَلَىٰ شَفَا جُرُفٍ هَارٖ فَٱنۡهَارَ بِهِۦ فِي نَارِ جَهَنَّمَۗ وَٱللَّهُ لَا يَهۡدِي ٱلۡقَوۡمَ ٱلظَّٰلِمِينَ "}, {"aya_id": 1345, "coordinates": [[350, 91, 189, 34], [384, 91, 322, 34]], "aya_moshaf": "لَا يَزَالُ بُنۡيَٰنُهُمُ ٱلَّذِي بَنَوۡاْ رِيبَةٗ فِي قُلُوبِهِمۡ إِلَّآ أَن تَقَطَّعَ قُلُوبُهُمۡۗ وَٱللَّهُ عَلِيمٌ حَكِيمٌ "}, {"aya_id": 1346, "coordinates": [[418, 91, 322, 34], [453, 91, 322, 34], [487, 91, 322, 34], [521, 91, 322, 34], [556, 91, 322, 34]], "aya_moshaf": "۞ إِنَّ ٱللَّهَ ٱشۡتَرَىٰ مِنَ ٱلۡمُؤۡمِنِينَ أَنفُسَهُمۡ وَأَمۡوَٰلَهُم بِأَنَّ لَهُمُ ٱلۡجَنَّةَۚ يُقَٰتِلُونَ فِي سَبِيلِ ٱللَّهِ فَيَقۡتُلُونَ وَيُقۡتَلُونَۖ وَعۡدًا عَلَيۡهِ حَقّٗا فِي ٱلتَّوۡرَىٰةِ وَٱلۡإِنجِيلِ وَٱلۡقُرۡءَانِۚ وَمَنۡ أَوۡفَىٰ بِعَهۡدِهِۦ مِنَ ٱللَّهِۚ فَٱسۡتَبۡشِرُواْ بِبَيۡعِكُمُ ٱلَّذِي بَايَعۡتُم بِهِۦۚ وَذَٰلِكَ هُوَ ٱلۡفَوۡزُ ٱلۡعَظِيمُ "}]