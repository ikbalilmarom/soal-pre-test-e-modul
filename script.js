const WEB_APP = "https://script.google.com/macros/s/AKfycbzB3RhRKmCmMduSSHNTsa0kP7e8ZodHUyH_PSSAGXqfCpeVkn7Bm9QtlPl8--vPEHsO/exec";

let soalIndex = 0;
let benar = 0;
let salah = 0;
let jawabanDipilih = null;

// =====================
// DATA SOAL (URUT)
// =====================
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
  // 🔽 LANJUTKAN SEMUA SOAL ANDA SAMPAI 20 (STRUKTUR SAMA)
];

// =====================
// MULAI
// =====================
function mulai() {
  if (!nama.value || !kelas.value || !sekolah.value || !tanggal.value) {
    alert("Lengkapi identitas!");
    return;
  }

  document.getElementById("formAwal").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  tampilSoal();
}

// =====================
// TAMPIL SOAL
// =====================
function tampilSoal() {
  const s = soalData[soalIndex];

  document.getElementById("progress").innerText =
    `Soal ${soalIndex + 1} / ${soalData.length}`;
  document.getElementById("soal").innerText = s.soal;

  const opsiDiv = document.getElementById("opsi");
  opsiDiv.innerHTML = "";
  jawabanDipilih = null;

  for (const key of ["A", "B", "C", "D"]) {
    const div = document.createElemen
