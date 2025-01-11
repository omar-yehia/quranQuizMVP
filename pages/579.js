const mainSuraId = 76;
const nearbySurasNames = {
    75: 'القِيَامة',
    76: 'الإنسَان',
    77: 'المُرسَلات',
    78: 'النَّبَإ',
};
const choicesObjects = {
    "577": "فما تنفعهم شفاعه الشافعين",
    "578": "كلا بل تحبون العاجله",
    "580": "ومن الليل فاسجد له وسبحه",
    "581": "الم نخلقكم من ماء مهين",
};
const ayas = [{"aya_id": 5597, "coordinates": [[87, 148, 222, 34]], "aya_moshaf": "عَيۡنٗا يَشۡرَبُ بِهَا عِبَادُ ٱللَّهِ يُفَجِّرُونَهَا تَفۡجِيرٗا "}, {"aya_id": 5598, "coordinates": [[87, 48, 100, 34], [121, 234, 136, 34]], "aya_moshaf": "يُوفُونَ بِٱلنَّذۡرِ وَيَخَافُونَ يَوۡمٗا كَانَ شَرُّهُۥ مُسۡتَطِيرٗا "}, {"aya_id": 5599, "coordinates": [[121, 48, 186, 34], [156, 284, 86, 34]], "aya_moshaf": "وَيُطۡعِمُونَ ٱلطَّعَامَ عَلَىٰ حُبِّهِۦ مِسۡكِينٗا وَيَتِيمٗا وَأَسِيرًا "}, {"aya_id": 5600, "coordinates": [[156, 48, 236, 34], [190, 349, 21, 34]], "aya_moshaf": "إِنَّمَا نُطۡعِمُكُمۡ لِوَجۡهِ ٱللَّهِ لَا نُرِيدُ مِنكُمۡ جَزَآءٗ وَلَا شُكُورًا "}, {"aya_id": 5601, "coordinates": [[190, 154, 196, 34]], "aya_moshaf": "إِنَّا نَخَافُ مِن رَّبِّنَا يَوۡمًا عَبُوسٗا قَمۡطَرِيرٗا "}, {"aya_id": 5602, "coordinates": [[190, 48, 106, 34], [224, 210, 161, 34]], "aya_moshaf": "فَوَقَىٰهُمُ ٱللَّهُ شَرَّ ذَٰلِكَ ٱلۡيَوۡمِ وَلَقَّىٰهُمۡ نَضۡرَةٗ وَسُرُورٗا "}, {"aya_id": 5603, "coordinates": [[224, 48, 162, 34], [259, 347, 24, 34]], "aya_moshaf": "وَجَزَىٰهُم بِمَا صَبَرُواْ جَنَّةٗ وَحَرِيرٗا "}, {"aya_id": 5604, "coordinates": [[259, 48, 299, 34]], "aya_moshaf": "مُّتَّكِـِٔينَ فِيهَا عَلَى ٱلۡأَرَآئِكِۖ لَا يَرَوۡنَ فِيهَا شَمۡسٗا وَلَا زَمۡهَرِيرٗا "}, {"aya_id": 5605, "coordinates": [[293, 142, 229, 34]], "aya_moshaf": "وَدَانِيَةً عَلَيۡهِمۡ ظِلَٰلُهَا وَذُلِّلَتۡ قُطُوفُهَا تَذۡلِيلٗا "}, {"aya_id": 5606, "coordinates": [[293, 48, 94, 34], [327, 207, 164, 34]], "aya_moshaf": "وَيُطَافُ عَلَيۡهِم بِـَٔانِيَةٖ مِّن فِضَّةٖ وَأَكۡوَابٖ كَانَتۡ قَوَارِيرَا۠ "}, {"aya_id": 5607, "coordinates": [[327, 48, 159, 34]], "aya_moshaf": "قَوَارِيرَاْ مِن فِضَّةٖ قَدَّرُوهَا تَقۡدِيرٗا "}, {"aya_id": 5608, "coordinates": [[362, 165, 206, 34]], "aya_moshaf": "وَيُسۡقَوۡنَ فِيهَا كَأۡسٗا كَانَ مِزَاجُهَا زَنجَبِيلًا "}, {"aya_id": 5609, "coordinates": [[362, 48, 117, 34], [396, 348, 23, 34]], "aya_moshaf": "عَيۡنٗا فِيهَا تُسَمَّىٰ سَلۡسَبِيلٗا "}, {"aya_id": 5610, "coordinates": [[396, 48, 300, 34], [430, 348, 23, 34]], "aya_moshaf": "۞ وَيَطُوفُ عَلَيۡهِمۡ وِلۡدَٰنٞ مُّخَلَّدُونَ إِذَا رَأَيۡتَهُمۡ حَسِبۡتَهُمۡ لُؤۡلُؤٗا مَّنثُورٗا "}, {"aya_id": 5611, "coordinates": [[430, 152, 196, 34]], "aya_moshaf": "وَإِذَا رَأَيۡتَ ثَمَّ رَأَيۡتَ نَعِيمٗا وَمُلۡكٗا كَبِيرًا "}, {"aya_id": 5612, "coordinates": [[430, 48, 104, 34], [465, 48, 322, 34], [499, 311, 60, 34]], "aya_moshaf": "عَٰلِيَهُمۡ ثِيَابُ سُندُسٍ خُضۡرٞ وَإِسۡتَبۡرَقٞۖ وَحُلُّوٓاْ أَسَاوِرَ مِن فِضَّةٖ وَسَقَىٰهُمۡ رَبُّهُمۡ شَرَابٗا طَهُورًا "}, {"aya_id": 5613, "coordinates": [[499, 70, 241, 34]], "aya_moshaf": "إِنَّ هَٰذَا كَانَ لَكُمۡ جَزَآءٗ وَكَانَ سَعۡيُكُم مَّشۡكُورًا "}, {"aya_id": 5614, "coordinates": [[499, 48, 22, 34], [533, 188, 183, 34]], "aya_moshaf": "إِنَّا نَحۡنُ نَزَّلۡنَا عَلَيۡكَ ٱلۡقُرۡءَانَ تَنزِيلٗا "}, {"aya_id": 5615, "coordinates": [[533, 48, 140, 34], [568, 246, 125, 34]], "aya_moshaf": "فَٱصۡبِرۡ لِحُكۡمِ رَبِّكَ وَلَا تُطِعۡ مِنۡهُمۡ ءَاثِمًا أَوۡ كَفُورٗا "}, {"aya_id": 5616, "coordinates": [[568, 48, 198, 34]], "aya_moshaf": "وَٱذۡكُرِ ٱسۡمَ رَبِّكَ بُكۡرَةٗ وَأَصِيلٗا "}]