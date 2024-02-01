import PropTypes from "prop-types";
import { useState } from "react";

export default function List({ list, setList }) {
  const [updateList, setUpdateList] = useState("");
  const [index, setIndex] = useState(null);

  // delete functionality
  function deleteHandler(index) {
    const deletedList = [...list];
    deletedList.splice(index, 1);
    // delete deletedList[index];
    setList(() => deletedList);
    localStorage.setItem("myData", JSON.stringify(deletedList));
  }

  // update functionality
  function updateHandler(item, index) {
    window.my_modal_4.showModal();
    setUpdateList(item);
    setIndex(index);
  }

  function updateListHandler() {
    list[index] = updateList;
    localStorage.setItem("myData", JSON.stringify(list));

    setUpdateList("");
  }

  return (
    <div className="w-full mt-5 mb-5">
      <h1 className="text-blue-500">Product List</h1>
      <table className="w-full border-separate border-spacing-2 ">
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td className="text-sm w-1/2">{item}</td>
              <td className="text-right">
                <button
                  onClick={() => updateHandler(item, index)}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                >
                  Update
                </button>
              </td>
              <td className="text-right">
                <button
                  onClick={() => deleteHandler(index)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* modal */}
      <dialog id="my_modal_4" className="modal">
        <form method="dialog" className="modal-box  max-w-5xl">
          <h3 className="font-bold text-lg m-5">List Update</h3>
          <input
            type="text"
            className="bg-gray-200 ml-5 mb-5 mr-5 p-2"
            placeholder="update value"
            value={updateList}
            onChange={(e) => setUpdateList(e.target.value)}
          />
          <br />
          <div className=" mb-5 modal-action flex ml-5 justify-end">
            {/* if there is a button, it will close the modal */}
            <button
              onClick={updateListHandler}
              className="btn bg-green-500 mr-5 rounded-lg pt-1 pb-1 pl-3 pr-3 mr-5 text-white"
            >
              SAVE
            </button>
            <button className="btn bg-red-500 mr-5 rounded-lg pt-1 pb-1 pl-3 pr-3 mr-5 text-white">
              CANCLE
            </button>
            <br />
          </div>
        </form>
      </dialog>
    </div>
  );
}
List.propTypes = {
  list: PropTypes.func.isRequired,
  setList: PropTypes.func.isRequired,
};
