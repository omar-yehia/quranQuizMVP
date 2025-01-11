const mainSuraId = 43;
const nearbySurasNames = {
    42: 'الشُّوري',
    43: 'الزُّخرُف',
    44: 'الدُّخان',
    45: 'الجاثِية',
};
const choicesObjects = {
    "493": "وما نريهم من ايه الا",
    "494": "وانه لعلم للساعه فلا تمترن",
    "496": "حم",
    "497": "وان لا تعلوا علي الله",
};
const ayas = [{"aya_id": 4399, "coordinates": [[87, 153, 219, 34]], "aya_moshaf": "إِنَّ ٱلۡمُجۡرِمِينَ فِي عَذَابِ جَهَنَّمَ خَٰلِدُونَ "}, {"aya_id": 4400, "coordinates": [[87, 49, 104, 34], [121, 281, 91, 34]], "aya_moshaf": "لَا يُفَتَّرُ عَنۡهُمۡ وَهُمۡ فِيهِ مُبۡلِسُونَ "}, {"aya_id": 4401, "coordinates": [[121, 49, 232, 34]], "aya_moshaf": "وَمَا ظَلَمۡنَٰهُمۡ وَلَٰكِن كَانُواْ هُمُ ٱلظَّٰلِمِينَ "}, {"aya_id": 4402, "coordinates": [[156, 83, 289, 34]], "aya_moshaf": "وَنَادَوۡاْ يَٰمَٰلِكُ لِيَقۡضِ عَلَيۡنَا رَبُّكَۖ قَالَ إِنَّكُم مَّٰكِثُونَ "}, {"aya_id": 4403, "coordinates": [[156, 49, 34, 34], [190, 123, 249, 34]], "aya_moshaf": "لَقَدۡ جِئۡنَٰكُم بِٱلۡحَقِّ وَلَٰكِنَّ أَكۡثَرَكُمۡ لِلۡحَقِّ كَٰرِهُونَ "}, {"aya_id": 4404, "coordinates": [[190, 49, 74, 34], [224, 282, 90, 34]], "aya_moshaf": "أَمۡ أَبۡرَمُوٓاْ أَمۡرٗا فَإِنَّا مُبۡرِمُونَ "}, {"aya_id": 4405, "coordinates": [[224, 49, 233, 34], [259, 222, 150, 34]], "aya_moshaf": "أَمۡ يَحۡسَبُونَ أَنَّا لَا نَسۡمَعُ سِرَّهُمۡ وَنَجۡوَىٰهُمۚ بَلَىٰ وَرُسُلُنَا لَدَيۡهِمۡ يَكۡتُبُونَ "}, {"aya_id": 4406, "coordinates": [[259, 49, 173, 34], [293, 295, 77, 34]], "aya_moshaf": "قُلۡ إِن كَانَ لِلرَّحۡمَٰنِ وَلَدٞ فَأَنَا۠ أَوَّلُ ٱلۡعَٰبِدِينَ "}, {"aya_id": 4407, "coordinates": [[293, 49, 246, 34], [327, 276, 96, 34]], "aya_moshaf": "سُبۡحَٰنَ رَبِّ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ رَبِّ ٱلۡعَرۡشِ عَمَّا يَصِفُونَ "}, {"aya_id": 4408, "coordinates": [[327, 49, 227, 34], [362, 266, 106, 34]], "aya_moshaf": "فَذَرۡهُمۡ يَخُوضُواْ وَيَلۡعَبُواْ حَتَّىٰ يُلَٰقُواْ يَوۡمَهُمُ ٱلَّذِي يُوعَدُونَ "}, {"aya_id": 4409, "coordinates": [[362, 49, 217, 34], [396, 216, 156, 34]], "aya_moshaf": "وَهُوَ ٱلَّذِي فِي ٱلسَّمَآءِ إِلَٰهٞ وَفِي ٱلۡأَرۡضِ إِلَٰهٞۚ وَهُوَ ٱلۡحَكِيمُ ٱلۡعَلِيمُ "}, {"aya_id": 4410, "coordinates": [[396, 49, 167, 34], [430, 49, 322, 34], [465, 345, 27, 34]], "aya_moshaf": "وَتَبَارَكَ ٱلَّذِي لَهُۥ مُلۡكُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَمَا بَيۡنَهُمَا وَعِندَهُۥ عِلۡمُ ٱلسَّاعَةِ وَإِلَيۡهِ تُرۡجَعُونَ "}, {"aya_id": 4411, "coordinates": [[465, 49, 296, 34], [499, 199, 173, 34]], "aya_moshaf": "وَلَا يَمۡلِكُ ٱلَّذِينَ يَدۡعُونَ مِن دُونِهِ ٱلشَّفَٰعَةَ إِلَّا مَن شَهِدَ بِٱلۡحَقِّ وَهُمۡ يَعۡلَمُونَ "}, {"aya_id": 4412, "coordinates": [[499, 49, 150, 34], [533, 223, 149, 34]], "aya_moshaf": "وَلَئِن سَأَلۡتَهُم مَّنۡ خَلَقَهُمۡ لَيَقُولُنَّ ٱللَّهُۖ فَأَنَّىٰ يُؤۡفَكُونَ "}, {"aya_id": 4413, "coordinates": [[533, 49, 174, 34], [568, 293, 79, 34]], "aya_moshaf": "وَقِيلِهِۦ يَٰرَبِّ إِنَّ هَٰٓؤُلَآءِ قَوۡمٞ لَّا يُؤۡمِنُونَ "}, {"aya_id": 4414, "coordinates": [[568, 49, 244, 34]], "aya_moshaf": "فَٱصۡفَحۡ عَنۡهُمۡ وَقُلۡ سَلَٰمٞۚ فَسَوۡفَ يَعۡلَمُونَ "}]