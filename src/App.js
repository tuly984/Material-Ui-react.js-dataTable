import React from 'react';
import MaterialTable from 'material-table';
function App() {
  const columnas = [
    {
      title: 'Name',
      field: 'name',
    },
    {
      title: 'Address',
      field: 'address',
    },
    {
      title: 'Postcode',
      field: 'postcode',
    },
    {
      title: 'Rating',
      field: 'rating',     
    },
    {
      title: 'Food',
      fleld: 'food',
      type: 'numeric',
    }
  ];
  const data = [
    { name: 'CN Chinese', address: '228 City Road', postcode: '3JH', rating: 5, food: 'Chinese' },
    { name: '007 Takeaway', address: '6 Drummond Street', postcode: '1HY', rating: 6, food: 'Pizza' },
    { name: '042 Restaurant & Bar', address: '885 High Road Leytonstone', postcode: '1HR', rating: 3, food: 'African' },
    { name: '1 2 3 Chinese', address: 'Unit 4 Spencer House', postcode: '3DS', rating: 4.5, food: 'Pizza' },
    { name: '042 Restaurant & Bar', address: '228 City Road', postcode: '1HY', rating: 6, food: 'Chinese' },
    
  ];

  return (
    <div>
    <MaterialTable
      columns={columnas}
      data={data}
      actions={[
        {
          icon:'edit',
          tooltip: 'Edit Name',
          onClick: (event, rowData)=>alert('Are you sure want to edit all name:'+rowData.name)
        },
        {
          icon:'delete',
          tooltip: 'Delete Name',
          onClick: (event, rowData)=>window.confirm('Are you sure want to delete all name:'+rowData.name+'?')
        }
      ]}
      options={{
        actionsColumnIndex: -1
      }}
      />
    </div>
  );
}

export default App;
