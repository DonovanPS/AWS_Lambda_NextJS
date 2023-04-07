import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import router from 'next/router';



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
  const [showMessageUpdateConfirm, setShowMessageUpdateConfirm] = useState(false);

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




  const actualizarBD = async (id: string): Promise<void> => {
    console.log(id);





    try {
      const response = await fetch(`https://1xxfiae67d.execute-api.us-east-1.amazonaws.com/tasks/${id}`);

      const data2 = await response.json();

      setId(data2.body.id);
      setTitle(data2.body.title);
      setDescription(data2.body.description);
      setShowMessageUpdate(true);

    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }

  const updateDB = async () => {

    const task = {
      id: id,
      title: title,
      description: description,

    };


    try {
      const response = await fetch(`https://1xxfiae67d.execute-api.us-east-1.amazonaws.com/tasks/${id}`, {
        method: 'PUT',
        body: JSON.stringify(task),
      });
      setShowMessageUpdateConfirm(true);

    } catch (error) {
      console.error('Error al actualizar tarea:', error);
    }




  }

    const handleClick = () => {
      console.log('The link was clicked.');
      
    router.reload();
  };


  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(`title: ${title}, description: ${description}`);
  }



  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://1xxfiae67d.execute-api.us-east-1.amazonaws.com/tasks');
        const data = await response.json();
        setTasks(data.body.tasks); // Actualiza el estado con los datos obtenidos

        //console.log(data.body.tasks);



      } catch (error) {
        console.error('Error fetching tasks:', error);
      }


    };

    fetchTasks();




  }, [id, title, description]);

  const dialogFooterDelete = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => handleClick()} /></div>;
  const dialogFooterUpdate = <div className="flex justify-content-center"><Button label="Cancelar" className="p-button-text" autoFocus onClick={() => setShowMessageUpdate(false)} /><Button label='Actualizar' onClick={() => updateDB()} /></div>;
  const dialogFooterUpdateConfirm = (<div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => { setShowMessageUpdateConfirm(false); setShowMessageUpdate(false); handleClick();}} /></div>);


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
                <Button onClick={() => actualizarBD(rowData.id)} type="submit" label="Actualizar" className="mt-2" />
              )}
            />
            <Column
              body={rowData => (
                <Button onClick={() => eliminarBD(rowData.id)} type="submit" label="Borrar" className="mt-2" />
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



      <Dialog visible={showMessageupdate} onHide={() => setShowMessageUpdate(false)} position="top" footer={dialogFooterUpdate} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '1000px' }}>
        <div className="flex align-items-center flex-column pt-6 px-3">

          <h5>Actualizar</h5>
          <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
          </p>


          <form onSubmit={handleSubmit}>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <InputText value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titulo" />
            </div>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <InputText value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripcion" />
            </div>

          </form>
        </div>
      </Dialog>

      <Dialog visible={showMessageUpdateConfirm} onHide={() => setShowMessageDelete(false)} position="top" footer={dialogFooterUpdateConfirm} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
        <div className="flex align-items-center flex-column pt-6 px-3">
          <i className="pi pi-refresh" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
          <h5>Delete Successful!</h5>
          <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
            Tarea <b>{title}</b> con descripción <b>{description}</b> ; Actualizada con exito.
          </p>
        </div>
      </Dialog>




    </>
  );
};

export default ListaTask;
