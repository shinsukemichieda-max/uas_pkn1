// =========================================================================================
// 1. DATA SOAL (DISIMPAN SEBAGAI VARIABEL JAVASCRIPT)
// Tambahkan field 'rationale' (Pembahasan) untuk umpan balik instan.
// =========================================================================================

const dataSoal = [
    {
      "id": 81,
      "soal": "Cita-cita moral bangsa yang memberikan pedoman dan kekuatan rohaniah bagi bangsa untuk berperilaku luhur dalam kehidupan bermasyarakat, berbangsa dan bernegara adalah ….:",
      "opsi_a": "Pancasila",
      "opsi_b": "Undang-Undang Dasar Negara Republik Indonesia",
      "opsi_c": "Tap MPR",
      "opsi_d": "Peraturan Pemerintah",
      "jawaban": "A",
      "rationale": "Pancasila adalah cita-cita moral dan filosofi bangsa (pandangan hidup/Weltanschauung) yang memberikan pedoman rohaniah dan nilai-nilai luhur bagi seluruh aspek kehidupan masyarakat, berbangsa, dan bernegara."
    },
    {
      "id": 82,
      "soal": "Kasus sentimen etnis dan ketegangan karena persoalan kebudayaan, agama, dan etnis yang mengancam integrasi nasional Negara Yugoslavia dipicu oleh banyaknya suku bangsa yang bermukim di wilayah dan lembah ….:",
      "opsi_a": "Semenanjung Balkan",
      "opsi_b": "Semenanjung Sinai",
      "opsi_c": "Semenanjung Suez",
      "opsi_d": "Eropa Tengah",
      "jawaban": "A",
      "rationale": "Yugoslavia adalah negara yang terletak di Semenanjung Balkan. Perpecahan Yugoslavia dipicu oleh ketegangan etnis dan agama antara kelompok-kelompok besar seperti Serbia, Kroasia, dan Bosnia yang mendiami wilayah tersebut."
    },
    {
      "id": 83,
      "soal": "Kata ‘kerakyatan’ di dalam sila keempat Pancasila menunjukkan bahwa negara Indonesia didirikan di atas pemahaman bahwa ….:",
      "opsi_a": "rakyatlah pemilik kedaulatan negara",
      "opsi_b": "Indonesia memiliki sistem pemerintahan yang merakyat",
      "opsi_c": "rakyat indonesia mandiri",
      "opsi_d": "rakyat adalah pembentuk negara",
      "jawaban": "A",
      "rationale": "Kata 'kerakyatan' dalam sila keempat menegaskan prinsip kedaulatan rakyat, di mana kekuasaan tertinggi dalam negara berada di tangan rakyat dan dilaksanakan menurut UUD."
    },
    {
      "id": 84,
      "soal": "Berikut ini yang merupakan identitas nasional secara nonfisik adalah ….:",
      "opsi_a": "bahasa Indonesia sebagai bahasa persatuan",
      "opsi_b": "Garuda Pancasila sebagai lambang negara",
      "opsi_c": "Pancasila sebagai jati diri bangsa",
      "opsi_d": "lagu kebangsaan Indonesia Raya",
      "jawaban": "C",
      "rationale": "Identitas nonfisik (subjektif) adalah nilai-nilai, ideologi, dan pola pikir. Pancasila sebagai jati diri/falsafah bangsa (C) adalah identitas nonfisik. Sementara Bahasa (A), Garuda (B), dan Lagu Kebangsaan (D) adalah identitas fisik (simbol/objektif)."
    },
    {
      "id": 85,
      "soal": "Berikut yang bukan merupakan kebutuhan masyarakat untuk keberlangsungan suatu negara adalah ….:",
      "opsi_a": "terjaminnya hak masyarakat",
      "opsi_b": "kondisi ekonomi yang sama rata",
      "opsi_c": "adanya perlindungan keamanan",
      "opsi_d": "perlakuan yang sama di depan hukum",
      "jawaban": "B",
      "rationale": "Negara bertujuan menjamin hak (A), perlindungan keamanan (C), dan kesamaan di depan hukum (D). Kondisi ekonomi yang sama rata (B) adalah tujuan ideologis sosialisme/komunisme, bukan tujuan universal dari keberlangsungan suatu negara yang umumnya menganut sistem ekonomi pasar/campuran."
    },
    {
      "id": 86,
      "soal": "Objek formal Pendidikan Kewarganegaraan berhubungan dengan ….:",
      "opsi_a": "dimensi sistem ketatanegaraan yang menekankan pada hubungan antara warga negara dan negara",
      "opsi_b": "manfaat yang didapat",
      "opsi_c": "bersifat universal",
      "opsi_d": "bidang sasaran atau bahan yang dikaji",
      "jawaban": "A",
      "rationale": "Objek formal PKn adalah sudut pandang kajiannya, yaitu dimensi sistem ketatanegaraan dan segala hal yang mengatur hubungan antara warga negara dengan negara."
    },
    {
      "id": 87,
      "soal": "Menurut ketetapan MPR No VII/MPR/2001, tujuan nasional negara Indonesia yakni ….:",
      "opsi_a": "melindungi segenap bangsa indonesia dan seluruh tumpah darah Indonesia",
      "opsi_b": "terwujudnya masyarakat Indonesia yang religius, manusiawi, bersatu, demokratis, adil, sejahtera, maju, mandiri, serta baik dan bersih dalam penyelenggaraan negara",
      "opsi_c": "melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia",
      "opsi_d": "mensejahterakan dan mencerdaskan rakyat",
      "jawaban": "B",
      "rationale": "TAP MPR No. VII/MPR/2001 tentang Visi Indonesia Masa Depan merumuskan tujuan nasional yang komprehensif (B) sebagai acuan pembangunan di era Reformasi, yang meliputi aspek spiritual, sosial, politik, dan penyelenggaraan negara yang baik (Good Governance)."
    },
    {
      "id": 88,
      "soal": "Raja dianggap sebagai wakil dari Tuhan sehingga apa kata Raja itu identik dengan apa kata Tuhan atau sesuai dengan keinginan Tuhan. Hal ini merupakan berhubungan dengan salah satu teori tentang terjadinya negara menurut teori ....:",
      "opsi_a": "hukum alam",
      "opsi_b": "ketuhanan",
      "opsi_c": "perjanjian",
      "opsi_d": "tata negara",
      "jawaban": "B",
      "rationale": "Teori Ketuhanan (Teokrasi) meyakini bahwa negara dan kekuasaan raja/pemimpin berasal dari kehendak Tuhan, yang menjadikan pemimpin sebagai wakil atau perwujudan kehendak Ilahi."
    },
    {
      "id": 89,
      "soal": "Satu ruang lingkup Pendidikan Kewarganegaraan adalah hak dan kewajiban warga negara yang pembahasannya meliputi hal-hal di bawah ini, kecuali ….:",
      "opsi_a": "pengertian hak dan kewajiban",
      "opsi_b": "landasan filosofis hak asasi",
      "opsi_c": "macam-macam hak warga negara",
      "opsi_d": "cara menjadi warga negara",
      "jawaban": "D",
      "rationale": "Ruang lingkup PKn mencakup konsep, landasan, dan jenis hak/kewajiban (A, B, C). Cara menjadi warga negara (D) adalah materi yang lebih spesifik diatur dalam UU Kewarganegaraan dan bukan merupakan fokus utama PKn."
    },
    {
      "id": 90,
      "soal": "Konstitusi berasal dari bahasa Belanda yaitu gronwet yang artinya ….:",
      "opsi_a": "tanah basah",
      "opsi_b": "peraturan",
      "opsi_c": "hukum dasar",
      "opsi_d": "pembentukan",
      "jawaban": "C",
      "rationale": "Gronwet (Bahasa Belanda) terdiri dari kata 'grond' (dasar) dan 'wet' (hukum/undang-undang), sehingga berarti 'hukum dasar', yang merupakan sinonim dari konstitusi (dalam arti sempit)."
    },
    {
      "id": 91,
      "soal": "Berikut yang bukan merupakan cita-cita Negara Indonesia adalah menjadi negara .…:",
      "opsi_a": "berdaulat",
      "opsi_b": "boneka",
      "opsi_c": "merdeka",
      "opsi_d": "bersatu",
      "jawaban": "B",
      "rationale": "Cita-cita Negara Indonesia tercantum dalam Pembukaan UUD 1945, yang ingin menjadi negara yang merdeka, bersatu, berdaulat, adil, dan makmur. Negara boneka (B) adalah negara yang dikendalikan oleh negara lain dan bertentangan dengan prinsip berdaulat."
    },
    {
      "id": 92,
      "soal": "Pendidikan Kewarganegaraan di perguruan tinggi merupakan sumber nilai dan pedoman dalam pengembangan dan penyelenggaraan program studi serta berguna dalam mengantarkan mahasiswa memantapkan kepribadiannya sebagai manusia seutuhnya, hal ini merupakan … Pendidikan Kewarganegaraan.:",
      "opsi_a": "visi",
      "opsi_b": "moto",
      "opsi_c": "misi",
      "opsi_d": "amanat",
      "jawaban": "A",
      "rationale": "Visi adalah pandangan ke depan, yang dalam hal ini PKn ditujukan untuk membentuk mahasiswa agar memiliki kepribadian yang utuh, yang menjadi sumber nilai dan pedoman bagi pengembangan keilmuan dan pribadi."
    },
    {
      "id": 93,
      "soal": "Alasan yang menyebabkan pembangunan di Indonesia tidak merata sejak zaman kemerdekaan adalah ….:",
      "opsi_a": "Negara Indonesia sebagai negara kepulauan",
      "opsi_b": "masyarakat susah untuk diajak kerja sama",
      "opsi_c": "Belanda telah memecah belah Indonesia",
      "opsi_d": "adanya campur tangan pihak asing",
      "jawaban": "A",
      "rationale": "Kondisi Indonesia sebagai negara kepulauan (A), ditambah dengan sistem sentralistik di masa lalu, menciptakan tantangan besar dalam hal infrastruktur dan logistik, yang menjadi penyebab utama ketidakmerataan pembangunan antardaerah."
    },
    {
      "id": 94,
      "soal": "Berikut ini yang bukan cakupan kegiatan dari istilah governance adalah tata kelola ….:",
      "opsi_a": "administrasi negara",
      "opsi_b": "pemerintahan",
      "opsi_c": "administrasi",
      "opsi_d": "daerah",
      "jawaban": "D",
      "rationale": "Governance (tata kelola) adalah proses pengambilan keputusan dan pelaksanaannya. Cakupannya meliputi administrasi negara, pemerintahan, dan administrasi publik secara umum. Istilah 'tata kelola daerah' (D) lebih merupakan penerapan governance pada tingkatan wilayah spesifik, bukan pengecualian dari cakupan governance itu sendiri."
    },
    {
      "id": 95,
      "soal": "Sekelompok orang yang bersatu berdasarkan satu jiwa atau satu asas spiritual yang tercipta oleh rasa pengorbanan yang telah dibuat pada masa lampau demi masa depan generasi penerusnya merupakan pengertian dari ….:",
      "opsi_a": "pemerintah yang berdaulat",
      "opsi_b": "bangsa",
      "opsi_c": "negara",
      "opsi_d": "klan",
      "jawaban": "B",
      "rationale": "Definisi ini sangat menekankan unsur psikologis dan sejarah (satu jiwa, asas spiritual, pengorbanan masa lampau), yang merupakan pengertian bangsa (natie) menurut Ernest Renan."
    },
    {
      "id": 96,
      "soal": "Berikut ini yang bukan termasuk di dalam azas umum otonomi daerah adalah ….:",
      "opsi_a": "desentralisasi",
      "opsi_b": "dekonsentrasi",
      "opsi_c": "tugas pembantuan",
      "opsi_d": "tertib penyelenggaraan negara",
      "jawaban": "D",
      "rationale": "Asas Otonomi Daerah (UU No. 32 Tahun 2004) adalah Desentralisasi (penyerahan wewenang), Dekonsentrasi (pelimpahan wewenang), dan Tugas Pembantuan (penugasan). Tertib penyelenggaraan negara (D) adalah salah satu asas Good Governance, bukan asas pembagian urusan otonomi daerah."
    },
    {
      "id": 97,
      "soal": "Berikut ini yang bukan kompetensi yang diharapkan dimiliki oleh mahasiswa setelah mengikuti Pendidikan Kewarganegaran adalah ….:",
      "opsi_a": "memahami kehidupan berbangsa dan bernegara secara rasional",
      "opsi_b": "memiliki rasa kebangsaan",
      "opsi_c": "mencintai tanah air",
      "opsi_d": "memiliki semangat kemandirian",
      "jawaban": "D",
      "rationale": "Kompetensi utama PKn mencakup aspek kognitif (pemahaman rasional A), afektif (rasa kebangsaan B, cinta tanah air C), dan psikomotorik yang berhubungan dengan partisipasi kewarganegaraan. Semangat kemandirian (D) adalah sifat umum yang diajarkan, tetapi bukan kompetensi dasar utama dalam konteks kurikulum PKn."
    },
    {
      "id": 98,
      "soal": "Pendidikan kewarganegaraan merupakan bagian ilmu pengetahuan yang memiliki landasan filsafat sebagai berikut, kecuali ….:",
      "opsi_a": "epistemologi",
      "opsi_b": "ontologi",
      "opsi_c": "metodologi",
      "opsi_d": "aksiologi",
      "jawaban": "C",
      "rationale": "Landasan filsafat ilmu meliputi Ontologi (apa yang dikaji/hakikat), Epistemologi (bagaimana cara memperoleh ilmu), dan Aksiologi (untuk apa/nilai guna). Metodologi (C) adalah cara/teknik penelitian, yang merupakan bagian dari Epistemologi, bukan cabang filsafat yang setara."
    },
    {
      "id": 99,
      "soal": "Terdapat kriteria tentang tata kelola pemerintahan yang baik. Salah satunya adalah transparansi, yang artinya ….:",
      "opsi_a": "tata kelola pemerintahan yang baik juga ditentukan oleh seberapa cepat pemerintah tersebut merespon berbagai persoalan yang muncul di masyarakat",
      "opsi_b": "salah satu konsep yang penting karena konsep ini berhubungan langsung dengan kedudukan rakyat sebagai pemilik kedaulatan tertinggi negara",
      "opsi_c": "tata kelola yang baik harus mampu menjamin transparansi di hampir semua bidang yang terkait dengan pengelolaan informasi",
      "opsi_d": "negara adalah entitas kolektif yang terdiri atas berbagai macam golongan dan kepentingan",
      "jawaban": "C",
      "rationale": "Transparansi adalah prinsip keterbukaan yang mengharuskan pemerintah untuk memberikan informasi yang jelas, terbuka, dan mudah diakses oleh masyarakat, terutama terkait kebijakan dan pengelolaan sumber daya publik."
    },
    {
      "id": 100,
      "soal": "Pada bagian awal suatu konstitusi biasanya berisi tentang ....:",
      "opsi_a": "asas dan tujuan negara",
      "opsi_b": "jaminan dan perlindungan hak asasi manusia",
      "opsi_c": "identitas negara",
      "opsi_d": "cara melakukan perubahan konstitusi",
      "jawaban": "A",
      "rationale": "Bagian awal (Pembukaan atau Preambule) suatu konstitusi, seperti Pembukaan UUD 1945, biasanya berisi pernyataan filosofis (asas/dasar negara) dan cita-cita/tujuan pendirian negara."
    },
    {
      "id": 101,
      "soal": "Konsep good governance tidak dapat dipisahkan dengan konsep reformasi secara keseluruhan karena ….:",
      "opsi_a": "reformasi merupakan semangat dari good governance",
      "opsi_b": "reformasi merupakan manifestasi semangat dari demokrasi",
      "opsi_c": "good governance merupakan semangat yang diadopsi dari reformasi",
      "opsi_d": "reformasi membawa semangat untuk merombak tata pemerintahan lama yang korup",
      "jawaban": "B",
      "rationale": "Good governance adalah alat atau implementasi dari reformasi. Reformasi sendiri bertujuan mengembalikan kedaulatan kepada rakyat (demokrasi). Oleh karena itu, good governance adalah wujud dari tuntutan reformasi dan manifestasi dari nilai-nilai demokrasi."
    },
    {
      "id": 102,
      "soal": "Tata kelola pemerintahan yang baik dan bersih merupakan konsep dari ….:",
      "opsi_a": "desentralisasi",
      "opsi_b": "good and clean governance",
      "opsi_c": "demokrasi",
      "opsi_d": "dekonsentrasi",
      "jawaban": "B",
      "rationale": "Istilah 'good and clean governance' (tata kelola pemerintahan yang baik dan bersih) adalah konsep yang menekankan akuntabilitas, transparansi, efisiensi, dan partisipasi publik dalam penyelenggaraan negara, terutama untuk melawan korupsi."
    },
    {
      "id": 103,
      "soal": "Berikut yang bukan merupakan kekuatan mental dalam politik bangsa Indonesia yaitu kekuatan .…:",
      "opsi_a": "agama",
      "opsi_b": "ideologi",
      "opsi_c": "ilmu pengetahuan",
      "opsi_d": "jasmani atau fisik dan kekuatan kesejahteraan material",
      "jawaban": "D",
      "rationale": "Kekuatan mental bangsa Indonesia berakar pada nilai-nilai spiritual, ideologi, dan intelektual (A, B, C). Kekuatan jasmani/fisik dan material (D) merupakan kekuatan fisik/obyektif, bukan mental/subyektif."
    },
    {
      "id": 104,
      "soal": "Kekayaan wilayah Nusantara baik potensial maupun efektif adalah modal dan milik bersama bangsa dan keperluan hidup sehari-hari harus tersedia merata di seluruh wilayah tanah air, merupakan makna wawasan Nusantara dilihat sebagai kesatuan .…:",
      "opsi_a": "politik",
      "opsi_b": "sosial",
      "opsi_c": "budaya",
      "opsi_d": "ekonomi",
      "jawaban": "D",
      "rationale": "Pernyataan ini berkaitan dengan sumber daya, modal bersama, dan pemerataan kebutuhan hidup, yang merupakan aspek dari kesatuan ekonomi dalam Wawasan Nusantara."
    },
    {
      "id": 105,
      "soal": "Dalam geostrategi, sistem politik Indonesia adalah demokrasi Pancasila yang berciri ….:",
      "opsi_a": "individualis",
      "opsi_b": "kompetisi",
      "opsi_c": "liberal",
      "opsi_d": "kekeluargaan",
      "jawaban": "D",
      "rationale": "Demokrasi Pancasila bercirikan musyawarah mufakat yang dijiwai semangat kekeluargaan dan gotong royong, berbeda dengan demokrasi liberal yang menekankan individualisme dan kompetisi bebas."
    },
    {
      "id": 106,
      "soal": "Para pendiri negara sepakat bahwa perlindungan hak asasi manusia merupakan hal penting bagi bangsa Indonesia, maka dari itu mereka bersepakat meletakkan asas … bagi kehidupan berbangsa dan bernegara Indonesia:",
      "opsi_a": "sosialis",
      "opsi_b": "liberalis",
      "opsi_c": "demokrasi",
      "opsi_d": "kapitalis",
      "jawaban": "C",
      "rationale": "Perlindungan HAM merupakan salah satu pilar utama negara demokrasi. Dengan memilih asas demokrasi, para pendiri negara menjamin adanya hak dan kebebasan bagi warga negara sesuai dengan nilai-nilai Pancasila."
    },
    {
      "id": 107,
      "soal": "Integrasi nasional dapat terbentuk karena ada kesamaan latar belakang sejarah yang dialami suatu bangsa misalnya penderitaan akibat dari penjajahan. Proses pembentukan integrasi yang demikian itu didasarkan pada aspek ….:",
      "opsi_a": "sosiologis",
      "opsi_b": "historis",
      "opsi_c": "filosofis",
      "opsi_d": "kultural",
      "jawaban": "B",
      "rationale": "Integrasi historis adalah penyatuan yang didorong oleh pengalaman sejarah masa lalu yang sama, seperti rasa senasib sepenanggungan akibat penjajahan, yang menumbuhkan solidaritas nasional."
    },
    {
      "id": 108,
      "soal": "Berikut yang bukan merupakan kriteria dalam penentuan komposisi penduduk yaitu ….:",
      "opsi_a": "asal daerah",
      "opsi_b": "jenis kelamin",
      "opsi_c": "pendidikan",
      "opsi_d": "mata pencaharian",
      "jawaban": "A",
      "rationale": "Komposisi penduduk biasanya ditentukan berdasarkan demografi standar seperti usia, jenis kelamin (B), tingkat pendidikan (C), dan mata pencaharian (D) untuk analisis sosial-ekonomi. Asal daerah (A) lebih merujuk pada aspek migrasi/distribusi dan bukan komposisi struktural."
    },
    {
      "id": 109,
      "soal": "Salah satu asas dari koperasi yang dianut dalam kehidupan ekonomi Negara Indonesia yang dapat dijadikan bagian dari geostrategi adalah .…:",
      "opsi_a": "kebersamaan",
      "opsi_b": "pemerataan",
      "opsi_c": "kekeluargaan",
      "opsi_d": "adil dan merata",
      "jawaban": "C",
      "rationale": "Koperasi di Indonesia berasaskan kekeluargaan (C) dan gotong royong, yang merupakan ciri khas sistem ekonomi Pancasila. Asas ini dijadikan bagian dari geostrategi ekonomi untuk menciptakan ketahanan ekonomi yang berbasis kerakyatan."
    },
    {
      "id": 110,
      "soal": "Pengertian integrasi nasional (national integration) berakar dari suatu prinsip-prinsip dasar pemahaman mengenai ….:",
      "opsi_a": "persatuan karena wilayah yang sama",
      "opsi_b": "persatuan karena kondisi ekonomi yang sama",
      "opsi_c": "persatuan diantara perbedaan",
      "opsi_d": "persatuan karena senasib sepenangungan",
      "jawaban": "C",
      "rationale": "Integrasi nasional berakar pada semboyan Bhinneka Tunggal Ika, yang berarti upaya menyatukan keberagaman/perbedaan (etnis, budaya, agama) menjadi satu kesatuan bangsa."
    },
    {
      "id": 111,
      "soal": "Berikut yang bukan tata kelengkapan organisasi untuk mencapai tujuan nasional yaitu:",
      "opsi_a": "aparatur negara",
      "opsi_b": "pemilu",
      "opsi_c": "media pers",
      "opsi_d": "partisipasi rakyat",
      "jawaban": "C",
      "rationale": "Tata kelengkapan organisasi negara (sebagai alat) meliputi aparatur negara (A), mekanisme politik seperti pemilu (B), dan peran serta masyarakat (D). Media pers (C) adalah pilar keempat demokrasi, tetapi secara struktural bukan merupakan kelengkapan organisasi negara."
    },
    {
      "id": 112,
      "soal": "Dalam sila keempat Pancasila klausul “...yang Dimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/ Perwakilan”, kata Permusyawaratan/Perwakilam mengandung arti:",
      "opsi_a": "demokrasi tak langsung",
      "opsi_b": "musyawarah dilakukan dalam semua lini kehidupan",
      "opsi_c": "individu tidak memiliki suara",
      "opsi_d": "manfaat musyawarah",
      "jawaban": "A",
      "rationale": "Permusyawaratan/Perwakilan mencerminkan sistem demokrasi di Indonesia yang dijalankan secara tidak langsung (demokrasi perwakilan), di mana rakyat memilih wakil untuk duduk di lembaga legislatif (MPR/DPR/DPD) untuk menyampaikan aspirasi."
    },
    {
      "id": 113,
      "soal": "Berdasarkan Kamus Besar Bahasa Indonesia (KBBI) negara merupakan ….:",
      "opsi_a": "tanah yang diperjuangkan bersama sehingga merdeka dan berdaulat",
      "opsi_b": "organisasi yang dibuat untuk memberikan wadah kepada anggotanya untuk mendapatkan pengakuan hukum serta kesejahteraan",
      "opsi_c": "organisasi dalam suatu wilayah yang mempunyai kekuasaan tertinggi yang sah dan ditaati rakyat",
      "opsi_d": "kesepakatan antara penduduk yang memiliki tujuan yang sama untuk berserikat secara sah",
      "jawaban": "C",
      "rationale": "KBBI mendefinisikan negara sebagai organisasi yang memiliki kekuasaan tertinggi (berdaulat) di suatu wilayah dan ditaati oleh rakyatnya."
    },
    {
      "id": 114,
      "soal": "Konsep geopolitik Indonesia megandung unsur wadah yang berwujud ….:",
      "opsi_a": "cita-cita",
      "opsi_b": "tata inti organisasi",
      "opsi_c": "cara kerja",
      "opsi_d": "sifat dan ciri",
      "jawaban": "B",
      "rationale": "Geopolitik Indonesia (Wawasan Nusantara) mengandung unsur: Wadah (berupa wilayah fisik dan tata inti organisasi/struktur negara), Isi (berupa cita-cita dan strategi), dan Tata Laku (berupa tindakan)."
    },
    {
      "id": 115,
      "soal": "Bela Negara nonfisik menurut Undang-Undang No. 3 Tahun 2002 tentang Pertahanan Negara keikutsertaan warga negara dalam bela negara secara nonfisik dapat diselenggarakan melalui ….:",
      "opsi_a": "pendidikan menjadi Tentara Nasional Indonesia",
      "opsi_b": "pengabdian sesuai dengan profesi",
      "opsi_c": "menjadi Aparatur Sipil Negara",
      "opsi_d": "anggota Resimen Mahasiswa (Menwa)",
      "jawaban": "B",
      "rationale": "Bela negara nonfisik dilakukan melalui profesi (B) atau pendidikan kewarganegaraan. Menjadi TNI (A) adalah bela negara fisik/militer. ASN (C) dan Menwa (D) bisa termasuk nonfisik, tetapi pengabdian sesuai profesi adalah klausul paling umum dan mencakup bagi semua warga negara."
    },
    {
      "id": 116,
      "soal": "Berikut yang bukan peran lembaga terkait pertahanan Negara Indonesia adalah ….:",
      "opsi_a": "melindungi negara dari invasi negara lain",
      "opsi_b": "mempersiapkan komponen cadangan untuk pertahanan negara",
      "opsi_c": "bekerja sama dengan interpol secara berkelanjutan",
      "opsi_d": "mewujudkan dan memelihara kestabilan keamanan wilayah",
      "jawaban": "C",
      "rationale": "Lembaga pertahanan negara (TNI, Kemenhan) berperan dalam melindungi dari invasi (A), menyiapkan cadangan (B), dan memelihara keamanan (D). Kerja sama dengan Interpol (C) adalah tugas dari Kepolisian dan bukan peran utama lembaga pertahanan militer."
    },
    {
      "id": 117,
      "soal": "Identitas nasional menurut Kaelan dan Zubaidi (2007) mengandung 2 hal, yaitu .…:",
      "opsi_a": "ciri-ciri dan perbedaan dengan bangsa yang lain",
      "opsi_b": "ciri-ciri dan persamaan dengan bangsa lain",
      "opsi_c": "sejarah dan perbedaan dengan bangsa lain",
      "opsi_d": "sejarah dan persamaan dengan bangsa lain",
      "jawaban": "A",
      "rationale": "Identitas nasional adalah ciri-ciri atau penanda yang membedakan bangsa tersebut dengan bangsa lain di dunia."
    },
    {
      "id": 118,
      "soal": "Berikut yang bukan ciri-ciri demokrasi sistem parlementer adalah ….:",
      "opsi_a": "kekuasaan legislatif dan eksekutif berbeda",
      "opsi_b": "kekuasaan legislatif bersifat turun temurun",
      "opsi_c": "kepala negara seorang ratu/ raja/ presiden",
      "opsi_d": "kepala pemerintahan berada pada Perdana Menteri",
      "jawaban": "A",
      "rationale": "Dalam sistem parlementer, kekuasaan eksekutif (kabinet) dan legislatif (parlemen) berada dalam satu keterkaitan (kabinet bertanggung jawab dan bisa dijatuhkan parlemen), bukan berbeda. Poin A juga kontradiksi karena legislatif dan eksekutif saling mempengaruhi. Poin B adalah ciri monarki parlementer."
    },
    {
      "id": 119,
      "soal": "Berikut yang bukan alasan mengapa pemilihan dalam negara demokrasi harus bersifat jujur, yaitu ….:",
      "opsi_a": "transparansi di dalam semua prosesnya",
      "opsi_b": "kepercayaan publik terhadap lembaga penyelenggara pemilu",
      "opsi_c": "kepercayaan calon pemimpin terhadap publik",
      "opsi_d": "legitimasi kekuasaan yang dipegang oleh pihak pemenang",
      "jawaban": "C",
      "rationale": "Pemilu yang jujur menjamin transparansi (A), membangun kepercayaan publik (B), dan memberikan legitimasi bagi pemenang (D). Kepercayaan calon pemimpin terhadap publik (C) adalah faktor psikologis, bukan alasan fundamental yang mendasari keharusan sifat jujur dalam pemilu."
    },
    {
      "id": 120,
      "soal": "Kongres Sumpah Pemuda Tahun 1928 semakin mempertegas identitas nasional Indonesia. Berikut yang bukan merupakan hasil kongres tersebut adalah ….:",
      "opsi_a": "bangsa Indonesia mengaku bertanah air yang satu, tanah air Indonesia",
      "opsi_b": "bangsa Indonesia mengaku berbangsa yang satu, bangsa Indonesia",
      "opsi_c": "bangsa Indonesia mengaku bernegara yang satu, negara Indonesia",
      "opsi_d": "bangsa Indonsia menjunjung bahasa persatuan, bahasa Indonesia",
      "jawaban": "C",
      "rationale": "Sumpah Pemuda berisikan sumpah atas satu tanah air, satu bangsa, dan menjunjung satu bahasa (A, B, D). Belum ada sumpah untuk 'satu negara' (C), karena cita-cita mendirikan Negara Indonesia (proklamasi) baru terwujud pada tahun 1945."
    },
    {
      "id": 121,
      "soal": "Demokrasi langsung dapat dilakukan pada negara yang ….:",
      "opsi_a": "luas wilayahnya kecil",
      "opsi_b": "jumlah warga negaranya sedikit",
      "opsi_c": "wilayahnya berbentuk kepulauan",
      "opsi_d": "perbandingan warga negaranya lebih banyak laki-laki",
      "jawaban": "B",
      "rationale": "Demokrasi langsung (di mana rakyat terlibat langsung dalam pengambilan keputusan) hanya praktis dilakukan di negara atau komunitas yang memiliki jumlah warga negara (populasi) yang sedikit, seperti di negara kota Yunani Kuno."
    },
    {
      "id": 122,
      "soal": "Berikut yang bukan termasuk legal equity rights yaitu hak ….:",
      "opsi_a": "kebebasan mengeluarkan atau menyatakan pendapat",
      "opsi_b": "untuk mendapatkan perlakuan yang sama dalam hukum dan pemerintahan",
      "opsi_c": "untuk menjadi pegawai negeri sipil",
      "opsi_d": "mendapatkan layanan dan perlindungan hukum",
      "jawaban": "A",
      "rationale": "Legal Equality Rights (Hak Asasi Kesamaan Hukum) meliputi perlakuan yang sama di depan hukum (B), kesempatan menjadi PNS (C), dan perlindungan hukum (D). Kebebasan menyatakan pendapat (A) adalah Hak Asasi Pribadi (Personal Rights)."
    },
    {
      "id": 123,
      "soal": "Kewajiban warga negara yang tidak diatur dalam UUD NRI Tahun 1945 Pasal 27, 28, 30 yaitu .…:",
      "opsi_a": "kewajiban dalam usaha-usaha pertahanan dan keamanan negara",
      "opsi_b": "menjunjung tinggi hukum dan segala peraturan yang berlaku",
      "opsi_c": "menghormati hak dan kebebasan orang lain untuk berserikat",
      "opsi_d": "melestarikan budaya bangsa secara berkelanjutan",
      "jawaban": "D",
      "rationale": "Kewajiban dalam UUD 1945 meliputi ikut serta dalam hankam (A), menjunjung hukum (B), dan menghormati hak orang lain (C). Kewajiban melestarikan budaya (D) lebih merupakan kewajiban moral dan sosial, yang tidak secara eksplisit diatur sebagai kewajiban pokok dalam pasal-pasal UUD tersebut."
    },
    {
      "id": 124,
      "soal": "Piagam perjanjian yang merupakan tonggak sejarah demokrasi dan berisi kesepakatan antara para bangsawan dan Raja John di Inggris bahwa raja beserta keturunannya akan menghormati kemerdekaan, hak, dan kebebasan adalah ….:",
      "opsi_a": "Perjanjian Versailles",
      "opsi_b": "Magna Charta",
      "opsi_c": "Charter United Nation",
      "opsi_d": "Konvensi Jenewa",
      "jawaban": "B",
      "rationale": "Magna Charta Libertatum (1215) adalah piagam yang membatasi kekuasaan Raja John di Inggris dan menjadi salah satu tonggak awal pengakuan hak-hak dasar rakyat, yang merupakan cikal bakal demokrasi konstitusional."
    },
    {
      "id": 125,
      "soal": "Integrasi nasional bagi bangsa Indonesia mutlak diperlukan karena karakteristik masyarakat Indonesia terdiri atas berbagai hal-hal sebagai berikut, kecuali ….:",
      "opsi_a": "keberagaman etnis",
      "opsi_b": "kondisi sosial yang berbeda",
      "opsi_c": "sumber daya alam yang beragam",
      "opsi_d": "keanekaragaman budaya",
      "jawaban": "C",
      "rationale": "Integrasi nasional diperlukan untuk menyatukan perbedaan yang bersifat manusiawi (etnis A, sosial B, dan budaya D). Sumber daya alam yang beragam (C) adalah fakta geografis/ekonomi yang tidak secara langsung menjadi alasan mutlak perlunya integrasi nasional."
    },
    {
      "id": 126,
      "soal": "Negara berkewajiban untuk melakukan pembangunan seutuhnya dan seluruhnya bagi rakyat Indonesia tanpa terkecuali dan memperhatikan asas nondiskriminatif kepada kelompok-kelompok minor yang ada di Indonesia. Pernyataan tersebut sesuai dengan sila:",
      "opsi_a": "Ketuhanan Yang Maha Esa",
      "opsi_b": "Keadilan Sosial Bagi Seluruh Rakyat Indonesia",
      "opsi_c": "Persatuan Indonesia",
      "opsi_d": "Kemanusiaan Yang Adil dan Beradab",
      "jawaban": "B",
      "rationale": "Pernyataan tersebut menekankan pembangunan yang merata, tanpa terkecuali, dan nondiskriminatif (keadilan), yang merupakan prinsip dasar dari sila kelima Pancasila, Keadilan Sosial Bagi Seluruh Rakyat Indonesia."
    },
    {
      "id": 127,
      "soal": "Berikut filsuf Yunani Kuno yang merubah fokus kajian filsafat alam menjadi kajian filsafat manusia adalah ….:",
      "opsi_a": "Socrates",
      "opsi_b": "Plato",
      "opsi_c": "Pythagoras",
      "opsi_d": "Aristoteles",
      "jawaban": "A",
      "rationale": "Socrates dikenal sebagai tokoh yang memindahkan fokus utama filsafat dari alam semesta (kosmologi) ke manusia dan etika, dengan semboyannya 'Kenalilah Dirimu Sendiri'."
    },
    {
      "id": 128,
      "soal": "Kewenangan atau kekuasaan yang benar atas sesuatu atau untuk melakukan sesuatu, merupakan pengertian hak secara .…:",
      "opsi_a": "historis",
      "opsi_b": "ontologi",
      "opsi_c": "etimologi",
      "opsi_d": "aksiologi",
      "jawaban": "C",
      "rationale": "Secara etimologi, Hak (Recht) berarti kekuasaan yang benar atas sesuatu atau kewenangan yang sah untuk melakukan sesuatu."
    },
    {
      "id": 129,
      "soal": "Ketentuan tentang Lagu Kebangsaan Indonesia Raya diatur dalam Undang-undang No. 24 Tahun 2009 Pasal ….:",
      "opsi_a": "4 sampai Pasal 24",
      "opsi_b": "25 sampai Pasal 45",
      "opsi_c": "46 sampai Pasal 57",
      "opsi_d": "58 sampai Pasal 64",
      "jawaban": "C",
      "rationale": "UU No. 24 Tahun 2009 mengatur tentang Bendera, Bahasa, dan Lambang Negara, serta Lagu Kebangsaan. Ketentuan mengenai Lagu Kebangsaan (Indonesia Raya) secara spesifik diatur dalam Pasal 46 sampai Pasal 57."
    },
    {
      "id": 130,
      "soal": "Rumusan integrasi nasional pada masa orde baru dibangun dari membangun rasa persatuan dan kesatuan melalui kegiatan ….:",
      "opsi_a": "gotong royong",
      "opsi_b": "kerja bakti",
      "opsi_c": "Inpres Desa Tertinggal (IDT)",
      "opsi_d": "Wonderful Indonesia",
      "jawaban": "A",
      "rationale": "Pada masa Orde Baru, Gotong Royong (A) diangkat sebagai salah satu pilar pembangunan dan nilai budaya yang vital untuk memperkuat persatuan dan kesatuan bangsa di tengah program-program pembangunan nasional."
    },
    {
      "id": 131,
      "soal": "Pancasila sebagai pandangan hidup bangsa Indonesia merupakan perjanjian luhur bangsa Indonesia. Maksud dari pernyataan ini adalah ....:",
      "opsi_a": "Pancasila tidak boleh diubah karena merupakan dasar negara yang fundamental",
      "opsi_b": "Pancasila merupakan suatu kesepakatan (konsensus) di antara para pendiri negara yang memiliki makna dan nilai yang luhur",
      "opsi_c": "Pancasila dapat ditafsirkan ulang dan disesuaikan dengan perkembangan zaman",
      "opsi_d": "penafsiran atas Pancasila hanya boleh dilakukan oleh MPR sebagai lembaga yang berwenang",
      "jawaban": "B",
      "rationale": "Perjanjian luhur (Luhur Agreement) berarti Pancasila adalah konsensus atau kesepakatan historis yang agung antara semua elemen bangsa dan pendiri negara untuk mendasarkan kehidupan bernegara pada nilai-nilai tersebut."
    },
    {
      "id": 132,
      "soal": "Membangun kesadaran kolektif akan sejarah bangsa telah ditanamkan oleh para pendiri bangsa melalui berbagai cara, salah satunya dengan membuat bangunan fisik seperti berikut, kecuali ….:",
      "opsi_a": "museum sejarah",
      "opsi_b": "museum perjuangan",
      "opsi_c": "Dufan",
      "opsi_d": "TMII",
      "jawaban": "C",
      "rationale": "Museum sejarah (A), museum perjuangan (B), dan Taman Mini Indonesia Indah (TMII) (D) adalah bangunan fisik yang bertujuan menanamkan kesadaran dan kecintaan terhadap sejarah dan budaya bangsa. Dufan (C) adalah taman hiburan, bukan sarana edukasi sejarah utama."
    },
    {
      "id": 133,
      "soal": "Yang bukan hakikat manusia menurut konsep demokrasi adalah sebagai mahluk ….:",
      "opsi_a": "individual",
      "opsi_b": "kreatif",
      "opsi_c": "sosial",
      "opsi_d": "bebas",
      "jawaban": "B",
      "rationale": "Hakikat manusia dalam demokrasi adalah sebagai individu (memiliki hak individu), sosial (perlu berinteraksi), dan bebas (memiliki kebebasan berpendapat/memilih). Mahluk kreatif (B) adalah ciri umum manusia, tetapi bukan hakikat utama yang mendasari konsep politik demokrasi."
    },
    {
      "id": 134,
      "soal": "Berikut yang bukan merupakan karakter bangsa Indonesia yang tercermin dalam Pancasil adalah ….:",
      "opsi_a": "sifat religius",
      "opsi_b": "sikap menghormati bangsa dan manusia lain",
      "opsi_c": "musyawarah",
      "opsi_d": "ide tentang keadilan sosial bagi golongan yang dominan",
      "jawaban": "D",
      "rationale": "Karakter bangsa Indonesia yang tercermin dalam Pancasila adalah religius (Sila 1), humanis/menghormati HAM (Sila 2), musyawarah (Sila 4), dan Keadilan Sosial (Sila 5) untuk SELURUH rakyat. Keadilan sosial hanya bagi golongan dominan (D) jelas bertentangan dengan prinsip Pancasila."
    },
    {
      "id": 135,
      "soal": "suatu kesatuan solidaritas, kesatuan yang terdiri atas orang-orang yang saling merasa setia kawan dengan satu sama lain disebut ….:",
      "opsi_a": "kesatuan",
      "opsi_b": "negara",
      "opsi_c": "bangsa",
      "opsi_d": "kebinekaan",
      "jawaban": "C",
      "rationale": "Definisi ini menekankan unsur psikologis dan emosional (solidaritas, setia kawan) yang menjadi ciri khas dari pembentukan sebuah bangsa, yang didasarkan pada perasaan dan kesadaran kolektif."
    },
    {
      "id": 136,
      "soal": "Kebenaran yang dihasilkan dari sebuah ilmu adalah kebenaran yang bersifat universal yang artinya ….:",
      "opsi_a": "dapat disanggah oleh masyarakat",
      "opsi_b": "dapat diterima oleh masyarakat dimana saja dan kapan saja",
      "opsi_c": "terbatas oleh waktu",
      "opsi_d": "hanya berlaku pada suatu wilayah",
      "jawaban": "B",
      "rationale": "Universalitas adalah salah satu ciri ilmu, yang berarti kebenaran ilmu berlaku umum dan diterima di mana saja dan kapan saja (tidak terikat ruang dan waktu)."
    },
    {
      "id": 137,
      "soal": "Hasan Habib mengartikan wawasan nusantara sebagai kebulatan wilayah nasional yang memiliki kesatuan dalam hal-hal berikut ini, kecuali ….:",
      "opsi_a": "satu kesatuan bangsa",
      "opsi_b": "satu tujuan dan tekad perjuangan",
      "opsi_c": "satu kesatuan dalam menyamakan perbedaan",
      "opsi_d": "satu kesatuan sosial budaya",
      "jawaban": "C",
      "rationale": "Wawasan Nusantara mencakup kesatuan politik, ekonomi, sosial budaya, dan pertahanan keamanan. Menyamakan perbedaan (C) bertentangan dengan prinsip Bhinneka Tunggal Ika yang justru menerima dan menghargai perbedaan."
    },
    {
      "id": 138,
      "soal": "Teori kedaulatan Tuhan menjelaskan bahwa ….:",
      "opsi_a": "kepala negara adalah wakil Tuhan di dunia",
      "opsi_b": "kekuasaan tertinggi di tangan Tuhan",
      "opsi_c": "apa yang terjadi di bumi adalah kehendak Tuhan",
      "opsi_d": "Tuhan adalah pencipta langit dan bumi",
      "jawaban": "B",
      "rationale": "Inti dari Teori Kedaulatan Tuhan (Theokrasi) adalah keyakinan bahwa kekuasaan tertinggi dalam negara berasal dari Tuhan."
    },
    {
      "id": 139,
      "soal": "Ruang lingkup Pendidikan Kewarganegaraan terdiri atas 9 aspek. Berikut ini yang tidak termasuk aspek-aspek tersebut yaitu ….:",
      "opsi_a": "wawasan nusantara",
      "opsi_b": "demokrasi",
      "opsi_c": "ketahanan nasional",
      "opsi_d": "enterpreneurship",
      "jawaban": "D",
      "rationale": "Ruang lingkup PKn mencakup konsep-konsep kenegaraan (A, B, C) dan hubungan warga negara-negara. Entrepreneurship (Kewirausahaan) (D) adalah mata kuliah yang berbeda, meskipun dapat didukung oleh nilai-nilai PKn."
    },
    {
      "id": 140,
      "soal": "Pengertian konstitusi dalam arti sempit sama dengan ...:",
      "opsi_a": "UU",
      "opsi_b": "UUD",
      "opsi_c": "hukum",
      "opsi_d": "konvensi",
      "jawaban": "B",
      "rationale": "Dalam arti sempit, konstitusi merujuk pada naskah tertulis yang menjadi hukum dasar tertinggi negara (Undang-Undang Dasar/UUD). Dalam arti luas, konstitusi mencakup hukum dasar tertulis dan tidak tertulis (konvensi)."
    },
    {
      "id": 141,
      "soal": "Berikut kondisi masyarakat ketika suatu negara berfungsi dengan baik, kecuali ….:",
      "opsi_a": "kesejahteraan umum merata",
      "opsi_b": "bencana alam terjadi di mana-mana",
      "opsi_c": "keamanan dan ketertiban terwujud",
      "opsi_d": "serangan dari luar dapat diantisipasi",
      "jawaban": "B",
      "rationale": "Fungsi negara adalah mewujudkan kesejahteraan (A), ketertiban/keamanan (C), dan pertahanan/antisipasi serangan (D). Bencana alam (B) adalah faktor alamiah yang tidak secara langsung mencerminkan fungsi negara yang baik."
    },
    {
      "id": 142,
      "soal": "Membantu mahasiswa memantapkan kepribadiannya agar secara konsisten mampu mewujudkan nilai-nilai dasar Pancasila, rasa kebangsaan dan cinta tanah air dalam menguasai menerapkan dan mengembangkan ilmu pengetahuan, teknologi dan seni dengan rasa tanggungjawab dan bermoral, merupakan …. Pendidikan Kewarganegaraan.:",
      "opsi_a": "visi",
      "opsi_b": "moto",
      "opsi_c": "misi",
      "opsi_d": "amanat",
      "jawaban": "C",
      "rationale": "Misi adalah penjabaran operasional dari visi, yaitu langkah-langkah yang dilakukan untuk mencapai tujuan. Pernyataan ini adalah perwujudan praktis PKn untuk membentuk kepribadian mahasiswa."
    },
    {
      "id": 143,
      "soal": "Berikut ini yang merupakan alasan otonomi daerah diterapkan adalah ….:",
      "opsi_a": "banyaknya korupsi yang terjadi di Indonesia baik di tingkat pusat maupun daerah",
      "opsi_b": "masyarakat kurang puas dengan kebijakan pemerintah pusat",
      "opsi_c": "pemerintahan yang tidak terintegrasi dapat membawa pemerataan pembangunan sampai ke wilayah terluar Indonesia",
      "opsi_d": "pemerintahan yang sentralistik tidak dapat membawa pemerataan pembangunan sampai ke wilayah-wilayah terluar Indonesia",
      "jawaban": "D",
      "rationale": "Otonomi daerah diterapkan karena sistem sentralistik (terpusat) di masa lalu terbukti sulit menjangkau dan tidak efektif dalam mewujudkan pemerataan pembangunan dan kesejahteraan di seluruh wilayah Indonesia (D)."
    },
    {
      "id": 144,
      "soal": "Ada dua istilah asing yang sangat terkait dengan pemerintahan yaitu governance dan government. Perbedaan dari dua istilah itu adalah ….:",
      "opsi_a": "istilah government memiliki cakupan yang jauh lebih sempit dibandingkan dengan istilah governance",
      "opsi_b": "istilah government memiliki cakupan yang jauh lebih luas dibandingkan dengan istilah governance",
      "opsi_c": "istilah government merujuk pada lembaga legislatif, sedangkan governance merujuk pada lembaga eksekutif",
      "opsi_d": "istilah government berasal dari bahasa yang berbeda dengan governance",
      "jawaban": "A",
      "rationale": "Government (pemerintah) hanya merujuk pada lembaga atau aktor (eksekutif). Governance (tata kelola) memiliki cakupan yang lebih luas, melibatkan pemerintah, sektor swasta, dan masyarakat sipil, sehingga government (A) cakupannya lebih sempit."
    },
    {
      "id": 145,
      "soal": "Menurut Undang-Undang No 20 tahun 2003 disebutkan bahwa Pendidikan Kewarganegaraan dimaksudkan untuk membentuk peserta didik menjadi manusia yang memiliki ....:",
      "opsi_a": "rasa bersyukur dan berjuang",
      "opsi_b": "rasa kebangsaan dan cinta tanah air",
      "opsi_c": "rasa kebangsaan dan kenegaraan",
      "opsi_d": "rasa bersyukur dan toleransi",
      "jawaban": "B",
      "rationale": "Tujuan PKn (UU Sisdiknas No. 20/2003) adalah membentuk warga negara yang memiliki rasa kebangsaan dan cinta tanah air, serta menjadi warga negara yang demokratis dan bertanggung jawab."
    },
    {
      "id": 146,
      "soal": "Yang termasuk di dalam azas umum otonomi daerah adalah ….:",
      "opsi_a": "kejujuran",
      "opsi_b": "keadilan",
      "opsi_c": "keterbukaan",
      "opsi_d": "dekonsentralisasi",
      "jawaban": "C",
      "rationale": "Azas-azas umum penyelenggaraan negara dan otonomi daerah meliputi kepastian hukum, tertib penyelenggaraan negara, kepentingan umum, keterbukaan (transparansi) (C), proporsionalitas, profesionalitas, akuntabilitas, efisiensi, dan efektivitas."
    },
    {
      "id": 147,
      "soal": "Pendidikan Kewarganegaraan memiliki kompetansi dasar dan wajib bagi mahasiswa. Berikut ini yang termasuk kompetensi wajibnya, kecuali….:",
      "opsi_a": "normatif",
      "opsi_b": "etis",
      "opsi_c": "estetis",
      "opsi_d": "dinamis",
      "jawaban": "D",
      "rationale": "Kompetensi wajib yang diharapkan dalam PKn meliputi aspek normatif (hukum/aturan), etis (moral/etika), dan estetis (penghargaan seni/budaya). Dinamis (D) adalah sifat/karakter, bukan kompetensi dasar wajib yang diukur."
    },
    {
      "id": 148,
      "soal": "Eksistensi dan urgensi Pendidikan Kewarganegaraan menjadi wahana pendidikan nilai, moral, dan pendidikan budi pekerti, sehingga dapat menjadi sarana transformasi pendidikan karakter untuk menumbuh kembangkan rasa naionalisme, kesadaran berbangsa dan bernegara. Hal ini merupakan pengertian Pendidikan Kewarganegaarn secara filsafat dilihat dari prespektif ….:",
      "opsi_a": "epistimologi",
      "opsi_b": "ontologi",
      "opsi_c": "metodologi",
      "opsi_d": "aksiologi",
      "jawaban": "D",
      "rationale": "Fokus pada nilai, moral, budi pekerti, dan manfaat (sebagai wahana pendidikan karakter) adalah kajian dari Aksiologi, yaitu cabang filsafat yang membahas manfaat atau nilai guna ilmu."
    },
    {
      "id": 149,
      "soal": "Salah satu kriteria dalam tata kelola pemerintahan yang baik adalah partisipasi, artinya:",
      "opsi_a": "tata kelola pemerintahan yang baik juga ditentukan oleh seberapa cepat pemerintah merespon berbagai persoalan yang muncul di masyarakat",
      "opsi_b": "rakyat memiliki suara dalam pengambilan keputusan baik secara langsung maupun tidak langsung",
      "opsi_c": "tata kelola yang baik harus mampu menjamin transparansi di hampir semua bidang yang terkait dengan pengelolaan informasi",
      "opsi_d": "negara adalah entitas kolektif yang terdiri atas berbagai macam golongan dan kepentingan",
      "jawaban": "B",
      "rationale": "Partisipasi adalah prinsip Good Governance yang menjamin bahwa semua warga negara memiliki kesempatan untuk menyalurkan suara atau pandangan mereka dalam proses pengambilan keputusan, baik secara langsung (misalnya referendum) maupun tidak langsung (melalui perwakilan)."
    },
    {
      "id": 150,
      "soal": "Tujuan dari konstitusi adalah untuk ….:",
      "opsi_a": "menciptakan kesatuan dalam keberagaman",
      "opsi_b": "membatasi kekuasaan dari penguasa dan mengatur jalannya penyelenggaraan negara",
      "opsi_c": "memperkuat pertahanan dan keamanan negara",
      "opsi_d": "melindungi kebudayaan nasional",
      "jawaban": "B",
      "rationale": "Tujuan utama konstitusi adalah membatasi kewenangan penguasa (agar tidak menjadi tirani) dan menyediakan kerangka kerja dasar (aturan main) bagi penyelenggaraan kekuasaan negara."
    }
];

// =========================================================================================
// 2. LOGIKA PROGRAM UNTUK FEEDBACK INSTAN
// =========================================================================================

let currentQuestionIndex = 0;
let correctCount = 0;
// Menyimpan jawaban pengguna: {questionId: 'A', ...}
let userAnswers = {}; 
// Menyimpan status soal yang sudah dijawab: {questionId: true, ...}
let answeredQuestions = {};

const totalQuestions = dataSoal.length;
const quizContainer = document.getElementById('quiz-container');
const questionArea = document.getElementById('question-area');
const nextBtn = document.getElementById('next-btn');
const feedbackArea = document.getElementById('feedback-area');
const scoreDisplay = document.getElementById('correct-count');
const nextBtnText = document.querySelector('#navigation-area button');


// Fungsi untuk memuat dan menampilkan soal
function loadQuestion(index) {
    if (index >= totalQuestions) {
        showFinalResult();
        return;
    }

    currentQuestionIndex = index;
    feedbackArea.style.display = 'none'; // Sembunyikan feedback
    feedbackArea.innerHTML = ''; 

    const question = dataSoal[index];

    const options = [
        { label: 'A', text: question.opsi_a },
        { label: 'B', text: question.opsi_b },
        { label: 'C', text: question.opsi_c },
        { label: 'D', text: question.opsi_d }
    ];

    let optionsHtml = '';
    options.forEach(opt => {
        const isChecked = userAnswers[question.id] === opt.label ? 'checked' : '';
        const isDisabled = answeredQuestions[question.id] ? 'disabled' : '';
        const customClass = answeredQuestions[question.id] ? 'option-answered' : '';
        
        optionsHtml += `
            <input type="radio" id="q${question.id}_${opt.label}" name="q${question.id}" value="${opt.label}" ${isChecked} ${isDisabled}
                   onclick="handleAnswer(${question.id}, '${opt.label}')">
            <label for="q${question.id}_${opt.label}" class="option-label ${customClass}" id="label_q${question.id}_${opt.label}">
                <strong>${opt.label}.</strong> ${opt.text}
            </label>
        `;
    });

    questionArea.innerHTML = `
        <h3 class="question-number">Soal ${index + 1} dari ${totalQuestions}</h3>
        <p class="question-text">${question.soal}</p>
        <div class="options-container">
            ${optionsHtml}
        </div>
    `;
    
    // Update tombol next
    nextBtnText.textContent = `Soal Selanjutnya (${index + 1}/${totalQuestions})`;
    nextBtn.disabled = !answeredQuestions[question.id]; // Nonaktifkan jika belum dijawab

    // Jika sudah dijawab, tampilkan kembali feedback dan highlight
    if (answeredQuestions[question.id]) {
        showFeedbackAndHighlight(question, userAnswers[question.id]);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fungsi untuk mencatat jawaban, memberikan feedback, dan highlight
function handleAnswer(questionId, selectedOption) {
    if (answeredQuestions[questionId]) return; // Cegah double-click
    
    userAnswers[questionId] = selectedOption;
    answeredQuestions[questionId] = true;
    const question = dataSoal.find(q => q.id === questionId);

    // 1. Cek Jawaban dan Hitung Skor
    const isCorrect = selectedOption === question.jawaban;
    if (isCorrect) {
        correctCount++;
    }
    scoreDisplay.textContent = correctCount;

    // 2. Tampilkan Feedback dan Highlight
    showFeedbackAndHighlight(question, selectedOption);

    // 3. Nonaktifkan semua radio button untuk soal ini
    document.getElementsByName(`q${questionId}`).forEach(radio => {
        radio.disabled = true;
    });

    // 4. Aktifkan tombol 'Selanjutnya'
    nextBtn.disabled = false;
    
    // Update tombol next text
    nextBtnText.textContent = `Soal Selanjutnya (${currentQuestionIndex + 1}/${totalQuestions})`;
}

function showFeedbackAndHighlight(question, selectedOption) {
    const isCorrect = selectedOption === question.jawaban;
    
    // Tampilkan pesan Benar/Salah
    feedbackArea.style.display = 'block';
    feedbackArea.className = isCorrect ? 'feedback-area feedback-correct' : 'feedback-area feedback-incorrect';
    
    const feedbackTitle = isCorrect ? 'Selamat, Jawaban Anda Benar!' : 'Maaf, Jawaban Anda Salah.';
    
    feedbackArea.innerHTML = `
        <h3>${feedbackTitle}</h3>
        <p>Jawaban yang Benar adalah <strong>${question.jawaban}</strong>.</p>
        <h4>Pembahasan:</h4>
        <p>${question.rationale}</p>
    `;

    // Highlight Opsi Jawaban
    const correctLabel = document.getElementById(`label_q${question.id}_${question.jawaban}`);
    
    // Hilangkan highlight sebelumnya (jika ada) dan tambahkan class answered
    document.getElementsByName(`q${question.id}`).forEach(radio => {
        const label = document.getElementById(`label_q${question.id}_${radio.value}`);
        label.classList.add('option-answered'); // Semua opsi sudah tidak bisa diklik
    });

    // Highlight jawaban yang benar (selalu hijau)
    if (correctLabel) {
        correctLabel.classList.add('correct-option');
    }
    
    // Jika salah, highlight jawaban pengguna (merah)
    if (!isCorrect) {
        const incorrectLabel = document.getElementById(`label_q${question.id}_${selectedOption}`);
        if (incorrectLabel) {
            incorrectLabel.classList.add('incorrect-option');
        }
    }
}


// Fungsi pindah ke soal berikutnya
function nextQuestion() {
    if (currentQuestionIndex < totalQuestions) {
        loadQuestion(currentQuestionIndex + 1);
    }
}

// Fungsi untuk menampilkan hasil akhir
function showFinalResult() {
    quizContainer.style.display = 'none';
    const resultArea = document.getElementById('final-result-area');
    resultArea.style.display = 'block';

    document.getElementById('total-questions').textContent = totalQuestions;
    document.getElementById('final-correct-answers').textContent = correctCount;
    document.getElementById('final-score').textContent = correctCount; // Skor = Jumlah Benar

    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Inisialisasi: Muat soal pertama saat halaman selesai dimuat
window.onload = function() {
    if (totalQuestions > 0) {
        loadQuestion(currentQuestionIndex);
    }
};