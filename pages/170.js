const mainSuraId = 7;
const nearbySurasNames = {
    6: 'الأنعَام',
    7: 'الأعرَاف',
    8: 'الأنفَال',
    9: 'التوبَة',
};
const choicesObjects = {
    "168": "قال ياموسي اني اصطفيتك علي",
    "169": "ولما رجع موسي الي قومه",
    "171": "وقطعناهم اثنتي عشره اسباطا امما",
    "172": "واذ قالت امه منهم لم",
};
const ayas = [{"aya_id": 1110, "coordinates": [[81, 87, 322, 34], [115, 87, 322, 34], [150, 87, 322, 34], [184, 179, 231, 34]], "aya_moshaf": "۞ وَٱكۡتُبۡ لَنَا فِي هَٰذِهِ ٱلدُّنۡيَا حَسَنَةٗ وَفِي ٱلۡأٓخِرَةِ إِنَّا هُدۡنَآ إِلَيۡكَۚ قَالَ عَذَابِيٓ أُصِيبُ بِهِۦ مَنۡ أَشَآءُۖ وَرَحۡمَتِي وَسِعَتۡ كُلَّ شَيۡءٖۚ فَسَأَكۡتُبُهَا لِلَّذِينَ يَتَّقُونَ وَيُؤۡتُونَ ٱلزَّكَوٰةَ وَٱلَّذِينَ هُم بِـَٔايَٰتِنَا يُؤۡمِنُونَ "}, {"aya_id": 1111, "coordinates": [[184, 87, 92, 34], [218, 87, 322, 34], [253, 87, 322, 34], [287, 87, 322, 34], [321, 87, 322, 34], [356, 87, 322, 34], [390, 115, 295, 34]], "aya_moshaf": "ٱلَّذِينَ يَتَّبِعُونَ ٱلرَّسُولَ ٱلنَّبِيَّ ٱلۡأُمِّيَّ ٱلَّذِي يَجِدُونَهُۥ مَكۡتُوبًا عِندَهُمۡ فِي ٱلتَّوۡرَىٰةِ وَٱلۡإِنجِيلِ يَأۡمُرُهُم بِٱلۡمَعۡرُوفِ وَيَنۡهَىٰهُمۡ عَنِ ٱلۡمُنكَرِ وَيُحِلُّ لَهُمُ ٱلطَّيِّبَٰتِ وَيُحَرِّمُ عَلَيۡهِمُ ٱلۡخَبَٰٓئِثَ وَيَضَعُ عَنۡهُمۡ إِصۡرَهُمۡ وَٱلۡأَغۡلَٰلَ ٱلَّتِي كَانَتۡ عَلَيۡهِمۡۚ فَٱلَّذِينَ ءَامَنُواْ بِهِۦ وَعَزَّرُوهُ وَنَصَرُوهُ وَٱتَّبَعُواْ ٱلنُّورَ ٱلَّذِيٓ أُنزِلَ مَعَهُۥٓ أُوْلَٰٓئِكَ هُمُ ٱلۡمُفۡلِحُونَ "}, {"aya_id": 1112, "coordinates": [[390, 87, 28, 34], [424, 87, 322, 34], [459, 87, 322, 34], [493, 87, 322, 34], [527, 87, 322, 34]], "aya_moshaf": "قُلۡ يَٰٓأَيُّهَا ٱلنَّاسُ إِنِّي رَسُولُ ٱللَّهِ إِلَيۡكُمۡ جَمِيعًا ٱلَّذِي لَهُۥ مُلۡكُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۖ لَآ إِلَٰهَ إِلَّا هُوَ يُحۡيِۦ وَيُمِيتُۖ فَـَٔامِنُواْ بِٱللَّهِ وَرَسُولِهِ ٱلنَّبِيِّ ٱلۡأُمِّيِّ ٱلَّذِي يُؤۡمِنُ بِٱللَّهِ وَكَلِمَٰتِهِۦ وَٱتَّبِعُوهُ لَعَلَّكُمۡ تَهۡتَدُونَ "}, {"aya_id": 1113, "coordinates": [[562, 87, 322, 34]], "aya_moshaf": "وَمِن قَوۡمِ مُوسَىٰٓ أُمَّةٞ يَهۡدُونَ بِٱلۡحَقِّ وَبِهِۦ يَعۡدِلُونَ "}]