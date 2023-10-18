import DashCard from "../../Components/DashboardComp/DashCard";
import MainLayout from "../../Layout/MainLayout";
const Dashboard = () => {
  return (
    <>
      <MainLayout>
        <div className="dashboard-container">
          <div className="dash-card-row">
            <DashCard />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Dashboard;
