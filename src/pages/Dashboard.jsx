import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/4">
          <nav className="bg-white shadow-sm rounded-lg p-4">
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/dashboard" 
                  className="block px-4 py-2 hover:bg-gray-100 rounded-lg"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/orders" 
                  className="block px-4 py-2 hover:bg-gray-100 rounded-lg"
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/settings" 
                  className="block px-4 py-2 hover:bg-gray-100 rounded-lg"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        
        <main className="md:w-3/4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;