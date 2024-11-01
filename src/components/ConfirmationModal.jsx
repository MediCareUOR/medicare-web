const ConfirmationModal = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null; // If modal is not open, return nothing

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-x5 bg-opacity-50">
      <div className="bg-white p-6 border-2 rounded-xl text-x1 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
        <p className="mb-4">Are you sure you want to delete?</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-x3 text-white rounded-full hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-x3 text-white rounded-full hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
