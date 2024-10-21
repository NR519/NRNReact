import Hero from "@/components/Hero";
import React from 'react';
import RiwayatPendidikan from "@/components/riwayatKerja";
import RiwayatKerja from "@/components/riwayatPendidikan";
import FavColor from "@/components/favcolor";
 

export default function MyIam() {
  return (
    <section>
      <Hero />
      <RiwayatKerja />
      <RiwayatPendidikan />
      <FavColor />
    </section>
  );
}
