// =========================================================================================
// 1. DATA SOAL (DISIMPAN SEBAGAI VARIABEL JAVASCRIPT)
// Tambahkan field 'rationale' (Pembahasan) untuk umpan balik instan.
// =========================================================================================

const dataSoal = [
   {
  "id": 101,
  "soal": "Komponen dasar komputer yang berfungsi untuk melakukan operasi perhitungan seperti penjumlahan, pengurangan, pembagian, dan perkalian adalah....",
  "opsi_a": "aritmatika logika ",
  "opsi_b": "pengendali ",
  "opsi_c": "input",
  "opsi_d": "pengolah",
  "jawaban": "A",
  "rationale": "Arithmetic Logic Unit (ALU) atau Unit Aritmatika Logika adalah sirkuit digital di dalam prosesor yang khusus menjalankan operasi perhitungan aritmatika dasar dan operasi logika."
},
{
  "id": 161,
  "soal": "Keunggulan dari teknik berorientasi obyek adalah....",
  "opsi_a": "ukuran aplikasi kecil",
  "opsi_b": "waktu eksekusi cepat",
  "opsi_c": "dapat digunakan kembali",
  "opsi_d": "didukung oleh semua bahasa program",
  "jawaban": "C",
  "rationale": "Teknik berorientasi obyek memungkinkan komponen kode yang telah dibuat untuk digunakan kembali (reusability) pada bagian lain atau proyek lain, sehingga meningkatkan efisiensi pengembangan."
},
{
  "id": 162,
  "soal": "Bagian personalia memproses data kehadiran karyawan setiap bulan untuk perhitungan upah. Hal ini adalah contoh pemrosesan data secara....",
  "opsi_a": "online",
  "opsi_b": "realtime",
  "opsi_c": "batch",
  "opsi_d": "distributed",
  "jawaban": "C",
  "rationale": "Pemrosesan batch adalah teknik di mana data dikumpulkan dalam kelompok (batch) selama periode waktu tertentu, kemudian diproses secara bersamaan. Perhitungan upah bulanan berdasarkan akumulasi kehadiran adalah contoh klasik dari sistem ini."
},
{
  "id": 163,
  "soal": "Sistem perangkat lunak yang mengintegrasikan dan mengelola berbagai proses bisnis dalam sebuah perusahaan atau organisasi adalah....",
  "opsi_a": "groupware",
  "opsi_b": "payroll",
  "opsi_c": "enterprise resource planning",
  "opsi_d": "order entry",
  "jawaban": "C",
  "rationale": "Enterprise Resource Planning (ERP) adalah sistem terpadu yang menyatukan berbagai fungsi bisnis seperti akuntansi, SDM, manufaktur, dan penjualan ke dalam satu sistem informasi yang terintegrasi."
},
{
  "id": 164,
  "soal": "Ketrampilan teknis informasi dalam mengenali ancaman, dan menerapkan perlindungan adalah....",
  "opsi_a": "pemrograman",
  "opsi_b": "analisis data",
  "opsi_c": "keamanan siber",
  "opsi_d": "jaringan komputer",
  "jawaban": "C",
  "rationale": "Keamanan siber adalah disiplin ilmu yang khusus menangani deteksi ancaman digital dan penerapan langkah-langkah perlindungan untuk mengamankan sistem serta data."
},
{
  "id": 165,
  "soal": "Nomor induk kependudukan (NIK) antara satu warga dengan warga lainnya berbeda, hal tersebut dikenal dengan istilah....",
  "opsi_a": "identifier",
  "opsi_b": "naming",
  "opsi_c": "definition",
  "opsi_d": "integrity rule",
  "jawaban": "A",
  "rationale": "Identifier adalah identitas unik yang digunakan untuk membedakan satu record data dengan record lainnya dalam sebuah database, sehingga setiap entitas dapat diidentifikasi secara spesifik."
},
{
  "id": 166,
  "soal": "Berikut ini pernyataan yang tepat mengenai pemodelan data adalah....",
  "opsi_a": "pemodelan data terdiri dari 3 pendekatan",
  "opsi_b": "pendekatan pemodelan data top down disebut integrasi tampilan",
  "opsi_c": "pendekatan pemodelan data side by side adalah pemodelan data terbaik",
  "opsi_d": "pendekatan pemodelan data top down disebut pemodelan perusahaan",
  "jawaban": "D",
  "rationale": "Pendekatan top-down dalam pemodelan data dimulai dari kebutuhan informasi organisasi secara global atau menyeluruh, sehingga pendekatan ini dikenal sebagai enterprise modeling atau pemodelan perusahaan."
},
{
  "id": 167,
  "soal": "Inisiatif yang harus dilakukan dalam perumusan akhir rencana sistem informasi adalah....",
  "opsi_a": "merumuskan proses standarisasi pengembangan aplikasi baik tertulis atau pun tidak tertulis",
  "opsi_b": "menyusun penambahan backlog aplikasi",
  "opsi_c": "menyusun jadwal terstruktur",
  "opsi_d": "menambah layanan teknologi informasi",
  "jawaban": "A",
  "rationale": "Dalam perumusan akhir rencana sistem informasi, standarisasi sangat krusial untuk memastikan bahwa seluruh pengembangan aplikasi ke depan memiliki kualitas, keamanan, dan kemudahan integrasi yang seragam di seluruh organisasi."
},
{
  "id": 168,
  "soal": "Komputer yang dirancang untuk menangani masalah intensif numerik dan digunakan oleh ilmuwan penelitian seperti fisikawan adalah....",
  "opsi_a": "minikomputer",
  "opsi_b": "superkomputer",
  "opsi_c": "mainframe komputer",
  "opsi_d": "mikrokomputer",
  "jawaban": "B",
  "rationale": "Superkomputer memiliki daya pemrosesan yang sangat tinggi yang memungkinkan penyelesaian perhitungan matematis kompleks (intensif numerik) yang dibutuhkan dalam penelitian ilmiah tingkat lanjut."
},
{
  "id": 169,
  "soal": "Informasi yang diperlukan untuk proses bisnis penting tidak dapat diakses atau ambigu karena data tidak lengkap, hal ini adalah contoh konsekuensi dari sebuah proyek pengembangan sistem tanpa manajemen yang tepat yaitu....",
  "opsi_a": "biaya melebihi anggaran",
  "opsi_b": "slip waktu yang tidak terduga",
  "opsi_c": "kegagalan untuk memperoleh manfaat",
  "opsi_d": "performa teknis kurang dari yang diharapkan",
  "jawaban": "C",
  "rationale": "Sistem informasi dikembangkan untuk memberikan manfaat strategis bagi bisnis. Jika data yang dihasilkan cacat, tidak lengkap, atau ambigu, maka tujuan utama sistem tersebut tidak tercapai, yang berarti organisasi gagal memperoleh manfaat dari investasi pengembangan tersebut."
},
{
  "id": 170,
  "soal": "Perbedaan bagan Gantt dan bagan PERT dalam mendokumentasikan rencana proyek adalah....",
  "opsi_a": "bagan Gantt fokus pada durasi dan urutan tugas sedangkan PERT fokus pada ketergantungan dan variasi waktu",
  "opsi_b": "bagan Gantt dalam bentuk simpul dan anak panah sedangkan PERT dalam bentuk batang horizontal",
  "opsi_c": "Gantt mempertimbangkan variasi waktu sedangkan PERT tidak mempertimbangkan variasi waktu",
  "opsi_d": "bagan Gantt lebih sulit dipahami daripada PERT",
  "jawaban": "A",
  "rationale": "Gantt Chart lebih menekankan pada jadwal kronologis dan durasi aktivitas, sementara PERT Chart dirancang untuk menunjukkan hubungan ketergantungan antar tugas dan mengelola ketidakpastian durasi melalui estimasi waktu yang bervariasi."
},
{
  "id": 171,
  "soal": "Perangkat router dan switch mutlak dibutuhkan pada jenis topologi....",
  "opsi_a": "mesh",
  "opsi_b": "star",
  "opsi_c": "hybrid",
  "opsi_d": "bus",
  "jawaban": "B",
  "rationale": "Topologi star atau bintang menggunakan hub, switch, atau router sebagai node pusat (central node) yang menghubungkan seluruh komputer dalam jaringan. Tanpa perangkat pusat tersebut, komunikasi antar node dalam topologi star tidak dapat berjalan."
},
{
  "id": 172,
  "soal": "Analis sistem terlatih yang berkolaborasi dengan para ahli untuk membuat semua pengetahuan yang diperlukan dalam suatu sistem pakar adalah....",
  "opsi_a": "insinyur data",
  "opsi_b": "insinyur pengetahuan",
  "opsi_c": "ilmuwan data",
  "opsi_d": "analis data",
  "jawaban": "B",
  "rationale": "Insinyur pengetahuan (Knowledge Engineer) bertugas untuk menjembatani antara pakar manusia dengan sistem komputer dengan cara mengumpulkan, mengorganisir, dan menerjemahkan pengetahuan pakar ke dalam pangkalan pengetahuan (knowledge base) sistem pakar."
},
{
  "id": 173,
  "soal": "Perbedaan proyek sistem yang dibeli dengan proses system development life cycle (SDLC) adalah....",
  "opsi_a": "Hasil dari sistem yang dibeli lebih kompatibel dari pada SDLC",
  "opsi_b": "SDLC mengembangkan sistem baru dari awal sedangkan sistem yang dibeli bertujuan untuk mengadopsi sistem yang sudah ada",
  "opsi_c": "sistem yang dibeli lebih mudah kustomisasi dari SDLC",
  "opsi_d": "SDLC lebih cepat dari pada sistem yang dibeli",
  "jawaban": "B",
  "rationale": "SDLC (System Development Life Cycle) adalah proses pengembangan perangkat lunak secara bertahap mulai dari nol untuk kebutuhan spesifik, sedangkan sistem yang dibeli merupakan solusi perangkat lunak yang sudah jadi dan dikembangkan oleh pihak ketiga."
},
{
  "id": 174,
  "soal": "Proses transisi yang tepat dimana sistem lama dan baru tidak dapat dilakukan secara bersamaan adalah strategi....",
  "opsi_a": "pilot",
  "opsi_b": "phasing",
  "opsi_c": "cutover",
  "opsi_d": "parallel",
  "jawaban": "C",
  "rationale": "Strategi cutover atau direct cutover adalah metode konversi di mana organisasi berhenti menggunakan sistem lama dan segera mulai menggunakan sistem baru secara langsung. Hal ini dilakukan terutama jika sistem lama dan baru tidak kompatibel untuk dijalankan secara bersamaan."
},
{
  "id": 175,
  "soal": "Apa permasalahan atau hambatan dari group support system....",
  "opsi_a": "pencatatan dilakukan secara manual",
  "opsi_b": "komunikasi tidak dapat dilakukan secara paralel",
  "opsi_c": "dominasi pada beberapa anggota",
  "opsi_d": "pertemuan harus secara tatap muka",
  "jawaban": "C",
  "rationale": "Meskipun GSS memiliki fitur anonimitas, hambatan psikologis seperti dominasi oleh individu tertentu dalam kelompok tetap menjadi tantangan dalam mencapai konsensus yang objektif."
},
{
  "id": 176,
  "soal": "Berikut ini yang merupakan layanan komunikasi real time adalah....",
  "opsi_a": "fax",
  "opsi_b": "e-mail",
  "opsi_c": "voicemail",
  "opsi_d": "whatsapp CALL",
  "jawaban": "D",
  "rationale": "Layanan komunikasi real-time memerlukan kedua pihak untuk hadir secara bersamaan dalam pertukaran data. Whatsapp Call memungkinkan interaksi suara langsung, berbeda dengan email atau voicemail yang bersifat tertunda (asinkron)."
},
{
  "id": 177,
  "soal": "Ukuran utama kesuksesan promosi di era e-commerce milenial adalah....",
  "opsi_a": "jumlah penayangan iklan",
  "opsi_b": "jumlah penonton",
  "opsi_c": "jangkauan yang luas",
  "opsi_d": "keterlibatan konsumen",
  "jawaban": "D",
  "rationale": "Di era e-commerce milenial, keterlibatan konsumen (engagement) seperti interaksi sosial dan ulasan jauh lebih menentukan keputusan pembelian dibandingkan sekadar paparan iklan secara pasif."
},
{
  "id": 178,
  "soal": "Dalam Services Level Agreement (SLA) penjelasan layanan yang disediakan, ruang lingkup dan batasan terdapat pada bagian....",
  "opsi_a": "prosedur eskalasi",
  "opsi_b": "definisi",
  "opsi_c": "informasi",
  "opsi_d": "peninjauan",
  "jawaban": "B",
  "rationale": "Bagian definisi layanan dalam SLA berfungsi untuk menguraikan secara detail jenis layanan, cakupan operasional, serta batasan-batasan tanggung jawab penyedia layanan agar terdapat kesepahaman dengan pelanggan."
},
{
  "id": 179,
  "soal": "Dampak dari teknologi informasi adalah penyederhanaan dan pembenahan prosedur operasi standar (SOP) untuk meningkatkan efisiensi dan efektivitas. Hal ini dikenal dengan....",
  "opsi_a": "otomatisasi",
  "opsi_b": "modernisasi",
  "opsi_c": "rasionalisasi",
  "opsi_d": "digitalisasi",
  "jawaban": "C",
  "rationale": "Rasionalisasi prosedur adalah tahap penyelarasan SOP melalui penyederhanaan langkah-langkah kerja agar integrasi teknologi informasi dapat memberikan hasil yang optimal bagi efisiensi organisasi."
},
{
  "id": 180,
  "soal": "Keuntungan dari metodologi prototipe dalam pengembangan sistem dan aplikasi adalah....",
  "opsi_a": "memastikan kepuasan pelanggan",
  "opsi_b": "perencanaan dan penjadwalan yang efisien",
  "opsi_c": "manajemen risiko dan biaya yang lebih baik",
  "opsi_d": "pelacakan dan kontrol proyek yang lebih mudah",
  "jawaban": "A",
  "rationale": "Metodologi prototipe mengutamakan interaksi berulang dengan pengguna untuk mendapatkan feedback secara cepat, sehingga produk akhir yang dikembangkan benar-benar sesuai dengan ekspektasi dan kebutuhan pengguna (customer satisfaction)."
},
{
  "id": 181,
  "soal": "Keuntungan utama metodologi UAD (User Application Development) dalam pengembangan sistem adalah....",
  "opsi_a": "kualitas aplikasi sangat baik",
  "opsi_b": "keamanan data terjaga",
  "opsi_c": "resiko rendah ketika penggantian pengembang",
  "opsi_d": "pengguna tidak harus menjelaskan informasi pada analis yang tidak paham dengan konteks bisnis",
  "jawaban": "D",
  "rationale": "UAD memungkinkan end-user membangun sistemnya sendiri, sehingga meminimalisir kesenjangan komunikasi (communication gap) antara kebutuhan bisnis dan pemahaman teknis yang sering terjadi jika menggunakan analis dari luar."
},
{
  "id": 182,
  "soal": "Keberagaman sumber daya atau elemen yang dibutuhkan untuk menyelesaikan sebuah proyek adalah variasi....",
  "opsi_a": "input",
  "opsi_b": "output",
  "opsi_c": "tugas",
  "opsi_d": "spesialisasi",
  "jawaban": "A",
  "rationale": "Dalam manajemen proyek, semua sumber daya (manusia, biaya, material, data) yang diperlukan untuk memulai proses disebut sebagai input. Keberagaman dari elemen-elemen inilah yang disebut dengan variasi input."
},
{
  "id": 183,
  "soal": "Sumber daya dari lingkungan yang dikonsumsi atau dimanipulasi dalam sistem adalah....",
  "opsi_a": "boundary",
  "opsi_b": "component",
  "opsi_c": "environment",
  "opsi_d": "input",
  "jawaban": "D",
  "rationale": "Dalam teori sistem, input didefinisikan sebagai elemen atau sumber daya yang masuk ke dalam sistem dari lingkungan luar untuk diproses atau dikonsumsi guna menghasilkan output."
},
{
  "id": 184,
  "soal": "Pada siklus hidup pengembangan sistem informasi, proses instalasi dilakukan pada tahap....",
  "opsi_a": "perencanaan",
  "opsi_b": "konstruksi",
  "opsi_c": "implementasi",
  "opsi_d": "pengujian",
  "jawaban": "C",
  "rationale": "Tahap implementasi adalah fase di mana sistem yang telah dibangun dan diuji kemudian dipasang (instalasi) pada perangkat keras di lingkungan operasional yang sebenarnya agar dapat mulai digunakan oleh pengguna."
},
{
  "id": 185,
  "soal": "Serangan yang bertujuan untuk membuat sistem atau layanan menjadi tidak berfungsi, sehingga pengguna yang sah tidak dapat mengaksesnya adalah....",
  "opsi_a": "trojan horse",
  "opsi_b": "spoofing",
  "opsi_c": "logic bomb",
  "opsi_d": "denial of service attack",
  "jawaban": "D",
  "rationale": "Denial of Service (DoS) attack dirancang untuk melumpuhkan sumber daya sistem dengan membanjirinya dengan permintaan palsu, sehingga sistem tidak dapat melayani permintaan dari pengguna yang valid."
},
{
  "id": 186,
  "soal": "Sebelum memutuskan investasi infrastruktur, Gojek melihat pengeluaran investasi infrastruktur yang dikeluarkan oleh Grab. Hal ini merupakan strategi model kekuatan kompetitif....",
  "opsi_a": "strategi bisnis perusahaan pesaing",
  "opsi_b": "layanan perusahaan pesaing",
  "opsi_c": "investasi infrastruktur teknologi informasi perusahaan pesaing",
  "opsi_d": "kekuatan perusahaan pesaing",
  "jawaban": "C",
  "rationale": "Dalam model kekuatan kompetitif untuk infrastruktur TI, salah satu poin analisisnya adalah membandingkan pengeluaran investasi TI perusahaan dengan pesaing untuk menentukan tingkat daya saing teknologi."
},
{
  "id": 187,
  "soal": "Pemberian hadiah dalam hubungan bisnis bagi satu negara etis namun tidak etis di negara lain. Hal ini merupakan contoh etika terkait dengan....",
  "opsi_a": "budaya",
  "opsi_b": "moral",
  "opsi_c": "bisnis",
  "opsi_d": "hukum",
  "jawaban": "A",
  "rationale": "Perbedaan pandangan mengenai etis atau tidaknya pemberian hadiah antar negara disebabkan oleh perbedaan norma sosial dan tradisi yang berlaku di masing-masing wilayah, yang merupakan bagian dari konteks budaya."
},
{
  "id": 188,
  "soal": "Untuk kelangsungan bisnis terkait perlindungan data, maka perangkat tempat penyimpanan informasi penting perusahaan harus....",
  "opsi_a": "dikelola",
  "opsi_b": "dipantau",
  "opsi_c": "dievaluasi",
  "opsi_d": "dicadangkan",
  "jawaban": "D",
  "rationale": "Pencadangan (backup) adalah prosedur utama dalam menjaga kelangsungan bisnis untuk memastikan bahwa data tetap tersedia dan dapat dipulihkan kembali apabila terjadi kegagalan sistem, kerusakan perangkat, atau serangan siber."
},
{
  "id": 189,
  "soal": "Informasi yang berhubungan atau memiliki keterkaitan dengan masalah yang dihadapi dikenal dengan istilah....",
  "opsi_a": "akurat",
  "opsi_b": "tepat waktu",
  "opsi_c": "lengkap",
  "opsi_d": "relevan",
  "jawaban": "D",
  "rationale": "Relevansi adalah salah satu atribut utama kualitas informasi yang menunjukkan sejauh mana informasi tersebut berhubungan dengan kebutuhan atau masalah spesifik yang sedang ditangani oleh pengguna."
},
{
  "id": 190,
  "soal": "Tempat penyimpanan data secara virtual seperti google drive yang bisa diakses dari mana saja dengan syarat ada koneksi internet dikenal dengan teknologi....",
  "opsi_a": "hard drive",
  "opsi_b": "cloud computing",
  "opsi_c": "big data",
  "opsi_d": "server",
  "jawaban": "B",
  "rationale": "Cloud computing memungkinkan akses data secara on-demand melalui internet dari lokasi mana pun, menghilangkan keterbatasan penyimpanan fisik lokal seperti hard drive."
},
{
  "id": 191,
  "soal": "Informasi elektronik adalah....",
  "opsi_a": "data dalam bentuk digital, termasuk tulisan, suara, gambar, dan berbagai jenis data lainnya",
  "opsi_b": "pembelian melalui media digital",
  "opsi_c": "informasi yang disebar melalui internet",
  "opsi_d": "aktivitas menggunakan media digital",
  "jawaban": "A",
  "rationale": "Informasi elektronik mencakup segala bentuk data digital yang telah diolah, baik itu teks, suara, maupun gambar, yang dapat disimpan dan diproses oleh perangkat elektronik."
},
{
  "id": 192,
  "soal": "Memberikan informasi terkait produk dan merek serta akses pada pelanggan untuk memberikan kritik, saran, testimoni serta menjadikan masukan pelanggan sebagai value bagi perusahaan adalah strategi mempertahankan bisnis dengan mengembangkan....",
  "opsi_a": "connected customer",
  "opsi_b": "digital mindset",
  "opsi_c": "customer experience",
  "opsi_d": "disruptive",
  "jawaban": "A",
  "rationale": "Connected customer adalah strategi yang membangun komunikasi dua arah yang erat antara brand dan konsumen melalui platform digital, sehingga perusahaan dapat menyerap aspirasi pelanggan sebagai bagian dari nilai tambah bisnis."
},
{
  "id": 194,
  "soal": "Qubits dalam komputasi kuantum adalah partikel subatomik yang terdiri dari ....",
  "opsi_a": "proton dan elektron",
  "opsi_b": "proton dan foton",
  "opsi_c": "elektron dan foton",
  "opsi_d": "proton dan netron",
  "jawaban": "C",
  "rationale": "Dalam implementasi fisik komputer kuantum, elektron (melalui spin) dan foton (melalui polarisasi) adalah dua jenis partikel subatomik yang paling umum digunakan untuk membentuk qubit karena sifat mekanika kuantumnya yang relatif lebih mudah dimanipulasi."
},
{
  "id": 195,
  "soal": "Perbuatan membuka data diri seseorang dan membagikannya diruang publik tanpa persetujuan adalah contoh pelanggaran privasi yang dikenal dengan istilah....",
  "opsi_a": "spamming",
  "opsi_b": "doxing",
  "opsi_c": "stalking",
  "opsi_d": "phishing",
  "jawaban": "B",
  "rationale": "Doxing adalah praktik berbasis internet yang mengumpulkan informasi pribadi seseorang dan mempublikasikannya secara terbuka dengan niat jahat atau untuk mengintimidasi korban."
},
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
