import DashboardHeader from '../components/DashboardHeader';
import InvitedDashboardList from '../components/InvitedDashboarList';
import InvitedDashboardListMobile from '../components/InvitedDashboardListMobile';
import SideBar from '../components/SideBar';
import DashboardCard from '../components/DashbaordCard';

const MyDashboard = () => {
  return (
    <>
      <div className='flex'>
        <SideBar />
        <div>
          <DashboardHeader />
          <DashboardCard />
          <InvitedDashboardList />
          <InvitedDashboardListMobile />
        </div>
      </div>
    </>
  );
};

export default MyDashboard;
