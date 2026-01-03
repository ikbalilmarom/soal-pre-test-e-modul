/* ================== KONFIGURASI ================== */
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzB3RhRKmCmMduSSHNTsa0kP7e8ZodHUyH_PSSAGXqfCpeVkn7Bm9QtlPl8--vPEHsO/exec";

/* ================== DATA SOAL ================== */
const soalData = [
  {
    soal: "Indonesia memiliki tingkat kerawanan bencana tinggi karena kondisi tektoniknya. Faktor utama yang memengaruhi kondisi tersebut adalah …",
    A: "Intensitas hujan tahunan yang tinggi",
    B: "Banyaknya wilayah dataran rendah",
    C: "Pertemuan tiga lempeng aktif yang terus bergerak",
    D: "Persebaran tanah aluvial yang luas",
    kunci: "C"
  },
  {
    soal: "Aktivitas vulkanik Indonesia berkaitan erat dengan jalur Ring of Fire. Dampak tidak langsung dari kondisi tersebut adalah …",
    A: "Tanah vulkanik yang subur bagi pertanian",
    B: "Penurunan curah hujan musiman",
    C: "Berkurangnya aktivitas tektonik",
    D: "Hilangnya potensi panas bumi",
    kunci: "A"
  },
  {
    soal: "Gempa bumi di wilayah subduksi lebih berbahaya dibandingkan gempa lainnya karena …",
    A: "Terjadi secara perlahan tanpa getaran",
    B: "Tidak berdampak pada wilayah daratan",
    C: "Terjadi jauh di dalam kerak bumi",
    D: "Berpotensi memicu tsunami besar",
    kunci: "D"
  },
  {
    soal: "Gempa megathrust sulit diprediksi karena …",
    A: "Selalu terjadi pada waktu tertentu",
    B: "Proses akumulasi energi berlangsung lama dan tidak tampak",
    C: "Dipicu oleh kondisi cuaca ekstrem",
    D: "Terjadi hanya di wilayah pegunungan",
    kunci: "B"
  },
  {
    soal: "Daerah dengan tanah lapuk dan kemiringan lereng tinggi sangat rentan terhadap …",
    A: "Kekeringan berkepanjangan",
    B: "Penurunan muka air tanah",
    C: "Longsor setelah gempa kuat",
    D: "Banjir rob musiman",
    kunci: "C"
  },
  {
    soal: "Tsunami lebih berbahaya di wilayah pantai landai karena …",
    A: "Gelombang dapat melaju jauh ke daratan",
    B: "Pantulan gelombang lebih kecil",
    C: "Kecepatan angin lebih tinggi",
    D: "Kedalaman laut yang dangkal",
    kunci: "A"
  },
  {
    soal: "Salah satu tanda awal terjadinya tsunami akibat gempa megathrust adalah …",
    A: "Munculnya kabut tebal di laut",
    B: "Air laut surut secara tiba-tiba",
    C: "Perubahan warna air laut",
    D: "Angin laut berhenti mendadak",
    kunci: "B"
  },
  {
    soal: "Kerusakan ekosistem pasca-tsunami sering diperparah oleh …",
    A: "Penurunan suhu udara ekstrem",
    B: "Bertambahnya vegetasi pantai",
    C: "Perubahan arus laut lokal",
    D: "Kontaminasi lumpur dan material bangunan",
    kunci: "D"
  },
  {
    soal: "Hilangnya sabuk mangrove di wilayah pesisir dapat menyebabkan …",
    A: "Peningkatan abrasi dan gelombang besar",
    B: "Stabilitas garis pantai meningkat",
    C: "Kualitas air laut membaik",
    D: "Penurunan kecepatan arus laut",
    kunci: "A"
  },
  {
    soal: "Salah satu dampak sosial jangka panjang dari gempa bumi besar adalah …",
    A: "Bertambahnya lahan pertanian",
    B: "Munculnya sumber daya alam baru",
    C: "Perubahan struktur sosial dan ekonomi masyarakat",
    D: "Stabilnya harga kebutuhan pokok",
    kunci: "C"
  },
  {
    soal: "Contoh mitigasi struktural dalam penanggulangan bencana adalah …",
    A: "Sosialisasi kesiapsiagaan bencana",
    B: "Simulasi evakuasi masyarakat",
    C: "Penyuluhan tanda-tanda bencana",
    D: "Pembangunan tanggul dan breakwater",
    kunci: "D"
  },
  {
    soal: "Mitigasi non-struktural bertujuan utama untuk …",
    A: "Membangun infrastruktur tahan gempa",
    B: "Meningkatkan kesiapsiagaan melalui edukasi dan regulasi",
    C: "Mengubah kondisi alam wilayah rawan",
    D: "Menahan pergerakan lempeng bumi",
    kunci: "B"
  },
  {
    soal: "Sistem peringatan dini bencana dapat gagal berfungsi apabila …",
    A: "Informasi cepat disebarkan",
    B: "Masyarakat memahami prosedur evakuasi",
    C: "Alat sensor rusak dan data tidak terbaca",
    D: "Koordinasi antarlembaga berjalan baik",
    kunci: "C"
  },
  {
    soal: "Tantangan utama penerapan teknologi kebencanaan di daerah terpencil adalah …",
    A: "Keterbatasan jaringan komunikasi",
    B: "Tingginya kesadaran masyarakat",
    C: "Banyaknya relawan terlatih",
    D: "Risiko bencana yang rendah",
    kunci: "A"
  },
  {
    soal: "Informasi hoaks saat bencana dapat meningkatkan jumlah korban karena …",
    A: "Membuat masyarakat lebih waspada",
    B: "Menunda proses rehabilitasi",
    C: "Mengurangi peran pemerintah",
    D: "Menimbulkan kepanikan dan salah arah evakuasi",
    kunci: "D"
  },
  {
    soal: "Mangrove efektif dalam mitigasi bencana pesisir karena …",
    A: "Tinggi pohonnya seragam",
    B: "Akarnya menahan energi gelombang dan sedimen",
    C: "Mempercepat arus laut",
    D: "Menghasilkan air tawar",
    kunci: "B"
  },
  {
    soal: "Jika gempa kuat terjadi dan listrik padam total, tindakan paling tepat adalah …",
    A: "Segera menuju area terbuka atau titik kumpul",
    B: "Mengamankan barang berharga",
    C: "Menunggu instruksi di dalam rumah",
    D: "Memeriksa instalasi listrik",
    kunci: "A"
  },
  {
    soal: "Bangunan yang mengalami retakan pasca-gempa harus dihindari karena …",
    A: "Menjadi tempat hewan liar",
    B: "Menghambat akses bantuan",
    C: "Berpotensi runtuh akibat gempa susulan",
    D: "Tidak memenuhi standar estetika",
    kunci: "C"
  },
  {
    soal: "Pendidikan kebencanaan penting diberikan kepada masyarakat karena …",
    A: "Menghilangkan potensi bencana alam",
    B: "Membentuk perilaku responsif dan tidak panik",
    C: "Menjamin keselamatan seluruh warga",
    D: "Melarang tinggal di wilayah rawan",
    kunci: "B"
  },
  {
    soal: "Jika sirine tsunami berbunyi setelah gempa besar, tindakan paling tepat adalah …",
    A: "Mengamati situasi sekitar",
    B: "Menunggu informasi lanjutan",
    C: "Menghubungi keluarga terlebih dahulu",
    D: "Segera menuju tempat tertinggi",
    kunci: "D"
  }
];

/* ================== VARIABEL ================== */
let indexSoal = 0;
let jawaban = [];
let timer = 0;
let interval;

const pageI=document.getElementById("page-identitas");
const pageQ=document.getElementById("page-kuis");
const pageH=document.getElementById("page-hasil");
const soalBox=document.getElementById("soal-box");

document.getElementById("formIdentitas").onsubmit=e=>{
 e.preventDefault();
 pageI.classList.add("hidden");
 pageQ.classList.remove("hidden");
 mulaiTimer(); render();
};

function mulaiTimer(){
 interval=setInterval(()=>{
  timer++;
  timerEl.textContent=
   String(Math.floor(timer/60)).padStart(2,"0")+":"+
   String(timer%60).padStart(2,"0");
 },1000);
}

function render(){
 progress.textContent=`Soal ${i+1} / 20`;
 const s=soalData[i];
 soalBox.innerHTML=`<h3>${i+1}. ${s.soal}</h3>`+
 ["A","B","C","D"].map(o=>`
  <button class="opsi" onclick="pilih('${o}')">${o}. ${s[o]}</button>
 `).join("");
}

function pilih(p){
 jawaban[i]=p;
 document.querySelectorAll(".opsi").forEach(b=>{
  b.disabled=true;
  if(b.textContent.startsWith(soalData[i].kunci)) b.classList.add("benar");
  if(b.textContent.startsWith(p)&&p!==soalData[i].kunci) b.classList.add("salah");
 });
}

btnNext.onclick=()=>{
 if(!jawaban[i]) return alert("Pilih jawaban terlebih dahulu");
 i++;
 i<soalData.length?render():selesai();
};

function selesai(){
 clearInterval(interval);
 pageQ.classList.add("hidden");
 pageH.classList.remove("hidden");
 let benar=jawaban.filter((j,x)=>j===soalData[x].kunci).length;
 rNama.textContent=nama.value;
 rKelas.textContent=kelas.value;
 rSekolah.textContent=sekolah.value;
 rSubmit.textContent=submit.value;
 rBenar.textContent=benar;
 rSalah.textContent=20-benar;
 rSkor.textContent=benar*5;
 btnKirim.onclick=()=>kirim(benar,20-benar,benar*5);
}

function kirim(benar,salah,skor){
 overlay.classList.remove("hidden");
 popupText.textContent="Mengirim jawaban...";
 fetch(WEB_APP_URL,{
  method:"POST",
  body:JSON.stringify({nama:nama.value,kelas:kelas.value,sekolah:sekolah.value,submit:submit.value,benar,salah,skor})
 }).then(()=>{
  popupText.textContent="✅ Jawaban berhasil dikirim";
  setTimeout(()=>overlay.classList.add("hidden"),1800);
 }).catch(()=>{
  popupText.textContent="❌ Gagal mengirim data";
  setTimeout(()=>overlay.classList.add("hidden"),2000);
 });
}
