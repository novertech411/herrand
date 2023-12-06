import MainLayout from "../../Layout/MainLayout";
import { BiSearch, BiDotsHorizontalRounded } from "react-icons/bi";
import Pagination from "react-bootstrap/Pagination";
import { useEffect, useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AgentSmallModal from "../../Modals/AgentSmallModal";
import ViewPreferenceAgent from "../../Modals/ViewPreferenceAgent";
import AddPreferenceAgent from "../../Modals/AddPreferenceAgent";
import PreviewAgentDetails from "../../Modals/PreviewAgentDetails";
import PreviewAgentDetailsView from "../../Modals/PreviewAgentDetailsView";
import DeleteModal from "../../Modals/DeleteModal";
import { useNavigate } from "react-router-dom";

const Agent = () => {
  const [activePage, setActivePage] = useState(1);
  const [isViewDetOpen, setIsViewDetOpen] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isPreOpen, setIsPreOpen] = useState(false);
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
  const [selectedUserId, setSelectedUserId] = useState(null);

  if (token === null) {
    navigate("/admin/login");
  }
  const fetchData = async (page) => {
    try {
      const response = await fetch(
        `https://herrand-backend-5a39ee15054e.herokuapp.com/accounts/agents/?page=${page}`,
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
          item.user.first_name.toLowerCase().includes(searchLower) ||
          item.user.last_name.toLowerCase().includes(searchLower) ||
          item.user.phone_number.toLowerCase().includes(searchLower) ||
          item.user.email.toLowerCase().includes(searchLower)
      );
    }

    if (selectedStatus) {
      filtered = filtered.filter((item) => item.user.status === selectedStatus);
    }

    setFilteredData(filtered);
  }, [data, searchInput, selectedStatus]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
    setSelectedUserId(index);
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

  const handleViewDetOpenClick = () => {
    setIsPreviewOpen(false);
    setIsViewDetOpen(true);
    setIsEditPreOpen(false);
    setIsPreOpen(false);
    setActiveRowIndex(false);
  };
  const handleViewDetCloseClick = () => {
    setIsViewDetOpen(false);
  };
  const handlePreviewOpenClick = () => {
    setIsPreviewOpen(true);
    setIsEditPreOpen(false);
    setIsPreOpen(false);
    setIsViewDetOpen(false);
    setActiveRowIndex(false);
  };
  const handlePreviewCloseClick = () => {
    setIsPreviewOpen(false);
  };
  const handlePreOpenClick = () => {
    setIsPreOpen(true);
    setIsEditPreOpen(false);
  };
  const handlePreCloseClick = () => {
    setIsPreOpen(false);
    setIsEditPreOpen(false);
  };
  const handleEditPreOpenClick = () => {
    setIsEditPreOpen(true);
  };
  const handleEditPreCloseClick = () => {
    setIsPreOpen(false);
    setIsEditPreOpen(false);
  };
  const handleDelopenClick = (index) => {
    setIsDelOpen(true);
    setActiveRowIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const handleDelCloseClick = () => {
    setIsDelOpen(false);
  };

  const totalActive = data.filter(
    (item) => item.user.status === "Active"
  ).length;

  const totalSuspended = data.filter(
    (item) => item.user.status === "Suspended"
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
          <ViewPreferenceAgent
            handlePreCloseClick={handlePreCloseClick}
            handleEditPreOpenClick={handleEditPreOpenClick}
          />
        </div>
      )}
      {isEditPreOpen && (
        <div className="main-modal-overlay">
          <AddPreferenceAgent
            handleEditPreCloseClick={handleEditPreCloseClick}
            handlePreOpenClick={handlePreOpenClick}
          />
        </div>
      )}
      {isPreviewOpen && (
        <div className="main-modal-overlay">
          <PreviewAgentDetails
            handlePreviewCloseClick={handlePreviewCloseClick}
            handleViewDetOpenClick={handleViewDetOpenClick}
          />
        </div>
      )}
      {isViewDetOpen && (
        <div className="main-modal-overlay">
          <PreviewAgentDetailsView
            handleViewDetCloseClick={handleViewDetCloseClick}
            handlePreviewOpenClick={handlePreviewOpenClick}
            selectedUserId={selectedUserId}
          />
        </div>
      )}
      {isDelOpen && (
        <div className="main-modal-overlay">
          <DeleteModal handleDelCloseClick={handleDelCloseClick} />
        </div>
      )}
      <MainLayout pname={"Agents"} tot_user={tot_user}>
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
                  <th>Agent Image</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData?.length === 0 ? (
                  <div className="sw-bx">
                    <div className="not-found-message">
                      Nothing matches <br /> the current filter
                    </div>
                  </div>
                ) : (
                  filteredData?.map((item) => (
                    <tr key={item.user.id} className="tb-row">
                      <td>
                        <img src={item.photo} alt="" />
                      </td>
                      <td>{item.user.first_name}</td>
                      <td>{item.user.last_name}</td>
                      <td>{item.user.phone_number}</td>
                      <td>{item.user.email}</td>
                      <td>
                        <div
                          className={`actt ${
                            item.user.status === "Suspended" ? "susp" : ""
                          }`}
                        >
                          {item.user.status}
                        </div>
                      </td>
                      <td>
                        <div
                          className="action-men"
                          onClick={() => handleActionClick(item.user.id)}
                        >
                          <BiDotsHorizontalRounded />
                        </div>
                        {activeRowIndex === item.user.id && (
                          <AgentSmallModal
                            handlePreviewOpenClick={handlePreviewOpenClick}
                            handleViewDetOpenClick={handleViewDetOpenClick}
                            handleDelopenClick={handleDelopenClick}
                          />
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

export default Agent;
