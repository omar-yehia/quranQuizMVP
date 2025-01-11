const mainSuraId = 11;
const nearbySurasNames = {
    10: 'يُونس',
    11: 'هُود',
    12: 'يُوسُف',
    13: 'الرَّعد',
};
const choicesObjects = {
    "221": "وان يمسسك الله بضر فلا",
    "222": "وما من دابه في الارض",
    "224": "اولئك لم يكونوا معجزين في",
    "225": "وياقوم لا اسالكم عليه مالا",
};
const ayas = [{"aya_id": 1486, "coordinates": [[90, 47, 322, 34], [124, 47, 322, 34]], "aya_moshaf": "أَمۡ يَقُولُونَ ٱفۡتَرَىٰهُۖ قُلۡ فَأۡتُواْ بِعَشۡرِ سُوَرٖ مِّثۡلِهِۦ مُفۡتَرَيَٰتٖ وَٱدۡعُواْ مَنِ ٱسۡتَطَعۡتُم مِّن دُونِ ٱللَّهِ إِن كُنتُمۡ صَٰدِقِينَ "}, {"aya_id": 1487, "coordinates": [[159, 47, 322, 34], [193, 178, 192, 34]], "aya_moshaf": "فَإِلَّمۡ يَسۡتَجِيبُواْ لَكُمۡ فَٱعۡلَمُوٓاْ أَنَّمَآ أُنزِلَ بِعِلۡمِ ٱللَّهِ وَأَن لَّآ إِلَٰهَ إِلَّا هُوَۖ فَهَلۡ أَنتُم مُّسۡلِمُونَ "}, {"aya_id": 1488, "coordinates": [[193, 47, 131, 34], [227, 47, 322, 34], [262, 348, 22, 34]], "aya_moshaf": "مَن كَانَ يُرِيدُ ٱلۡحَيَوٰةَ ٱلدُّنۡيَا وَزِينَتَهَا نُوَفِّ إِلَيۡهِمۡ أَعۡمَٰلَهُمۡ فِيهَا وَهُمۡ فِيهَا لَا يُبۡخَسُونَ "}, {"aya_id": 1489, "coordinates": [[262, 47, 301, 34], [296, 107, 263, 34]], "aya_moshaf": "أُوْلَٰٓئِكَ ٱلَّذِينَ لَيۡسَ لَهُمۡ فِي ٱلۡأٓخِرَةِ إِلَّا ٱلنَّارُۖ وَحَبِطَ مَا صَنَعُواْ فِيهَا وَبَٰطِلٞ مَّا كَانُواْ يَعۡمَلُونَ "}, {"aya_id": 1490, "coordinates": [[296, 47, 60, 34], [330, 47, 322, 34], [365, 47, 322, 34], [399, 47, 322, 34], [433, 86, 284, 34]], "aya_moshaf": "أَفَمَن كَانَ عَلَىٰ بَيِّنَةٖ مِّن رَّبِّهِۦ وَيَتۡلُوهُ شَاهِدٞ مِّنۡهُ وَمِن قَبۡلِهِۦ كِتَٰبُ مُوسَىٰٓ إِمَامٗا وَرَحۡمَةًۚ أُوْلَٰٓئِكَ يُؤۡمِنُونَ بِهِۦۚ وَمَن يَكۡفُرۡ بِهِۦ مِنَ ٱلۡأَحۡزَابِ فَٱلنَّارُ مَوۡعِدُهُۥۚ فَلَا تَكُ فِي مِرۡيَةٖ مِّنۡهُۚ إِنَّهُ ٱلۡحَقُّ مِن رَّبِّكَ وَلَٰكِنَّ أَكۡثَرَ ٱلنَّاسِ لَا يُؤۡمِنُونَ "}, {"aya_id": 1491, "coordinates": [[433, 47, 39, 34], [468, 47, 322, 34], [502, 47, 322, 34], [536, 150, 220, 34]], "aya_moshaf": "وَمَنۡ أَظۡلَمُ مِمَّنِ ٱفۡتَرَىٰ عَلَى ٱللَّهِ كَذِبًاۚ أُوْلَٰٓئِكَ يُعۡرَضُونَ عَلَىٰ رَبِّهِمۡ وَيَقُولُ ٱلۡأَشۡهَٰدُ هَٰٓؤُلَآءِ ٱلَّذِينَ كَذَبُواْ عَلَىٰ رَبِّهِمۡۚ أَلَا لَعۡنَةُ ٱللَّهِ عَلَى ٱلظَّٰلِمِينَ "}, {"aya_id": 1492, "coordinates": [[536, 47, 103, 34], [571, 49, 321, 34]], "aya_moshaf": "ٱلَّذِينَ يَصُدُّونَ عَن سَبِيلِ ٱللَّهِ وَيَبۡغُونَهَا عِوَجٗا وَهُم بِٱلۡأٓخِرَةِ هُمۡ كَٰفِرُونَ "}]