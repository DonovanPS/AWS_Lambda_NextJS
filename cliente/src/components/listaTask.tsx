import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';



type ListaTask = {
  titulo: string;
};

type Task = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
};
const ListaTask = ({ titulo }: ListaTask) => {

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [showMessagedelete, setShowMessageDelete] = useState(false);
  const [showMessageupdate, setShowMessageUpdate] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  const eliminarBD = async (id: string): Promise<void> => {
    console.log("eliminar" + id);
    
    const response = await fetch(`https://1xxfiae67d.execute-api.us-east-1.amazonaws.com/tasks/${id}`, {
      method: 'DELETE'
      
    });
    
    setShowMessageDelete(true);
    if (!response.ok) {
      throw new Error('No se pudo eliminar el registro de la base de datos');
    }
  };



  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://1xxfiae67d.execute-api.us-east-1.amazonaws.com/tasks');
        const data = await response.json();
        setTasks(data.body.tasks); // Actualiza el estado con los datos obtenidos



      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
      

    };

    fetchTasks();
 
    
 
 
  }, [id, title, description]);

  const dialogFooterDelete = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessageDelete(false)} /></div>;


  return (
    <>
     


      <div>
        <h1>{titulo}</h1>
        <div className="card">
          <DataTable value={tasks}>


            <Column field="id" header="ID"></Column>
            <Column field="title" header="Titulo"></Column>
            <Column field="description" header="Descripción"></Column>
            <Column field="createdAt" header="Fecha de creacion"></Column>
            <Column
              body={rowData => (
                <Button

                >
                  Editar
                </Button>
              )}
            />
            <Column
              body={rowData => (
                <Button onClick={() => eliminarBD(rowData.id)} type="submit" label="Borrar" className="mt-2"/>
              )}
            />
          </DataTable>
        </div>
      </div>


      <Dialog visible={showMessagedelete} onHide={() => setShowMessageDelete(false)} position="top" footer={dialogFooterDelete} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
        <div className="flex align-items-center flex-column pt-6 px-3">
          <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
          <h5>Delete Successful!</h5>
          <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
            Tarea borrada con exito.
          </p>
        </div>
      </Dialog>



    </>
  );
};

export default ListaTask;
