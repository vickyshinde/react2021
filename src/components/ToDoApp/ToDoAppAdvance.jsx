import { useEffect, useState } from 'react';

// to get the data from localstorage

const getLocalItems = () => {
  const list = localStorage.getItem('todoListAdvance');
  console.log(list);

  if (list) {
    return JSON.parse(list);
  }
  return [];
};

const ToDoAppAdvance = () => {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState(getLocalItems());
  const [updateToggle, setUpdateToggle] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const inputEvent = (event) => {
    // console.log(event.target.value);
    setInputData(event.target.value);
  };

  const addItem = () => {
    if (!inputData) {
      alert('please add item');
    } else if (inputData && !updateToggle) {
      setItems(
        items.map((item) => {
          if (item.id === isEditItem) {
            return { ...item, name: inputData };
          }
          return item;
        })
      );
      setUpdateToggle(true);
      setInputData('');
      setIsEditItem(null);
    } else {
      const AllInputData = { id: new Date().getTime().toString(), name: inputData };
      setItems([...items, AllInputData]);
      setInputData('');
    }
  };

  const deleteItem = (index) => {
    console.log(index);
    const updatedItems = items.filter((item) => {
      return index !== item.id;
    });

    setItems(updatedItems);
  };

  const removeAll = () => {
    setItems([]);
  };

  const editItem = (id) => {
    console.log(`Edit Id - ${id}`);
    const newEditItem = items.find((item) => {
      return item.id === id;
    });
    console.log(newEditItem);
    setUpdateToggle(false);
    setInputData(newEditItem.name);
    setIsEditItem(id);
  };

  //  add data to localStorage
  useEffect(() => {
    localStorage.setItem('todoListAdvance', JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <h1>ToDo App</h1>
      <div className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="inputPassword2" className="sr-only">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Add Items..."
            onChange={inputEvent}
            value={inputData}
          />
        </div>
        {updateToggle ? (
          <button type="button" className="btn btn-primary mb-2" onClick={addItem}>
            Add
          </button>
        ) : (
          <button type="button" className="btn btn-primary mb-2" onClick={addItem}>
            Update
          </button>
        )}
      </div>
      <ul className="list-group mb-4">
        {items.map((item) => {
          return (
            <li key={item.id} className="d-flex justify-content-between list-group-item text-success">
              <div>{item.name}</div>
              <div>
                <span onClick={() => editItem(item.id)} className="btn btn-warning btn-sm mr-2">
                  Edit{' '}
                </span>
                <span onClick={() => deleteItem(item.id)} className="btn btn-primary btn-sm">
                  Deleted
                </span>
              </div>
            </li>
          );
        })}
        {/* {items.map = (item, index)=> {
        }} */}
      </ul>
      {items.length ? (
        <button type="button" className="btn btn-primary mb-2" onClick={removeAll}>
          Delete All
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default ToDoAppAdvance;
