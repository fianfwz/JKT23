import React from "react";

const Schedule = () => {
  const matches = [
    {
      Tanggal: "Minggu, 24 Agustus 2025",
      Event: "Internal Fun Game",
      Jam: "16.00 - 18.00 WIB",
      Lapangan: "Bestindo Sport Center",
    },
  ];

  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Judul */}
        <h2 className="text-4xl font-bold text-center mb-12 text-[#0a1f44]">
          Jadwal Fun Football JKT23 FC
        </h2>

        {/* Tabel Desktop */}
        <div className="hidden md:block overflow-x-auto rounded-2xl shadow-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0a1f44] text-white text-lg">
                <th className="p-4">Tanggal</th>
                <th className="p-4">Event</th>
                <th className="p-4">Jam</th>
                <th className="p-4">Lapangan</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((match, index) => (
                <tr
                  key={index}
                  className="odd:bg-white even:bg-gray-100 hover:bg-gray-200 transition"
                >
                  <td className="p-4 font-medium">{match.Tanggal}</td>
                  <td className="p-4">{match.Event}</td>
                  <td className="p-4">{match.Jam}</td>
                  <td className="p-4">{match.Lapangan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card versi Mobile */}
        <div className="md:hidden space-y-6">
          {matches.map((match, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
            >
              <p className="font-bold text-[#0a1f44] mb-2">{match.Tanggal}</p>
              <p className="text-gray-700">
                <span className="font-semibold">Event: </span>
                {match.Event}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Jam: </span>
                {match.Jam}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Lapangan: </span>
                {match.Lapangan}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
