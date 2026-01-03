const WEB_APP = "https://script.google.com/macros/s/AKfycbzB3RhRKmCmMduSSHNTsa0kP7e8ZodHUyH_PSSAGXqfCpeVkn7Bm9QtlPl8--vPEHsO/exec";

let soalIndex = 0;
let benar = 0;
let salah = 0;
let jawabanDipilih = null;

/* ===============================
   BANK SOAL (20 – URUT – FIX)
================================ */
const soalData = [
  {
    soal: "Indonesia memiliki tingkat kerawanan bencana tinggi karena kondisi tektoniknya. Faktor utama yang memengaruhi kondisi tersebut adalah …",
    opsi: {
      A: "Intensitas hujan tahunan yang tinggi",
      B: "Banyaknya wilayah dataran rendah",
      C: "Pertemuan tiga lempeng aktif yang terus bergerak",
      D: "Persebaran tanah aluvial yang luas"
    },
    kunci: "C"
  },
  {
    soal: "Aktivitas vulkanik Indonesia berkaitan erat dengan jalur Ring of Fire. Dampak tidak langsung dari kondisi tersebut adalah …",
    opsi: {
      A: "Tanah vulkanik yang subur bagi pertanian",
      B: "Penurunan curah hujan musiman",
      C: "Berkurangnya aktivitas tektonik",
      D: "Hilangnya potensi panas bumi"
    },
    kunci: "A"
  },
  {
    soal: "Gempa bumi di wilayah subduksi lebih berbahaya dibandingkan gempa lainnya karena …",
    opsi: {
      A: "Terjadi secara perlahan tanpa getaran",
      B: "Tidak berdampak pada wilayah daratan",
      C: "Terjadi jauh di dalam kerak bumi",
      D: "Berpotensi memicu tsunami besar"
    },
    kunci: "D"
  },
  {
    soal: "Gempa megathrust sulit diprediksi karena …",
    opsi: {
      A: "Selalu terjadi pada waktu tertentu",
      B: "Proses akumulasi energi berlangsung lama dan tidak tampak",
      C: "Dipicu oleh kondisi cuaca ekstrem",
      D: "Terjadi hanya di wilayah pegunungan"
    },
    kunci: "B"
  },
  {
    soal: "Daerah dengan tanah lapuk dan kemiringan lereng tinggi sangat rentan terhadap …",
    opsi: {
      A: "Kekeringan berkepanjangan",
      B: "Penurunan muka air tanah",
      C: "Longsor setelah gempa kuat",
      D: "Banjir rob musiman"
    },
    kunci: "C"
  },
  {
    soal: "Tsunami lebih berbahaya di wilayah pantai landai karena …",
    opsi: {
      A: "Gelombang dapat melaju jauh ke daratan",
      B: "Pantulan gelombang lebih kecil",
      C: "Kecepatan angin lebih tinggi",
      D: "Kedalaman laut yang dangkal"
    },
    kunci: "A"
  },
  {
    soal: "Salah satu tanda awal terjadinya tsunami akibat gempa megathrust adalah …",
    opsi: {
      A: "Munculnya kabut tebal di laut",
      B: "Air laut surut secara tiba-tiba",
      C: "Perubahan warna air laut",
      D: "Angin laut berhenti mendadak"
    },
    kunci: "B"
  },
  {
    soal: "Kerusakan ekosistem pasca-tsunami sering diperparah oleh …",
    opsi: {
      A: "Penurunan suhu udara ekstrem",
      B: "Bertambahnya vegetasi pantai",
      C: "Perubahan arus laut lokal",
      D: "Kontaminasi lumpur dan material bangunan"
    },
    kunci: "D"
  },
  {
    soal: "Hilangnya sabuk mangrove di wilayah pesisir dapat menyebabkan …",
    opsi: {
      A: "Peningkatan abrasi dan gelombang besar",
      B: "Stabilitas garis pantai meningkat",
      C: "Kualitas air laut membaik",
      D: "Penurunan kecepatan arus laut"
    },
    kunci: "A"
  },
  {
    soal: "Salah satu dampak sosial jangka panjang dari gempa bumi besar adalah …",
    opsi: {
      A: "Bertambahnya lahan pertanian",
      B: "Munculnya sumber daya alam baru",
      C: "Perubahan struktur sosial dan ekonomi masyarakat",
      D: "Stabilnya harga kebutuhan pokok"
    },
    kunci: "C"
  },
  {
    soal: "Contoh mitigasi struktural dalam penanggulangan bencana adalah …",
    opsi: {
      A: "Sosialisasi kesiapsiagaan bencana",
      B: "Simulasi evakuasi masyarakat",
      C: "Penyuluhan tanda-tanda bencana",
      D: "Pembangunan tanggul dan breakwater"
    },
    kunci: "D"
  },
  {
    soal: "Mitigasi non-struktural bertujuan utama untuk …",
    opsi: {
      A: "Membangun infrastruktur tahan gempa",
      B: "Meningkatkan kesiapsiagaan melalui edukasi dan regulasi",
      C: "Mengubah kondisi alam wilayah rawan",
      D: "Menahan pergerakan lempeng bumi"
    },
    kunci: "B"
  },
  {
    soal: "Sistem peringatan dini bencana dapat gagal berfungsi apabila …",
    opsi: {
      A: "Informasi cepat disebarkan",
      B: "Masyarakat memahami prosedur evakuasi",
      C: "Alat sensor rusak dan data tidak terbaca",
      D: "Koordinasi antarlembaga berjalan baik"
    },
    kunci: "C"
  },
  {
    soal: "Tantangan utama penerapan teknologi kebencanaan di daerah terpencil adalah …",
    opsi: {
      A: "Keterbatasan jaringan komunikasi",
      B: "Tingginya kesadaran masyarakat",
      C: "Banyaknya relawan terlatih",
      D: "Risiko bencana yang rendah"
    },
    kunci: "A"
  },
  {
    soal: "Informasi hoaks saat bencana dapat meningkatkan jumlah korban karena …",
    opsi: {
      A: "Membuat masyarakat lebih waspada",
      B: "Menunda proses rehabilitasi",
      C: "Mengurangi peran pemerintah",
      D: "Menimbulkan kepanikan dan salah arah evakuasi"
    },
    kunci: "D"
  },
  {
    soal: "Mangrove efektif dalam mitigasi bencana pesisir karena …",
    opsi: {
      A: "Tinggi pohonnya seragam",
      B: "Akarnya menahan energi gelombang dan sedimen",
      C: "Mempercepat arus laut",
      D: "Menghasilkan air tawar"
    },
    kunci: "B"
  },
  {
    soal: "Jika gempa kuat terjadi dan listrik padam total, tindakan paling tepat adalah …",
    opsi: {
      A: "Segera menuju area terbuka atau titik kumpul",
      B: "Mengamankan barang berharga",
      C: "Menunggu instruksi di dalam rumah",
      D: "Memeriksa instalasi listrik"
    },
    kunci: "A"
  },
  {
    soal: "Bangunan yang mengalami retakan pasca-gempa harus dihindari karena …",
    opsi: {
      A: "Menjadi tempat hewan liar",
      B: "Menghambat akses bantuan",
      C: "Berpotensi runtuh akibat gempa susulan",
      D: "Tidak memenuhi standar estetika"
    },
    kunci: "C"
  },
  {
    soal: "Pendidikan kebencanaan penting diberikan kepada masyarakat karena …",
    opsi: {
      A: "Menghilangkan potensi bencana alam",
      B: "Membentuk perilaku responsif dan tidak panik",
      C: "Menjamin keselamatan seluruh warga",
      D: "Melarang tinggal di wilayah rawan"
    },
    kunci: "B"
  },
  {
    soal: "Jika sirine tsunami berbunyi setelah gempa besar, tindakan paling tepat adalah …",
    opsi: {
      A: "Mengamati situasi sekitar",
      B: "Menunggu informasi lanjutan",
      C: "Menghubungi keluarga terlebih dahulu",
      D: "Segera menuju tempat tertinggi"
    },
    kunci: "D"
  }
];

/* ===============================
   LOGIKA QUIZ
================================ */
function tampilSoal() {
  const s = soalData[soalIndex];
  document.getElementById("progress").innerText =
    `Soal ${soalIndex + 1} / ${soalData.length}`;
  document.getElementById("soal").innerText = s.soal;

  const opsiDiv = document.getElementById("opsi");
  opsiDiv.innerHTML = "";
  jawabanDipilih = null;

  ["A","B","C","D"].forEach(k => {
    const div = document.createElement("div");
    div.className = "opsi";
    div.innerHTML = `<strong>${k}.</strong> ${s.opsi[k]}`;
    div.onclick = () => {
      jawabanDipilih = k;
      document.querySelectorAll(".opsi").forEach(o => o.classList.remove("aktif"));
      div.classList.add("aktif");
    };
    opsiDiv.appendChild(div);
  });
}

function next() {
  if (!jawabanDipilih) return alert("Pilih jawaban!");
  if (jawabanDipilih === soalData[soalIndex].kunci) benar++;
  else salah++;

  soalIndex++;
  soalIndex < soalData.length ? tampilSoal() : kirim();
}
