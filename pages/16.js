const mainSuraId = 2;
const nearbySurasNames = {
    1: 'الفَاتِحة',
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
};
const choicesObjects = {
    "14": "ولما جاءهم كتاب من عند",
    "15": "قل ان كانت لكم الدار",
    "17": "ما ننسخ من ايه او",
    "18": "وقالت اليهود ليست النصاري علي",
};
const ayas = [{"aya_id": 109, "coordinates": [[80, 92, 322, 34], [114, 92, 322, 34], [149, 92, 322, 34], [183, 92, 322, 34], [217, 92, 322, 34], [252, 92, 322, 34], [286, 92, 322, 34], [320, 92, 322, 34], [355, 198, 217, 34]], "aya_moshaf": "وَٱتَّبَعُواْ مَا تَتۡلُواْ ٱلشَّيَٰطِينُ عَلَىٰ مُلۡكِ سُلَيۡمَٰنَۖ وَمَا كَفَرَ سُلَيۡمَٰنُ وَلَٰكِنَّ ٱلشَّيَٰطِينَ كَفَرُواْ يُعَلِّمُونَ ٱلنَّاسَ ٱلسِّحۡرَ وَمَآ أُنزِلَ عَلَى ٱلۡمَلَكَيۡنِ بِبَابِلَ هَٰرُوتَ وَمَٰرُوتَۚ وَمَا يُعَلِّمَانِ مِنۡ أَحَدٍ حَتَّىٰ يَقُولَآ إِنَّمَا نَحۡنُ فِتۡنَةٞ فَلَا تَكۡفُرۡۖ فَيَتَعَلَّمُونَ مِنۡهُمَا مَا يُفَرِّقُونَ بِهِۦ بَيۡنَ ٱلۡمَرۡءِ وَزَوۡجِهِۦۚ وَمَا هُم بِضَآرِّينَ بِهِۦ مِنۡ أَحَدٍ إِلَّا بِإِذۡنِ ٱللَّهِۚ وَيَتَعَلَّمُونَ مَا يَضُرُّهُمۡ وَلَا يَنفَعُهُمۡۚ وَلَقَدۡ عَلِمُواْ لَمَنِ ٱشۡتَرَىٰهُ مَا لَهُۥ فِي ٱلۡأٓخِرَةِ مِنۡ خَلَٰقٖۚ وَلَبِئۡسَ مَا شَرَوۡاْ بِهِۦٓ أَنفُسَهُمۡۚ لَوۡ كَانُواْ يَعۡلَمُونَ "}, {"aya_id": 110, "coordinates": [[355, 92, 106, 34], [389, 92, 322, 34], [423, 392, 23, 34]], "aya_moshaf": "وَلَوۡ أَنَّهُمۡ ءَامَنُواْ وَٱتَّقَوۡاْ لَمَثُوبَةٞ مِّنۡ عِندِ ٱللَّهِ خَيۡرٞۚ لَّوۡ كَانُواْ يَعۡلَمُونَ "}, {"aya_id": 111, "coordinates": [[423, 92, 300, 34], [458, 92, 322, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَا تَقُولُواْ رَٰعِنَا وَقُولُواْ ٱنظُرۡنَا وَٱسۡمَعُواْۗ وَلِلۡكَٰفِرِينَ عَذَابٌ أَلِيمٞ "}, {"aya_id": 112, "coordinates": [[492, 92, 322, 34], [526, 92, 322, 34], [561, 92, 322, 34]], "aya_moshaf": "مَّا يَوَدُّ ٱلَّذِينَ كَفَرُواْ مِنۡ أَهۡلِ ٱلۡكِتَٰبِ وَلَا ٱلۡمُشۡرِكِينَ أَن يُنَزَّلَ عَلَيۡكُم مِّنۡ خَيۡرٖ مِّن رَّبِّكُمۡۚ وَٱللَّهُ يَخۡتَصُّ بِرَحۡمَتِهِۦ مَن يَشَآءُۚ وَٱللَّهُ ذُو ٱلۡفَضۡلِ ٱلۡعَظِيمِ "}]