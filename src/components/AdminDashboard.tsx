import { useEffect, useState } from "react";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { db, RSVPS_COLLECTION } from "../lib/firebase";

interface RSVPEntry {
  id: string;
  name: string;
  phone: string | null;
  attending: boolean;
  guests: number;
  slug: string | null;
  createdAt: Timestamp | null;
}

type AttendingFilter = "all" | "yes" | "no";

const thStyle: React.CSSProperties = { textAlign: "left", padding: "0.5rem 1rem", opacity: 0.5 };
const tdStyle: React.CSSProperties = { padding: "0.6rem 1rem" };

const PAGE_SIZE_OPTIONS = [10, 20, 50, 100, 200];

const pageBtnStyle = (disabled: boolean): React.CSSProperties => ({
  padding: "0.45rem 1rem",
  fontSize: "0.95rem",
  color: "#fff",
  background: "#1c1c1c",
  border: "1px solid #333",
  borderRadius: "6px",
  cursor: disabled ? "default" : "pointer",
  opacity: disabled ? 0.4 : 1,
});

export default function AdminDashboard() {
  const [entries, setEntries] = useState<RSVPEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // Draft values (what's typed/selected) vs. applied values (what the table uses).
  const [search, setSearch] = useState("");
  const [attendingFilter, setAttendingFilter] = useState<AttendingFilter>("all");
  const [appliedSearch, setAppliedSearch] = useState("");
  const [appliedAttending, setAppliedAttending] = useState<AttendingFilter>("all");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const applyFilters = () => {
    setAppliedSearch(search);
    setAppliedAttending(attendingFilter);
    setPage(1);
  };

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

  const query = appliedSearch.trim().toLowerCase();
  const visible = entries.filter((e) => {
    if (appliedAttending === "yes" && !e.attending) return false;
    if (appliedAttending === "no" && e.attending) return false;
    if (query && !(e.name ?? "").toLowerCase().includes(query)) return false;
    return true;
  });

  // Total attending headcount within the current filtered view (person + their guests).
  const visibleGuests = visible
    .filter((e) => e.attending)
    .reduce((sum, e) => sum + (e.guests ?? 0) + 1, 0);

  // Pagination — clamp the page in case the filtered set shrank.
  const pageCount = Math.max(1, Math.ceil(visible.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const pageRows = visible.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  if (loading) return <p style={{ color: "#fff", textAlign: "center", padding: "2rem" }}>Loading...</p>;
  if (error)   return <p style={{ color: "red",  textAlign: "center", padding: "2rem" }}>{error}</p>;

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", color: "#fff", background: "#111", minHeight: "100vh", direction: "ltr", textAlign: "left" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>RSVP Dashboard</h1>
      <p style={{ marginBottom: "1.5rem", opacity: 0.6 }}>
        {attending.length} attending · {entries.length - attending.length} declined · {totalGuests} total guests
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1.5rem" }}>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") applyFilters(); }}
          placeholder="Search by name…"
          style={{
            width: "100%",
            maxWidth: "320px",
            padding: "0.6rem 0.9rem",
            fontSize: "1rem",
            color: "#fff",
            background: "#1c1c1c",
            border: "1px solid #333",
            borderRadius: "6px",
            outline: "none",
          }}
        />
        <select
          value={attendingFilter}
          onChange={(e) => setAttendingFilter(e.target.value as AttendingFilter)}
          style={{
            padding: "0.6rem 0.9rem",
            fontSize: "1rem",
            color: "#fff",
            background: "#1c1c1c",
            border: "1px solid #333",
            borderRadius: "6px",
            outline: "none",
          }}
        >
          <option value="all">All responses</option>
          <option value="yes">Attending</option>
          <option value="no">Declined</option>
        </select>
        <button
          type="button"
          onClick={applyFilters}
          style={{
            padding: "0.6rem 1.4rem",
            fontSize: "1rem",
            color: "#111",
            background: "#d4af37",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Search
        </button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", marginBottom: "1.5rem" }}>
        <p style={{ margin: 0, opacity: 0.6 }}>
          Showing {visible.length} of {entries.length} · {visibleGuests} guests attending
        </p>
        <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", opacity: 0.8 }}>
          Records per page
          <select
            value={pageSize}
            onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }}
            style={{
              padding: "0.4rem 0.7rem",
              fontSize: "0.95rem",
              color: "#fff",
              background: "#1c1c1c",
              border: "1px solid #333",
              borderRadius: "6px",
              outline: "none",
            }}
          >
            {PAGE_SIZE_OPTIONS.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #333" }}>
            {["Name", "Phone", "Attending", "Guests", "Submitted"].map((h) => (
              <th key={h} style={thStyle}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pageRows.map((e) => (
            <tr key={e.id} style={{ borderBottom: "1px solid #222" }}>
              <td style={tdStyle}>{e.name}</td>
              <td style={tdStyle}>
                {e.phone ? <a href={`tel:${e.phone}`} style={{ color: "#7ab7ff" }}>{e.phone}</a> : "—"}
              </td>
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
      {entries.length > 0 && visible.length === 0 && (
        <p style={{ textAlign: "center", opacity: 0.5, marginTop: "2rem" }}>No matching RSVPs.</p>
      )}

      {pageCount > 1 && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginTop: "1.5rem" }}>
          <button
            type="button"
            onClick={() => setPage(currentPage - 1)}
            disabled={currentPage <= 1}
            style={pageBtnStyle(currentPage <= 1)}
          >
            ‹ Prev
          </button>
          <span style={{ opacity: 0.6 }}>Page {currentPage} of {pageCount}</span>
          <button
            type="button"
            onClick={() => setPage(currentPage + 1)}
            disabled={currentPage >= pageCount}
            style={pageBtnStyle(currentPage >= pageCount)}
          >
            Next ›
          </button>
        </div>
      )}
    </div>
  );
}
