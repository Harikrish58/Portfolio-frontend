// Import required modules
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// AdminDashboard component displays contact form submissions in a protected admin view
const AdminDashboard = () => {
  // State to store contacts fetched from the backend
  const [contacts, setContacts] = useState([]);
  // State to show loading indicator
  const [loading, setLoading] = useState(true);
  // State for pagination control
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8; // Number of rows per page
  const navigate = useNavigate();

  // Fetch contact messages on component mount
  useEffect(() => {
    const fetchContacts = async () => {
      const token = localStorage.getItem("token");

      // Redirect to login if admin token is not available
      if (!token) {
        toast.error("You are not authorized to view this page.");
        navigate("/admin/login");
        return;
      }

      try {
        // Request contact messages from backend
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/contact/all`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Load previous read/unread statuses from localStorage
        const savedStatus =
          JSON.parse(localStorage.getItem("readStatusMap")) || {};

        // Append read/unread status to each contact and sort by date
        const sortedContacts = res.data.contacts
          .map((contact) => ({
            ...contact,
            status: savedStatus[contact._id] || "unread",
          }))
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        setContacts(sortedContacts);
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            "An error occurred. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, [navigate]);

  // Mark a contact message as "read" and save status to localStorage
  const markAsRead = (id) => {
    const updated = contacts.map((c) =>
      c._id === id ? { ...c, status: "read" } : c
    );
    setContacts(updated);

    // Save updated status to localStorage to persist across refresh
    const newStatusMap = updated.reduce((acc, cur) => {
      acc[cur._id] = cur.status;
      return acc;
    }, {});
    localStorage.setItem("readStatusMap", JSON.stringify(newStatusMap));
  };

  // Pagination calculations
  const totalPages = Math.ceil(contacts.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedContacts = contacts.slice(startIndex, endIndex);

  return (
    <section className="px-6 md:px-20 py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h2>

        {/* Show loading or empty message */}
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : contacts.length === 0 ? (
          <p className="text-center">No contact message found.</p>
        ) : (
          <>
            {/* Table to show paginated contacts */}
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse border border-gray-300 dark:border-gray-700 text-sm">
                <thead className="bg-gray-200 dark:bg-gray-800">
                  <tr>
                    <th className="p-3 border">Name</th>
                    <th className="p-3 border">Email</th>
                    <th className="p-3 border">Message</th>
                    <th className="p-3 border">Status</th>
                    <th className="p-3 border">Date & Time</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedContacts.map((contact) => (
                    <tr
                      key={contact._id}
                      className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                      onClick={() => markAsRead(contact._id)} // Mark message as read on click
                    >
                      <td className="p-3 border">{contact.name}</td>
                      <td className="p-3 border">{contact.email}</td>
                      <td className="p-3 border">{contact.message}</td>
                      <td className="p-3 border">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            contact.status === "read"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {contact.status}
                        </span>
                      </td>
                      <td className="p-3 border">
                        {new Date(contact.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination controls */}
            <div className="flex justify-center mt-6 gap-4">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-sm mt-2">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AdminDashboard;
