const nearbySurasNames = {
    45: 'الجاثِية',
    46: 'الأحقَاف',
    47: 'مُحمد',
    48: 'الفَتح',
};
const choicesObjects = {
    "502": "وبدا لهم سيئات ما عملوا",
    "503": "واذا حشر الناس كانوا لهم",
    "505": "واذكر اخا عاد اذ انذر",
    "506": "واذ صرفنا اليك نفرا من",
};
const ayas = [{"aya_id": 4525, "coordinates": [[86, 86, 322, 34], [120, 86, 322, 34], [155, 86, 322, 34], [189, 86, 322, 34], [223, 169, 240, 34]], "aya_moshaf": "وَوَصَّيۡنَا ٱلۡإِنسَٰنَ بِوَٰلِدَيۡهِ إِحۡسَٰنًاۖ حَمَلَتۡهُ أُمُّهُۥ كُرۡهٗا وَوَضَعَتۡهُ كُرۡهٗاۖ وَحَمۡلُهُۥ وَفِصَٰلُهُۥ ثَلَٰثُونَ شَهۡرًاۚ حَتَّىٰٓ إِذَا بَلَغَ أَشُدَّهُۥ وَبَلَغَ أَرۡبَعِينَ سَنَةٗ قَالَ رَبِّ أَوۡزِعۡنِيٓ أَنۡ أَشۡكُرَ نِعۡمَتَكَ ٱلَّتِيٓ أَنۡعَمۡتَ عَلَيَّ وَعَلَىٰ وَٰلِدَيَّ وَأَنۡ أَعۡمَلَ صَٰلِحٗا تَرۡضَىٰهُ وَأَصۡلِحۡ لِي فِي ذُرِّيَّتِيٓۖ إِنِّي تُبۡتُ إِلَيۡكَ وَإِنِّي مِنَ ٱلۡمُسۡلِمِينَ "}, {"aya_id": 4526, "coordinates": [[223, 86, 83, 34], [258, 86, 322, 34], [292, 165, 244, 34]], "aya_moshaf": "أُوْلَٰٓئِكَ ٱلَّذِينَ نَتَقَبَّلُ عَنۡهُمۡ أَحۡسَنَ مَا عَمِلُواْ وَنَتَجَاوَزُ عَن سَيِّـَٔاتِهِمۡ فِيٓ أَصۡحَٰبِ ٱلۡجَنَّةِۖ وَعۡدَ ٱلصِّدۡقِ ٱلَّذِي كَانُواْ يُوعَدُونَ "}, {"aya_id": 4527, "coordinates": [[292, 86, 79, 34], [326, 86, 322, 34], [361, 86, 322, 34], [395, 244, 165, 34]], "aya_moshaf": "وَٱلَّذِي قَالَ لِوَٰلِدَيۡهِ أُفّٖ لَّكُمَآ أَتَعِدَانِنِيٓ أَنۡ أُخۡرَجَ وَقَدۡ خَلَتِ ٱلۡقُرُونُ مِن قَبۡلِي وَهُمَا يَسۡتَغِيثَانِ ٱللَّهَ وَيۡلَكَ ءَامِنۡ إِنَّ وَعۡدَ ٱللَّهِ حَقّٞ فَيَقُولُ مَا هَٰذَآ إِلَّآ أَسَٰطِيرُ ٱلۡأَوَّلِينَ "}, {"aya_id": 4528, "coordinates": [[395, 86, 158, 34], [429, 86, 322, 34], [464, 345, 64, 34]], "aya_moshaf": "أُوْلَٰٓئِكَ ٱلَّذِينَ حَقَّ عَلَيۡهِمُ ٱلۡقَوۡلُ فِيٓ أُمَمٖ قَدۡ خَلَتۡ مِن قَبۡلِهِم مِّنَ ٱلۡجِنِّ وَٱلۡإِنسِۖ إِنَّهُمۡ كَانُواْ خَٰسِرِينَ "}, {"aya_id": 4529, "coordinates": [[464, 86, 259, 34], [498, 337, 72, 34]], "aya_moshaf": "وَلِكُلّٖ دَرَجَٰتٞ مِّمَّا عَمِلُواْۖ وَلِيُوَفِّيَهُمۡ أَعۡمَٰلَهُمۡ وَهُمۡ لَا يُظۡلَمُونَ "}, {"aya_id": 4530, "coordinates": [[498, 86, 251, 34], [532, 86, 322, 34], [567, 86, 322, 34]], "aya_moshaf": "وَيَوۡمَ يُعۡرَضُ ٱلَّذِينَ كَفَرُواْ عَلَى ٱلنَّارِ أَذۡهَبۡتُمۡ طَيِّبَٰتِكُمۡ فِي حَيَاتِكُمُ ٱلدُّنۡيَا وَٱسۡتَمۡتَعۡتُم بِهَا فَٱلۡيَوۡمَ تُجۡزَوۡنَ عَذَابَ ٱلۡهُونِ بِمَا كُنتُمۡ تَسۡتَكۡبِرُونَ فِي ٱلۡأَرۡضِ بِغَيۡرِ ٱلۡحَقِّ وَبِمَا كُنتُمۡ تَفۡسُقُونَ "}]
const ayasRanges = [{"ayas_ids_range": [4525, 4530], "sura_id": 46}];
