import MainLayout from "../../Layout/MainLayout";
import { BiSearch, BiDotsHorizontalRounded } from "react-icons/bi";
import "./style.css";
import Pagination from "react-bootstrap/Pagination";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddPreferenceCos from "../../Modals/AddPreferenceCos";
import ViewPreferenceCos from "../../Modals/ViewPreferenceCos";
import SmallModal from "../../Modals/SmallModal";
import DeleteModal from "../../Modals/DeleteModal";
import { useNavigate } from "react-router-dom";

const Customer = () => {
  const [activePage, setActivePage] = useState(1);
  const [isPreOpen, setIsPreOpen] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const [isEditPreOpen, setIsEditPreOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState("");
  const indexOfLastData = currentPage * 10;
  // const indexOfFirstData = indexOfLastData - 10;
  const [activeRowIndex, setActiveRowIndex] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();

  if (token === null) {
    navigate("/admin/login");
  }

  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyMzc3MzE0LCJpYXQiOjE3MDE3NzI1MTQsImp0aSI6IjhlZjQ1Y2RmMzFmMDRlM2U5MWQ1N2UzMDUxZjlhYWFiIiwiaWQiOiIyMzU1M2M2Ni04ZDJkLTRjMjgtODAyZS03NTBiNjJjODczMTcifQ.LYfedc7gAW_MAOYDMw50yo8NhoP_2AzholEg3yhY6Is";

  const fetchData = async (page) => {
    try {
      const response = await fetch(
        `https://herrand-backend-5a39ee15054e.herokuapp.com/accounts/customers/?page=${page}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();

      setData(result.results);
      setCount(result.count);
      setTotalPages(Math.ceil(result.count / 10)); // Assuming 10 items per page, adjust accordingly
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  useEffect(() => {
    // Apply filter based on searchInput and selectedStatus
    let filtered = data;

    if (searchInput) {
      const searchLower = searchInput.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.first_name.toLowerCase().includes(searchLower) ||
          item.last_name.toLowerCase().includes(searchLower) ||
          item.phone_number.toLowerCase().includes(searchLower) ||
          item.email.toLowerCase().includes(searchLower)
      );
    }

    if (selectedStatus) {
      filtered = filtered.filter((item) => item.status === selectedStatus);
    }

    setFilteredData(filtered);
  }, [data, searchInput, selectedStatus]);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    setActivePage(1); // Reset page to 1 when search input changes
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
    setActivePage(1); // Reset page to 1 when status filter changes
  };

  const handleActionClick = (index) => {
    setActiveRowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const paginationItems = [];
  if (totalPages <= 6) {
    for (let i = 1; i <= totalPages; i++) {
      paginationItems.push(
        <Pagination.Item
          key={i}
          active={i === activePage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
  } else {
    if (activePage <= 3) {
      for (let i = 1; i <= 5; i++) {
        paginationItems.push(
          <Pagination.Item
            key={i}
            active={i === activePage}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </Pagination.Item>
        );
      }
      paginationItems.push(<Pagination.Ellipsis key="ellipsis-start" />);
    } else if (activePage > totalPages - 3) {
      paginationItems.push(<Pagination.Ellipsis key="ellipsis-end" />);
      for (let i = totalPages - 4; i <= totalPages; i++) {
        paginationItems.push(
          <Pagination.Item
            key={i}
            active={i === activePage}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </Pagination.Item>
        );
      }
    } else {
      paginationItems.push(<Pagination.Ellipsis key="ellipsis-start" />);
      for (let i = activePage - 1; i <= activePage + 1; i++) {
        paginationItems.push(
          <Pagination.Item
            key={i}
            active={i === activePage}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </Pagination.Item>
        );
      }
      paginationItems.push(<Pagination.Ellipsis key="ellipsis-end" />);
    }
  }

  const handlePreOpenClick = () => {
    setIsPreOpen(true);
    setIsEditPreOpen(false);
  };
  const handlePreCloseClick = () => {
    setIsEditPreOpen(false);
    setIsPreOpen(false);
  };
  const handleDelopenClick = (index) => {
    setIsDelOpen(true);
    setActiveRowIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const handleDelCloseClick = () => {
    setIsDelOpen(false);
  };
  const handleEditPreOpenClick = () => {
    setIsEditPreOpen(true);
  };
  const handleEditPreCloseClick = () => {
    setIsPreOpen(false);
    setIsEditPreOpen(false);
  };

  const totalActive = data.filter((item) => item.status === "Active").length;

  const totalSuspended = data.filter(
    (item) => item.status === "Suspended"
  ).length;
  const total_data = count;
  const tot_user =
    selectedStatus === ""
      ? total_data
      : selectedStatus === "Active"
      ? totalActive
      : totalSuspended;
  return (
    <>
      {isPreOpen && (
        <div className="main-modal-overlay">
          <ViewPreferenceCos
            handlePreCloseClick={handlePreCloseClick}
            handleEditPreOpenClick={handleEditPreOpenClick}
          />
        </div>
      )}
      {isEditPreOpen && (
        <div className="main-modal-overlay">
          <AddPreferenceCos
            handleEditPreCloseClick={handleEditPreCloseClick}
            handlePreOpenClick={handlePreOpenClick}
          />
        </div>
      )}
      {isDelOpen && (
        <div className="main-modal-overlay">
          <DeleteModal handleDelCloseClick={handleDelCloseClick} />
        </div>
      )}
      <MainLayout pname={"Customers"} tot_user={tot_user}>
        <div className="dashboard-container">
          <div className="customer-page-toper flex">
            <div className="add-pre-btn flex" onClick={handlePreOpenClick}>
              Add preferences
            </div>
            <div className="filter-search flex">
              <div className="searc-bx flex">
                <input
                  type="text"
                  className="sear-inp"
                  placeholder="Search "
                  value={searchInput}
                  onChange={handleSearchChange}
                />
                <BiSearch />
              </div>

              <select
                name=""
                id=""
                className="sel-filter"
                value={selectedStatus}
                onChange={handleStatusChange}
              >
                <option value="">Filter</option>
                <option value="Active">Active</option>
                <option value="Suspended">Suspended</option>
              </select>
            </div>
          </div>
          <div className="tabl-containe">
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length === 0 ? (
                  <div className="sw-bx">
                    <div className="not-found-message">
                      Nothing matches <br /> the current filter
                    </div>
                  </div>
                ) : (
                  filteredData.map((item, index) => (
                    <tr key={item.id} className="tb-row">
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.phone_number}</td>
                      <td>{item.email}</td>
                      <td>
                        <div
                          className={`actt ${
                            item.status === "Suspended" ? "susp" : ""
                          }`}
                        >
                          {item.status}
                        </div>
                      </td>
                      <td>
                        <div
                          className="action-men"
                          onClick={() => handleActionClick(index)}
                        >
                          <BiDotsHorizontalRounded />
                        </div>
                        {activeRowIndex === index && (
                          <SmallModal handleDelopenClick={handleDelopenClick} />
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            <div className="pagin-sow-cont flex">
              <div className="show-counter">
                Showing {/* {indexOfFirstData + 1} to */}
                {Math.min(indexOfLastData, filteredData.length)} of {count}{" "}
                entries
              </div>
              <Pagination>
                {currentPage !== 1 && (
                  <Pagination.Prev
                    onClick={() => handlePageChange(currentPage - 1)}
                  />
                )}
                {[...Array(totalPages)].map((_, index) => (
                  <Pagination.Item
                    key={index + 1}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
                {currentPage !== totalPages && (
                  <Pagination.Next
                    onClick={() => handlePageChange(currentPage + 1)}
                  />
                )}
              </Pagination>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Customer;
