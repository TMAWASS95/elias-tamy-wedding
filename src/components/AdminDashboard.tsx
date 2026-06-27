import { useEffect, useState } from "react";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { db, RSVPS_COLLECTION } from "../lib/firebase";

interface RSVPEntry {
  id: string;
  name: string;
  attending: boolean;
  guests: number;
  slug: string | null;
  createdAt: Timestamp | null;
}

const thStyle: React.CSSProperties = { textAlign: "left", padding: "0.5rem 1rem", opacity: 0.5 };
const tdStyle: React.CSSProperties = { padding: "0.6rem 1rem" };

export default function AdminDashboard() {
  const [entries, setEntries] = useState<RSVPEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!db) {
      setError("Firebase is not configured.");
      setLoading(false);
      return;
    }

    getDocs(collection(db, RSVPS_COLLECTION))
      .then((snapshot) => {
        const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as RSVPEntry));
        data.sort((a, b) => (b.createdAt?.seconds ?? 0) - (a.createdAt?.seconds ?? 0));
        setEntries(data);
      })
      .catch(() => setError("Failed to load RSVPs."))
      .finally(() => setLoading(false));
  }, []);

  const attending = entries.filter((e) => e.attending);
  const totalGuests = attending.reduce((sum, e) => sum + (e.guests ?? 0) + 1, 0);

  if (loading) return <p style={{ color: "#fff", textAlign: "center", padding: "2rem" }}>Loading...</p>;
  if (error)   return <p style={{ color: "red",  textAlign: "center", padding: "2rem" }}>{error}</p>;

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", color: "#fff", background: "#111", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>RSVP Dashboard</h1>
      <p style={{ marginBottom: "1.5rem", opacity: 0.6 }}>
        {attending.length} attending · {entries.length - attending.length} declined · {totalGuests} total guests
      </p>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #333" }}>
            {["Name", "Attending", "Guests", "Submitted"].map((h) => (
              <th key={h} style={thStyle}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {entries.map((e) => (
            <tr key={e.id} style={{ borderBottom: "1px solid #222" }}>
              <td style={tdStyle}>{e.name}</td>
              <td style={tdStyle}>{e.attending ? "✓ Yes" : "✗ No"}</td>
              <td style={tdStyle}>{e.guests ?? 0}</td>
              <td style={{ ...tdStyle, opacity: 0.5 }}>
                {e.createdAt ? new Date(e.createdAt.seconds * 1000).toLocaleString() : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {entries.length === 0 && (
        <p style={{ textAlign: "center", opacity: 0.5, marginTop: "2rem" }}>No RSVPs yet.</p>
      )}
    </div>
  );
}
