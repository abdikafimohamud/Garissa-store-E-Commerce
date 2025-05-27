const Settings = () => {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
      
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Change Password</label>
          <input 
            type="password" 
            placeholder="Current password" 
            className="w-full border rounded-lg px-4 py-2 mb-2" 
          />
          <input 
            type="password" 
            placeholder="New password" 
            className="w-full border rounded-lg px-4 py-2 mb-2" 
          />
          <input 
            type="password" 
            placeholder="Confirm new password" 
            className="w-full border rounded-lg px-4 py-2" 
          />
        </div>
        
        <div>
          <label className="block mb-1">Notification Preferences</label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="rounded text-primary" />
              <span className="ml-2">Email notifications</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded text-primary" />
              <span className="ml-2">SMS notifications</span>
            </label>
          </div>
        </div>
        
        <button 
          type="submit" 
          className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;