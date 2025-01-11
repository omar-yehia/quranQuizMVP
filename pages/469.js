const mainSuraId = 40;
const nearbySurasNames = {
    39: 'الزُّمَر',
    40: 'غَافِر',
    41: 'فُصِّلَت',
    42: 'الشُّوري',
};
const choicesObjects = {
    "467": "وتري الملائكه حافين من حول",
    "468": "ربنا وادخلهم جنات عدن التي",
    "470": "وقال فرعون ذروني اقتل موسي",
    "471": "ولقد جاءكم يوسف من قبل",
};
const ayas = [{"aya_id": 4150, "coordinates": [[88, 50, 322, 34], [122, 232, 141, 34]], "aya_moshaf": "ٱلۡيَوۡمَ تُجۡزَىٰ كُلُّ نَفۡسِۭ بِمَا كَسَبَتۡۚ لَا ظُلۡمَ ٱلۡيَوۡمَۚ إِنَّ ٱللَّهَ سَرِيعُ ٱلۡحِسَابِ "}, {"aya_id": 4151, "coordinates": [[122, 50, 182, 34], [157, 50, 322, 34], [191, 313, 60, 34]], "aya_moshaf": "وَأَنذِرۡهُمۡ يَوۡمَ ٱلۡأٓزِفَةِ إِذِ ٱلۡقُلُوبُ لَدَى ٱلۡحَنَاجِرِ كَٰظِمِينَۚ مَا لِلظَّٰلِمِينَ مِنۡ حَمِيمٖ وَلَا شَفِيعٖ يُطَاعُ "}, {"aya_id": 4152, "coordinates": [[191, 50, 263, 34]], "aya_moshaf": "يَعۡلَمُ خَآئِنَةَ ٱلۡأَعۡيُنِ وَمَا تُخۡفِي ٱلصُّدُورُ "}, {"aya_id": 4153, "coordinates": [[225, 50, 322, 34], [260, 158, 215, 34]], "aya_moshaf": "وَٱللَّهُ يَقۡضِي بِٱلۡحَقِّۖ وَٱلَّذِينَ يَدۡعُونَ مِن دُونِهِۦ لَا يَقۡضُونَ بِشَيۡءٍۗ إِنَّ ٱللَّهَ هُوَ ٱلسَّمِيعُ ٱلۡبَصِيرُ "}, {"aya_id": 4154, "coordinates": [[260, 50, 108, 34], [294, 50, 322, 34], [328, 50, 322, 34], [363, 150, 223, 34]], "aya_moshaf": "۞ أَوَلَمۡ يَسِيرُواْ فِي ٱلۡأَرۡضِ فَيَنظُرُواْ كَيۡفَ كَانَ عَٰقِبَةُ ٱلَّذِينَ كَانُواْ مِن قَبۡلِهِمۡۚ كَانُواْ هُمۡ أَشَدَّ مِنۡهُمۡ قُوَّةٗ وَءَاثَارٗا فِي ٱلۡأَرۡضِ فَأَخَذَهُمُ ٱللَّهُ بِذُنُوبِهِمۡ وَمَا كَانَ لَهُم مِّنَ ٱللَّهِ مِن وَاقٖ "}, {"aya_id": 4155, "coordinates": [[363, 50, 100, 34], [397, 50, 322, 34], [431, 230, 143, 34]], "aya_moshaf": "ذَٰلِكَ بِأَنَّهُمۡ كَانَت تَّأۡتِيهِمۡ رُسُلُهُم بِٱلۡبَيِّنَٰتِ فَكَفَرُواْ فَأَخَذَهُمُ ٱللَّهُۚ إِنَّهُۥ قَوِيّٞ شَدِيدُ ٱلۡعِقَابِ "}, {"aya_id": 4156, "coordinates": [[431, 50, 180, 34], [466, 241, 132, 34]], "aya_moshaf": "وَلَقَدۡ أَرۡسَلۡنَا مُوسَىٰ بِـَٔايَٰتِنَا وَسُلۡطَٰنٖ مُّبِينٍ "}, {"aya_id": 4157, "coordinates": [[466, 50, 191, 34], [500, 199, 174, 34]], "aya_moshaf": "إِلَىٰ فِرۡعَوۡنَ وَهَٰمَٰنَ وَقَٰرُونَ فَقَالُواْ سَٰحِرٞ كَذَّابٞ "}, {"aya_id": 4158, "coordinates": [[500, 50, 149, 34], [534, 50, 322, 34], [569, 50, 322, 34]], "aya_moshaf": "فَلَمَّا جَآءَهُم بِٱلۡحَقِّ مِنۡ عِندِنَا قَالُواْ ٱقۡتُلُوٓاْ أَبۡنَآءَ ٱلَّذِينَ ءَامَنُواْ مَعَهُۥ وَٱسۡتَحۡيُواْ نِسَآءَهُمۡۚ وَمَا كَيۡدُ ٱلۡكَٰفِرِينَ إِلَّا فِي ضَلَٰلٖ "}]