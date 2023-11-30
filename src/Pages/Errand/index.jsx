import MainLayout from "../../Layout/MainLayout";
import { BiSearch, BiDotsHorizontalRounded } from "react-icons/bi";
import Pagination from "react-bootstrap/Pagination";
import { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddPreferenceCos from "../../Modals/AddPreferenceCos";
import ViewPreferenceCos from "../../Modals/ViewPreferenceCos";
import SmallModalErrand from "../../Modals/SmallModalErrand";
import DeleteModal from "../../Modals/DeleteModal";

const Errand = () => {
  const data = [
    {
      firstName: "Sophia",
      lastName: "Lopez",
      phoneNumber: "09199990000",
      email: "sophialopez@example.com",
      status: "Completed",
    },
    {
      firstName: "Logan",
      lastName: "Gonzalez",
      phoneNumber: "09211112222",
      email: "logangonzalez@example.com",
      status: "Cancelled",
    },
    {
      firstName: "Kenneth",
      lastName: "Francis",
      phoneNumber: "090324554332",
      email: "Knfrancis@gmail.com",
      status: "In Progress",
    },
    {
      firstName: "Kenneth",
      lastName: "Francis",
      phoneNumber: "090324554332",
      email: "Knfrancis@gmail.com",
      status: "Cancelled",
    },
    {
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "090123456789",
      email: "johndoe@example.com",
      status: "In Progress",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      phoneNumber: "090987654321",
      email: "janedoe@example.com",
      status: "Cancelled",
    },
    {
      firstName: "Sophia",
      lastName: "Lopez",
      phoneNumber: "09199990000",
      email: "sophialopez@example.com",
      status: "In Progress",
    },
    {
      firstName: "Logan",
      lastName: "Gonzalez",
      phoneNumber: "09211112222",
      email: "logangonzalez@example.com",
      status: "Cancelled",
    },

    {
      firstName: "Michael",
      lastName: "Smith",
      phoneNumber: "09011112222",
      email: "michaelsmith@example.com",
      status: "In Progress",
    },
    {
      firstName: "Emily",
      lastName: "Johnson",
      phoneNumber: "09033334444",
      email: "emilyjohnson@example.com",
      status: "In Progress",
    },
    {
      firstName: "Daniel",
      lastName: "Williams",
      phoneNumber: "09055556666",
      email: "danielwilliams@example.com",
      status: "Cancelled",
    },
    {
      firstName: "Olivia",
      lastName: "Brown",
      phoneNumber: "09077778888",
      email: "oliviabrown@example.com",
      status: "Active",
    },
    {
      firstName: "Sophia",
      lastName: "Lopez",
      phoneNumber: "09199990000",
      email: "sophialopez@example.com",
      status: "Active",
    },
    {
      firstName: "Logan",
      lastName: "Gonzalez",
      phoneNumber: "09211112222",
      email: "logangonzalez@example.com",
      status: "Cancelled",
    },
    {
      firstName: "Liam",
      lastName: "Jones",
      phoneNumber: "09099990000",
      email: "liamjones@example.com",
      status: "Cancelled",
    },
    {
      firstName: "Ava",
      lastName: "Garcia",
      phoneNumber: "09111112222",
      email: "avagarcia@example.com",
      status: "Active",
    },
    {
      firstName: "Sophia",
      lastName: "Lopez",
      phoneNumber: "09199990000",
      email: "sophialopez@example.com",
      status: "Active",
    },
    {
      firstName: "Logan",
      lastName: "Gonzalez",
      phoneNumber: "09211112222",
      email: "logangonzalez@example.com",
      status: "Cancelled",
    },
    {
      firstName: "Noah",
      lastName: "Rodriguez",
      phoneNumber: "09133334444",
      email: "noahrodriguez@example.com",
      status: "Cancelled",
    },
    {
      firstName: "Isabella",
      lastName: "Martinez",
      phoneNumber: "09155556666",
      email: "isabellamartinez@example.com",
      status: "Active",
    },
    {
      firstName: "James",
      lastName: "Hernandez",
      phoneNumber: "09177778888",
      email: "jameshernandez@example.com",
      status: "Cancelled",
    },
    {
      firstName: "Sophia",
      lastName: "Lopez",
      phoneNumber: "09199990000",
      email: "sophialopez@example.com",
      status: "Active",
    },
    {
      firstName: "Logan",
      lastName: "Gonzalez",
      phoneNumber: "09211112222",
      email: "logangonzalez@example.com",
      status: "Cancelled",
    },
    {
      firstName: "Sophia",
      lastName: "Lopez",
      phoneNumber: "09199990000",
      email: "sophialopez@example.com",
      status: "Active",
    },
    {
      firstName: "Logan",
      lastName: "Gonzalez",
      phoneNumber: "09211112222",
      email: "logangonzalez@example.com",
      status: "Cancelled",
    },
    {
      firstName: "Kenneth",
      lastName: "Francis",
      phoneNumber: "090324554332",
      email: "Knfrancis@gmail.com",
      status: "Active",
    },
    {
      firstName: "Kenneth",
      lastName: "Francis",
      phoneNumber: "090324554332",
      email: "Knfrancis@gmail.com",
      status: "Cancelled",
    },
    {
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "090123456789",
      email: "johndoe@example.com",
      status: "Active",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      phoneNumber: "090987654321",
      email: "janedoe@example.com",
      status: "Cancelled",
    },
    {
      firstName: "Sophia",
      lastName: "Lopez",
      phoneNumber: "09199990000",
      email: "sophialopez@example.com",
      status: "Active",
    },
    {
      firstName: "Logan",
      lastName: "Gonzalez",
      phoneNumber: "09211112222",
      email: "logangonzalez@example.com",
      status: "Cancelled",
    },
    {
      firstName: "Logan",
      lastName: "Gonzalez",
      phoneNumber: "09211112222",
      email: "logangonzalez@example.com",
      status: "Cancelled",
    },
    {
      firstName: "Kenneth",
      lastName: "Francis",
      phoneNumber: "090324554332",
      email: "Knfrancis@gmail.com",
      status: "Active",
    },
    {
      firstName: "Kenneth",
      lastName: "Francis",
      phoneNumber: "090324554332",
      email: "Knfrancis@gmail.com",
      status: "Cancelled",
    },
    {
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "090123456789",
      email: "johndoe@example.com",
      status: "Active",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      phoneNumber: "090987654321",
      email: "janedoe@example.com",
      status: "Cancelled",
    },
    {
      firstName: "Sophia",
      lastName: "Lopez",
      phoneNumber: "09199990000",
      email: "sophialopez@example.com",
      status: "Active",
    },
    {
      firstName: "Logan",
      lastName: "Gonzalez",
      phoneNumber: "09211112222",
      email: "logangonzalez@example.com",
      status: "Cancelled",
    },

    {
      firstName: "Michael",
      lastName: "Smith",
      phoneNumber: "09011112222",
      email: "michaelsmith@example.com",
      status: "Active",
    },
    {
      firstName: "Emily",
      lastName: "Johnson",
      phoneNumber: "09033334444",
      email: "emilyjohnson@example.com",
      status: "Active",
    },
    {
      firstName: "Daniel",
      lastName: "Williams",
      phoneNumber: "09055556666",
      email: "danielwilliams@example.com",
      status: "Cancelled",
    },
    {
      firstName: "Olivia",
      lastName: "Brown",
      phoneNumber: "09077778888",
      email: "oliviabrown@example.com",
      status: "Active",
    },
    {
      firstName: "Sophia",
      lastName: "Lopez",
      phoneNumber: "09199990000",
      email: "sophialopez@example.com",
      status: "Active",
    },
    {
      firstName: "Logan",
      lastName: "Gonzalez",
      phoneNumber: "09211112222",
      email: "logangonzalez@example.com",
      status: "Cancelled",
    },

    {
      firstName: "Michael",
      lastName: "Smith",
      phoneNumber: "09011112222",
      email: "michaelsmith@example.com",
      status: "Active",
    },
  ];
  const [activePage, setActivePage] = useState(1);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const [isPreOpen, setIsPreOpen] = useState(false);
  const [isEditPreOpen, setIsEditPreOpen] = useState(false);
  const dataPerPage = 8;
  const totalPages = Math.ceil(data.length / dataPerPage);
  const indexOfLastData = activePage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  // const currentData = data.slice(indexOfFirstData, indexOfLastData);
  const [activeRowIndex, setActiveRowIndex] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const currentData = data
    .filter((item) => {
      const searchValue = searchInput.toLowerCase();
      const statusFilter =
        selectedStatus === "" ||
        item.status.toLowerCase() === selectedStatus.toLowerCase();
      return (
        statusFilter &&
        (item.firstName.toLowerCase().includes(searchValue) ||
          item.lastName.toLowerCase().includes(searchValue) ||
          item.phoneNumber.includes(searchInput) ||
          item.email.toLowerCase().includes(searchValue) ||
          item.status.toLowerCase().includes(searchValue))
      );
    })
    .slice(indexOfFirstData, indexOfLastData);
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
    setActivePage(pageNumber);
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
    setIsPreOpen(false);
  };
  const handleEditPreOpenClick = () => {
    setIsEditPreOpen(true);
  };
  const handleEditPreCloseClick = () => {
    setIsEditPreOpen(false);
  };
  const handleDelopenClick = (index) => {
    setIsDelOpen(true);
    setActiveRowIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const handleDelCloseClick = () => {
    setIsDelOpen(false);
  };

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
      <MainLayout pname={"Errands"}>
        <div className="dashboard-container">
          <div className="customer-page-toper flex">
            <div className="add-pre-btn flex nonn" onClick={handlePreOpenClick}>
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
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
                <option value="In Progress">In Progress</option>
              </select>
            </div>
          </div>
          <div className="tabl-containe">
            <table>
              <thead>
                <tr>
                  <th>Agent name</th>
                  <th>Customer name</th>
                  <th>Errand</th>
                  <th>Fee</th>
                  <th>Location</th>
                  <th>Destination</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              {currentData.length === 0 ? (
                <div className="sw-bx">
                  <div className="not-found-message">
                    Nothing matches <br /> the current filter
                  </div>
                </div>
              ) : (
                currentData.map((item, index) => (
                  <tbody>
                    <tr key={index} className="tb-row">
                      <td>Kenneth Francis</td>
                      <td>Paul George</td>
                      <td>Plan and arrange travel</td>
                      <td>2,500</td>
                      <td>Tickles garden Abuja</td>
                      <td>Wuse Market rd 2</td>
                      <td>
                        <div
                          className={`actt ${
                            item.status === "Cancelled"
                              ? "susp"
                              : item.status === "In Progress"
                              ? "pross"
                              : ""
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
                          <SmallModalErrand
                            handleDelopenClick={handleDelopenClick}
                          />
                        )}
                      </td>
                    </tr>
                  </tbody>
                ))
              )}
            </table>
            <div className="pagin-sow-cont flex">
              <div className="show-counter">
                Showing {indexOfFirstData + 1} to {indexOfLastData} of{" "}
                {data.length} entries
              </div>
              <Pagination>
                {activePage !== 1 && (
                  <Pagination.Prev
                    onClick={() => handlePageChange(activePage - 1)}
                  />
                )}
                {paginationItems}
                {activePage !== totalPages && (
                  <Pagination.Next
                    onClick={() => handlePageChange(activePage + 1)}
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

export default Errand;
