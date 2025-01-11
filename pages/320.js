const mainSuraId = 20;
const nearbySurasNames = {
    19: 'مَريَم',
    20: 'طه',
    21: 'الأنبيَاء',
    22: 'الحج',
};
const choicesObjects = {
    "318": "فاخرج لهم عجلا جسدا له",
    "319": "كذلك نقص عليك من انباء",
    "321": "قال كذلك اتتك اياتنا فنسيتها",
    "322": "اقترب للناس حسابهم وهم في",
};
const ayas = [{"aya_id": 2462, "coordinates": [[83, 91, 322, 34], [117, 158, 256, 34]], "aya_moshaf": "فَتَعَٰلَى ٱللَّهُ ٱلۡمَلِكُ ٱلۡحَقُّۗ وَلَا تَعۡجَلۡ بِٱلۡقُرۡءَانِ مِن قَبۡلِ أَن يُقۡضَىٰٓ إِلَيۡكَ وَحۡيُهُۥۖ وَقُل رَّبِّ زِدۡنِي عِلۡمٗا "}, {"aya_id": 2463, "coordinates": [[117, 91, 67, 34], [152, 158, 256, 34]], "aya_moshaf": "وَلَقَدۡ عَهِدۡنَآ إِلَىٰٓ ءَادَمَ مِن قَبۡلُ فَنَسِيَ وَلَمۡ نَجِدۡ لَهُۥ عَزۡمٗا "}, {"aya_id": 2464, "coordinates": [[152, 91, 67, 34], [186, 91, 322, 34], [220, 393, 21, 34]], "aya_moshaf": "وَإِذۡ قُلۡنَا لِلۡمَلَٰٓئِكَةِ ٱسۡجُدُواْ لِأٓدَمَ فَسَجَدُوٓاْ إِلَّآ إِبۡلِيسَ أَبَىٰ "}, {"aya_id": 2465, "coordinates": [[220, 91, 302, 34], [255, 288, 126, 34]], "aya_moshaf": "فَقُلۡنَا يَٰٓـَٔادَمُ إِنَّ هَٰذَا عَدُوّٞ لَّكَ وَلِزَوۡجِكَ فَلَا يُخۡرِجَنَّكُمَا مِنَ ٱلۡجَنَّةِ فَتَشۡقَىٰٓ "}, {"aya_id": 2466, "coordinates": [[255, 91, 197, 34]], "aya_moshaf": "إِنَّ لَكَ أَلَّا تَجُوعَ فِيهَا وَلَا تَعۡرَىٰ "}, {"aya_id": 2467, "coordinates": [[289, 208, 206, 34]], "aya_moshaf": "وَأَنَّكَ لَا تَظۡمَؤُاْ فِيهَا وَلَا تَضۡحَىٰ "}, {"aya_id": 2468, "coordinates": [[289, 91, 117, 34], [323, 91, 322, 34], [358, 353, 61, 34]], "aya_moshaf": "فَوَسۡوَسَ إِلَيۡهِ ٱلشَّيۡطَٰنُ قَالَ يَٰٓـَٔادَمُ هَلۡ أَدُلُّكَ عَلَىٰ شَجَرَةِ ٱلۡخُلۡدِ وَمُلۡكٖ لَّا يَبۡلَىٰ "}, {"aya_id": 2469, "coordinates": [[358, 91, 262, 34], [392, 91, 322, 34]], "aya_moshaf": "فَأَكَلَا مِنۡهَا فَبَدَتۡ لَهُمَا سَوۡءَٰتُهُمَا وَطَفِقَا يَخۡصِفَانِ عَلَيۡهِمَا مِن وَرَقِ ٱلۡجَنَّةِۚ وَعَصَىٰٓ ءَادَمُ رَبَّهُۥ فَغَوَىٰ "}, {"aya_id": 2470, "coordinates": [[426, 203, 211, 34]], "aya_moshaf": "ثُمَّ ٱجۡتَبَٰهُ رَبُّهُۥ فَتَابَ عَلَيۡهِ وَهَدَىٰ "}, {"aya_id": 2471, "coordinates": [[426, 91, 112, 34], [461, 91, 322, 34], [495, 182, 232, 34]], "aya_moshaf": "قَالَ ٱهۡبِطَا مِنۡهَا جَمِيعَۢاۖ بَعۡضُكُمۡ لِبَعۡضٍ عَدُوّٞۖ فَإِمَّا يَأۡتِيَنَّكُم مِّنِّي هُدٗى فَمَنِ ٱتَّبَعَ هُدَايَ فَلَا يَضِلُّ وَلَا يَشۡقَىٰ "}, {"aya_id": 2472, "coordinates": [[495, 91, 91, 34], [529, 91, 322, 34], [564, 353, 61, 34]], "aya_moshaf": "وَمَنۡ أَعۡرَضَ عَن ذِكۡرِي فَإِنَّ لَهُۥ مَعِيشَةٗ ضَنكٗا وَنَحۡشُرُهُۥ يَوۡمَ ٱلۡقِيَٰمَةِ أَعۡمَىٰ "}, {"aya_id": 2473, "coordinates": [[564, 91, 262, 34]], "aya_moshaf": "قَالَ رَبِّ لِمَ حَشَرۡتَنِيٓ أَعۡمَىٰ وَقَدۡ كُنتُ بَصِيرٗا "}]