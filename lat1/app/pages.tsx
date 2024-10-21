import "./kelas.css";
import React from 'react';

function Profile() {
  return <img src="https://avatars.githubusercontent.com/u/163378655?v=4" className="myphoto" alt="Sponsbob" />
}
// Mendefinisikan tipe untuk props
interface RiwayatPendidikanProps {
  jenjang: string;
  sekolah: string;
  tahun: string;
}

// Komponen RiwayatPendidikan dengan tipe props
const RiwayatPendidikan: React.FC<RiwayatPendidikanProps> = ({ jenjang, sekolah, tahun }) => {
  return (
    <div className="p-4 mb-2 border border-gray-300 rounded-md shadow-md bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="font-semibold">
          <span className="block md:hidden">Jenjang:</span>
          {jenjang}
        </div>
        <div>
          <span className="block md:hidden">Sekolah:</span>
          {sekolah}
        </div>
        <div className="text-gray-500">
          <span className="block md:hidden">Tahun:</span>
          {tahun}
        </div>
      </div>
    </div>
  );
}

export default function CV() {
  return (
    <section className="bg p-3">
      <div className="container mx-auto p-2 text-center">
        <h1 className="text-white-300 font-bold judul">CV ONLINE</h1>
        <h1 className="text 3xl judul">Naufal Rifki Nugraha</h1>
        <Profile />
        <div className="deskripsi">
        <p>
          Mahasiswa di Ma'soem University <br />
          Fakultas Komputer, Prodi Sistem Informasi Semester 5 <br />
          Sedang Belajar ReactJS bersama Dosen pak Iin
        </p>
        </div>
      </div>
      <RiwayatPendidikan jenjang="SD" sekolah="SDN Karapiak 2" tahun="2010 - 2016" />
      <RiwayatPendidikan jenjang="SMP" sekolah="SMPN 1 Cimanggung" tahun="2016 - 2019" />
      <RiwayatPendidikan jenjang="SMA" sekolah="SMAN Yadika Cicalengka" tahun="2019 - 2022" />
      <RiwayatPendidikan jenjang="Kuliah" sekolah="Universitas Masoem" tahun="2022 - Sekarang" />
    </section>
  );
}
