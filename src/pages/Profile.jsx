const Profile = () => {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-600">Name</label>
          <p className="font-medium">John Doe</p>
        </div>
        <div>
          <label className="block text-gray-600">Email</label>
          <p className="font-medium">john@example.com</p>
        </div>
        <div>
          <label className="block text-gray-600">Phone</label>
          <p className="font-medium">+254 712 345 678</p>
        </div>
        <div>
          <label className="block text-gray-600">Address</label>
          <p className="font-medium">123 Garissa Street, Garissa</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;